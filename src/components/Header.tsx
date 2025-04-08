import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-green-600 text-white shadow-md h-fit pb-4 pt-4 pl-2 pr-2 flex justify-between items-center z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold">Energias Renováveis</h1>
      <h1 className="text-2xl font-bold">Projeto H-TEC</h1>

      {/* Menu */}
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/sobre" className="hover:text-yellow-300 transition">
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/tipos" className="hover:text-yellow-300 transition">
              Tipos
            </Link>
          </li>
          <li>
            <Link to="/impacto" className="hover:text-yellow-300 transition">
              Impacto
            </Link>
          </li>
          <li>
            <Link to="/contato" className="hover:text-yellow-300 transition">
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
