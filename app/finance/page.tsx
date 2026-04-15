import { DonationProgress } from "@/components/DonationProgress";
import { DonorWall } from "@/components/DonorWall";
import { SectionHeader } from "@/components/SectionHeader";
import { financeCategories } from "@/lib/site-content";

export const metadata = {
  title: "Finance"
};

export default function FinancePage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Financial transparency</p>
        <h1>Show enough to build trust without exposing sensitive details.</h1>
        <p>
          The finance page should explain public allocation categories, progress toward annual goals, and donor
          recognition rules.
        </p>
      </section>

      <section className="page-section two-column">
        <div>
          <SectionHeader eyebrow="Overview" title="High-level allocation model" />
          <p>
            These categories are sample public budget buckets. Replace the percentages only after the association
            approves final reporting language.
          </p>
        </div>
        <DonationProgress compact />
      </section>

      <section className="page-section muted">
        <SectionHeader eyebrow="Budget categories" title="Where alumni support is intended to go" align="center" />
        <div className="allocation-list">
          {financeCategories.map((category) => (
            <article className="allocation-row" key={category.label}>
              <div>
                <h3>{category.label}</h3>
                <p>{category.description}</p>
              </div>
              <strong>{category.percent}%</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section two-column">
        <DonorWall />
        <article className="content-card">
          <p className="eyebrow">Accounting note</p>
          <h3>Public tracker, not official books.</h3>
          <p>
            The website tracker is for public progress and recognition. Official accounting, refunds, receipts, and tax
            language should remain in Stripe and board-approved records. TODO: confirm final nonprofit status wording.
          </p>
        </article>
      </section>
    </>
  );
}
