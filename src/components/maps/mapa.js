import React from "react";

const Mapa = () => {
  return (
    <div className="m-4 px-4 mx-0 rounded">
      <div className="relative" style={{ paddingTop: "40%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.178034270183!2d-69.67906032576495!3d18.43022397192961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea57ffe58becf01%3A0x2330a397d4421897!2sAeropuerto%20Internacional%20Las%20Am%C3%A9ricas!5e0!3m2!1ses-419!2sdo!4v1731363590189!5m2!1ses-419!2sdo"
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          title="Mapa de ubicación de GoDrive"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapa;