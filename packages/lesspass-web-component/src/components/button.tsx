import React from "react";
import { Link } from "react-router";

export function Button({
  children,
  className = "",
  outline = false,
  danger = false,
  to,
  ...props
}: {
  children: React.ReactNode;
  outline?: boolean;
  danger?: boolean;
  to?: string;
} & React.ComponentProps<"button">) {
  const bg = outline ? "bg-white" : danger ? "bg-red-400" : "bg-blue-500";
  const text = danger
    ? "text-red-500"
    : outline
      ? "text-gray-900"
      : "text-white";
  const ringBase = "rounded-md shadow-xs ring-1 ring-inset";
  const ringColor = danger
    ? "ring-red-500"
    : outline
      ? "ring-gray-300"
      : "ring-blue-500";
  const hover = outline
    ? danger
      ? "hover:ring-2"
      : "hover:bg-gray-200"
    : "hover:bg-blue-400";
  const focusBase = "focus:outline-2 focus:-outline-offset-2";
  const focus = outline ? "focus:outline-blue-500" : "focus:outline-blue-400";

  const classes = `flex items-center gap-1 px-2.5 py-2 disabled:opacity-50 text-sm text-nowrap font-semibold  ${bg} ${text} ${ringBase} ${ringColor} ${hover} ${focusBase} ${focus} ${className}`;
  if (to === undefined) {
    return (
      <button {...props} className={classes}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}
