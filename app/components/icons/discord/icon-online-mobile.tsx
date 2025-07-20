interface Props {
  size?: number;
  padding?: number;
  className?: string;
}

export function DiscordIconOnlineMobile({ size = 25, padding = 8, className }: Props) {
  const iconSize = 24;
  const radius = iconSize / 2 + padding + 18;
  const center = iconSize / 2 + padding + 18;
  const totalSize = iconSize + padding * 2;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${totalSize} ${totalSize + 12}`}
      aria-hidden="true"
      className={className}
    >
      <circle cx={center - 18} cy={center - 12} r={radius - 12} fill="#1e1e1e" />
      <rect
        width={iconSize}
        height={iconSize + 12}
        x={padding}
        y={padding}
        fill="#43a25a"
        mask="url(#svg-mask-status-online-mobile)"
      />
    </svg>
  );
}
