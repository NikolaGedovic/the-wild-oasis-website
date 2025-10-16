import { auth } from "@/app/_lib/auth";
import SignOutButton from "@/app/_components/SignOutButton";
import ReservationList from "@/app/_components/ReservationList";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { getBookings, getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  // Fetch data for mobile sections; desktop won't render these but it's okay to fetch.
  const [bookings, guest] = await Promise.all([
    getBookings(session.user.guestId),
    getGuest(session.user.email),
  ]);

  return (
    <div className="flex flex-col gap-8 px-4 md:px-0 max-w-5xl mx-auto w-full">
      {/* Welcome Section */}
      <section id="home" className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold text-accent-400">
          Welcome, {session.user.name}
        </h2>
      </section>

      {/* Reservations Section (mobile only) */}
      <section id="reservations" className="flex flex-col gap-4 md:hidden">
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
          <ReservationList bookings={bookings} />
        )}
      </section>

      {/* Profile Section (mobile only) */}
      <section id="profile" className="flex flex-col gap-4 md:hidden">
        <h3 className="text-xl font-semibold text-accent-400">Your Profile</h3>
        <UpdateProfileForm guest={guest} />
      </section>

      {/* Logout Button (mobile only; desktop shows in sidebar) */}
      <div className="mt-8 md:hidden">
        <ClientSignOutButton />
      </div>
    </div>
  );
}

// Client wrappers
function ClientSignOutButton() {
  "use client";
  return <SignOutButton />;
}
