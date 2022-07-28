import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Header() {
    let showTime = new Date();
    const day = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ 7'];
    const time = `${day[showTime.getDay()]}, ${showTime.toLocaleDateString('vi')}`;
    return (
        <header className={cx('wrapper', 'section')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="vnexpress" />
                </div>
                <span className={cx('time-now')}>{time}</span>
                <div className={cx('right')}>
                    <a href="https://vnexpress.net/tin-tuc-24h" className={cx('btn-new')}>
                        <FontAwesomeIcon icon={faClockFour} className={cx('eLogo')} />
                        Mới nhất
                    </a>
                    <a href="https://e.vnexpress.net/" className={cx('evn')}>
                        <img src={images.eLetter} alt="eLogo" className={cx('eLogo')} />
                        International
                    </a>
                    <form
                        className={cx('search', 'search-vne')}
                        action="https://timkiem.vnexpress.net"
                        id="formSearchHeader"
                    >
                        <input id="keywordHeader" type="text" name="q" placeholder="Tìm kiếm" />
                        <button type="submit" title="Tìm kiếm" className={cx('btn-search-vne')} id="buttonSearchHeader">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className={cx('search-logo')} />
                        </button>
                    </form>
                    <div className={cx('login')}>
                        <a href="https://e.vnexpress.net/" className={cx('loginBtn')}>
                            <FontAwesomeIcon icon={faUser} className={cx('loginLogo')} />
                            Đăng nhập
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}
