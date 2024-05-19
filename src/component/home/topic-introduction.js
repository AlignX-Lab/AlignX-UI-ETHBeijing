import React from 'react';
import { Avatar, List } from 'antd';
import styles from './section.module.css';
import { MockHotTopics } from '../../constants/mock-data';
import { useNavigate } from 'react-router';
import { Icons } from '../../assets';

const { FireIcon } = Icons;

export function TopTopicSection() {
    const navigate = useNavigate();
    const hotTopics = MockHotTopics;
    const navigateToAlignmentPage = ({ topicId }) => {
        navigate(`/alignment?topicId=${topicId}`);
    }

    return (
        <div className={styles.introductionSection} >
            <List
                itemLayout="horizontal"
                dataSource={hotTopics}
                renderItem={(item, index) => (
                    <List.Item 
                        style={{"backgroundColor": "white", 
                        "margin": "10px", 
                        "borderRadius": "20px", 
                        "padding": "20px"}}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.topicImg} />}
                            title={<div onClick={() => navigateToAlignmentPage({ topicId: item.id })}>{item.title}</div>}
                        />
                        <div className={styles.topicInfoGroup}>
                            <img className={styles.fireIcon} src={FireIcon} alt='' />
                            <div className={styles.topicText}>{item.participantCount}</div>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    );
}