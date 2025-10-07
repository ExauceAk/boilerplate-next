import React from "react";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-gray-100  items-center justify-center gap-x-24 p-4 grid grid-cols-2">
      <div className="space-y-8 pl-32 overflow-auto h-full">
        <div className="w-32 h-32  relative rounded-2xl">
          <Image src="/images/logo.png" alt="fond" fill />
        </div>
        {children}
      </div>
      <div className="h-full rounded-2xl bg-cover overflow-hidden relative bg-red mx-8 hide-scrollbar">
        <Image src="/images/log-image.png" alt="fond" fill />
      </div>
    </div>
  );
}
