import { useState } from "react";
import Tabs from "./Tabs";
import ContentWrapper from "./ContentWrapper";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { DarkMode } from "./context/DarkMode";

export default function MyApp() {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  // const [active, setActive] = useState(1);
  const tabsActive = useSelector((state) => {
    const arr = state.tabs.data;
    const number = arr[arr.length - 1];
    return number;
  });

  // const handleActive = (id) => {
  //   setActive(id);
  // };

  return (
    <>
      <div
        className={`w-full h-[100vh] flex justify-center items-center relative ${
          isDarkMode ? "bg-sky-950" : "bg-white"
        }`}
      >
        <div
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`px-6 py-1 rounded-md absolute m-5 left-0 top-0 ${
            isDarkMode ? "bg-white" : "bg-sky-950 text-white"
          }`}
        >
          {isDarkMode ? "Light" : "Dark"}
        </div>
        <div
          className={`${
            isDarkMode ? "bg-white" : "bg-sky-950 text-white"
          } w-6/12 h-96   rounded-sm shadow-md relative flex flex-col px-5 pb-5`}
        >
          <div className="w-full flex text-slate-700 font-semibold">
            <Tabs active={tabsActive} />
          </div>

          <div className="w-full h-full bg-slate-100 p-5 rounded-lg flex gap-5 justify-center ">
            <ContentWrapper active={tabsActive} />
          </div>
        </div>
      </div>
    </>
  );
}
