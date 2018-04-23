// Code your solution in this file!
function logDriverNames(drivers) {
  return drivers.map(driver => console.log(driver["name"]) )
}

function logDriversByHometown(drivers, loc) {
  results = drivers.filter(driver => driver["hometown"] === loc )
  return results.map( result => console.log(result["name"]) )
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a, b) {
  if (a["revenue"] > b["revenue"]) {
    return 1;
  }
  if (a["revenue"] < b["revenue"]) {
    return -1;
  }
  return 0;
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a, b) {
  if (a["name"] > b["name"]) {
    return 1;
  }
  if (a["name"] < b["name"]) {
    return -1;
  }
  return 0;
  })
}

function totalRevenue(drivers) {
  revenue = drivers.map(driver => driver["revenue"]);
  return revenue.reduce((sum, currentValue) => sum + currentValue);
}

function averageRevenue(drivers) { 
  return totalRevenue(drivers) / drivers.length
}
