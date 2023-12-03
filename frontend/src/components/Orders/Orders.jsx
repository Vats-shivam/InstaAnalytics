import React from 'react'
import { groupNumber, ordersData } from '../../data'
import OrdersPieChart from '../OrdersPieChart/OrdersPieChart'
import css from './Orders.module.css'

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./logo.png" alt="logo" />
                <span>Top Engagement Posts</span>
            </div>

            <div className={css.post}>
                {
                    ordersData.map((order, index) => (
                        <div key={index} className={`grey-container ${css.order}`}>
                            <div className={css.postImg}>
                                <img src="" alt="post-pic" />
                            </div>
                            <div className={css.postDesc}>
                                <span>LIKES:{order.items}</span>
                                <span>COMMENTS: {order.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

{/* 
            <div className={css.orderChart}>
                <span>Split by orders</span>
                <OrdersPieChart/>
            </div> */}
        </div>
    )
}

export default Orders