import { AnimatedSpan, Terminal, TypingAnimation } from "~/components/magicui/terminal";

export function SplashScreen() {
  return (
    <Terminal>
      <span>
        <span className="text-sky-600 dark:text-sky-500">kiizuha@kanazawa</span>
        <TypingAnimation>&gt; bun install @kiizuha/his-website</TypingAnimation>
      </span>

      <AnimatedSpan delay={2000} className="text-green-600 dark:text-green-500">
        <span>✔ Project downloaded.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={2500} className="text-green-600 dark:text-green-500">
        <span>✔ Verifying the project.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={3000} className="text-green-600 dark:text-green-500">
        <span>✔ Project verified.</span>
      </AnimatedSpan>

      <TypingAnimation delay={4000} className="text-muted-foreground">
        Project is currently running!
      </TypingAnimation>
    </Terminal>
  );
}
