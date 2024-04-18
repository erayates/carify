import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import MuiThemeProvider from "@/theme";
import Footer from "@/components/footer";
import Header from "@/components/header";
import AccountSidebar from "@/containers/app/account-container/account-sidebar";
import PageHero from "@/components/page-hero";
import { UserStoreProvider } from "@/providers/userProvider";
import HydrationZustand from "@/providers/hydrationZustand";
import Toastify from "@/components/ui/toast";

const roboto = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MuiThemeProvider>
        <UserStoreProvider>
          <body className={roboto.className}>
            <HydrationZustand>
              <Header />
              <PageHero title="Account" />
              <main className="container grid grid-cols-3 gap-16 relative my-16">
                <AccountSidebar />
                {children}
              </main>
              <Toastify />
              <Footer />
            </HydrationZustand>
          </body>
        </UserStoreProvider>
      </MuiThemeProvider>
    </html>
  );
}
