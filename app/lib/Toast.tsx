"use client"; // Required only for this reusable component

import * as React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";

export function Toast({ title, description }: { title: string; description: string }) {
  return (
    <ToastPrimitive.Provider>
      <ToastPrimitive.Root className="bg-gray-800 absolute left-[40vw] right-auto top-5 text-white p-4 rounded-md shadow-md">
        <ToastPrimitive.Title>{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description>{description}</ToastPrimitive.Description>
        <ToastPrimitive.Close className="ml-4 text-red-400 absolute top-2 right-2">X</ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  );
}
