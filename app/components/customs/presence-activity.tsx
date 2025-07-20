import { type Types } from "use-lanyard";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/magicui/avatar";
import { Card, CardContent } from "~/components/magicui/card";
import { ddgImgProxy, getAssetUrl, getDiscordAssetUrl } from "~/lib/utils";
import { BlurFade } from "~/components/magicui/blur-fade";
import { useGlobalTimer } from "~/hooks/use-duration";
import { useMemo } from "react";

interface Props {
  index: number;
  presence?: Types.Presence;
  activity: Types.Activity;
}

export function PresenceActivity({ index, presence, activity }: Props) {
  const currentTime = useGlobalTimer();

  const getIconUrl = () => {
    if (presence?.listening_to_spotify && activity.type === 2) {
      return ddgImgProxy(presence?.spotify?.album_art_url ?? "");
    }

    if (activity.type === 0 && !isNaN(+(activity.assets?.large_image ?? ""))) {
      return getDiscordAssetUrl(activity.application_id, activity.assets?.large_image);
    }

    return getAssetUrl(activity.assets?.large_image);
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

    durationStr += `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    return durationStr;
  }, [currentTime, activity.timestamps?.start]);

  return (
    <BlurFade delay={0.25 * index} inView>
      <Card
        key={index}
        data-card-index={index}
        className={`transition-transform duration-300 ease-in-out cursor-pointer w-[calc(100%-2.5rem)] lg:w-[calc(100%-5rem)] h-20 max-h-20 mx-5 my-2 p-2 bg-neutral-800 shadow-none border-border
          ${index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"}
          hover:scale-[103%]
      `}
      >
        <CardContent className="flex gap-2 p-0">
          <Avatar className="rounded-lg w-[4rem] h-full">
            <AvatarImage src={getIconUrl()} className="object-cover" />
            <AvatarFallback className="bg-transparent">App Icon</AvatarFallback>
          </Avatar>
          <div className="flex flex-col leading-snug text-xs">
            <h2 className="font-extrabold uppercase line-clamp-1">{activity.name}</h2>
            <div
              title={activity.details}
              className={`${activity.type === 2 && "font-extrabold"} leading-tight line-clamp-1`}
            >
              {activity.details}
            </div>

            <div title={activity.state} className="leading-tight line-clamp-1 force-break">
              {activity.state}
            </div>
            <div className="text-green-500 font-extrabold">{duration}</div>
          </div>
        </CardContent>
      </Card>
    </BlurFade>
  );
}
