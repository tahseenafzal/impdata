import Head from "next/head";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Import Data (PRAL)</title>
        <meta
          name="description"
          content="For managing and analysis of PRAL data."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Heading>Import Data (PRAL)</Heading>
      </main>
    </>
  );
}
