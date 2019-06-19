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

let rewards_by_product = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product = [['productId','amount']];
let pledges_by_reward = [['productId', 'rewardsId', 'minimum']];

for (let productId = 1; productId <= 700000; productId++) {

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
     rewards_by_product.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct = fs.createWriteStream('RewardsByProduct.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct = fs.createWriteStream('PledgesByProduct.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward = fs.createWriteStream('PledgesByReward.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product, {headers: true}).pipe(RewardsByProduct);
csv.write(pledges_by_product, {headers: true}).pipe(PledgesByProduct);
csv.write(pledges_by_reward, {headers: true}).pipe(PledgesByReward);

console.log('round 0 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product1 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product1 = [['productId','amount']];
let pledges_by_reward1 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 700001; productId <= 1400000; productId++) {

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
     rewards_by_product1.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward1, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product1.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct1 = fs.createWriteStream('RewardsByProduct1.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct1 = fs.createWriteStream('PledgesByProduct1.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward1 = fs.createWriteStream('PledgesByReward1.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product1, {headers: true}).pipe(RewardsByProduct1);
csv.write(pledges_by_product1, {headers: true}).pipe(PledgesByProduct1);
csv.write(pledges_by_reward1, {headers: true}).pipe(PledgesByReward1);

console.log('round 1 complete');

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let rewards_by_product2 = [['productId', 'deadline', 'goal', 'rewardsId', 'minimum', 'title', 'description', 'estDelivery']];
let pledges_by_product2 = [['productId','amount']];
let pledges_by_reward2 = [['productId', 'rewardsId', 'minimum']];

for (let productId = 1400001; productId <= 2100000; productId++) {

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
     rewards_by_product2.push([productId, deadline.toString().slice(4, 16), productGoal, rewardId, minimum, rewardTitle, rewardDescription, estDelivery.toString().slice(4, 16)]);

    //Pledges_By_Reward table
    let testNum = Math.round(Math.random()*10);
    if (testNum < 6) {
      addRandomAmountOfPledges(pledges_by_reward2, productId, rewardId, minimum, testNum);
      productPledgeTotal += minimum*testNum;
    }
  }

  //Pledges_By_Product table
  pledges_by_product2.push([productId, productPledgeTotal]);
  console.log("Creating Info for Product", productId);
}

let RewardsByProduct2 = fs.createWriteStream('RewardsByProduct2.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByProduct2 = fs.createWriteStream('PledgesByProduct2.csv',{flag: 'a', includeEndRowDelimiter: true});
let PledgesByReward2 = fs.createWriteStream('PledgesByReward2.csv',{flag: 'a', includeEndRowDelimiter: true});

csv.write(rewards_by_product2, {headers: true}).pipe(RewardsByProduct2);
csv.write(pledges_by_product2, {headers: true}).pipe(PledgesByProduct2);
csv.write(pledges_by_reward2, {headers: true}).pipe(PledgesByReward2);

console.log('round 2 complete');

