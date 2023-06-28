import styles from './Header.module.scss'
import classNames from 'classnames/bind';
import images from '../../../../assets/images';

const cs = classNames.bind(styles)

function Header() {
    return <div className={cs('wrapper-h')}>
            <div className={cs('nav-wrapper')}>
                <div className={cs('logo-h')}>
                    <a href='/'>
                        <img className={cs('logo-he')} src={images.logo} alt='logo'/>
                    </a>
                </div>
                <div className={cs('left-menu')}>  
                    Left menu
                </div>
                <div className={cs('search-bar')}> 
                    search
                </div>
                <div className={cs('right-menu')}>
                    Right menu
                </div>
            </div>
         </div>;
}

export default Header;