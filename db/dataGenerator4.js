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

let rewards_by_product12 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product12 = [['productId','amount']];
let pledges_by_reward12 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 8400001; productId <= 9100000; productId++) {

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
     rewards_by_product12.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward12, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product12.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct12 = fs.createWriteStream('RewardsByProduct12.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct12 = fs.createWriteStream('PledgesByProduct12.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward12 = fs.createWriteStream('PledgesByReward12.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product12, {headers: true}).pipe(RewardsByProduct12);
csv.write(pledges_by_product12, {headers: true}).pipe(PledgesByProduct12);
csv.write(pledges_by_reward12, {headers: true}).pipe(PledgesByReward12);

console.log('round 12 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product13 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product13 = [['productId','amount']];
let pledges_by_reward13 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 9100001; productId <= 9800000; productId++) {

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
     rewards_by_product13.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward13, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product13.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct13 = fs.createWriteStream('RewardsByProduct13.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct13 = fs.createWriteStream('PledgesByProduct13.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward13 = fs.createWriteStream('PledgesByReward13.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product13, {headers: true}).pipe(RewardsByProduct13);
csv.write(pledges_by_product13, {headers: true}).pipe(PledgesByProduct13);
csv.write(pledges_by_reward13, {headers: true}).pipe(PledgesByReward13);

console.log('round 13 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product14 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product14 = [['productId','amount']];
let pledges_by_reward14 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 9800001; productId <= 10500000; productId++) {

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
     rewards_by_product14.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward14, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product14.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct14 = fs.createWriteStream('RewardsByProduct14.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct14 = fs.createWriteStream('PledgesByProduct14.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward14 = fs.createWriteStream('PledgesByReward14.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product14, {headers: true}).pipe(RewardsByProduct14);
csv.write(pledges_by_product14, {headers: true}).pipe(PledgesByProduct14);
csv.write(pledges_by_reward14, {headers: true}).pipe(PledgesByReward14);

console.log('round 14 complete');