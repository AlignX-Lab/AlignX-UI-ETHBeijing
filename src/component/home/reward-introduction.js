import React from 'react';
import { Button, List } from 'antd';
import styles from './section.module.css';
import { MockHotRewards } from '../../constants/mock-data';
import { useNavigate } from 'react-router';

export function TopRewardSection() {
    const navigate = useNavigate();
    const hotRewards = MockHotRewards;
    const navigateToRewardPage = () => {
        navigate('/reward');
    }
    return (
        <div className={styles.rewardSection}>
            <List
                itemLayout="horizontal"
                dataSource={hotRewards}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<div>{item.address}</div>}
                        />
                        <span>
                            $<span className={styles.topicText}>{item.money}</span>
                        </span>
                    </List.Item>
                )}
            />
            <div className={styles.myRewardButtonDiv}>
                {/* <Button
                    className={styles.learnMoreButton}
                    size="large"
                    ghost
                    shape='round'
                    onClick={navigateToRewardPage}>
                    My rewards
                </Button> */}
            </div>
        </div>
    );
}