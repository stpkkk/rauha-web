function ProfilePage() {
  const countryFlag = "pt.jpg";

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Обновите свой гостевой профиль
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Предоставление следующей информации сделает процесс регистрации более
        быстрым и беспроблемным. До скорой встречи!
      </p>

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
    </div>
  );
}

export default ProfilePage;
