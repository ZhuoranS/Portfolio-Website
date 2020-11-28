window.onload = (()=>{
    var body = document.getElementsByTagName("main")[0];
    console.log(body);
    body.className+= "load";
});

let map;
const beijing = { lat: 39.95465817779928, lng:116.41544423737766 };
const tianjing = {lat: 39.4642791644893, lng: 117.30248402598124}
const changbaishan = {lat: 42.02206524886007, lng: 128.0580806607571}
const shanghai= {lat:31.353493898413547, lng: 121.43269359948313}
const hangzhou = {lat: 30.395668685393797, lng: 120.00319351513616}
const suzhou = {lat:31.153658419383493, lng: 120.50872896542812}
const shenzhen = {lat:22.52192044592674, lng: 113.70855567350903}
const guangzhou = {lat:23.253291825689562, lng: 113.27946425559686}
const macau = {lat:22.1806787459814, lng: 113.48654243229848}
const qingdao = {lat:36.35407027194381, lng: 120.13728440337906}
const weihai = {lat:37.607040234023486, lng: 122.16004860395834}
const weifang = {lat: 36.86638097202833, lng: 119.18388909401553}
const qinghaihu = {lat: 36.873627063285305, lng: 100.22985089082312}
const xining = {lat: 36.624560350158106, lng: 101.79442257417656}
const jiuzhaigou = {lat:33.148336011870335, lng: 103.92381871524852}
const xian = {lat: 34.64976842843561, lng: 109.0514911782108}
const yinchuan = {lat:38.39118078999467, lng: 106.23982588633147}
const wuhan = {lat:30.790209925459468, lng: 114.17023622074692}


const tokyo = {lat: 35.75396846550714, lng: 139.7623070142232 };
const kyoto = {lat: 35.0430533455402, lng: 135.78415487253508};
const nagoya = {lat: 35.24554181597419, lng: 136.9053837459106};
const osaka = {lat: 34.75790617819317, lng: 135.4967337228199};
const kobe = {lat: 34.73655116621284, lng: 135.19766680276038};
const takamatsu = {lat:34.391558071296146, lng: 134.03888569306264};
const matsuyama = {lat:33.93420975234384, lng: 132.77402502518228};
const kagoshima = {lat:31.66143552692156, lng: 130.51340032932228};
const nagasaki = {lat: 32.707264209348594, lng: 129.86245567250208};
const okayama = {lat: 34.7216201141364, lng: 133.88534282265516}
const kurashiki = {lat: 34.63153764710234, lng: 133.78285167239727};
const himeji = {lat: 34.86538813834642, lng: 134.6801254878528};
const nara = {lat: 34.72567770846648, lng: 135.77676257932777}

const mauritus = {lat: -20.22423984999975, lng: 57.62015989882857}
const bangkok = {lat: 14.37974881770071, lng: 100.52831118879244}
const hongkong = {lat: 22.01385899317115, lng: 114.726173034889}
const jeju = {lat: 33.72287277204818, lng: 126.52352252536336}

const newyork = {lat: 40.75811266417322, lng: -73.97854637452751};
const losangeles = {lat: 34.25499625676454, lng: -118.63415355931006}
const boston = {lat: 42.36560609687213, lng: -70.75400333557818}
const sanfrancisco = {lat: 37.92248633231621, lng: -122.61688215997691}
const sandiego = {lat: 32.83860312116957, lng: -117.28527781768476}
const chicago = {lat: 42.00205879129085, lng: -87.30203192110093}
const philadelphia = {lat: 39.991730125618055, lng: -75.25506609017597}
const buffalo = {lat: 42.916892484357696, lng: -78.70890455123748}
const washington = {lat: 39.007458862845034, lng: -77.09616077345117}
const lexington = {lat:37.97542951305174, lng: -84.43838533153992}
const minneapolis = {lat: 45.12396059236705, lng: -93.17602699845214}
const rushmore = {lat: 43.87822909222826, lng: -103.45931565911481}
const yellowstone = {lat: 44.44973059203002, lng: -110.54012617154638}
const saltlakecity = {lat:40.80695467092344, lng: -111.9742018130677}
const lasvegas = {lat: 36.20913237016456, lng: -115.13977256049834}
const bigsur = {lat: 36.27083195304056, lng: -121.80666139890604}
const sanluisobispo = {lat: 35.35680897482587, lng: -120.6811737513091}
const morrobay = {lat: 35.368334275718745, lng: -120.8519029625614}

const pois = [beijing, tianjing, changbaishan, shanghai, hangzhou, suzhou, qingdao,guangzhou, shenzhen, macau, weihai, weifang, qinghaihu, xining, jiuzhaigou, xian, yinchuan, wuhan, tokyo, kyoto, nagoya, osaka, kobe, takamatsu, matsuyama, kagoshima, nagasaki, okayama, kurashiki, himeji, nara, mauritus, bangkok, hongkong, jeju, 
    newyork, losangeles, boston, sanfrancisco, sandiego, chicago, philadelphia, buffalo, washington, lexington, minneapolis,
    rushmore, yellowstone, saltlakecity, lasvegas, bigsur, sanluisobispo, morrobay];

markers = []

function initMap() {

    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2.5,
    center: {lat: 33.25766977743812, lng: 179.90313594058028},
    });

    for(i = 0; i < pois.length; i++){
        poi = new google.maps.Marker({
            position: pois[i],
            map: map,
          });
        markers.push(poi);
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