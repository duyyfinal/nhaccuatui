import classNames from "classnames/bind";
import styles from "./MenuSong.module.scss";
import TitleComponent from "../../TitleComponent";

const cs = classNames.bind(styles);

const optionBXH = ["Việt Nam", "Âu Mỹ", "Hàn Quốc"];

function MenuSong() {
  return (
    <div className={cs("wrap-menusong")}>
      <TitleComponent children={"BXH Bài Hát"} />
      <div className={cs("option-bxhsong")}>
        {optionBXH.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
      <div className={cs("content-bxhsong")}>
        {optionBXH.map((option, index) => (
          <button key={index}>{option}</button>
        ))}
      </div>
    </div>
  );
}

export default MenuSong;
