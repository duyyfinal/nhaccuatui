import classNames from "classnames/bind";
import styles from "./HotTopic.module.scss";

import TitleComponent from "../../TitleComponent";

const cs = classNames.bind(styles);

function HotTopic() {
  return (
    <div className={cs("wrap-hottopic")}>
      <TitleComponent children={"Chủ đề hót >"} />
    </div>
  );
}

export default HotTopic;
