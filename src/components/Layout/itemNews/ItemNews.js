import React from 'react';
import classNames from 'classnames/bind';
import styles from './ItemNews.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faMessage } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
export default function ItemNews(props) {
    const data = props.data;
    return (
        <article className={cx('itemNews', props.class)}>
            {props.class === 'itemNewsCommon' && (
                <>
                    <h3 className={cx('titleNews')}>
                        <a href={data.link} title={data.title}>
                            {data.title}
                        </a>
                    </h3>
                    <div className={cx('thumbArt')}>
                        <a href={data.link} title={data.title} className={cx('thumb', 'thumb5x3')}>
                            <picture>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    style={{ transform: 'translateX(-50%)', left: '50%' }}
                                />
                            </picture>
                            <span className={cx('iconThumbVideophoto')}>
                                <FontAwesomeIcon icon={faCamera} />
                            </span>
                        </a>
                    </div>
                    <p className={cx('description')}>
                        <a href={data.link} title={data.title}>
                            {data.description}
                        </a>
                        <span className={cx('countCmt', props.checkCount)}>
                            <FontAwesomeIcon icon={faMessage} className={cx('iconCmt')} />
                            <span>{data.countComment}</span>
                        </span>
                    </p>
                </>
            )}
            {props.class === 'articleTopstory' && (
                <>
                    <div className={cx('thumbArt')}>
                        <a href={data.link} title={data.title} className={cx('thumb', 'thumb5x3')}>
                            <picture>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    style={{ transform: 'translateX(-50%)', left: '50%' }}
                                />
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
                        </a>
                    </p>
                    <p className={cx('metaNews')}>
                        <a href={data.link} title={data.field} className={cx('cat')}>
                            {data.field}
                        </a>

                        <span className={cx('countCmt', props.checkCount)}>
                            <FontAwesomeIcon icon={faMessage} className={cx('iconCmt')} />
                            <span>{data.countComment}</span>
                        </span>
                    </p>
                </>
            )}
            {props.class === 'basicItemNews' && (
                <div className={cx('wrapperNews')}>
                    <h3 className={cx('titleNews')}>
                        <a href={data.link} title={data.title}>
                            {data.title}
                        </a>
                    </h3>
                    <p className={cx('description')}>
                        <a href={data.link} title={data.title}>
                            {data.description}
                        </a>
                    </p>
                    <span className={cx('countCmt', props.checkCount)}>
                        <FontAwesomeIcon icon={faMessage} className={cx('iconCmt')} />
                        <span>{data.countComment}</span>
                    </span>
                </div>
            )}
            {props.class === 'titleItemNews' && (
                <>
                    <h3 className={cx('titleNews')}>
                        <a href={data.link} title={data.title}>
                            {data.title}
                        </a>
                    </h3>
                    <span className={cx('countCmt', props.checkCount)}>
                        <FontAwesomeIcon icon={faMessage} className={cx('iconCmt')} />
                        <span>{data.countComment}</span>
                    </span>
                </>
            )}{' '}
            {props.class === 'fullThumb' && (
                <>
                    <div className={cx('thumbArt')}>
                        <a href={data.link} title={data.title} className={cx('thumb', 'thumb5x3')}>
                            <picture>
                                <img
                                    src={data.image}
                                    alt={data.title}
                                    style={{ transform: 'translateX(-50%)', left: '50%' }}
                                />
                            </picture>
                            <span className={cx('iconThumbVideophoto')}>
                                <FontAwesomeIcon icon={faCamera} />
                            </span>
                        </a>
                    </div>
                    <div className={cx('wrapSumNews')}>
                        <h3 className={cx('titleNews')}>
                            <a href={data.link} title={data.title}>
                                {data.title}
                            </a>
                        </h3>
                        <p className={cx('description')}>
                            <a href={data.link} title={data.title}>
                                {data.description}
                            </a>
                        </p>
                    </div>
                </>
            )}
        </article>
    );
}
