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
    project:" DELOS System at NU’s Center for Deep Learning", 
    time:"Mar.2020-Sept.2020",
    description:"DELOS(Deep Learning Model Serving System) is an open-source system addressing deep learning needs for automating deployment, scaling, and management of containerized applications. My contributions included:",
    contribs: [
        "Working on full-stack development of the system under Professor Diego Klabjan’s guidance;",
        "Designing front-end structure and developing the website with Python Flask, JQuery, Bootstrap.js, and AJAX;",
        "Integrating fellow researcher’s deep learning back-end API with the website for deep learning model demonstration;",
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
    project:"Xinhua Bookstore’s Technical Department", 
    time:"August. 2019",
    description:"",
    contribs: [
        "Developed Python web scraper for indexing 5000+ logos of publishing houses in collaboration with the bookstore;",
        "Analyzed 1000+ bookstore posts on Weibo using web crawler and Python NLP tools on sentiments & word frequencies."
    ]
}

]

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
                <span>${exp.description}</span>
                <ul id=${"exp-contribs"+num}>
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

loadExperiences(expdata);