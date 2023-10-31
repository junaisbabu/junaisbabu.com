import Link from "next/link";
import { link } from "../icons/svg";

const domain = "junaisbabu.com";

function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:place-items-center gap-5 text-sm dark:text-zinc-100 text-zinc-800 pl-10 sm:pl-0">
      <Link
        href={`https://ecommerce-store.${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <span className="hover:underline underline-offset-4">
          Ecommerce Store
        </span>
        {link}
      </Link>
      <Link
        href={`https://socijet.${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <span className="hover:underline underline-offset-4">SociJet</span>
        {link}
      </Link>
      <Link
        href={`https://netflix-junais.${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <span className="hover:underline underline-offset-4">
          Netflix Clone
        </span>
        {link}
      </Link>
      <Link
        href={`https://flappy-bird-junais.${domain}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1"
      >
        <span className="hover:underline underline-offset-4">Flappy Bird</span>
        {link}
      </Link>
    </div>
  );
}

export default Projects;
