import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState, useEffect } from 'react';


import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../Menu';

const cs = classNames.bind(styles)

function Header() {
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/Category")
            .then(res => res.json())
            .then(category => {
                setCategory(category)
            })
    },[])

    return <div className={cs('wrapper-h')}>
            <div className={cs('nav-wrapper')}>  
                <div className={cs('left-menu')}>  
                
                    <img className={cs('logo-he')} src={images.logo} alt='logo'/>
                    <a className={cs('new-version')} href='/'><img className={cs('ic-new')} src={images.icNew} alt='ic new'/></a>
                    {
                        category.map((cate)=>(
                            <Tippy     
                                placement='bottom'
                                interactive
                                key={cate.id}
                                render={attrs =>(
                                    <Menu {...attrs} typeMenu={cate.title}/>
                                )}
                            >    
                                <a className={cs('option-left-menu')} href='/'>    
                                    <Button>{cate.title==="More" ? (<img className={cs('ic-more')} src={images.icMore} alt='icon more'/>) : cate.description}</Button>
                                </a>
                            </Tippy>
                        ))
                    }
                    {/* <Tippy     
                        delay={[500,500]}
                        render={attrs =>(
                            <Menu />
                        )}
                    >    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Bài Hát</Button>
                        </a>
                    </Tippy> */}
                    
                </div>
                
                <div className={cs('right-menu')}>
                    <div className={cs('search-box')}> 
                        <button>
                            <img src={images.icSearch} alt='ic search'/>
                        </button>
                        <input placeholder='Tìm kiếm' spellCheck={false} />
                    </div>
                    <Button>
                        <img className={cs('ic-store')} src={images.icStore} alt='ic store'/>
                    </Button>
                    <Button upload>
                        <img className={cs('ic-upload')} src={images.icUpload} alt='ic upload'/>
                    </Button>
                    <div className={cs('line')}></div>
                    <Button preprimary>Đăng nhập</Button>
                    <Button primary>Đăng ký</Button>
                    
                </div>
            </div>
         </div>;
}

export default Header;