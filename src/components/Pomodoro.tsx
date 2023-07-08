import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export const Pomodoro = () => {
  const [start, setStart] = useState(false);
  const [clock, setClock] = useState(0);
  // const [durationPomodoro, setDurationPomodoro] = useState(25 * 60);
  // const [durationDescanso, setDurationDescanso] = useState(5 * 60);

  const durationPomodoro = 25 * 60;
  const durationDescanso = 5 * 60;

  const startTimer = () => {
    if (start === false) {
      setStart(true);
    }

    if (start === true) {
      setStart(false);
    }
  };

  const changeClockerPomodoro = () => {
    setClock(0);
    setStart(false);
    // setDurationPomodoro(25 * 60)
  };

  const changeClockerDescanso = () => {
    setClock(1);
    setStart(false);
    // setDurationDescanso(5 * 60)
  };

  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-xl mb-8">Você não quer aceitar um desafio? 😏</h1>
      <div className="flex gap-10 mb-6 ">
        <button
          className="text-xl text-blue-700 focus:border-b-2 focus:border-[#64748b]"
          onClick={changeClockerPomodoro}
        >
          Pomodoro
        </button>
        <button
          className="text-xl text-orange-500"
          onClick={changeClockerDescanso}
        >
          Descanso
        </button>
      </div>

      {clock === 0 ? (
        <CountdownCircleTimer
          isPlaying={start}
          duration={durationPomodoro}
          initialRemainingTime={durationPomodoro}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => {
            setStart(false);
            console.log("teste");
          }}
        >
          {({ remainingTime }) => (
            <div className="text-4xl">{formatTime(remainingTime)}</div>
          )}
        </CountdownCircleTimer>
      ) : (
        <CountdownCircleTimer
          isPlaying={start}
          duration={durationDescanso}
          initialRemainingTime={durationDescanso}
          colors={["#F7B801", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => console.log("finished")}
        >
          {({ remainingTime }) => (
            <div className="text-4xl">{formatTime(remainingTime)}</div>
          )}
        </CountdownCircleTimer>
      )}

      <button
        className="text-white text-3xl bg-green-900 p-4 rounded-full mt-4"
        onClick={startTimer}
      >
        start
      </button>
    </div>
  );
};
