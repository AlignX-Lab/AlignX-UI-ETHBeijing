import React from "react";
import classname from "classnames";
import { Avatar, Button } from 'antd';
import styles from "./navigation.module.css";
import './navigation.css';
import { useNavigate } from "react-router";
import { Icons } from '../../assets';
const { UserIcon } = Icons;

export function NavigationHeader({ showLogo = true, isLoggedIn = false }) {
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/home");
    }
    return (
        <div className={classname("header", styles.header)}>
            {showLogo && <div className={classname("header-logo", styles.headerLogo)} onClick={navigateToHome}>AlignX</div>}
            <div className={classname(styles.account)}>
                {/* {isLoggedIn ?
                    <Avatar
                        src={UserIcon}
                        className={styles.userIcon}
                    /> :
                    <Button>Sign in</Button>
                } */}
            </div>

        </div>
    );
}