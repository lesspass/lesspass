import { forwardRef } from "react";

interface SelectProps extends React.ComponentProps<"select"> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, ...props }, ref) => {
    return (
      <div className="grid grid-cols-1">
        <select
          ref={ref}
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
          {...props}
        >
          {children}
        </select>
      </div>
    );
  },
);
