import classNames from "classnames/bind";
import styles from "./TitleComponent.module.scss";

const cs = classNames.bind(styles);

function TitleComponent({ children }) {
  return <h2 className={cs("title")}>{children}</h2>;
}

export default TitleComponent;
