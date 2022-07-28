import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import ItemNews from '~/components/Layout/itemNews/ItemNews';
import BoxCategory from '~/components/Layout/BoxCategory/BoxCategory';
import { dataNewsTopStory, dataNewsStreamHome, dataNewsPodCast } from '~/data/News/data';
import { dataBox } from '~/data/News/dataBox';
import Podcart from '~/components/Layout/Podcart/Podcart';
const cx = classNames.bind(styles);
export default function Home() {
    return (
        <>
            <div className={cx('section', 'sectionTopstory')}>
                <div className={cx('container', 'flexbox')}>
                    <div className={cx('colLeftTop')}>
                        <div className={cx('wrapperTopStory', 'widthCommon')}>
                            <ItemNews class="articleTopstory" data={dataNewsTopStory[0]} checkCount="true" />
                            <div className={cx('subNewsTop')}>
                                <div className={cx('innerSubNewsTop')}>
                                    <div className={cx('scrollSubFeatured')}>
                                        <ul className={cx('listSubFeature')}>
                                            <li>
                                                <ItemNews
                                                    class="basicItemNews"
                                                    data={dataNewsTopStory[1]}
                                                    checkCount="false"
                                                />
                                            </li>
                                            <li>
                                                <ItemNews
                                                    class="basicItemNews"
                                                    data={dataNewsTopStory[2]}
                                                    checkCount="false"
                                                />
                                            </li>
                                            <li id={cx('gocnhin')}>
                                                <ItemNews
                                                    class="basicItemNews"
                                                    data={dataNewsTopStory[3]}
                                                    checkCount="true"
                                                />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <aside className={cx('colRightTop')}>
                        <div className={cx('boxCategory')}>
                            <div className={cx('bannerAds')}>
                                <div className={cx('lazier')}></div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            <div className={cx('section', 'sectionStreamHome ')}>
                <div className={cx('container', 'hasBorder', 'flexbox')}>
                    <div className={cx('colLeft', 'colSmall')}>
                        {dataNewsStreamHome.map((dataNewsStreamHome, index) => (
                            <ItemNews class="itemNewsCommon" data={dataNewsStreamHome} checkCount="true" key={index} />
                        ))}
                    </div>{' '}
                    <div className={cx('colRight', 'colMedium')}>
                        {dataBox.map((dataBox, index) => (
                            <BoxCategory class="hasBorder" data={dataBox} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('section', 'sectionPodcart')}>
                <div className={cx('container', 'hasBorder')}>
                    <div className={cx('widthCommon', 'boxPodcart')}>
                        <div className={cx('widthCommon', 'innerPodcast')}>
                            <hgroup className={cx('widthCommon', 'titleBox')}>
                                <h2 className={cx('parentCate')}>
                                    <a href="https://vnexpress.net/" title="Podcart" className={cx('innerTitle')}>
                                        Podcasts
                                    </a>
                                </h2>
                            </hgroup>
                            <div className={cx('listPodcast2')}>
                                {dataNewsPodCast.map((data, index) => (
                                    <Podcart data={data} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
