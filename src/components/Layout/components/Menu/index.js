import classNames from "classnames/bind";
import styles from "./Menu.module.scss";


const cs = classNames.bind(styles);

// const handleRenderMenu = () => {
    
//     fetch("http://localhost:8000/Category")
//         .then((res)=>res.json())
//         .then((res)=>{
//             console.log(res);
//         })
// }


function Menu() {
    return <div className={cs('menu-lv1')}>
        <div className={cs('menu-lv1-col')}>
            <h4 className={cs('menu-lv1-title')}>
                VIỆT NAM
            </h4>
            <div className={cs('menu-lv1-item')}>
                Nhạc Trẻ
            </div>
            <div className={cs('menu-lv1-item')}>
                Trữ Tình 
            </div>
            <div className={cs('menu-lv1-item')}>
                Rock Việt
            </div>
            <div className={cs('menu-lv1-item')}>
                Rap Việt
            </div>
        </div>
        <div className={cs('menu-lv1-col')}>
            <h4 className={cs('menu-lv1-title')}>
            ÂU MỸ
            </h4>
            <div className={cs('menu-lv1-item')}>
                Pop
            </div>
            <div className={cs('menu-lv1-item')}>
                Rock 
            </div>
            <div className={cs('menu-lv1-item')}>
                Country
            </div>
            <div className={cs('menu-lv1-item')}>
                Latin
            </div>
        </div>

    </div>;
}

export default Menu;