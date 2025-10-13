import { auth } from "@/app/_lib/auth";
import ReservationList from "@/app/_components/ReservationList";
import SignOutButton from "@/app/_components/SignOutButton";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const bookings = await fetchBookings(session.user.guestId);

  return (
    <div className="flex flex-col gap-8 px-4 md:px-0">
      {/* Welcome Section */}
      <section id="home" className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-accent-400">
          Welcome, {session.user.name}
        </h2>
      </section>

      {/* Reservations Section */}
      <section id="reservations" className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-accent-400">
          Your Reservations
        </h3>
        {bookings.length === 0 ? (
          <p className="text-base">
            You have no reservations yet. Check out our{" "}
            <a className="underline text-accent-500" href="/cabins">
              luxury cabins &rarr;
            </a>
          </p>
        ) : (
          <ClientReservationList bookings={bookings} />
        )}
      </section>

      {/* Profile Section */}
      <section id="profile" className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold text-accent-400">Your Profile</h3>
        <ClientUpdateProfileForm guest={session.user} />
      </section>

      {/* Logout Button */}
      <div className="mt-8">
        <ClientSignOutButton />
      </div>
    </div>
  );
}

// Client wrappers
function ClientReservationList({ bookings }) {
  "use client";
  return <ReservationList bookings={bookings || []} />;
}

function ClientSignOutButton() {
  "use client";
  return <SignOutButton />;
}

function ClientUpdateProfileForm({ guest }) {
  "use client";
  return <UpdateProfileForm guest={guest} />;
}

// Fetch bookings server-side
async function fetchBookings(guestId) {
  const { getBookings } = await import("@/app/_lib/data-service");
  return await getBookings(guestId);
}
