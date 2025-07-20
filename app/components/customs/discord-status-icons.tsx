export function DiscordStatusIcons() {
  return (
    <svg
      viewBox="0 0 1 1"
      aria-hidden="true"
      className="absolute pointer-events-none w-0 h-0 -top-px -left-px -bottom-px -right-px"
    >
      <mask id="svg-mask-status-idle" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
        <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
        <circle fill="black" cx="0.25" cy="0.25" r="0.375" />
      </mask>

      <mask id="svg-mask-status-dnd" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
        <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
        <rect fill="black" x="0.125" y="0.375" width="0.75" height="0.25" rx="0.125" ry="0.125" />
      </mask>

      <mask id="svg-mask-status-online" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
        <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
      </mask>

      <mask
        id="svg-mask-status-online-mobile"
        maskContentUnits="objectBoundingBox"
        viewBox="0 0 1 1"
      >
        <rect fill="white" x="0" y="0" width="1" height="1" rx="0.1875" ry="0.125" />
        <rect fill="black" x="0.125" y="0.16666666666666666" width="0.75" height="0.5" />
        <ellipse
          fill="black"
          cx="0.5"
          cy="0.8333333333333334"
          rx="0.125"
          ry="0.08333333333333333"
        />
      </mask>

      <mask id="svg-mask-status-offline" maskContentUnits="objectBoundingBox" viewBox="0 0 1 1">
        <circle fill="white" cx="0.5" cy="0.5" r="0.5" />
        <circle fill="black" cx="0.5" cy="0.5" r="0.25" />
      </mask>
    </svg>
  );
}
