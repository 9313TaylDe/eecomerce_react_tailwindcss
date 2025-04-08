import "primeicons/primeicons.css";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white text-center p-2 pt-3 pb-3 w-full">
      <div className="container mx-auto ">
        <p className="text-lg font-semibold">Energia Renovável © 2024</p>
        <p className="text-sm">
          Promovendo um futuro sustentável com fontes de energia limpa.
        </p>

        {/* Links para redes sociais */}
        <div className="flex justify-center text-xl space-x-6 ">
          <a
            href="#"
            className="pi pi-facebook hover:text-blue-400 transition"
          ></a>
          <a
            href="#"
            className="pi pi-instagram hover:text-pink-300 transition"
          ></a>
          <a href="#" className="pi pi-twitter hover:text-black transition"></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
