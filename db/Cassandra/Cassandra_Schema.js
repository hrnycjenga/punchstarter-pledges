const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1' });

const tableInfo = (tableObj) => {
  console.log('Table Info');
  console.log(tableObj);
} 

client.connect()
  .then(() => {
    const query = "CREATE KEYSPACE IF NOT EXISTS hackStarter WITH replication =" +
    "{'class': 'SimpleStrategy', 'replication_factor': '6'}";
    return client.execute(query);
  })
  .then(() => {
    const query = "CREATE TABLE IF NOT EXISTS hackStarter.pledges_by_product" +
    " (productId int, amount int, PRIMARY KEY(productId))";
    return client.execute(query);
  })
  .then(() => {
    return client.metadata.getTable('hackStarter', 'pledges_by_product');
  })
  .then((table) => {
    tableInfo(table);
  })
  .then(() => {
    const query = "CREATE TABLE IF NOT EXISTS hackStarter.pledges_by_reward" + 
    " (productId int, rewardsId int, amount int," +
    " PRIMARY KEY(productId, rewardsId)) WITH CLUSTERING ORDER BY(rewardsId ASC)";
    return client.execute(query);
  })
  .then(() => {
    return client.metadata.getTable('hackStarter', 'pledges_by_reward');
  })
  .then((table) => {
    tableInfo(table);
  })
  .then(() => {
    const query = "CREATE TABLE IF NOT EXISTS hackStarter.rewards_by_product" +
    " (productId int, deadline text STATIC, goal int STATIC, rewardsId int," +
    " minimum int, title text, description text, estDelivery text," +
    " PRIMARY KEY(productId, rewardsId))" +
    " WITH CLUSTERING ORDER BY(rewardsId ASC)";
    return client.execute(query);
  })
  .then(() => {
    return client.metadata.getTable('hackStarter', 'rewards_by_product');
  })
  .then((table) => {
    tableInfo(table);
  })
  .then(() => {
    console.log('Shutting Down');
    return client.shutdown();
  })
  .catch((err) => {
    console.error('There was an error', err);
    return client.shutdown().then(() => {throw err;});
  })

