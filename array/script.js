var users = [];
function addUser() {
    var name = prompt("Enter user name:");
    var id = prompt("Enter unique user ID:");
    var balance = Number(prompt("Enter initial balance:"));

    var user = {
        name: name,
        id: id,
        balance: balance
    };
    users.push(user);
    console.log("User Added Successfully:");
    console.table(users);
}
function editUserBalanceById() {
    var searchId = prompt("Enter user ID to edit balance:");
    var newBalance = Number(prompt("Enter the new balance:"));
    var targetuser = users.find(function(user) {
        return user.id === searchId;
    });

    if (targetuser) {
        targetuser.balance = newBalance;
        console.log("Balance Updated Successfully:");
        console.table(users);
    } else {
        alert("User not found!");
    }
}
function transferBalance() {
    var fromID = prompt("Enter sender ID (From):");
    var toID = prompt("Enter receiver ID (To):");
    var balanceToTransfer = Number(prompt("Enter amount to transfer:"));
    var sender = users.find(function(user) {
        return user.id === fromID;
    });

    var receiver = users.find(function(user) {
        return user.id === toID;
    });

    if (sender && receiver) {
        if (sender.balance >= balanceToTransfer) {
            sender.balance -= balanceToTransfer;
            receiver.balance += balanceToTransfer;
            console.log("Transfer Completed Successfully:");
            console.table(users);
        } else {
            alert("Sender doesn't have enough balance!");
        }
    } else {
        alert("Sender or Receiver ID is incorrect!");
    }
}
function deleteUserById() {
    var targetId = prompt("Enter user ID to delete:");
    var userIndex = users.findIndex(function(user) {
        return user.id === targetId;
    });

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        console.log("User Deleted Successfully:");
        console.table(users);
    } else {
        alert("User not found!");
    }
}
addUser();
editUserBalanceById();
transferBalance();
deleteUserById();