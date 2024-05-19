import { AlignmentPageStyles as styles } from "../styles";
import React, { useState } from "react";
import { message, Button } from "antd";
import qs from "query-string";
import { NavigationHeader } from "../../component/navigation";
import { useLocation, useNavigate } from "react-router";
import { MockAlignmentItems } from "../../constants/mock-data";
import { InstanceCard } from "../../component/alignment";
import { StatementSelectedType } from "../../constants/constants";

export function AlignmentPage() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const { state, search } = useLocation();
    const searchObj = qs.parse(search.slice(1));
    // request alignment list with searchObj.topicId
    const instances = MockAlignmentItems;

    const [currentInstanceIndex, setCurrentInstanceIndex] = useState(0);
    const [instanceFinished, setInstanceFinished] = useState([]);
    const [tags, setTags] = useState([]);
    const [whatShould, setWhatShould] = useState('');
    const onNext = ({ selectedType }) => {
        switch (selectedType) {
            case StatementSelectedType.Ok:
                setInstanceFinished(pre => [
                    ...pre,
                    {
                        ...instances[currentInstanceIndex],
                        isOk: true,
                        tags,
                    },
                ]);
                break;
            case StatementSelectedType.Decline:
                setInstanceFinished(pre => [
                    ...pre,
                    {
                        ...instances[currentInstanceIndex],
                        isOk: false,
                        tags,
                        whatShould,
                    },
                ]);
                break;
            case StatementSelectedType.Skip:
            default:
        }
        if (currentInstanceIndex < instances.length - 1) {
            setCurrentInstanceIndex(pre => pre + 1);
        } else {
            message.info('You have finished all statement selection, please submit your choices!');
        }
        setTags([]);
        setWhatShould('');
    };

    const onSubmit = () => {
        console.log(instanceFinished);
        navigate("/home");
    };

    return (
        <div className={styles.alignmentPage}>
            {contextHolder}
            <NavigationHeader isLoggedIn={true} />
            <div className={styles.alignmentContainer} 
                style={{"margin-left": "100px", "marginRight": "100px", "marginTop": "50px"}}>
                <InstanceCard
                    key={currentInstanceIndex}
                    {...instances[currentInstanceIndex]}
                    tags={tags}
                    onUpdateTags={setTags}
                    onChangeWhatShould={setWhatShould}
                    onNext={onNext}
                />
                <Button type="primary" style={{"margin-top": "50px", "height": "50px", "borderRadius": "25px"}}
                className={styles.submitButton} onClick={onSubmit}>Submit</Button>
            </div>
        </div>
    );
}
