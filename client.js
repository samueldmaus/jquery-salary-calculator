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
    // $(this).closest('tr').remove(); //removes info from DOM
    let deletedEmployee = $(this).closest('tr');
    console.log(employeeArray.splice(deletedEmployee.data('deletedInfo'), 1))
    // redoAddEmployees();
}


function redoAddEmployees() {
    $('#employeeInformation').empty();
    for(let k = 0; k < employeeArray.length; k++) {
        $('#employeeInformation').data('deletedInfo', i);
        $('#employeeInformation').append(
            `<tr class="employeeTableData">
                <td>${employeeArray[k].fName}</td>
                <td>${employeeArray[k].lName}</td>
                <td>${employeeArray[k].id}</td>
                <td>${employeeArray[k].title}</td>
                <td>$${employeeArray[k].salary}</td>
                <td><button class="deleteButton">Delete</button></td>
            </tr>`
        )
    }
    addUpTotalMonthlySalaries();
}
