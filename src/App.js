import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import SideBar from "./components/shared/SideBar";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddFill,
  RiCloseLine,
  RiSearch2Line,
} from "react-icons/ri";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, serShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#252836] w-full min-h-screen">
      <SideBar showMenu={showMenu} />
      {/*Menu Movil*/}
      <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="text-2xl py-3">
          <RiUser3Line />
        </button>
        <button className="text-3xl py-2">
          <RiAddFill />
        </button>
        <button className="text-xl py-2">
          <FaPizzaSlice />
        </button>
        <button onClick={toogleMenu} className="text-white scroll-py-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6">
          {/* Header */}
          <header className="p-4">
            {/* Title and Search */}
            <div className="flex flex-col gap-4 lg:flex mb-6">
              <div className=""> <h2 className="text-2xl text-gray-300">Jeager Resto</h2>
                <p className="text-gray-500">24 septiembre 2024</p>
              </div>
              <form>
                <div className="w-full relative" >
                  <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300 " />
                  <input className="w-full bg-[#1f1d2b] py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none " type="text" placeholder="Search" />
                </div>
              </form>
            </div>
            {/* Taps */}
            <nav className="text-gray-300  flex items-center justify-between border-b">

              <a className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#EA7C69] before:left-0 before:rounded-full before:-bottom-[1px] before:z-10 text-[#EA7C69]">Hot Dishes</a>
              <a className="py-2 pr-4">Cold Dishes</a>
              <a className="py-2 pr-4">Soup</a>
              <a className="border- py-2">Grill</a>

            </nav>
          </header>
        </div>
        <div className="lg:col-span-2 fixed right-0 lg:static bg-red-200 ">
          Carrito
        </div>
      </main>
    </div>
  );
}

export default App;
