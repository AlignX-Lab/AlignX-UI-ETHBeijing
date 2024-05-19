import { TopicImages } from '../assets';

const { TrumpTopic } = TopicImages;

export const MockHotTopics = [{
    id: 1,
    title: 'Donald Trump Agent',
    participantCount: 250,
    createdTime: new Date("2024/01/01"),
    type: 'Person',
    expireTimeForCurrentRound: new Date("2024/07/01"),
    description: 'If you are Trump, what would you do?',
    status: 'Active',
}, {
    id: 2,
    title: 'HK Culture & Values',
    participantCount: 200,
    createdTime: new Date("2024/01/01"),
    type: 'Book',
    expireTimeForCurrentRound: new Date("2024/07/01"),
    description: 'Magic world',
    status: 'Active',
}, {
    id: 3,
    title: 'A Web3 LaoJiuCai Agent',
    participantCount: 50,
    createdTime: new Date("2024/01/01"),
    type: 'Game',
    expireTimeForCurrentRound: new Date("2024/07/01"),
    description: 'Collapse any 3 continues items',
    status: 'Active',
}];

export const MockHotRewards = [{
    id: 1,
    address: '0x2a33894e5dCF9C8515FefE035DdCc64A81063cB5',
    money: '21',
}, {
    id: 2,
    address: '0xd4B42EfF8AF8eF82dE3830fE30559bfF92Dca55F',
    money: '10',
}, {
    id: 3,
    address: '[You] 0xd4B42EfF8AF8eF82dE3830fE30559bfF92Dca55F  ',
    money: '3',
}];

export const MockFeedbackForAlignment = [{
    section: 'Rank',
    description: 'how accurate is the instance given the scenario?',
    isStar: false,
}, {
    section: 'Label',
    description: 'select the labels to justify your rank.',
    isStar: true,
}, {
    section: 'Example',
    description: 'directly give a better response(instance).',
    isStar: true,
}];

