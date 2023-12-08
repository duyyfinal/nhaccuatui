import classNames from "classnames/bind";
import styles from "./MenuSong.module.scss";
import { useState, useEffect, Fragment } from "react";

import TitleComponent from "../../TitleComponent";
import InfoItem from "../../InfoItem";

const cs = classNames.bind(styles);

const optionBXH = ["Việt Nam", "Âu Mỹ", "Hàn Quốc"];

function MenuSong(props) {
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

  const checkIndex = (index) => {
    switch (index) {
      case 0:
        return "first-item";
      case 1:
        return "second-item";
      case 2:
        return "third-item";
      default:
        return "";
    }
  };

  return (
    <div className={cs("wrap-menusong")}>
      <TitleComponent children={"BXH Bài Hát"} />
      <div className={cs("option-bxhsong")}>
        {optionBXH.map((option, index) => (
          <Fragment key={index}>
            <button>{option}</button>
            {index < 2 && <span></span>}
          </Fragment>
        ))}
      </div>
      <div className={cs("content-bxhsong")}>
        {dataSong &&
          dataSong.map(
            (item, index) =>
              index < 10 && (
                <div
                  key={index}
                  className={cs("item-bxhsong", checkIndex(index))}
                >
                  {index === 0 ? (
                    <div className={cs("specific-item")}>
                      <img src={item.thumbnail} alt={item.title} />
                      <span>{index + 1}</span>
                    </div>
                  ) : (
                    <span>{index + 1}</span>
                  )}

                  <div className={cs("info-item-bxhsong")}>
                    <InfoItem
                      nameItem={item.title}
                      artItem={item.artists.map((art, index) =>
                        index === item.artists.length - 1
                          ? art.name
                          : art.name + ", "
                      )}
                    />
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default MenuSong;
