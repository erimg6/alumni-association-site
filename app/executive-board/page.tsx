import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { boardMembers } from "@/lib/site-content";

export const metadata = {
  title: "Executive Board"
};

export default function ExecutiveBoardPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Executive Board</p>
        <h1>Visible leadership gives alumni confidence.</h1>
        <p>
          Replace these sample bios only after real officers or board members approve names, photos, roles, and contact
          information.
        </p>
      </section>

      <section className="page-section">
        <SectionHeader eyebrow="Leadership" title="Current sample board" />
        <div className="card-grid four">
          {boardMembers.map((member) => (
            <article className="content-card profile-card" key={member.email}>
              <Image src="/leader-placeholder.svg" alt="" width={180} height={180} />
              <p className="eyebrow">{member.role}</p>
              <h3>{member.name}</h3>
              <p>{member.bio}</p>
              <a className="text-link" href={`mailto:${member.email}`}>{member.email}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="page-section muted two-column">
        <article className="content-card">
          <p className="eyebrow">President's Message</p>
          <h3>TODO: Vision, goals, and alumni ask</h3>
          <p>
            Use this space for a concise message about the year's priorities, progress so far, and the exact ways alumni
            can help.
          </p>
        </article>
        <article className="content-card">
          <p className="eyebrow">Roles and responsibilities</p>
          <h3>Keep the org chart understandable.</h3>
          <p>
            TODO: Add chairmen and role responsibilities once the current leadership structure is approved for public
            display.
          </p>
        </article>
      </section>
    </>
  );
}
