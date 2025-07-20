import { BlurFade } from "~/components/magicui/blur-fade";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/magicui/avatar";
import { AnimatedShinyText } from "~/components/magicui/animated-shiny-text";
import { ScrollArea } from "~/components/magicui/scroll-area";
import { AnimateByChar } from "~/components/customs/animate-by-char";
import { SectionWindow } from "~/components/customs/section-window";
import type { SectionProps } from "~/types";

export function ProfileSection({ delay, className, style }: SectionProps) {
  return (
    <SectionWindow
      delay={delay}
      className={className}
      contentClassName="flex flex-col gap-5 items-center py-2 px-5 my-5"
      style={style}
    >
      <Avatar className="size-32">
        <AvatarImage src="kizu.jpg" className="object-cover" draggable={false} />
        <AvatarFallback>KK</AvatarFallback>
      </Avatar>
      <AnimateByChar delay={0.4} className="text-2xl font-bold text-sky-500 dark:text-sky-600">
        Kiizuha Kanazawa
      </AnimateByChar>
      <BlurFade delay={0.75} inView>
        <ScrollArea className="h-32 border border-border/0 hover:border-border/50 transition-colors duration-200 rounded-xl py-1 px-2 hover:bg-neutral-800/40">
          I'm a
          <AnimatedShinyText className="inline-flex items-center justify-center transition ease-out hover:text-sky-500 hover:duration-200 hover:dark:text-sky-400 font-bold duration-200 mx-1">
            Front-end Developer
          </AnimatedShinyText>
          with over 2 years of professional experience building dynamic, scalable web applications
          using modern frameworks like Vue and React (and SvelteKit for smaller projects). I enjoy
          creating rich, animated user interfaces and turning designs into fully functional websites
          using reference files from Figma or even just an image.
        </ScrollArea>
      </BlurFade>
    </SectionWindow>
  );
}
