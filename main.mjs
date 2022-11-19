import data from './data.json' assert {type: "json"};

data.users.forEach((item) => {
  console.log(`${item.firstName}, born at ${item.dateOfBirth} and ${item.knowsAs}`);
})