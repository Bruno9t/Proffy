import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', table => {

        table.increments('id').primary().unsigned()
        table.string('name',100).notNullable()
        table.string('avatar',200).notNullable()
        table.string('whatsapp',100).notNullable()
        table.string('bio').notNullable()

    })

}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users')
}

