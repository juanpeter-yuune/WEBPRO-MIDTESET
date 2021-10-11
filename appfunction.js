const formAddStudent = document.querySelector('#form-add-student');
const students = document.querySelector('#students');
formAddStudent.addEventListener('submit', addStudent);

// input default data sutdent
if(localStorage.getItem("studentsData") == undefined || localStorage.getItem("studentsData") == "[]"){
    localStorage.setItem("studentsData", JSON.stringify(studentsData));
}
console.log(localStorage);
var allStudentsData = JSON.parse(localStorage.getItem("studentsData"));

// add student to list
function addStudent(e) {
	e.preventDefault();

	// input data student
	const NIM = document.querySelector('#NIM').value;
	const fullName = document.querySelector('#fullName').value;
	var gender = '';
	if(document.getElementById('Male').checked){
		gender = "Male";
	} else {
		gender = "Female";
	}
	const fakultas = document.querySelector('#selfaculty').value;
	const study = document.querySelector('#selprodi').value;

	// notifikasi mengenai form
	if(NIM=="" || fullName=="" || gender=="" || fakultas=="0" || study=="0"){
		alert("The Form is Incorrect");
		return;
	}

	// transfer form into localstorage
	var obj = {id:studentsData.length+1, NIM:NIM, fullName:fullName, gender:gender, fakultas:fakultas, study:study};
	allStudentsData.push(obj)
	localStorage.setItem("studentsData", JSON.stringify(allStudentsData));
	console.log(localStorage);
	FillStudentList();

	// clear form fields
	document.querySelector('#NIM').value = '';
	document.querySelector('#fullName').value = '';
	document.getElementsByName('gender').value = '';
	document.querySelector('#selfaculty').value = '0';
	var options = $("#selfaculty").data('options').filter('[class=0]');
	$('#selprodi').html(options);
}

// filter by name
function FilterName() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("nameSearch");
	filter = input.value.toUpperCase();
	table = document.getElementById("students");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByClassName("name")[0];
		if (td) {
			txtValue = td.textContent || td.innerText || td.value;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

//filter by faculty filter
function FilterFaculty() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("selfaculty2");
	filter = input.value.toUpperCase();
	table = document.getElementById("students");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByClassName("fakultas")[0];
		if (td) {
			txtValue = td.textContent || td.innerText || td.value;
			if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "0") {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

//filter by program study filter
function FilterStudy() {
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("selprodi2");
	filter = input.value.toUpperCase();
	table = document.getElementById("students");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByClassName("study")[0];
		if (td) {
			txtValue = td.textContent || td.innerText || td.value;
			if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == "0") {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}

//function for filling list
function FillStudentList() {
	$("#students tr").remove(); 
	for (var i = 0; i < allStudentsData.length; i++) {
		var row = students.insertRow(students.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		var cell4 = row.insertCell(3);
		var cell5 = row.insertCell(4);
		var cell6 = row.insertCell(5);
		cell1.innerHTML = allStudentsData[i].NIM;
		cell2.innerHTML = allStudentsData[i].fullName;
		cell2.className = 'name';
		cell3.innerHTML = allStudentsData[i].gender;
		cell4.innerHTML = allStudentsData[i].fakultas;
		cell4.className = 'fakultas';
		cell5.innerHTML = allStudentsData[i].study;
		cell5.className = 'study';
		cell6.innerHTML = '<button class="btn btn-danger btn-sm float-center remove" onclick="DelRow(this)">Delete</button>';
	}

}

// delete a student
function DelRow(obj) {
	var RowNum = obj.closest('tr').rowIndex - 1;
    if (confirm("Are you sure to delete this student?")) {
		StoredStudentsData.splice(RowNum, 1);
		localStorage.setItem("studentsData", JSON.stringify(allStudentsData));
		console.log(localStorage);
		FillStudentList();
    } else {
    }
}

