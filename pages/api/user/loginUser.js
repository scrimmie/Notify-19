import { prisma } from "../_base";

export default async function userLoginHandler(req, res) {
  const {
    body: { email, password },
    method,
  } = req;

  switch (method) {
    case "POST":
      if (!email || !password) {
        return res.status(400).json({
          status: "error",
          error: "Request missing username or password",
        });
      }
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      
      if (!user) {
        /* Send error with message */
        res.status(400).json({ status: 'error', error: 'User Not Found' });
      }else if (user.email == email && user.password == password){
        res.status(200).json({ login: true });
      }else{
        res.status(400).json({ status: 'error', error: 'Invalid Password' });
      }

      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
