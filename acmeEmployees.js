const employees = [
  { id: 1, name: 'moe'},
  { id: 2, name: 'larry', managerId: 1},
  { id: 4, name: 'shep', managerId: 2},
  { id: 3, name: 'curly', managerId: 1},
  { id: 5, name: 'groucho', managerId: 3},
  { id: 6, name: 'harpo', managerId: 5},
  { id: 8, name: 'shep Jr.', managerId: 4},
  { id: 99, name: 'lucy', managerId: 1}
];

const spacer = (text)=> {
  if(!text){
    return console.log('');
  }
  const stars = new Array(5).fill('*').join('');
  console.log(`${stars} ${text} ${stars}`);
}

const findEmployeeByName = (inputName, inputArr) => {
    let result = {};
    inputArr.forEach((object) => {
        if (object.name === inputName) {
            result = object;
        }
    });
    return result;
}

const findManagerFor = (employeeObj, inputArr) => {
    let result = {};
    inputArr.forEach((object) => {
        if (object.id === employeeObj.managerId) {
            result = object;
        }
    });
    return result;
}

const findCoworkersFor = (employeeObj, inputArr) => {
    let result = [];
    inputArr.forEach((object) => {
        if (object.managerId === employeeObj.managerId && object !== employeeObj) {
            result.push(object);
        }
    });
    return result;
}

const findManagementChain = (employeeObj, inputArr) => {
    let result = [];
    inputArr.forEach((object) => {
        if () {

        }
    });
    return result;
}

spacer('');

spacer('findManagementChain for moe')

console.log(findManagementChainForEmployee(findEmployeeByName('moe', employees), employees));
spacer('');

spacer('findManagementChain for shep Jr.')
console.log(findManagementChainForEmployee(findEmployeeByName('shep Jr.', employees), employees));
spacer('');