import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {

  useEffect(() => {
    const fetchSocket = async () => {
      await fetch('/api/socket');
    };
    fetchSocket();
  }, []);

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}