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

let rewards_by_product9 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product9 = [['productId','amount']];
let pledges_by_reward9 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 6300001; productId <= 7000000; productId++) {

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
     rewards_by_product9.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward9, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product9.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct9 = fs.createWriteStream('RewardsByProduct9.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct9 = fs.createWriteStream('PledgesByProduct9.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward9 = fs.createWriteStream('PledgesByReward9.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product9, {headers: true}).pipe(RewardsByProduct9);
csv.write(pledges_by_product9, {headers: true}).pipe(PledgesByProduct9);
csv.write(pledges_by_reward9, {headers: true}).pipe(PledgesByReward9);

console.log('round 9 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product10 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product10 = [['productId','amount']];
let pledges_by_reward10 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 7000001; productId <= 7700000; productId++) {

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
     rewards_by_product10.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward10, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product10.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct10 = fs.createWriteStream('RewardsByProduct10.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct10 = fs.createWriteStream('PledgesByProduct10.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward10 = fs.createWriteStream('PledgesByReward10.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product10, {headers: true}).pipe(RewardsByProduct10);
csv.write(pledges_by_product10, {headers: true}).pipe(PledgesByProduct10);
csv.write(pledges_by_reward10, {headers: true}).pipe(PledgesByReward10);

console.log('round 10 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product11 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product11 = [['productId','amount']];
let pledges_by_reward11 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 7700001; productId <= 8400000; productId++) {

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
     rewards_by_product11.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward11, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product11.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct11 = fs.createWriteStream('RewardsByProduct11.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct11 = fs.createWriteStream('PledgesByProduct11.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward11 = fs.createWriteStream('PledgesByReward11.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product11, {headers: true}).pipe(RewardsByProduct11);
csv.write(pledges_by_product11, {headers: true}).pipe(PledgesByProduct11);
csv.write(pledges_by_reward11, {headers: true}).pipe(PledgesByReward11);

console.log('round 11 complete');

