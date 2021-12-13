import type { NextPage } from "next";
import Link from "next/link";
import Footer from "components/Footer";
import SEO from "components/SEO";

const Home: NextPage = () => {
  return (
    <div className="container">
      <SEO
        title="Next Test Project"
        description="Homepage"
        ogImage=""
        ogType="website"
      />

      <main className="main">
        <h1 className="title">
          Go to
          <Link href="/blog/page/0">
            <a>Blog</a>
          </Link>
        </h1>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
