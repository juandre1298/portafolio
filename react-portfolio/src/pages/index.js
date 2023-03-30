import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import Image from "next/image";
import hacker from "../../public/hacker.jpeg";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";
import web1 from "../../public/web1.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Juandre1298 Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className=" min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 h1 className="text-xl font-burtons">
              developed by
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Juandre1298
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Mechanical Engineer and Web Develper.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
              Some cool text about my services.. whatever... right now I'm just
              writing to fill this out and make it look like something that will
              hook or impres you
            </p>
          </div>
          <div className="flex text-5xl justify-center gap-16 py-3 text-gray-500">
            <AiFillLinkedin />
            <AiFillMail />
            <AiFillPhone />
          </div>
          <div className="relative flex justify-center rounded-full  mt-20 ">
            <Image
              src={hacker}
              className="rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96 "
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1"> Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my journy as a freelancer Develper, I've
              done remote work for{" "}
              <span className="text-teal-500"> agencies</span> consoulted by{" "}
              <span className="text-teal-500"> startups</span> and collaborated
              with talented people to create ddigital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className=" flex flex-col  items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beutiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs and theory
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <p className=" text-gray-800 ">Photoshop</p>
              <p className=" text-gray-800 ">Illustrator</p>
              <p className="text-gray-800 ">Figma</p>
            </div>
            <div className=" flex flex-col  items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beutiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs and theory
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <p className=" text-gray-800">Photoshop</p>
              <p className=" text-gray-800">Illustrator</p>
              <p className="text-gray-800">Figma</p>
            </div>
            <div className=" flex flex-col  items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Beutiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs and theory
              </p>
              <h4 className="py-4 text-teal-600">Designs tools I use</h4>
              <p className=" text-gray-800 ">Photoshop</p>
              <p className=" text-gray-800 ">Illustrator</p>
              <p className="text-gray-8001">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1"> Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              Since the beginning of my journy as a freelancer Develper, I've
              done remote work for{" "}
              <span className="text-teal-500"> agencies</span> consoulted by{" "}
              <span className="text-teal-500"> startups</span> and collaborated
              with talented people to create ddigital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 ">
              I offer from a wide range of services, including programming and
              teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}