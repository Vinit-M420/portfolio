// components/Navbar.tsx 

import Link from "next/link";

type NavbarProps = {
  currentPath: string;
};

const Navbar = ({ currentPath }: NavbarProps) => {
  return (
    <nav className="border border-neutral-700 rounded-2xl p-2 flex justify-center items-center w-fit mx-auto gap-3 mt-5">
      <Link
        href="/"
        className={`md:text-lg text-md cursor-pointer px-2 ${
          currentPath === "/"
            ? "text-black font-bold bg-white rounded-xl"
            : "text-gray-300 hover:bg-gray-500 hover:rounded-2xl hover:text-white"
        }`}
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={`md:text-lg text-md cursor-pointer px-2 ${
          currentPath === "/projects"
            ? "text-black font-bold bg-white rounded-xl"
            : "text-gray-300 hover:bg-gray-500 hover:rounded-2xl hover:text-white"
        }`}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;