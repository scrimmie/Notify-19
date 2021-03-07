import { prisma } from "../_base";

export default async function getLogsHandler(req, res) {

    const {
      body: { email },
      method,
    } = req

    const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

    if(!user){
        res.status(401).end(`User not Found`)
    }

    

    switch (method) {
      case 'POST':
        const userLogs = await prisma.log.findMany({
            where: {
                userEmail: {
                  equals: email 
                },
              },
            include: {
                locations: true
            },
            orderBy:
                {
                  date: 'desc',
                }   
          });

        res.status(200).json({ logs: userLogs })
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }