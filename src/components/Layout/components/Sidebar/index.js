import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";
import NhacCuatui from "nhaccuatui-api-full";
import Album from "../../../Album";

const cs = classNames.bind(styles);

function Sidebar() {
  const [dataHome, SetDataHome] = useState([]);

  useEffect(() => {
    NhacCuatui.getHome().then((data) => SetDataHome(data));
  }, []);
  const topics = dataHome.topicEvent;

  console.log(topics);
  return (
    <div className={cs("main-content")}>
      {topics.map((toppic, index) => (
        <Album
          key={index}
          titleToppic={toppic.groupName}
          dataTopic={toppic.listPlaylist}
        />
      ))}
    </div>
  );
}

export default Sidebar;
