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
    <div className="grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Добро пожаловать в Рауха
        </h1>

        <div className="space-y-8">
          <p>
            У нас вы найдете максимум удобств для вашего идеального отдыха,
            комфортабельные домики, оформленные в скандинавском стиле, которые
            смогут удовлетворить потребности любого постояльца.
          </p>
          <p>
            Наши {cabinsAmount} роскошных домиков обеспечивают уютное
            размещение, настоящую свободу и покой. Прогуляйтесь по густым лесам,
            подышите свежим воздухом и наблюдайте, как звезды мерцают над
            головой от тепла костра или чана с теплой водой.
          </p>
          <p>
            Здесь создаются незабываемые моменты в окружении великолепия
            природы. Это место, где можно замедлиться, расслабиться и ощутить
            радость быть вместе в красивой обстановке.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={image1} alt="о нас 1" placeholder="blur" />
      </div>

      {/* Second way to use Next Image with responsive width and height (need to use container with relative,aspect ratio which gives image sizes, and object cover and fill to image to fill the container. Here we can`t use placeholder and quality attributes ) */}
      <div className="relative col-span-2 aspect-square">
        <Image
          src="/assets/images/about-2.jpg"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          alt="Изображение"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-accent-400">
          Работаем с 2017
        </h1>

        <div className="space-y-8">
          <p>
            С 2017 года Рауха является любимым семейным местом отдыха. Этот рай,
            основанный нашими бабушкой и дедушкой, создавался с любовью и
            заботой и передавался через всю нашу семью как свидетельство нашего
            стремления создать теплую, гостеприимную атмосферу.
          </p>
          <p>
            Отдыхая в наших домиках, вы ощущаете и комфорт городской квартиры, и
            волшебство нетронутой природы. Это идеальный вариант, чтобы уйти от
            шумного мегаполиса, освободить голову от суеты и мыслей или побыть
            наедине с любимым человеком.
          </p>

          <div>
            <Link
              href="/cabins"
              className="mt-4 inline-block bg-accent-500 px-8 py-5 text-lg font-semibold text-primary-800 transition-all hover:bg-accent-600"
            >
              Посмотреть домики
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
