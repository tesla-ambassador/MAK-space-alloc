import React, { useContext } from "react";
import { BookingContext } from "@/context/BookingContext";
import { PersonRounded } from "@mui/icons-material";
const products = [
  {
    id: 1,
    name: "COCIS Conference",
    href: "#",
    imageSrc: "/spaces/COCIS CONFERENCE (2)(COCIS)-min.jpg",
    imageAlt: "COCIS Conference hall",
    price: "60-70",
  },
  {
    id: 2,
    name: "COCIS Open space",
    href: "#",
    imageSrc: "spaces/COCIS OPEN SPACE (COCIS)-min.jpg",
    imageAlt: "COCIS Open space",
    price: "60-70",
  },
  {
    id: 3,
    name: "CEES Conference Room",
    href: "#",
    imageSrc: "/spaces/COLLEDGE OF EDUCATION CONFERENCE-min.jpg",
    imageAlt: "CEES Confrence Room",
    price: "100-200",
  },
  {
    id: 4,
    name: "CTF1 Conference Room",
    href: "#",
    imageSrc: "/spaces/IMG_6607-min.jpg",
    imageAlt: "CTF1 Conference Room",
    price: "100",
  },
  {
    id: 5,
    name: "CHUSS Smart Room",
    href: "#",
    imageSrc: "/spaces/SMART ROOM CHUSS)-min.jpg",
    imageAlt: "Awesome hall",
    price: "30-40",
  },
  {
    id: 6,
    name: "IMPIS",
    href: "#",
    imageSrc: "/spaces/IMPISE 2(OPEN SPACE)-min.jpg",
    imageAlt: "Awesome hall",
    price: "500+",
  },
  {
    id: 7,
    name: "Main Pitch",
    href: "#",
    imageSrc: "/spaces/MAIN PITCH (OPEN SPACE) (3)-min.jpg",
    imageAlt: "Main Pitch",
    price: "500+",
  },
  {
    id: 8,
    name: "CAES Conference Room",
    href: "#",
    imageSrc: "/spaces/SCHOOL OF AGRICULTURE(CAES)-min.jpg",
    imageAlt: "CEAS Conference Room",
    price: "130-140",
  },
  {
    id: 9,
    name: "CAES Conference Room 2",
    href: "#",
    imageSrc: "/spaces/SCHOOL OF NUTRITION(CAES)-min.jpg",
    imageAlt: "CAES Conference Room 2",
    price: "130-140",
  },
  {
    id: 10,
    name: "Swimming Pool",
    href: "#",
    imageSrc: "/spaces/SWIMMING POOL 1 (OPEN SPACE)-min.jpg",
    imageAlt: "Awesome hall",
    price: "50-100",
  },
  {
    id: 11,
    name: "Tennis Court",
    href: "#",
    imageSrc: "/spaces/TENNIS COURT(OPEN SPACES)-min.jpg",
    imageAlt: "Awesome hall",
    price: "50-100",
  },
  {
    id: 12,
    name: "COCIS Open Space",
    href: "#",
    imageSrc: "/spaces/COCIS OPEN SPACE (COCIS)-min.jpg",
    imageAlt: "Awesome hall",
    price: "100-150",
  },
  {
    id: 13,
    name: "COBAMS Auditorium",
    href: "#",
    imageSrc: "/spaces/AUDITORUAM(COBAMS)-min.JPG",
    imageAlt: "COBAMS Auditorium",
    price: "100-150",
  },
  {
    id: 14,
    name: "Freedom Square",
    href: "#",
    imageSrc: "/spaces/FREEDOM SQUARE 1 (OPEN SPACE)-min.jpg",
    imageAlt: "Freedom Square",
    price: "500+",
  },
  // More products...
];

export default function HallGrid() {
  const { handleViewer, openViewer } = useContext(BookingContext);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Find a space to book
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative"
              onClick={() => {
                handleViewer(product);
                openViewer();
              }}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900 flex items-center">
                  {product.price}
                  <PersonRounded />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
