import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer bg-base-100 sm:footer-horizontal border-y-gray-300 border-y text-neutral-content p-10">
        <nav>
          <h6 className="footer-title">Nos Serveurs</h6>
          <Link
            href={"https://discord.gg/fehWrZs5aa"}
            className="link link-hover"
          >
            Assemblée des Fondateurs
          </Link>
          <Link
            href={"https://discord.gg/fehWrZs5aa"}
            className="link link-hover"
          >
            Assemblée des Développeurs
          </Link>
          <Link
            href={"https://discord.gg/qSfBRQWjJb"}
            className="link link-hover"
          >
            Groupe AD
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Liens Utiles</h6>
          <Link href={"https://adf.hawai1401.fr/"} className="link link-hover">
            Site ADF
          </Link>
        </nav>
      </footer>
      <footer className="absolute bg-base-100 flex items-center justify-center footer text-neutral-content p-10">
        <Image
          src="/logo.webp"
          alt="Logo"
          width={36}
          height={36}
          className="rounded-full border"
        />
        <p>Tous droits réservés © {new Date().getFullYear()} | AD</p>
      </footer>
    </>
  );
}
