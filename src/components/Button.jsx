import React from "react";

export default function Button({
  name,
  type,
  text,
  onClick,
  className = "bg-white hover:bg-amber-100",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      name={name}
      className={`flex-1 text-md rounded-2xl border-1 px-5 py-2 ${className}`}
    >
      {text}
    </button>
  );
}
