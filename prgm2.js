// JavaScript to show/hide the specific sections based on the selected entry type
function showForm() {
    const entryType = document.getElementById("entryType").value;

    // Get the form sections
    const studentSection = document.getElementById("studentSection");
    const employeeSection = document.getElementById("employeeSection");
    const facultySection = document.getElementById("facultySection");

    // Reset display of all sections
    studentSection.style.display = "none";
    employeeSection.style.display = "none";
    facultySection.style.display = "none";

    // Show the selected section
    if (entryType === "student") {
        studentSection.style.display = "block";
    } else if (entryType === "employee") {
        employeeSection.style.display = "block";
    } else if (entryType === "faculty") {
        facultySection.style.display = "block";
    }
}
