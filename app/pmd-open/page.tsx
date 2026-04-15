import Image from "next/image";
import { CalloutBand } from "@/components/CalloutBand";
import { SectionHeader } from "@/components/SectionHeader";
import { externalLinks, heroImages } from "@/lib/site-content";

export const metadata = {
  title: "PMD Open"
};

export default function PmdOpenPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Signature event</p>
        <h1>The PMD Open brings alumni back together with a purpose.</h1>
        <p>
          TODO: Confirm the annual golf outing date, beneficiary, course, format, registration deadline, and sponsor
          packages before launch.
        </p>
      </section>

      <section className="page-section two-column">
        <div>
          <SectionHeader eyebrow="Overview" title="Annual alumni golf outing" />
          <p>
            The PMD Open is the association's signature annual event for reconnecting alumni, raising support, and
            celebrating the chapter's current work.
          </p>
          <div className="detail-list">
            <p><strong>Date:</strong> TODO: Summer 2026</p>
            <p><strong>Location:</strong> TODO: Golf course and city</p>
            <p><strong>Format:</strong> TODO: Scramble, foursomes, lunch, awards</p>
            <p><strong>Beneficiary:</strong> TODO: Confirm benefiting organization</p>
          </div>
        </div>
        <article className="content-card">
          <p className="eyebrow">Past result sample</p>
          <h3>TODO: $12,400 raised</h3>
          <p>Replace this with verified PMD Open outcomes, photos, sponsor names, and beneficiary impact.</p>
        </article>
      </section>

      <section className="page-section muted">
        <SectionHeader eyebrow="Event photos" title="Past PMD Open moments" align="center" />
        <div className="gallery-grid">
          {heroImages.slice(0, 4).map((image) => (
            <Image key={image.src} src={image.src} alt={image.alt} width={700} height={460} />
          ))}
        </div>
      </section>

      <CalloutBand
        eyebrow="Registration and sponsorship"
        title="Make the PMD Open easy to join and easy to sponsor."
        description="Connect these CTAs to the annual Google Form or registration platform once the event details are approved."
        primaryLabel="TODO: Register"
        primaryHref={externalLinks.pmdOpenRegistration}
        secondaryLabel="TODO: Sponsor"
        secondaryHref={externalLinks.pmdOpenSponsorship}
      />
    </>
  );
}
