import UpdateProfileForm from "@/app/_components/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";

export const metadata = {
  title: "Обновить Профиль",
};

export default async function ProfilePage() {
  const session = await auth();
  const guest = await getGuest(session?.user.email);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Обновите свой гостевой профиль
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Предоставление следующей информации сделает процесс регистрации более
        быстрым и беспроблемным. До скорой встречи!
      </p>

      <UpdateProfileForm guest={guest} />
    </div>
  );
}

