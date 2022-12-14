import Head from 'next/head';

import { 
	FiMail,
	FiInstagram,
	FiTwitter,
  FiGithub
} from "react-icons/fi";
import { BsPeopleFill } from "react-icons/bs";
import { MdMoneyOff } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";

export default function Home() {
  return <>
    <Head>
      <title>BlairHacks_6</title>
      {/* <meta name="description" content="by @linkai101 on github" /> */}
    </Head>

    <div className="bg-theme-surface text-theme-onSurface sticky top-0 border-b-8 border-theme-background">
      <nav className="px-6 py-3">
        <img
          src="/assets/logo_mono.png"
          className="w-8 aspect-square"
        />
      </nav>
    </div>

    <main className="px-8 py-12 container max-w-6xl flex flex-col gap-4">
      <div>
        <h1 className="text-4xl font-bold">
          BlairHacks_6
        </h1>
        <p className="pl-[1px] text-lg font-thin">
          February 17-18, 2023 <span className="text-theme-primaryVariant font-medium underline underline-offset-1">@ Montgomery Blair HS</span>
        </p>
      </div>

      <div className="flex gap-16 mt-2">
        <div className="flex-1">
          <div className="aspect-video flex gap-8 snap-x snap-mandatory overflow-x-auto rounded-xl hide-scroll">
            <div className="h-full w-full basis-full grow-0 shrink-0 snap-center bg-theme-surface rounded-xl"></div>
            <div className="h-full w-full basis-full grow-0 shrink-0 snap-center bg-theme-surface rounded-xl"></div>
          </div>

          <div className="container max-w-2xl h-16 flex gap-4 overflow-x-auto hide-scroll mt-4">
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
            <div className="flex-none aspect-video bg-theme-surface rounded-lg"></div>
          </div>

          <div className="py-12 text-lg font-thin">
            <p>
              BlairHacks_6 is a 24-hour hackathon <span className="text-theme-onBackground/50">(social coding event)</span> hosted by Montgomery Blair HS students in Silver Spring, MD.
              This year, BlairHacks is happening in-person for the first time since 2020, and we&apos;re going all-in with fun activities, huge prizes, and tons of fun.
              Join us for a weekend, where we&apos;ll discover the joy of coding, build and showcase cool projects, and make new friends!
            </p>
          </div>
        </div>
        <div className="-mt-24 w-72">
          <div className="pt-24 sticky top-0">
            <div className="aspect-video bg-theme-surface rounded-xl flex items-center justify-center bg-[url(/assets/steeple_banner.jpg)] bg-cover bg-center saturate-50 overflow-hidden">
              <p className="text-7xl font-vinyl">6</p>
            </div>

            <p className="text-sm font-thin mt-8">
              Registrations open in January 2023
            </p>

            {/* <button className="w-full px-4 py-3 bg-theme-onSurface text-theme-surface text-sm uppercase rounded-lg mt-2">
              Register
            </button> */}
            <button className="w-full px-4 py-2.5 border border-theme-onSurface hover:bg-theme-onSurface/5 text-sm font-semibold uppercase rounded-lg transition ease-in-out duration-400 mt-2.5">
              Remind me
            </button>

            <ul className="px-4 flex flex-col gap-4 font-thin mt-8">
              <li className="flex justify-between items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <BsPeopleFill size={20}/>
                </div>
                <p className="text-right">
                  All MoCo high school students welcome
                </p>
              </li>

              <li className="flex justify-between items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <MdMoneyOff size={20}/>
                </div>
                <p className="text-right">
                  Everything is free
                </p>
              </li>

              <li className="flex justify-between items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <AiOutlineSmile size={20}/>
                </div>
                <p className="text-right">
                  Beginner friendly
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <div className="mt-4">
        <h2 className="text-2xl font-medium">
          FAQs
        </h2>
        
      </div> */}
    </main>

    <footer className="bg-theme-surface text-theme-onSurface">
      <div className="px-8 py-10 container max-w-7xl flex flex-col md:flex-row gap-8 justify-between">
        <div>
          <div className="flex items-end gap-3">
            <h2 className="text-2xl lg:text-3xl font-extrabold">
              BlairHacks_6
            </h2>
          </div>
          <p className="text-sm mt-2">
            Fiscally sponsored by The Hack Foundation
            <br />
            Nonprofit EIN: 81-2908499
          </p>
        </div>

        <div className="flex flex-col justify-end">
          <ul className="flex gap-4 text-lg">
            <li>
              <a
                href="https://instagram.com/blairhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FiInstagram size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/blairhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FiTwitter size={20} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/blairhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FiGithub size={20} />
              </a>
            </li>
            <li>
              <a
                href="mailto:team@blairhacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <FiMail size={20} />
              </a>
            </li>
          </ul>

          <h3 className="text-xl font-extrabold mt-3">Learn more</h3>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://bank.hackclub.com/blairhacks"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Our finances
              </a>
            </li>
            <li>
              <a
                href="https://blairhacks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BlairHacks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>;
}