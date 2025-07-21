import { useEffect, useRef, useState } from "react";
import { type Types, useLanyardWS } from "use-lanyard";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/magicui/avatar";
import { ScrollArea } from "~/components/magicui/scroll-area";
import { SectionWindow } from "~/components/customs/section-window";
import { DiscordIconIdle } from "~/components/icons/discord/icon-idle";
import { DiscordIconDnd } from "~/components/icons/discord/icon-dnd";
import { DiscordIconOnline } from "~/components/icons/discord/icon-online";
import { DiscordIconOnlineMobile } from "~/components/icons/discord/icon-online-mobile";
import { DiscordIconOffline } from "~/components/icons/discord/icon-offline";
import { PresenceActivity } from "~/components/customs/presence-activity";
import { getDiscordAvatar, getInitialName } from "~/lib/utils";
import type { SectionProps } from "~/types";

export function ActivitySection({ delay, className, style }: SectionProps) {
  const presence = useLanyardWS("1283321824293421087");
  const activityRef = useRef<HTMLDivElement>(null);
  const [activities, setActivities] = useState<Types.Activity[]>([]);

  const getActivities = () => {
    if (!presence) return [];
    return presence.activities.filter((e) => e.type !== 4);
  };

  const renderDiscordIcon = () => {
    if (!presence) return null;
    switch (presence.discord_status) {
      case "idle":
        return <DiscordIconIdle className="w-full h-full" />;
      case "dnd":
        return <DiscordIconDnd className="w-full h-full" />;
      case "online":
        return <DiscordIconOnline className="w-full h-full" />;
      case "offline":
        return <DiscordIconOffline className="w-full h-full" />;
      default:
        return <DiscordIconOnlineMobile className="w-full h-full" />;
    }
  };

  useEffect(() => {
    setActivities(getActivities());
  }, [presence]);

  return (
    <SectionWindow
      title="Recent Activities"
      delay={delay}
      className={className}
      contentClassName="flex flex-col gap-3 overflow-hidden"
      style={style}
    >
      <div className="flex flex-col py-5 bg-accent/60 border-transparent text-accent-foreground rounded-lg gap-5">
        <div className="flex gap-2.5 mx-5">
          <div className="relative">
            <Avatar className="size-20">
              <AvatarImage
                src={getDiscordAvatar(presence?.discord_user)}
                className="object-cover"
              />
              <AvatarFallback>{getInitialName(presence?.discord_user)}</AvatarFallback>
            </Avatar>
            <div className="absolute -right-0.5 bottom-0 ">{renderDiscordIcon()}</div>
          </div>
          <div className="flex flex-col">
            <div className="text-lg font-extrabold">{presence?.discord_user.global_name}</div>
            <div className="text-sm">{presence?.discord_user.username}</div>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xs font-extrabold uppercase mx-5 pb-2">Activities</h3>
          <ScrollArea
            ref={activityRef}
            className="h-[20rem] relative flex flex-col justify-center [&>div>div>div>div:nth-child(n+3)]"
          >
            {activities.map((activity, index) => (
              <PresenceActivity
                key={`activity-${activity.state}-${index}`}
                index={index}
                presence={presence}
                activity={activity}
              />
            ))}
            <div className="italic ml-5 mt-2 text-neutral-400">
              {presence?.discord_status === "offline" && <span>He is currently offline</span>}
              {presence?.discord_status !== "offline" && activities.length === 0 && (
                <span>He is online, but no activities, probably idle</span>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </SectionWindow>
  );
}
