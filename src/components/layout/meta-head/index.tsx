import { PropsMeta } from "@src/types/meta";
import Head from "next/head";
import Script from "next/script";

const MetaHead: React.FC<PropsMeta> = ({
  viewport,
  title,
  desc,
  keywords,
  url,
  robots,
  image,
  twitterTitle,
  twitterDesc,
  twitterImg,
}) => {
  const meta = {
    viewport: "width=device-width, initial-scale=1",
    title: "Inspirasi Outfit | Rekomendasi Outfit | Racun Shopee",
    description:
      "Shopee adalah situs elektronik komersial yang berkantor pusat di Singapura yang dimiliki oleh Sea Limited, yang didirikan pada 2009 oleh Forrest Li. Shopee pertama kali diluncurkan di Singapura pada tahun 2015, dan sejak itu memperluas jangkauannya ke Malaysia, Thailand, Taiwan, Indonesia, Vietnam, dan Filipina",
    keywords:
      "shopee, inspirasi outfit, rekomendasi outfit, racun shopee, link shopee, product shopee, promo shopee, shopee affiliate, shopee live, diskon 50%",
    url: "https://project-affiliate.vercel.app/",
    robots: "index, follow",
    image: "./favicon.ico",
    twitterTitle: "Racun Shopee",
    twitterDesc:
      "Shopee adalah situs elektronik komersial yang berkantor pusat di Singapura yang dimiliki oleh Sea Limited, yang didirikan pada 2009 oleh Forrest Li. Shopee pertama kali diluncurkan di Singapura pada tahun 2015, dan sejak itu memperluas jangkauannya ke Malaysia, Thailand, Taiwan, Indonesia, Vietnam, dan Filipina",
    twitterImg: "./favicon.ico",
    type: "website",
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta key="viewport" name="viewport" content={meta.viewport} />
      <title>{meta.title}</title>
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta name="description" content={meta.description} key="desc" />
      <meta name="keywords" content={meta.keywords} />
      <meta property="og:url" content={meta.url} />
      <meta name="robots" content={meta.robots} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content={meta.type} />
      <meta
        name="twitter:title"
        property="og:title"
        content={meta.twitterTitle}
      />
      <meta
        name="twitter:description"
        property="og:description"
        content={meta.twitterDesc}
      />
      <meta
        name="twitter:image"
        property="og:image"
        content={meta.twitterImg}
      />
      {/* <meta property="og:site_name" content="Biztips" /> */}
      <link rel="icon" href="/favicon.ico" />
      {/* google ads */}
      <meta name="google-adsense-account" content="ca-pub-1523860768772432"></meta>

      {/* <!-- Google tag (gtag.js) --> */}
      {/* <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5BQ8VS3E6M" />

        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-5BQ8VS3E6M');
            `,
          }}
        />
      </> */}
    </Head>
  );
};

export default MetaHead;
