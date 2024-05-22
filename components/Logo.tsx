import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text hover:cursor-pointer"
      aria-label={"Logo"}>
      FormBG
    </Link>
  );
}

export default Logo;
