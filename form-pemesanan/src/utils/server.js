// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const { Pool } = require('pg');

// const app = express();
// const port = process.env.PORT || 5000;

// const pool = new Pool({
//   user: 'your_db_user',
//   host: 'your_db_host',
//   database: 'your_db_name',
//   password: 'your_db_password',
//   port: 5432,
// });

// app.use(bodyParser.json());
// app.use(cors());

// app.post('/api/login', async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const result = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
//     if (result.rowCount > 0) {
//       const user = result.rows[0];
//       const match = await bcrypt.compare(password, user.password);
//       if (match) {
//         res.send({ success: true });
//       } else {
//         res.status(401).send({ success: false, message: 'Invalid password' });
//       }
//     } else {
//       res.status(404).send({ success: false, message: 'User not found' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({ success: false, message: 'Internal server error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
