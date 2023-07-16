import React, { useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import HallBooking from "../misc/HallBooking";
import { BookingContext } from "@/context/BookingContext";
import Link from "next/link";

export default function CheckoutContent() {
  return (
    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className="text-lg font-medium text-gray-900">Hall</h1>
        </div>
        <HallBooking />
      </div>
    </div>
  );
}
