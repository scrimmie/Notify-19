import DateCard from "../components/date";
import Image from 'next/image'

export default function AlertCard({ alert }) {
  return (
    <>
    <div className="w-screen max-w-lg max-h-screen grid grid-rows-2 grid-cols-3 grid-flow-row-dense shadow-lg content-center auto-rows-min auto-cols-min bg-gray-400 bg-opacity-70 mt-2 mb-2 rounded-lg	">
      <div className="flex w-24 h-24  m-5 self-center">
        <Image
          src={alert.image}
          alt="location image"
          width={1862}
          height={1862}
          layout="intrinsic"
        />
      </div>

      <div className="justify-self-start self-center w-auto">
        <div className="leading-5 pt-5 pb-5 ">
          <h4
            className="text-2xl font-semibold overflow-clip underline"
            style={{ color: "#e9738c" }}
          >
            {alert.location}
          </h4>
        </div>
      </div>
      <div className="flex justify-self-end self-center pr-5">
            <DateCard date={alert.date} />
          </div>
      <h5 className="font-semibold text-black overflow-clip col-span-3 p-2 bg-gray-200 m-2 rounded-md">
        {alert.description}
      </h5>
    </div>
    </>
  );
}
