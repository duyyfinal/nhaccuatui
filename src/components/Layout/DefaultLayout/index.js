import Header from "../components/Header";
import SidebarHome from "../components/SidebarHome";
import { Carousel } from "../../Home/";
import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Footer from "../components/Footer";
import SidebarRight from "../components/SidebarRight";

const cs = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cs("wrapper")}>
      <Header />
      <div className={cs("container")}>
        <Carousel />

        <div className={cs("content")}>
          <div className={cs("box-left")}>
            <SidebarHome />
          </div>
          <div className={cs("box-right")}>
            <SidebarRight />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
