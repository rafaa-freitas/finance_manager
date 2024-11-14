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
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        canUserAddTransactions={canUserAddTransactions}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryCard
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={totalInvestments}
          canUserAddTransactions={canUserAddTransactions}
        />

        <SummaryCard
          icon={<TrendingUpIcon size={16} className="text-primary" />}
          title="Receita"
          amount={totalDeposits}
          canUserAddTransactions={canUserAddTransactions}
        />

        <SummaryCard
          icon={<TrendingDownIcon size={16} className="text-red-500" />}
          title="Despesas"
          amount={totalExpenses}
          canUserAddTransactions={canUserAddTransactions}
        />
      </div>
    </div>
  );
}

export default SummaryCards;
