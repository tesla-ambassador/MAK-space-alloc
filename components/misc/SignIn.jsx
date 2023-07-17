import { Google } from "@mui/icons-material";
import React, { useContext } from "react";
import { BookingContext } from "@/context/BookingContext";
export default function SignIn() {
  const { signInToApp } = useContext(BookingContext);
  return (
    <>
      <div className="flex min-h-[90vh] flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="/logos/Mak-Logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex justify-center">
              <Google className="text-black" fontSize="large" />
            </div>

            <div>
              <button
                type="button"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                onClick={() => {
                  signInToApp();
                }}
              >
                <span>Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
