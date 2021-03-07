import DateCard from "../components/date";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";


export default function LogCard({ log, date, remove, index }) {


  return (
    <>
      <div className=" w-screen max-w-lg max-h-screen grid grid-rows-3 grid-cols-3 shadow-lg bg-gray-400 bg-opacity-70 mt-2 mb-2 rounded-lg	">
        {/* <div className="justify-self-start self-center w-auto">
      </div> */}
        <button className="col-span-3 justify-self-center my-5" onClick={() => {remove(index)}}>
        <label className="flex">Remove Logged Day
          <FontAwesomeIcon
            className="h-7 ml-1 text-black cursor-pointer leading-none border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none justify-self-center self-center"
            icon={faTimesCircle}
          />
          </label>
        </button>
        <div className="py-5 flex-none justify-self-center row-span-full content-center items-center my-auto">
          <DateCard className="" date={date} />
        </div>
        <div className="flex-col row-span-full col-span-2">
          {log.locations.map((location) => (
            <>
              <div className="font-semibold text-black overflow-clip  p-2 bg-gray-200 m-2 rounded-md grid grid-rows-2 grid-cols-3">
                <h5 className="underline col-span-3">{location.place}</h5>
                <h4 className="">
                  {new Date(location.timeIn).toLocaleTimeString("en-US")}
                </h4>
                <FontAwesomeIcon
                  className=" h-7  text-black cursor-pointer leading-none border border-solid border-transparent rounded bg-transparent block outline-none focus:outline-none justify-self-center self-center"
                  icon={faArrowRight}
                />
                <h4 className="">
                  {new Date(location.timeOut).toLocaleTimeString("en-US")}
                </h4>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
