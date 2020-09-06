import connection from './mysql-config';

export const queryAll = (table: string) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${table}`,
      (error: Error, result: Response) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

export const queryBy = (table: string, query: {}): Promise<any[]> => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table} WHERE ?`;
    connection.query(sql, query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const addNew = (table: string, resource: {}) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO ${table} SET ?`;
    connection.query(sql, resource, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const deleteOne = (table: string, id: {}) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM ${table} WHERE ?`;
    connection.query(sql, id, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
