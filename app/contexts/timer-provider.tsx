import { useState, useEffect, createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

const TimerContext = createContext(Date.now());

function TimerProvider({ children }: Props) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <TimerContext.Provider value={currentTime}>{children}</TimerContext.Provider>;
}

export { TimerProvider, TimerContext };
