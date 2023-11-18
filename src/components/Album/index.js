import classNames from "classnames/bind";
import styles from "./Album.module.scss";

const cs = classNames.bind(styles);
function Album(titleToppic, dataTopic) {
  return (
    <div className={cs("list-album")}>
      <h2 className={cs("title-album")}>{titleToppic}</h2>
      <div className={cs("block-album")}>
        <div className={cs("item-album")}>
          <img src="sda" alt="album" />
          <h3>Remix không thể thiếu</h3>
        </div>
      </div>
    </div>
  );
}

export default Album;
