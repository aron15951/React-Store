import { RiHome6Line } from "react-icons/ri";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaPizzaSlice } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = (props) => {
  const { showMenu } = props;
  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all
        ${showMenu ? "left-0" : "-left-full  "}`}
    >
      <div>
        <ul className="pl-4">
          <li className="text-2xl p-4 text-gray-300  uppercase  font-bold text-center">
            <h1 classname="  ">logo</h1>
          </li>
          <li className="bg-[#252836] p-4 rounded-tl-lg rounded-bl-lg">
            <a
              className="bg-[#EA7C69] p-4 flex justify-center rounded-xl"
              href="#"
            >
              <RiHome6Line className="text-3xl text-white" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <TbCircleDashedPercentage className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg sgroup transition-colors">
            <a
              className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <FaPizzaSlice className="text-2xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <IoMailOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <IoNotificationsOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
            <a
              className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <IoSettingsOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        {/* El elemento <li> no debería estar directamente dentro de un <div>. Se ha movido fuera del <div> y se ha añadido una <ul> para corregir la estructura. */}
        <ul className="pl-4">
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg  group transition-colors">
            <a
              className="group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors"
              href="#"
            >
              <CiLogout className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
