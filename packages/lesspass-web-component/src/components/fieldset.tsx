export function Field({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="mb-3 flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
}

export function Label({
  children,
  className = "",
  ...props
}: React.ComponentProps<"label">) {
  return (
    <label
      className={`block text-sm/6 font-medium text-nowrap text-gray-900 dark:text-gray-50 ${className}`}
      {...props}
    >
      {children}
    </label>
  );
}

export function ErrorMessage({
  message,
  className = "",
  ...props
}: { message?: string } & React.ComponentProps<"div">) {
  if (!message) return null;
  return (
    <div
      className={`-mt-2 text-sm/6 text-red-500 dark:text-red-400 ${className}`}
      {...props}
    >
      {message}
    </div>
  );
}

export function HelpMessage({
  message,
  className = "",
  ...props
}: { message?: string } & React.ComponentProps<"div">) {
  return (
    <div
      className={`-mt-2 text-sm/6 text-zinc-500 dark:text-zinc-400 ${className}`}
      {...props}
    >
      {message}
    </div>
  );
}
