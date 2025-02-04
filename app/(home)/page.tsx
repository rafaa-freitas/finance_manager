import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";
import TransactionsPieChart from "./_components/transactions-pie-chart";
import getDashboard from "../_data/get-dashboard";
import ExpensesPerCategory from "./_components/expenses-per-category";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transactions";
import AiReportButton from "./_components/ai-report-button";
import { hasPremiumPlan } from "../_data/has-premium-plan";

interface HomeProps {
  searchParams: {
    month: string;
  };
}

async function Home({ searchParams: { month } }: HomeProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const isMonthInvalid = !month || !isMatch(month, "MM");

  if (isMonthInvalid) {
    redirect(`/?month=${new Date().getMonth() + 1}`);
  }

  const hasUserPremiumPlan = await hasPremiumPlan();
  const dashboardData = await getDashboard(month);

  const canUserAddTransactions = await canUserAddTransaction();

  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col gap-4 space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <div className="flex items-center gap-3">
            <AiReportButton month={month} hasPremiumPlan={hasUserPremiumPlan} />

            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards
              {...dashboardData}
              canUserAddTransactions={canUserAddTransactions}
            />

            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChart {...dashboardData}></TransactionsPieChart>

              <ExpensesPerCategory
                expensesPerCategory={dashboardData.totalExpensePerCategory}
              ></ExpensesPerCategory>
            </div>
          </div>

          <LastTransactions lastTransactions={dashboardData.lastTransactions} />
        </div>
      </div>
    </>
  );
}

export default Home;
