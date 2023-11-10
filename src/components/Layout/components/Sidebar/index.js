import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { useState, useEffect } from "react";

const cs = classNames.bind(styles);

const nametag = ["Product", "Author", "Category", "Playlist", "Country", "USer"];

function Sidebar() {
    // const [mounter, setMounter] = useState(true);
    // const handleMount = () =>{
    //     setMounter(!mounter);
    // }    
    // const [hss, setHss] = useState([]);
    // const [hs, setHs] = useState('');
    // const handleAdd = (nhs) =>{
    //     setHss([...hss, nhs]);
    // }
    

    // const [datas, setDatas] = useState([])
    // const [type, setType] = useState("Product")
    
    // useEffect(()=>{
    //     fetch(`http://localhost:3001/${type}`)
    //         .then(res => res.json())
    //         .then(datas =>{
    //             setDatas(datas)
    //         })
    // },[type])
    

    return <div className={cs('f-info')}>
        {/* <input value={hs} onChange={e=>{setHs(e.target.value)}} />
        <button onClick={()=>{handleAdd(hs)}}>ADD</button>
        {mounter && <h1>hey bro</h1>}
        <button onClick={()=>{handleMount()}}>click me</button>
        
        {nametag.map((tag,index) => (
            <button 
                key={index} 
                onClick={()=>{setType(tag)}}
                style={type === tag ? {
                    border: '1px solid black'
                }:{}}
            >
                {tag}
            </button>
        ))}

        {datas.map((data)=>(
            <div key={data.id}>
                <h3>{data.description}</h3>
                <p>{data.title}</p>
            </div>
        ))} */}

    </div>;
}

export default Sidebar;