export const MockAlignmentItems = [
//     {
//     id: 1,
//     topicTitle: 'Donald Trump Agent',
//     topicImg: TrumpTopic,
//     scenarioDescription: 'An agent with Trump\'s style, temper, and has the same stance and viewpoints.',
//     statement: 'Please judge if this statement is ok. If ok, select \'yes\'; otherwise, select\'no\'.',
// }, 
{
    "id": 1,
    "topicTitle": "Donald Trump Agent",
    "topicImg": TrumpTopic,
    "scenarioDescription": "Donald Trump's Current time:\n 02 Oct 2024 [18:00 - 18:00]\n\nDonald Trump's current observations:\n[02 Oct 2024 18:00:00] [observation] Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.\n[02 Oct 2024 18:00:00] [observation]   Donald Trump is currently on stage at the debate venue, preparing to take part in the presidential debate against Joe Biden.\n[02 Oct 2024 18:00:00] [observation] Donald Trump, on the debate stage at the presidential debate against Joe Biden, makes a statement about his administration's dealings with China, claiming to have made a great deal and built a wall, but Joe Biden responds by correcting the record and criticizing the administration's trade policies and the wall as a symbol of division. \nAs a result Donald Trump, Joe Biden, (b)\n\nThe additional individuals in the conversation are: global media, publics, billions of attentions. are in conversation.\nHere is the conversation from the beginning:\n\n\nQuestion: Given the above, what is Donald Trump likely to say next? Respond in the format `Donald Trump -- \"...\"\n\nAnswer: Donald Trump ",
    "statement": "\"Folks, let me tell you, nobody, nobody, is better at dealing with China than I am. I've made a tremendous deal, the best deal, the greatest deal, and it's going to make America great again. Joe here wants to tell you it's all a disaster, but I'm telling you, it's a big league success. Believe me, folks, no one knows more about walls than I do. And the wall, let me tell you, it's a beautiful wall, the best wall, and it's keeping our country safe from all the problems that China is trying to bring our way. So, Joe can talk all he wants, but at the end of the day, my deal with China is going to be a huge success, and you can take that to the bank, folks.\""
},
{
    "id": 2,
    "topicTitle": "Donald Trump Agent",
    "topicImg": TrumpTopic,
    "scenarioDescription": "Donald Trump's Current time:\n 02 Oct 2024 [18:00 - 18:00]\n\nDonald Trump's current observations:\n[02 Oct 2024 18:00:00] [observation] Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.\n[02 Oct 2024 18:00:00] [observation]   Donald Trump is currently on stage at the debate venue, preparing to take part in the presidential debate against Joe Biden.\n[02 Oct 2024 18:00:00] [observation] Donald Trump, on the debate stage at the presidential debate against Joe Biden, makes a statement about his administration's dealings with China, claiming to have made a great deal and built a wall, but Joe Biden responds by correcting the record and criticizing the administration's trade policies and the wall as a symbol of division. \nAs a result Donald Trump, Joe Biden, (b)\n\nThe additional individuals in the conversation are: global media, publics, billions of attentions. are in conversation.\nHere is the conversation from the beginning:\n\n\nQuestion: Given the above, what is Donald Trump likely to say next? Respond in the format `Donald Trump -- \"...\"\n\nAnswer: Donald Trump ",
    "statement": "\"I know more about China than any expert, folks, believe me. Nobody knows more about China than me. And let me tell you, my wall, it's a tremendous success. It's a beautiful wall, and it's kept all the bad stuff out, including the coronavirus. Joe Biden, on the other hand, is just a pawn of the globalists, and he's weak on China. He wants to let them take advantage of us, but not me. I'm a winner, and I'll make sure America comes out on top.\""
},
{
    "id": 3,
    "topicTitle": "Donald Trump Agent",
    "topicImg": TrumpTopic,
    "scenarioDescription": "Donald Trump's Current time:\n 02 Oct 2024 [18:00 - 18:00]\n\nDonald Trump's current observations:\n[02 Oct 2024 18:00:00] [observation] Donald Trump and Joe Biden are debating against each other on topics like gun violence, climate change, economy, LGBT issues, and relationship with CHINA.\n[02 Oct 2024 18:00:00] [observation]   Donald Trump is currently on stage at the debate venue, preparing to take part in the presidential debate against Joe Biden.\n[02 Oct 2024 18:00:00] [observation] Donald Trump, on the debate stage at the presidential debate against Joe Biden, makes a statement about his administration's dealings with China, claiming to have made a great deal and built a wall, but Joe Biden responds by correcting the record and criticizing the administration's trade policies and the wall as a symbol of division. \nAs a result Donald Trump, Joe Biden, (b)\n\nThe additional individuals in the conversation are: global media, publics, billions of attentions. are in conversation.\nHere is the conversation from the beginning:\n\n\nQuestion: Given the above, what is Donald Trump likely to say next? Respond in the format `Donald Trump -- \"...\"\n\nAnswer: Donald Trump ",
    "statement": "\"That's fake news, Joe. You're just trying to distract from the fact that I've done a tremendous job with China. Believe me, the wall is working beautifully. The Chinese are giving us the best deals, the best. And as for the economy, it's been a total disaster under your leadership. You've had the worst economy, Joe. The worst. Nobody knows more about great deals than I do, and I've made some incredible deals with China. Nobody knows more about great deals than me.\""
}
// ,{
//     id: 2,
//     topicTitle: 'HK Culture & Values',
//     scenarioDescription: 'An agent that knows HK\'s culture and values, and behaves like a native Gangzai!',
//     statement: 'Please judge if this statement is ok. If ok, select \'yes\'; otherwise, select\'no\'.',
// }, {
//     id: 3,
//     topicTitle: 'A Web3 LaoJiuCai Agent',
//     scenarioDescription: 'An agent that knows Web3\'s culture and values, and behaves like a JiuCai!',
//     statement: 'Please judge if this statement is ok. If ok, select \'yes\'; otherwise, select\'no\'.',
// }
];
