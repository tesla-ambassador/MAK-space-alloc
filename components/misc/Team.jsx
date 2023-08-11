import { PersonRounded } from "@mui/icons-material";

const people = [
  {
    name: "Keziah Odora",
    role: "Team leader",
    imageUrl: "/profile-images/keziah.jpeg",
  },
  {
    name: "Ssesanga Titus",
    role: "Programmer",
    imageUrl: "/profile-images/titus.jpeg",
  },
  {
    name: "Nakisozi Maria",
    role: "UI deisgner",
    imageUrl: "/profile-images/maria.jpeg",
  },
  {
    name: "Kasoole Ahmed",
    role: "Project manager",
    imageUrl: "",
  },
  {
    name: "Jooga Derrick",
    role: "Coordinator",
    imageUrl: "",
  },
  // More people...
  
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get to know the talented individuals who make it all happen and who
            make our goals a reality
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                {person.imageUrl === "" ? (
                  <div className="h-16 w-16 rounded-full flex justify-center items-center overflow-hidden border-gray-500 border-[1px]">
                    <PersonRounded className="text-black" fontSize="large" />
                  </div>
                ) : (
                  <div className="h-16 w-16 rounded-full flex justify-center items-center overflow-hidden">
                    <img src={person.imageUrl} alt={person.name} />
                  </div>
                )}
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-green-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
