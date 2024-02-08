import { useState } from "react";
import Tabs from "./Tabs";
import ContentWrapper from "./ContentWrapper";

export default function MyApp() {
  const [active, setActive] = useState(1);

  const handleActive = (id) => {
    setActive(id);
  };

  return (
    <>
      <div className="w-full h-[100vh] flex justify-center items-center bg-sky-950">
        <div className="bg-white w-6/12 h-96   rounded-sm shadow-md relative flex flex-col px-5 pb-5">
          <div className="w-full flex text-slate-700 font-semibold">
            <Tabs setActive={handleActive} active={active} />
          </div>

          <div className="w-full h-full bg-slate-100 p-5 rounded-lg flex gap-5 justify-center ">
            <ContentWrapper active={active} />
          </div>
        </div>
      </div>
    </>
  );
}
