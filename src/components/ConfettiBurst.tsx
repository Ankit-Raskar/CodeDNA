import { useEffect } from "react";

export function ConfettiBurst({ trigger }: { trigger: unknown }) {
  useEffect(() => {
    if (!trigger) return;
    const end = Date.now() + 800;
    const colors = ["#6366F1", "#06B6D4", "#8B5CF6", "#F59E0B", "#EC4899"];
    
    import("canvas-confetti").then((module) => {
      const confetti = module.default;
      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 70,
          origin: { x: 0, y: 0.7 },
          colors,
          startVelocity: 55,
          scalar: 1.1,
        });
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 70,
          origin: { x: 1, y: 0.7 },
          colors,
          startVelocity: 55,
          scalar: 1.1,
        });
        if (Date.now() < end) requestAnimationFrame(frame);
      };
      // big initial pop
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.4 },
        colors,
        startVelocity: 45,
        scalar: 1.2,
      });
      requestAnimationFrame(frame);
    });
  }, [trigger]);
  return null;
}
