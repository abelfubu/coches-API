import connection from './mysql-config';

export const queryAll = (table: string) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table}`,
      (error: Error, result: Response) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
  });
};

export const queryBy = (table: string, query: {}) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM ${table} WHERE ?`;
    connection.query(sql, query, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
};

export const addNew = (table: string, resource: {}) => {
  return new Promise((resolve, reject) => {
    let sql = `INSERT INTO ${table} SET ?`;
    connection.query(sql, resource, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
};

export const deleteOne = (table: string, id: {}) => {
  return new Promise((resolve, reject) => {
    let sql = `DELETE FROM ${table} WHERE ?`;
    connection.query(sql, id, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
};
