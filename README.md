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
Out of the box you'll find you're already setup to build blazing fast SPAs.

To get started, checkout the `./app/router` directory.

## Store
This boilerplate project uses the official VueJS store library, [vuex](https://github.com/vuejs/vuex).
`Vuex` makes managing your complex application's state a cinch. `Vuex` also support "time-travel" debugging.

To get started, checkout the `./app/store` directory.

## Events
This project uses [vue-events](https://github.com/cklmercer/vue-events) to
provide a global event bus. This makes publishing and subscribing to event a breeze.

To learn more about `vue-events`, check it out on [github](https://github.com/cklmercer/vue-events)

## Feathers
This project uses [vue-feathers-services](https://github.com/cklmercer/vue-feathers-services)
to interact with your [FeathersJS](https://github.com/feathersjs/feathers) API.

To learn more about `vue-feathers-services`, check it out on [github](https://github.com/cklmercer/vue-featehrs-services).

## Build Process
To build your project run the gulp command. If you haven't already installed gulp,
do so globally with the following command. _(You might need to use `sudo` to install globally.)_

```
$ npm install -g gulp
```

Once you have gulp installed, you can build your project with the `gulp` command.

```
$ gulp
```

If you'd like for gulp to monitor your project for changes and run automatically,
you can use the `gulp watch` command.

```
$ gulp watch
```

This project uses [laravel-elixir](https://laravel.com/docs/5.3/elixir) to build
and compile assets. I know this may seem odd at first, but give it a chance and
I'm sure you'll love it just as much as I do.

*Disclaimer: Even though `laravel-elixir` is part of the official Laravel namespace,
it doesn't actually have any dependencies on the Laravel core or any PHP files.
It, in fact, works fine by itself and removes the need for huge configuration files.*

## License
[MIT](https://opensource.org/licenses/MIT)
