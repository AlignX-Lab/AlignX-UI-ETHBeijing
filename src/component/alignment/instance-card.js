import React from 'react';
import classname from 'classnames';
import styles from './alignment.module.css';
import { Avatar, Button, Card } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { TagControl } from './tag-control';
import { StatementSelectedType } from '../../constants/constants';
import { Icons } from '../../assets';
const { QuoteIcon } = Icons;

export function InstanceCard({
    topicTitle,
    topicImg,
    scenarioDescription,
    statement,
    tags,
    onUpdateTags,
    onNext,
}) {
    const onStatementOk = () => {
        onNext({ selectedType: StatementSelectedType.Ok });
    };
    const onStatementDecline = () => {
        onNext({ selectedType: StatementSelectedType.Decline });
    };
    const onStatementSkip = () => {
        onNext({ selectedType: StatementSelectedType.Skip });
    }
    return (
        <div className={classname(styles.instanceCard)}>
            <Card
                actions={[
                    <Button type='primary' shape='circle' onClick={onStatementOk}><CheckOutlined /></Button>,
                    <Button type='link' onClick={onStatementSkip}>Skip</Button>,
                    <Button type='primary' shape='circle' danger onClick={onStatementDecline}><CloseOutlined /></Button>
                ]}
            >
                <div className={styles.instanceTopic}>
                    <Avatar size="large" src={topicImg} />
                    <div className={classname(styles.topicTitle)}>{topicTitle}</div>
                </div>
                <div className={classname(styles.alignmentSection, styles.scenarioDescription)}>{scenarioDescription}</div>
                <div className={classname(styles.statement)}>
                    <img className={styles.quoteIcon} src={QuoteIcon} alt='' />
                    {statement}
                </div>
                <div className={styles.alignmentSection}>
                    <TagControl
                        tags={tags}
                        onUpdateTags={onUpdateTags}
                    />
                </div>
            </Card>
        </div>
    );
}