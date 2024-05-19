# AlignX

## Project Introduction

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


