"use client";

import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CONTACT_HREF } from "../contact";

const FILM_LENGTH = 59.73;

const chapters = [
  { name: "Rush hour", start: 0 },
  { name: "Dinosaurs", start: 7.33 },
  { name: "Stone Age", start: 27.38 },
  { name: "Da Vinci", start: 39.08 },
  { name: "Pyramids", start: 47.63 },
  { name: "The dig", start: 51.17 },
];

// Open on the T-rex's eye in the window, not on the traffic.
const OPENING_CHAPTER = 1;

function chapterEnd(index: number) {
  return chapters[index + 1]?.start ?? FILM_LENGTH;
}

function formatTime(seconds: number) {
  const whole = Math.floor(seconds);
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}

export function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [time, setTime] = useState(chapters[OPENING_CHAPTER].start);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.currentTime = chapters[OPENING_CHAPTER].start;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (reducedMotion || connection?.saveData) return;

    video.play().catch(() => setPlaying(false));
  }, []);

  function jumpTo(seconds: number) {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = seconds;
    setTime(seconds);
    void video.play();
  }

  function togglePlaying() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  }

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    if (muted) {
      // Turning sound on starts the story from its first frame.
      video.muted = false;
      setMuted(false);
      jumpTo(0);
    } else {
      video.muted = true;
      setMuted(true);
    }
  }

  const activeIndex = chapters.reduce(
    (active, chapter, index) => (time >= chapter.start ? index : active),
    0,
  );

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <nav className="site-nav" aria-label="Main">
        <a className="wordmark" href="#top">
          J10 Effect
        </a>
        <div>
          <a href="#work">Work</a>
          <a href="#hire">Hire us</a>
          <a href={CONTACT_HREF}>Email us</a>
        </div>
      </nav>

      <div className="hero-film">
        <video
          ref={videoRef}
          poster="/films/audi-rsq8.jpg"
          loop
          muted
          playsInline
          preload="metadata"
          aria-label="Audi RS Q8 film: a driver stuck in traffic travels through time, past dinosaurs, the Stone Age, Leonardo da Vinci and the pyramids."
          onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source
            src="/films/audi-rsq8-720.mp4"
            type="video/mp4"
            media="(max-width: 800px)"
          />
          <source src="/films/audi-rsq8-1080.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-copy">
        <h1 id="hero-heading">Make the impossible sell.</h1>
        <div className="hero-side">
          <p>
            We make AI films and ads. This one takes an Audi RS Q8 from rush-hour
            traffic to the age of dinosaurs and back, in one minute.
          </p>
          <div className="hero-controls">
            <button type="button" onClick={toggleSound}>
              {muted ? (
                <Volume2 aria-hidden="true" />
              ) : (
                <VolumeX aria-hidden="true" />
              )}
              {muted ? "Watch with sound" : "Mute film"}
            </button>
            <button type="button" onClick={togglePlaying}>
              {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
              {playing ? "Pause film" : "Play film"}
            </button>
          </div>
        </div>
      </div>

      <ol className="timeline" aria-label="Jump to a chapter of the film">
        {chapters.map((chapter, index) => {
          const end = chapterEnd(index);
          const length = end - chapter.start;
          const progress = Math.min(
            Math.max((time - chapter.start) / length, 0),
            1,
          );
          const isActive = index === activeIndex;
          return (
            <li key={chapter.name} style={{ flexGrow: length }}>
              <button
                type="button"
                className={isActive ? "is-active" : undefined}
                aria-current={isActive ? "true" : undefined}
                onClick={() => jumpTo(chapter.start)}
              >
                <span className="timeline-track">
                  <span style={{ transform: `scaleX(${progress})` }} />
                </span>
                <span className="timeline-name">{chapter.name}</span>
                <span className="timeline-time">{formatTime(chapter.start)}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
