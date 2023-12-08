import classNames from "classnames/bind";
import styles from "./SidebarHome.module.scss";
import { useState, useEffect, Fragment } from "react";

import { ListAlbum, ListVideo, ListSong } from "../../../Home";

const cs = classNames.bind(styles);

function SidebarHome({ datas }) {
  const [topicHome, setTopicHome] = useState([]);
  const [newReleaseHome, setNewReleaseHome] = useState([]);
  const [videoHome, setVideoHome] = useState([]);
  const [songHome, setSongHome] = useState([]);
  const [top100Home, setTop100Home] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await datas;
        setTopicHome(data.topicEvent);
        setNewReleaseHome(data.newRelease);
        setVideoHome(data.video);
        setSongHome(data.song);
        setTop100Home(data.top100);
      } catch (error) {
        console.log("Error fetching data:", error);
        alert("Can not call API");
      }
    };

    fetchData();
  }, [datas]);
  return (
    <div className={cs("main-content")}>
      {topicHome ? (
        <Fragment>
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
          <ListSong data={songHome} />
          <ListAlbum dataTop100={top100Home} type="top100" />
        </Fragment>
      ) : (
        ""
      )}
    </div>
  );
}

export default SidebarHome;
