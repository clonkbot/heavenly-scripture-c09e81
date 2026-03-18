import { useEffect, useState } from 'react';

function Star({ delay, duration, size, left, top }: { delay: number; duration: number; size: number; left: string; top: string }) {
  return (
    <div
      className="absolute rounded-full bg-white/80"
      style={{
        width: size,
        height: size,
        left,
        top,
        animation: `twinkle ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function GlowingOrb({ delay, size, left, top, color }: { delay: number; size: number; left: string; top: string; color: string }) {
  return (
    <div
      className="absolute rounded-full blur-3xl opacity-20"
      style={{
        width: size,
        height: size,
        left,
        top,
        background: color,
        animation: `float ${8 + delay}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: Math.random() * 2 + 1,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  const orbs = [
    { id: 1, delay: 0, size: 300, left: '10%', top: '20%', color: '#c9a227' },
    { id: 2, delay: 2, size: 200, left: '70%', top: '60%', color: '#1e3a5f' },
    { id: 3, delay: 4, size: 250, left: '50%', top: '30%', color: '#c9a227' },
  ];

  return (
    <div className="relative min-h-dvh w-full overflow-hidden bg-[#0a0e1a] flex flex-col items-center justify-center">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1629] to-[#0a0e1a]" />

      {/* Radial glow behind quote */}
      <div
        className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(201,162,39,0.15) 0%, rgba(201,162,39,0.05) 40%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Floating orbs */}
      {orbs.map((orb) => (
        <GlowingOrb key={orb.id} {...orb} />
      ))}

      {/* Stars */}
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}

      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center flex-1">
        {/* Decorative cross accent */}
        <div
          className={`mb-8 md:mb-12 transition-all duration-1000 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-[#c9a227]">
            <path d="M20 0L20 40M0 20L40 20" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote
          className={`max-w-4xl transition-all duration-1000 delay-300 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p
            className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-relaxed md:leading-relaxed lg:leading-relaxed text-[#f5f0e6] tracking-wide"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span className="text-[#c9a227] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">"</span>
            And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away.
            <span className="text-[#c9a227] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none">"</span>
          </p>
        </blockquote>

        {/* Citation */}
        <cite
          className={`mt-8 md:mt-12 not-italic transition-all duration-1000 delay-500 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span
            className="text-[#c9a227] text-base md:text-lg lg:text-xl tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Crimson Pro', serif" }}
          >
            Revelation 21:4
          </span>
        </cite>

        {/* Decorative line */}
        <div
          className={`mt-8 md:mt-12 flex items-center gap-4 transition-all duration-1000 delay-700 ease-out ${mounted ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
        >
          <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[#c9a227]/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
          <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[#c9a227]/50" />
        </div>
      </main>

      {/* Footer */}
      <footer
        className={`relative z-10 pb-6 md:pb-8 transition-all duration-1000 delay-1000 ease-out ${mounted ? 'opacity-100' : 'opacity-0'}`}
      >
        <p
          className="text-xs md:text-sm text-[#f5f0e6]/40 tracking-wide"
          style={{ fontFamily: "'Crimson Pro', serif" }}
        >
          Requested by @PauliusX · Built by @clonkbot
        </p>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
      `}</style>
    </div>
  );
}
