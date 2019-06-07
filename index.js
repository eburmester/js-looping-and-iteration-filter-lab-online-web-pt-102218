const drivers = [];
function findMatching(drivers, string) {
  if (string === drivers) {
    drivers.push('${string}');
}
return drivers;
}


drivers.filter(findMatching); 