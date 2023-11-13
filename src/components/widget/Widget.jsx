import React from 'react';
import Styles from './widget.module.css';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';


export default function Widget({ type }) {
    let data;

  //temporary
  const amount = 100;
//   const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Total Online Users",
        // isMoney: false,
        icon: (
          <BarChartRoundedIcon
            className="icon"
            style={{
              color: "blue",
              wight:"20px"
              // backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "Total Registered Users",
        // isMoney: false,
        icon: (
          <BarChartRoundedIcon
            className="icon"
            style={{
              // backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    
    default:
      break;
  }

  return (
    <div className={Styles.widget}>
      <div className={Styles.left}>
        <span className={Styles.title}>{data.title}</span>
        <span className={Styles.counter}>
          {data.isMoney && "$"} {amount}
        </span>
        <span className={Styles.link}>{data.link}</span>
      </div>
      <div className={Styles.right}>
        {/* <div className={Styles.percentage_positive}>
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {data.icon}
      </div>
    </div>
  )
}
