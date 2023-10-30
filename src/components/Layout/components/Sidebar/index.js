import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";

const cs = classNames.bind(styles);

var myDog = {
    'name': 'Ngáo',
    'legs': 4,
    'friends':['everything!']
}
    myDog.Color = "Brown"
 delete myDog.friends

 console.log(myDog);

function Sidebar() {

    return <div className={cs('f-info')}>
        
        
    </div>;
}

export default Sidebar;