import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <div className=" grid-cols-2  w-[100%] h-[60px]  flex justify-start items-center px-8 bg-cyan-600 pt-4">
      <div>
        <h1 className="text-xs font-bold pb-2 text-white  ml-10">
          TallyPrime <br /> SILVER
        </h1>
      </div>
      <ul className="flex items-center">
        <li className="p-4 text-slate-50 ">
          <Menu as="div" className="relative  text-left">
            <Menu.Button>K:Company</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" absolute left-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1  focus:outline-none">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Create
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Alter
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Select
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        SHut
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        ONLINE ACCESS
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Connect
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50"> Y:Data </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg   focus:outline-none">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        COMPANY DATA
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Backup
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Restore
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Split
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Data Path
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50"> Z:Exchange</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-45 origin-top-right divide-y divide-gray-100  bg-white shadow-lg  ">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        E-WAY BILL
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Send for e-Way Bill
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CONFIGURE
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Data SyNchronisation
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <button className="px-2 py-0 bg-white ml-20 mr-20">G:Go To</button>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50">O:Import</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg  ">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        COMPANY DATA
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Masters
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Transactions
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Bank Details
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CoNfiguration
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50">E:Export</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg  ">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        REPORTS
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CuRrent
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Others
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        COMPANY DATA
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Masters
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Transactions
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CoNfiguration
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50">M:E-mail</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg  ">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        REPORTS
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CuRrent
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Others
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CoNfiguration
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">
          <Menu>
            <Menu.Button className="text-slate-50">P:Print</Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute center-0 z-10  mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg  ">
                <div className="py-2">
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        REPORTS
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900 "
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CuRrent
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        Others
                      </a>
                    )}
                  </Menu.Item>

                  <Menu.Item className="no-underline hover:bg-yellow-500">
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm "
                        )}
                      >
                        CoNfiguration
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className="p-4 text-slate-50">F1:Help</li>
      </ul>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   let Links = [
//     { name: "K:Company", link: "/" },
//     { name: "Y:Data", link: "/" },
//     { name: "Z:Exchange", link: "about" },
//     { name: "G:Go To", link: "/" },
//     { name: "O:Import", link: "/" },
//     { name: "E:Export", link: "/" },
//     { name: "M:E-mail", link: "/" },
//     { name: "P:Print", link: "/" },
//     { name: "F1:Help", link: "/" },
//   ];
//   const [open, setOpen] = useState(false);
//   return (
//     <div className=" w-[100%] h-[40] flex justify-center items-center bg-sky-600 px-8 ">
//       <div>
//         <h1 className="text-sm font-bold  text-white mt-2">
//           TallyPrime <br />
//           SILVER
//         </h1>
//       </div>
//       <div
//         className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]
//       "
//       >
//         <span className="text-3xl text-indigo-600 mr-1 pt-2">
//           <ion-icon name="logo-ionic"></ion-icon>
//         </span>
//       </div>

//       <div
//         onClick={() => setOpen(!open)}
//         className="text-3xl absolute right-8 top-6  text-white cursor-pointer md:hidden"
//       >
//         <AiOutlineMenu name={open ? "close" : "menu"} />
//       </div>

//       <ul
//         className={`md:flex md:items-center md:pb-0  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all  ${
//           open ? "top-20 " : "top-[-490px]"
//         }`}
//       >
//         {Links.map((link) => (
//           <li
//             key={link.name}
//             className="md:ml-8 text-xs flex  justify-between  text-black md:my-0 my-7"
//           >
//             <a href={link.link} className=" text-black pt-6 text-2xl">
//               {link.name}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <div className="bg-gray-300"></div>
//     </div>
//   );
// };

// export default Navbar;
