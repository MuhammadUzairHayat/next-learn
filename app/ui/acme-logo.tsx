import { Poppins } from "next/font/google";
import { poppins } from "./fonts";
export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white gap-2`}
    >
        <div className="next-logo" />
        <p className={`${poppins.className} text-[30px] font-bold`}>Next.JS</p>
    </div>
  );
}
