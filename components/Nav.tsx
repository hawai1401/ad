import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50 px-4 border-b-gray-300 border-b">
      <div className="flex flex-1 items-center gap-2">
        <Image
          src="/logo.webp"
          alt="logo"
          width="40"
          height="40"
          className="rounded-full border"
        />
        <Link href="/" className="font-semibold text-xl">
          Groupe AD
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <ul className="menu menu-horizontal px-1 hidden sm:flex">
          <li>
            <Link href="#accueil">Accueil</Link>
          </li>
          <li>
            <Link href="#about">À propos</Link>
          </li>
          <li>
            <Link href="#serveurs">Serveurs</Link>
          </li>
          <li>
            <Link target="_blank" href="https://discord.gg/P3dcjTuuav">
              Discord
            </Link>
          </li>
        </ul>
        <ul className="menu menu-horizontal px-1 sm:hidden">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="bg-base-100 rounded-t-none p-2 w-25">
                <li>
                  <Link href="#accueil">Accueil</Link>
                </li>
                <li>
                  <Link href="#about">À propos</Link>
                </li>
                <li>
                  <Link href="#serveurs">Serveurs</Link>
                </li>
                <li>
                  <Link target="_blank" href="https://discord.gg/P3dcjTuuav">
                    Discord
                  </Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </header>
  );
}
