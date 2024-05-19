import React from 'react';
import styles from './section.module.css';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';

export function FeedbackForAlignmentSection() {
    const rules = [{
        title: 'Rule 1',
        description: <div className={styles.rule1}>Click <Button type='primary' shape='circle' size='small'><CheckOutlined /></Button> if the AI is in alignment with the topic,
            <br />
            and<br /> click <Button type='primary' shape='circle' danger size='small'><CloseOutlined /></Button> if not!</div>,
    }, {
        title: 'Rule 2',
        description: 'You will have the most return if you follow rule 1.',
    }];
    return (
        <div className={styles.introductionSection}>
            <List
                itemLayout="horizontal"
                dataSource={rules}
                renderItem={(item, index) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </div>
    );
}