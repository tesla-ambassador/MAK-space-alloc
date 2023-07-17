import React, { useContext } from "react";
import CheckoutForm from "@/components/misc/CheckoutForm";
import { BookingContext } from "@/context/BookingContext";
import SignIn from "@/components/misc/SignIn";

export default function Checkout() {
  const { isSignedIn } = useContext(BookingContext);
  return (
    <div className="container px-4 mx-auto pt-16 pb-12 mbNav:pt-20 lg:px-[50px] xl:px-[100px]">
      {isSignedIn ? <CheckoutForm /> : <SignIn />}
    </div>
  );
}
