import { useContext } from "react";
import { TimerContext } from "~/contexts/timer-provider";

export const useGlobalTimer = () => {
  const currentTime = useContext(TimerContext);

  if (currentTime === null) {
    throw new Error("useGlobalTimer must be used within a TimerProvider");
  }

  return currentTime;
};
