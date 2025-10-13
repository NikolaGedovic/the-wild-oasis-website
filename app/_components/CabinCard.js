import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex flex-col overflow-hidden border border-primary-800 bg-primary-950 md:flex-row md:h-[300px]">
      {/* IMAGE */}
      <div className="relative w-full h-[240px] md:h-full md:w-[45%]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 400px"
          className="object-cover border-b md:border-b-0 md:border-r border-primary-800"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-between flex-1">
        <div className="flex-1 p-6 md:p-8">
          <h3 className="mb-3 text-2xl font-semibold text-accent-500">
            Cabin {name}
          </h3>

          <div className="flex items-center gap-3 mb-3">
            <UsersIcon className="w-5 h-5 text-primary-600" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3 mt-auto">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span className="font-semibold line-through text-primary-600">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">${regularPrice}</span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="text-right border-t border-t-primary-800">
          <Link
            href={`/cabins/${id}`}
            className="inline-block px-6 py-4 transition-all border-l border-primary-800 hover:bg-accent-600 hover:text-primary-900"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
