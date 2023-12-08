import { useState, useEffect } from "react";
import NhacCuatui from "nhaccuatui-api-full";

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../components/Header";
import SidebarHome from "../components/SidebarHome";
import { Carousel } from "../../Home/";
import Footer from "../components/Footer";
import SidebarRight from "../components/SidebarRight";

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
  const [dataHome, setDataHome] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await NhacCuatui.getHome();
        setDataHome(data);
        console.log("default data: " + data);
      } catch (error) {
        console.log("Error fetching data:", error);
        alert("Error call API");
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cs("wrapper")}>
      <Header />
      <div className={cs("container")}>
        <Carousel />

        <div className={cs("content")}>
          <div className={cs("box-left")}>
            <SidebarHome datas={dataHome} />
          </div>
          <div className={cs("box-right")}>
            <SidebarRight datas={dataHome} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
