import classNames from "classnames/bind";
import styles from "./SidebarHome.module.scss";
import { useState, useEffect } from "react";
import NhacCuatui from "nhaccuatui-api-full";
import ListAlbum from "../../../ListAlbum";

const cs = classNames.bind(styles);

function SidebarHome() {
  const [topicHome, SetTopicHome] = useState([]);
  const [newReleaseHome, SetNewReleaseHome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NhacCuatui.getHome();
        SetTopicHome(data.topicEvent);
        SetNewReleaseHome(data.newRelease);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(newReleaseHome.song);

  return (
    <div className={cs("main-content")}>
      {console.log("render sidebar")}
      {topicHome.map((toppic, index) => (
        <ListAlbum
          key={index}
          titleTopic={toppic.groupName}
          dataTopic={toppic.listPlaylist}
          type="topic"
        />
      ))}

      <ListAlbum
        key={"new"}
        titleTopic=""
        dataTopic={[]}
        dataNew={newReleaseHome.song}
        type="new"
      />
    </div>
  );
}

export default SidebarHome;
