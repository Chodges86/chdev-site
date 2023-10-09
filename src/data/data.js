import customWebsiteGraphic from "../assetts/custom-website-graphic.png";
import hostingGraphic from "../assetts/hosting-graphic.png";
import googleGraphic from "../assetts/google-graphic.png";
import productivityGraphic from "../assetts/productivity-graphic.png";
import graphicDesignGraphic from "../assetts/graphic-design-graphic.png";
import { Link } from "react-router-dom";

const modal = {
  customWebsite: {
    img: customWebsiteGraphic,
    title: "Custom Websites",
    description:
      "Customized websites at affordable prices for small businesses and organizations",
    jsx: (
      <div>
        <p>I can create a website that suits your needs exactly.</p>
        <p>
          Whether you need a small site to show off your work and put people in
          touch with you, or a site that provides dynamic information and
          functionality to your users. Let me know what your vision is and I'll
          create it.
        </p>
        <br />
        <p>
          I specialize in creating affordable websites for small businesses and
          organizations as well as handling some of the other technical aspects
          that come with owning a business. This means you can focus on your
          business and organization needs and let me handle the website
          development, launch, and maintenance.
        </p>
        <br />
        <p>
          As a freelance developer, I can offer these services for a fraction of
          the cost you would pay to hire an web developing organization.
        </p>
        <h2>
          <Link to="/contact" className="link">
            Get in touch today
          </Link>{" "}
          so we can get started building or re-designing you site!
        </h2>
      </div>
    ),
  },
  hosting: {
    img: hostingGraphic,
    title: "Hosting Setup and Maintenance",
    description: "Hosting Setup and Website maintenance",
    jsx: (
      <div>
        <p>
          I’ll take care of the entire process from beginning to end, so you can
          focus on you. Part of that process is setting up hosting for your
          website so the world can have access to see your site.
        </p>
        <br />
        <p>This includes:</p>
        <ul>
          <li>Finding you a domain name and the registration</li>
          <li>Setting up hosting for the website.</li>
          <li>
            Setting up SSL certificates so you can provide a secure site your
            users can trust
          </li>
          <li>Monthly maintenance checks and updates to the site</li>
        </ul>
        <br />
        <p>
          Another part of the process is maintenance and updates. I can monitor
          your site monthy to make sure that it stays functioning properly. This
          also includes making updates to the libraries and packages that are
          running behind the scenes as well as content updates when you need it.
        </p>
      </div>
    ),
  },
  google: {
    img: googleGraphic,
    title: "Professional Domain Email setup with Google Workspace",
    description: "Professional email setup and Google Workspace setup",
    jsx: (
      <div>
        <p>
          Part of doing business is having a professional appearance and tools
          to work with in the office.
        </p>
        <p style={{ textAlign: "center" }}>
          <Link
            to="https://workspace.google.com/"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "Archivo Narrow" }}
          >
            Google Workspace
          </Link>{" "}
          provides all the tools you need and gives you access to custom
          professional looking email addresses
        </p>
        <ul>
          <li>Email</li>
          <li>Google Calendars</li>
          <li>Google Drive</li>
          <li>Google Sheets</li>
          <li>Google Docs</li>
          <li>and more</li>
        </ul>
        <p>
          You can skip the setup and let me take care of managing all of this
          for you. I'll walk you through all you need to know to get your
          business or organization using these tools to speed up work and make
          collaboration on work easier. I'll also only be an email or call away
          when you need help.
        </p>
        <br />
        <p>
          I'll also walk you through the process of getting on Google Business
          and help you manage it.
        </p>
        <ul>
          <li>
            Make sure you show up when someone searches for your business on
            Google
          </li>
          <li>
            Keep up to date information available to the public like services
            you offer and open and close times, as well as Holiday schedules
          </li>
          <li>Helps you engage your customer base.</li>
        </ul>
        <br />
        <h2>
          <Link to="/contact">Let me help get you organized!</Link>
        </h2>
      </div>
    ),
  },
  productivity: {
    img: productivityGraphic,
    title: "Customized Productivity setups through Google Workspace Apps",
    description:
      "Customized setups with Google Apps Scripts for better productivity",
    jsx: (
      <div>
        <p>
          Tedious tasks and data entry can get in the way of getting more
          important things done.
        </p>
        <p style={{ textAlign: "center" }}>
          {`With `}
          <Link
            to="https://www.google.com/script/start/"
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: "Archivo Narrow" }}
          >
            Google App Scripts
          </Link>
          {` I can create workflows and automate processes that will allow you skip
          the tedious tasks and work on what's important. The capabilities of
          the app scripts significantly increases the functionality of Google
          Workspace Apps such as Google Sheets, Google Calendar, and Google
          Docs!`}
        </p>
        <p>Some examples of what App Scripts can do:</p>
        <ul>
          <li>
            Import Google Calendar events into a Spreadsheet along with all
            event data such as the start and stop times, location, and
            description. Once these events are in the Spreadsheet, the sky is
            the limit to what we can do with that data!
          </li>
          <li>
            Create customized Google Sheets that can automate report creation or
            even Calendar event creation.
          </li>
          <li>
            There is almost no limit to what theses app scripts can do for you.
          </li>
        </ul>
        <p>
          If you think there is way I can help make you more productive with
          these apps,{" "}
          <Link to="/contact" style={{ fontFamily: "Archivo Narrow" }}>
            let me know!
          </Link>
        </p>
      </div>
    ),
  },
  graphicDesign: {
    img: graphicDesignGraphic,
    title: "Graphic Design",
    description:
      "CH Developments and Designs, LLC. also offers graphic design for business.  Whether that is website content or logos, letterheads, business cards, or anything else.",
    jsx: (
      <div>
        <p>Creating graphic assetts can be time consuming.</p>
        <p>
          Along with handling your websites, hosting, and productivity apps, I
          can also handle creating good looking designs for your business or
          organization.
        </p>
        <ul>
          <li>Logos</li>
          <li>Business Cards</li>
          <li>Letterheads</li>
          <li>Flyers</li>
          <li>Website content</li>
          <li>and more...</li>
        </ul>
        <p>
          <Link to="/contact" style={{ fontFamily: "Archivo Narrow" }}>
            Get in touch
          </Link>{" "}
          and we can discuss what your company needs to stand out among the
          competition!
        </p>
      </div>
    ),
  },
};

export default modal;
