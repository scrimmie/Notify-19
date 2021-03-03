import AlertCard from "../components/alert"

export default function AlertsView() {

    let alert = {
        location: "test",
        details: "test2",
        date: new Date()
    }

    return (
        <div>
            <AlertCard alert={alert}/>
        </div>
    );
}