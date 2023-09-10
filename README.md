# WeLoveMovies

## Description

WeLoveMovies is a backend application that serves as the foundation for a movie-related information platform. It provides users with access to data about movies, theaters, and reviews. This backend project focuses on building specific routes and setting up a database to deliver movie-related information via a RESTful API.

## Technologies & Tools

The WeLoveMovies project utilizes the following technologies and tools:
- Node.js
- Express.js
- Knex.js
- PostgreSQL
- CORS (Cross-Origin Resource Sharing)

## API Paths

The WeLoveMovies backend provides the following API endpoints:

- `GET /movies`: Retrieves a list of movies.
- `GET /movies/:movieId`: Retrieves details of a specific movie by its ID.
- `POST /movies`: Creates a new movie entry.
- `PUT /movies/:movieId`: Updates details of a specific movie by its ID.
- `DELETE /movies/:movieId`: Deletes a movie by its ID.

- `GET /theaters`: Retrieves a list of theaters.
- `GET /theaters/:theaterId`: Retrieves details of a specific theater by its ID.
- `POST /theaters`: Creates a new theater entry.
- `PUT /theaters/:theaterId`: Updates details of a specific theater by its ID.
- `DELETE /theaters/:theaterId`: Deletes a theater by its ID.

- `GET /reviews`: Retrieves a list of reviews for movies or theaters.
- `GET /reviews/:reviewId`: Retrieves details of a specific review by its ID.
- `POST /reviews`: Creates a new review for a movie or theater.
- `PUT /reviews/:reviewId`: Updates details of a specific review by its ID.
- `DELETE /reviews/:reviewId`: Deletes a review by its ID.

- `GET /search/movies`: Search for movies by title or keywords.
- `GET /search/theaters`: Search for theaters by name or location.
- `GET /search/reviews`: Search for reviews by keywords or user.

## Run Locally

To run the WeLoveMovies backend locally, follow these steps:
1. Clone the repository: `git clone https://github.com/macadamsch/welovemovies.git`
2. Change directory to the project folder: `cd welovemovies`
3. Install dependencies: `npm install` or `yarn install` if you're using Yarn.
4. Configure your database connection in the `knexfile.js` file.
5. Run migrations to set up the database: `npm run knex migrate:latest` or `yarn knex migrate:latest`.
6. Run seed scripts to populate the database: `npm run knex seed:run` or `yarn knex seed:run`.
7. Start the server: `npm start` or `yarn start`.
