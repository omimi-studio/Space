// @ts-nocheck
import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className="bg-sky">
      <Head>
        <title>Space</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="px-4 sm:px-8">{children}</main>
      <Footer />
    </div>
  );
}