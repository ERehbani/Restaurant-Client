"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

function Sidebar() {
  const currentRoute = usePathname();

  return (
    <div>
      <div className="md:w-2/5 xl:w-4/5 bg-gray-800 min-h-screen">
        <div className="p-6">
          <p className="text-white text-2xl tracking-wide text-center font-semibold">
            Restaurant App
          </p>
          <p className="mt-3 text-gray-400">
            Administra tu restaurant en las siguientes opciones:{" "}
          </p>

          <nav className="mt-10">
            <Link
              href="/"
              className={
                currentRoute === "/"
                  ? "text-yellow-500 block p-1 hover:bg-yellow-500 hover:text-gray-500"
                  : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-500"
              }>
              Ordenes
            </Link>
            <Link
              href="/menu"
              className={[
                currentRoute === "/menu"
                  ? "text-yellow-500 block p-1 hover:bg-yellow-500 hover:text-gray-500"
                  : "p-1 text-gray-400 block hover:bg-yellow-500 hover:text-gray-500",
              ]}>
              Menu
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
