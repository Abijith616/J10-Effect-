"use client";

import { Play, X } from "lucide-react";
import { useRef, useState } from "react";

type Film = {
  id: string;
  title: string;
  detail: string;
  length: string;
  src: string;
  poster: string;
  vertical: boolean;
};

const feature: Film = {
  id: "akshaya",
  title: "A CLA across Bengaluru",
  detail:
    "A brand film for Akshaya Motors: a red CLA through forest rain, cricket crowds and the city's landmarks.",
  length: "1:00",
  src: "/films/akshaya-cla-1080.mp4",
  poster: "/films/akshaya-cla.jpg",
  vertical: false,
};

const reels: Film[] = [
  {
    id: "eqs",
    title: "EQS SUV walkaround",
    detail: "Showroom reel for Akshaya Motors",
    length: "1:05",
    src: "/films/eqs-reel.mp4",
    poster: "/films/eqs-reel.jpg",
    vertical: true,
  },
  {
    id: "cla",
    title: "CLA walkaround",
    detail: "Mercedes-Benz showroom reel",
    length: "1:00",
    src: "/films/cla-reel.mp4",
    poster: "/films/cla-reel.jpg",
    vertical: true,
  },
  {
    id: "matchstick",
    title: "Matchstick tee",
    detail: "Streetwear drop reel",
    length: "0:15",
    src: "/films/tee-matchstick.mp4",
    poster: "/films/tee-matchstick.jpg",
    vertical: true,
  },
  {
    id: "everyday",
    title: "Everyday tee",
    detail: "Streetwear drop reel",
    length: "0:16",
    src: "/films/tee-everyday.mp4",
    poster: "/films/tee-everyday.jpg",
    vertical: true,
  },
];

function FilmButton({ film, onOpen }: { film: Film; onOpen: (film: Film) => void }) {
  return (
    <button
      type="button"
      className={film.vertical ? "film film-reel" : "film film-feature"}
      onClick={() => onOpen(film)}
    >
      <span className="film-frame">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={film.poster} alt="" loading="lazy" />
        <span className="film-play">
          <Play aria-hidden="true" />
          {film.length}
        </span>
      </span>
      <span className="film-title">{film.title}</span>
      <span className="film-detail">{film.detail}</span>
    </button>
  );
}

export function Work() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openFilm, setOpenFilm] = useState<Film | null>(null);

  function open(film: Film) {
    // Only one film should be heard at a time.
    document.querySelector<HTMLVideoElement>(".hero video")?.pause();
    setOpenFilm(film);
    dialogRef.current?.showModal();
  }

  function handleClose() {
    // Removing a video from the page doesn't stop its download, so cancel it.
    const video = dialogRef.current?.querySelector("video");
    if (video) {
      video.pause();
      video.removeAttribute("src");
      video.load();
    }
    setOpenFilm(null);
  }

  return (
    <section className="work" id="work" aria-labelledby="work-heading">
      <h2 id="work-heading">Proof, not prompts.</h2>
      <FilmButton film={feature} onOpen={open} />
      <div className="reels">
        {reels.map((film) => (
          <FilmButton film={film} onOpen={open} key={film.id} />
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className={openFilm?.vertical ? "player player-reel" : "player"}
        aria-label={openFilm ? `${openFilm.title} film` : "Film player"}
        onClose={handleClose}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
      >
        <button
          type="button"
          className="player-close"
          onClick={() => dialogRef.current?.close()}
        >
          <X aria-hidden="true" />
          Close
        </button>
        {openFilm && (
          <video
            key={openFilm.id}
            src={openFilm.src}
            poster={openFilm.poster}
            controls
            autoPlay
            playsInline
          />
        )}
      </dialog>
    </section>
  );
}
