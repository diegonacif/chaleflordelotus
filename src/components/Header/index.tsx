import { Link, useLocation, useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { ArrowCircleLeft, House, Info } from "@phosphor-icons/react";

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function previousLocation() {
    navigate(-1);
  }

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
          ) : (
            <div className="previous-btn" onClick={() => previousLocation()}>
              <ArrowCircleLeft size={28} />
            </div>
          )
        }
      </div>

    </HeaderContainer>
  )
}