import Layout from '@/components/Layout';
import { useRouter } from 'next/router';

function Events() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout
      title="slug title"
      description="slug description"
      keywords="slug keywords"
    >
      <h1>I am slug event</h1>
      <h2>{router.query.slug}</h2>
      <button onClick={() => router.push('/')}>Click Me</button>
    </Layout>
  );
}
export default Events;
