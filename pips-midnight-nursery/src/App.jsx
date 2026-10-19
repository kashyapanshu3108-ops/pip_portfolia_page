import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";


const projects = [
  {
    number: "01",
    icon: "♫",
    title: "The Lullaby Lab",
    description:
      "A magical music box filled with sleepy melodies, floating notes, and soothing bedtime moments.",
    tag: "SOUND & DREAMS",
    color: "lullaby",
    image: "/images/pip_lullaby_box.png",
  },
  {
    number: "02",
    icon: "☾",
    title: "Nightlight Collection",
    description:
      "Discover glowing moon lamps and dreamy lanterns designed to make bedtime feel magical.",
    tag: "LIGHT & COMFORT",
    color: "nightlight",
    image: "/images/pip_dream_lantern.png",
  },
  {
    number: "03",
    icon: "✧",
    title: "Dream Delivery Routes",
    description:
      "Join Pip on a whimsical journey across sleepy rooftops to deliver little parcels of dreams.",
    tag: "ADVENTURE & STORIES",
    color: "delivery",
    image: "/images/pip_glowing.png",
  },
  {
    number: "04",
    icon: "🧸",
    title: "Rattle & Block Toys",
    description:
      "Explore a tiny toy workshop filled with playful rattles, colourful blocks, and interactive surprises.",
    tag: "PLAY & DISCOVERY",
    color: "toys",
    image: "/images/pip_toys_.png",

  },
  {
    number: "05",
    icon: "📖",
    title: "Bedtime Storybook",
    description:
      "Step into Pip's illustrated bedtime stories, where friendly creatures discover stars and happy dreams.",
    tag: "STORIES & WONDER",
    color: "storybook",
   image: "/images/pip_stories.png",

  },
  {
    number: "06",
    icon: "📏",
    title: "Pip's Growth Chart",
    description:
      "A nursery-wall-inspired collection celebrating Pip's growing imagination, new skills, and little milestones.",
    tag: "GROW & LEARN",
    color: "growth",
        image: "/images/pip_growth.png",
  },
];

