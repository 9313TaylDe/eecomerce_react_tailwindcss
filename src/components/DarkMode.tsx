import { useEffect, useState } from "react";

const DarkMode = () => {
  const [dark, setDark] = useState(false);
  const body = document.getElementById("bodys");

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "black" : "white";
    document.body.style.transition = "all ease-in-out color 0.3s";
  }, [dark]);

  const toggleMode = () => {
    setDark(!dark);
  };
  return (
    <div className="transition-colors ease-in-out duration-500">
      <h2>Modo{dark ? "escuro" : "claro"}</h2>
      <button onClick={() => setDark((prev) => !prev)} className="text-black">
        alternar
      </button>
    </div>
  );
};

export default DarkMode;
