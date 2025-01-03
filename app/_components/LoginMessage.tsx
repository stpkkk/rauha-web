import Link from "next/link";

function LoginMessage() {
  return (
    <div className="grid bg-primary-800">
      <p className="self-center py-12 text-center text-xl">
        Чтобы забронировать этот домик необходимо
        <br />
        <Link href="/login" className="text-accent-500 underline">
          Авторизоваться
        </Link>{" "}
      </p>
    </div>
  );
}

export default LoginMessage;
