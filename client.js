console.log('gg')

$(document).ready(readyNow);

let employeeArray = [];


function readyNow() {
    $('#submitButton').on('click', addToEmployeeTable)
    $('#submitButton').on('click', addUpTotalMonthlySalaries)
    $('#employeeInformation').on('click', '.deleteButton', deleteEmployeeInfo)
}

// Grab inputs and iterate over them in order to append to DOM
function addToEmployeeTable() {
    let firstName = $('#employeeFirstName').val();
    let lastName = $('#employeeLastName').val();
    let employeeID = $('#employeeID').val();
    let employeeTitle = $('#employeeTitle').val();
    let employeeAnnualSalary = $('#employeeSalary').val();
    let newEnteredEmployee = {
        fName: firstName,
        lName: lastName,
        id: employeeID,
        title: employeeTitle,
        salary: Number(employeeAnnualSalary),
    }
    employeeArray.push(newEnteredEmployee);
    $('#employeeInformation').empty();
    for(let i = 0; i < employeeArray.length; i++) {
        $('#employeeInformation').append(
            `<tr class="employeeTableData">
                <td>${employeeArray[i].fName}</td>
                <td>${employeeArray[i].lName}</td>
                <td>${employeeArray[i].id}</td>
                <td>${employeeArray[i].title}</td>
                <td>$${employeeArray[i].salary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>`
        )
    }
    $('#employeeFirstName').val('');
    $('#employeeLastName').val('');
    $('#employeeID').val('');
    $('#employeeTitle').val('');
    $('#employeeSalary').val('');
}

// calculate Monthly Salary Totals
function addUpTotalMonthlySalaries() {
    $('#totalMonthlyEmployeeSalaries').empty();
    let totalSalaries = 0;
    for(let j = 0; j < employeeArray.length; j++) {
        totalSalaries += employeeArray[j].salary;
    }
    totalMonthlyEmployeeSalaries = totalSalaries/12;
    $('#totalMonthlyEmployeeSalaries').append(Number(totalMonthlyEmployeeSalaries).toFixed(2));
    if(totalMonthlyEmployeeSalaries > 20000) {
        $('#totalMonthSalary').addClass('tooExpensive');
    }
}

// Delete data row when delete button is clicked
function deleteEmployeeInfo() {
    // $(this).closest('tr').remove();
    let deletedEmployee = $(this).parent().first('td');
    deletedEmployee.text('deleted');




   // redoAddEmployees();
}

/*
function redoAddEmployees() {
    $('#employeeInformation').empty();
    for(let i = 0; i < employeeArray.length; i++) {
        $('#employeeInformation').append(
            `<tr class="employeeTableData">
                <td>${employeeArray[i].fName}</td>
                <td>${employeeArray[i].lName}</td>
                <td>${employeeArray[i].id}</td>
                <td>${employeeArray[i].title}</td>
                <td>$${employeeArray[i].salary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>`
        )
    }
    addUpTotalMonthlySalaries();
}
*/