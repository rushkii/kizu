interface Props {
  size?: number;
  padding?: number;
  className?: string;
}

export function DiscordIconDnd({ size = 25, padding = 8, className }: Props) {
  const iconSize = 24;
  const radius = iconSize / 2 + padding;
  const center = iconSize / 2 + padding;
  const totalSize = iconSize + padding * 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${totalSize} ${totalSize}`}
      aria-hidden="true"
      className={className}
    >
      <circle cx={center} cy={center} r={radius} fill="currentColor" className="text-accent" />
      <rect
        width={iconSize}
        height={iconSize}
        x={padding}
        y={padding}
        fill="#d83a42"
        mask="url(#svg-mask-status-dnd)"
      />
    </svg>
  );
}
