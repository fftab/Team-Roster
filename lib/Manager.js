// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Constructors are like cookie cutters/molds :-)
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // Grabbing props/methods of extended Class
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;