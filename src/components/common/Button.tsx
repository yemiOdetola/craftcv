import Link from 'next/link';

export function Button({ href, className, ...props }: any) {
  className = `inline-flex justify-center rounded bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none transition duration-500  ${className}`;

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  );
}
