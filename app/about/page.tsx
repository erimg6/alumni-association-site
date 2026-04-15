import { CalloutBand } from "@/components/CalloutBand";
import { SectionHeader } from "@/components/SectionHeader";
import { externalLinks } from "@/lib/site-content";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">About and governance</p>
        <h1>A public foundation for legitimacy and trust.</h1>
        <p>
          The association should explain its mission, governance, contact paths, and document access in direct language.
        </p>
      </section>

      <section className="page-section two-column">
        <div>
          <SectionHeader eyebrow="Mission" title="Support the chapter without losing the alumni thread." />
          <p>
            The PMD Mu Sigma Alumni Association exists to connect alumni, strengthen chapter sustainability, support
            service and scholarship, and preserve the brotherhood across graduating classes.
          </p>
          <p>
            TODO: Replace this mission with board-approved wording and confirm whether a Board of Trustees or alumni
            advisory structure should be named publicly.
          </p>
        </div>
        <article className="content-card">
          <p className="eyebrow">Contact</p>
          <h3>Role-based email placeholders</h3>
          <p>TODO:alumni@musigma.org</p>
          <p>TODO:impactfund@musigma.org</p>
          <p>TODO:events@musigma.org</p>
        </article>
      </section>

      <section className="page-section muted">
        <SectionHeader eyebrow="FAQ" title="Questions alumni will ask first" align="center" />
        <div className="card-grid four">
          {[
            ["How do I join?", "TODO: Link the alumni network form, email list, or groupchat intake."],
            ["How do I support the Impact Fund?", "Use the Impact Fund page to start a Stripe Checkout session."],
            ["Are contributions tax-deductible?", "TODO: Use final tax/legal language only after status and receipt process are confirmed."],
            ["How do I update my info?", "TODO: Link a simple alumni update form."]
          ].map(([question, answer]) => (
            <article className="content-card" key={question}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <CalloutBand
        eyebrow="Documents"
        title="TODO: Publish bylaws or governance PDFs when approved."
        description="Keep public governance documents easy to find, and avoid publishing drafts or sensitive internal records."
        primaryLabel="TODO: View bylaws PDF"
        primaryHref={externalLinks.bylaws}
        secondaryLabel="Executive Board"
        secondaryHref="/executive-board"
      />
    </>
  );
}
