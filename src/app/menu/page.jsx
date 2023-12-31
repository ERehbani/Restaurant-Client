import Link from "next/link";
import React from "react";

function Menu() {
  return (
    <div>
      <h1 className="text-3xl font-light mb-4">Menu</h1>
      <Link
        href="new-plate"
        className="bg-blue-800 hover:bg-blue-700 inline-block mb-5 p-2 text-white uppercase font-bold">
        Agregar Platillo
      </Link>
    </div>
  );
}

export default Menu;
