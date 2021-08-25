import Head from "next/head";

import Header from "../components/Header";
import AddTransactionForm from "../components/AddTransactionForm";
import Budget from "../components/Budget";
import Transactions from "../components/Transactions";

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
      <main className="p-4">
        <Budget />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between my-6">
          <div>
            <AddTransactionForm />
          </div>
          <div className="md:col-span-2">
            <Transactions />
          </div>
        </div>
      </main>
    </div>
  );
}
