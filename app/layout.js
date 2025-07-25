import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from 'sonner';

const inter = Inter({subsets : ["latin"]});
export const metadata = {
  title: "Fintrack - A Financial Management Platform",
  description: "Finance Tracker",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}>
        {/* Header */}
        <Header/>

        <main className="min-h-screen">
        {children}
        </main>
        <Toaster richColors />
        {/* Footer */}
        <footer className="bg-blue-50 py-12 ">
          <div className="container mx-auto px-4 text-center text-grey-600"> 
            <p>
              Copyright Finance Services . All rights reserved
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
