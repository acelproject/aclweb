import { motion } from "framer-motion";

// menu tabs
const tabs = [
  {
    id: 1,
    label: "Kufra",
  },
  {
    id: 2,
    label: "Selena",
  },
  {
    id: 3,
    label: "Atlas",
  },
];

export default function Tabs({ setActive, active }) {
  console.log(active);
  return (
    <>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="w-1/3 text-center py-3 relative cursor-pointer"
          onClick={() => setActive(tab.id)}
        >
          <div
            className={`h-1 w-[100%] bottom-0 left-0 absolute flex justify-center transition`}
          >
            {active === tab.id && (
              <motion.div
                layoutId="bubble"
                className={`w-[70%] h-full bg-sky-400  rounded-md `}
                transition={{ type: "spring", duration: 0.6 }}
              ></motion.div>
            )}
          </div>
          {tab.label}
        </div>
      ))}
    </>
  );
}
