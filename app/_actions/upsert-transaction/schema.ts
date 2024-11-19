import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1)
    .max(256, { message: "Tamanho máximo excedido" }),
  amount: z
    .number()
    .positive()
    .refine((val: number) => val.toString().length <= 64, {
      message: "Tamanho máximo excedido",
    }),
  type: z.nativeEnum(TransactionType),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});
