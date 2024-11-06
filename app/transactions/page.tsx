import React from "react";
import { db } from "../_lib/prisma";
import { Button } from "../_components/ui/button";
import { ArrowDownUpIcon } from "lucide-react";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

async function Transactions() {
  const transactions = await db.transaction.findMany({});

  return (
    <>
      <div className="space-y-6 p-6">
        {/* Título e botão */}
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>

          <Button className="rounded-full">
            Adicionar transação
            <ArrowDownUpIcon></ArrowDownUpIcon>
          </Button>
        </div>

        <DataTable columns={transactionColumns} data={transactions}></DataTable>
      </div>
    </>
  );
}

export default Transactions;
