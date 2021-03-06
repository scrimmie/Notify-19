import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router'  


export default function Nav({handleClick, showAlert}) {
  const router = useRouter()

  const [navbarOpen, setNavbarOpen] = useState(false);

  const changeView = (value) => {
    setNavbarOpen(false)
    handleClick(value);
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-gray-400 mb-3  bg-opacity-70">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Image
              src="/images/logo.png"
              alt="notify-19 logo"
              width={198.5}
              height={68.5}
              layout="intrinsic" // required
            />
            {/* <button
              className=" text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            > */}
            <div className="grid justify-items-center items-center">
                <FontAwesomeIcon className="text-white cursor-pointer leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" icon={faBars} onClick={() => setNavbarOpen(!navbarOpen)}/>
            </div>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item" onClick={() => changeView(0)}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Calendar</span>
                </a>
              </li>
              <li className="nav-item" onClick={() => changeView(1)}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Alerts
                  {showAlert ? <span class="absolute inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span> : <></>}
                  </span>
                </a>
              </li>
              <li className="nav-item" onClick={() => {localStorage.removeItem('User'); router.push('/')}}>
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <span className="ml-2">Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
