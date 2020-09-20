import con from './mysql-config';

export const queryAll = (table: string) => {
  return con.query(`SELECT * FROM ${table}`);
};

export const queryBy = (table: string, query: {}): Promise<any[]> => {
  const sql = `SELECT * FROM ${table} WHERE ?`;
  return con.query(sql, query);
};

export const addNew = (table: string, resource: {}) => {
  const sql = `INSERT INTO ${table} SET ?`;
  return con.query(sql, resource);
};

export const deleteOne = (table: string, id: {}) => {
  const sql = `DELETE FROM ${table} WHERE ?`;
  return con.query(sql, id);
};
