import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';


import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../Menu';

const cs = classNames.bind(styles)

function Header() {
    return <div className={cs('wrapper-h')}>
            <div className={cs('nav-wrapper')}>  
                <div className={cs('left-menu')}>  
                
                    <img className={cs('logo-he')} src={images.logo} alt='logo'/>
                    <a className={cs('new-version')} href='/'><img className={cs('ic-new')} src={images.icNew} alt='ic new'/></a>
                    <Tippy 
                        content="Bài Hát" 
                        delay={[1000,1000]}
                        
                        render={attrs =>(
                            <Menu />
                        )}
                    >    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Bài Hát</Button>
                        </a>
                    </Tippy>
                    <Tippy content="Playlist">    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Playlist</Button>
                        </a>
                    </Tippy>
                    <Tippy content="Tuyển Tập">    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Tuyển Tập</Button>
                        </a>
                    </Tippy>
                    <Tippy content="Video">    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Video</Button>
                        </a>
                    </Tippy>
                    <Tippy content="BXH">    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>BXH</Button>
                        </a>
                    </Tippy>
                    <Tippy content="Top 100">    
                        <a className={cs('option-left-menu')} href='/'>    
                            <Button>Top 100</Button>
                        </a>
                    </Tippy>
                    <Tippy content="Khác">    
                        <a className={cs('option-left-menu')} href='/'>    
                        <Button><img className={cs('ic-more')} src={images.icMore} alt='icon more'/></Button>
                        </a>
                    </Tippy>
                    
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