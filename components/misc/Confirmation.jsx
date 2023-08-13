import React from "react";
import Link from "next/link";

export default function Confirmation({ toggleSubmission }) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Notifications
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        We&apos;ll always let you know when the administrator approves or denies your
        booking by email.
      </p>
      <Link href={"/dash"}>
        <button
          onClick={() => {
            toggleSubmission();
          }}
          className="rounded-md w-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Continue
        </button>
      </Link>
    </div>
  );
}
