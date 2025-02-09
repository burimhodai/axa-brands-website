import { HeroImg } from "@/assets/images";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-primary h-auto sm:h-200 w-full relative py-10">
      <div className="h-full flex flex-col sm:flex-row sm:container justify-center items-center mx-auto gap-16 px-4">
        {/* Text Content */}
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <div className="text-5xl text-left  xl:7xl 2xl:text-8xl font-black text-secondary ">
            <p>
              E BIM FIRMËN <br /> TONDE NË{" "}
              <span className="whitespace-nowrap text-white">Jetë</span>
            </p>
            <p>
              ME{" "}
              <span className="whitespace-nowrap text-white">Kreativitet</span>
            </p>
            <p>
              DHE <span className="whitespace-nowrap text-white">Pasion</span>
            </p>
          </div>
          <p className="text-lg text-left md:text-lg sm:text-xl font-medium text-white">
            Jemi ofrues kryesor i zgjidhjeve për dizajn grafik, printime indoor
            & outdoor <br /> dhe marketing, operojm në rrethinën e Pollogut për
            më shumë se 20 vite
          </p>

          <a
            href="/#na kontakto"
            className="group flex flex-row gap-2 py-2 px-8 bg-secondary border-5 border-secondary font-bold text-primary hover:bg-white hover:text-secondary transition-colors w-auto self-start mt-4"
          >
            ÇOJE NI MESAZH
            <ChevronRight className=" group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 w-full sm:w-[570px] max-w-[570px] h-auto sm:h-[540px]">
          <img
            src={HeroImg}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
