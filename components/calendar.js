import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import Modal from "./loggingModal"


export default function CalendarView() {
  const [value, onChange] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());


  const calendarClick = (value) => {
    setDate(new Date(value));
    setShowModal(true)
  };

  const modalIn = (childData) => {
    setShowModal(childData);
  };

  return (
    <>
    {showModal ? 
      <Modal modalClick={modalIn} date={date}></Modal>:
      <></>
    }
      <div className="grid max-w-sm max-h-sm m-auto justify-items-center mt-10">
        <Calendar
          maxDetail="month"
          showWeekNumbers={false}
          calendarType="US"
          onChange={onChange}
          value={value}
          onClickDay={(value) => calendarClick(value)}
        />
        <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 md:w-32 lg:w-48 mt-10">
                Log Today
        </button>
      </div>
    </>
  );
}
