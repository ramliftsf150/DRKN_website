/** A font-independent decorative mark; never announced as content. */
export function DecorativeStar({
  className = "",
  size = 23,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`decorative-star ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 1 15.1 8.9 23 12 15.1 15.1 12 23 8.9 15.1 1 12 8.9 8.9Z" />
    </svg>
  );
}
