import { forwardRef } from "react";

interface SelectProps extends React.ComponentProps<"select"> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="grid grid-cols-1">
        <select
          ref={ref}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-transparent py-1.5 pr-8 pl-3 text-base/6 text-zinc-950 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-500 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:*:bg-zinc-800 dark:*:text-white"
          {...props}
        >
          {children}
        </select>
      </div>
    );
  },
);
