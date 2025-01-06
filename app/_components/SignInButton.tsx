import Image from "next/image";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signInAction("google");
      }}
    >
      <button className="flex items-center gap-6 rounded-lg border border-primary-300 px-10 py-4 text-lg font-medium">
        <div className="relative h-24 w-24">
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            alt="Google logo"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
