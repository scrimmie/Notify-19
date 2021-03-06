import { prisma } from "../_base";

export default async function userLoginHandler(req, res) {
  const {
    body: { email },
    method,
  } = req;

  let today = new Date()
  let twoWeeksAgo = new Date()
  twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14)

  switch (method) {
    case "POST":
      if (!email) {
        return res.status(400).json({
          status: "error",
          error: "User not logged in",
        });
      }
      const positiveLogs = await prisma.log.findMany({
        where: {
            date: {
              gte: twoWeeksAgo,
              lt:  today
            },
            tested: {
                equals: true,
            },
        },
        include: {
            locations: true
        }
      });

      const userLogs = await prisma.log.findMany({
        where: {
            userEmail: {
              equals:email 
            },
          },
        include: {
            locations: true
        }

      });

      var matchingDates = []

        positiveLogs.forEach((i) => {
            userLogs.forEach((q) => {
                let positiveDate = new Date(i.date)
                let userDate = new Date(q.date)
                if(positiveDate.getDate() == userDate.getDate()){
                    matchingDates.push({other: i, user: q})
                }
            })
        })

        var alerts = []
        matchingDates.forEach((element) => {
            //take logs from other and logs from user
            //if 
            var otherLocations = element.other.locations
            var userLocations = element.user.locations

            otherLocations.forEach((locationOther) => {
                userLocations.forEach((locationUser) => {
                    if((new Date(locationOther.timeIn) <= new Date(locationUser.timeOut)) && (new Date(locationUser.timeIn) <= new Date(locationOther.timeOut))) {
                        if(locationOther.place == locationUser.place && !alerts.includes(locationOther)){
                            alerts.push(locationOther)
                        }
                    }
                })
            })
        })
        let formattedAlerts = []

        alerts.forEach((alert) => {
            let formattedObj = {
                location: alert.place,
                description: alert.description,
                date: new Date(alert.timeIn),
                image: "/images/Drexel.png"
            }
            formattedAlerts.push(formattedObj)
        })

      

      res.status(200).json({ Exposed: formattedAlerts });


      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
