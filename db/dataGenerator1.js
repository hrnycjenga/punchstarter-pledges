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

let rewards_by_product3 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product3 = [['productId','amount']];
let pledges_by_reward3 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 2100001; productId <= 2800000; productId++) {

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
     rewards_by_product3.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward3, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product3.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct3 = fs.createWriteStream('RewardsByProduct3.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct3 = fs.createWriteStream('PledgesByProduct3.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward3 = fs.createWriteStream('PledgesByReward3.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product3, {headers: true}).pipe(RewardsByProduct3);
csv.write(pledges_by_product3, {headers: true}).pipe(PledgesByProduct3);
csv.write(pledges_by_reward3, {headers: true}).pipe(PledgesByReward3);

console.log('round 3 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product4 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product4 = [['productId','amount']];
let pledges_by_reward4 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 2800001; productId <= 3500000; productId++) {

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
     rewards_by_product4.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward4, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product4.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct4 = fs.createWriteStream('RewardsByProduct4.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct4 = fs.createWriteStream('PledgesByProduct4.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward4 = fs.createWriteStream('PledgesByReward4.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product4, {headers: true}).pipe(RewardsByProduct4);
csv.write(pledges_by_product4, {headers: true}).pipe(PledgesByProduct4);
csv.write(pledges_by_reward4, {headers: true}).pipe(PledgesByReward4);

console.log('round 4 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product5 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product5 = [['productId','amount']];
let pledges_by_reward5 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 3500001; productId <= 4200000; productId++) {

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
     rewards_by_product5.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward5, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product5.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct5 = fs.createWriteStream('RewardsByProduct5.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct5 = fs.createWriteStream('PledgesByProduct5.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward5 = fs.createWriteStream('PledgesByReward5.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product5, {headers: true}).pipe(RewardsByProduct5);
csv.write(pledges_by_product5, {headers: true}).pipe(PledgesByProduct5);
csv.write(pledges_by_reward5, {headers: true}).pipe(PledgesByReward5);

console.log('round 5 complete');
