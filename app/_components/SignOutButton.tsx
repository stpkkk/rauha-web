import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

type SignOutButtonProps = {
  text?: string;
  size: number;
};

function SignOutButton({ text, size }: SignOutButtonProps) {
  return (
    <form action={signOutAction}>
      <button className="flex w-full items-center gap-4 px-5 py-3 font-semibold text-primary-200 transition-colors hover:bg-primary-900 hover:text-primary-100">
        <ArrowRightStartOnRectangleIcon
          className={`h-${size} w-${size} text-primary-600`}
        />
        <span>{text}</span>
      </button>
    </form>
  );
}

export default SignOutButton;
