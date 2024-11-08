import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "../_components/navbar";
import SummaryCards from "./_components/summary-cards";
import TimeSelect from "./_components/time-select";
import { isMatch } from "date-fns";

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
    redirect("/?month=01");
  }

  return (
    <>
      <>
        <Navbar />

        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>

          <TimeSelect />
        </div>

        <SummaryCards month={month} />
      </>
    </>
  );
}

export default Home;
