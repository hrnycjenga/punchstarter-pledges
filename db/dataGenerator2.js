const faker = require('faker');
const fs = require('fs');
const csv = require('fast-csv');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum and the minimum are inclusive 
}

const addRandomAmountOfPledges = (table, pid, rid, amount, randomNum) => {
  if (randomNum === 1) {
    table.push([pid, rid, amount]);
  } else if (randomNum === 2) {
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
  } else if (randomNum === 3) {
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
  } else if (randomNum === 4) {
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
  } else if (randomNum === 5) {
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
    table.push([pid, rid, amount]);
  }
}  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let rewards_by_product6 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product6 = [['productId','amount']];
let pledges_by_reward6 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 4200001; productId <= 4900000; productId++) {

  let numberOfRewards = Math.floor(Math.random()*4)+1;
  let rewardsMax = Math.floor(Math.random()*8000)+10;
  let rewardsInterval = rewardsMax/numberOfRewards;
  let productPledgeTotal = 0;

  let productGoal = faker.commerce.price();
  (productGoal === 0) ? productGoal += 2000 : productGoal *= getRandomIntInclusive(10,10000);
  
  let deadline;
  let pastOrFuturetest = Math.round(Math.random());
  (pastOrFuturetest === 0) ? deadline = faker.date.past() : deadline = faker.date.future();

  for (let rewardId = 1; rewardId <= numberOfRewards; rewardId++) {
    let minimum = Math.floor(rewardsInterval*rewardId);
    let rewardTitle = faker.commerce.productName();
    let rewardDescription = faker.lorem.sentence();
    let estDelivery = faker.date.between(deadline, faker.date.future());

    //Rewards_By_Product table
     rewards_by_product6.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward6, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product6.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct6 = fs.createWriteStream('RewardsByProduct6.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct6 = fs.createWriteStream('PledgesByProduct6.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward6 = fs.createWriteStream('PledgesByReward6.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product6, {headers: true}).pipe(RewardsByProduct6);
csv.write(pledges_by_product6, {headers: true}).pipe(PledgesByProduct6);
csv.write(pledges_by_reward6, {headers: true}).pipe(PledgesByReward6);

console.log('round 6 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product7 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product7 = [['productId','amount']];
let pledges_by_reward7 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 4900001; productId <= 5600000; productId++) {

  let numberOfRewards = Math.floor(Math.random()*4)+1;
  let rewardsMax = Math.floor(Math.random()*8000)+10;
  let rewardsInterval = rewardsMax/numberOfRewards;
  let productPledgeTotal = 0;

  let productGoal = faker.commerce.price();
  (productGoal === 0) ? productGoal += 2000 : productGoal *= getRandomIntInclusive(10,10000);
  
  let deadline;
  let pastOrFuturetest = Math.round(Math.random());
  (pastOrFuturetest === 0) ? deadline = faker.date.past() : deadline = faker.date.future();

  for (let rewardId = 1; rewardId <= numberOfRewards; rewardId++) {
    let minimum = Math.floor(rewardsInterval*rewardId);
    let rewardTitle = faker.commerce.productName();
    let rewardDescription = faker.lorem.sentence();
    let estDelivery = faker.date.between(deadline, faker.date.future());

    //Rewards_By_Product table
     rewards_by_product7.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward7, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product7.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct7 = fs.createWriteStream('RewardsByProduct7.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct7 = fs.createWriteStream('PledgesByProduct7.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward7 = fs.createWriteStream('PledgesByReward7.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product7, {headers: true}).pipe(RewardsByProduct7);
csv.write(pledges_by_product7, {headers: true}).pipe(PledgesByProduct7);
csv.write(pledges_by_reward7, {headers: true}).pipe(PledgesByReward7);

console.log('round 7 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product8 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product8 = [['productId','amount']];
let pledges_by_reward8 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 5600001; productId <= 6300000; productId++) {

  let numberOfRewards = Math.floor(Math.random()*4)+1;
  let rewardsMax = Math.floor(Math.random()*8000)+10;
  let rewardsInterval = rewardsMax/numberOfRewards;
  let productPledgeTotal = 0;

  let productGoal = faker.commerce.price();
  (productGoal === 0) ? productGoal += 2000 : productGoal *= getRandomIntInclusive(10,10000);
  
  let deadline;
  let pastOrFuturetest = Math.round(Math.random());
  (pastOrFuturetest === 0) ? deadline = faker.date.past() : deadline = faker.date.future();

  for (let rewardId = 1; rewardId <= numberOfRewards; rewardId++) {
    let minimum = Math.floor(rewardsInterval*rewardId);
    let rewardTitle = faker.commerce.productName();
    let rewardDescription = faker.lorem.sentence();
    let estDelivery = faker.date.between(deadline, faker.date.future());

    //Rewards_By_Product table
     rewards_by_product8.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward8, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product8.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct8 = fs.createWriteStream('RewardsByProduct8.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct8 = fs.createWriteStream('PledgesByProduct8.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward8 = fs.createWriteStream('PledgesByReward8.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product8, {headers: true}).pipe(RewardsByProduct8);
csv.write(pledges_by_product8, {headers: true}).pipe(PledgesByProduct8);
csv.write(pledges_by_reward8, {headers: true}).pipe(PledgesByReward8);

console.log('round 8 complete');

