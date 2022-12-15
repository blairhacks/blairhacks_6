import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

import { FiX } from 'react-icons/fi';
import { MdOutlineMarkunreadMailbox } from 'react-icons/md';

import base from '../lib/airtable.js';

export default function NewsletterForm({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void; }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email) return;

    await base('Newsletter Form').create([
      {
        fields: {
          "Name": name,
          "Email": email,
        },
      }
    ], (err, records) => {
      if (err) {
        console.error(err);
        toast.error('Something went wrong', {
          style: {
            background: '#333',
            color: '#fff',
          },
        });
        return;
      }
      setName('');
      setEmail('');
      toast.success('You\'re on the list!', {
        style: {
          background: '#333',
          color: '#fff',
        },
      });
    });
  }

  return (<>
    <AnimatePresence>
      {open && <>
        <motion.div
          className="px-6 pb-12 pt-36 fixed inset-0 bg-black/20 overflow-y-auto z-40"
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <section
            className="container max-w-lg relative z-40"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-theme-surface/[0.97] backdrop-blur-sm drop-shadow-md rounded-xl overflow-hidden">
              <div className="px-7 py-6 flex items-center gap-6 border-b-2 border-theme-onSurface/10">
                <MdOutlineMarkunreadMailbox size={56}/>
                <div>
                  <h2 className="text-xl font-medium">
                    Join the BlairHacks newsletter
                  </h2>
                  <p className="font-thin leading-5 mt-1.5">
                    We'll send the latest updates on BlairHacks, including new events, opportunities, and more!
                  </p>
                </div>
              </div>

              <form
                acceptCharset="utf-8"
                className="p-6 flex flex-col gap-3"
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="flex-1 px-3 py-2 text-sm bg-theme-onSurface/10 rounded-lg"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="flex-1 px-3 py-2 text-sm bg-theme-onSurface/10 rounded-lg"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />

                <button
                  type="submit"
                  name="submit"
                  className="px-4 py-2 text-sm uppercase font-bold text-theme-background bg-theme-onSurface rounded-lg mt-2"
                >
                  Submit
                </button>
              </form>
            </div>

            <button
              className="p-2 absolute -top-14 right-0 text-theme-onBackground/40 hover:text-theme-secondary bg-theme-surface/50 hover:bg-theme-surface/75 rounded-full z-40 transition ease-in-out duration-300"
              onClick={() => setOpen(false)}
            >
              <FiX size="1.5rem" className="stroke-[2.5px]"/>
            </button>
          </section>
        </motion.div>
        
        <style jsx global>{`
        body {
          overflow: hidden;
        }
        `}</style>
      </>}
    </AnimatePresence>
  </>)
}
