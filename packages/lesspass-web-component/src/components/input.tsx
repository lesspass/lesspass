import { forwardRef } from "react";

export const inputStyle =
  "block w-full rounded-md bg-transparent dark:bg-gray-800 px-3 py-1.5 text-base/6 text-gray-950 dark:text-white outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6";

interface InputProps extends React.ComponentProps<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <input
        type="text"
        autoCorrect="off"
        autoCapitalize="none"
        ref={ref}
        className={inputStyle}
        {...props}
      />
    );
  },
);
