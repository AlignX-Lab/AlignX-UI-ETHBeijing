import { HomePageStyles as styles } from "../styles";
import React from "react";
import { message, Tabs } from "antd";
import { NavigationHeader } from "../../component/navigation";
import { TopTopicSection, FeedbackForAlignmentSection, TopRewardSection } from "../../component/home";
import { HomeContentLabelType } from "../../constants/constants";

export function HomePage() {
    const [messageApi, contextHolder] = message.useMessage();

    const tabItems = [
    //     {
    //     label: <div>Rules</div>,
    //     key: HomeContentLabelType.Rules,
    //     children: <FeedbackForAlignmentSection />
    // }, 
    {
        label: <div>Topics</div>,
        key: HomeContentLabelType.Topic,
        children: <TopTopicSection />,
    }, {
        label: <div>Leaderboard</div>,
        key: HomeContentLabelType.Reward,
        children: <TopRewardSection />
    }];

    return (
        <div className={styles.homePage}>
            {contextHolder}
            <NavigationHeader showLogo={false} />
            <div className={styles.logo}>AlignX</div>
            <div className={styles.homeContainer}>
                <Tabs
                    centered
                    size="large"
                    tabBarGutter={0}
                    className={styles.tabs}
                    type="card"
                    items={tabItems}
                />
            </div>
        </div>
    );
}
