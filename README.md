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


