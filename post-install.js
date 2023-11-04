/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

var gentlyCopy = require('gently-copy')

var filesToCopy = [
    'default_configs/.commitlintrc.js',
    'default_configs/jest.config.js',
    'default_configs/tsconfig.json',
    'default_configs/.eslintrc.js',
    'default_configs/stylelint.config.js',
    'default_configs/webpack.config.js',
]

// User's local directory
var userPath = process.env.INIT_CWD

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)