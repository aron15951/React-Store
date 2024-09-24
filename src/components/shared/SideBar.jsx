import { RiHome6Line } from "react-icons/ri";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { FaPizzaSlice } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="bg-[#1F1D2B] fixed left-0 top-0 w-28 h-full flex flex-col">
      <div>
        <ul className="pl-4">
          <li className="text-2xl text-gray-300  uppercase  font-bold text-center my-5">
            <h1 classname="  ">
              logo
            </h1>
          </li>
          <li className="bg-[#252836] p-4 rounded-tl-lg rounded-bl-lg">
            <a className="bg-[#EA7C69] p-4 flex justify-center rounded-xl" href="#">
              <RiHome6Line className="text-3xl text-white" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg mt-10 group transition-colors">
            <a className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
              <TbCircleDashedPercentage className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg mt-10 group transition-colors">
            <a className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
              <FaPizzaSlice className="text-2xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg mt-10 group transition-colors">
            <a className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
              <IoMailOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg mt-10 group transition-colors">
            <a className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
              <IoNotificationsOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
          <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg mt-10 group transition-colors">
            <a className=" group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
              <IoSettingsOutline className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors" />
            </a>
          </li>
        </ul>
      </div>
        <div className="mt-auto mb-10">
          <ul>
            <li className="hover:bg-[#252835] p-4 rounded-tl-lg rounded-bl-lg group transition-colors">
              <a className="group-hover:bg-[#EA7C69] p-4 flex justify-center rounded-xl transition-colors" href="#">
                <CiLogout className="text-3xl text-[#EA7C69] group-hover:text-white transition-colors"/>
              </a>
            </li>
          </ul>
        </div>
    </div >
  );
};

export default SideBar;
