import Image from "next/image";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";
import image1 from "@/public/assets/images/about-1.jpg";

export const revalidate = 86400;

export const metadata = {
  title: "О нас",
};

export default async function AboutPage() {
  const cabins = await getCabins();
  const cabinsAmount = cabins.length;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32">
        <div className="lg:col-span-3">
          <h1 className="mb-6 text-3xl font-medium text-accent-400 md:mb-10 md:text-4xl">
            Добро пожаловать в Рауха
          </h1>

          <div className="space-y-6 text-base md:space-y-8 md:text-lg">
            <p>
              У нас вы найдете максимум удобств для вашего идеального отдыха,
              комфортабельные домики, оформленные в скандинавском стиле, которые
              смогут удовлетворить потребности любого постояльца.
            </p>
            <p>
              Наши {cabinsAmount} роскошных домиков обеспечивают уютное
              размещение, настоящую свободу и покой. Прогуляйтесь по густым
              лесам, подышите свежим воздухом и наблюдайте, как звезды мерцают
              над головой от тепла костра или чана с теплой водой.
            </p>
            <p>
              Здесь создаются незабываемые моменты в окружении великолепия
              природы. Это место, где можно замедлиться, расслабиться и ощутить
              радость быть вместе в красивой обстановке.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Image
            src={image1 || "/placeholder.svg"}
            alt="о нас 1"
            placeholder="blur"
            className="w-full rounded-lg"
          />
        </div>

        <div className="relative aspect-square w-full lg:col-span-2">
          <Image
            src="/assets/images/about-2.jpg"
            className="rounded-lg object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
            alt="Изображение"
          />
        </div>

        <div className="lg:col-span-3">
          <h1 className="mb-6 text-3xl font-medium text-accent-400 md:mb-10 md:text-4xl">
            Работаем с 2017
          </h1>

          <div className="space-y-6 text-base md:space-y-8 md:text-lg">
            <p>
              С 2017 года Рауха является любимым семейным местом отдыха. Этот
              рай, основанный нашими бабушкой и дедушкой, создавался с любовью и
              заботой и передавался через всю нашу семью как свидетельство
              нашего стремления создать теплую, гостеприимную атмосферу.
            </p>
            <p>
              Отдыхая в наших домиках, вы ощущаете и комфорт городской квартиры,
              и волшебство нетронутой природы. Это идеальный вариант, чтобы уйти
              от шумного мегаполиса, освободить голову от суеты и мыслей или
              побыть наедине с любимым человеком.
            </p>

            <div>
              <Link
                href="/cabins"
                className="mt-4 inline-block rounded-lg bg-accent-500 px-6 py-3 text-base font-semibold text-primary-800 transition-all hover:bg-accent-600 md:px-8 md:py-5 md:text-lg"
              >
                Посмотреть домики
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
