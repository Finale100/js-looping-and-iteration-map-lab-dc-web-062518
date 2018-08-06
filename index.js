function lowerCaseDrivers(array) {
  return array.map(element => element.toLowerCase());
}

function nameToAttributes(array) {
  let newDriver = array.map( name => { return name.split(" ")});
  let names = newDriver.map(name => {
    return {firstName: name[0], lastName: name[1]}
  });
  return names
}

function attributesToPhrase(array) {
  return array.map(info => {
    return `${info.name} is from ${info.hometown}`
  });
}
