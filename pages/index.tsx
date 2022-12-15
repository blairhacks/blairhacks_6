import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

import { BsPeopleFill } from "react-icons/bs";
import { MdMoneyOff, MdOutlineMarkunreadMailbox } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);

  return <>
    <Head>
      <title>BlairHacks_6: February 17-18, 2023</title>
      <meta name="description" content="BlairHacks_6 is a 24-hour hackathon hosted by Montgomery Blair HS students in Silver Spring, MD. Join us for a weekend, where we'll discover the joy of coding, build and showcase cool projects, and make new friends!"/>
    </Head>

    <Navbar/>

    <main className="px-8 py-10 container max-w-6xl flex flex-col gap-4">
      <section>
        <h1 className="text-4xl font-bold">
          BlairHacks_6
        </h1>
        <p className="pl-[1px] text-lg font-thin">
          February 17-18, 2023 <span className="text-theme-secondary font-medium underline underline-offset-1">@ Montgomery Blair HS</span>
        </p>
      </section>

      <section className="flex flex-col-reverse md:flex-row gap-16 mt-2">
        <div className="flex-1">
          <Gallery/>

          <div className="py-12 text-lg font-thin">
            <p>
              BlairHacks_6 is a 24-hour hackathon <span className="text-theme-onBackground/50">(social coding event)</span> hosted by Montgomery Blair HS students in Silver Spring, MD.
              This year, BlairHacks is happening in-person for the first time since 2020, and we&apos;re going all-in with hands-on activities, huge prizes, and tons of fun.
              Join us for a weekend, where we&apos;ll discover the joy of coding, build and showcase cool projects, and make new friends!
            </p>
          </div>
        </div>
        <div className="-mt-24 md:w-72">
          <div className="pt-24 sticky top-0">
            <div className="aspect-video bg-theme-surface/0 rounded-xl flex items-center justify-center bg-[url(/assets/steeple_banner_outline.png)] bg-cover bg-center saturate-50 overflow-hidden">
              <p className="text-7xl font-glitch">6</p>
              {/* <p className="text-7xl font-vinyl">6</p> */}
            </div>

            <p className="text-sm font-thin mt-8">
              Registrations open in January 2023
            </p>

            {/* <button className="w-full px-4 py-3 bg-theme-onSurface text-theme-surface text-sm uppercase rounded-lg mt-2">
              Register
            </button> */}
            <button
              className="w-full px-4 py-2.5 border flex items-center justify-center gap-2 border-theme-onSurface hover:bg-theme-onSurface/5 text-sm font-semibold uppercase rounded-lg transition ease-in-out duration-400 mt-2.5"
              onClick={() => setFormOpen(true)}
            >
              <MdOutlineMarkunreadMailbox size={16}/>
              <span>Remind me</span>
            </button>

            <NewsletterForm
              open={formOpen}
              setOpen={setFormOpen}
            />

            <ul className="px-4 flex flex-col gap-4 font-thin mt-8">
              <li className="flex justify-start items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <BsPeopleFill size={20}/>
                </div>
                <p className="">
                  All high school students welcome
                </p>
              </li>

              <li className="flex justify-start items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <MdMoneyOff size={20}/>
                </div>
                <p className="">
                  Everything is free
                </p>
              </li>

              <li className="flex justify-start items-center min-h-[2rem] gap-5 leading-5">
                <div>
                  <AiOutlineSmile size={20}/>
                </div>
                <p className="">
                  Beginners welcome
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-4">
        <h2 className="text-2xl font-medium">
          FAQs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">What is a hackathon?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              A hackathon is a coding marathon event where people come together to create apps, games, and solutions to address a common real-world problem.
              The problem can be big or small, serious or comedic!
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">Do we actually hack?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              No, that&#39;s not what we mean by &quot;hack&quot;! Hacking is
              a general term for finding creative solutions with code to solve
              problems we see around us.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">Am I elligible to participate?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              If 18 and under, and a high school student, yes!! If you&apos;re younger, shoot us an email at <a href="mailto:team@blairhacks.com" className="underline underline-offset-1">team@blairhacks.com</a>.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">Does it cost anything?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              Nope! Everything is free. We&apos;ll provide meals, snacks, and beverages on-site, as well as swag, prizes, and fun activities.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">What do I need to bring?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              Bring your laptop, chargers, toiletries, sleeping bags/pillows/blankets, and an open mind!
              Also, you can optionally bring some hardware or other materials for your project.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">What are the sleeping arrangements?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              There will be designated gender-separated rooms for sleeping with over-night supervision. Make sure to bring something to sleep on! (sleeping bag, pillows, blankets, etc.)
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">I&apos;m new to coding. Can I join?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              Yes!! The focus of BH6 is to learn new things and have fun. We&apos;ll have mentors and workshops covering a bunch of fascinating topics to help you get started.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">When and where will BH6 happen?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              February 17th-18th, 2023 at Montgomery Blair High School. We&apos;ll send out more details as the event gets closer!
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">I have more questions!</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              Contact us! Our email is <a href="mailto:team@blairhacks.com" className="underline underline-offset-1">team@blairhacks.com</a>, and our socials are linked below too.
            </p>
          </div>
        </div>
      </section>


      <section className="mt-8">
        <h2 className="text-2xl font-medium">
          Sponsors
        </h2>
        <p className="text-lg font-thin">
          Our partners and supporters that are making this event free and possible.
        </p>

        <div className="flex justify-center sm:justify-start items-center flex-wrap gap-6 sm:gap-12 mt-6">
          <Image
            src="/assets/sponsors/magnet_foundation.png"
            alt="Magnet Foundation"
            width={150}
            height={150}
          />

          {/* <Image
            src="/assets/sponsors/leangap.svg"
            alt="Leangap"
            width={150}
            height={150}
          /> */}

          <Image
            src="/assets/sponsors/stickergiant.png"
            alt="StickerGiant"
            width={150}
            height={150}
          />

          <Image
            src="/assets/sponsors/taskade.png"
            alt="Taskade"
            width={200}
            height={150}
          />
        </div>
        <p className="text-lg font-thin mt-6">
          Want to sponsor this event?{" "}
          <a
            className="text-theme-secondary font-medium underline cursor-pointer"
            href="/assets/BlairHacks_6 Sponsorship Package.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            See our sponsorship package →
          </a>
        </p>
        <p className="font-thin">
          (or make a{" "}
          <a
            className="text-theme-secondary font-medium underline cursor-pointer"
            href="https://blairhacks.com/donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            tax-deductible donation
          </a>
          )
        </p>
      </section>
    </main>

    <Footer/>
  </>;
}