import React from 'react';
import classNames from 'classnames/bind';
import styles from './BoxCategory.module.scss';
import ItemNews from '../itemNews/ItemNews';

const cx = classNames.bind(styles);
export default function BoxCategory(props) {
    const data = props.data;
    return (
        <div className={cx('boxCategory', props.class)}>
            <hgroup className={cx('widthCommon', 'titleBox')}>
                <h2 className={cx('parentCate')}>
                    <a href="https://vnexpress.net/" title={data.title} className={cx('innerTitle')}>
                        {data.title}
                    </a>
                </h2>
                {data.subTitle.map((data, index) => (
                    <span className={cx('subCate')} key={index}>
                        <a href="https://vnexpress.net/" title={data}>
                            {data}
                        </a>
                    </span>
                ))}
            </hgroup>
            <div className={cx('widthCommon', 'contentBox', 'flexBox')}>
                <ItemNews class="fullThumb" data={data.news[0]} checkCount="true" />
                <div className={cx('articleSubRight')}>
                    <ItemNews class="basicItemNews" data={data.news[1]} checkCount="true" />
                </div>
                <div className={cx('subNewsCate', 'flexBox')}>
                    <ItemNews class="titleItemNews" data={data.news[2]} checkCount="true" />
                    <ItemNews class="titleItemNews" data={data.news[3]} checkCount="true" />
                    <ItemNews class="titleItemNews" data={data.news[4]} checkCount="true" />
                </div>
            </div>
        </div>
    );
}
