// Initialize empty array
let studentData = [];

// Load from localStorage on page load
window.onload = function () {
    const stored = localStorage.getItem("studentData");
    if (stored) {
        studentData = JSON.parse(stored);
        renderTable();
        updateCounts();
    }
};

// Upload and parse CSV
document.getElementById("csvFile").addEventListener('change', function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const lines = event.target.result.trim().split('\n');
        const headers = lines[0].split(',');

        // Check if it's an exported CSV with full data
        const isFullData = headers.includes('selected');

        studentData = lines.slice(1).map(line => {
            const [regno, name, selected, company, salary] = line.split(',');

            return {
                regno: regno.trim(),
                name: name.trim(),
                selected: isFullData ? selected === 'true' : false,
                company: isFullData ? company?.trim() : '',
                salary: isFullData ? salary?.trim() : ''
            };
        });

        saveToLocalStorage();
        renderTable();
        updateCounts();
    };


    reader.readAsText(file);
});

// Render Table
function renderTable() {
    let html = '<table><thead><tr><th>Select</th><th>Reg No</th><th>Name</th><th>Company</th><th>Salary (LPA)</th></tr></thead><tbody>';

    studentData.forEach((s, i) => {
        html += `<tr>
          <td><input type="checkbox" onchange="toggleSelect(${i}, this.checked)" ${s.selected ? 'checked' : ''}></td>
          <td data-label="Reg No">${s.regno}</td>
          <td data-label="Name">${s.name}</td>
          <td data-label="Company"><input type="text" value="${s.company}" ${!s.selected ? 'disabled' : ''} onchange="updateField(${i}, 'company', this.value)" /></td>
          <td data-label="Salary"><input type="number" value="${s.salary}" ${!s.selected ? 'disabled' : ''} onchange="updateField(${i}, 'salary', this.value)" /></td>
        </tr>`;
    });

    html += '</tbody></table>';
    document.getElementById('tableContainer').innerHTML = html;
}

// Toggle checkbox
function toggleSelect(i, checked) {
    studentData[i].selected = checked;

    if (!checked) {
        studentData[i].company = '';
        studentData[i].salary = '';
    }

    saveToLocalStorage();
    renderTable();
    updateCounts();
}

// Update field
function updateField(i, field, value) {
    studentData[i][field] = value;
    saveToLocalStorage();
}

// Count summary
function updateCounts() {
    const total = studentData.length;
    const placed = studentData.filter(s => s.selected).length;
    const yetToPlace = total - placed;

    document.getElementById('summaryCounts').innerText =
        `Total: ${total} | Placed: ${placed} | Yet to be Placed: ${yetToPlace}`;
}

// Copy message
function copyMessage() {
    const year = document.getElementById('yearRange').value || 'N/A';

    const placed = studentData.filter(s => s.selected && s.company);
    const total = studentData.length;
    const placedCount = placed.length;

    const interestedInput = document.getElementById('interestedCount').value;
    const eligibleInput = document.getElementById('eligibleCount').value;

    const interested = interestedInput ? parseInt(interestedInput) : total;
    const eligible = eligibleInput ? parseInt(eligibleInput) : total;
    const yetToPlace = eligible - placedCount;
    const percentage = eligible > 0 ? Math.round((placedCount / eligible) * 100) : 0;

    let message = `Greetings!\n\nSo far placed students:\n\n`;

    placed.forEach((s, i) => {
        message += `${i + 1}. ${s.name} (${s.company})\n`;
    });

    message += `\nPlacement Statistics ${year}:\n`;
    message += `Total Students: ${total}\n`;
    message += `Interested: ${interested}\n`;
    message += `Eligible: ${eligible}\n`;
    message += `Placed: ${placedCount}\n`;
    message += `Placed %: ${percentage}%\n`;
    message += `Yet to Place: ${yetToPlace}\n`;

    document.getElementById('outputMessage').value = message;

    navigator.clipboard.writeText(message)
        .then(() => alert("Message copied to clipboard!"))
        .catch(() => alert("Failed to copy message."));
}

function exportToCSV() {
    let csv = "regno,name,selected,company,salary\n";
    studentData.forEach(s => {
        csv += `${s.regno},${s.name},${s.selected},${s.company},${s.salary}\n`;
    });

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'student_placement_data.csv';
    a.click();
}
function resetData() {
    if (confirm("Are you sure you want to reset all data?")) {
        localStorage.removeItem("studentData");
        studentData = [];
        renderTable();
        updateCounts();
        document.getElementById('outputMessage').value = "";
        alert("All data has been cleared.");
    }
}


// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem("studentData", JSON.stringify(studentData));
}
