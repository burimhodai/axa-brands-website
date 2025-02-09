export const AboutUs = () => {
  return (
    <section
      id="rreth nesh"
      className="bg-secondary h-210 py-10 sm:py-8 flex justify-center items-center"
    >
      <div className="flex flex-col sm:flex-row sm:container justify-center items-center mx-auto gap-8 sm:gap-16 px-4">
        {/* Content */}
        <div className="flex flex-col gap-6 md:w-3/5 text-left">
          <h2 className="text-5xl sm:text-5xl font-black text-primary xl:text-7xl 2xl:text-8xl">
            Kush ina ne?
          </h2>
          <p className="text-base sm:text-lg font-medium text-white">
            Kompania jonë është një ofrues kryesor i zgjidhjeve për dizajn
            grafik, printime indoor & outdoor dhe marketing, që operon në
            rrethinën e Pollogut për më shumë se 20 vite. Ne ofrojmë shërbime
            dhe produkte inovative për klientët tanë në sektorë të ndryshëm.
          </p>
          <p className="text-base sm:text-lg font-medium text-white">
            Ekipi ynë është i përkushtuar për të ofruar zgjidhje të
            personalizuara që plotësojnë nevojat e klientëve tanë, duke përdorur
            teknologjinë dhe teknikat më të fundit për rezultate të
            jashtëzakonshme.
          </p>
          <p className="text-base sm:text-lg font-medium text-white">
            Ne ofrojmë besueshmëri në kreativitet dhe inovacion, duke siguruar
            cilësi të lartë dhe kohë të shkurtër për realizimin e projekteve.
            Jemi krenarë që kemi shërbyer klientët tanë për më shumë se dy
            dekada dhe vazhdojmë të bëjmë të njëjtën gjë edhe në të ardhmen.
          </p>
        </div>

        {/* Map iframe */}
        <div className="flex-shrink-0 w-full sm:w-[570px] max-w-full h-auto sm:h-[540px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2164.096391963461!2d21.06514437708764!3d41.98800705480065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353f7bef634b731%3A0x87da05b7914437a8!2sR2242%201217!5e0!3m2!1sen!2smk!4v1739069783827!5m2!1sen!2smk&zoom=14&maptype=roadmap&disableUI=true"
            width="600"
            height="450"
            style={{ border: "0" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
