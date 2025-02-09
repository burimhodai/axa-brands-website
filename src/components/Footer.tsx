import { Axa } from "@/assets/client-logos";
import { SocialIcon } from "react-social-icons";

export const Footer = () => {
  return (
    <footer className="block bg-secondary text-white ">
      {/* Container */}
      <div className="py-16 md:py-20 mx-auto w-full max-w-7xl px-5 md:px-10">
        {/* Component */}
        <div className="flex-col flex items-center">
          <a
            href="javascript:void(0);"
            className="mb-8 inline-block max-w-full text-white"
          >
            <img src={Axa} alt="logo" className="inline-block max-h-10" />
          </a>

          <div className="text-center font-semibold">
            <a
              href="#ballina"
              className="inline-block px-6 py-2 font-normal text-white transition hover:text-white/50"
            >
              Ballina
            </a>
            <a
              href="#rreth nesh"
              className="inline-block px-6 py-2 font-normal text-white transition hover:text-white/50"
            >
              Rreth nesh
            </a>
            <a
              href="#klientela"
              className="inline-block px-6 py-2 font-normal text-white transition hover:text-white/50"
            >
              Klientela
            </a>
            <a
              href="#xhi ofrojm ne?"
              className="inline-block px-6 py-2 font-normal text-white transition hover:text-white/50"
            >
              Shërbimet
            </a>
            <a
              href="#na kontakto"
              className="inline-block px-6 py-2 font-normal text-white transition hover:text-white/50"
            >
              Kontakt
            </a>
          </div>
          <div className="mb-8 mt-8 border-b border-gray-300 w-48"></div>
          <div className="mb-12 grid-cols-4 grid-flow-col grid max-w-52 gap-8 mx-auto">
            <a href="">
              <SocialIcon
                target="_blank"
                url="https://www.facebook.com/AXAbrandscreation"
                network="facebook"
                bgColor="#e75d37"
                style={{ height: 40, width: 40 }}
              />
            </a>
            <a href="">
              <SocialIcon
                target="_blank"
                url="https://www.instagram.com/axabrands/"
                network="instagram"
                bgColor="#e75d37"
                style={{ height: 40, width: 40 }}
              />
            </a>
            <a href="">
              <SocialIcon
                target="_blank"
                url="https://api.whatsapp.com/send?phone=38970625226"
                network="whatsapp"
                bgColor="#e75d37"
                style={{ height: 40, width: 40 }}
              />
            </a>
            <a href="">
              <SocialIcon
                target="_blank"
                url="https://www.tiktok.com/@festim.idrizi"
                network="tiktok"
                bgColor="#e75d37"
                style={{ height: 40, width: 40 }}
              />
            </a>
          </div>
          <p className="text-sm sm:text-base">
            © Copyright 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
