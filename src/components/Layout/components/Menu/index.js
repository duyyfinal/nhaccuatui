import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { useState, useEffect } from "react";


const cs = classNames.bind(styles);


function Menu(typeM, ...attrs) {
    const [itemMenu, setItemMenu] = useState([])
    // console.log(typeM.typeMenu);

    useEffect(()=>{
        if(typeM.typeMenu !== ""){
            fetch(`http://localhost:3001/Playlist`)
            .then(res => res.json())
            .then(itemMenu => {
                setItemMenu(itemMenu)
            })
        }     
    },[typeM.typeMenu])
    
    console.log(itemMenu)
    return <div className={cs('menu-lv1')}>
        {
            
                itemMenu.map((itemM)=>(
                    <div key={itemM.idM} className={cs('menu-lv1-col')}>
                        <h4 className={cs('menu-lv1-title')}>
                        {
                            itemM.titleM
                        }
                        </h4>
                        {
                            // itemM.datasM.includes({
                            //     id:1,
                            //     description: "Nhạc trẻ mới nhất",
                            //     country: "Việt Nam",
                            //     title: "Nhạc trẻ"
                            // }) ? "thanhduy" : "duy"
                            itemM.datasM.map((itemm)=>(
                                <p key={itemm.id} className={cs('menu-lv1-item')}>
                                    {itemm.title}
                                </p>
                            ))
                        }
                        
                    </div>
                ))
            
        }
                

    </div>;
}

export default Menu;