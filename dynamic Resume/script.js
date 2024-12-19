document.addEventListener("DOMContentLoaded", () => {
    const educationContainer = document.getElementById("education-container");
    const workContainer = document.getElementById("work-container");
    const skillsContainer = document.getElementById("skills-container");
    const resumeOutput = document.getElementById("resume-output");
  
    let educationCount = 0;
    let workCount = 0;
    let skillCount = 0;
  
    document.getElementById("add-education").addEventListener("click", () => {
      const div = document.createElement("div");
      div.innerHTML = `
        <input type="text" placeholder="Degree or Certification: " required>
        <input type="text" placeholder="Institution Name:" required>
        <input type="text" placeholder="Year:" required>
      `;
      educationContainer.appendChild(div);
      educationCount++;
    });
  
    document.getElementById("add-work").addEventListener("click", () => {
      const div = document.createElement("div");
      div.innerHTML = `
        <input type="text" placeholder="Position:" required>
        <input type="text" placeholder="Company Name:" required>
        <input type="text" placeholder="Duration " required>
      `;
      workContainer.appendChild(div);
      workCount++;
    });
  
    document.getElementById("add-skill").addEventListener("click", () => {
      const div = document.createElement("div");
      div.innerHTML = `<input type="text" placeholder="Skill" required>`;
      skillsContainer.appendChild(div);
      skillCount++;
    });
  
    document.getElementById("resume-form").addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
  
      const education = Array.from(educationContainer.children).map((div) => ({
        degree: div.children[0].value,
        institution: div.children[1].value,
        year: div.children[2].value,
      }));
  
      const work = Array.from(workContainer.children).map((div) => ({
        position: div.children[0].value,
        company: div.children[1].value,
        duration: div.children[2].value,
      }));
  
      const skills = Array.from(skillsContainer.children).map((div) => div.children[0].value);
  
      generateResume({ name, email, phone, education, work, skills });
    });
  
    function generateResume(data) {
      resumeOutput.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <hr>
  
        <div class="resume-section">
          <h3>Education</h3>
          ${data.education
            .map((edu) => `<p><strong>${edu.degree}</strong> - ${edu.institution} (${edu.year})</p>`)
            .join("")}
        </div>
  
        <div class="resume-section">
          <h3>Work Experience</h3>
          ${data.work
            .map((work) => `<p><strong>${work.position}</strong> at ${work.company} (${work.duration})</p>`)
            .join("")}
        </div>
  
        <div class="resume-section">
          <h3>Skills</h3>
          <p>${data.skills.join(", ")}</p>
        </div>
      `;
    }
  });
  