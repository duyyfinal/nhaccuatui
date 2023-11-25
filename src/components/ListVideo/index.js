import classNames from "classnames/bind";
import styles from "./ListVideo.module.scss";
import { useEffect, useState } from "react";
import TitleComponent from "../TitleComponent";
import InfoItem from "../InfoItem";

const cs = classNames.bind(styles);

function ListVideo(props) {
  const [dataVideo, setDataVideo] = useState([]);
  const typeStyle = "small-mv-hot";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataVideo(props.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.data]);
  return (
    <div className={cs("list-video")}>
      <TitleComponent children="MV HOT >" />
      <div className={cs("block-video")}>
        <div className={cs("block-large-item")}>
          {dataVideo.map(
            (item, index) =>
              index < 2 && (
                <div key={item.key} className={cs("large-item")}>
                  <img src={item.thumbnail} alt={item.title} />
                  <InfoItem
                    typeItem="large-mv-hot"
                    nameItem={item.title}
                    artItem={item.artists.map((art, index) =>
                      index === item.artists.length - 1
                        ? art.name
                        : art.name + ", "
                    )}
                  />
                  <span>{item.duration} </span>
                </div>
              )
          )}
        </div>
        <div className={cs("block-small-item")}>
          {dataVideo.map(
            (item, index) =>
              index >= 2 && (
                <div key={item.key} className={cs("normal-item")}>
                  <img src={item.thumbnail} alt={item.title} />
                  <InfoItem
                    typeItem={typeStyle}
                    nameItem={item.title}
                    artItem={item.artists.map((art, index) =>
                      index === item.artists.length - 1
                        ? art.name
                        : art.name + ", "
                    )}
                  />

                  <span>{item.duration} </span>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default ListVideo;
