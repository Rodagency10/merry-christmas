import { ParallaxLayer } from "./components/ParallaxLayer";
import { useParallax } from "./hooks/useParallax";
import { Snowfall } from "./components/Snowfall";
import Wishes from "./components/Wishes";

function App() {
  const scrollPosition = useParallax();

  return (
    <div className="relative h-[200vh] overflow-x-hidden bg-[#0B1A2B]">
      {/* Section Accueil */}
      <section id="home" className="h-screen relative">
        {/* Background */}
        <ParallaxLayer
          className="inset-0 w-full h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url(/main-bg.webp)",
          }}
        />

        {/* Clouds */}
        <ParallaxLayer
          className="hidden md:block top-[-200px] right-[-30%] w-[1200px] h-[1200px] bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url(/cloud.png)",
            transform: `translateY(${scrollPosition * 0.2}px)`,
          }}
        />
        <ParallaxLayer
          className="hidden md:block bottom-[-10px] left-[-10%] w-[800px] h-[500px] bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url(/cloud.png)",
            transform: `translateY(${scrollPosition * 0.3}px)`,
          }}
        />

        {/* Moon */}
        <ParallaxLayer
          className="top-[10%] md:top-0 left-1/2 md:left-0 -translate-x-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-[150px] md:w-[250px] h-[150px] md:h-[250px] bg-contain bg-no-repeat"
          style={{
            backgroundImage:
              "url(/moon-2.webp)",
            transform: `translateY(${scrollPosition * 0.1}px)`,
          }}
        />

        {/* Santa and Reindeers */}
        <ParallaxLayer
          className="top-[35%] md:top-[40%] left-1/2 -translate-x-1/2 w-[280px] sm:w-[400px] md:w-[600px]"
          style={{
            transform: `translateY(${scrollPosition * 0.15}px)`,
          }}
        >
          <div className="santa-animation">
            <img
              src="/santa.svg"
              alt="Santa Claus"
              className="w-full h-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
        </ParallaxLayer>

        {/* Mountains */}
        <ParallaxLayer
          className="bottom-5 w-full h-[200px] sm:h-[300px] md:h-[400px] bg-contain bg-repeat-x"
          style={{
            backgroundImage:
              "url(/mountain.webp)",
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        />

        {/* Trees */}
        <ParallaxLayer
          className=" bottom-0 w-full h-[150px] sm:h-[200px] md:h-[300px] bg-contain bg-repeat-x"
          style={{
            backgroundImage:
              "url(/trees.webp)",
            transform: `translateY(${scrollPosition * 0.4}px)`,
          }}
        />

        {/* Main Content */}
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white text-center z-10 px-4">
          <h2 className="text-lg sm:text-xl md:text-2xl mb-4">
            JE TE SOUHAITE
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-['Great_Vibes'] mb-6 md:mb-8">
            Joyeux Noël
          </h1>
          <a
            className="text-center w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            href="#wishes"
          >
            <button className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold transition-colors text-sm sm:text-base">
              Mes voeux pour toi
            </button>
          </a>
        </div>
      </section>

      {/* Section Voeux */}
      <section
        id="wishes"
        className="h-screen relative flex items-center justify-center px-4 md:px-8"
      >
        <Wishes />
      </section>

      <Snowfall />
    </div>
  );
}

export default App;
