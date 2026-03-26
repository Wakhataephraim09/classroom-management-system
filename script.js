// LOAD FROM STORAGE
let students = JSON.parse(localStorage.getItem("students")) || [];

// ADD STUDENT
function addStudent() {
  let name = document.getElementById("studentName").value;

  if (name === "") {
    alert("Enter student name");
    return;
  }

  let student = {
    id: Date.now(),
    name: name
  };

  students.push(student);
  saveStudents();
  document.getElementById("studentName").value = "";

  displayStudents();
}

// DISPLAY STUDENTS
function displayStudents() {
  let list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach((student) => {
    let li = document.createElement("li");

    li.innerHTML = `
      <strong>${student.name}</strong>
      <br>
      ID: ${student.id}
      <br>
      <button onclick="deleteStudent(${student.id})">Delete</button>
    `;

    list.appendChild(li);
  });
}

// DELETE STUDENT
function deleteStudent(id) {
  students = students.filter(student => student.id !== id);
  saveStudents();
  displayStudents();
}

// SAVE TO LOCAL STORAGE
function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students));
}

// LOAD ON PAGE OPEN
displayStudents();
