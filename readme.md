

## 📘 Solidity Fundamentals — Notes & Concepts

### 🚀 Gas Fees in Solidity Functions

* **`pure` and `view` functions** do **not** cost gas when called **externally**.
* **Gas is only consumed** when:

  * A function **modifies the blockchain state**.
  * A **non-state-changing** function (like `pure`) is **called from another function that does** change state.

| Function Type | State Read | State Write | Gas Used When Called Externally |
| ------------- | ---------- | ----------- | ------------------------------- |
| `view`        | ✅          | ❌           | ❌ (no gas)                      |
| `pure`        | ❌          | ❌           | ❌ (no gas)                      |
| `non-view`    | ✅ / ❌      | ✅           | ✅ (gas needed)                  |

> 💡 *Note: If a state-changing function calls a `pure` or `view` function internally, gas will be charged as part of the overall transaction.*

---

### 🔑 `public` Variables and Getters

* Declaring a state variable as `public` **automatically creates a getter function** for it.

Example:

```solidity
uint256 public totalSupply;
```

This generates:

```solidity
function totalSupply() public view returns (uint256) {}
```

---

### 🧠 EVM Data Locations

The Ethereum Virtual Machine (EVM) has different types of data storage:

| Data Location | Description                                                              |
| ------------- | ------------------------------------------------------------------------ |
| `memory`      | Temporary and modifiable. Exists only during function execution.         |
| `storage`     | Persistent. State variables are stored here. Lives on the blockchain.    |
| `calldata`    | Temporary and **read-only**. Used for function inputs in external calls. |

> ℹ️ `memory`, `calldata`, and `storage` **only apply to** complex data types like `arrays`, `structs`, and `mappings`.
> For these types, you must specify the data location in function parameters.

Example:

```solidity
function updateName(string memory _name) public {
    // ...
}
```

---

### 🧩 Composability in Smart Contracts

* **Composability** means smart contracts can **interact** and **build on top of each other**.
* Contracts can import and call functions from other contracts:

Example:

```solidity
import "./MathLibrary.sol";

contract MyContract {
    // Use functions from MathLibrary
}
```

> 🤝 This design allows for modular, reusable, and interoperable smart contracts — one of the core strengths of Ethereum.

---

### 📂 Summary of Key Concepts

* `pure` / `view` functions don’t cost gas unless called by a gas-consuming function.
* `public` variables get free getter functions.
* Use `memory`, `storage`, or `calldata` carefully for data location — especially with `string`, `array`, and `struct`.
* Smart contracts are composable and can call one another via imports.

---



