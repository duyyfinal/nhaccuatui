import classNames from "classnames/bind";
import styles from "./SidebarRight.module.scss";
import { useState, useEffect } from "react";
import NhacCuaTui from "nhaccuatui-api-full";

import { MenuSong } from "../../../Home";
import RecommentBox from "../../../RecomentBox";
import HotTopic from "../../../Home/HotTopic";

const cs = classNames.bind(styles);
// const getWeek = (target) => {
//   var dayNr = (target.getDay() + 6) % 7;
//   var firstThursday = target.valueOf();
//   target.setDate(target.getDate() - dayNr + 3);
//   target.setMonth(0, 1);
//   if (target.getDay() !== 4) {
//     target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
//   }
//   return 1 + Math.ceil((firstThursday - target) / 604800000); // 604800000 = 7 * 24 * 3600 * 1000
// };
// var today = new Date();
// var newDate = new Date(
//   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
// );

function SidebarRight() {
  const [chartHome, setChartHome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NhacCuaTui.getChart({
          category: "nhac-viet",
          time: {
            week: 8,
            year: 2023,
          },
        });
        console.log("chart data: " + data.ranking);
        setChartHome(data.ranking);
      } catch (error) {
        console.log("Error fetching data:", error);
        alert("Can not call API");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cs("wrap-sidebar-right")}>
      <MenuSong data={chartHome.song} />
      <RecommentBox />
      <HotTopic />
    </div>
  );
}

export default SidebarRight;
