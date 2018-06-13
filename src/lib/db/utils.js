import _ from 'lodash/fp';
import filesize from 'filesize';

export const filterMethods = (method) => {
  switch(method) {
    case 'is':
      return _.equals;
    case 'isNot':
      return q => i => !_.equals(q)(i);
    case 'like':
      return _.includes
    case 'notLike':
      return q => i => !_.includes(q)(i);
    case 'startsWith':
      return _.startsWith
    case 'doesntStartWith':
      return q => i => !_.startsWith(q)(i);
    case 'greaterThan':
      return n => m => Number(m) >= Number(n);
    case 'lessThan':
      return n => m => Number(m) <= Number(n);
    default: 
      return _.identity
  }
}

export const formatTable = async (table) => {
  const count = await table.count();
  const nextTable = await {
    name: table.name,
    count,
    schema: table.schema.indexes.map(({name}) => name).join(', '),
    size: await getTableSize(table)
  }

  return nextTable;
}

export const getDatabaseSize = async (database) => {
  return Promise.all(database.tables.map(table => table.toArray()))
    .then(_.flatten)
    .then(_.map(JSON.stringify))
    .then(_.reduce((acc, val) => acc + val.length, 0))
    .then(filesize)
}

export const getTableSize = async (table) => {
  return table.toArray()
    .then(_.map(JSON.stringify))
    .then(_.reduce((acc, val) => acc + val.length, 0))
    .then(filesize)
}

export const getDatabaseInformation = async (database) => {
  return {
    name: database.name,
    version: database.verno,
    tables: database.tables.length,
    size: await getDatabaseSize(database)
  }
}

export const getSchema = (database,table) => {
  const schema = database.table(table).schema.indexes.map(id => id.name);
  const primKey = database.table(table).schema.primKey.keyPath;
  return [primKey, ...schema];
}

export const documentSieve = (query) => {
  const q = _.toLower(query);
  return _.compose(
    _.some(i => _.startsWith(q)(i) || _.includes(q)(i)),
    _.map(_.toLower),
    flattenObject
  );
}

export const flattenObject = (obj) => {
  return _.compose(
    _.flattenDeep,
    _.reduce((acc, val) => {
      return [
        ...acc,
        _.isObject(val) ? flattenObject(val) : val
      ]
    }, []),
    _.values
  )(obj);
}

export const sanitizeQuery = _.compose(_.trim, _.toLower, (n) => {
  const m = Number(n);
  return _.isNaN(m) ? n : _.isNumber(m) && m; 
});

export const recordSieve = (query) => record => {
  const func = filterMethods(query.method);
  return func(sanitizeQuery(query.query))(sanitizeQuery(record[query.key]));
}

export const sendRecords = _.curry(async function(database, table, documents) {
    return await {
      documents,
      count: await database.table(table).count()
    }
  });