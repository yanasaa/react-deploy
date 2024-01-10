import { Link } from "react-router-dom";
import "./DropdownContent.scss";

const DropdownContent = ({ className }) => {
  return (
    <ul className={`dropdown__content ${className}`}>
      <li>
        <a className="dropdown-item" href="#hero">
          Виды ремесел
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#advantages">
          Преимущества
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#articles">
          Статьи авторов
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#onboarding">
          Как это работает
        </a>
      </li>
      <li>
        <a className="dropdown-item" href="#contact-us">
          Контакты
        </a>
      </li>
      <li>
        <Link className="dropdown-item" href={"about"}>
          О нас
        </Link>
      </li>
    </ul>
  );
};

export default DropdownContent;
