let skills = ["HTML", "CSS", "JavaScript"];
let projects = [
    { title: "My First Website", desc: "A simple personal website.", tech: "HTML, CSS", link: "#" }
];
let experience = [
    { role: "Intern", company: "Tech Co", period: "2023", desc: "Learned web development." }
];
let education = [
    { degree: "B.Tech Computer Science", school: "University of Tech", startYear: "2020", endYear: "2024" }
];
let profilePhoto = "";
let currentTheme = "dark";

function updatePreview() {
    let name = document.getElementById('input-name').value;
    let role = document.getElementById('input-role').value;
    let about = document.getElementById('input-about').value;
    let github = document.getElementById('input-github').value;
    let linkedin = document.getElementById('input-linkedin').value;
    let email = document.getElementById('input-email').value;

    let preview = document.getElementById('preview-container');

    preview.className = "portfolio-preview theme-" + currentTheme;

    let html = '<div class="portfolio-content">';

    html += '<header class="portfolio-header">';
    if (profilePhoto) {
        html += '<img src="' + profilePhoto + '" class="profile-img" alt="Profile Photo">';
    }
    html += '<div class="header-text">';
    html += '<h1>' + name + '</h1>';
    html += '<h2>' + role + '</h2>';
    html += '<p>' + about + '</p>';
    html += '<div class="social-links">';
    if (github) html += '<a href="' + github + '">GitHub</a> ';
    if (linkedin) html += '<a href="' + linkedin + '">LinkedIn</a> ';
    if (email) html += '<a href="mailto:' + email + '">Email</a>';
    html += '</div>';
    html += '</div>';
    html += '</header>';

    if (skills.length > 0) {
        html += '<section class="portfolio-section">';
        html += '<h3 class="section-title">Skills</h3>';
        html += '<div>';
        for (let i = 0; i < skills.length; i++) {
            html += '<span class="skill-tag">' + skills[i] + '</span> ';
        }
        html += '</div>';
        html += '</section>';
    }

    if (projects.length > 0) {
        html += '<section class="portfolio-section">';
        html += '<h3 class="section-title">Projects</h3>';
        html += '<div class="grid-2">';
        for (let i = 0; i < projects.length; i++) {
            html += '<div class="card">';
            html += '<h4>' + projects[i].title + '</h4>';
            html += '<p>' + projects[i].desc + '</p>';
            html += '<p class="tech-stack">' + projects[i].tech + '</p>';
            html += '</div>';
        }
        html += '</div>';
        html += '</section>';
    }

    if (experience.length > 0) {
        html += '<section class="portfolio-section">';
        html += '<h3 class="section-title">Experience</h3>';
        html += '<div class="grid-2">';
        for (let i = 0; i < experience.length; i++) {
            html += '<div class="card">';
            html += '<h4>' + experience[i].role + ' @ ' + experience[i].company + '</h4>';
            html += '<p>' + experience[i].period + '</p>';
            html += '<p>' + experience[i].desc + '</p>';
            html += '</div>';
        }
        html += '</div>';
        html += '</section>';
    }

    if (education.length > 0) {
        html += '<section class="portfolio-section">';
        html += '<h3 class="section-title">Education</h3>';
        html += '<div class="grid-2">';
        for (let i = 0; i < education.length; i++) {
            html += '<div class="card">';
            html += '<h4>' + education[i].degree + '</h4>';
            html += '<p>' + education[i].school + '</p>';
            html += '<p class="tech-stack">' + education[i].startYear + ' - ' + education[i].endYear + '</p>';
            html += '</div>';
        }
        html += '</div>';
        html += '</section>';
    }

    html += '</div>';

    preview.innerHTML = html;
}

function addSkill() {
    let input = document.getElementById('skill-input');
    let newSkill = input.value;
    if (newSkill !== "") {
        skills.push(newSkill);
        input.value = "";
        updatePreview();
        renderSkillsList();
    }
}

function renderSkillsList() {
    let list = document.getElementById('skills-list');
    list.innerHTML = "";
    for (let i = 0; i < skills.length; i++) {
        list.innerHTML += '<span class="tag">' + skills[i] + '</span> ';
    }
}

function renderProjectsList() {
    let list = document.getElementById('projects-list');
    list.innerHTML = "";
    for (let i = 0; i < projects.length; i++) {
        list.innerHTML += '<div class="list-item">' +
            '<div class="form-group"><label>Title</label><input type="text" value="' + projects[i].title + '" oninput="updateProject(' + i + ', \'title\', this.value)" placeholder="Project Title"></div>' +
            '<div class="form-group"><label>Description</label><input type="text" value="' + projects[i].desc + '" oninput="updateProject(' + i + ', \'desc\', this.value)" placeholder="Description"></div>' +
            '<div class="form-group"><label>Tech Stack</label><input type="text" value="' + projects[i].tech + '" oninput="updateProject(' + i + ', \'tech\', this.value)" placeholder="HTML, CSS..."></div>' +
            '<div class="form-group"><label>Link</label><input type="text" value="' + projects[i].link + '" oninput="updateProject(' + i + ', \'link\', this.value)" placeholder="#"></div>' +
            '</div>';
    }
}

