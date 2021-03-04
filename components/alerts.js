import AlertCard from "../components/alert";

export default function AlertsView() {
  var alertsList = [];

  let alerts = [
    {
      location: "Drexel Library",
      description:
        "Went to the library basement and study room 58. Went to the library basement and study room 58. Went to the library basement and study room 58. Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
    {
      location: "Drexel Library",
      description: "Went to the library basement and study room 58.",
      image: "/images/Drexel.png",
      date: new Date(),
    },
  ];
  var i= 0
  return (
    <>
      <div className="grid max-w-sm max-h-sm m-auto justify-items-center mt-10">
        {alerts.map((c) => (
          <AlertCard alert={c} key={i++}/>
        ))}
      </div>
    </>
  );
}
