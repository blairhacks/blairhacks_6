import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
// import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';

import { BsPeopleFill } from "react-icons/bs";
import { MdMoneyOff, MdOutlineMarkunreadMailbox } from "react-icons/md";
import { AiOutlineSmile } from "react-icons/ai";

export default function Home() {
  // const [formOpen, setFormOpen] = useState(false);

  return <>
    <Head>
      <title>BlairHacks_6: March 25-26, 2023</title>
      <meta name="description" content="BlairHacks_6 is a hackathon hosted by high school students in Silver Spring, MD. Join us for a weekend, where we&apos;ll discover the joy of coding, build and showcase cool projects, and make new friends!"/>
    </Head>

    <Navbar/>

    <main className="px-8 py-10 container max-w-6xl flex flex-col gap-4">
      <section className="flex flex-col md:flex-row gap-6 md:gap-20">
        <div>
          <h1 className="text-4xl font-bold">
            BlairHacks_6
          </h1>
          <p className="pl-[1px] text-lg font-thin">
            March 25-26, 2023 <span className="text-theme-secondary font-medium underline underline-offset-1">@ Montgomery College: Silver Spring/Takoma Park</span>
          </p>
        </div>
        {/* <div className="px-4 py-2.5 flex-1 border-2 border-theme-secondary/50 rounded-lg">
          <p className="text-theme-secondary font-medium">
            Event updates [1.22.2023]
          </p>
          <p className="text-sm text-theme-secondary font-thin leading-4 mt-0.5">
            Our dates have changed to February 18-19, 2023 at 10AM-6PM (Sat) and 10AM-6PM (Sun).
            This will not be an overnight event. Registration is temporarily disabled — check back soon!
          </p>
        </div> */}
      </section>

      <section className="flex flex-col-reverse md:flex-row gap-16 mt-2">
        <div className="flex-1 flex flex-col gap-12">
          <Gallery/>

          <div className="text-lg font-thin">
            <p>
              BlairHacks is an annual hackathon <span className="text-theme-onBackground/50">(collaborative coding event)</span> hosted by high school students in Silver Spring, MD.
              This year, BlairHacks_6 is happening in March, and we&apos;re going all in with hands-on activities, huge prizes, and tons of fun.
              Join us for a weekend, where we&apos;ll discover the joy of coding, build and showcase cool projects, and make new friends!
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              Overview
            </h2>

            <p className="font-thin mt-2">
              BlairHacks_6 will take place in 2 days — virtually on Saturday and in-person on Sunday.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="px-4 py-4 border-[3px] border-theme-secondary/75 rounded-xl">
                <h3 className="font-bold font-monoone -mt-7">
                  <span className="px-1 bg-theme-background">Day 1</span>
                </h3>

                <p className="text-sm font-thin italic mt-1">
                  Saturday 3/25, online over Discord+Zoom
                </p>

                <ul className="pl-2 list-disc list-inside text-sm mt-2">
                  <li>Form a team of up to 4</li>
                  <li>Brainstorm a project that addresses the prompt</li>
                  <li>Join workshops and learn some new topics</li>
                  <li>Start working on your project!</li>
                </ul>
              </div>

              <div className="px-4 py-4 border-[3px] border-theme-secondary/75 rounded-xl">
                <h3 className="font-bold font-monoone -mt-7">
                  <span className="px-1 bg-theme-background">Day 2</span>
                </h3>

                <p className="text-sm font-thin italic mt-1">
                  Sunday 3/26, 10AM-6PM @ Montgomery College Takoma Park/Silver Spring Campus
                </p>

                <ul className="pl-2 list-disc list-inside text-sm mt-2">
                  <li>Meet up with your team and submit your project</li>
                  <li>Showcase your work at the project expo</li>
                  <li>Join a hardware workshop and a tech escape room activity</li>
                  <li>Win prizes and get swag!</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              Competition
            </h2>

            <p className="font-thin mt-2">
              You can form teams of up to 4 people or work by yourself.
              Each team will create a project — a website, game, app, or anything else — that addresses the prompt that will be revealed at the beginning of the event.
              On day 2, you&apos;ll have the opportunity to showcase your project at the project expo, and win awesome, custom prizes and swag for it!
            </p>

            <div className="px-4 py-2 border-[3px] border-fuchsia-200/75 rounded-xl mt-8">
              <h3 className="font-medium text-sm font-monoone -mt-5">
                <span className="px-1 bg-theme-background">Prizes 🏆</span>
              </h3>

              <div className="flex flex-wrap items-center gap-6 mt-2">
                <img src="/assets/prizes/gamingheadphones.png" className="h-12"/>
                <img src="/assets/prizes/bluetoothspeaker.png" className="h-12"/>
                <img src="/assets/prizes/echodot.png" className="h-12"/>
                <img src="/assets/prizes/airtags.png" className="h-12"/>
                <img src="/assets/prizes/wirelessearbuds.png" className="h-12"/>
                <img src="/assets/prizes/gamingmouse.png" className="h-12"/>
                <img src="/assets/prizes/bluesnowball.png" className="h-12"/>
                <img src="/assets/prizes/wireartkit.png" className="h-12"/>
              </div>

              <p className="text-sm text-right font-thin italic mt-1">
                ... and more!!
              </p>
            </div>

            {/* <div className="relative px-4 py-2 border-b-[3px] border-fuchsia-200/75 bg-gradient-to-t from-fuchsia-200/5 via-transparent to-transparent mt-4">
              <h3 className="font-medium text-sm font-monoone absolute -bottom-3">
                <span className="px-1 bg-theme-background">Prizes 🏆</span>
              </h3>

              <div className="flex flex-wrap items-center gap-6 mt-2">
                <img src="/assets/prizes/gamingheadphones.png" className="h-12"/>
                <img src="/assets/prizes/bluetoothspeaker.png" className="h-12"/>
                <img src="/assets/prizes/echodot.png" className="h-12"/>
                <img src="/assets/prizes/airtags.png" className="h-12"/>
                <img src="/assets/prizes/wirelessearbuds.png" className="h-12"/>
                <img src="/assets/prizes/gamingmouse.png" className="h-12"/>
                <img src="/assets/prizes/bluesnowball.png" className="h-12"/>
                <img src="/assets/prizes/wireartkit.png" className="h-12"/>
              </div>

              <p className="text-sm text-right font-thin italic mt-1">
                ... and more!!
              </p>
            </div> */}
          </div>

          <div>
            <h2 className="text-2xl font-medium">
              Workshops + activities
            </h2>

            <p className="font-thin mt-2">
              We&apos;ll run plenty of hardware and software workshops as well as fun activities throughout the 2-day event!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="px-4 py-4 border-[3px] border-blue-200/75 rounded-xl">
                <h3 className="text-sm font-bold font-monoone -mt-7">
                  <span className="px-1 bg-theme-background">Software</span>
                </h3>

                <p className="text-sm font-thin mt-1">
                  <span className="italic">Day 1</span> — Learn new languages and tools that you can use to develop your project!
                </p>

                <ul className="pl-2 list-disc list-inside text-sm mt-2">
                  <li>🌐 Web development with HTML/CSS</li>
                  <li>🐍🎮 Python + Pygame</li>
                  <li>🛠️ Advanced web frameworks</li>
                </ul>

                <p className="text-sm font-thin mt-1">
                  and more!
                </p>
              </div>

              <div className="relative row-span-2 px-4 py-4 border-[3px] border-blue-200/75 rounded-xl">
                <h3 className="text-sm font-bold font-monoone -mt-7">
                  <span className="px-1 bg-theme-background">Hardware</span>
                </h3>

                <p className="text-sm font-thin mt-1">
                  <span className="italic">Day 2</span> — Make code come to life with Raspberry Pi Picos
                </p>

                <ul className="pl-2 list-disc list-inside text-sm mt-2">
                  <li>
                    Make gadgets and control objects in real life with Python and a microcontroller
                  </li>
                  <li>
                    You&apos;ll even get to keep and take home some hardware!
                  </li>
                </ul>

                <img src="/assets/hardware_graphic.png" className="absolute w-1/3 bottom-0 right-4"/>
              </div>

              <div className="px-4 py-4 border-[3px] border-blue-200/75 rounded-xl">
                <h3 className="text-sm font-bold font-monoone -mt-7">
                  <span className="px-1 bg-theme-background">Tech escape room</span>
                </h3>

                <p className="text-sm font-thin mt-1">
                  <span className="italic">Day 2</span> — Team up and use your combined tech knowledge and skills to escape!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-mt-24 md:w-72">
          <div className="pt-24 sticky top-0">
            <div className="px-4 py-2.5 flex-1 border-2 border-theme-secondary/50 rounded-lg">
            <p className="text-theme-secondary font-medium">
              Event updates [2.12.2023]
            </p>
            <p className="text-sm text-theme-secondary font-thin leading-4 mt-0.5">
              We apologize for the confusion in the past few weeks. Our dates have changed to March 25-26, 2023, and registration is now reopened! See updated event details on the left.
            </p>
            <p className="text-sm text-theme-secondary font-thin leading-4 mt-3">
              <span className="font-bold">Note:</span> If you&apos;ve registered for the event before our date changes, please re-register.
            </p>
          </div>

            <p className="text-sm font-thin mt-6">
              Spots are limited, register now!
            </p>

            <a href="https://form.typeform.com/to/bxlqbYuD" target="_blank" rel="noreferrer noopener">
              <button className="w-full px-4 py-3 bg-theme-onSurface text-theme-surface text-sm uppercase font-semibold rounded-lg mt-2">
                Register (~2 mins)
              </button>
            </a>

            {/* <button className="w-full px-4 py-3 bg-theme-onSurface text-theme-surface text-sm uppercase font-semibold rounded-lg opacity-50 cursor-not-allowed mt-2" disabled>
              Register
            </button> */}

            {/* <button
              className="w-full px-4 py-2.5 border flex items-center justify-center gap-2 border-theme-onSurface hover:bg-theme-onSurface/5 text-sm font-semibold uppercase rounded-lg transition ease-in-out duration-400 mt-2.5"
              onClick={() => setFormOpen(true)}
            >
              <MdOutlineMarkunreadMailbox size={16}/>
              <span>Remind me</span>
            </button> */}

            {/* <NewsletterForm
              open={formOpen}
              setOpen={setFormOpen}
            /> */}

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

      <section className="mt-16">
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
            <h3 className="text-lg leading-6">When and where will BH6 happen?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
            Day 1 will happen virtually though Discord and Zoom on March 25th. Day 2 will be in-person at Montgomery College Silver Spring/Takoma Park Campus on March 26th.
            </p>
          </div>

          <div className="px-5 py-4 bg-theme-surface text-theme-onSurface rounded-xl">
            <h3 className="text-lg leading-6">Will meals be provided?</h3>
            <p className="text-theme-onSurface/75 text-sm font-thin mt-1.5">
              Yes! On day 2, we&apos;ll provide meals, snacks, and beverages on-site, as well as swag, prizes, and fun activities.
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
          <a href="https://www.mbhsmagnet.org" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/magnet_foundation.png"
              alt="Magnet Foundation"
              width={150}
              height={150}
            />
          </a>

          <a href="https://www.mindpointgroup.com/" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/mindpoint.svg"
              alt="Mindpoint Group"
              width={200}
              height={200}
            />
          </a>

          <a href="https://www.subway.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/subway.svg"
              alt="Subway"
              width={200}
              height={100}
            />
          </a>

          <a href="https://www.stickergiant.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/stickergiant.png"
              alt="StickerGiant"
              width={150}
              height={150}
            />
          </a>

          <a href="https://www.leangap.org" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/leangap.svg"
              alt="Leangap"
              width={150}
              height={150}
              />
          </a>
          
          <a href="https://artofproblemsolving.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/aops.svg"
              alt="AoPS"
              width={200}
              height={150}
            />
          </a>

          <a href="https://www.taskade.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/taskade.png"
              alt="Taskade"
              width={150}
              height={150}
            />
          </a>
          
          <a href="https://www.echo3d.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/echo3D.png"
              alt="echo3D"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </a>
          
          <a href="https://wolfram.com" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/wolfram.png"
              alt="Wolfram"
              width={120}
              height={120}
            />
          </a>
          
          <a href="https://try.digitalocean.com/developer-cloud" target="_blank" rel="noreferrer noopener">
            <Image
              src="/assets/sponsors/digitalocean.png"
              alt="DigitalOcean"
              width={120}
              height={120}
            />
          </a>
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