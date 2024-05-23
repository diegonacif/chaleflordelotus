import { Link, useLocation } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { House, Info } from "@phosphor-icons/react";

export function Header() {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Link to="/">
        <h2>Chale Flor de Lotus</h2>
      </Link>
      <div className="nav-btn">
        {
          location.pathname === "/" ? (
            <Link to="/taxes">
              <Info size={26} />
            </Link>
          ) : location.pathname === "/taxes" ? (
            <Link to="/">
              <House size={26} />
            </Link>
          ) : null
        }
      </div>

    </HeaderContainer>
  )
}