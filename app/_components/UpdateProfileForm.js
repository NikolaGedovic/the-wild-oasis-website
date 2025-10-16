"use client";

import { updateGuest } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function UpdateProfileForm({ guest }) {
  const displayFullName = guest?.fullName ?? guest?.name ?? "";
  const displayEmail = guest?.email ?? "";
  const nationalID = guest?.nationalID ?? "";

  return (
    <form
      action={updateGuest}
      className="flex flex-col gap-6 px-6 sm:px-10 md:px-12 py-6 md:py-8 text-base sm:text-lg bg-primary-900 max-w-2xl"
    >
      <div className="space-y-2">
        <label>Full name</label>
        <input
          disabled
          name={"fullName"}
          defaultValue={displayFullName}
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:opacity-70"
        />
      </div>

      <div className="space-y-2">
        <label>Email address</label>
        <input
          disabled
          name={"email"}
          defaultValue={displayEmail}
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:opacity-70"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">National ID number</label>
        <input
          defaultValue={nationalID}
          name="nationalID"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
        />
      </div>

      <div className="flex items-center justify-center">
        <SubmitButton className="w-full max-w-md" pendingLabel={"Updating..."}>
          Update profile
        </SubmitButton>
      </div>
    </form>
  );
}

export default UpdateProfileForm;
