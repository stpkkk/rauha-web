"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  text: string;
  pendingText: string;
};

export function SubmitButton({ text, pendingText }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? pendingText : text}
    </button>
  );
}
