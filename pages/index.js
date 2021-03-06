import Head from "next/head";
import React, { useState } from "react";
import Header from "../components/Header";
import AddTransactionForm from "../components/AddTransactionForm";
import Transactions from "../components/Transactions";
import MonthlyReport from "../components/MonthlyReport";

export default function Home() {
  const [currentTransaction, setCurrentTransaction] = useState(null);
  const [transactionId, setTransactionId] = useState(null);

  return (
    // <div className="flex flex-col items-center justify-center min-h-screen py-2">
    <div className="">
      <Head>
        <title>Sổ thu chi</title>
        <link rel="icon" href="/piggy-bank.svg" />
      </Head>

      <Header />

      {/* Main content */}
      <main className="p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 justify-between my-6">
          <div>
            <AddTransactionForm
              transactionId={transactionId}
              setCurrentTransaction={setCurrentTransaction}
            />
          </div>
          <div className="md:col-span-2">
            <Transactions
              currentTransaction={currentTransaction}
              setTransactionId={setTransactionId}
            />
          </div>

          <div className="">
            <MonthlyReport />
          </div>
        </div>
      </main>
    </div>
  );
}
