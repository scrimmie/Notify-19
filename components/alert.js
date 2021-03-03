import DateCard from "../components/date"

export default function AlertCard( {alert} ) {

    return (
        <div className="container min-w-52	max-w-screen h-52">
            <div className="">
            <DateCard Date={alert.date} />
            </div>
            
        </div>
    );
}