import React from 'react';

function RecoverySection() {
  return (
    <section id="recovery" className="w-full font-body">
      {/* Top Split Area */}
      <div className="flex flex-col lg:flex-row w-full bg-[#fcfaf7]">
        
        {/* Top Left Text Area */}
        <div className="w-full lg:w-1/2 px-8 py-20 md:p-24 lg:p-32 flex flex-col justify-center">
          <p className="text-[10px] md:text-[11px] font-bold tracking-[0.18em] uppercase text-evp-accent mb-6 md:mb-10">
            POST-OPERATIVE PROTOCOL V.04
          </p>
          
          <h2 className="font-title text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] text-[#1a1c21] mb-10 md:mb-14 font-light tracking-tight">
            Post-<br/>Surgical <br/>
            Recovery <br/>
            Protocol
          </h2>
          
          <p className="text-sm md:text-[15px] leading-relaxed text-evp-body/70 max-w-sm mb-16 md:mb-24">
            Advanced clinical care designed for your critical recovery window. We prioritize cellular integrity and guided tissue regeneration through specialized techniques.
          </p>
          
          <div className="flex w-full gap-16 md:gap-24 uppercase tracking-[0.12em] text-[9px] md:text-[10px] font-bold text-evp-title/80">
            <div>
              <p className="text-evp-body/40 mb-2">FOCUS</p>
              <p className="text-[#1a1c21]">LYMPHATIC DRAINAGE</p>
            </div>
            <div>
              <p className="text-evp-body/40 mb-2">DURATION</p>
              <p className="text-[#1a1c21]">10 - 15 SESSIONS</p>
            </div>
          </div>
        </div>
        
        {/* Top Right Image Area */}
        <div className="w-full lg:w-1/2 h-[380px] md:h-[420px] lg:h-auto overflow-hidden">
          <img 
            src="/images/services/services_deep.webp" 
            alt="Skin treatment detail highlighting careful touch and recovery" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Bottom Area */}
      <div className="w-full bg-[#f6f3ee]">
        <div className="max-w-[1400px] mx-auto px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 lg:gap-20 items-start">
            
            {/* Col 1 */}
            <div className="flex flex-col lg:pl-16">
              <div className="text-[#8e3822] mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  {/* Decorative four parts cross icon somewhat resembling the image (clover shape) */}
                  <path d="M12 4c-2.3 0-3.5 1.7-3.5 3.5C8.5 9 10 10.5 12 12c-2 1.5-3.5 3-3.5 4.5C8.5 18.3 9.7 20 12 20s3.5-1.7 3.5-3.5c0-1.5-1.5-3-3.5-4.5 2-1.5 3.5-3 3.5-4.5C15.5 5.7 14.3 4 12 4z" />
                </svg>
              </div>
              <h3 className="font-title text-2xl lg:text-[28px] text-[#1a1c21] mb-5 font-normal">
                Recovery Protocol
              </h3>
              <p className="text-sm md:text-[13px] leading-relaxed text-evp-body/70 mb-8 max-w-sm">
                Systematic techniques to eliminate retained fluids, supporting rapid inflammatory resolution and safer healing.
              </p>
              <a href="#contact" className="text-[9px] font-bold uppercase tracking-[0.15em] text-evp-body/50 hover:text-evp-accent transition-colors flex items-center gap-2">
                SPECIFICATIONS <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>

            {/* Col 2 */}
            <div className="flex flex-col lg:pl-8">
              <div className="text-[#8e3822] mb-6">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="font-title text-2xl lg:text-[28px] text-[#1a1c21] mb-5 font-normal">
                Monitoring
              </h3>
              <p className="text-sm md:text-[13px] leading-relaxed text-evp-body/70 mb-8 max-w-[17rem]">
                Continuous assessment of your healing progress to adapt the techniques and ensure the best possible aesthetic outcome.
              </p>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-evp-body/40">
                REAL-TIME ANALYSIS &middot; PERSONALIZED OVERSIGHT
              </p>
            </div>

            {/* Col 3: Card */}
            <div className="flex flex-col items-start justify-center h-full">
              <div className="bg-[#fcfcfc] p-10 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] w-full max-w-[18rem] border border-gray-100/50">
                <p className="font-title text-5xl lg:text-[4rem] text-[#8e3822] mb-5 leading-none font-medium tracking-tight">
                  98.4<span className="text-4xl lg:text-5xl">%</span>
                </p>
                <p className="text-[8px] lg:text-[9px] font-bold uppercase tracking-[0.15em] text-evp-body/40 max-w-[150px] leading-loose">
                  SUCCESS RATE IN<br/>REDUCED RECOVERY
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default RecoverySection;
