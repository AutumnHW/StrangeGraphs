import Chart from 'chart.js/auto';
import config from './config.json';
import matches from "./Matches.json"
const searchLabels = ["Go on then!", "I command thee", "Proceed to the route", "Robot go brr"];
console.log(matches)


setupPage();
//(async function() {
//})();
function setupPage(){
    document.getElementById("searchButton").innerHTML = searchLabels[Math.floor(Math.random() * searchLabels.length)]
}
