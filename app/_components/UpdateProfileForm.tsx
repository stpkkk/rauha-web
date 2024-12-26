"use client";

export default function UpdateProfileForm() {
  return (
    <form className="flex flex-col gap-6 bg-primary-900 px-12 py-8 text-lg">
      <div className="space-y-2">
        <label>Ваше имя</label>
        <input
          disabled
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label>Email</label>
        <input
          disabled
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">Откуда вы?</label>
        <input
          name="comeFrom"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="nationalID">Номер паспорта</label>
        <input
          name="passportId"
          className="w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm"
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <button className="bg-accent-500 px-8 py-4 font-semibold text-primary-800 transition-all hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
          Обновить профиль
        </button>
      </div>
    </form>
  );
}
