import classNames from "classnames/bind";
import styles from "./ListAlbum.module.scss";
import { useEffect, useState } from "react";
import { Fragment } from "react";

import TitleComponent from "../../TitleComponent";
import InfoItem from "../../InfoItem";

const cs = classNames.bind(styles);
function ListAlbum(topics, ...props) {
  const [datasTopic, setDatasTopic] = useState([]);
  const [dataNewRelease, setDataNewRelease] = useState([]);
  const [datasTop100, setDataTop100] = useState([]);
  const typeRender = topics.type;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataNewRelease(topics.dataNew);
        setDatasTopic(topics.dataTopic);
        setDataTop100(topics.dataTop100);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [topics.dataNew, topics.dataTopic, topics.dataTop100]);
  const titleNewRelease = "Mới phát hành >";

  const handleRender = () => {
    switch (typeRender) {
      case "topic":
        return (
          <div className={cs("list-album")}>
            <TitleComponent children={topics.titleTopic.split("_")[0]} />
            <div className={cs("block-album")}>
              {datasTopic.map(
                (tp, index) =>
                  index < 5 && (
                    <div key={index} className={cs("item-album")}>
                      <img src={tp.thumbnail} alt="album" />
                      <InfoItem nameItem={tp.title} />
                    </div>
                  )
              )}
            </div>
          </div>
        );

      case "new":
        return (
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
                      </div>
                    )
                )}
            </div>
          </div>
        );

      case "top100":
        return (
          <div className={cs("list-album")}>
            <TitleComponent children={"Top 100 >"} />
            <div className={cs("block-album")}>
              {datasTop100.map(
                (tp, index) =>
                  index < 5 && (
                    <div key={index} className={cs("item-album")}>
                      <img src={tp.thumbnail} alt="album" />
                    </div>
                  )
              )}
            </div>
          </div>
        );

      default:
        break;
    }
  };

  return <Fragment>{handleRender()}</Fragment>;
}

export default ListAlbum;
