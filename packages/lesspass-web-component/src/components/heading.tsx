export function Title({
  children,
  className = "",
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={`xs:truncate xs:tracking-tight text-lg/7 text-gray-950 sm:text-base/7 dark:text-white ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}
