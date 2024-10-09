import React from 'react';

const Features = () => {
  return (
    <div className=" border rounded bg-blue-100 m-4 px-4 py-8">
      <h2 className="text-center text-2xl font-bold mb-6">
        ¿Por qué usar forma de pago Online?
      </h2>

      <div className="grid grid-cols-3 gap-6 text-center">
        {/* Primer ítem */}
        <div className="flex flex-col items-center">
          <img src="/public/assets/carsImgenes/Escudo.png" alt="Seguridad" className="w-12 h-12 mb-2"/>
          <h3 className="text-blue-600 font-bold">SEGURIDAD</h3>
          <p>Sus datos financieros no se comparten con el vendedor.</p>
        </div>

        {/* Segundo ítem */}
        <div className="flex flex-col items-center">
          <img src="/public/assets/carsImgenes/Portada.webp" alt="Protección" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">PROTECCIÓN</h3>
          <p>Sus pagos están protegidos por el programa de protección del comprador.</p>
        </div>

        {/* Tercer ítem */}
        <div className="flex flex-col items-center">
          <img src="ruta-del-icono-3" alt="Rapidez" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">RAPIDEZ</h3>
          <p>Recibimos y verificamos su pago instantáneamente.</p>
        </div>

        {/* Cuarto ítem */}
        <div className="flex flex-col items-center">
          <img src="ruta-del-icono-4" alt="Flexibilidad" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">FLEXIBILIDAD</h3>
          <p>Usted elige cómo pagar: tarjeta, cuenta bancaria o saldo de Paypal.</p>
        </div>

        {/* Quinto ítem */}
        <div className="flex flex-col items-center">
          <img src="ruta-del-icono-5" alt="Comodidad" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">COMODIDAD</h3>
          <p>Pague en 2 clics. No tendrá que introducir sus datos en cada compra.</p>
        </div>

        {/* Sexto ítem */}
        <div className="flex flex-col items-center">
          <img src="ruta-del-icono-6" alt="Multimonedas" className="w-12 h-12 mb-2" />
          <h3 className="text-blue-600 font-bold">MULTIMONEDAS</h3>
          <p>Paypal acepta más de 24 monedas de circulación mundial.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;