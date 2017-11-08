# Donation page

Features:

* Donate via Stripe
* Simple express server to handle payments

## Config

Copy the config file to `config.yml`:

```
cp example.config.yml config.yml
```

Set paramaters in config or can also set them as environment variables.

And set your stripe keys.:

```
process.env.SECRET_KEY
process.env.PUBLISHABLE_KEY
```

And set your app name & URL:

```
process.env.APP_NAME
process.env.APP_URL
```
## Development

* `npm run dev` to run server and watch client javascript files + rebuild automatically
* `npm start` to build and run server for production

## License

[MIT](LICENSE.md)
