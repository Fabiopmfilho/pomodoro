import { useState } from "react";
import { Timer } from "./Timer";

export const Pomodoro = () => {
  const [start, setStart] = useState(false);
  const [btnText, setBtnText] = useState<String>('Start');
  const [clock, setClock] = useState(0);
  const [key, setKey] = useState(0);

  const durationPomodoro = 0.1 * 60;
  const durationDescanso = 0.2 * 60;

  const changeClockerPomodoro = () => {
    setClock(0);
    setStart(false);
    setKey((prevKey) => prevKey + 1);
  };

  const changeClockerDescanso = () => {
    setClock(1);
    setStart(false);
    setKey((prevKey) => prevKey + 1);
  };

  const startTimer = () => {
    if (start === false) {
      setStart(true);
      setBtnText('Stop')
    }

    if (start === true) {
      setStart(false);
      setKey((prevKey) => prevKey + 1);
      setBtnText('Start')
    }
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
        <Timer
          key={key}
          start={start}
          duration={durationPomodoro}
          colorOne="004777"
          complete={() => {
            console.log("foi 1");
            alert("Success! Now you can relax.");
            setClock(1);
            setKey((prevKey) => prevKey + 1);
          }}
        />
      ) : (
        <Timer
          key={key}
          start={start}
          duration={durationDescanso}
          colorOne="F7B801"
          complete={() => {
            console.log("foi 2");
            alert("Finish! Now you must focus.");
            setClock(0);
            setKey((prevKey) => prevKey + 1);
          }}
        />
      )}

      <button
        className="flex text-white text-3xl bg-blue-700 p-4 rounded-full mt-4"
        onClick={startTimer}
      >
        {btnText}
      </button>
    </div>
  );
};
