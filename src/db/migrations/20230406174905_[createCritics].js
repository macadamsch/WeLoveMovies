
exports.up = function(knex) {
    return knex.schema.createTable("critics", (table) => {
        table.increments("critic_id").primary(); // critic_id: (Primary Key) A unique ID for the critic.
        table.string("preferred_name"); // preferred_name: (String) The critic's preferred first name.
        table.string("surname"); // surname: (String) The critic's last name.
        table.string("organization_name"); // organization_name: (String) The name of the organization the critic works for.
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("critics");
};
