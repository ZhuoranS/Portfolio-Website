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