import classNames from "classnames/bind";
import styles from "./ListAlbum.module.scss";
import { useEffect, useState } from "react";

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
        console.log(topics.dataTopic);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [topics.dataNew, topics.dataTopic]);
  console.log(dataNewRelease);
  const titleNewRelease = "Mới phát hành >";
  return (
    <div>
      {console.log("render Album")}
      {typeRender === "topic" ? (
        <div className={cs("list-album")}>
          <h2 className={cs("title-album")}>
            {topics.titleTopic.split("_")[0]}
          </h2>
          <div className={cs("block-album")}>
            {datasTopic.map(
              (tp, index) =>
                index < 5 && (
                  <div key={index} className={cs("item-album")}>
                    <img src={tp.thumbnail} alt="album" />
                    <h3>{tp.title}</h3>
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <div className={cs("list-album", "new-release")}>
          <h2 className={cs("title-album")}>{titleNewRelease}</h2>
          <div className={cs("block-album")}>
            {/* {dataNewRelease.map((tp, index) => (
            <div key={index} className={cs("item-album")}>
              <img src={tp.thumbnail} alt="album" />
              <h3>{tp.title}</h3>

              <h4>{tp.artists.map((art) => art.name)}</h4>
            </div>
          ))} */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListAlbum;
