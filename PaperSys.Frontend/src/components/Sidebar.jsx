import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar({ onReset }) {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <div className="logo">📦 PaperSys</div>
        <nav className="topnav">
          <Link to="/">🏠 Dashboard</Link>
          <Link to="/inventario">📦 Inventario</Link>
          <Link to="/productos">⚙️ Gestionar productos</Link>
          <Link to="/ventas">🛒 Ventas</Link>
          <Link to="/reportes">📊 Reportes</Link>
          <button
            className="reset-button"
            onClick={onReset}
            title="Eliminar todos los datos de la BD"
          >
            🗑️ Limpiar BD
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Sidebar;
