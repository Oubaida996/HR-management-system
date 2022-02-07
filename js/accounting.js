"use strict";

let parent = document.getElementById("parent");

let departmentData; // recive data from localstorge
let empData; // recive data from localstorge

getDataFromLocalStorge();
//========Start Function To Get Data From LocalStorage

function getDataFromLocalStorge() {
    let getData = localStorage.getItem("employees");
    let getDepartment = localStorage.getItem("department");

    let parseData = JSON.parse(getData);
    let parseDepartment = JSON.parse(getDepartment);
    empData = parseData;
    departmentData = parseDepartment;
}

//=============Start Construcotr For Information Employees Order Department

InfoDepartment.allInfoDepartment = [];

function InfoDepartment(noOfEmployees, department, totalSalary, avgSalary) {
    this.noOfEmployees = noOfEmployees;
    this.department = department;
    this.totalSalary = totalSalary;
    this.avgSalary = avgSalary;
    InfoDepartment.allInfoDepartment.push(this);
}

//=============End Construcotr For Information Employees Order Department

//======Start Function for Calculate No. of Employees and Total salary and Avg. Salary
let empAdministration = 0;
let empMarketing = 0;
let empDevelopment = 0;
let empFinance = 0;

let totalSalaryAdministration = 0;
let totalSalaryMarketing = 0;
let totalSalaryDevelopment = 0;
let totalSalaryFinance = 0;

let avgSalaryAdministration = 0;
let avgSalaryMarketing = 0;
let avgSalaryDevelopment = 0;
let avgSalaryFinance = 0;

function EmployeesStatistics() {
    for (let i = 0; i < empData.length; i++) {
        if (empData[i].department == "Administration") {
            empAdministration = empAdministration + 1;
            totalSalaryAdministration = totalSalaryAdministration + empData[i].salary;
        } else if (empData[i].department == "Marketing") {
            empMarketing = empMarketing + 1;
            totalSalaryMarketing = totalSalaryMarketing + empData[i].salary;
        } else if (empData[i].department == "Development") {
            empDevelopment = empDevelopment + 1;
            totalSalaryDevelopment = totalSalaryDevelopment + empData[i].salary;
        } else if (empData[i].department == "Finance") {
            empFinance = empFinance + 1;
            totalSalaryFinance = totalSalaryFinance + empData[i].salary;
        }
    }

    avgSalaryAdministration = (
        totalSalaryAdministration / empAdministration
    ).toFixed(2);
    avgSalaryMarketing = (totalSalaryMarketing / empMarketing).toFixed(2);
    avgSalaryDevelopment = (totalSalaryDevelopment / empDevelopment).toFixed(2);
    avgSalaryFinance = (totalSalaryFinance / empFinance).toFixed(2);

    let administration = new InfoDepartment(
        empAdministration,
        "Administration",
        totalSalaryAdministration,
        avgSalaryAdministration
    );

    let marketing = new InfoDepartment(
        empMarketing,
        "Marketing",
        totalSalaryMarketing,
        avgSalaryMarketing
    );
    let development = new InfoDepartment(
        empDevelopment,
        "Development",
        totalSalaryDevelopment,
        avgSalaryDevelopment
    );
    let finance = new InfoDepartment(
        empFinance,
        "Finance",
        totalSalaryFinance,
        avgSalaryFinance
    );
}

//======Start Function for Calculate No. of Employees and Total salary and Avg. Salary

//========End Function To Get Data From  LocalStorage

EmployeesStatistics(); //Recive All Data To Append It In Table

//========Start Function TO Calculate Net Total

let netTotalNoOfEmployees = 0;
let netTotalSalary = 0;
let netTotalAvgSalary = 0;

function netTotal() {
    for (let i = 0; i < InfoDepartment.allInfoDepartment.length; i++) {
        netTotalNoOfEmployees =
            netTotalNoOfEmployees + InfoDepartment.allInfoDepartment[i].noOfEmployees;
        netTotalSalary =
            netTotalSalary + InfoDepartment.allInfoDepartment[i].totalSalary;
        netTotalAvgSalary =
            Number(netTotalAvgSalary) + Number(InfoDepartment.allInfoDepartment[i].avgSalary);

    }
}

netTotal();

//========End Function TO Calculate Net Total

//======================================================Start  Render Table

let table = document.createElement("table");
table.style.width = "100%";
parent.appendChild(table);

//========Start  Header Of Table

let tr = document.createElement("tr");
table.appendChild(tr);
// th1
let th1 = document.createElement("th");
th1.textContent = "Department";
tr.appendChild(th1);
// th2
let th2 = document.createElement("th");
th2.textContent = "# of employees";
tr.appendChild(th2);
// th3
let th3 = document.createElement("th");
th3.textContent = "Total Salary";
tr.appendChild(th3);
// th4
let th4 = document.createElement("th");
th4.textContent = "Average";
tr.appendChild(th4);

//========End  Header Of Table

//============Start Body Of Table

for (let i = 0; i < InfoDepartment.allInfoDepartment.length; i++) {
    let tr2 = document.createElement("tr");
    table.appendChild(tr2);

    // td1 Department
    let td1 = document.createElement("td");
    td1.textContent = InfoDepartment.allInfoDepartment[i].department;
    tr2.appendChild(td1);
    let o = `emp${departmentData[i]}`;
    // td2 No of Employee
    let td2 = document.createElement("td");
    td2.textContent = InfoDepartment.allInfoDepartment[i].noOfEmployees;
    tr2.appendChild(td2);

    // td3  totalSalary
    let td3 = document.createElement("td");
    td3.textContent = InfoDepartment.allInfoDepartment[i].totalSalary;
    tr2.appendChild(td3);

    // td4 average Salary
    let td4 = document.createElement("td");
    td4.textContent = InfoDepartment.allInfoDepartment[i].avgSalary;
    tr2.appendChild(td4);
} //end for loop

//============End Body Of Table

//============Start Footer Of Table

let tableFooter = document.createElement("tfoot");
let trFooter = document.createElement("tr");

table.appendChild(tableFooter);
tableFooter.appendChild(trFooter);

// Total
let tdFooter = document.createElement("td");
tdFooter.textContent = "Total";
trFooter.appendChild(tdFooter);
//Total no of employees
let tdNo = document.createElement("td");
tdNo.textContent = netTotalNoOfEmployees;
trFooter.appendChild(tdNo);

//Total Salary
let tdSalary = document.createElement("td");
tdSalary.textContent = netTotalSalary.toFixed(3);
trFooter.appendChild(tdSalary);

//Total Avg Salary
let tdAvg = document.createElement("td");
tdAvg.textContent = netTotalAvgSalary.toFixed(3); //I have a problem here ****
trFooter.appendChild(tdAvg);

//============End Footer Of Table

//=============================================================End  Render Table