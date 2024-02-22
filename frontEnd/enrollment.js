document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('enrollmentForm');
    const tbody = document.querySelector('#outputTable tbody');

    function addStudentToTable(student) {
        Object.entries(student).forEach(([field, value]) => {
            const row = tbody.insertRow();
            const fieldCell = row.insertCell();
            const valueCell = row.insertCell();
            fieldCell.textContent = field.replace(/([A-Z])/g, ' $1').trim(); // Add space before capital letters for better readability
            valueCell.textContent = value;
        });

        
        
    }


   
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = {
            firstName: document.getElementById('fname').value,
            middleName: document.getElementById('mname').value,
            lastName: document.getElementById('lname').value,
            totalFees: document.getElementById('fees').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            classAdmission: document.getElementById('classAdmission').value,
            address: document.getElementById('address').value,
        };
        tbody.innerHTML = '';
        predefinedStudents.forEach(student => {
            addStudentToTable(student);
        });


        addStudentToTable(formData);
        document.getElementById('fname').value = '';
        document.getElementById('mname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('fees').value = '';
        document.getElementById('age').value = '';
        document.getElementById('gender').value = '';
        document.getElementById('classAdmission').value = '';
        document.getElementById('address').value = '';
    });
});
