"use strict";

let form = document.getElementById("form");
let empDiv = document.getElementById("employees");



//========Start Function To Save Data In LocalStorage

function saveDataOnLocalStorage() {

    let stringifyData = JSON.stringify(Employee.allEmp);
    let stringifyDepartment = JSON.stringify(department)
    localStorage.setItem("employees", stringifyData);
    localStorage.setItem("department", stringifyDepartment);

}




//========End Function To Save Data In LocalStorage








//  ===============Start This Function To Generate Unique Number

function generateUniqueNumber(params) {
    let uniqueNumber = Math.floor(1000 + Math.random() * 9000);
    return uniqueNumber;
}

//  ===============End This Function To Generate Unique Number

//  ===============Start This Function To Create Random Salary

function randomSalary(min, max) {
    let myRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return myRandom;
}

//  ===============End This Function To Create Random Salary

// ========================Start Constructor Function For Employee

Employee.allEmp = [];

function Employee(empId, fullName, department, level, imageUrl) {
    this.empId = empId;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageUrl = imageUrl;
    this.salary = this.levelSalary(this.level);
    Employee.allEmp.push(this);
}

let department = ["Administration", "Marketing", "Development", "Finance"];
let level = ["Senior", "Mid-Senior", "Junior"];

// =========================End Constructor Function For Employee

// =============Start This Prototype To Determine Value Of Salary By Level

Employee.prototype.levelSalary = function(level) {
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
    //Calculate the net salary where the tax percent is 7.5
    let netSalary = totalSalary - totalSalary * (7.5 / 100);

    this.salary = netSalary;
    return netSalary;
};

// =============End This Prototype To Determine Value Of Salary By Level

// ===========Start Prototype Function To Render Each Employee Name With Their Salary In The Home Page

Employee.prototype.render = function() {
    let cardDiv = document.createElement("div");
    empDiv.appendChild(cardDiv);

    let background = document.createElement("div");
    background.style.backgroundColor = "#9AD0EC";
    background.style.color = "white";
    background.style.width = "300px";
    background.style.padding = "20px";
    background.style.margin = "20px";
    console.log(background);
    cardDiv.appendChild(background);

    let image = document.createElement("img");
    image.setAttribute("src", this.imageUrl);
    background.appendChild(image);
    image.style.marginLeft = "40px";

    image.width = "200";
    image.height = "200";

    let description = document.createElement("pre");
    description.textContent = `
    Name: ${this.fullName}-ID:${this.empId}

Department:${this.department}-Level:${this.level}  

                 ${generateUniqueNumber()} `;

    background.appendChild(description);




    //     document.write(`
    //      <table>
    //     <tr>
    //         <td>${this.fullName}</td>
    //         <td>${this.levelSalary(this.level)}</td>
    //     </tr>
    // </table>`);
};

// ===========End Prototype Function To Render Each Employee Name With Their Salary In The Home Page

//==============================================Start Main Code

//========Start Create Employees Instances

let emp1 = new Employee(
    1000,
    "Ghazi Samer",
    department[0],
    level[0],
    "../assets/Ghazi.jpg"
);
let emp2 = new Employee(
    1001,
    "Lana Ali",
    department[3],
    level[0],
    "../assets/Hadi.jpg"
);
let emp3 = new Employee(
    1002,
    "Tamara Ayoub",
    department[1],
    level[0],
    "../assets/Lana.jpg"
);
let emp4 = new Employee(
    1003,
    "Safi Walid",
    department[0],
    level[1],
    "../assets/Omar.jpg"
);
let emp5 = new Employee(
    1004,
    "Omar Zaid",
    department[2],
    level[0],
    "../assets/Rana.jpg"
);
let emp6 = new Employee(
    1005,
    "Rana Saleh",
    department[2],
    level[2],
    "../assets/Safi.jpg"
);
let emp7 = new Employee(
    1006,
    "Hadi Ahmad",
    department[3],
    level[1],
    "../assets/Tamara.jpg"
);

//========End Create Employees Instances



console.log(Employee.allEmp);

for (let i = 0; i < Employee.allEmp.length; i++) {
    Employee.allEmp[i].render();
}

// emp1.render();
// emp2.render();
// emp3.render();
// emp4.render();
// emp5.render();
// emp6.render();
// emp7.render();

//==============================================End Main Code













//================Start Event Listner To Get Data From Form

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event);

    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let imgUrl = event.target.imageUrl.value;

    console.log(fullName);
    console.log(department);
    console.log(level);
    console.log(imgUrl);



    let newEmp = new Employee(
        generateUniqueNumber(),
        fullName,
        department,
        level,
        imgUrl,
    );
    // Employee.allEmp.push(newEmp); //we don't need it because When i create a new emp it will push to Employee.allEmp array


    saveDataOnLocalStorage();


    newEmp.render();

    // for (let i = 0; i < Employee.allEmp.length; i++) {
    //     Employee.allEmp[i].render();
    // }


}

//================End Event Listner To Get Data From Form