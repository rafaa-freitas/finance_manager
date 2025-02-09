import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { Progress } from "@/app/_components/ui/progress";
import { ScrollArea } from "@/app/_components/ui/scroll-area";
import { TRANSACTION_CATEGORY_OPTIONS } from "@/app/_constants/transactions";
import { TotalExpensePerCategory } from "@/app/_data/get-dashboard/types";
import React from "react";

interface ExpensesPerCategoryProps {
  expensesPerCategory: TotalExpensePerCategory[];
}

function ExpensesPerCategory({
  expensesPerCategory,
}: ExpensesPerCategoryProps) {
  return (
    <>
      <ScrollArea className="col-span-2 h-full rounded-md border bg-card pb-6">
        <CardHeader>
          <CardTitle className="font-bold">Gastos por Categoria</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {expensesPerCategory.map((category) => {
            return (
              <div key={category.category} className="space-y-2">
                <div className="flex w-full justify-between">
                  <p className="text-sm font-bold">
                    {TRANSACTION_CATEGORY_OPTIONS.find(
                      (option) => option.value == category.category,
                    )?.label ?? "Não informada"}
                  </p>

                  <p className="text-sm font-bold">
                    {category.percentageOfTotal}%
                  </p>
                </div>

                <Progress value={category.percentageOfTotal} />
              </div>
            );
          })}
        </CardContent>
      </ScrollArea>
    </>
  );
}

export default ExpensesPerCategory;
