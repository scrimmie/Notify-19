import Image from 'next/image'
import Head from 'next/head'
import background from "../public/images/map.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Notify-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className="bg-cover bg-center bg-white h-full min-h-screen" style={{ backgroundImage: `url(${background})` }}>
          <div className="flex h-screen">
            <div className="m-auto">
              <div className="p-10">
              <Image
                src="/images/logo.png"
                alt="Picture of the author"
                width={397}
                height={137}
                layout="intrinsic" // required
              />
              </div>
              <div>hi</div>
            </div>
          </div>
          
        </div>

    </div >
  )
}
