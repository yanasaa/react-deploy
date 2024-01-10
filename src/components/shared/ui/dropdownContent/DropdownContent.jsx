import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import './DropdownContent.scss'

const DropdownContent = ({ className }) => {
  return (
    <ul className={`dropdown__content ${className}`}>
      <li>
        <HashLink className="dropdown-item" to={".#hero"}>
          Виды ремесел
        </HashLink>
      </li>
      <li>
        <HashLink className="dropdown-item" to={".#advantages"}>
          Преимущества
        </HashLink>
      </li>
      <li>
        <HashLink className="dropdown-item" to={".#articles"}>
          Статьи авторов
        </HashLink>
      </li>
      <li>
        <HashLink className="dropdown-item" to={".#onboarding"}>
          Как это работает
        </HashLink>
      </li>
      <li>
        <HashLink className="dropdown-item" to={".#contact-us"}>
          Контакты
        </HashLink>
      </li>
      <li>
        <Link className="dropdown-item" to={"about"}>
          О нас
        </Link>
      </li>
    </ul>
  );
};

export default DropdownContent;
