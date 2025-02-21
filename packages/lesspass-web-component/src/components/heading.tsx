export function Title({
  children,
  className = "",
  ...props
}: React.ComponentProps<"h1">) {
  return (
    <h1
      className={`text-2xl font-bold xs:truncate xs:tracking-tight ${className}`}
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
      className={`text-lg xs:truncate xs:tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}
