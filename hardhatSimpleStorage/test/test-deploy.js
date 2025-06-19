// test/test-deploy.js

const { ethers } = require("hardhat"); // Assuming Hardhat is set up for testing

// describe is a Mocha function for defining a test suite
describe("SimpleStorage", function () {
  // <--- This is the string "SimpleStorage" for the suite title
  let SimpleStorageFactory;
  let simpleStorage;

  // beforeEach is a Mocha hook, runs before each 'it' block
  beforeEach(async function () {
    SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
    simpleStorage = await SimpleStorageFactory.deploy();
    // await simpleStorage.deployed(); // v5 syntax
    await simpleStorage.waitForDeployment(); // v6 syntax
  });

  // it is a Mocha function for defining an individual test case
  it("Should start with a favorite number of 0", async function () {
    // <--- This is the string for the test title
    const currentValue = await simpleStorage.retrieve();
    const expectedValue = "0"; // Assuming 0 is the initial value in your contract
    // Add an assertion, e.g., using Waffle's matchers if you have them set up
    // expect(currentValue.toString()).to.equal(expectedValue);
    console.log(`Initial value: ${currentValue.toString()}`);
  });

  it("Should update when we call store", async function () {
    // <--- Another test with a string title
    const expectedValue = "74343234";
    const transactionResponse = await simpleStorage.store(expectedValue);
    await transactionResponse.wait(1); // Wait for confirmation

    const updatedValue = await simpleStorage.retrieve();
    // expect(updatedValue.toString()).to.equal(expectedValue);
    console.log(`Updated value: ${updatedValue.toString()}`);
  });

  // You might also have nested describe blocks
  describe("Some other functionality", function () {
    it("should do something specific", async function () {
      // ...
    });
  });
});
