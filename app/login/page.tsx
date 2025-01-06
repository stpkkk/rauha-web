import SignInButton from "../_components/SignInButton";

export const metadata = {
  title: "login",
};

export default function LoginPage() {
  return (
    <div className="mt-10 flex flex-col items-center gap-10">
      <h2 className="text-3xl font-semibold">
        Войти, чтобы получить доступ к разделу для гостей
      </h2>
      <SignInButton />
    </div>
  );
}
