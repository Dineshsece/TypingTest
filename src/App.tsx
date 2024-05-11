import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import { faker } from "@faker-js/faker";
import RestartButton from "./Components/RestartButton";
import Results from "./Components/Results";
import UserTypings from "./Components/UserTypings";
import useEngine from "./hooks/useEngine";

function App() {
  // const words = faker.random.words(10);

  const GeneratedWords = ({ words }: { words: string }) => {
    return <div className=" text-slate-500">{words}</div>;
  };

  const CountdownTimer = ({ time }: { time: number }) => {
    return <h2 className="text-yellow-500 font-medium">Time: {time}</h2>;
  };

  const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="relative max-w-xl mt-3 text-3xl leading-relaxed">
        {children}
      </div>
    );
  };

  const {state, words, timeLeft, typed} = useEngine()

  return (
    <>
      <CountdownTimer time={timeLeft} />
      <WordsContainer>
        <GeneratedWords words={words} />
        <UserTypings className="absolute inset-0" userInput={typed} />
      </WordsContainer>
      <RestartButton
        className={"ax-auto-mt-10 text-slate-500"}
        onRestart={() => null}
      />
      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
}

export default App;
