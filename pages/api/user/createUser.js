import { prisma } from "../_base";

export default async function userCreateHandler(req, res) {
    const {
      body: { name, email, dob, password },
      method,
    } = req

    switch (method) {
      case 'POST':
        await prisma.user.create({
            data: {
              name: name,
              email: email,
              dob: dob,
              password: password,
              logs: undefined
            },
          })
        res.status(200).json({ message: "successful" })
        break
      default:
        res.setHeader('Allow', ['POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  }