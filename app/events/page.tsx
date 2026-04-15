import { CalloutBand } from "@/components/CalloutBand";
import { EventCard } from "@/components/EventCard";
import { SectionHeader } from "@/components/SectionHeader";
import { events, externalLinks } from "@/lib/site-content";

export const metadata = {
  title: "Events"
};

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <p className="eyebrow">Alumni events</p>
        <h1>Keep alumni connected before they drift away.</h1>
        <p>
          A public calendar, save-the-dates, RSVP links, and recurring reminders make it easier for alumni to show up.
        </p>
      </section>

      <CalloutBand
        eyebrow="Calendar"
        title="TODO: Connect the public alumni calendar."
        description="Use a Google Calendar or Outlook-compatible public calendar link so alumni can subscribe once and keep every event on their radar."
        primaryLabel="TODO: Open public calendar"
        primaryHref={externalLinks.calendar}
        secondaryLabel="Join reminders"
        secondaryHref={externalLinks.alumniNetwork}
      />

      <section className="page-section">
        <SectionHeader eyebrow="Save the date" title="Upcoming alumni moments" />
        <div className="card-grid four">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </section>
    </>
  );
}
