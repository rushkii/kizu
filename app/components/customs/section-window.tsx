import { BlurFade, type BlurFadeProps } from "~/components/magicui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/magicui/card";
import { MagicCard } from "~/components/magicui/magic-card";
import { useTheme } from "~/hooks/use-theme";
import { cn } from "~/lib/utils";

interface Props extends BlurFadeProps {
  title?: string;
  description?: string;
  contentClassName?: string;
}

export function SectionWindow({
  title,
  description,
  className,
  contentClassName,
  children,
  ...props
}: Props) {
  const { theme } = useTheme();

  return (
    <BlurFade className={cn("w-full h-full", className)} inView {...props}>
      <Card className="h-full shadow-none border-none p-0 mb-5">
        <MagicCard gradientOpacity={0} gradientSize={150} className="h-full">
          {title && (
            <CardHeader className="px-4 pt-4 pb-3">
              <CardTitle className="text-xl font-extrabold uppercase">{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          <CardContent className={cn("w-full h-full px-4", contentClassName)}>
            {children}
          </CardContent>
        </MagicCard>
      </Card>
    </BlurFade>
  );
}
