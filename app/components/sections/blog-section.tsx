import { SectionWindow } from "~/components/customs/section-window";
import type { SectionProps } from "~/types";

export function BlogSection({ delay, className, style }: SectionProps) {
  // TODO: make a list mode toggle just like Discord's community post feature.

  const data = [];

  return (
    <SectionWindow
      title="Recent Blogs"
      delay={delay}
      className={className}
      contentClassName="flex flex-col gap-3"
      style={style}
    >
      {data.length > 0 ? (
        <>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
          <div className="px-3 py-2 bg-accent border-background text-accent-foreground rounded-lg">
            Test
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="lg:text-lg text-muted-foreground">No recent blogs available.</p>
        </div>
      )}
    </SectionWindow>
  );
}
