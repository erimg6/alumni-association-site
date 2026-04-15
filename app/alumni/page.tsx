import { CalloutBand } from "@/components/CalloutBand";
import { SectionHeader } from "@/components/SectionHeader";
import { alumniSpotlights, externalLinks } from "@/lib/site-content";

export const metadata = {
  title: "Alumni"
};

export default function AlumniPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Alumni network</p>
        <h1>Reconnect alumni by giving them clear next steps.</h1>
        <p>
          This page previews spotlights, class connections, and future family tree features while keeping every personal
          detail public-safe.
        </p>
      </section>

      <CalloutBand
        eyebrow="Join the network"
        title="TODO: Connect the alumni email list, groupchat, or contact form."
        description="Make this the primary intake point for alumni who want event reminders, PMD Open news, mentorship updates, and Impact Fund reporting."
        primaryLabel="TODO: Join the Alumni Network"
        primaryHref={externalLinks.alumniNetwork}
      />

      <section className="page-section">
        <SectionHeader eyebrow="Spotlights" title="Sample alumni stories" description="Replace these only after real alumni approve their names, class years, and stories." />
        <div className="card-grid three">
          {alumniSpotlights.map((spotlight) => (
            <article className="content-card" key={spotlight.name}>
              <p className="eyebrow">{spotlight.classYear}</p>
              <h3>{spotlight.name}</h3>
              <p>{spotlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted two-column">
        <div>
          <SectionHeader eyebrow="Family trees preview" title="Big/Little lineage is a phase-two feature worth doing carefully." />
          <p>
            For v1, show a static preview and collect clean data. A real lineage tool should be built only after the
            association decides what information is public, opt-in, and maintainable.
          </p>
        </div>
        <article className="content-card lineage-preview">
          <div>TODO: 2020</div>
          <div>TODO: Big Brother</div>
          <div>TODO: Little Brother</div>
          <div>Filters: Year / Profession / Location</div>
        </article>
      </section>
    </>
  );
}
