import "./globals.css";
import NavBarWrapper from "@organisms/NavBarWrapper";
import { PageFooter } from "@organisms/PageFooter";

export const metadata = {
  title: "WellPath",
  description: "A health tracker application created by the Rainbow Devs."
};

export default function RootLayout({
  children,
  authModal
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-white to-fitGray-100/50 text-fitGray-900 antialiased dark:from-fitGray-700 dark:to-fitGray-900 dark:text-white">
        <NavBarWrapper />
        {children}
        {authModal}
        <PageFooter />
      </body>
    </html>
  );
}
