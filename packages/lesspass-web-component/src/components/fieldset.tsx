export function Field({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="mb-3 flex flex-col gap-2" {...props}>
      {children}
    </div>
  );
}

export function Label({ children, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className="block text-sm/6 font-medium text-nowrap text-gray-900"
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
    <div className={`-mt-2 text-sm text-red-500 ${className}`} {...props}>
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
    <div className={`-mt-2 text-sm text-gray-700 ${className}`} {...props}>
      {message}
    </div>
  );
}
