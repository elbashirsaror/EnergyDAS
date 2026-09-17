export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" fillOpacity="0.12" />
      <path
        d="M13 3L6 13h4l-1 8 8-11h-4l1-7Z"
        fill="currentColor"
      />
    </svg>
  )
}
