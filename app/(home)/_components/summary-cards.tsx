import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";
import React from "react";
import SummaryCard from "./sumarry-card";

interface SummaryCardsProps {
  balance: number;
  totalDeposits: number;
  totalExpenses: number;
  totalInvestments: number;
  canUserAddTransactions: boolean;
}

async function SummaryCards({
  balance,
  totalDeposits,
  totalExpenses,
  totalInvestments,
  canUserAddTransactions,
}: SummaryCardsProps) {
  return (
    <div className="space-y-6">
      <SummaryCard
        icon={
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15">
            <WalletIcon size={16} />
          </div>
        }
        title="Saldo"
        amount={balance}
        size="large"
        canUserAddTransactions={canUserAddTransactions}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/15">
              <PiggyBankIcon size={16} />
            </div>
          }
          title="Investido"
          amount={totalInvestments}
          canUserAddTransactions={canUserAddTransactions}
        />

        <SummaryCard
          icon={
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-success/10">
              <TrendingUpIcon size={16} className="text-success" />
            </div>
          }
          title="Receita"
          amount={totalDeposits}
          canUserAddTransactions={canUserAddTransactions}
        />

        <SummaryCard
          icon={
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-red-500/10">
              <TrendingDownIcon size={16} className="text-red-500" />
            </div>
          }
          title="Despesas"
          amount={totalExpenses}
          canUserAddTransactions={canUserAddTransactions}
        />
      </div>
    </div>
  );
}

export default SummaryCards;
