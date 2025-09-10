import React from "react";
import {
  faArrowRight,
  faArrowRightLong,
  faEnvelope,
  faExternalLink,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SidebarNav from "../components/SidebarNav";
import CursorAccent from "../components/CursorAccent";

// images
import eswatini_marketsquare from "../assets/img/eswatini-marketsquare.png";
import swift_boookings from "../assets/img/swift-bookings.png";
import elite_corporate_training from "../assets/img/elite-corporate-training.png";
import soap_shop_supplies from "../assets/img/soap-shop-supplies.png";
import tki_sasa from "../assets/img/tki-sasa.png";
import samke_nkambule from "../assets/img/samke-nkambule.png";
import resume from "../../public/Resume [Updated 26 August 2025].pdf";

const Home = () => {
  const date = new Date();

  return (
    <div className="flex min-h-screen bg-dark text-text font-light">
      <CursorAccent />
      {/* Left Pane (Sidebar) */}
      <aside className="hidden lg:flex w-2/5 pl-30 py-8 pr-8 flex-col justify-between fixed top-0 left-0 h-screen rounded-2xl">
        <div className="pt-8">
          <h2 className="font-bold text-4xl text-gray-300">Kwanele Simelane</h2>
          <p className="text-md mb-2 font-light">Software Engineer</p>
          <small className="text-lg text-text font-semibold">
            Exploring the data, & fintech landscape
          </small>
        </div>

        <p className="text-xs">
          <FontAwesomeIcon
            icon={faPlay}
            className="mr-2 text-primary blinking"
          />
          Currently hacking on &mdash;{" "}
          <a
            target="_blank"
            href="https://github.com/kwanele-simelane/exchange-rates"
            className="underline italic hover:no-underline text-primary">
            Exchange Rates API
          </a>
        </p>

        <SidebarNav />

        <div className="flex space-x-2">
          <a target="_blank" href="https://github.com/kwanele-simelane">
            <FontAwesomeIcon icon={faGithub} className="text-2xl" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/kwanele-dev/">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
          </a>
          <a target="_blank" href="mailto:sizwekwanele14@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
          </a>

          <p>&mdash; &copy; | {date.getFullYear()}</p>
        </div>
      </aside>

      {/* Right Pane (Main Content) */}
      <main className="flex-1 lg:ml-[40%] px-12 pb-8 overflow-y-auto">
        <section id="about" className="pt-16">
          <p className="text-gray-400 max-w-prose">
            Hi I'm Kwanele, a Software Developer. Passionate about technology, I
            craft software that lives at the crossroads of elegance and utility,
            where clean but sophisticated technology meets the pulse of everyday
            life. My focus is on transforming complex problems into intuitive
            digital experiences, bridging the gap between innovation and the
            people it’s meant to serve.
            <br className="my-2 block" />
            <br className="my-2 block" />
            Currently a fullstack developer at <a href="#">Digimage</a>,
            specializing in API integrations and accessibility, I contribute in
            the upgrading of systems, integrating payments and customizing
            interfaces, ensuring applications are built to meet industry
            standard whilst employing best practices to deliver inclusive user
            experiences
            <br className="my-2 block" />
            <br className="my-2 block" />
            I've had the opportunity to express my abilities with established
            industry players including <b>FNB Eswatini</b>, <b>ScopeHost</b>,
            and volunteer placements with <b>The Knowledge Institute</b>,{" "}
            <b>Emlalatini Development Centre</b>, to name a few
          </p>
        </section>

        <section id="experience" className="pt-16">
          <h2 className="text-3xl text-gray-300 font-semibold mb-4 underline">
            Work Experience
          </h2>
          <div className="flex gap-8 my-4 max-w-prose">
            <p className="w-1/4">2023 &mdash; Present</p>
            <div className="w-3/4">
              <h3 className="font-bold uppercase">
                Fullstack Developer &mdash; Digimage
              </h3>

              <p className="max-w-prose text-gray-400 text-sm">
                I contribute in the upgrading of systems, integrating payments
                and customizing interfaces, ensuring applications are built to
                meet industry standard whilst employing best practices to
                deliver inclusive user experiences
              </p>

              <div className="flex gap-2 my-3">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Laravel
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  React
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  SQL
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Git
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 my-4 max-w-prose">
            <p className="w-1/4">2021 &mdash; 2023</p>
            <div className="w-3/4">
              <h3 className="font-bold uppercase">
                Web Developer &mdash; FNB Eswatini
              </h3>

              <p className="max-w-prose text-gray-400 text-sm">
                At FNB Eswatini, I led the transformation of the Eswatini
                MarketSquare Website, creating a centralized hub for everyday
                services across the country. Taking over from an external agency
                to drive development, optimization, and enhanced user experience
                &mdash; I leveraged the power of WordPress with custom PHP and
                JavaScript, to deliver tailored functionalities that went beyond
                standard templates. The result: a scalable, high-impact platform
                connecting users with essential services seamlessly.
              </p>

              <div className="flex gap-2 my-3">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  PHP
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  React
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  WordPress
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Google Analytics
                </span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 my-4 max-w-prose">
            <p className="w-1/4">2021</p>
            <div className="w-3/4">
              <h3 className="font-bold uppercase">
                Web Developer &mdash; ScopeHost
              </h3>

              <p className="max-w-prose text-gray-400 text-sm">
                At ScopeHost, I specialized in project management and
                coordination, web application development, providing technical
                support for email clients and virtual services. I also
                configured and managed virtual private servers to deliver
                secure, reliable, and scalable solutions for diverse clients.
              </p>

              <div className="flex gap-2 my-3">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  VMWare
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  MS Office
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Adobe Suite
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  WordPress
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  PHP
                </span>
              </div>
            </div>
          </div>

          <a
            target="_blank"
            className="my-4 inline-block underline hover:!no-underline"
            href={resume}>
            Download my resumé
            <FontAwesomeIcon icon={faExternalLink} className="text-sm ml-2" />
          </a>
        </section>

        <section id="projects" className="pt-16 max-w-prose">
          <h2 className="text-3xl text-gray-300 font-semibold mb-4 underline">
            Recent projects
          </h2>

          <a
            href="https://marketsquare.co.sz/"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />
            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={eswatini_marketsquare}
                alt="Eswatini MarketSquare"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                Eswatini MarketSquare &mdash; with FNB Eswatini
              </h3>
              <p className="text-sm">
                A project that seeks to bring all the everyday resources to one
                square. "Do you need a plumber? Find them on MarketSquare!"
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  PHP
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  JavaScript
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  MySQL
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  GA
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://ectconsulting360.com/"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />
            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={elite_corporate_training}
                alt="Elite Corporate Training & Consulting 360"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                Elite Corporate Training & Consulting 360 &mdash; Freelance
              </h3>
              <p className="text-sm">
                Elite Corporate Training is the UK leading training provider for
                cutting-edge short term training courses aimed at capacitating
                employees to improve performance in the workplace.
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  WordPress
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Stripe
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  SemRush
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  GA
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://swiftbookings.salvsystems.com"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />
            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={swift_boookings}
                alt="Swift Bookings Eswatini"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                Swift Bookings &mdash; with Digimage
              </h3>
              <p className="text-sm">
                Fast, reliable and secure booking services at the palm of your
                hand. This solution seeks to localise booking services and
                provide and easy to use, go-to platform for everything travel.
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Laravel
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  React
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  MySQL
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Open API
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://www.tkieswatini.org/sasa"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />

            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={tki_sasa}
                alt="The Knowledge Institute"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                SaSa &mdash; with The Knowledge Institute
              </h3>
              <p className="text-sm">
                TKI proposes SaSa, a mobile-friendly web platform that would
                enable high school graduates to quickly and inexpensively apply
                for tertiary education.
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Django
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  React
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Figma
                </span>
              </div>
            </div>
          </a>
          <a
            href="https://soapshopsupplies.com"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />
            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={soap_shop_supplies}
                alt="Soap Shop Supplies"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                Soap Shop Supplies &mdash; with ScopeHost
              </h3>
              <p className="text-sm">
                Building this website included exercises in photography, and
                photo editing, graphics manipulation and critical thinking
                capabilities to best craft the website specific to the
                organisation's needs
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  WordPress
                </span>
              </div>
            </div>
          </a>

          <a
            href="https://samkelisiwenkambule.com/"
            target="_blank"
            className="relative group grid grid-cols-4 auto-cols-fr gap-2 my-4 p-4 hover:bg-text/15 rounded-md transition-all duration-300">
            <FontAwesomeIcon
              icon={faArrowRight}
              className="absolute top-2 right-2 opacity-0 transition-all duration-300 group-hover:opacity-100 -rotate-45"
            />
            <div className="relative w-30 aspect-[16/9] overflow-hidden rounded-md col-span-1">
              <img
                src={samke_nkambule}
                alt="Samkelisiwe Nkambule"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            <div className="text-gray-200 col-span-3">
              <h3 className="font-semibold">
                [upcoming] Samkelisiwe Nkambule &mdash; Freelance
              </h3>
              <p className="text-sm">
                Samkelisiwe Nkambule — a creative spirit based in Mbabane,
                Eswatini is passionate about music, poetry, and public
                relations, and loves blending artistic expression with
                meaningful communication.
              </p>
              <div className="flex items-start gap-2 my-2">
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  WordPress
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  Spotify API
                </span>
                <span className="text-[10px] bg-primary text-gray-300 rounded-full px-3">
                  GA
                </span>
              </div>
            </div>
          </a>

          {/* project archive */}
          <Link
            className="group my-4 inline-block underline hover:!no-underline"
            to="/archive">
            View full project archive
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="text-sm ml-2 transition-all duration-300 group-hover:pl-2"
            />
          </Link>
        </section>

        <section id="footer" className="pt-16">
          <h2 className="text-3xl font-semibold mb-4">Built with ❤</h2>
          <p className="text-gray-400">
            Designed in Figma, hand-crafted by yours truly. <br />
            Built w/ React.js & Tailwind, deployed w/ Netlify. Text set in
            Poppins typeface.
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
