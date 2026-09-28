import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Disc3,
  Menu,
  Music2,
  Plus,
  Send,
  X,
} from "lucide-react";
import "./App.css";
type Project = {
  title: string;
  type: string;
  year: string;
  description: string;
  cover: string;
  mark: string;
};
const projects: Project[] = [
  {
    title: "Blue Hour",
    type: "FULL PRODUCTION · ALT POP",
    year: "2025",
    description:
      "A demo portfolio entry for a full production credit. Replace this with the artist, release, and the specific work you delivered.",
    cover: "cover-blue",
    mark: "BH / 01",
  },
  {
    title: "Soft Signal",
    type: "CO-PRODUCTION · R&B",
    year: "2024",
    description:
      "A demo portfolio entry for a co-production credit. Add a short note about the sound, arrangement, or collaboration.",
    cover: "cover-signal",
    mark: "SS / 02",
  },
  {
    title: "Afterimage",
    type: "MIXING · INDIE ROCK",
    year: "2024",
    description:
      "A demo portfolio entry for a mixing credit. Swap in the actual release and link to a listening platform.",
    cover: "cover-after",
    mark: "AI / 03",
  },
];
const bookingEmail = "replace-with-your-email@example.com";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [draftUrl, setDraftUrl] = useState("");
  const submitBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const artist = String(form.get("artist") ?? "");
    const email = String(form.get("email") ?? "");
    const service = String(form.get("service") ?? "");
    const timing = String(form.get("timing") ?? "");
    const notes = String(form.get("notes") ?? "");
    const body = [
      `Name: ${name}`,
      `Artist / project: ${artist}`,
      `Reply to: ${email}`,
      `Looking for: ${service}`,
      `Timing: ${timing}`,
      "",
      notes,
    ].join("\n");
    setDraftUrl(
      `mailto:${bookingEmail}?subject=${encodeURIComponent(`Production inquiry — ${artist || name}`)}&body=${encodeURIComponent(body)}`,
    );
  };
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="portfolio">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu}>
          <span className="wordmark-icon">
            <Music2 size={16} />
          </span>
          <span>
            NORTHLINE <i>AUDIO</i>
          </span>
        </a>
        <nav
          className={menuOpen ? "site-nav is-open" : "site-nav"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={closeMenu}>
            Selected work
          </a>
          <a href="#approach" onClick={closeMenu}>
            Approach
          </a>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </nav>
        <a className="header-booking" href="#booking">
          Book a session <ArrowUpRight size={15} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>
      <section className="hero" id="top">
        <img
          className="hero-photo"
          src="/abbey-road-studio2.jpg"
          alt="The control room at Abbey Road Studio 2, photographed in 2010"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-mark" /> INDEPENDENT MUSIC PRODUCTION{" "}
            <span>·</span> LONDON / EVERYWHERE
          </p>
          <h1>
            Northline
            <br />
            <em>Audio</em>
          </h1>
          <p className="hero-copy">
            Thoughtful production for artists with something to say.
          </p>
          <div className="hero-actions">
            <a className="button button-bright" href="#work">
              Explore the work <ArrowDownRight size={17} />
            </a>
            <a className="text-link" href="#booking">
              Start a project <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="hero-specialties">
            <span>PRODUCTION</span>
            <i />
            <span>CO-PRODUCTION</span>
            <i />
            <span>MIXING</span>
          </div>
        </div>
        <div className="hero-caption">
          Abbey Road Studio 2 control room, 2010 ·{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Abbey_Road_Studios_2010-04-08_-_control_room_of_Studio_2.jpg"
            target="_blank"
            rel="noreferrer"
          >
            David Boyle / CC BY 2.0
          </a>
        </div>
        <a
          className="hero-index"
          href="#work"
          aria-label="Scroll to selected work"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDownRight size={16} />
        </a>
      </section>
      <section className="intro-band">
        <p>
          GOOD RECORDS ARE MADE
          <br />
          IN GOOD COMPANY.
        </p>
        <span>
          From the first voice note to the final master, I help independent
          artists turn a clear feeling into a finished record.
        </span>
        <a href="#approach" aria-label="Read about the approach">
          <ArrowDownRight size={22} />
        </a>
      </section>
      <section className="work-section page-section" id="work">
        <div className="section-topline">
          <span>01 / SELECTED WORK</span>
          <span className="sample-note">
            SAMPLE CREDITS · REPLACE WITH YOUR RELEASES
          </span>
        </div>
        <div className="work-heading">
          <h2>
            Records, not
            <br />
            <em>templates.</em>
          </h2>
          <p>
            A few corners of the sound. Open a project to see the demo credit
            details.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <button
                className={`project-cover ${project.cover}`}
                onClick={() => setSelectedProject(project)}
                aria-label={`Open sample project ${project.title}`}
              >
                <span className="cover-number">{project.mark}</span>
                <span className="cover-title">{project.title}</span>
                <span className="cover-orbit" />
                <span className="cover-stamp">
                  DEMO
                  <br />
                  CREDIT
                </span>
                <span className="cover-open">
                  <ArrowUpRight size={18} />
                </span>
              </button>
              <div className="project-meta">
                <div>
                  <span className="project-index">0{index + 1}</span>
                  <strong>{project.title}</strong>
                </div>
                <span>{project.year}</span>
              </div>
              <p className="project-type">{project.type}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="approach-section" id="approach">
        <div className="approach-image">
          <img
            src="/abbey-road-studio2.jpg"
            alt="Mixing desk and control-room monitors in a recording studio"
            loading="lazy"
          />
          <span>LISTEN FIRST. BUILD WITH INTENTION.</span>
        </div>
        <div className="approach-copy">
          <div className="section-topline">
            <span>02 / THE APPROACH</span>
            <span>HUMAN IN, HUMAN OUT</span>
          </div>
          <h2>
            Make space
            <br />
            for the <em>song.</em>
          </h2>
          <p>
            Production should reveal what makes an artist unmistakable. We start
            with the song, find the detail worth following, then shape the
            arrangement and sound around it.
          </p>
          <p>No presets for people. No pressure to sound like someone else.</p>
          <a className="dark-link" href="#booking">
            Tell me what you're making <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <section className="services-section page-section">
        <div className="section-topline">
          <span>03 / WAYS TO WORK</span>
          <span>ONE ROOM, MANY STARTING POINTS</span>
        </div>
        <div className="services-layout">
          <h2>
            Bring the
            <br />
            <em>rough idea.</em>
          </h2>
          <div className="service-list">
            <article>
              <span>01</span>
              <div>
                <h3>Full production</h3>
                <p>
                  Arrangement, sound design, tracking direction, and a record
                  that feels finished without losing its first spark.
                </p>
              </div>
              <Plus size={17} />
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Co-production</h3>
                <p>
                  A second set of ears and hands, working with your existing
                  vision, demos, or collaborators.
                </p>
              </div>
              <Plus size={17} />
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Mixing & vocal production</h3>
                <p>
                  Clarity, depth, and a vocal that carries the story. Revisions
                  shaped around the song, not a preset count.
                </p>
              </div>
              <Plus size={17} />
            </article>
          </div>
        </div>
      </section>
      <section className="about-band" id="about">
        <div className="about-label">A NOTE FROM THE ROOM</div>
        <blockquote>
          “The best production doesn’t ask for attention. It makes you feel the
          song more.”
        </blockquote>
        <div className="about-signoff">
          <span>
            NORTHLINE AUDIO <i /> PRODUCER · MIXER
          </span>
          <a href="#booking">
            Make something together <ArrowUpRight size={15} />
          </a>
        </div>
      </section>
      <section className="booking-section page-section" id="booking">
        <div className="booking-intro">
          <div className="section-topline">
            <span>04 / BOOKING</span>
            <span>PROJECTS OPEN FOR AUTUMN</span>
          </div>
          <h2>
            Tell me what
            <br />
            you’re <em>hearing.</em>
          </h2>
          <p>
            Share the rough version, the reference track, or just the feeling
            you’re chasing. I’ll come back with a few useful next steps.
          </p>
          <div className="booking-note">
            <CalendarDays size={16} />
            <span>Usually replies within two working days</span>
          </div>
        </div>
        <div className="booking-form-wrap">
          <form className="booking-form" onSubmit={submitBooking}>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Name"
                  required
                />
              </label>
              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>
            <label>
              Artist or project
              <input
                name="artist"
                placeholder="What are you working on?"
                required
              />
            </label>
            <div className="form-row">
              <label>
                What do you need?
                <select name="service" defaultValue="Full production">
                  <option>Full production</option>
                  <option>Co-production</option>
                  <option>Mixing</option>
                  <option>Vocal production</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                When are you hoping to start?
                <select name="timing" defaultValue="Flexible">
                  <option>As soon as possible</option>
                  <option>Within a month</option>
                  <option>In 1–3 months</option>
                  <option>Flexible</option>
                </select>
              </label>
            </div>
            <label>
              A little about the project
              <textarea
                name="notes"
                rows={3}
                placeholder="Genre, references, what is working, what is stuck…"
                required
              />
            </label>
            <button className="button button-dark" type="submit">
              Prepare booking email <Send size={15} />
            </button>
            <p className="form-privacy">
              Your message stays in your email app until you choose to send it.
            </p>
          </form>
          {draftUrl && (
            <div className="draft-ready" role="status">
              <span className="draft-check">
                <Check size={16} />
              </span>
              <div>
                <strong>Your inquiry is ready.</strong>
                <p>Open your email app to review and send the draft.</p>
                <a href={draftUrl}>
                  Open email draft <ArrowUpRight size={14} />
                </a>
                <small>
                  Before publishing, set the booking address in{" "}
                  <code>src/App.tsx</code>.
                </small>
              </div>
            </div>
          )}
        </div>
      </section>
      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-icon">
            <Music2 size={16} />
          </span>
          <span>
            NORTHLINE <i>AUDIO</i>
          </span>
        </a>
        <span>PRODUCTION · CO-PRODUCTION · MIXING</span>
        <a className="footer-top" href="#top">
          BACK TO TOP <ArrowUpRight size={14} />
        </a>
        <small className="image-credit">
          Reference photo: David Boyle, “Abbey Road Studios 2010-04-08 - control
          room of Studio 2,” CC BY 2.0 via{" "}
          <a
            href="https://commons.wikimedia.org/wiki/File:Abbey_Road_Studios_2010-04-08_-_control_room_of_Studio_2.jpg"
            target="_blank"
            rel="noreferrer"
          >
            Wikimedia Commons
          </a>
          .
        </small>
      </footer>
      {selectedProject && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => setSelectedProject(null)}
        >
          <section
            className="project-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="dialog-close"
              aria-label="Close project details"
              onClick={() => setSelectedProject(null)}
            >
              <X size={19} />
            </button>
            <span className="dialog-kicker">
              SAMPLE PORTFOLIO ENTRY · {selectedProject.type}
            </span>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="dialog-credit">
              <Disc3 size={16} />
              <span>
                Replace this sample with the real artist, release link, and your
                production credit.
              </span>
            </div>
            <button
              className="button button-dark"
              onClick={() => setSelectedProject(null)}
            >
              Back to selected work <ArrowRight size={15} />
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
export default App;
