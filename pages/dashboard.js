import React, { useContext } from "react";
import { Inter } from "next/font/google";
import Dashboard from "@/components/layout/Dashboard";
import { BookingContext } from "@/context/BookingContext";
import HallOverview from "@/components/misc/HallOverview";

const inter = Inter({ subsets: ["latin"] });

export default function dashboard() {
  const { isViewerOpen } = useContext(BookingContext);
  return (
    <div>
      <Dashboard />
      {isViewerOpen && <HallOverview />}
    </div>
  );
}
