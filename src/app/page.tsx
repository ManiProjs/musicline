import Image from "next/image";

export function DownloadButton() {
  return (
    <div className="outer-cont flex items-center justify-center gap-2">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="512"
      height="512"
      x="0"
      y="0"
      viewBox="0 0 512 512"
      style={{ background: "new 0 0 512 512" }}
      xmlSpace="preserve"
      className=""
      >
      <g>
        <path
        d="M512 480c0 17.673-14.327 32-32 32H32c-17.673 0-32-14.327-32-32s14.327-32 32-32h448c17.673 0 32 14.327 32 32zM233.373 378.628c6.249 6.249 14.437 9.373 22.627 9.373 8.188 0 16.38-3.125 22.627-9.373l113.378-113.377c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L288 278.746V32c0-17.673-14.327-32-32-32s-32 14.327-32 32v246.746l-58.75-58.75c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255z"
        fill="#ffffff"
        opacity="1"
        data-original="#000000"
        className=""
        ></path>
      </g>
      </svg>
      Download
    </div>
  );
}

export function AboutApp() {
  return (
    <div id="about" className="flex flex-col gap-4">
      <div id="title">
        <h1 className="font-Impact">MusicLine</h1>
        <p className="text-2xl">Music in a terminal.</p>
      </div>
      <picture>
        <source srcSet="/screenshot.webp" />
        <img src="/screenshot.webp" alt="" />
      </picture>
    </div>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-Impact)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AboutApp />
        <h2>Terminal lovers will vibe with this app</h2>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a href="https://github.com/ManiProjs/musicline">GitHub</a>
      </footer>
    </div>
  );
}
