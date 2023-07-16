import React, { useContext } from "react";
import { BookingContext } from "@/context/BookingContext";

export default function HallBooking() {
  const { viewerData } = useContext(BookingContext);
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul role="list" className="-my-6">
          <div className="h-[250px] w-[250px] flex-shrink-0 overflow-hidden rounded-md">
            <img
              src={viewerData.imageSrc}
              alt={viewerData.imageAlt}
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="flex flex-1 flex-col py-4">
            <div>
              <div className="flex text-base font-medium text-red-600">
                <h3>{viewerData.name}</h3>
              </div>
              {/* <p className='mt-1 text-sm text-gray-500'>{product.colors}</p> */}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
