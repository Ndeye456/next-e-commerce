import Head from "next/head";
import Link from "next/link";
import React from "react";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " - LadyFashion" : "LadyFashion"}</title>
        <meta name="description" content="E-commerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              LadyFashion
            </Link>
            <div>
              <Link href="/cart" className="p-2">Panier</Link>
              <Link href="/login" className="p-2">Se connecter</Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
            <p>Copyright @ 2023 LadyFashion</p>
        </footer>
      </div>
    </>
  );
}
