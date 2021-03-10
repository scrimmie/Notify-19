import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./loggingModal";
import LogCard from "../components/log"

export default function CalendarView({ userLogs, removeLog, addLog }) {
  const [value, onChange] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  // const [buttonClick, setbuttonClick] = useState(false);

  const [date, setDate] = useState(new Date());
  const [dateArray, setDateArray] = useState([]);

  // useEffect(() => {
  //   if(buttonClick){
  //     setShowModal(true)
  //   }
  // }, [date]);

  const calendarClick = (value) => {
    setDate(new Date(value));
    setShowModal(true);
  };

  const modalIn = (childData) => {
    setShowModal(childData);
  };

  const datesAreOnSameDay = (first, second) =>
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate();

  const checkDate = (date) => {
    if(!date){
      return false
    }else{
      let counter = 0
      userLogs.forEach((element) => {
        if(datesAreOnSameDay(new Date(element.date), date)){
          counter += 1
        }
      })
      if(counter >=1 ){
        return true
      }else{
        return false
      }
    }
  };


  const tileDisable = ({ date, view }) =>
    view === "month" && (date > new Date() || checkDate(date))
      ? <></>
      : null;

  return (
    <>
      {showModal ? <Modal modalClick={modalIn} date={date} addLog={addLog}></Modal> : <></>}
      {!userLogs ? <div className="h-screen w-screen"></div> :
        <div className="grid m-auto justify-items-center mt-10">
          <Calendar
            maxDetail="month"
            showWeekNumbers={false}
            calendarType="US"
            onChange={onChange}
            value={value}
            onClickDay={(value) => calendarClick(value)}
            tileDisabled={tileDisable}
          />
          <button
            onClick={() => {setDate(new Date());setShowModal(true)}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 md:w-32 lg:w-48 mt-10"
          >
            Log Today
          </button>
          <div className="mt-14 justify-self-center">
            {userLogs.map((log, index) => (
              <>
              <LogCard log={log} date={new Date(log.date)} remove={removeLog} index={index} key={index}></LogCard>
              </>
            ))}
          </div>
        </div>
      }
    </>
  );
}
