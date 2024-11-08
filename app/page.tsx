import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

import { redirect } from "next/navigation";
import Navbar from "./_components/navbar";

async function Home() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/login");
  }

  return (
    <>
      <Navbar />

      <div className="flex h-full items-center justify-center">
        <UserButton showName></UserButton>
      </div>
    </>
  );
}

export default Home;
