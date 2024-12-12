import React from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleHomeRoute = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex bg-gradient-to-r from-green-800 to-green-600 py-6 px-6">
      <Link href="/" className="flex-none font-mavenPro text-white font-bold uppercase">
        Home
      </Link>
      <Link href="/search" className="inline-flex flex-none ms-auto font-mavenPro text-white font-bold uppercase">
        Search &nbsp;
        <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
        </svg>
      </Link>
    </div>
  );
};

export default Header;
