import { forwardRef } from "react";

export function CheckboxGroup({
  children,
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={`flex items-center gap-2 py-1.5 pl-1 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CheckboxItem({
  children,
  className = "",
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={`flex items-center gap-1 ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CheckboxProps extends React.ComponentProps<"input"> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ ...props }, ref) => {
    return (
      <div className="group grid size-4 grid-cols-1">
        <input
          type="checkbox"
          ref={ref}
          className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-500 checked:bg-blue-500 indeterminate:border-blue-500 indeterminate:bg-blue-500 focus:outline-2 focus:outline-offset-2 focus:outline-blue-500 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
          {...props}
        />
        <svg
          fill="none"
          viewBox="0 0 14 14"
          className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-checked:opacity-100"
          />
          <path
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-0 group-has-indeterminate:opacity-100"
          />
        </svg>
      </div>
    );
  },
);
