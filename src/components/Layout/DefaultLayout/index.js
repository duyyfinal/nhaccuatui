import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from './DefaultLayout.module.scss';
import classNames from "classnames/bind";

const cs = classNames.bind(styles)

function DefaultLayout({children}) {
    return (
        <div className={cs('wrapper')}>
             <Header />
             <div className={cs('container')}>
                <Sidebar />
                <div className={cs('content')}>
                    {children}
                </div>
             </div>
        </div>
    );
}

export default DefaultLayout;