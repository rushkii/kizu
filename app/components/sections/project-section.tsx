import { BlurFade } from "~/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/magicui/card";
import { ScrollArea } from "~/components/magicui/scroll-area";
import { SectionWindow } from "~/components/customs/section-window";
import type { ProjectData, SectionProps } from "~/types";

export function ProjectSection({ delay, className, style }: SectionProps) {
  /*
    note: we use backtick (``) to prevent the
    formatter to make a newline when text is too long.
  */
  const data: ProjectData[] = [
    {
      title: "HRIS (or SISMA)",
      description: `A human resource information system application for Open University Indonesia (known as UT)`,
      content: `This application manage employees who work in UT for managing employee informations such as their personal informations, salary, contract, and duty.`,
    },
    {
      title: "E-BuPot (or E-Tax)",
      description: `A tax management system for Open University Indonesia (known as UT)`,
      content: `This application manage taxations in UT such as calculation tax from salary.`,
    },
    {
      title: "www.gnuweeb.org",
      description: `A GNU/Weeb landing page community website`,
      content: `This website is for GNU community but for the Indonesian weebs, it shows recent chat messages in our Telegram group.`,
    },
    {
      title: "mail.gnuweeb.org",
      description: `An email account management for the GNU/Weeb community members`,
      content: `This website is for GNU community but for the Indonesian weebs, it shows recent chat messages in our Telegram group.`,
    },
    {
      title: "Happy Birthday Kiizuha",
      description: `A simple birthday greeting website`,
      content: `This is a birthday greeting website for me that inspired from RPG-like games such as Blue Archive.`,
    },
  ];

  return (
    <SectionWindow title="Projects" delay={delay} className={className} style={style}>
      <ScrollArea className="h-[30rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-4 w-full">
          {data.map((project, index) => (
            <BlurFade
              key={`project-${project.title}-${index}`}
              delay={0.25 * (index + 3.5)}
              className="w-full h-full"
            >
              <Card key={project.title} className="w-full h-full px-4 py-3 bg-accent/70 gap-2.5">
                <CardHeader className="p-0 gap-0.5">
                  <CardTitle className="text-lg font-bold uppercase">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0 leading-snug">{project.content}</CardContent>
                <CardFooter className="flex-col gap-2"></CardFooter>
              </Card>
            </BlurFade>
          ))}
        </div>
      </ScrollArea>
    </SectionWindow>
  );
}
