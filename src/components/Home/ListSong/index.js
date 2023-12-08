import classNames from "classnames/bind";
import styles from "./ListSong.module.scss";
import { useState, useEffect } from "react";

import TitleComponent from "../../TitleComponent";
import InfoItem from "../../InfoItem";

const cs = classNames.bind(styles);

function ListSong(props) {
  const [dataSong, setDataSong] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDataSong(props.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [props.data]);

  return (
    <div className={cs("list-song")}>
      <TitleComponent children="Bài Hát >" />
      <div className={cs("block-song")}>
        {dataSong.map((item, index) => (
          <div key={item.key} className={cs("item-song")}>
            <div className={cs("info-song")}>
              <img src={item.thumbnail} alt={item.title} />
              <div className={cs("wrap-info-song")}>
                <InfoItem
                  typeItem={"list-song-home"}
                  nameItem={item.title}
                  artItem={item.artists.map((art, index) =>
                    index === item.artists.length - 1
                      ? art.name
                      : art.name + ", "
                  )}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListSong;
