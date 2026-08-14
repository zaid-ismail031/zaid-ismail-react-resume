import { useRef, useState } from "react";

// The Unity WebGL build is served as static files from public/game-build/.
// BASE_URL keeps this correct if the site is ever deployed under a sub-path.
// Must be the explicit index.html path: `serve -s` rewrites bare directory
// requests to the SPA root. Relies on "cleanUrls": false in public/serve.json,
// otherwise serve 301s this to /game-build/index and the SPA fallback wins.
const gameUrl = `${import.meta.env.BASE_URL}game-build/index.html`;

const GamePage = () => {
  const frameWrapper = useRef(null);
  const [launched, setLaunched] = useState(false);

  const goFullscreen = () => {
    frameWrapper.current?.requestFullscreen?.();
  };

  return (
    <div className="w-full max-w-5xl mx-auto text-center p-8 min-h-screen bg-black text-green-400 font-mono">
      <h2 className="text-3xl font-bold mb-2 text-glow">
        Squad AI Shooter (Unity)
      </h2>
      <p className="text-green-300 text-sm mb-6">
        Third-person shooter with behaviour-tree driven squad AI. Runs in the
        browser via WebGL.
        This is a rough tech demo showing off my implementations of behaviour trees, 
        procedural dungeon and terrain generation, and procedural narrative generation.
        The procedural narrative generation uses word tables to generate quests,
        character names, and environmental notes.
      </p>

      <div
        ref={frameWrapper}
        className="relative w-full aspect-video border border-green-400 bg-black"
      >
        {launched ? (
          <iframe
            src={gameUrl}
            title="Squad AI Shooter"
            className="w-full h-full"
            allow="fullscreen; autoplay; gamepad; xr-spatial-tracking"
          />
        ) : (
          <button
            onClick={() => setLaunched(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 hover:bg-green-400/10 transition"
          >
            <span className="text-2xl">▶ Click to load</span>
            <span className="text-green-300 text-xs px-6">
              Loads a large WebGL build. Give it a moment on first run.
            </span>
          </button>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={goFullscreen}
          className="px-4 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition"
        >
          ⛶ Fullscreen
        </button>
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-green-400 hover:bg-green-400 hover:text-black transition"
        >
          ↗ Open in new tab
        </a>
      </div>

      <ul className="text-left text-sm mx-auto w-3/4 mt-8 space-y-2 text-green-300">
        <li>▶ Controls: WASD to move, mouse to look, right-click to aim, left-click to fire.</li>
        <li>▶ Tab cycles between the available cameras.</li>
        <li>▶ Desktop browser and keyboard required. Touch input is not supported.</li>
      </ul>
    </div>
  );
};

export default GamePage;
