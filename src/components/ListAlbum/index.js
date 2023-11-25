import classNames from "classnames/bind";
import styles from "./ListAlbum.module.scss";
import { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent";
import InfoItem from "../InfoItem";

const cs = classNames.bind(styles);
function ListAlbum(topics, ...props) {
  const [datasTopic, setDatasTopic] = useState([]);
  const [dataNewRelease, setDataNewRelease] = useState([]);
  const typeRender = topics.type;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataNewRelease(topics.dataNew);
        setDatasTopic(topics.dataTopic);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [topics.dataNew, topics.dataTopic]);
  const titleNewRelease = "Mới phát hành >";
  return (
    <div>
      {typeRender === "topic" ? (
        <div className={cs("list-album")}>
          <TitleComponent children={topics.titleTopic.split("_")[0]} />
          <div className={cs("block-album")}>
            {datasTopic.map(
              (tp, index) =>
                index < 5 && (
                  <div key={index} className={cs("item-album")}>
                    <img src={tp.thumbnail} alt="album" />
                    <InfoItem nameItem={tp.title} />
                    {/* <h3>{tp.title}</h3> */}
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className={cs("list-album")}>
          <TitleComponent children={titleNewRelease} />
          <div className={cs("block-album", "new-release")}>
            {dataNewRelease &&
              dataNewRelease.map(
                (tp, index) =>
                  index < 10 && (
                    <div key={index} className={cs("item-album")}>
                      <img src={tp.thumbnail} alt="album" />
                      <InfoItem
                        nameItem={tp.title}
                        artItem={tp.artists.map((art, index) =>
                          index === tp.artists.length - 1
                            ? art.name
                            : art.name + ", "
                        )}
                      />
                      {/* <h3>{tp.title}</h3>

                      <h4>{tp.artists.map((art) => art.name)}</h4> */}
                    </div>
                  )
              )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAlbum;
