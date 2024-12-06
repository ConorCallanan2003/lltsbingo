import React, { useEffect, useState } from "react";
import "./snow.css";

const data = [
  { id: 1, value: "BIG MUSICAL NUMBER", color: "#d20000" },
  { id: 2, value: "AUDIENCE IN SANTA HATS", color: "#008600" },
  { id: 3, value: "VERY CONFIDENT KID", color: "#d2a800" },
  { id: 4, value: "KID WITH STRONG ACCENT", color: "#0052eb" },
  { id: 5, value: "TOY FALLS OVER", color: "#b93c74" },
  { id: 6, value: "TOY DOESN'T WORK", color: "#953737" },
  { id: 7, value: "PADDY IS HAVING MORE FUN THAN KIDS", color: "#24bcd7" },
  { id: 8, value: "PADDY CHANGES JUMPER", color: "#e08e00" },
  { id: 9, value: "ONE FOR EVERYONE ...", color: "#8704bf" },
  { id: 10, value: "CHILD DANCE GROUP", color: "#ff8454" },
  { id: 11, value: "AWKWARD CHILD MEETS CELEB INTERACTION", color: "#83953b" },
  { id: 12, value: "TEARS (YOU)", color: "#0072a0" },
  { id: 13, value: "TEARS (CHILD)", color: "#590d88" },
  { id: 14, value: "THE AD BREAK LASTS AGES", color: "#3ac5a7" },
  { id: 15, value: "CHILD GOES AWOL", color: "#7fcba1" },
  { id: 16, value: "AUDIENCE MEMBER MAKES A WEIRD FACE", color: "#de4f4f" },
  { id: 17, value: "BOOK REVIEW AT HIGH SPEED", color: "#8033b7" },
];

