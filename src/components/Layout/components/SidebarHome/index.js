import classNames from "classnames/bind";
import styles from "./SidebarHome.module.scss";
import { useState, useEffect } from "react";
import NhacCuatui from "nhaccuatui-api-full";

import ListAlbum from "../../../ListAlbum";
import ListVideo from "../../../ListVideo";

const cs = classNames.bind(styles);

function SidebarHome() {
  const [topicHome, SetTopicHome] = useState([]);
  const [newReleaseHome, SetNewReleaseHome] = useState([]);
  const [videoHome, SetVideoHome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NhacCuatui.getHome();
        SetTopicHome(data.topicEvent);
        SetNewReleaseHome(data.newRelease);
        SetVideoHome(data.video);
        console.log(data);
      } catch (error) {
        console.log("Error fetching data:", error);
        alert("Can not call API");
      }
    };

    fetchData();
  }, []);
  console.log(videoHome);
  return (
    <div className={cs("main-content")}>
      {topicHome.map((toppic, index) => (
        <ListAlbum
          key={index}
          titleTopic={toppic.groupName}
          dataTopic={toppic.listPlaylist}
          type="topic"
        />
      ))}

      <ListAlbum dataNew={newReleaseHome.song} type="new" />
      <ListVideo data={videoHome} />
    </div>
  );
}

export default SidebarHome;
