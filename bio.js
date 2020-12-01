window.onload = (()=>{
    var body = document.getElementsByTagName("main")[0];
    console.log(body);
    body.className+= "load";
});

let map;
const beijing = { title: 'Beijing', lat: 39.95465817779928, lng:116.41544423737766 };
const tianjing = { title: 'Tianjing', lat: 39.4642791644893, lng: 117.30248402598124}
const changbaishan = {title: 'Changbaishan', lat: 42.02206524886007, lng: 128.0580806607571}
const shanghai= {title: 'Shanghai', lat:31.353493898413547, lng: 121.43269359948313}



const tokyo = {title: 'Tokyo', lat: 35.75396846550714, lng: 139.7623070142232 };
const kyoto = {title: 'Kyoto', lat: 35.0430533455402, lng: 135.78415487253508};
const nagoya = {title: 'Nagoya', lat: 35.24554181597419, lng: 136.9053837459106};
const osaka = {title: 'Osaka', lat: 34.75790617819317, lng: 135.4967337228199};
const kobe = {title: 'Kobe', lat: 34.73655116621284, lng: 135.19766680276038};


const mauritus = {title: 'Mauritus', lat: -20.22423984999975, lng: 57.62015989882857}
const bangkok = {title: 'Bangkok', lat: 14.37974881770071, lng: 100.52831118879244}
const hongkong = {title: 'Hong Kong', lat: 22.01385899317115, lng: 114.726173034889}
const jeju = {title: 'Jeju Island', lat: 33.72287277204818, lng: 126.52352252536336}

const newyork = {title: 'New York City', lat: 40.75811266417322, lng: -73.97854637452751};
const losangeles = {title: 'Los Angeles', lat: 34.25499625676454, lng: -118.63415355931006}
const boston = {title: 'Boston', lat: 42.36560609687213, lng: -70.75400333557818}
const sanfrancisco = {title: 'San Francisco', lat: 37.92248633231621, lng: -122.61688215997691}
const sandiego = {title: 'San Diego', lat: 32.83860312116957, lng: -117.28527781768476}
const chicago = {title: 'Chicago', lat: 42.00205879129085, lng: -87.30203192110093}


const pois = [beijing, tianjing, changbaishan, shanghai, tokyo, kyoto, nagoya, osaka, kobe, mauritus, bangkok, hongkong, jeju, 
    newyork, losangeles, boston, sanfrancisco, sandiego, chicago];

markers = []

function initMap() {
    var infoWindow = new google.maps.InfoWindow();
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: {lat: 33.25766977743812, lng: 179.90313594058028},
    });

    for(i = 0; i < pois.length; i++){
        poi = new google.maps.Marker({

            position: {lat: pois[i].lat, lng: pois[i].lng},
            map: map,
            title: pois[i].title
          });
        markers.push(poi);
        google.maps.event.addListener(poi, "click", (function(poi, i){
            return function(){
                infoWindow.setContent(pois[i].title);
                infoWindow.open(map, poi);
            }
        })(poi, i));
    }
    
}

function showMap(){
    let container = document.getElementsByClassName("container")[0];
    let map = document.getElementById("map-container");
    let title = document.getElementsByTagName("h1")[0];
    title.innerHTML="Places I've been to!";
    map.setAttribute("style", "display: block");
    container.setAttribute("style", "display: none");
}


function hideMap(){
    let container = document.getElementsByClassName("container")[0];
    let map = document.getElementById("map-container");
    let title = document.getElementsByTagName("h1")[0];
    title.innerHTML="Comlete Bio";
    map.setAttribute("style", "display: none");
    container.setAttribute("style", "display: block");
}