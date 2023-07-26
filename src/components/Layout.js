import Head from "next/head";
import Link from "next/link";
import React, { useContext } from "react";
import { Store } from "../utils/Store";

export default function Layout({ title, children }) {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
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
              <Link href="/cart" className="p-2">
                Panier
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {cart.cartItems.reduce((a,c) => a+c.quantity, 0)}
                  </span>  
                )}
              </Link>
              <Link href="/login" className="p-2">
                Se connecter
              </Link>
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