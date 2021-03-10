import Head from "next/head";
import background from "../public/images/map.png";
import Nav from "../components/nav";
import CalendarView from "../components/calendar";
import { useState, useEffect } from "react";
import AlertsView from "../components/alerts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { getAlerts, getLogs, deleteLog } from "../components/functions/helperFunctions"
import { useRouter } from 'next/router'  


export default function Dashboard() {
  const router = useRouter()
  const [view, setView] = useState(0);
  const [alerts, setAlerts] = useState();
  const [logs, setLogs] = useState();
  const [email, setEmail] = useState();
  const [showAlert, setShowAlert] = useState(false);



  const removeLog = (index) => {
    let removedLog = logs[index]
    deleteLog(email, removedLog.id).then(() => {
      let array = [...logs]
      array.splice(index, 1);
      setLogs(array)
    }).catch(() => {
      console.log("error removing log")
    })
  };

  const addLog = (newLog) => {
    setLogs([...logs, newLog]);
  };

  const genLocations = (outdata) => {
      let locationsArray = []
      outdata.forEach(element => {
        let obj ={
          description: element.Description,
          place: element.Location,
          timeIn: element["Time-In"].toISOString(),
          timeOut: element["Time-Out"].toISOString()
        }
        locationsArray.push(obj)
      });
      return locationsArray
  }

  useEffect(() => {
    let email = localStorage.getItem('User')
    setEmail(email)
    if (!email){
      router.push('/')
    }else{
      getAlerts(email).then((results) => {
        results.data.Exposed.forEach((element) => {
          var d = new Date();
          d.setDate(d.getDate() - 3);
          if (new Date(element.date) >= d){
            setShowAlert(true)
          }
        })
        setAlerts(results.data)
      })
      getLogs(email).then((results) => {
        setLogs(results.data.logs)
      })
    }
  }, []);

  const nav = (childData) => {
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
        <Nav handleClick={nav} showAlert={showAlert}/>
        {view == 0 ? (
          <CalendarView className="flex-grow" userLogs={logs} removeLog={removeLog} addLog={addLog}/>
        ) : (
          <AlertsView className="flex-grow" alerts={alerts}/>
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
