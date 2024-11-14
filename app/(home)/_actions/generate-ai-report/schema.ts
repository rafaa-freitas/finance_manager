import { isMatch } from "date-fns";
import { z } from "zod";

export const generateAiReportSchema = z.object({
  month: z
    .string()
    .trim()
    .refine((value) => isMatch(value, "MM")),
});

export type GenerateAiReportSchema = z.infer<typeof generateAiReportSchema>;