function App() {
  const [nightMode, setNightMode] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [secretFound, setSecretFound] = useState(false);
  const [lullabyOpen, setLullabyOpen] = useState(false);
  function discoverStar() {
    setSecretFound(true);
  }

  return (
    <main className={nightMode ? "app night-mode" : "app"}>
      <header className="navbar">
        <a className="brand" href="#home" aria-label="Pip home">
          <span className="brand-star">✦</span>
          <span>Pip</span>
          <span className="brand-divider">✧</span>
          <span className="brand-subtitle">Midnight Nursery</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">Meet Pip</a>
          <a href="#projects">Dream Projects</a>
          <a href="#story">The Story</a>
        </nav>

        <div className="nav-actions">
          <button
            className="icon-button"
            onClick={() => setNightMode(!nightMode)}
            aria-label={nightMode ? "Turn on day mode" : "Turn on night mode"}
            title="Toggle day and night"
          >
            {nightMode ? "☀" : "☾"}
          </button>

          <button
            className="sound-button"
            onClick={() => setSoundOn(!soundOn)}
            aria-pressed={soundOn}
            title="Sound is a visual toggle in this first version"
          >
            {soundOn ? "♫ Sound On" : "♫ Sound Off"}
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            A LITTLE MAGIC BEFORE BEDTIME
          </span>

          <h1>
            I build the dreams
            <br />
            you fall asleep <span>inside.</span>
          </h1>

          <p className="hero-subtitle">
            Meet Pip, your friendly Junior Dream Engineer
            <br className="desktop-break" /> at the Midnight Nursery.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my dream world <span>↗</span>
            </a>
            <a className="secondary-button" href="#about">
              Meet Pip <span>♡</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="tiny-moon">☾</span>
            Currently dreaming up something lovely...
          </div>
        </div>

        <div className="hero-art" id="about">
          <div className="art-glow" />
          <span className="floating-star star-one">✦</span>
          <span className="floating-star star-two">✧</span>
          <span className="floating-star star-three">✦</span>
          <span className="floating-star star-four">✧</span>

          <div className="dream-cloud cloud-back" />

<div className="pip-character">
  <img
    className="pip-image"
    src="/images/pip-reference-sketch.jpg"
    alt="Pip, a cute baby dreamer with a starry nightcap and glowing lantern"
  />

  <span className="eye-glow eye-glow-left" aria-hidden="true" />
  <span className="eye-glow eye-glow-right" aria-hidden="true" />
</div>


          <button
            className="secret-star"
            onClick={discoverStar}
            aria-label="Discover a little secret"
            title="Psst... tap the star!"
          >
            ✦
          </button>

          <div className="art-caption">
            <span className="caption-heart">♥</span>
            <span>Little dreamer, big imagination.</span>
            <span className="caption-heart">♥</span>
          </div>

          {secretFound && (
            <div className="secret-message" role="status">
              ✨ Pip saved a tiny dream just for you!
              <button
                onClick={() => setSecretFound(false)}
                aria-label="Close secret message"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <div className="hero-bottom-label">
          <span>01</span>
          <span className="label-line" />
          <span>THE WORLD OF PIP</span>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <span className="eyebrow">MADE WITH A LITTLE MAGIC</span>
            <h2>Welcome to the dream workshop <span>✧</span></h2>
            <p>
              Every little creation has a story. These are Pip's favourite
              things to make before the stars come out.
            </p>
          </div>
          <span className="project-count">THE COLLECTION · 03</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.color}`}
              key={project.number}
            >

<div className="project-visual">
  <span className="project-number">{project.number}</span>

  {project.image ? (
    <img
      className="project-image"
      src={project.image}
      alt={project.title}
      loading="lazy"
    />
  ) : (
    <span className="project-visual-icon" aria-hidden="true">
      {project.icon}
    </span>
  )}

  <span className="project-sparkle" aria-hidden="true">
    ✧
  </span>
</div>


              <div className="project-content">
                <span className="project-tag">{project.tag}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

<button
  type="button"
  className="project-link"
  onClick={() => {
    if (project.title === "The Lullaby Lab") {
      setLullabyOpen(!lullabyOpen);
    } else {
      document.getElementById("story")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
>
  {project.title === "The Lullaby Lab"
    ? lullabyOpen
      ? "Close music box"
      : "Open music box"
    : "Discover the story"}
  <span>↗</span>
</button>
{project.title === "The Lullaby Lab" && lullabyOpen && (
  <MusicBox />
)}

              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="story-moon">☾</div>
        <span className="eyebrow">A NOTE FROM PIP</span>
        <h2>Every dream begins with a little <span>wonder.</span></h2>
        <p>
          Somewhere between the last lullaby and the first star, Pip found
          a special kind of magic: helping little creatures drift into
          their happiest dreams.
        </p>
        <a className="primary-button" href="#home">
          Back to the nursery ↑
        </a>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#home">✦ Pip</a>
        <p>Made with a little stardust and a lot of heart.</p>
        <span>© Pip's Midnight Nursery</span>
      </footer>

      <div className="sound-status" aria-live="polite">
        {soundOn ? "Sound toggle is on" : "Sound is muted"}
      </div>
    </main>
  );
}

function MusicBox() {
  const audioRef = useRef(null);
  const masterRef = useRef(null);
  const timerRef = useRef(null);
  const noteIndexRef = useRef(0);
  const playingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(55);

  // A gentle original lullaby: notes generated in the browser.
  const melody = [
    523.25, 659.25, 783.99, 659.25,
    587.33, 698.46, 880.00, 698.46,
    523.25, 659.25, 783.99, 1046.50,
    880.00, 783.99, 659.25, 523.25,
  ];

  const getAudio = useCallback(async () => {
    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      throw new Error("Web Audio API is not supported in this browser.");
    }

    if (!audioRef.current) {
      const ctx = new AudioContextClass();
      const master = ctx.createGain();

      master.gain.value = muted ? 0 : (volume / 100) * 0.18;
      master.connect(ctx.destination);

      audioRef.current = ctx;
      masterRef.current = master;
    }

    const ctx = audioRef.current;

    if (ctx.state === "suspended") {
      await ctx.resume();
    }

    return ctx;
  }, [muted, volume]);

  const playNote = useCallback(async (frequency) => {
    const ctx = await getAudio();
    const now = ctx.currentTime;

    // Two soft tones make the sound feel more like a music box.
    [1, 2].forEach((harmonic, index) => {
      const oscillator = ctx.createOscillator();
      const envelope = ctx.createGain();

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(
        frequency * harmonic,
        now
      );

      const peak = index === 0 ? 0.65 : 0.16;

      envelope.gain.setValueAtTime(0.0001, now);
      envelope.gain.exponentialRampToValueAtTime(
        peak, now + 0.025
      );
      envelope.gain.exponentialRampToValueAtTime(
        0.0001, now + 0.8
      );

      oscillator.connect(envelope);
      envelope.connect(masterRef.current);

      oscillator.start(now);
      oscillator.stop(now + 0.82);
    });
  }, [getAudio]);

  const stop = useCallback(() => {
    playingRef.current = false;
    setPlaying(false);

    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const start = useCallback(async () => {
    if (playingRef.current) return;

    try {
      await getAudio();

      playingRef.current = true;
      setPlaying(true);

      // Play immediately, then continue through the melody.
      const tick = () => {
        if (!playingRef.current) return;

        const frequency =
          melody[noteIndexRef.current % melody.length];

        noteIndexRef.current =
          (noteIndexRef.current + 1) % melody.length;

        playNote(frequency).catch((error) => {
          console.error("Unable to play note:", error);
          stop();
        });
      };

      tick();
      timerRef.current = window.setInterval(tick, 420);
    } catch (error) {
      console.error("Music box unavailable:", error);
      stop();
    }
  }, [getAudio, melody, playNote, stop]);

  useEffect(() => {
    if (masterRef.current) {
      masterRef.current.gain.setTargetAtTime(
        muted ? 0 : (volume / 100) * 0.18,
        audioRef.current.currentTime,
        0.025
      );
    }
  }, [muted, volume]);

  useEffect(() => {
    return () => {
      playingRef.current = false;

      if (timerRef.current !== null) {
        window.clearInterval(timerRef.current);
      }

      if (audioRef.current) {
        audioRef.current.close();
      }
    };
  }, []);

  return (
    <div className="music-player">
      <div className="music-player-art" aria-hidden="true">
        <span className={playing ? "music-note dancing" : "music-note"}>
          ♫
        </span>
        <span className="music-star">✦</span>
        <span className="music-star second">✧</span>
      </div>

      <p className="eyebrow">PIP'S ORIGINAL SOUND MACHINE</p>
      <h3>The Little Lullaby</h3>
      <p className="music-description" aria-live="polite">
        {playing
          ? "The stars are singing... sweet dreams!"
          : "A tiny melody made from digital stardust."}
      </p>

      <div className="music-controls">
        <button
          className="music-play"
          onClick={playing ? stop : start}
        >
          {playing ? "Ⅱ  Pause lullaby" : "▶  Play lullaby"}
        </button>

        <button
          className="music-mute"
          onClick={() => setMuted((value) => !value)}
          aria-pressed={muted}
          aria-label={muted ? "Unmute lullaby" : "Mute lullaby"}
        >
          {muted ? "🔇 Unmute" : "🔊 Mute"}
        </button>
      </div>

      <label className="volume-control">
        <span>Volume</span>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(event) => setVolume(Number(event.target.value))}
          aria-label="Lullaby volume"
        />
        <span>{volume}%</span>
      </label>

      <p className="audio-note">
        Generated live with the Web Audio API · No audio files
      </p>
    </div>
  );
}

export default App;
