# UwU API

This is a simple Hono server that provides an API for "UwUifying" your text messages.

## How to use

The API has two endpoints:

1. `/`: This is the root endpoint. When you make a GET request to this endpoint, it will return a JSON object with instructions on how to use the `/uwu` endpoint.

2. `/uwu`: This is the endpoint that does the UwUifying.
   It accepts a GET request with a query parameter named `message`. The value of this parameter should be the text you want to UwUify.

Here's an example of how to use the `/uwu` endpoint:

```
GET /uwu?message=Hello, world!
```

The server will respond with a JSON object that contains your UwUified message.

## Running the server

To run the server, you need to have Bun installed (`npm i -g bun`) on your machine.

Once you have Bun installed, you can start the server by running the following command in your terminal:

```sh
bun start
```

The server will start running on port 3000.

You can then access the API by making requests to `http://localhost:3000`.

## Dependencies

This project depends on the `hono` package. You can install it by running `bun i` in your terminal.

## License

This project is licensed under the Apache License, Version 2.0. You can read the full license in the [LICENSE](LICENSE) file.
