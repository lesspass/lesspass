import { forwardRef } from "react";

export const inputStyle =
  "block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6";

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

export const InputNumber = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        <button
          type="button"
          onClick={() => {
            if (
              typeof ref !== "function" &&
              ref !== null &&
              ref.current !== null
            ) {
              const currentValue = Number(ref.current.value) || 0;
              ref.current.value = String(currentValue - 1);
            }
          }}
          id="decrement-button"
          className="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          ref={ref}
          inputMode="numeric"
          type="text"
          id="counter-input"
          className="shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center"
          {...props}
        />
        <button
          type="button"
          id="increment-button"
          onClick={() => {
            if (
              typeof ref !== "function" &&
              ref !== null &&
              ref.current !== null
            ) {
              const currentValue = Number(ref.current.value) || 0;
              ref.current.value = String(currentValue + 1);
            }
          }}
          className="shrink-0 bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 inline-flex items-center justify-center border border-gray-300 rounded-md h-5 w-5 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        >
          <svg
            className="w-2.5 h-2.5 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
    );
  },
);
