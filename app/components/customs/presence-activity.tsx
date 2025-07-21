import { type Types } from "use-lanyard";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/magicui/avatar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/magicui/card";
import { ddgImgProxy, getAssetUrl, getDiscordAssetUrl } from "~/lib/utils";
import { BlurFade } from "~/components/magicui/blur-fade";
import { useGlobalTimer } from "~/hooks/use-duration";
import { IconSpotify } from "~/components/icons/icon-spotify";
import { useMemo } from "react";
import { IconYtMusic } from "../icons/icon-yt-music";

interface Props {
  index: number;
  presence?: Types.Presence;
  activity: Types.Activity;
}

export function PresenceActivity({ index, presence, activity }: Props) {
  const currentTime = useGlobalTimer();

  const getIconUrl = () => {
    if (isSpotify()) {
      return ddgImgProxy(presence?.spotify?.album_art_url ?? "");
    }

    if (activity.type === 0 && !isNaN(+(activity.assets?.large_image ?? ""))) {
      return getDiscordAssetUrl(
        activity.application_id,
        activity.assets?.large_image
      );
    }

    return getAssetUrl(activity.assets?.large_image);
  };

  const getActivityLabel = () => {
    // https://discord.com/developers/docs/events/gateway-events#activity-object-activity-types
    switch (activity.type) {
      case 0:
        return "Playing";
      case 1:
        return "Streaming";
      case 2:
        const name = isSpotify() ? "Spotify" : activity.state;
        return "Listening to " + name;
      case 3:
        return "Watching";
      case 4:
        return "Custom";
      case 5:
        return "Competing";
    }
  };

  const isSpotify = () => {
    return activity.type === 2 && activity.id == "spotify:1";
  };

  const duration = useMemo(() => {
    if (!activity.timestamps?.start) return "";

    const durationMs = currentTime - activity.timestamps.start;
    const totalSeconds = Math.floor(durationMs / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    let durationStr = "";
    if (hours > 0) {
      durationStr += `${hours}:`;
    }

    durationStr += `${String(minutes).padStart(2, "0")}:${String(
      seconds
    ).padStart(2, "0")}`;
    return durationStr;
  }, [currentTime, activity.timestamps?.start]);

  return (
    <BlurFade delay={0.25 * index} inView>
      <Card
        className={`transition-transform duration-300 ease-in-out gap-0 w-[calc(100%-2.5rem)] lg:w-[calc(100%-5rem)] h-fit
          mx-5 p-2 bg-accent shadow-none border-border hover:scale-[103%] my-2
      `}
      >
        <CardHeader className="px-0">
          <CardTitle className="flex items-center gap-1 font-extrabold text-sm">
            <span>{getActivityLabel()} </span>
            {isSpotify() && (
              <IconSpotify className="text-muted-foreground size-4" />
            )}
            {!isSpotify() && activity.type === 2 && (
              <IconYtMusic className="text-muted-foreground size-4" />
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex gap-2 p-0">
          <Avatar className="rounded-lg w-[4rem] h-full">
            <AvatarImage src={getIconUrl()} className="object-cover" />
            <AvatarFallback className="bg-transparent text-xs">
              App Icon
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-snug text-xs">
            <h2 className="font-extrabold line-clamp-1 text-sm">
              {activity.name}
            </h2>
            <div
              title={activity.details}
              className={`${
                activity.type === 2 && "font-extrabold"
              } leading-tight line-clamp-1`}
            >
              {activity.details}
            </div>
            <div
              title={activity.state}
              className="leading-tight line-clamp-1 force-break"
            >
              {activity.state}
            </div>
            <div className="text-green-500 font-extrabold">{duration}</div>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
