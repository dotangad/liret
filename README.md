# LIRET

_Laravel Inertia REact TypeScript_

A batteries-included starter for Laravel apps.

## Setup

```sh
git clone https://github.com/dotangad/liret new-project
composer && npm i
cp .env.example .env
./vendor/bin/sail up -d
npm run watch
```

## How to use Laravel Websockets?

1. Run the Websocket Server

```sh
./vendor/bin/sail artisan websockets:server
```

2. Check by going to http://localhost:5432/laravel-websockets and click on `Connect`
3. Create an Event

```sh
./vendor/bin/sail artisan make:event <Event>
# Example: ./vendor/bin/sail artisan make:event NotificationCreated
```

4. Do other stuff as required

## TODO

- [x] Laravel websockets
