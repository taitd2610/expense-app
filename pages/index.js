import Head from "next/head";

import Header from "../components/Header";
import AddTransactionForm from "../components/AddTransactionForm";
import Budget from "../components/Budget";

export default function Home() {
  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Main content */}
      <Budget />
      <AddTransactionForm />
    </div>
  );
}
