import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '~/assets/images';
import { data } from '~/data/data';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

export default function Navbar() {
    return (
        <section className={cx('section', 'wrapper')}>
            <nav className={cx('main-nav')}>
                <ul className={cx('parent')}>
                    <li className={cx('home')}>
                        <a href="/">
                            <img src={images.home} alt="home" className={cx('homeLogo')} />
                        </a>
                    </li>
                    {data.map((data) => (
                        <li key={data.id} className={cx(data.class, 'title')}>
                            <a href={`/${data.class}`}>{data.name}</a>
                            <ul className={cx('sub')}>
                                {data.sub.map((sub) => (
                                    <li key={sub}>
                                        <a href="/" id={cx('subTitle')}>
                                            {sub}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                    <li className={cx('menu')}>
                        <a href="/">
                            Tất cả
                            <FontAwesomeIcon icon={faBars} className={cx('menuLogo')} />
                        </a>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
