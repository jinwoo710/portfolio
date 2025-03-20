"use client";
import Image from "next/image";

export interface TrexProps {
  state: "RIGHT" | "LEFT";
}

export default function TRex({ state }: TrexProps) {
  return (
    <div className="fixed left-1/3 bottom-32 z-40 transform -translate-x-1/2">
      <Image
        src={`/images/rex_${state}.png`}
        alt="T-Rex"
        width={80}
        height={80}
      />
    </div>
  );
}
