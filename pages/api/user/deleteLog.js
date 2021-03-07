import { prisma } from "../_base";

export default async function deleteLogHandler(req, res) {

    const {
      body: { email, logID },
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

        const deletePosts = await prisma.location.deleteMany({
            where: {
              logId: logID,
            },
          })

        const userLogs = await prisma.log.delete({
            where: { id: logID }
          });

        res.status(200).json({ message: "successfully deleted" })
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }