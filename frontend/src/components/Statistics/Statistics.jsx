import css from './Statistics.module.css'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import { useEffect, useState } from 'react'


const Statistics = (props) => {
    function removeAfterNewline(inputString) {
        const newlineIndex = inputString.indexOf('\n');
      
        if (newlineIndex !== -1) {
          // If newline character is found, create a new string without characters after it
          return inputString.substring(0, newlineIndex);
        } else {
          // If newline character is not found, return the original string
          return inputString;
        }
    }
    const [stats,setStats]=useState([]);
    useEffect(() => {
        if (props.title === 'Followers') {
            const data = props.Data.map(item => parseInt(item.followers.substring(0, item.followers.indexOf('\n')).replace(/,/g, ''),10));
            setStats(data);
        }
        else if (props.title === 'Posts') {
            const data = props.Data.map(item => removeAfterNewline(item.media));
            setStats(data); 
        }
        
    },[props.Data]);

    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>{props.title}</span>
            <StatisticsChart Data={stats} />
        </div>
    )
}

export default Statistics