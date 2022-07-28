import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { dataFooterOne, dataFooterTwo, dataFooterThree, dataFooterFour, dataFooterFive } from '~/data/dataFooter';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

export default function Footer() {
    const mapItemMenu = (dataFooter) => {
        return dataFooter.map((data) => (
            <li key={data.id} className={cx('item-menu')}>
                <a href={data.link}>{data.name}</a>
            </li>
        ));
    };
    return (
        <footer className={cx('footer', 'wrapper')}>
            <div className={cx('inner', 'widthcommon')}>
                <ul className={cx('list-menu-footer')}>
                    {mapItemMenu(dataFooterOne)}
                    <li className={cx('item-menu', 'bordertop')}>
                        <a href="/">Mới nhất</a>
                    </li>
                    <li className={cx('item-menu')}>
                        <a href="/">Xem nhiều</a>
                    </li>
                    <li className={cx('item-menu')}>
                        <a href="/">Tin nóng</a>
                    </li>
                </ul>
                <ul className={cx('list-menu-footer')}>{mapItemMenu(dataFooterTwo)}</ul>
                <ul className={cx('list-menu-footer')}>{mapItemMenu(dataFooterThree)}</ul>
                <ul className={cx('list-menu-footer')}>{mapItemMenu(dataFooterFour)}</ul>
                <ul className={cx('list-menu-footer')}>{mapItemMenu(dataFooterFive)}</ul>
                <div className={cx('wrap-contact')}>
                    <div className={cx('contact')}>
                        <p>Tải ứng dụng</p>
                        <a href="https://e.vnexpress.net/" className={cx('btnContact')}>
                            <img src={images.eLetter} alt="eLogo" className={cx('eLogo')} />
                            Mới nhất
                        </a>
                        <a href="https://e.vnexpress.net/" className={cx('btnContact')}>
                            <img src={images.eLetter} alt="eLogo" className={cx('eLogo')} />
                            International
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('coppyRight', 'widthCommon')}>
                <p className={cx('baoDT')}>
                    <a href="https://vnexpress.net/" className={cx('logoFT')}>
                        <span>Báo điện tử</span>
                        <img src={images.logo} alt="vnexpress" />
                    </a>
                </p>
                <div className={cx('right')}>
                    <a href="/https://vnexpress.net/rss">RSS</a>
                    <span className={cx('txt-follow')}>Theo dõi VnExpress trên</span>
                    <a href="https://www.facebook.com/congdongvnexpress/" className={cx('face')} title="Facebook">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a href="https://twitter.com/VnEnews" className={cx('twitter')} title="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCVRqZH5QnrnbMWhElPBD-MQ?sub_confirmation=1"
                        className={cx('youtube')}
                        title="Youtube"
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
            <div className={cx('endFooter', 'widthCommon')}>
                <p>
                    <strong>Báo tiếng Việt nhiều người xem nhất</strong>
                    <br />
                    Thuộc Bộ Khoa học Công nghệ
                    <br />
                    Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
                </p>
                <p>
                    Tổng biên tập: Phạm Hiếu
                    <br />
                    Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy, Hà Nội
                    <br />
                    Điện thoại: 024 7300 8899 - máy lẻ 4500
                </p>
                <p style={{ textAlign: 'right' }}>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
            </div>
        </footer>
    );
}
