// const db = require('../utils/db');

// async function authenticateUser(username, password, role) {
//   const result = await db.query(
//     'SELECT * FROM users WHERE username = $1 AND password = $2 AND role = $3',
//     [username, password, role]
//   );
//   return result.rows[0];
// }

// module.exports = {
//   authenticateUser,
// };