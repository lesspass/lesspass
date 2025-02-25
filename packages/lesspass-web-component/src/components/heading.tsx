export function Title({
  children,
  className = "",
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={`xs:truncate xs:tracking-tight text-2xl font-bold ${className}`}
      {...props}
    >
      {children}
    </h1>
  );
}

export function SubTitle({
  children,
  className = "",
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={`xs:truncate xs:tracking-tight text-lg ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
