"use client";

import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <div
      className="absolute min-h-screen min-w-[100vw]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="max-w-80 mx-auto my-[6%] bg-white p-2 rounded-md">
        {" "}
        <button
          title="close"
          className="w-8 h-8 flex items-center justify-center rounded-full text-white bg-gray-600 float-right"
          onClick={() => {
            router.back();
          }}
        >
          x
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}
