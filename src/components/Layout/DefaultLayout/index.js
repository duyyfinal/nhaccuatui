import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Carousel from "../../Carousel";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cs('wrapper')}>
             <Header />
             <div className={cs('container')}>
                <Carousel />
                <Sidebar />
                <div className={cs('content')}>
                    {children}
                </div>
             </div>
        </div>
    );
}

export default DefaultLayout;