export default function App() {
  const queryParameters = new URLSearchParams(window.location.search);

  const [chosenValues, setChosenValues] = useState<number[]>(
    JSON.parse(localStorage.getItem("chosenItems") || "[]")
  );

  const [completedItems, setCompletedItems] = useState<number[]>([]);

  const [showModal, setShowModal] = useState(
    (JSON.parse(localStorage.getItem("chosenItems") || "[]") as number[])
      .length !== 9
  );

  const addChosenItem = (item: number) => {
    if (chosenValues.length < 9) {
      localStorage.setItem(
        "chosenItems",
        JSON.stringify([...chosenValues, item])
      );
      setChosenValues(JSON.parse(localStorage.getItem("chosenItems") || "[]"));
    }
  };

  const removeChosenItem = (item: number) => {
    setChosenValues((prev) => {
      const newList = prev.filter((value) => value !== item);
      localStorage.setItem("chosenItems", JSON.stringify(newList));
      return newList;
    });
  };

  return (
    <div className="relative">
      <div className="absolute w-full h-full overflow-hidden">
        <section className="sleigh">
          <div className="santa">🦌</div>
          <div className="santa1">🦌</div>
          <div className="santa2">🦌</div>
          <div className="santa3">🦌</div>
          <div className="santa4">🦌</div>
          <div className="santa5">
            <div className="fa-solid fa-sleigh"></div>
          </div>
        </section>
        <section className="snow">
          <div className="snowflake fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake1 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake2 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake3 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake4 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake5 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake6 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake7 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake8 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake9 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake10 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake11 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake12 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake13 fa-regular fa-snowflake bg-white rounded-full"></div>
          <div className="snowflake14 fa-regular fa-snowflake bg-white rounded-full"></div>
        </section>
        <section className="mountains">
          <div className="mt1">
            <div className="mtsnow1"></div>
            <div className="snow-peak-1a"></div>
            <div className="snow-peak-1b"></div>
          </div>
          <div className="mt2">
            <div className="snow2"></div>
            <div className="snow-peak-2a"></div>
            <div className="snow-peak-2b"></div>
            <div className="snow-peak-2c"></div>
          </div>
          <div className="mt3">
            <div className="snow3"></div>
            <div className="snow-peak-3a"></div>
            <div className="snow-peak-3b"></div>
            <div className="snow-peak-3c"></div>
            <div className="snow-peak-3d"></div>
          </div>
          <div className="mt4">
            <div className="snow4"></div>
            <div className="snow-peak-4a"></div>
            <div className="snow-peak-4b"></div>
          </div>
          <div className="mt5">
            <div className="snow5"></div>
            <div className="snow-peak-5a"></div>
            <div className="snow-peak-5b"></div>
            <div className="snow-peak-5c"></div>
          </div>
          <div className="mt6">
            <div className="snow6"></div>
            <div className="snow-peak-6a"></div>
            <div className="snow-peak-6b"></div>
            <div className="snow-peak-6c"></div>
            <div className="snow-peak-6d"></div>
          </div>
        </section>
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-center items-center px-6 md:pb-0 pb-[80px]">
        <img
          width={70}
          height={70}
          src="hat.png"
          className="sm:hidden absolute top-8 right-4"
        />
        <h1 className="pb-20 text-6xl font-bold text-white text-center">
          TOY SHOW BINGO
        </h1>
        <div className="grid z-20 grid-cols-3 justify-center gap-2 sm:gap-4">
          {data
            .filter((item) => chosenValues.includes(item.id))
            .map((item) => {
              return (
                <div className="relative">
                  {completedItems.includes(item.id) && (
                    <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-green-500 rounded-lg flex justify-center opacity-80 items-center"></div>
                  )}
                  <div
                    key={item.id}
                    onClick={() =>
                      setCompletedItems((prev) => {
                        if (prev.includes(item.id)) {
                          return prev.filter((p) => p !== item.id);
                        }
                        return [...prev, item.id];
                      })
                    }
                    className={`px-4 border-[10px] md:border-[20px] border-green-600 bg-red-600 w-[110px] h-[110px] md:h-[250px] md:w-[250px] md:text-2xl text-xs text-center font-bold md:hover:scale-105 flex items-center justify-center select-none cursor-pointer rounded-2xl text-white duration-200 opacity-90 md:hover:opacity-100`}
                  >
                    {item.value}
                  </div>
                </div>
              );
            })}

          {showModal && (
            <div
              onClick={() => {
                if (chosenValues.length === 9) setShowModal(false);
              }}
              className="absolute bg-transparent w-full h-full z-20 backdrop-blur-sm top-0 bottom-0 right-0 left-0 flex justify-center items-center"
            >
              <div className="flex flex-col  w-5/6">
                <div className="w-full -mb-4 pb-4 flex items-center justify-center pt-2 bg-gray-200 text-black cursor-pointer text-2xl font-bold rounded-t-2xl">
                  <h1 className="text-4xl pl-1 font-bold pb-3 pt-2">
                    CARDS ({chosenValues.length}/9)
                  </h1>
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="md:w-[500px] w-full h-[500px] overflow-scroll z-40 p-1 bg-white rounded-xl shadow-2xl flex flex-col gap-1"
                >
                  {data.map((item) => {
                    const chosen = chosenValues.includes(item.id);

                    return chosen ? (
                      <div
                        className="px-3 py-2 font-bold bg-red-500 text-white rounded-lg select-none cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeChosenItem(item.id);
                        }}
                      >
                        {item.value}
                      </div>
                    ) : (
                      <div
                        className="px-2 py-2 font-bold select-none cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();

                          addChosenItem(item.id);
                        }}
                      >
                        {item.value}
                      </div>
                    );
                  })}
                </div>
                {chosenValues.length === 9 ? (
                  <div className="w-full -mt-4 pt-6 flex items-center justify-center pb-2 bg-green-500 text-white cursor-pointer text-2xl font-bold rounded-b-2xl">
                    DONE
                  </div>
                ) : (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="w-full -mt-4 pt-6 flex items-center justify-center pb-2 bg-red-500 text-white cursor-pointer text-2xl font-bold rounded-b-2xl"
                  >
                    CHOOSE {9 - chosenValues.length} MORE
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex md:w-[780px] pt-4 gap-2 w-full sm:px-0 justify-between z-10">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="text-2xl bg-white md:text-3xl w-1/2 font-bold  text-center py-4 rounded-lg px-6"
          >
            CHOICES
          </button>
          <button
            onClick={() => {
              setCompletedItems([]);
            }}
            className="text-2xl bg-white md:text-3xl w-1/2 font-bold  text-center py-4 rounded-lg px-6"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
}