window.updateProject = function (index, key, value) {
    projects[index][key] = value;
    updatePreview();
}

function addProject() {
    projects.push({
        title: "New Project",
        desc: "Description here...",
        tech: "HTML",
        link: "#"
    });
    renderProjectsList();
    updatePreview();
}

function renderExperienceList() {
    let list = document.getElementById('experience-list');
    list.innerHTML = "";
    for (let i = 0; i < experience.length; i++) {
        list.innerHTML += '<div class="list-item">' +
            '<div class="form-group"><label>Role</label><input type="text" value="' + experience[i].role + '" oninput="updateExperience(' + i + ', \'role\', this.value)" placeholder="Role"></div>' +
            '<div class="form-group"><label>Company</label><input type="text" value="' + experience[i].company + '" oninput="updateExperience(' + i + ', \'company\', this.value)" placeholder="Company"></div>' +
            '<div class="form-group"><label>Period</label><input type="text" value="' + experience[i].period + '" oninput="updateExperience(' + i + ', \'period\', this.value)" placeholder="2023 - Present"></div>' +
            '<div class="form-group"><label>Description</label><input type="text" value="' + experience[i].desc + '" oninput="updateExperience(' + i + ', \'desc\', this.value)" placeholder="Description"></div>' +
            '</div>';
    }
}

window.updateExperience = function (index, key, value) {
    experience[index][key] = value;
    updatePreview();
}

function addExperience() {
    experience.push({
        role: "New Role",
        company: "Company Name",
        period: "2024",
        desc: "What did you do?"
    });
    renderExperienceList();
    updatePreview();
}

function renderEducationList() {
    let list = document.getElementById('education-list');
    list.innerHTML = "";
    for (let i = 0; i < education.length; i++) {
        list.innerHTML += '<div class="list-item">' +
            '<div class="form-group"><label>Degree</label><input type="text" value="' + education[i].degree + '" oninput="updateEducation(' + i + ', \'degree\', this.value)" placeholder="Degree"></div>' +
            '<div class="form-group"><label>College/School</label><input type="text" value="' + education[i].school + '" oninput="updateEducation(' + i + ', \'school\', this.value)" placeholder="School"></div>' +
            '<div style="display: flex; gap: 10px;">' +
            '<div class="form-group" style="flex:1"><label>Start Year</label><input type="text" value="' + education[i].startYear + '" oninput="updateEducation(' + i + ', \'startYear\', this.value)" placeholder="2020"></div>' +
            '<div class="form-group" style="flex:1"><label>End Year</label><input type="text" value="' + education[i].endYear + '" oninput="updateEducation(' + i + ', \'endYear\', this.value)" placeholder="2024"></div>' +
            '</div>' +
            '</div>';
    }
}

window.updateEducation = function (index, key, value) {
    education[index][key] = value;
    updatePreview();
}

function addEducation() {
    console.log("Adding education...");
    education.push({
        degree: "New Degree",
        school: "School/University",
        startYear: "2021",
        endYear: "2025"
    });
    renderEducationList();
    updatePreview();
}

function changeTheme(themeName) {
    currentTheme = themeName;
    updatePreview();
}

function handlePhotoUpload(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            profilePhoto = e.target.result;
            updatePreview();
        };
        reader.readAsDataURL(file);
    }
}

function downloadPortfolio() {
    // Fetch the styles directly
    fetch('styles.css')
        .then(response => response.text())
        .then(css => {
            let fullHtml = '<!DOCTYPE html><html><head><title>My Portfolio</title>';
            fullHtml += '<style>' + css + '</style>';
            fullHtml += '<style>body { height: auto; overflow: auto; }</style>';
            fullHtml += '</head><body class="theme-' + currentTheme + '">';
            fullHtml += document.getElementById('preview-container').innerHTML;
            fullHtml += '</body></html>';

            let blob = new Blob([fullHtml], { type: "text/html" });
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "my-portfolio.html";
            link.click();
        });
}

window.onload = function () {
    document.getElementById('input-name').oninput = updatePreview;
    document.getElementById('input-role').oninput = updatePreview;
    document.getElementById('input-about').oninput = updatePreview;
    document.getElementById('input-photo').onchange = handlePhotoUpload;

    document.getElementById('add-skill-btn').onclick = addSkill;
    document.getElementById('add-project-btn').onclick = addProject;
    document.getElementById('add-exp-btn').onclick = addExperience;
    document.getElementById('add-edu-btn').onclick = addEducation;
    document.getElementById('downloadBtn').onclick = downloadPortfolio;

    let themeBtns = document.querySelectorAll('.theme-btn');
    themeBtns.forEach(btn => {
        btn.onclick = function () {
            themeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            changeTheme(this.dataset.theme);
        }
    });

    document.getElementById('get-started-btn').onclick = function () {
        document.getElementById('landing-page').style.display = 'none';
        document.getElementById('app-container').classList.remove('hidden');
    };

    renderSkillsList();
    renderProjectsList();
    renderExperienceList();
    renderEducationList();
    updatePreview();

    let sections = document.querySelectorAll('.section-header');
    sections.forEach(section => {
        section.onclick = function () {
            this.parentElement.classList.toggle('expanded');
        }
    });
};
