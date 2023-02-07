import Layout from 'components/Layout';
import EventList from '@/components/EventList';
import { API_URL } from '@/config/index';

function Home({ events }) {
  console.log(events);
  return (
    <Layout
      title="Upcoming events here"
      keywords="query for best event"
      description="we believe in best event management"
    >
      <div className="container mx-auto">
        <h1 className="text-slate-500">Upcoming Event Heregg</h1>
        {events.length === 0 && <h3>No Event Available Now</h3>}
        {events.map((individualEvent) => (
          <EventList
            key={individualEvent.id}
            individualEvent={individualEvent}
          />
        ))}
      </div>
    </Layout>
  );
}
export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events },
    revalidate: 1,
  };
}
