export function Container({ className, ...props }: any) {
  return (
    <div
      className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    />
  );
}
