export const updateRecord = (database, table, updates) => {
  return database
            .table(table)
            .put(updates)
}

export const deleteRecord = (database, table, id) => {
  let primKey;

  try {
    primKey = Number(id);
    if (isNaN(primKey)) throw new Error('id is not a number');
  } catch(err) {
    primKey = id;
  }

  return database
            .table(table)
            .delete(primKey)
}
