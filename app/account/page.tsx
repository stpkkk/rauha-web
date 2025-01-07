import { auth } from "../_lib/auth";

export const metadata = {
  title: "Аккаунт",
};

export default async function AccountPage() {
  const session = await auth();

  const firstName = session?.user?.name?.split(" ").at(0);

  return (
    <h2 className="mb-4 text-2xl font-semibold text-accent-400">
      Добро пожаловать {firstName}
    </h2>
  );
}
