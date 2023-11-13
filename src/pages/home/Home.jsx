import React from 'react';
import Styles from './home.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Example from '../../components/chart/Chart';
import Navbar from './../../components/navbar/Navbar';
import Widget from '../../components/widget/Widget';


export default function Home() {
  return (
    <div className={Styles.home}>
        <Sidebar/>
        <div className={Styles.homeContainer}>
        <Navbar />
          <div className={Styles.widgets}>
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="user" />
            <Widget type="order" />
          </div>
          <div className={Styles.charts}>
            <Example/>
            
          </div>
          <div className={Styles.charts}>
            <Example/>
          </div>
        </div>
    </div>
  )
}
