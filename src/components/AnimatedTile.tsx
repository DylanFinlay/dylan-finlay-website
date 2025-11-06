export default function AnimatedTile({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
  delay?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={className}
      data-aos={animation}
      data-aos-delay={delay}
      suppressHydrationWarning
      style={style}
    >
      {children}
    </div>
  );
}
