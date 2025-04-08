import { useEffect, useState } from "react";
import { categoriasMapeadas } from "./Lista_Productos";
import { ListaProdutos } from "./Lista_Productos";
import { AllCards } from "./Lista_Productos";
import { CardProduto } from "./Lista_Productos";

export const ListaProdutosFiltrados = ({ categorias }) => {
  return (
    <div>
      {ListaProdutos.filter(
        (categoriasProdutos) => categoriasProdutos.categoria === categorias
      )
        .flatMap((produtos) => produtos.subprodutos)
        .map((subproduto) => (
          <CardProduto key={subproduto.id} produto={subproduto} />
        ))}
    </div>
  );
};

export const ProdutosFiltrados = () => {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    document.body.style.backgroundColor = dark ? "#050505" : "#505050s";
  };

  const agora = new Date();

  const horas = agora.getHours();
  const minutos = agora.getMinutes();
  const segundos = agora.getSeconds();

  useEffect(() => {
    if (horas <= 15 && minutos >= 47) {
      document.body.style.backgroundColor = "#050505";
    } else if (horas >= 16 && minutos >= 7) {
      document.body.style.backgroundColor = "#fff";
    }
  }, [setDark]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

  const [categoriasPesquisadas, setCategoriasPesquisadas] = useState("");
  const [sugestions, setSugestions] = useState([]);
  const [closeBar, setCloseBar] = useState(false);
  const categoriasDisponiveis = Object.keys(categoriasMapeadas);
  const categorias =
    categoriasMapeadas[categoriasPesquisadas.toLowerCase().trim()] || "";

  useEffect(() => {
    if (categoriasPesquisadas.toLowerCase().trim() === "") {
      setSugestions([]);
      setCloseBar(false);
    } else {
      const term = categoriasPesquisadas.toLowerCase().trim();
      const filtr = categoriasDisponiveis.filter((categoriasProdutos) =>
        categoriasProdutos.toLowerCase().includes(term)
      );
      setSugestions(filtr);
      setCloseBar(true);
    }
  }, [categoriasPesquisadas]);

  useEffect(() => {
    if (!closeBar) {
      setSugestions([]);
    }
  }, [closeBar]);

  return (
    <div id="overlay_pai" className="w-full ">
      <div className="w-full flex flex-wrap">
        <input
          type="text"
          value={categoriasPesquisadas}
          onChange={(e) => setCategoriasPesquisadas(e.target.value)}
          className="bg-dark-gray-2 w-[50%] pl-1"
          placeholder="Buscar produtos"
        />
        <div className="relative flex w-[100%]">
          {sugestions.length > 0 && closeBar && (
            <ul
              onClick={() => setCloseBar(false)}
              className="flex flex-col absolute rounded-b-lg p-1 w-[50%] z-10 shadow-md  bg-dark-gray-2 "
            >
              {sugestions.map((sugestoes, index) => (
                <li
                  className=" pl-1 rounded-lg
                   cursor-pointer hover:bg-gray-500 hover:text-black"
                  key={index}
                  onClick={(e) => {
                    // setCloseBar(false);
                    e.preventDefault();
                    setCategoriasPesquisadas(sugestoes);
                    setCategoriasPesquisadas(categoriasPesquisadas);
                    setSugestions([]);
                    setCategoriaSelecionada(sugestoes);
                    setCategoriasPesquisadas("");
                  }}
                >
                  {sugestoes}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {categoriaSelecionada === "" ? (
        <AllCards />
      ) : (
        ListaProdutos.filter(
          (categoriasProdutos) =>
            categoriasProdutos.categoria === categoriaSelecionada
        )
          .flatMap((produto) => produto.subprodutos)
          .map((subproduto) => (
            <div
              className="border p-2 flex max-w-[39%] max-h-[70%] h-[143px] mix-blend-multiply bg-transparent"
              key={subproduto.id}
            >
              <img
                src={subproduto.image}
                alt=""
                className="w-[90%] bg-transparent"
              />
              <div className="w-[80%]  border">
                <h3>{subproduto.title}</h3>
                <p>{subproduto.price.toFixed(2)}</p>
              </div>
            </div>
          ))
      )}
    </div>
  );
};
