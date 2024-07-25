import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton({ style }) {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className={`${style}`} onClick={() => signOut()}>
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button className={`${style}`} onClick={() => signIn("google")}>
        Sign in
      </button>
    </>
  );
}
