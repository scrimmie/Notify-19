import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

export default function CalendarView() {
  const [value, onChange] = useState(new Date());

  const print = (value) => {
    console.log(new Date(value));
  };

  return (
    <>
      <div className="grid max-w-sm max-h-sm m-auto justify-items-center mt-10">
        <Calendar
          className=""
          maxDetail="month"
          showWeekNumbers={false}
          calendarType="US"
          onChange={onChange}
          value={value}
          onClickDay={(value) => print(value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-28 md:w-32 lg:w-48 mt-10">
                Log Today
        </button>
      </div>
    </>
  );
}
