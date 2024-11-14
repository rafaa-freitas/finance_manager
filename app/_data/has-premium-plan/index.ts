import { auth, clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function hasPremiumPlan() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  const user = await (await clerkClient()).users.getUser(userId);
  return user.publicMetadata.subscriptionPlan === "premium";
}
