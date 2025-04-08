import { useState } from "react";
import { ProdutosFiltrados } from "../listas/ListaPesquisadas";
import Header from "../components/Header";
import Footer from "./Footer";
import { ListaProdutos } from "../listas/Lista_Productos";
const HomePage = () => {
  const [categoriapesquisada, setCategoriaPesquisada] = useState("");
  const [openLan, setOpenLang] = useState(false);
  const [language, setLanguage] = useState("Português");

  const OpenLanguage = () => {
    setOpenLang(!openLan);
  };

  const closeLanguage = () => {
    setOpenLang(false);
  };
  const pesquisa = ListaProdutos.find(
    (produto) => produto.categoria.toLowerCase() === categoriapesquisada
  );

  return (
    <div className=" gap-2 text-slate-500  flex flex-col items-center justify-center w-[100%]">
      <Header />
      <div className="flex justify-between gap-2 min-w-[100%]">
        <section className="bg-slate-900 flex items-center justify-center w-[33%] rounded-2xl  max-h-[499px] text-black">
          <nav className="bg-sky-700 p-4 rounded-2xl shadow-md  w-full h-full">
            <h2 className="text-2xl font-bold text-white mb-4 border-b pb-2">
              Disciplinas
            </h2>
            <ul className="space-y-2 text-base font-medium text-gray-800">
              {[
                "Transição Energética",
                "Eletricidade básica",
                "Energia Solar Fotovoltalica",
                "Energia Eólica",
                "Hidrogênio Verde",
                "Supervisão de Sistemas de Geração de Eenergias Renováveis",
              ].map((disciplinas, index) => (
                <li
                  key={index}
                  className="w-ful px-3 py-2 rounded-md hover:bg-sky-600 hover:text-white transition-all cursor-pointer"
                >
                  {disciplinas}
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section
          className=" bg-opacity-60 flex-wrap flex gap-2 justify-between 
  w-full min-h-[498.9px] max-h-[499px] p-2 overflow-y-auto rounded-lg shadow-lg custom-scrollbar"
        >
          <ProdutosFiltrados />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
