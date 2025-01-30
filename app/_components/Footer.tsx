import { MapPinIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary-900 py-6 text-white">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="mb-8 grid grid-cols-1 justify-between gap-8 md:grid-cols-3 lg:grid-cols-4">
          {/* Лого */}
          <div>
            <Logo />
          </div>

          {/* Меню */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Меню</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#link3" className="hover:text-gray-400">
                  Домики
                </Link>
              </li>
              <li>
                <Link href="/#link4" className="hover:text-gray-400">
                  Галерея
                </Link>
              </li>
              <li>
                <Link href="/#link5" className="hover:text-gray-400">
                  Удобства
                </Link>
              </li>
              <li>
                <Link href="#voda" className="hover:text-gray-400">
                  Ресторан
                </Link>
              </li>
            </ul>
          </div>

          {/* Клиентам */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Клиентам</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://chalet-hotel.ru/"
                  className="hover:text-gray-400"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="https://chalet-hotel.ru/dogovor-oferty/"
                  className="hover:text-gray-400"
                >
                  Договор оферты
                </Link>
              </li>
              <li>
                <Link
                  href="https://chalet-hotel.ru/zoopark/"
                  className="hover:text-gray-400"
                >
                  Зоопарк
                </Link>
              </li>
              <li>
                <Link
                  href="https://chalet-hotel.ru/privacy-policy/"
                  className="hover:text-gray-400"
                >
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="mb-4 text-xl font-semibold sm:text-2xl">Контакты</h3>
            <p className="mb-2">
              <Link href="tel:89853540505" className="hover:text-gray-400">
                8 (963) 747-37-32
              </Link>
            </p>
            <p className="mb-2">
              Республика Карелия, Лоухский район, поселок Карельский
            </p>
            <p className="mb-4">66.36750213467137, 32.954551592757134</p>
            <Link
              className="flex items-center gap-4 hover:text-gray-400"
              href="https://yandex.ru/maps/?ll=32.959206%2C66.367141&mode=search&sll=32.954552%2C66.367502&text=66.367502%2C32.954552&z=15.37"
              target="_blank"
            >
              <MapPinIcon className="h-7 w-7" />
              <span>Мы на Яндекс картах</span>
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="mb-2">© 2023 Rauha Hotel</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#" className="hover:text-gray-400">
              Публичный договор
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="hover:text-gray-400">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
