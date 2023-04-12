
exports.up = function(knex) {
    return knex.schema.createTable("movies", (table) => {
        table.increments("movie_id").primary(); // movie_id: (Primary Key) A unique ID for the movie.
        table.string("title"); // title: (String) The title of the movie.
        table.integer("runtime_in_minutes"); // runtime_in_minutes: (Integer) The length of the movie in minutes.
        table.string("rating"); // rating: (String) The rating given to the movie.
        table.text("description"); // description: (Text) A shortened description of the movie.
        table.string("image_url"); // image_url: (String) A URL to the movie's poster.
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("movies");
};
