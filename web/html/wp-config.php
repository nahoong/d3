<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'main');

/** MySQL database username */
define('DB_USER', 'webmaster');

/** MySQL database password */
define('DB_PASSWORD', '$up3r$up3ruser');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/d<oIJB9Ur@%~E1OSz$tXMmdPmyf$lGz2z@w$<x*#o.|Em5IyDFUlYf9!Jy8y[a:');
define('SECURE_AUTH_KEY',  '=f3g@%+Lr#wrI.+d5)_~3}1FB08pnTDSd9@iFT%*=5f56$@QIkwveMWlTNUd5i[l');
define('LOGGED_IN_KEY',    'Pd}lIrhF1u/f*_?NWu*%=:&=C]*_U>9+v>wsT9w@/fAxLQKoP/|nj|@th<.}N4v-');
define('NONCE_KEY',        '$b_LOT@*+5-uZ2m.y0,2}i{Ule?1luSt0ydmZqGEjA5WQvGv1r_B#.jss!?n~{yw');
define('AUTH_SALT',        'F1Sh~MKNQf(1p#3HyTQO(YXY#KQ!{CST]-]rD&/-cNFn7:lGEJ65f,v_{Yh*W=vz');
define('SECURE_AUTH_SALT', '(-5t7OvTQ+MnAG*&ZT`.M=#o O<uB,A6+|0Ni;HeE<3)a[@2p{=ISs3}xmi4tn]1');
define('LOGGED_IN_SALT',   'FM}47bgsM(e0V!&X_Ix[C, LV:ssG7`{T#b/-2Ap|x=y0B _m>z@o?^8VAVB(PPy');
define('NONCE_SALT',       'DL4CZ|Bu.;/e@|74~(]*~^<1[PZ?SfV(Z>q$N$|yLz-GVBHWQ2|@n]U$ojh{L1~f');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

