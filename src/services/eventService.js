const path = require('path');
const fs = require('fs/promises');

const pathData = '../../data.json';

const readEvents = async () => {
  const pathListData = path.join(__dirname, pathData);
  const readData = await fs.readFile(pathListData);
  const parseData = JSON.parse(readData);
  return parseData;
};

const insertEvents = async (newEvent) => {
  const pathListData = path.join(__dirname, pathData);
  const readData = await fs.readFile(pathListData);
  const allData = JSON.parse(readData);
  allData.push(newEvent);
  await fs.writeFile(pathListData, JSON.stringify(allData));
};

module.exports = {
  insertEvents,
  readEvents,
};
