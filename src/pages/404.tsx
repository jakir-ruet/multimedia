import { FaExclamationTriangle } from 'react-icons/fa';
import Layout from '@/components/Layout';
import Link from 'next/link';
function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className="border-t border-gray-200 text-center pt-8">
        <h1 className="text-9xl font-bold text-purple-400">
          <FaExclamationTriangle />
          404
        </h1>
        <h1 className="text-6xl font-medium py0">Oops! Page Not Found</h1>
        <p className="text-2xl pt-4 pb-8 px-12 font-medium">
          Oops! The page you are looking does not exist. It might have been
          moved or deleted
        </p>
        <Link
          href="/"
          className="bg-sky-500 p-5 hover:text-neutral-50 rounded-2xl"
        >
          Go Back to Home
        </Link>
      </div>
    </Layout>
  );
}
export default NotFound;
