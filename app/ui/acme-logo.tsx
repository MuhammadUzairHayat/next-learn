import { inter } from "@/app/ui/fonts";

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white gap-2`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className={`${inter.className} text-[44px] font-bold`}>Next.JS</p>
    </div>
  );
}
