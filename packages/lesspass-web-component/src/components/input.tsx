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
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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
          className="max-w-[2.5rem] shrink-0 border-0 bg-transparent text-center text-sm font-normal text-gray-900 focus:ring-0 focus:outline-none dark:text-white"
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
          className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:ring-gray-100 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        >
          <svg
            className="h-2.5 w-2.5 text-gray-900 dark:text-white"
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
