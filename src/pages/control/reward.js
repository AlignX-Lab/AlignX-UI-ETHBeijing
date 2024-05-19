import React from 'react';
import { RewardPageStyle as styles } from "../styles";
import { NavigationHeader } from '../../component/navigation';
import { message } from 'antd';

export function RewardPage() {
    const [messageApi, contextHolder] = message.useMessage();
    return (<div className={styles.rewardPage}>
        {contextHolder}
        <NavigationHeader isLoggedIn={true} />
        <div className={styles.rewardContainer}>

        </div>
    </div>);
}