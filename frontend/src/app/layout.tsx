"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthInitializer from "./components/auth/AuthInitializer";
import "./globals.css";
import Footer from "./components/footer/footer";
import AdminNavbar from "./components/adminDashBoard/adminNavbar";
import DashboardNavbar from "./components/userDashbaord/DashboardNavbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const queryClient = new QueryClient();

function LayoutContent({ children }: { children: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.user.user);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render navbar */}
      {user?.role === "admin" ? <AdminNavbar /> : <DashboardNavbar />}

      {/* Main content grows to fill space */}
      <main className="flex-grow">{children}</main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthInitializer />
            <LayoutContent>{children}</LayoutContent>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
