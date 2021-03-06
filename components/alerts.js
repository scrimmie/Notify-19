import AlertCard from "../components/alert";

export default function AlertsView({ alerts }) {

  var i= 0
  return (
    <>
      <div className="grid max-w-sm max-h-sm m-auto justify-items-center mt-10">
        {alerts.Exposed.map((c) => (
          <AlertCard alert={c} key={i++}/>
        ))}
      </div>
    </>
  );
}
