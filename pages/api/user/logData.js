import { prisma } from "../_base";

export default async function l0ggingHandler(req, res) {

    const {
      body: { id, log, date, tested },
      method,
    } = req

    const mappedlogs = log.map(item => {
            let object = {
                place: item["Location"],
                timeIn: item["Time-In"],
                timeOut: item["Time-Out"],
                description: item["Description"]
            }
            return object
    })
    
    const user = await prisma.user.findUnique({
        where: {
          email: id,
        },
      });

    if(!user){
        res.status(401).end(`User not Found`)
    }

    switch (method) {
      case 'POST':
        let output = await prisma.log.create({
            data: {
              date: date,
              tested: tested,
              owner: {
                  connect: {
                      email: id
                  }
              },
              locations: {
                create: mappedlogs
            },
            },
            include: {
                locations: true
              }
          })

        res.status(200).json({ log: output })
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }