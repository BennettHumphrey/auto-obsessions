import React from "react";

const Contact = () => {
  return (
    <div className="bg-white pt-10 pb-8">
      <div className="h-px w-4/5 bg-[#BBB] mx-auto mb-10" />
      <div className="flex flex-col justify-center gap-3 px-4">
        <h3 className="text-6xl text-center">HOURS</h3>
        <h5 className="text-center text-2xl">Monday - Friday</h5>
        <h6 className="text-center text-lg">9:00 - 5:00 PM</h6>
        <p className="text-center">We currently have no office staff, so we typically respond within a week</p>
      </div>
      <div className="h-px w-4/5 bg-[#BBB] my-10 mx-auto" />
      <div className="flex flex-col justify-center gap-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2646.431829597437!2d-123.37679952390397!3d48.44824352948266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f7367c322a7eb%3A0x9c59f01ee1170303!2sAuto%20Obsessions%20Customs%20Inc!5e0!3m2!1sen!2spe!4v1763184043386!5m2!1sen!2spe"
          width="600"
          height="450"
          title="Embedded Google Maps with company location"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale h-[30vw] w-[80vw] m-auto"
        />
        <h3 className="mt-5 text-center text-4xl">BURNSIDE</h3>
        <h5 className="text-center text-xl">630 Dupplin Rd</h5>
        <h6 className="text-center">Victoria, BC V8Z 1C1</h6>
        <h6 className="text-center text-lg">(250)-590-1822</h6>
        <h6 className="text-center">AutoObsessions@Outlook.com</h6>
      </div>
    </div>
  );
};

export default Contact;
