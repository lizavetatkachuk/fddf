require('dotenv').config();
let CONFIG = {}
CONFIG.app          = process.env.APP   || 'dev';
CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_dialect   = process.env.DB_DIALECT    || 'mysql';
CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_name      = process.env.DB_NAME       || 'crypto_db';
CONFIG.db_user      = process.env.DB_USER       || 'root';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'root';

CONFIG.jwt_encryption  = process.env.JWT_ENCRYPTION || 'HS512';

module.exports = CONFIG;