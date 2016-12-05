# vue-feathers-client

Boilerplate for Vue 2.0 projects backed by FeathersJS.

## Setup
```
$ git clone https://github.com:/cklmercer/vue-feathers-client
```
```
$ cd vue-feathers-client
```
```
$ yarn install
```

## Routing
This boilerplate project uses the official VueJS router, [vue-router](https://github.com/vuejs/vue-router).
To get started, checkout the `./app/router` directory.

## Store
This boilerplate project uses the official VueJS store library, [vuex](https://github.com/vuejs/vuex).
To get started, checkout the `./app/store` directory.

## Events
This project uses [vue-events](https://github.com/cklmercer/vue-events) to
provide a global event bus.

To learn more about `vue-events`, check it out on [github](https://github.com/cklmercer/vue-events)

## Feathers
This project uses [vue-feathers-services](https://github.com/cklmercer/vue-feathers-services)
to interact with your [FeathersJS](https://github.com/feathersjs/feathers) API.

To learn more about `vue-feathers-services`, check it out on [github](https://github.com/cklmercer/vue-featehrs-services).

## Build Process
This project uses [laravel-elixir](https://github.com/laravel/elixir) to build
and compile assets. `laravel-elixir` is part of the official [Laravel](https://laravel.com)
namespace, but despite that fact.. it's still very useful for standalone projects.

This project doesn't actually have any Laravel/PHP dependencies. We're strictly
using `laravel-elixir` to handle our build process.

I know this may seem odd at first, but give it a chance and I'm sure you'll be
just as thrilled about it as I am.

## License
[MIT](https://opensource.org/licenses/MIT)
