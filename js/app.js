"use strict";

// =============Start This Function To Determine Value Of Salary By Level

function levelSalary(level) {
    let totalSalary = 0;

    switch (level) {
        case "Senior":
            totalSalary = randomSalary(1500, 2000);
            break;
        case "Mid-Senior":
            totalSalary = randomSalary(1000, 1500);
            break;
        case "Junior":
            totalSalary = randomSalary(500, 1000);
            break;
        default:
            totalSalary = 555555;
            break;
    }
    return totalSalary;
}

// =============End This Function To Determine Value Of Salary By Level

//  ===============Start This Function To Create Random Salary

function randomSalary(min, max) {
    let myRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return myRandom;
}

//  ===============End This Function To Create Random Salary

// ========================Start Constructor Function For Employee

let employees = [];

function Employee(empId, fullName, department, level, imageUrl, salary) {
    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = salary;
    employees.push(this);
}

// =========================End Constructor Function For Employee

// ===========Start Prototype Function For Calculating The Salary

Employee.prototype.netSalary = function() {
    //Calculate the salary depends on the employee level
    let salary = levelSalary(this.level);

    //Calculate the net salary where the tax percent is 7.5
    let netSalary = salary - salary * (7.5 / 100);

    this.salary = netSalary;

    return this.salary;
};

// ===========End Prototype Function For Calculating The Salary

// ===========Start Prototype Function To Render Each Employee Name With Their Salary In The Home Page

Employee.prototype.render = function() {

    document.write(`       
     <table>
    <tr>
        <td>${this.fullName}</td>
        <td>${this.netSalary()}</td>
    </tr>  
</table>`);

};

// ===========End Prototype Function To Render Each Employee Name With Their Salary In The Home Page


//==============================================Start Main Code


//========Start Create Employees Instances

let emp1 = new Employee(1000, "Ghazi Samer", "Administration", "Senior");
let emp2 = new Employee(1001, "Lana Ali", "Finance", "Senior");
let emp3 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior");
let emp4 = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior");
let emp5 = new Employee(1004, "Omar Zaid", "Development", "Senior");
let emp6 = new Employee(1005, "Rana Saleh", "Development", "Junior");
let emp7 = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior");

//========End Create Employees Instances



emp1.render();
emp2.render();
emp3.render();
emp4.render();
emp5.render();
emp6.render();
emp7.render();



//==============================================End Main Code