import { FormEvent } from "react";
import AccountForm from "./components/AccountForm";
import AdressForm from "./components/AdressForm";
import useMultistepForm from "./components/useMultistepForm";
import UserForm from "./components/UserForm";
import logo from "./pictures/logoSzmeje.png"

function App() {
  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }

  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultistepForm([<UserForm />, <AdressForm />, <AccountForm />]);
  return (
    <div className=" flex w-full">
      <div className="w-2/3 flex justify-center items-center h-screen bg-gray-200">
        <div className="border-8 border-black border-dashed p-12 m-8 rounded-xl max-w-5xl h-auto w-auto">
          <div className="text-black font-black text-2xl">
            {currentStepIndex + 1} / {steps.length}
          </div>
          <form
            onSubmit={onSubmit}
            className=" flex justify-center flex-col gap-12"
          >
            <div className=" flex flex-col gap-16">{step}</div>
            <div className="flex gap-4">
              {!isFirstStep && (
                <button
                  className=" bg-black transition-all duration-200 text-white p-4 pl-12 pr-12 rounded-full text-xl font-bold hover:bg-gray-700"
                  onClick={back}
                  type="button"
                >
                  Wróć
                </button>
              )}
              {isLastStep ? (
                <button
                  className=" bg-green-800 transition-all duration-200 text-white p-4 pl-12 pr-12 rounded-full text-xl font-bold hover:bg-green-700"
                  type="submit"
                >
                  Zakończ
                </button>
              ) : (
                <button
                  className=" bg-black transition-all duration-200 text-white p-4 pl-12 pr-12 rounded-full text-xl font-bold hover:bg-gray-700"
                  type="submit"
                >
                  Dalej
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className=" flex justify-center items-center w-1/3">
        <div className=" flex justify-center items-center text-6xl font-black gap-4">
          <img src={logo} />
          <div className=" h-[225px]">
            <p>Uczeń</p>
            <p>Szmeje</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
