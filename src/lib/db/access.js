import Dexie from 'dexie';
import map from 'lodash/fp/map';
import { getDatabaseInformation, formatTable, getSchema, sendRecords} from './utils';

export const genDatabaseInterface = (database) => {
  return new Dexie(database).open()
}

export const getDatabaseList = (dbNames = []) => {

  return Dexie.getDatabaseNames()
    .then(names => names.concat(dbNames))
    .then((names) => Promise.all(map(genDatabaseInterface, names)))
    .then(dbs => Promise.all(map(getDatabaseInformation, dbs)))

};

export const getTableList = (database) => {
  return Promise.all(database.tables.map(formatTable));
}

export const getTableInfo = async (database, table) => {
  return await {
    primaryKey: database.table(table).schema.primKey.keyPath,
    schema: getSchema(database, table),
    name: table
  }
}



export const getAllRecords = (database, table, offset = 1, limit = 10) => {
  return database
    .table(table)
    .offset((offset - 1) * limit)
    .limit(limit)
    .toArray()
    .then(sendRecords(database, table));
};

export const getRecord = (database, table, id) => {
  let key;
  try {
    key = Number(id);
    if (isNaN(key)) throw new Error('id not a number');
  } catch (err) {
    key = id;
  }
  return database.table(table).get(key);
}