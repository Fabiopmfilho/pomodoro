import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface ITimer {
  start: any;
  duration: any;
  colorOne: string;
  key: any;
  complete: () => void;
}

export const Timer = ({ start, duration, colorOne, key, complete }: ITimer) => {
  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <>
      <CountdownCircleTimer
        key={key}
        isPlaying={start}
        duration={duration}
        initialRemainingTime={duration}
        colors={[`#${colorOne}`, "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={complete}
      >
        {({ remainingTime }) => (
          <div className="text-4xl">{formatTime(remainingTime)}</div>
        )}
      </CountdownCircleTimer>
    </>
  );
};
