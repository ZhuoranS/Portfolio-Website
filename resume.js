window.onload = (()=>{
    var body = document.getElementsByTagName("main")[0];
    body.className+= "load";
});
function changeTranscript(){
    ver = document.getElementById("version").value;
    console.log(ver);
    if (ver=="20WI"){
        document.getElementById("transcript-link").setAttribute("href", "src/Transcript 2020 Winter.pdf");
    } else if (ver=="20SP") {
        document.getElementById("transcript-link").setAttribute("href", "src/Transcript 2020 Spring.pdf");
    } else {
        document.getElementById("transcript-link").setAttribute("href", "src/Transcript 2019 Fall.pdf");
    }
}

function alternateResume(){
    console.log('alternating');
    var frame = document.getElementsByClassName("resume-frame")[0];
    var text = document.getElementsByClassName("text-resume")[0];
    console.log(frame.style.display)
    if (frame.style.display == "none" || (!frame.style.display)){
        console.log('alternating to frame');
        frame.setAttribute("style", "display: block");
        text.setAttribute("style", "display: none");
    } else {
        frame.setAttribute("style", "display: none");
        text.setAttribute("style", "display:block");
    }
}

var expdata=[
{
    position: "Intern",
    project: "DELOS System at NU&#39s Center for Deep Learning", 
    time:"Mar.2020-Sept.2020",
    description:"DELOS(Deep Learning Model Serving System) is an open-source system addressing deep learning needs for automating deployment, scaling, and management of containerized applications. My contributions included:",
    contribs: [
        "Working on full-stack development of the system under Professor Diego Klabjan&#39 s guidance;",
        "Designing front-end structure and developing the website with Python Flask, JQuery, Bootstrap.js, and AJAX;",
        "Integrating fellow researcher&#39s deep learning back-end API with the website for deep learning model demonstration;",
        "Developing the benchmark pipeline with Deep Learning Multi-layer Perceptron model by Tensorflow and Keras;",
        "Rewriting research paper codes to Tensorflow v2;",
        "Demonstrating the project in monthly meetings to sponsors including Google Cloud, Nvidia, AllState, Abbvie, etc."
    ]
},

{
    position: "Peer Mentor",
    project:"Northwestern Computer Science Department", 
    time:"Sept.2020—Present",
    description:"",
    contribs: [
        "Selected to be the mentor for COMP_SCI 214: Data Structures & Algorithm;",
        "Responsible for weekly 4-hour office hours for over 100 students."
    ]
},

{
    position: "Developer",
    project:"Scope Northwestern", 
    time:"Nov. 2019—Present",
    description:"Scope is a start-up at the Garage that aims to promote student engagement with the Evanston business community via personalized platforms. My roles in the team are:",
    contribs: [
        "Participating in daily operations;",
        "Working as a full-stack developer, with front-end website in HTML and Google Firebase as backend database structure;",
        "Working on scripts that automatically handles incoming data streams with Javascript"

    ]
},

{
    position: "Python Engineering Intern",
    project:"Xinhua Bookstore&#39s Technical Department", 
    time:"August. 2019",
    description:"",
    contribs: [
        "Developed Python web scraper for indexing 5000+ logos of publishing houses in collaboration with the bookstore;",
        "Analyzed 1000+ bookstore posts on Weibo using web crawler and Python NLP tools on sentiments & word frequencies."
    ]
}

]


var skillData = [
    {
        title: "Programming Language",
        content: "Python, Javascript, C++, HTML, CSS, C, Java"
    }, {
        title: "Libraries",
        content: "React.js, Flask, Bootstrap, jquery, nltk, jieba, D3.js, echarts.js, Tensorflow & Keras, Pandas"
    }, {
        title: "Awards",
        content: "Award for Excellence in Mathematics By a First Year, issued by Northwestern Mathematics Department, Honorable Mention in Unicode SC+ Hackathon (8 in 83 teams)"
    }, {
        title: "Activities",
        content: "&ldquo; Metchup &rdquo; WebApp Project, Social Media managements(4 accounts, up to 3000 subscribers), NESP(Northwestern Emerging Scholars Program)"
    }, {
        title: "Languages",
        content: "Fluent in English and Chinese, beginner in Japanese"
    }];


function loadExperiences(data){
    let num = 0;
    explist = document.querySelector("#exp-list");
    if (data instanceof Array){
        for (let exp of data){
            // You will add your content here for
            let contribs = exp.contribs;
            console.log(contribs);
           
            let html = 
              `
                <div class="exp-header"><h4 class="exp-position">${exp.position}</h4><h4 class="exp-name">, ${exp.project}</h4> <h4 class="exp-time">${exp.time}</h4></div>
                <div class="exp-desc">${exp.description}</div>
                <ul class="exp-contribs" id=${"exp-contribs"+num}>
                </ul>
              ` 
            let container = document.createElement("div");
            container.className=("exp"+ num);
       
            container.innerHTML = html;
            explist.append(container);
            contribsid = "#exp-contribs"+num;
            expcontribs = document.querySelector(contribsid);
            for (let contrib of contribs){
                li = document.createElement('li');
                li.innerHTML = `${contrib}`;
                expcontribs.append(li);
            }
            num += 1;
          }
    }
}


function loadSkills(data){
    skills = document.querySelector("#skills");
    if(data instanceof Array){
        for(let skill of data){
            let html =
            `
            ${skill.title}: <span class="skill-content">${skill.content}</span>
            `
            let container = document.createElement("h4");
            container.id = skill.title;
            container.innerHTML = html;
            skills.append(container);
        }
    }
}

loadExperiences(expdata);
loadSkills(skillData);