// script.js
const jobList = [
  { name: "Frontend Developer", location: "Bangalore", category: "Development", earn: "₹12 LPA" },
  { name: "Backend Developer", location: "Hyderabad", category: "Development", earn: "₹15 LPA" },
  { name: "UI/UX Designer", location: "Delhi", category: "Design", earn: "₹10 LPA" },
  { name: "Project Manager", location: "Mumbai", category: "Management", earn: "₹18 LPA" },
  { name: "Data Scientist", location: "Pune", category: "Data", earn: "₹20 LPA" },
  { name: "QA Engineer", location: "Chennai", category: "Quality Assurance", earn: "₹8 LPA" },
  { name: "Cloud Architect", location: "Noida", category: "Cloud", earn: "₹25 LPA" },
  { name: "DevOps Engineer", location: "Remote", category: "DevOps", earn: "₹14 LPA" },
  { name: "Product Manager", location: "Bangalore", category: "Management", earn: "₹22 LPA" },
  { name: "Tech Lead", location: "Mumbai", category: "Development", earn: "₹30 LPA" }
];

// Populate job table dynamically
const jobTable = document.getElementById("job-list");
jobList.forEach(job => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${job.name}</td>
    <td>${job.location}</td>
    <td>${job.category}</td>
    <td>${job.earn}</td>
  `;
  jobTable.appendChild(row);
});
