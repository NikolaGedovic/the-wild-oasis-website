import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import DeleteReservation from "./DeleteReservation";
import Image from "next/image";
import Link from "next/link";

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className="flex flex-col md:flex-row border border-primary-800">
      <div className="relative w-full h-44 md:h-32 md:w-32 md:flex-none">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover md:border-r border-primary-800"
        />
      </div>

      <div className="flex flex-col flex-grow px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg md:text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className="flex items-center px-3 text-xs font-bold text-yellow-200 uppercase bg-yellow-800 rounded-sm h-7">
              past
            </span>
          ) : (
            <span className="flex items-center px-3 text-xs font-bold text-green-200 uppercase bg-green-800 rounded-sm h-7">
              upcoming
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")} (
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>

        <div className="flex flex-wrap items-baseline gap-3 md:gap-5 mt-auto">
          <p className="text-lg md:text-xl font-semibold text-accent-400">
            ${totalPrice}
          </p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-base md:text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="md:ml-auto text-sm text-primary-400 w-full md:w-auto">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      {!isPast(new Date(startDate)) ? (
        <div className="flex md:flex-col border-t md:border-t-0 md:border-l border-primary-800 w-full md:w-[100px]">
          <Link
            href={`/account/reservations/edit/${id}`}
            className="flex items-center justify-center md:justify-start flex-1 gap-2 px-3 py-2 md:py-3 text-xs font-bold uppercase transition-colors md:border-b group text-primary-300 border-primary-800 hover:bg-accent-600 hover:text-primary-900"
          >
            <PencilSquareIcon className="w-5 h-5 transition-colors text-primary-600 group-hover:text-primary-800" />
            <span className="mt-1">Edit</span>
          </Link>
          <DeleteReservation bookingId={id} onDelete={onDelete} />
        </div>
      ) : null}
    </div>
  );
}

export default ReservationCard;
