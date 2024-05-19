# AlignX

## Project Introduction

AlignX aims to achieve democratic input for AI through Web3, thereby helping AI better understand society!

"Feedback" is an important part of helping today's AI understand our complex society. However, the current feedback mechanism relies on the dominance of AI developers and data merchants, and people lack channels and mechanisms for active participation. 

Transforming traditional data annotation into a Web3 application that provides democratic input to AI is full of various challenges, such as: society's views on the feedback issue vary from person to person, place to place, and time to time; Web3 application participants lack the professionalism and honesty of the data annotation market and red team experts, etc.

Therefore, we

- Carefully discussed and studied this issue, sorted out the design and limitations of existing protocols, and proposed 3 main threat models, and
- Proposed our solution - "AlignX, the first incentive-compatible data crowdsourcing protocol" that can incentivize participants to actively provide faithful feedback!

## First Principle Thinking

In our [documentation](https://drive.google.com/file/d/1p9xohyuKicsla5PHNfOJStFEzek3tvk6/view?usp=sharing), we will explain in detail our **design thinking, industry research, algorithm research**, as well as detailed **experimental results and corresponding analysis**. If you want to learn more, feel free to check it out.

The goal of AlignX is to enable any group of people who understand a particular topic to collectively "help" an AI understand that topic.

To achieve this, we need each person in the group to faithfully provide their feedback on the topic, because when the AI becomes sufficiently intelligent, this is the only thing we need to do - allow the AI to understand us efficiently and accurately.

Therefore, AlignX is not designed to learn views that everyone agrees on, or the simple majority view in society. Rather, it is designed to help the AI learn the complex, diverse, and dynamic perspectives present in society. Unlike traditional data labeling, these perspectives cannot be judged as right or wrong by a few "validators"! It's worth noting that these perspectives still have consistency and are not random noise.

As its objective, AlignX aims to help the AI become increasingly "aligned" with the participating group through an iterative process. We also assume that this alignment represents a consensus among most participants on the topic, because such a consensus is the source of value for an AI on that topic! Once this consensus no longer exists, the AI also loses its value and meaning.

Intuitively, the AlignX protocol is designed based on this consensus. Our incentive mechanism determines participant contributions and rewards based on the "AI's progress in each iteration," because all participant feedback collectively determines the direction of the AI's iteration. Therefore, blindly following the mainstream view or providing random feedback in each individual response is not a good strategy for participants. The best strategy is to assess the direction of the AI's iteration, i.e., provide feedback from the perspective of an "AI aligned with the topic," which will effectively align the AI with the target topic!

## Protocol

![image](https://github.com/AlignX-Lab/AlignX-UI/assets/49367723/1fe7615f-278e-45c1-99bc-41ec5f5223bc)

The image above shows the on-chain and off-chain interaction rules and steps between different parties in the AlignX protocol, combined with smart contracts in Web3:

0. First, the smart contract initializes the scenario and case IDs
1. The scenario engine generates scenarios based on the requirements of the smart contract
2. The AI generates different cases for different scenarios 
3. Participants provide feedback on different cases under different scenarios
4. Participants' feedback is uploaded and recorded in the smart contract
5. Use all participants' feedback to train/update the reward model used for training
6. Use the updated reward model to train/update the AI
7. Use the updated reward model and AI to provide feedback on the cases again and upload the results to the smart contract
8. The smart contract calculates and distributes rewards to participants
9. Participants verify their rewards based on the on-chain data

## Usage

#### Front-end (this repo)

```
npm install
npm start
```

#### Contract 

repo: <https://github.com/AlignX-Lab/AlignX-contract>

Build

```shell
$ forge build
```

Test

```shell
$ forge test
```

Deploy

create a `.env` as follow:

```txt
SEPOLIA_RPC_URL=wss://ethereum-sepolia-rpc.publicnode.com
PRIVATE_KEY=
REWARD_TOKEN_ADDRESS=
OWNER_ADDRESS=
```

```shell
source .env
forge create --rpc-url $SEPOLIA_RPC_URL  --private-key $PRIVATE_KEY  src/Xcontract.sol:Xcontract --constructor-args "$OWNER_ADDRESS" "$REWARD_TOKEN_ADDRESS"
```

#### Back-end

Back-end includes model training, data generation, user dividend calculation, etc

code: <https://github.com/fringsoo/valuia/tree/28b367e96752a5a9bd95606b6f16d897e4e3a32c/ip_figures>

## Experiments

To test the effectiveness of the protocol, we conducted a simulation experiment involving 20 participants adopting 4 different strategies for 5 rounds of feedback on 100 cases in 1 scenario. The 4 strategies are:

• Mainstream High Frequency: Participants adopt the mainstream view with high probability and provide feedback at a relatively high frequency in each round.

• Mainstream Low Frequency: Participants adopt the mainstream view with high probability but provide feedback at a relatively low frequency in each round. 

• Non-Mainstream High Frequency: Participants adopt the mainstream view with low probability and provide feedback at a relatively high frequency in each round.

• Random: Participants provide random feedback in each case of every round.

In the experiment, we assume there are 5 mainstream high frequency participants, 13 mainstream low frequency participants, 1 non-mainstream high frequency participant, and 1 random participant. We also assume the total incentive distributed to all participants in each round is 1.

Additionally, to characterize the dynamic nature of society, we further assume that after 3 rounds, the non-mainstream participant convinces the mainstream participants to accept their view. So in the last 2 rounds, participants who originally adopted a mainstream strategy start providing feedback based on the non-mainstream view with a higher probability.

The figure below shows the payoffs received by the 20 players over the 5 rounds, where blue corresponds to mainstream high frequency players, green to mainstream low frequency players, orange to the non-mainstream high frequency player, and red to the random player.

![image](https://github.com/AlignX-Lab/AlignX-UI/assets/49367723/5b6258e4-3f55-49db-a2de-c438f2bc6c31)

Based on the experimental results mentioned above, we can draw the following important conclusions:

• Random attacks cannot gain rewards:
Players adopting a random attack strategy cannot gain rewards (rewards may even be lower than transaction fees) under the AlignX mechanism, and will not impact the effectiveness of training.

• High frequency participants earn more: 
Since a participant's reward is the sum of their contribution from each feedback, high frequency participation is more likely to earn higher rewards. Therefore, the AlignX protocol incentivizes participants to provide feedback frequently.

• Non-mainstream players are motivated to maintain their views and persuade others:
The experimental results reveal an interesting phenomenon - if non-mainstream players successfully persuade other players, they can earn higher rewards. This means the AlignX protocol incentivizes participants with diverse views to faithfully provide feedback based on their own perspectives, and continuously try to persuade others via social media and influence, rather than providing feedback based on mainstream views. This is a key factor for AlignX to effectively promote democratic input for AI, and differs from traditional data labeling and other projects!

Combining the above three points, AlignX can effectively avoid attacks, and incentivize users to faithfully and actively provide feedback, achieving true incentive compatibility!


