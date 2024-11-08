import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import SummaryCard from "./sumarry-card";
import { db } from "@/app/_lib/prisma";

interface SummaryCardsProps {
  month: string;
}

async function SummaryCards({ month }: SummaryCardsProps) {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  };

  const totalDeposits = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "DEPOSIT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const totalInvestments = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "INVESTMENT" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const totalExpenses = Number(
    (
      await db.transaction.aggregate({
        where: { ...where, type: "EXPENSE" },
        _sum: { amount: true },
      })
    )?._sum?.amount,
  );

  const balance = totalDeposits - totalInvestments - totalExpenses;

  return (
    <div className="space-y-6">
      <SummaryCard
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={totalInvestments}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={totalDeposits}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={totalExpenses}
        />
      </div>
    </div>
  );
}

export default SummaryCards;
