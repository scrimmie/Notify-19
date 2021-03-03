import Head from 'next/head'
import background from "../public/images/map.png"
import Nav from "../components/nav"
import CalendarView from "../components/calendar"
import { useState } from "react";
import AlertsView from "../components/alerts"


export default function Dashboard() {
    const [view, setView] = useState(0)

    const nav = (childData) => {
        console.log(childData)
        setView(childData)
      }

    return (
        <div>
            <Head>
                <title>Notify-19 Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className="bg-cover bg-center bg-white h-full min-h-screen"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Nav handleClick={nav}/>
            {view == 0?
                <CalendarView/>:
                <AlertsView/>

            }



            </div>
            
        </div>
    );
}
