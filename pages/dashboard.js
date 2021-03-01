import Head from 'next/head'
import background from "../public/images/map.png"
import Nav from "../components/nav"

export default function Dashboard() {
    return (
        <div>
            <Head>
                <title>Notify-19 Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className="bg-cover bg-center bg-white h-full min-h-screen"
                style={{ backgroundImage: `url(${background})` }}
            >
            <Nav/>




            </div>
            
        </div>
    );
}
