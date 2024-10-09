# TFSA
![image](https://github.com/user-attachments/assets/9b08d30e-0258-41ea-85aa-862f70258a7c)

## Description
The Transportation Flexible Spending Account (TFSA) ecosystem is an EVM-compatible DApp and token that facilitates a universal metro card network, allows users to transfer remaining balance from one metro to another.

See below for a more detailed description :)

## Rootstock Integration
The TFSA DApp is built and deployed on the Rootstock ecosystem; core contracts include the Metro Aggregator smart contract and the TFSA token contract. Additional token contracts are added as each metro network issues their ERC20 token.

MetroAggregator Contract - [0xf86f526F9aA6FfcB65889ac320FdebEF227F91f3](https://explorer.testnet.rootstock.io/address/0xf86f526F9aA6FfcB65889ac320FdebEF227F91f3)

TFSA Token Contract - [0x50C62C8014ECb5643a09660e8Ccd6d564661b23F](https://explorer.testnet.rootstock.io/address/0x50C62C8014ECb5643a09660e8Ccd6d564661b23F)

WMATA Token Contract - [0x01f6440Ed36B1CDb3cAdB63C089fecb52Db0C8e0](https://explorer.testnet.rootstock.io/address/0x01f6440Ed36B1CDb3cAdB63C089fecb52Db0C8e0)

TRAX Token Contract - [0xe71f45a72c0A986Da1B6db61fe85fA2925a8CFf2](https://explorer.testnet.rootstock.io/address/0xe71f45a72c0A986Da1B6db61fe85fA2925a8CFf2)

MetroAggregator Treasury Address - [0xe755336a328066d67a50d1bc08cb3dff864f4bac](https://explorer.testnet.rootstock.io/address/0xe755336a328066d67a50d1bc08cb3dff864f4bac)

Some examples of successful testnet transactions:
- [txn hash 1](https://explorer.testnet.rootstock.io/tx/0x1a240a949f10f66f4ee7b20357b458dc6a70b578734170616b77539d61fcac2f)
- [txn hash 2](https://explorer.testnet.rootstock.io/tx/0x89d1e457cb72dc1151f1f580e9fb28ca39b3ab725246df40bf5dd33d0992a86e)
- Most Transaction were submitted from the Address [0xaf755fDD0Ea69482E61755855714591BA58595DA](https://explorer.testnet.rootstock.io/address/0xaf755fdd0ea69482e61755855714591ba58595da)

## Team
We are a team from Accenture's Digital Assets practice in Washington DC! We all have solid technical backgrounds and industry knowledge/familiarity, but a mix of experience levels with web3 and frontend development.  
- Garret Berg: Data Engineer/Web3 Dev
- Carlo Burgos: Lead Software Architect
- Annajune Ghrist: Data Scientist
- Karim Hassan: Data Analyst

## Testing the Integration
TFSA's main integration with Rootstock is in it's token contracts and MetroAggregator contract. 
Because mint permissions are restricted, we provide an address with minting privileges for testing purposes; please load this account in MetaMask to use for testing functionality:
- address: 0xaf755fDD0Ea69482E61755855714591BA58595DA
- priv key: 

Options for testing functionality onchain:
1. Mint TFSA, WMATA, or TRAX tokens using the minting functions of the respective token contracts
2. Swap TFSA into WMATA/TRAX or vice versa (requires TFSA in wallet)

To test via the app, please ensure npm, React.js, and Vite are installed and set up, then install the requirements from package.json. Build the app and launch to enter the frontend. Once launched:
1. Create an account (email, password, name); a real email is required, and you will be sent a 2FA code to confirm the account.
2. Connect a wallet (ideally one with TFSA/WMATA/TRAX preloaded)
3. View token balances on the homepage (the default page after login and wallet connection)
4. Click on a metro token to navigate to the Conversion page and convert between TFSA and that metro token

Token swapping via the frontend is not fully implemented at the moment (we ran out of time debugging wagmi async methods >.<), but the swapTokens method can be called onchain via Remix or another method (given a wallet with sufficient token balances).

## Experience Developing with Rootstock

- Really easy to get up and running; the EVM-compatability component makes it easy to deploy code and use wagmi functionality to interact.
- The Rootstock team demos and documentation were very helpful!

## Detailed Project Description

In selecting a project, our aim was to make something with real-world utility both for existing and new crypto users.

### Addressing Potential Questions and Concerns:
- What if people can just pay directly without buying metro-specific fare? E.g. in the NYC metro, users can just use a credit card directly to pay fare.
  - Not all metros have this; we are designing this with all metros in mind. Creating this network would allow users in the ecosystem to be rewarded from it. 
  - Employer subsidy case - employer isnt just going to give you cash.
- How does the volatility in price of ETH, BTC, other tokens that can be exchanged for TFSA impact the monetary value of TFSA? Will employers have to pay more to stock their employees commute accounts if BTC is up?
  - The TFSA has its own ecosystem meaning the price of the TFSA token will be dependent on the supply and demand of users using the ecosystem. Employers can also directly work with the issuer in which they wouldn't have to pay more and can still pay a fixed price.
- Is this only a use case for the metro system?
  - No, this can be expanded upon just the metro network, it can include bus, bicycle, other transportation forms, and other FSA type accounts. This can also be thought of as a concept in which specific ecosystems can have an umbrella like structure.
- Why would the transportation companies or governments approve this system change?
  - Users can still pay in fiat if they want to however this optimizes different metro systems across the country while also giving transportation companies an opportunity for another stream of revenue which is from LP rewards and potentially transaction fees onchain
- How would you make users and companies adopt your system?
  - Users and companies would adopt the system just like any other DeFi protocol or DApp that has a value use case, the opportunity of generating another stream of income while allowing users to utilize the full amount of funds on their metro cards provides a solution that can be built upon further.
