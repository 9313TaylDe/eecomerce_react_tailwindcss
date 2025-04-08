import { useState } from "react";
const LoginPage = () => {
  const [flipped, setFlipped] = useState(false);

  const rotateForm = (e) => {
    e.preventDefault();
    setFlipped(!flipped);
  };

  return (
    <div className="flex h-[95vh] w-[99.9vw] bg-transparent">
      <div className="group flex items-center justify-center [perspective:[700px] w-full border">
        <div
          className={`flex flex-wrap [transform-style:preserve-3d] transition-transform w-[480px] h-[450px] rounded-xl shadow-xl relative duration-700 ${
            flipped ? "[transform:rotateY(180deg)] " : ""
          }`}
        >
          <div
            className="bg-sky-600  flex items-center justify-center  shadow-2xl rounded-xl w-full h-full
           [backface-visibility:hidden] absolute inset-0 p-2"
          >
            <form className="bg-sky-500 shadow-xl p-8 w-full h-fit  rounded-xl flex flex-wrap items-center justify-center">
              <input
                className="w-full h-10 text-black pl-2 rounded-xl mb-2 shadow-xl"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="w-full h-10 text-black pl-2 rounded-xl mb-2 shadow-xl"
                type="text"
                placeholder="Senha"
              />
              <button className="bg-sky-700 w-full rounded-xl hover:bg-sky-600">
                Entrar
              </button>
              <button onClick={rotateForm}>Ver</button>
            </form>
          </div>
          <div className="bg-sky-600 p-2 flex items-center justify-center  shadow-2xl rounded-xl w-full h-full absolute inset-0 [backface-visibility:hidden] text-white [transform:rotateY(180deg)]">
            <form className="bg-sky-500 shadow-xl p-8 w-full h-fit  rounded-xl flex flex-wrap items-center justify-center">
              <input
                className="w-full h-10 shadow-xl rounded-xl mb-2
                  text-black pl-2"
                type="text"
                placeholder="E-mail"
              />
              <input
                className="w-full h-10 shadow-2xl rounded-xl mb-2
                 text-black pl-2"
                type="text"
                placeholder="Senha"
              />
              <button className="rounded-xl bg-sky-700  w-full shadow-xl hover:bg-sky-600">
                Entrar
              </button>
              <button onClick={rotateForm}>Voltar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
