import equals from 'lodash/fp/equals';
import includes from 'lodash/fp/includes';
import startsWith from 'lodash/fp/startsWith';
import identity from 'lodash/fp/identity';
import map from 'lodash/fp/map';
import flatten from 'lodash/fp/flatten';
import flattenDeep from 'lodash/fp/flattenDeep';
import reduce from 'lodash/fp/reduce';
import toLower from 'lodash/fp/toLower';
import compose from 'lodash/fp/compose';
import some from 'lodash/fp/some';
import isObject from 'lodash/fp/isObject';
import isNumber from 'lodash/fp/isNumber';
import curry from 'lodash/fp/curry';
import values from 'lodash/fp/values';
import trim from 'lodash/fp/trim';
import filesize from 'filesize';

export const filterMethods = (method) => {
  switch(method) {
    case 'is':
      return equals;
    case 'isNot':
      return q => i => !equals(q)(i);
    case 'like':
      return includes
    case 'notLike':
      return q => i => !includes(q)(i);
    case 'startsWith':
      return startsWith
    case 'doesntStartWith':
      return q => i => !startsWith(q)(i);
    case 'greaterThan':
      return n => m => Number(m) >= Number(n);
    case 'lessThan':
      return n => m => Number(m) <= Number(n);
    default: 
      return identity
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
    .then(flatten)
    .then(map(JSON.stringify))
    .then(reduce((acc, val) => acc + val.length, 0))
    .then(filesize)
}

export const getTableSize = async (table) => {
  return table.toArray()
    .then(map(JSON.stringify))
    .then(reduce((acc, val) => acc + val.length, 0))
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
  const q = toLower(query);
  return compose(
    some(i => startsWith(q)(i) || includes(q)(i)),
    map(toLower),
    flattenObject
  );
}

export const flattenObject = (obj) => {
  return compose(
    flattenDeep,
    reduce((acc, val) => {
      return [
        ...acc,
        isObject(val) ? flattenObject(val) : val
      ]
    }, []),
    values
  )(obj);
}

export const sanitizeQuery = compose(trim, toLower, (n) => {
  const m = Number(n);
  return isNaN(m) ? n : isNumber(m) && m; 
});

export const recordSieve = (query) => record => {
  const func = filterMethods(query.method);
  return func(sanitizeQuery(query.query))(sanitizeQuery(record[query.key]));
}

export const sendRecords = curry(async function(database, table, documents) {
    return await {
      documents,
      count: await database.table(table).count()
    }
  });