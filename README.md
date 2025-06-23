# ⏱️ TimeLockedWallet Smart Contract

A Solidity-based smart contract that allows users to lock ETH until a specified future timestamp. Only the original depositor (owner) can withdraw the funds once the unlock time has passed.

---

## 🧠 Features

- **ETH Time Lock**: Lock ETH until a specified timestamp.
- **Owner-only Withdrawals**: Only the owner can withdraw after the lock period.
- **Unlock Time Validation**: Prevents setting unlock time in the past.
- **Secure & Simple**: Minimal logic to ensure transparency and safety.

---

## 🛠️ Tech Stack

- [Solidity](https://soliditylang.org/)
- [Hardhat](https://hardhat.org/)
- [Ethers.js](https://docs.ethers.org/)
- [TypeChain](https://github.com/dethcrypto/TypeChain)
- [Mocha + Chai](https://mochajs.org/)

---

## 📁 Project Structure

```bash
Time-Locked-Wallet-Smart-Contract/
├── contracts/
│   └── TimeLockedWallet.sol       # Main contract
├── test/
│   └── TimeLockedWallet.test.ts   # Hardhat test suite
├── typechain-types/               # Auto-generated TypeScript bindings
├── hardhat.config.ts              # Hardhat configuration
└── README.md                      # Project documentation
