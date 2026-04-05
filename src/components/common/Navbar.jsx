import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className = "bg-background dark:bg-darkBg shadow-md px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-primary dark:text-darkText font-bold text-[20px]">
        Gbogbolowo
      </h1>

      {/* Links */}
      <div className="flex items-center gap-6 text-muted dark:text-darkText">
        <Link to="/" className="hover:text-accent">Home</Link>
        <Link to="/cart" className="hover:text-accent">Cart</Link>
        <Link to="/login" className="hover:text-accent">Login</Link>
        <Link to="/settings" className="hover:text-accent">Settings</Link>
      </div>

    </nav>
  );
}
