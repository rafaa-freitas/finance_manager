import Image from "next/image";
import React from "react";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

async function LoginPage() {
  const { userId } = await auth();

  if (userId) {
    redirect("/");
  }

  return (
    <div className="align-center mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
      <Image
        src="/logo.svg"
        width={320}
        height={42}
        alt="Finance Manager"
        className="mb-8 self-center"
      />

      {/* <h1 className="mb-3 text-center text-4xl font-bold">Bem-vindo</h1> */}

      <p className="mb-8 text-muted-foreground">
        A Finance Manager é uma plataforma de gestão financeira que utiliza IA
        para monitorar suas movimentações, e oferecer insights personalizados,
        facilitando o controle do seu orçamento.
      </p>

      <SignInButton>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </SignInButton>
    </div>
  );
}

export default LoginPage;
