import { useCallback, useEffect, useState } from 'react';
import Orders from '../../components/Orders/Orders';
import Statistics from '../../components/Statistics/Statistics';
import { cardsData, groupNumber} from '../../data';
import css from './Dashboard.module.css';
import {Spin} from 'antd'
const Dashboard = () => {
  // const [userId, setUserId] = useState(igData.username);
  const [period, setPeriod] = useState("w");
  const [igData,setIgData] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  
  const fetchData = async function () {
    try {
        // Make a fetch request to the API endpoint
        const response = await fetch(`http://localhost:3000/${localStorage.getItem('username')}`);
  
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the JSON data from the response
        console.log(response);
        const data = await response.json();
        console.log(data);
        setIgData(data);
        setIsLoading(false);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  const [stats,setStats]= useState({});
  const [render,setRender] = useState(true)


  useEffect(()=>{
    render && localStorage.getItem('username') && fetchData()
    setRender(false)
  })

  useEffect(()=> !isLoading?setStats({
    followersGrowth: igData.followersGrowth,
    weeklyFollowers: igData.weeklyFollowers,
    engagementRate: igData.engagementRate,
    avgLikes: igData.avgLikes,
    avgComments: igData.avgComments,
    followersRatio: igData.followersRatio,
    commentRatio: igData.commentRatio,
  }):console.log("Loading"),[igData])
  // isLoading===false?console.log(igData):console.log("hello");
  // fetchData();
  return(
    <>
    {isLoading ? <Spin size={48}/> :
  <div className={css.container}>

    {/* left side */}
    <div className={css.dashboard}>

      <div className={`${css.username} theme-container`}>
        <div className={css.head}>
          <span>@{igData.userName}</span>
        </div>

      </div>

      <div className={css.cards}>
        <div className={`${css.dashboardHead} ${css.card} theme-container`}>
          <div className={css.cardHead}>
            <span>Followers</span>
          </div>
          <div className={css.cardAmount}>
            <span>{igData.followersCount}</span>
          </div>
        </div>
        <div className={`${css.dashboardHead} ${css.card} theme-container`}>
          <div className={css.cardHead}>
            <span>Following</span>
          </div>

          <div className={css.cardAmount}>
            <span>{igData.followingsCount}</span>
          </div>
        </div>
        <div className={`${css.dashboardHead} ${css.card} theme-container`}>
          <div className={css.cardHead}>
            <span>Media</span>
          </div>

          <div className={css.cardAmount}>
            <span>{igData.postsCount}</span>
          </div>
        </div>
      </div>



      <div className={css.statsContainer}>
        <Statistics title='Followers' Data={igData.instaStats} />
        <Statistics title='Posts' Data={igData.instaStats}/>
      </div>

    </div>


    <Orders stats={stats} />
  </div>
}
</>)
}

export default Dashboard