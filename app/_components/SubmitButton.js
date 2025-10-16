"use client";
import { useFormStatus } from "react-dom";

export default function SubmitButton({
  children,
  pendingLabel,
  className = "",
}) {
  const { pending } = useFormStatus();
  return (
    <button
      className={`px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300 ${className}`}
      disabled={pending}
    >
      {pending ? pendingLabel : children}
    </button>
  );
}
