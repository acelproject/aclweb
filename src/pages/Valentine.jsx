import { useState } from "react";
import img2 from "../assets/bear1.gif";
import img1 from "../assets/bearsleep.gif";
import sound from "../assets/bsound.mp3";

export default function Valentine() {
  const [state, setState] = useState(16);
  const [yes, setYes] = useState(false);
  return (
    <div className="h-[100vh] bg-pink-50 justify-center flex items-center">
      <div className="hidden">
        <audio src={sound} autoPlay loop controls></audio>
      </div>
      <div className="flex gap-5 justify-center flex-col items-center">
        <div>
          {yes ? (
            <img src={img1} alt="" className="w-28" />
          ) : (
            <img src={img2} alt="" className="w-28" />
          )}
        </div>
        <div className="font-bold text-pink-600">
          {yes ? "yeyyy, Lets go babyyyy!! " : "Will you be my Valentine? "}
        </div>
        <div className={`${yes ? "hidden" : ""}`}>
          <button
            className={`bg-green-500 px-5 rounded-md shadow-md py-1 me-3 font-semibold text-white`}
            style={{ fontSize: `${state}px` }}
            onClick={() => setYes(true)}
          >
            Yes
          </button>
          <button
            className="bg-red-500 px-5 rounded-md shadow-md py-1 font-semibold text-white"
            onClick={() => setState(state + 20)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
