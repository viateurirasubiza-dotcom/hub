// Fetch data from JSON file

async function getData() {
    const res = await fetch("api/placeholder-data.json");
    const data = await res.json();
    return data;
}

async function loadScholarships() {
    const data = await getData();
    console.log("Scholarships:", data.scholarships);
}

async function loadJobs() {
    const data = await getData();
    console.log("Jobs:", data.jobs);
}
