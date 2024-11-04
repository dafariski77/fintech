import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-6">
      <div className="px-0 md:px-36">{children}</div>
    </div>
  );
}
