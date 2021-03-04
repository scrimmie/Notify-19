import Head from "next/head";
import background from "../public/images/map.png";
import Nav from "../components/nav";
import CalendarView from "../components/calendar";
import { useState } from "react";
import AlertsView from "../components/alerts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'

export default function Dashboard() {
  const [view, setView] = useState(0);

  const nav = (childData) => {
    console.log(childData);
    setView(childData);
  };

  return (
    <div>
      <Head>
        <title>Notify-19 Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="flex flex-col min-h-screen bg-cover bg-center bg-fixed bg-white "
        style={{ backgroundImage: `url(${background})` }}
      >
        <Nav handleClick={nav} />
        {view == 0 ? (
          <CalendarView className="flex-grow" />
        ) : (
          <AlertsView className="flex-grow" />
        )}
        <div className="flex w-full text-center border-t border-grey p-4 pin-b justify-end mt-5">
          <button
            className="flex bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 items-center	"
            onClick={() => {window.open("https://www.cdc.gov/coronavirus/2019-ncov/index.html", "_blank")}}
          >
            <FontAwesomeIcon className="h-5 text-white cursor-pointer leading-none pr-3 border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none" icon={faQuestionCircle}/>
            COVID-19 Info
          </button>
        </div>
      </div>
    </div>
  );
}
