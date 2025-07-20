import { useEffect, useState } from "react";
import { BlurFade } from "~/components/magicui/blur-fade";
import { SplashScreen } from "~/components/customs/splash-screen";
import { ProfileSection } from "~/components/sections/profile-section";
import { ProjectSection } from "~/components/sections/project-section";
import { BlogSection } from "~/components/sections/blog-section";
import { ActivitySection } from "~/components/sections/activity-section";
import { SectionWindow } from "~/components/customs/section-window";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kiizuha Kanazawa" },
    { name: "description", content: "Welcome to Kiizuha's Personal Website" },
  ];
}

export default function Home() {
  const [loaded, setLoaded] = useState(import.meta.env.DEV || false);

  useEffect(() => {
    if (loaded) return;
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full m-2 !mb-14 lg:m-0 xl:!mb-0">
      {loaded ? (
        <div
          className={`
            flex flex-col justify-between lg:grid lg:grid-cols-[repeat(4,_1fr)] lg:grid-rows-[repeat(2,_1fr)]
            w-full h-full max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-[calc(100%_-_10rem)] mx-4 my-6 gap-5
            grid-template`}
        >
          <ProfileSection delay={0.25 * 1} className="[grid-area:profile]" />
          <BlogSection delay={0.25 * 2} className="[grid-area:blog]" />
          <ActivitySection delay={0.25 * 3} className="[grid-area:activity]" />
          <ProjectSection delay={0.25 * 4} className="[grid-area:project]" />
          <SectionWindow title="Coming Soon" delay={0.25 * 5} className="[grid-area:unknown]">
            <div className="flex flex-col items-center justify-center">
              <p className="lg:text-lg text-muted-foreground">Stay Toon :^)</p>
            </div>
          </SectionWindow>
        </div>
      ) : (
        <BlurFade>
          <SplashScreen />
        </BlurFade>
      )}
    </div>
  );
}
