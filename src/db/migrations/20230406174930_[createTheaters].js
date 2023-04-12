
exports.up = function(knex) {
    return knex.schema.createTable("theaters", (table) => {
        table.increments("theater_id").primary(); // theater_id: (Primary Key) A unique ID for the theater.
        table.string("name"); // name: (String) The name of the theater.
        table.string("address_line_1"); // address_line_1: (String) The first line of the address of the theater.
        table.string("address_line_2"); // address_line_2: (String) The second line of the address of the theater.
        table.string("city"); // city: (String) The city in which the theater is located.
        table.string("state"); // state: (String) The state in which the theater is located.
        table.string("zip"); // zip: (String) The zip in which the theater is located.
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("theaters");
};
