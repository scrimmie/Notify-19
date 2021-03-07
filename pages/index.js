import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import background from "../public/images/map.png";
import Login from "../components/login";
import SignUp from "../components/signup";

export default function Home() {
  const [signUp, setsignUp] = useState(false);
  const [login, setlogin] = useState(false);

  const showSignUp = (childData) => {
    setsignUp(true);
  };

  const showLogin = (childData) => {
    setsignUp(false);
  };

  return (
    <div>
      <Head>
        <title>Notify-19</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="bg-cover bg-center bg-white h-full min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="flex h-screen flex-col min-h-screen">
          <div className="grid m-auto justify-items-center">
            <div className="p-10">
              <Image
                src="/images/logo.png"
                alt="notify-19 logo"
                width={397}
                height={137}
                layout="intrinsic" // required
              />
            </div>
            {signUp ? (
              <SignUp handleClick={showLogin} />
            ) : (
              <Login handleClick={showSignUp} />
            )}
          </div>
          <div className="bg-pink-400	h-18 flex w-full text-center border-t border-grey p-4 pin-b justify-end mt-5">
            <div className="max-w-xl min-w-screen container mx-auto">
              <p className="text-white	underline font-bold	">
                This application is not meant for real use and is a
                proof-of-concept with unprotected data, please do not use real
                personal information
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
