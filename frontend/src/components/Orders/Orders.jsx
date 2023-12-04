import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'
import logo from '../../assets/instagram.png'

const Orders = (props) => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src={logo} alt="logo" />
                <span className={css.title}>Insta Statistics</span>
            </div>

            {props.isLoading?(<div className={css.post}></div>):(<div className={css.post}>
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Followers Growth</span>
                        <span className={css.cardAmount}>{props.stats.followersGrowth}</span>
                    </div>
                </div>
                
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Engagement Ratio</span>
                        <span className={css.cardAmount}>{props.stats.engagementRate}</span>
                    </div>
                </div>

                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Weekly Followers</span>
                        <span className={css.cardAmount}>{props.stats.weeklyFollowers}</span>
                    </div>
                </div>
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Avg Likes</span>
                        <span className={css.cardAmount}>{props.stats.avgLikes}</span>
                    </div>
                </div>
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Avg Comments</span>
                        <span className={css.cardAmount}>{props.stats.avgComments}</span>
                    </div>
                </div>
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Followers Ratio</span>
                        <span className={css.cardAmount}>{props.stats.followersRatio}</span>
                    </div>
                </div>
                <div className={`grey-container ${css.order}`}>
                    <div className={css.postDesc}>
                        <span className={css.cardHead}>Comment Ratio</span>
                        <span className={css.cardAmount}>{props.stats.commentRatio}</span>
                    </div>
                </div>
            </div>)
}
        </div>
    )
}

export default Orders