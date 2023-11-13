import React from 'react';
import Styles from './sidebar.module.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className={Styles.sidebar}>
            <div className={Styles.top}>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className={Styles.logo}>Conversa</span>
                </Link>
            </div>
            <hr/>
            <div className={Styles.center}>
                <ul>
                    <p className={Styles.title}>MAIN</p>
                    <Link to='/' style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className={Styles.icon} />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className={Styles.title}>LISTS</p>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className={Styles.icon} />
                            <span>Users</span>
                        </li>
                    </Link>
                    <p className={Styles.title}>CHATING</p>
                    <Link to="/chats" style={{ textDecoration: "none" }}>
                        <li>
                            <ChatOutlinedIcon className={Styles.icon}/>
                            <span>Group Chat</span>
                        </li>
                    </Link>
                    <p className={Styles.title}>SETTING</p>
                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className={Styles.icon} />
                            <span>Profile</span>
                        </li>
                    </Link>
                </ul>
            </div>
            
        </div>
    )
}
