# CloudFlare Swiftype Search App

This is a CloudFlare App that injects the "nocode" install into a CloudFlare domain.

## Hacky Test App

Due to the way this works, it's hard to test locally. I've written a copy of the `swiftype.js` code that points at `localhost:3000` to work locally.

To use it:

1. Make sure you have Sinatra installed.
2. Create a Domain in your local app, then give it a `cloudflare_domain_id` of "90909".
3. cd to test and run ruby server.rb
4. Browse to http://localhost:4567/index.html


