import Chart from 'chart.js/auto';
import config from './config.json';
import data from "./database/Matches.json"
import { parse } from 'path-browserify';
var ids = data.map(row => row.ID);
var teamNumbers = data.map(row => row.TeamNumber);
var cycleTimes = data.map(row => row.CycleTime);
var eventNames = data.map(row => row.Event); 
var idsFilter = [];
var teamNumbersFilter = [];
var cycleTimesFilter = [];
var eventNamesFilter = [];
var currentEvent = "Initial";
(async function() {
const searchLabels = ["Go on then!", "I command thee", "Proceed to the route", "Robot go brr"];
console.log(data.map(row => row.teamNumbersFilter));
console.log(data.map(row => row.CycleTimesFilter));
var defaultcfg = {
    type: 'bar',
    data: {
      labels: teamNumbersFilter,
      datasets: [
        {
          label: 'Cycle Time',
          data: cycleTimesFilter,
        }
      ]
    }
  }
parseEventData(currentEvent);
setupPage(defaultcfg);
//(async function() {
//})();
function parseEventData(eventname){
    currentEvent = eventname;
    if (eventname === "Initial") {
        for (let i = 0; i < ids.length; i++){
            if (teamNumbersFilter.includes(teamNumbers[i])) {
                if(cycleTimesFilter[teamNumbersFilter.indexOf(teamNumbers[i])] > cycleTimes[i]){
                
                    cycleTimes[i] = cycleTimesFilter[teamNumbersFilter.indexOf(teamNumbers[i])];
                }
            }else{
                if (cycleTimes[i] > 1){
                eventNamesFilter.push(eventNames[i]) 
                teamNumbersFilter.push(teamNumbers[i]) 
                cycleTimesFilter.push(cycleTimes[i]) 
                idsFilter.push(ids[i]) 
                }
            }
        }
        currentEvent = "Overall Fastest Cycle Times"
        return "total";
    }
    for (let i = 0; i < ids.length; i++){
        if (eventNames[i] === eventname) {
            eventNamesFilter.push(eventNames[i]) 
            teamNumbersFilter.push(teamNumbers[i]) 
            cycleTimesFilter.push(cycleTimes[i]) 
            idsFilter.push(ids[i]) 
        }
    }
};
function setupPage(cfg){
    console.log(teamNumbersFilter)
    console.log(cycleTimesFilter)
    new Chart(
        document.getElementById("graphCanvas"),
        cfg
    )
    document.getElementById("graphLabel").innerHTML = "Now showing data for " + currentEvent
    document.getElementById("searchButton").innerHTML = searchLabels[Math.floor(Math.random() * searchLabels.length)]
}
})();