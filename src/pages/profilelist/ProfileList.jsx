import React from 'react';
import Styles from './profile.module.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Profile from '../../components/profile/Profile';

export default function ProfileList() {
  return (
    <div className={Styles.list}>
        <Sidebar/>
        <div className={Styles.listContainer}>
            <Navbar/>
            <Profile/>
        </div>
    </div>
  )
}
