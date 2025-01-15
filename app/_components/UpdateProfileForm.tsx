import { updateGuest } from "../_lib/actions";
import { GuestType } from "../_types/guest";
import { SubmitButton } from "./SubmitButton";

type UpdateProfileFormProps = {
  guest: GuestType;
};

export default function UpdateProfileForm({ guest }: UpdateProfileFormProps) {
  const { fullName, homeTown, passportId, email } = guest;

  return (
    <form
      action={updateGuest}
      className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg"
    >
      <div className="space-y-2">
        <label htmlFor="fullName">Ваше имя</label>
        <input
          defaultValue={fullName || ""}
          name="fullName"
          disabled
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email">Email</label>
        <input
          defaultValue={email || ""}
          name="email"
          disabled
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="homeTown">Откуда вы?</label>
        <input
          defaultValue={homeTown || ""}
          name="homeTown"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="passportId">Номер паспорта</label>
        <input
          defaultValue={passportId || ""}
          name="passportId"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton text="Обновить" pendingText="Обновляем..." />
      </div>
    </form>
  );
}
