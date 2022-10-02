import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { memo } from "react";
import utilStyles from "../../styles/utils.module.scss";
import { Layout } from "../../components";

interface IFeedProps {}

const Feed: NextPage<IFeedProps> = ({}: IFeedProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>Your feed</title>
        <meta
          name="description"
          content="This page show you a feed of what people around you are doing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}

      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"Feed"}>Feed</Link>
          </li>
        </ul>
      </nav>

      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
};

export default memo(Feed);
