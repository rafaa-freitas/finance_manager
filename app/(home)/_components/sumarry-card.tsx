import AddTransactionButton from "@/app/_components/add-transaction-button";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import React, { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  amount: number;
  size?: "small" | "large";
  canUserAddTransactions: boolean;
}

function SummaryCard({
  icon,
  title,
  amount,
  size = "small",
  canUserAddTransactions,
}: SummaryCardProps) {
  return (
    <Card className={"bg-card " + (size === "large" ? "bg-card" : "")}>
      <CardHeader className="flex-row items-center gap-4">
        {icon}

        <p
          className={
            size === "small"
              ? "text-muted-foreground opacity-70"
              : "text-white opacity-70"
          }
        >
          {title}
        </p>
      </CardHeader>

      <CardContent className="flex justify-between">
        <p
          className={`font-bold ${size === "small" ? "text-2xl" : "text-4xl"} `}
        >
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(amount)}
        </p>

        {size === "large" && (
          <AddTransactionButton
            canUserAddTransaction={canUserAddTransactions}
          />
        )}
      </CardContent>
    </Card>
  );
}

export default SummaryCard;
