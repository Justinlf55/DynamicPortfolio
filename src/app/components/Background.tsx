const Background: React.FC = () => (
  <>
    <div className="aurora" aria-hidden />
    <div
      className="dot-grid fixed inset-0 z-0 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      aria-hidden
    />
  </>
);

export default Background;
