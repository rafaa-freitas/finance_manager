"use client";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/app/_components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/_components/ui/chart";

import { TransactionType } from "@prisma/client";
import { TransactionPercentagePerType } from "@/app/_data/get-dashboard/types";
import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import PercentageItem from "./percentage-item";

const chartConfig = {
  [TransactionType.INVESTMENT]: {
    label: "Investido",
    color: "#FFF",
  },
  [TransactionType.DEPOSIT]: {
    label: "Receita",
    color: "#55b02E",
  },
  [TransactionType.EXPENSE]: {
    label: "Despesa",
    color: "#E93030",
  },
} satisfies ChartConfig;

interface TransactionsPieChartProps {
  totalDeposits: number;
  totalExpenses: number;
  totalInvestments: number;
  typesPercentage: TransactionPercentagePerType;
}

function TransactionsPieChart({
  totalDeposits,
  totalExpenses,
  totalInvestments,
  typesPercentage,
}: TransactionsPieChartProps) {
  const chartData = [
    {
      type: TransactionType.DEPOSIT,
      amount: totalDeposits,
      fill: "#55B02E",
    },
    {
      type: TransactionType.EXPENSE,
      amount: totalExpenses,
      fill: "#E93030",
    },
    {
      type: TransactionType.INVESTMENT,
      amount: totalInvestments,
      fill: "#FFF",
    },
  ];

  return (
    <Card className="flex flex-col p-6">
      <CardContent className="flex flex-1 flex-col justify-between pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="type"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>

        <div className="space-y-3">
          <PercentageItem
            icon={<TrendingUpIcon size={16} className="text-success" />}
            title="Receita"
            value={typesPercentage[TransactionType.DEPOSIT]}
          />

          <PercentageItem
            icon={<TrendingDownIcon size={16} className="text-red-500" />}
            title="Despesa"
            value={typesPercentage[TransactionType.EXPENSE]}
          />

          <PercentageItem
            icon={<PiggyBankIcon size={16} />}
            title="Investimento"
            value={typesPercentage[TransactionType.INVESTMENT]}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default TransactionsPieChart;
