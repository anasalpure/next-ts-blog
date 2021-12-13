import Head from "next/head";
import { NextRouter, useRouter } from "next/router";
type SEOProps = {
  title: string;
  description: string;
  ogType?: string;
  ogImage?: string[] | string;
  twImage?: string;
};

export default function SEO({
  title,
  description,
  ogType,
  ogImage,
  twImage,
}: SEOProps) {
  const router: NextRouter = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Newsifier Blog" />
      <meta property="og:description" content={description} />
      <meta property="og:title" content={title} />
      {ogImage instanceof Array ? (
        ogImage.map((url) => (
          <meta property="og:image" content={url} key={url} />
        ))
      ) : (
        <meta property="og:image" content={ogImage} key={ogImage} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="https://twitter.com/newsifier" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twImage} />
    </Head>
  );
}
