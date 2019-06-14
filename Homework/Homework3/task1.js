function Account(number, owner, type, pin, balance, expiry_date) {
    this.number = number;
    this.owner = owner;
    this.type = type;
    this.pin = pin;
    this.balance = balance;
    this.expiry_date = expiry_date;
}

Account.prototype.getNumber = function() {
    return this.number;
}

Account.prototype.getOwner = function() {
    return this.owner;
}

Account.prototype.getExpirydate = function() {
    return this.expiry_date;
}


function CurrentAccount() {
    Account.apply(this, arguments);
    this.type_of_user;
}

function HistoryAccount() {
    Account.apply(this, arguments);
    this.transact_date;
    this.amount;
}

CurrentAccount.prototype.create = function(arguments) {
    var new_acc = new CurrentAccount(
        this.number, this.owner, this.type, this.pin, this.balance, this.expiry_date)

    new_acc.number = this.number + 1;
    new_acc.owner = 'New ' + this.owner;
    return new_acc;
}

CurrentAccount.prototype.update = function(arguments) {
    if (this.type == 'deb') {
        this.type = 'cred'
    } else { this.type = 'deb' }
}

CurrentAccount.prototype.read = function(arguments) {
    /* TODO*/
}

CurrentAccount.prototype.delete = function(arguments) {
    Object.keys(this).forEach(key => this[key] = null);
}

var acc1 = new CurrentAccount(12345, 'Ivan', 'deb', 1234, 100, "20.07.2019", 'block');
var acc2 = new CurrentAccount(55555, 'Peter', 'deb', 4321, 1000, "21.07.2019");
var acc3 = new CurrentAccount(77777, 'Serge', 'deb', 7890, 700, "22.07.2019");

console.log(acc1);
console.log(acc2);
console.log(acc3);

acc1.update();
console.log(acc1);

var acc4 = acc1.create();
console.log(acc4);

acc4.delete();
console.log(acc4);