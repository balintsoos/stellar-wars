/**
 * Module dependencies
 */
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import nconf from 'nconf'
import compression from 'compression'
import helmet from 'helmet'
import chalk from 'chalk'

/**
 * Controllers (route handlers)
 */
// TODO

/**
 * Config loader
 */
nconf.argv()
  .env()
  .file({ file: './config.json' })

/**
 * Create server
 */
const app = express()

/**
 * Server configuration
 */
app.use(helmet())
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/*
 * Routes
 */
// TODO

/*
 * Start server
 */
app.listen(nconf.get('PORT'), () => {
  console.log(
    chalk.green('Server listening'),
    chalk.white('@'),
    chalk.underline.magenta(`http://localhost:${nconf.get('PORT')}`)
  )
})
