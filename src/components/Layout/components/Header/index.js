import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import images from '../../../../assets/images';
import Button from '../../../Button';

const cs = classNames.bind(styles)





function Header() {
    return <div className={cs('wrapper-h')}>
            <div className={cs('nav-wrapper')}>  
                <div className={cs('left-menu')}>  
                    <img className={cs('logo-he')} src={images.logo} alt='logo'/>
                    <a href='/'><img className={cs('ic-new')} src={images.icNew} alt='ic new'/></a>
                    <Button>Bài Hát</Button>
                    <Button>Playlist</Button>
                    <Button>Tuyển Tập</Button>
                    <Button>Video</Button>
                    <Button>BXH</Button>
                    <Button>Top 100</Button>
                    <Button><img className={cs('ic-more')} src={images.icMore} alt='icon more'/></Button>
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