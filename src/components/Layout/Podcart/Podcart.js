import React from 'react';
import classNames from 'classnames/bind';
import styles from './Podcart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function Podcart(props) {
    const data = props.data;
    return (
        <article className={cx('itemNews')}>
            <div className={cx('thumbArt')}>
                <a href={data.link} title={data.title} className={cx('thumb', 'thumb1x1')}>
                    <picture>
                        <img src={data.image} alt={data.title} style={{ transform: 'translateX(-50%)', left: '50%' }} />
                    </picture>
                    <span className={cx('iconThumbVideophoto')}>
                        <FontAwesomeIcon icon={faCamera} />
                    </span>
                </a>
            </div>
            <h3 className={cx('titleNews')}>
                <a href={data.link} title={data.title}>
                    {data.title}
                </a>
            </h3>
            <p className={cx('description')}>
                <a href={data.link} title={data.title}>
                    {data.description}
                </a>{' '}
                <span className={cx('countCmt', props.checkCount)}>
                    <FontAwesomeIcon icon={faMessage} className={cx('iconCmt')} />
                    <span className={cx('text')}>{data.countComment}</span>
                </span>
            </p>
        </article>
    );
}
