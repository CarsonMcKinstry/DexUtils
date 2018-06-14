import isEmpty from 'lodash/fp/isEmpty';
import uniq from 'lodash/fp/uniq';
import trim from 'lodash/fp/trim';
import { sendRecords, documentSieve, recordSieve} from './utils';

export const fuzzyQuery = (database, table, query, offset = 1, limit = 10) => {
  const db = database.table(table);

  return isEmpty(trim(query))
    ? db
        .offset((offset-1) * limit)
        .limit(limit)
        .toArray()
        .then(sendRecords(database, table))
    : db
        .filter(documentSieve(query))
        .offset((offset-1) * limit)
        .limit(limit)
        .toArray()
        .then(async (documents) => {
          return await {
            documents,
            count: await db.filter(documentSieve(query)).count()
          }
        });
}

export const advancedQuery = (database, table, queryArray, offset = 1, limit = 10) => {
  const sliceStart = (offset - 1) * limit;
  const sliceEnd = ((offset - 1) * limit + 10);
  let collection = database
    .table(table)
    .toArray()
    .then(records => ({
      nextRecords: [],
      records
    }));

  if (queryArray.filter(q => q.use).length < 1) {
    return collection.then(({records}) => records);
  }

  return queryArray.filter(q => q.use).reduce((col, query, i) => {
    return col.then(({nextRecords, records}) => {
      let next;

      if (i === 0) {
        next = records.filter(recordSieve(query));
      } else if (query.operator === 'or') {
        next = uniq([...nextRecords,...records.filter(recordSieve(query))]);
      } else if (query.operator === 'and') {
        next = nextRecords.filter(recordSieve(query));
      }

      return {
        nextRecords: next || [],
        records
      }
    })
  }, collection)
    .then(({nextRecords}) => nextRecords)
    .then(nextRecords => {
      return {
        documents: nextRecords.slice(sliceStart, sliceEnd),
        count: nextRecords.length
      }
    })
    // .then(sendRecords(database, table));
}