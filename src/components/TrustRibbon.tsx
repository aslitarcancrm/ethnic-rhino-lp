export const TrustRibbon = () => {
  return (
    <section className="py-6 bg-secondary/60">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-3 gap-4 text-center text-foreground/90 text-sm">
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">🏆</span>
            <span>Award-Winning Clinic</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">⭐</span>
            <span>5-Star Reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-xl">✓</span>
            <span>CQC Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
};
