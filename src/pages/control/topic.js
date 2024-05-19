import { TopicPageStyles as styles } from "../styles";
import React from "react";
import { message } from "antd";
import { NavigationHeader } from "../../component/navigation";

export function TopicPage() {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <div className={styles.topicPage}>
            {contextHolder}
            <NavigationHeader />
            <div className={styles.topicContainer}>

            </div>
        </div>
    );
}
