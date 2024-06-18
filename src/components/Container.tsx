export function Container({ className, ...props }: any) {
  return (
    <div
      className={`container ${className}`}
      {...props}
    />
  );
}
