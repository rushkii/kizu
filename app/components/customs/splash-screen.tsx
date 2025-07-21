import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "~/components/magicui/terminal";

export function SplashScreen() {
  return (
    <Terminal className="break-all w-[20rem] md:w-[25rem] lg:w-[30rem] text-xs md:text-sm">
      <span>
        <span className="text-sky-600 dark:text-sky-500">kiizuha@kanazawa</span>
        <span>:~$ </span>
        <TypingAnimation duration={30}>bun install kiizuha</TypingAnimation>
      </span>

      <AnimatedSpan delay={800} className="text-green-600 dark:text-green-500">
        <span>✔ Project downloaded.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1300} className="text-green-600 dark:text-green-500">
        <span>✔ Verifying the project.</span>
      </AnimatedSpan>

      <AnimatedSpan delay={1800} className="text-green-600 dark:text-green-500">
        <span>✔ Project verified.</span>
      </AnimatedSpan>

      <TypingAnimation
        delay={2500}
        duration={20}
        className="text-muted-foreground"
      >
        Project is currently running!
      </TypingAnimation>
    </Terminal>
  );
}
