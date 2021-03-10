![Notify-19 Logo](https://notify-19.herokuapp.com/_next/image?url=%2Fimages%2Flogo.png&w=640&q=75g)

This project is a Next.js app created to help students and faculty on a campus track their possible exposure to COVID-19. This allows users to log locations that they have visited in a day as well as offers them alerts to notify them of possible exposure.

The application can be viewed here: [https://notify-19.herokuapp.com/](https://notify-19.herokuapp.com/)

## Getting Started (Running this project locally)

First run the following command in the rood directory (ensure you are using node v14.0.0 or higher):
```bash
npm install
```
Ensure that you have a local postgresSQL database set up with the correct information added to a new .env file in the root directory
```bash
cd notify-19
vim .env
```
Then paste the following lines in and update with relevant information
```bash
DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```
Then you can push the database schema to the database using the following command:
```bash
prisma migrate dev --preview-feature
```
Then, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page!

From here the app should be up and running with all functionality.
