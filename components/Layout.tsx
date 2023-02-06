import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Showcase from './Showcase';
import router, { useRouter } from 'next/router';

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
      </Head>
      <Header />
      {router.pathname === '/' && <Showcase />}
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: 'Welcome to Multimedia | Your Ultimate Partner',
  description:
    'Welcome to Multimedia Welcome to Multimedia Welcome to Multimedia',
  keywords: 'keywords keywords keywords keywords',
};
