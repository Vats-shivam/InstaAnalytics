import css from './Statistics.module.css'
import { BsArrowUpShort } from 'react-icons/bs'
import { groupNumber } from '../../data'
import StatisticsChart from '../StatisticsChart/StatisticsChart'


const Statistics = ({title="N/A"}) => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>{title}</span>
            <StatisticsChart/>
        </div>
    )
}

export default Statistics