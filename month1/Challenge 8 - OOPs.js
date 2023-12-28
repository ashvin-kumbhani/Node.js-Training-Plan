/* 
You are tasked with building a simple banking system using Object-Oriented Programming (OOP) principles. Create a set of classes to represent the entities involved in a banking system, and implement various functionalities.

Create a class Account with properties for accountNumber, accountHolder, and balance. Include a method displayInfo to display information about the account.

Create a class SavingsAccount that extends Account. Add a property for interestRate and a method calculateInterest that calculates and returns the interest for a given period.

Create a class CurrentAccount that extends Account. Add a property for overdraftLimit. Implement a method withdraw that allows withdrawal up to the overdraft limit.

Create a class Bank that contains an array of accounts. Include methods to add an account, display information for all accounts, and find an account by account number.
*/

// Solution
// Account class
class Account {
    constructor(accountNumber, accountHolder, balance) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    displayInfo() {
      console.log(`Account Number: ${this.accountNumber}, Holder: ${this.accountHolder}, Balance: $${this.balance}`);
    }
  }
  
  // SavingsAccount class
  class SavingsAccount extends Account {
    constructor(accountNumber, accountHolder, balance, interestRate) {
      super(accountNumber, accountHolder, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest(period) {
      return (this.balance * this.interestRate * period) / 100;
    }
  }
  
  // CurrentAccount class
  class CurrentAccount extends Account {
    constructor(accountNumber, accountHolder, balance, overdraftLimit) {
      super(accountNumber, accountHolder, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount <= this.balance + this.overdraftLimit) {
        this.balance -= amount;
        console.log(`Withdrawal successful. Remaining balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds.");
      }
    }
  }
  
  // Bank class
  class Bank {
    constructor() {
      this.accounts = [];
    }
  
    addAccount(account) {
      this.accounts.push(account);
    }
  
    displayAllAccounts() {
      this.accounts.forEach((account) => account.displayInfo());
    }
  
    findAccount(accountNumber) {
      return this.accounts.find((account) => account.accountNumber === accountNumber);
    }
  }
  
  // Example usage
  const bank = new Bank();
  
  const savingsAccount = new SavingsAccount(1001, "Alice", 5000, 2);
  const currentAccount = new CurrentAccount(1002, "Bob", 3000, 1000);
  
  bank.addAccount(savingsAccount);
  bank.addAccount(currentAccount);
  
  savingsAccount.displayInfo();
  console.log("Interest for 3 months:", savingsAccount.calculateInterest(3));
  
  currentAccount.displayInfo();
  currentAccount.withdraw(4000);
  
  console.log("\nAll Accounts:");
  bank.displayAllAccounts();
  
  console.log("\nFind Account by Account Number:");
  const foundAccount = bank.findAccount(1002);
  foundAccount.displayInfo();
  