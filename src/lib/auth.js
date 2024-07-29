import { getSession, signIn, signOut } from "next-auth/react";

export const isAuthenticated = async () => {
  const session = await getSession();
  return !!session;
};

export const authenticateUser = async () => {
  const authenticated = await isAuthenticated();
  if (!authenticated) {
    signIn("google");
  }
  return authenticated;
};

export const handleLogout = async (session) => {
  let isUserAuthenticated = false;
  if (!session) {
    isUserAuthenticated = await isAuthenticated();
  } else {
    isUserAuthenticated = !!session;
  }
  if (isUserAuthenticated) {
    await signOut({ callbackUrl: "/" });
  }
};

export const handleLogin = async () => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) {
    await signIn("google");
  }
};
