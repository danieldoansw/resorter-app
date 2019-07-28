'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  // Up() method is for creating or altering a table of some sort
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }
  // down() method is for rolling back the changes made in Up
  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
