import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-emerald-700 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <Link
            to="/home"
            className="text-2xl font-bold uppercase hover:text-emerald-300"
          >
            Farmacia Social
          </Link>

          <div className="flex gap-4">
            <Link to="/home" className="hover:text-emerald-500">
              Home
            </Link>
            <Link to="/produto" className="hover:text-emerald-500">
              Produto
            </Link>
            <Link to="/categorias" className="hover:text-emerald-500">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:text-emerald-500">
              Cadastrar Categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
