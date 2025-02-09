import { ChevronRight } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="na kontakto"
      className="flex bg-primary h-full py-10 items-center"
    >
      <div className="container mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Title */}
          <h2 className="text-5xl md:text-5xl lg:text-7xl font-black text-secondary">
            FOLIM?
          </h2>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl font-medium text-white mt-4">
            A ini të interesaum të{" "}
            <span className="whitespace-nowrap text-white">bisedoni</span> ose
            të{" "}
            <span className="whitespace-nowrap text-white">bashkëpunoni</span>?
            <br />
            Ne ina ktau për të ju ndajf. Çoje ni mesazh.
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center">
          <form
            name="wf-form-name"
            method="get"
            className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3"
          >
            {/* Name Fields */}
            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name-2" className="mb-2 font-medium text-white">
                  Emri
                </label>
                <input
                  type="text"
                  id="name-2"
                  className="block w-full h-12 px-4 py-2 border border-solid border-black text-sm text-black focus:outline-none ring-2 ring-secondary"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="name-3" className="mb-2 font-medium text-white">
                  Mbiemri
                </label>
                <input
                  type="text"
                  id="name-3"
                  className="block w-full h-12 px-4 py-2 border border-solid border-black text-sm text-black focus:outline-none ring-2 ring-secondary"
                  placeholder=""
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="mb-2 font-medium text-white">
                Emaili jot
              </label>
              <input
                type="email"
                id="email"
                className="block w-full h-12 px-4 py-2 border border-solid border-black text-sm text-black focus:outline-none ring-2 ring-secondary"
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label htmlFor="message" className="mb-2 font-medium text-white">
                Mesazhi
              </label>
              <textarea
                id="message"
                placeholder=""
                maxLength={5000}
                name="message"
                className="block w-full min-h-36 h-auto px-4 py-2 border border-solid border-black text-sm text-black focus:outline-none ring-2 ring-secondary"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="group flex flex-row gap-2 py-2 px-8 bg-secondary border-5 border-secondary font-bold text-primary hover:bg-white hover:text-secondary transition-colors w-auto self-start mt-4"
              >
                Dërgo Mesazh
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
