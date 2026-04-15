import { CalloutBand } from "@/components/CalloutBand";
import { SectionHeader } from "@/components/SectionHeader";
import { externalLinks, newsletterIssues } from "@/lib/site-content";

export const metadata = {
  title: "Newsletter"
};

export default function NewsletterPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Newsletter</p>
        <h1>A central archive for alumni updates.</h1>
        <p>
          Give alumni one reliable place to find past issues, upcoming events, chapter wins, and Impact Fund progress.
        </p>
      </section>

      <CalloutBand
        eyebrow="Signup"
        title="TODO: Connect Mailchimp, Substack, or a Google Form."
        description="The signup should be the lowest-friction way for alumni to receive event reminders and chapter updates."
        primaryLabel="TODO: Sign up for updates"
        primaryHref={externalLinks.newsletterSignup}
        secondaryLabel="TODO: Submit alumni news"
        secondaryHref={externalLinks.updateForm}
      />

      <section className="page-section">
        <SectionHeader eyebrow="Archive" title="Sample issue archive" />
        <div className="card-grid three">
          {newsletterIssues.map((issue) => (
            <article className="content-card" key={issue.title}>
              <p className="eyebrow">{issue.date}</p>
              <h3>{issue.title}</h3>
              <p>{issue.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted">
        <SectionHeader eyebrow="Highlights" title="What each issue should cover" align="center" />
        <div className="card-grid four">
          {["Alumni spotlights", "Chapter wins", "Upcoming events", "Impact Fund updates"].map((item) => (
            <article className="content-card" key={item}>
              <h3>{item}</h3>
              <p>TODO: Add a short recurring content slot for {item.toLowerCase()}.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
