import React from "react";
import { auth, signIn, signOut } from "auth";
import { RiUserShared2Line } from "react-icons/ri";
import { RiUserReceived2Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type LoginProps = {};

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" variant="link">
        <RiUserReceived2Line className="text-xl mr-1" />
      </Button>
    </form>
  );
}

const Login = async (props: LoginProps) => {
  const session = await auth();
  return (
    <div className="flex flex-row gap-6 items-center justify-end">
      <span className="rounded-full cursor-pointer duration-200 text-gray-500 hover:text-darkText">
        {session?.user ? (
          <div className="flex flex-row items-center justify-center">
            {session.user.name && session.user.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <SignOut />
          </div>
        ) : (
          <Link href="/api/auth/signin">
            <span className="rounded-full cursor-pointer duration-200 group">
              <Button
                variant="link"
                className="group-hover:text-darkText text-gray-500"
              >
                <RiUserShared2Line className="text-2xl me-1" />
                <span>Login</span>
              </Button>
            </span>
          </Link>
        )}
      </span>
    </div>
  );
};

export default Login;
