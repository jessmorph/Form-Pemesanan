// const db = require('../utils/db');

// async function createUser(username, password, role) {
//   const result = await db.query(
//     'INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING *',
//     [username, password, role]
//   );
//   return result.rows[0];
// }

// module.exports = {
//   createUser,
// };
