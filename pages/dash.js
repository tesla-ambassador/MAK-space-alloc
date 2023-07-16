import React, { useContext } from "react";
import Dashboard from "@/components/layout/Dashboard";
import { BookingContext } from "@/context/BookingContext";
import HallOverview from "@/components/misc/HallOverview";

export default function Dash() {
  const { isViewerOpen } = useContext(BookingContext);
  return (
    <div>
      <Dashboard />
      {isViewerOpen && <HallOverview />}
    </div>
  );
}
