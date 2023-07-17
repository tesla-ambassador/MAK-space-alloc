import { Fragment, useContext, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/20/solid";
import { BookingContext } from "@/context/BookingContext";
import { Google } from "@mui/icons-material";
import { signInWithGoogle } from "@/firebase";
import Link from "next/link";
import { toggleButtonClasses } from "@mui/material";

const product = {
  name: "Basic Tee 6-Pack ",
  price: "$192",
  rating: 3.9,
  reviewCount: 117,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",
  imageAlt: "Two each of gray, white, and black shirts arranged on table.",
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
    { name: "XXXL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HallOverview() {
  const {
    closeViewer,
    viewerData,
    isViewerOpen,
    handleViewer,
    isSignedIn,
    signInToApp,
  } = useContext(BookingContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleViewer(viewerData);
    closeViewer();
  };

  return (
    <Transition.Root show={isViewerOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeViewer}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => closeViewer()}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 lg:gap-x-8">
                    <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                      <img
                        src={viewerData.imageSrc}
                        alt={viewerData.imageAlt}
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {viewerData.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-2"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <p className="text-2xl text-gray-900">
                          {viewerData.price}
                        </p>

                        {/* Reviews */}
                        <div className="mt-6">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    product.rating > rating
                                      ? "text-gray-900"
                                      : "text-gray-200",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">
                              {product.rating} out of 5 stars
                            </p>
                            <a
                              href="#"
                              className="ml-3 text-sm font-medium text-green-600 hover:text-green-500"
                            >
                              {product.reviewCount} reviews
                            </a>
                          </div>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-10"
                      >
                        {isSignedIn ? (
                          <form onSubmit={handleSubmit}>
                            <Link href={"/checkout"}>
                              <button
                                type="submit"
                                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                onClick={() => {
                                  closeViewer();
                                }}
                              >
                                Request to book
                              </button>
                            </Link>
                          </form>
                        ) : (
                          <button
                            type="button"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-8 py-3 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                            onClick={() => {
                              signInToApp();
                              closeViewer();
                            }}
                          >
                            <span className="flex items-center gap-1">
                              <span>
                                <Google />
                              </span>
                              <span>Sign in with Google</span>
                            </span>
                          </button>
                        )}
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
