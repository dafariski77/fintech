import React from "react";

export default function FieldGroup({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-y-4">
      {children}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
