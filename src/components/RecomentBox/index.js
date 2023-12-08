import classNames from "classnames/bind";
import styles from "./RecomentBox.module.scss";

import Button from "../Button";
import images from "../../assets/images";

const cs = classNames.bind(styles);

function RecommentBox() {
  return (
    <div className={cs("wrap-content")}>
      <img src={images.bgRecomment} alt="bg_recomment" />
      <div className={cs("info-content")}>
        <h2>Gợi ý dành cho bạn</h2>
        <p>Thưởng thức những ca khúc phù hợp nhất với bạn</p>
        <Button recommentBtn>
          <span></span>
          Nghe bài hát
        </Button>
      </div>
    </div>
  );
}

export default RecommentBox;
