import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

export const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const createSnowflake = (): Snowflake => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: -10,
      size: Math.random() * 3 + 2,
      speed: Math.random() * 2 + 1,
    });

    // les flocons initiaux
    const initialSnowflakes = Array.from({ length: 50 }, createSnowflake);
    setSnowflakes(initialSnowflakes);

    const interval = setInterval(() => {
      setSnowflakes((prev) =>
        prev.map((flake) => {
          if (flake.y > window.innerHeight) {
            return createSnowflake();
          }
          return {
            ...flake,
            y: flake.y + flake.speed,
            x: flake.x + Math.sin(flake.y * 0.01) * 0.5,
          };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-20">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute rounded-full bg-white opacity-80"
          style={{
            left: `${flake.x}px`,
            top: `${flake.y}px`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        />
      ))}
    </div>
  );
};
