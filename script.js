let students = [];

function addStudent() {
  let name = document.getElementById("studentName").value;

  if (name === "") {
    alert("Enter student name");
    return;
  }

  students.push(name);
  document.getElementById("studentName").value = "";

  displayStudents();
}

function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student, index) => {
    let li = document.createElement("li");
    li.innerHTML = student + 
      ` <button onclick="deleteStudent(${index})">Delete</button>`;
    list.appendChild(li);
  });
}

function deleteStudent(index) {
  students.splice(index, 1);
  displayStudents();
}
