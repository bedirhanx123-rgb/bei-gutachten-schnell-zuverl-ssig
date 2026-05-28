import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBar } from "./MobileBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background has-mobile-bar">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileBar />
    </div>
  );
}
