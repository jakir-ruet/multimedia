import Layout from 'components/Layout';
import { API_URL } from '@/config/index';

function Home() {
  return (
    <Layout>
      <h1>I am Home</h1>
    </Layout>
  );
}
export default Home;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();
  console.log(events);
  return {
    props: { events },
  };
}
