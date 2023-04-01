import "./index.css";
import { useState } from "react";

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import {} from "react-icons/bs";
function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen text-black dark:text-white dark:bg-slate-900 px-4 py-2 ">
        <section className="flex justify-between flex-col md:flex-row py-6 px-4">
          <div className=" flex justify-between items-center">
            <div>
              <p className="font-burtons">Developed by Juandre1298</p>
            </div>
            <button
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              {darkMode ? (
                <BsMoonStarsFill className="text-teal-600 text-2xl" />
              ) : (
                <BsFillSunFill className="text-yellow-500 text-3xl" />
              )}
            </button>
          </div>
          <ul className="flex item-center mx-auto  gap-6">
            <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Homa
            </li>
            <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Projects
            </li>
            <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Experience
            </li>
            <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Resume
            </li>
            <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Contact
            </li>
          </ul>
        </section>

        <section className="pt-16 font-medium px-16 flex gap-16 box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);">
          <div className="flex flex-col gap-10">
            <h1 className="text-4xl">Hi, My name is Juan Andres Salas! </h1>
            <h2>
              I'm a <span>Mechanical Engineer</span> and
              <span>Frond end Web developer</span> with pastion and skills
            </h2>
          </div>
          <img
            className="w-96"
            src="../public/somedude.jpg"
            alt="miguelAngel face"
          />
        </section>

        <section>
          <div className=" bg-gray-400 text-white absolute left-0 px-2 py-3 rounded-r-lg dark:bg-slate-950 top-44">
            <ul className="flex flex-col gap-3 text-2xl">
              <il className=" hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300 ">
                <a href="https://github.com/juandre1298" className="group">
                  <AiFillGithub />
                  <div className="hidden group-hover:block absolute bg-gray-400 text-sm">
                    https://github.com/juandre1298
                  </div>
                </a>
              </il>
              <li className="hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300">
                <a href="https://www.linkedin.com/in/juan-andres-salas/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li className="hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300">
                <a href="">
                  <AiFillMail />
                </a>
              </li>
              <li className="hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300">
                <a href="">
                  <AiFillPhone />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <a href="https://github.com/juandre1298">
              <lAiFillGithub />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
