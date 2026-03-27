import { locationData } from "@/data/info";
import SectionTitle from "@/components/common/SectionTitle/SectionTitle";

function LocationSection() {
  const { eyebrow, titleLine1, titleLine2, location, reachUs, hours, mapCard } = locationData;

  return (
    <section id="location" className="w-full">
      {/* Header section */}
      <div className="mx-auto w-[92%] max-w-6xl pt-16 pb-10">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.15em] text-evp-accent">
          {eyebrow}
        </p>
        <h2 className="font-title text-5xl md:text-7xl leading-tight text-evp-title">
          {titleLine1}
          <br />
          <span dangerouslySetInnerHTML={{ __html: titleLine2 }} />
        </h2>
      </div>

      {/* Main Content Area */}
      <div className="w-full bg-evp-section">
        <div className="mx-auto flex w-[92%] max-w-6xl flex-col lg:flex-row">
          
          {/* Left Column: Info Details */}
          <div className="flex w-full flex-col justify-center space-y-12 py-16 pr-8 lg:w-5/12">
            
            {/* Location */}
            <div className="border-l-2 border-evp-accent pl-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-evp-body/70">
                {location.title}
              </h3>
              <p className="text-lg text-evp-title">
                {location.addressPart1}
                <br />
                {location.addressPart2}
                <br />
                {location.cityStateZip}
              </p>
            </div>

            {/* Reach Us */}
            <div className="border-l-2 border-evp-accent pl-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-evp-body/70">
                {reachUs.title}
              </h3>
              <p className="text-xl text-evp-title transition-colors hover:text-evp-accent">
                <a href={`mailto:${reachUs.email}`}>{reachUs.email}</a>
              </p>
              <p className="mt-1 text-xl text-evp-title transition-colors hover:text-evp-accent">
                <a href="https://wa.me/18136488496" target="_blank" rel="noopener noreferrer">{reachUs.phone}</a>
              </p>
            </div>

            {/* Studio Hours */}
            <div className="border-l-2 border-evp-accent pl-5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-evp-body/70">
                {hours.title}
              </h3>
              <ul className="flex flex-col space-y-3 text-sm text-evp-title">
                {hours.schedule.map((slot, index) => (
                  <li key={index} className="flex justify-between border-b border-evp-border/30 pb-2 last:border-0 last:pb-0">
                    <span className="font-medium">{slot.day}</span>
                    <span
                      className={`${
                        slot.closed
                          ? "text-evp-accent/60"
                          : slot.highlight
                          ? "italic"
                          : ""
                      }`}
                    >
                      {slot.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>

          {/* Right Column: Map */}
          <div className="relative w-full min-h-[400px] lg:h-auto lg:w-7/12 bg-[#E2DEDC] overflow-hidden">
             {/* Map embedded or simple styling, using iframe for actual functionality is better. */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d622.6351113460817!2d-82.50374537533807!3d28.019705145047713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c16c17655555%3A0x4888f5c12c4eb541!2s7821%20N%20Dale%20Mabry%20Hwy%20Suite%20114%2C%20Tampa%2C%20FL%2033614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sve!4v1774653358894!5m2!1ses-419!2sve" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%', filter: 'grayscale(100%) opacity(0.8) contrast(1.1) brightness(1.1)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            />
              
            {/* Floating Card */}
            <div className="absolute top-auto bottom-8 right-auto left-8 md:bottom-12 md:right-12 md:left-auto md:max-w-xs z-10 w-[85%] max-w-sm bg-white p-4 md:p-6 shadow-xl">
              <h4 className="mb-3 text-[10px] font-bold uppercase tracking-widest text-evp-accent">
                {mapCard.title}
              </h4>
              <p className="mb-5 text-xs md:text-sm leading-relaxed text-evp-body">
                  {mapCard.description}
              </p>
              <a 
                href="https://maps.app.goo.gl/pjJDXN58SyRy6AHh7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-xs font-bold uppercase tracking-[0.15em] text-evp-title transition-colors hover:text-evp-accent"
              >
                {mapCard.linkText}
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Footer-like bottom CTA area block similar to the image */}
      <div className="mx-auto flex w-[92%] max-w-6xl flex-col items-center justify-center py-20 text-center">
        <h3 className="mb-8 font-title text-3xl md:text-5xl text-evp-title">
          Ready to relax and renew?<br />
          Book your moment of <span className="italic text-evp-accent font-normal">wellness.</span>
        </h3>
        <div className="flex rounded-md flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/18136488496" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-md bg-evp-accent hover:bg-evp-accent-deep text-white text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105"
          >
            BOOK VIA WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
