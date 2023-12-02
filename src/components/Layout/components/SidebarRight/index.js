import classNames from "classnames/bind";
import styles from "./SidebarRight.module.scss";
import { MenuSong } from "../../../Home";

const cs = classNames.bind(styles);

function SidebarRight() {
  return (
    <div className={cs("wrap-sidebar-right")}>
      <MenuSong />
    </div>
  );
}

export default SidebarRight;
