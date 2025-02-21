export function Field({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="flex flex-col gap-2 mb-3" {...props}>
      {children}
    </div>
  );
}

export function Label({ children, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className="block text-nowrap text-sm/6 font-medium text-gray-900"
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
    <div className={`text-sm text-red-500 -mt-2 ${className}`} {...props}>
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
    <div className={`text-sm text-gray-700 -mt-2 ${className}`} {...props}>
      {message}
    </div>
  );
}
