# LIRET

_Laravel Inertia REact TypeScript_

A batteries-included starter for Laravel apps.

## Setup

```sh
git clone https://github.com/dotangad/liret new-project
composer && npm i
cp .env.example .env
./vendor/bin/sail up -d
./vendor/bin/sail artisan migrate:fresh --seed
./vendor/bin/sail artisan websockets:serve                 # Optional: not required if your app does not need websockets
npm run watch
```

## Frontend

### Types

Types for the app are defined in `resources/js/lib/types.tsx`, this file has the interface `IPageProps`, which is used with the `usePage` hook from Inertia for typing shared data coming from the backend.

```tsx
const { props: { user } } = usePage<IPageProps>();
```

This file also has `IUser`, the interface for the User model.

### `useTitle`

`resources/js/lib/use-title.tsx` contains the `useTitle` hook. You could also use [Inertia's `Head` component](https://inertiajs.com/title-and-meta) for this.

### Artisan command to create pages

`php artisan make:page <PAGE NAME>` creates a page in `resources/js/pages` using the template in `resources/js/pages/template.tsx`.

## Authentication

LIRET supports authentication with email-password, Github and Google out of the box. Social authentication is implemented with [Socialite](https://laravel.com/docs/8.x/socialite), so it should be easy to add other providers. See `app/Http/Controllers/SocialAuthController.php` for implementation.

## Authorization

Admin accounts have the `admin` property on the `User` model set to true. By default, all users who register via the `/auth/register` route are not admins.

### Seeded admin account

The database seeder creates an admin account with the following credentials:

```
Email: admin@example.com
Password: adminadmin
```

### Gates

Two gates are defined in `AppServiceProvider.php`, they're used for authorization in the controllers and routes.

```php
    Gate::define('admin', fn (User $user) => $user->admin);
    Gate::define('user', fn (User $user) => !$user->admin);
```

### Frontend Authorization

`resources/js/lib/authorization.tsx` contains the following components - `Admin`, `User`, `Authenticated` and `Guest`. These show/don't show the children passed to them based on the user and authentication state.

```tsx
<Admin>
  Only an admin can see this
</Admin>

<User>
  Only a user who is not an admin can see this
</User>

<Authenticated>
  Both users and admins can see this
</Authenticated>

<Guest>
  Logged in users can not see this
</Guest>
```

## Laravel Websockets

A dashboard is available at `/laravel-websockets`, clicking on `Connect` establishes a websocket connection with the server.

Read the documentation [\[1\]](https://laravel.com/docs/8.x/broadcasting) [\[2\]](https://laravel.com/docs/8.x/events) for usage instructions.

## Linting and Formatting

This project comes with ESLint and Prettier setup out of the box, configs are in `.eslintrc.js` and `.prettierrc` respectively.

There's also husky and pretty-quick for pre-commit formatting.

## TODO
