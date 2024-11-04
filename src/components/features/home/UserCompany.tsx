import Image from "next/image";
import React from "react";

export default function UserCompany({
  withBorder = true,
}: {
  withBorder?: boolean;
}) {
  return (
    <div className={`${withBorder && "border-e"} px-14 py-7`}>
      <Image
        src={"/assets/dummy/sponsor/spotify.png"}
        alt="sponsor"
        width={100}
        height={34}
      />
    </div>
  );
}
