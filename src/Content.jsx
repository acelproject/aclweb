import { motion } from "framer-motion";

export default function Content({ img, role, decs }) {
  return (
    <>
      <motion.img
        src={img}
        alt=""
        className="w-full h-72 rounded-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0,
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
      />
      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0,
        opacity: { duration: 1 },
        ease: "easeIn",
        duration: 1,
      }}
      >
        <div className="italic font-semibold text-slate-800">{role}</div>
        <div className="mt-2 text-slate-600">{decs}</div>
      </motion.div>
    </>
  );
}
