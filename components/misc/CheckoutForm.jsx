import { useState, useContext } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import CheckoutContent from "../layout/CheckoutContent";
import { BookingContext } from "@/context/BookingContext";
import { send } from "@emailjs/browser";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

const userDetails = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  city: "",
  bookingDate: "",
};

export default function CheckoutForm() {
  const { viewerData } = useContext(BookingContext);
  const [data, setData] = useState(userDetails);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: [e.target.value],
    });
  };

  const template_params = {
    from_name: data.firstName,
    email: data.email,
    message:
      data.firstName +
      " " +
      data.lastName +
      " " +
      data.email +
      " " +
      data.phone +
      " " +
      data.city +
      " " +
      data.bookingDate +
      " " +
      viewerData.name,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    send(
      "service_6hk5l7b",
      "template_pavmikk",
      template_params,
      "uvKhxoLr4PhTCanw4"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    addDoc(collection(db, "user_bookings"), {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      bookingDate: data.bookingDate,
      city: data.city,
      isBookable: true,
    })
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
    setData(userDetails);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:flex lg:items-start lg:gap-12 lg:justify-between"
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-md font-semibold leading-7 text-gray-900">
            Contact Information
          </h2>
          <p className="mt-1 text-base leading-6 text-gray-600">
            Use an address where you can receive products.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  id="first-name"
                  autoComplete="given-name"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  id="last-name"
                  autoComplete="family-name"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  value={data.email}
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  value={data.phone}
                  type="tel"
                  autoComplete="on"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="date"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Booking date
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  name="bookingDate"
                  value={data.bookingDate}
                  id="date"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  type="city"
                  name="city"
                  value={data.city}
                  id="city"
                  autoComplete="address-level2"
                  required={true}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Notifications
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            We&apos;ll always let you know when the dean approves or denies your
            booking by email.
          </p>
          <button
            type="submit"
            className="rounded-md w-full bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Confirm request
          </button>
        </div>
      </div>
      <CheckoutContent />
    </form>
  );
}