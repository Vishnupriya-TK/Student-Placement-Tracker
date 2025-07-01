
# 📊 Student Placement Tracker (CSV-Based)

A lightweight, offline-friendly placement tracker built with **HTML, CSS, and JavaScript**. Easily import student data, track placement status, generate summary messages, and export updated results — all stored securely in your browser using `localStorage`.

---

## 🎯 Features

* ✅ **CSV Upload**: Import student data via `.csv` (Reg No, Name)
* ✅ **Placement Tracking**: Select placed students via checkbox
* ✅ **Editable Fields**: Enter Company and LPA for selected students
* ✅ **Live Statistics**: Auto-calculate totals, placed %, and remaining
* ✅ **User Inputs**: Enter Interested & Eligible student counts manually
* ✅ **Summary Generator**: Create formatted message (copy to clipboard)
* ✅ **Export to CSV**: Save updated data for reuse
* ✅ **Reset All**: Clear local storage and UI
* ✅ **Responsive Design**: Mobile & desktop friendly (with media queries)

---

## 📂 Live Preview

https://student-placement-tracker-git-main-vishnu-priya-t-ks-projects.vercel.app

---

## 📁 File Structure

```
📁 placement-tracker/
├── index.html         → Main UI
├── styles.css         → Responsive styling
├── script.js          → App logic & localStorage
└── README.md          → Project info
```

---

## 🧪 How to Use

1. **Clone this repo** or [Download ZIP](https://github.com/Vishnupriya-TK/Student-Placement-Tracker.git)
2. Open `index.html` in any modern browser
3. Upload a `.csv` file like:

   ```
   regno,name
   1111,Abi
   1112,Arun
   1113,Renu
   ...
   ```
4. Select placed students via checkboxes
5. Fill in company and salary (LPA)
6. Enter year range, interested, and eligible counts
7. Click **“Copy Message”** to get formatted summary
8. Click **“Export to CSV”** to download updated file
9. Use **“Reset All”** to clear data (with confirmation)

---

## 📝 Sample Output Message

```
Greetings!

So far placed students:

1. Abi (Infosys - 6 LPA)
2. Arun (Zoho - 4.5 LPA)

Placement Statistics 2020–2024:
Total Students: 50
Interested: 45
Eligible: 45
Placed: 30
Placed %: 67%
Yet to Place: 15
```

---

## 📌 Dependencies

* 🚫 No frameworks or libraries required
* ⚙️ Works entirely with JavaScript and Browser APIs
* 💾 Persistent using `localStorage`

---


## 📬 Author

**Vishnu Priya Kannan**
📧 Contact me for improvements, suggestions, or collaboration!

---
## 📘 Sample Data

A sample CSV file is included for quick testing.

🔹 File: [`Book1.csv`]

---

> 🌟 *“Behind every checkbox is a dream fulfilled. This tracker isn't just about data — it's about destinies shaped, one student at a time.”*

