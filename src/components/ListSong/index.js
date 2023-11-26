import classNames from "classnames/bind";
import styles from "./SidebarHome.module.scss";
import TitleComponent from "../TitleComponent";

const cs = classNames.bind(styles);

function ListSong() {
  return (
    <div>
      <TitleComponent />
    </div>
  );
}

export default ListSong;
