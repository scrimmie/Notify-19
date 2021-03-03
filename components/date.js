export default function DateCard({ Date }) {
    const dateArray = Date.toDateString().split(' ')

  return (
    
    <div>
        <div className="w-3/12 flex-none rounded-t lg:rounded-t-none lg:rounded-l text-center shadow-lg ">
          <div className="block rounded-t overflow-hidden  text-center ">
            <div className="bg-blue-500 text-white py-1">{dateArray[0]}</div>
            <div className="pt-1 border-l border-r border-white bg-white">
              <span className="text-4xl font-bold leading-tight">{dateArray[2] }</span>
            </div>
            <div className="pt-1 border-l border-r border-white bg-white">
              <span className="text-l font-bold leading-tight">{dateArray[1] +", " + dateArray[3]}</span>
            </div>
          </div>
        </div>
      </div>
  );
}
