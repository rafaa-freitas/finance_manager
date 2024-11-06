import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";
import React from "react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

function TransactionTypeBadge({ transaction }: TransactionTypeBadgeProps) {
  switch (transaction.type) {
    case TransactionType.DEPOSIT:
      return (
        <Badge className="bg-muted font-bold text-primary hover:bg-muted">
          <CircleIcon className="mr-2 fill-primary" size={10}></CircleIcon>
          Depósito
        </Badge>
      );
    case TransactionType.EXPENSE:
      return (
        <Badge className="bg-danger bg-opacity-10 font-bold text-danger hover:bg-danger hover:bg-opacity-10">
          <CircleIcon className="mr-2 fill-danger" size={10}></CircleIcon>
          Despesa
        </Badge>
      );
    case TransactionType.INVESTMENT:
      return (
        <Badge className="bg-white bg-opacity-10 font-bold text-white hover:bg-white hover:bg-opacity-10">
          <CircleIcon className="mr-2 fill-white" size={10}></CircleIcon>
          Investimento
        </Badge>
      );
  }
}

export default TransactionTypeBadge;
