import { 
	FiMail,
	FiInstagram,
	FiTwitter,
  FiGithub
} from "react-icons/fi";

export default function Footer() {
  return (
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
                href="/assets/BlairHacks_6 Sponsorship Package.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Sponsorship package
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
