import Link from 'next/link';

export function Button({ href, disabled, className, ...props }: any) {
  className = `inline-flex justify-center rounded bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none transition duration-500  ${className}`;

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button
      disabled={disabled}
      className={` disabled:cursor-not-allowed disabled:bg-slate-300 ${className}`}
      {...props}
    />
  );
}
