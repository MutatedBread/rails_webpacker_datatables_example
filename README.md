# README

## DataTables Example

This is an example for integrating DataTables.net into a Rails 6 project with Webpacker.

## To Run

0. You need Yarn and Ruby 2.7 installed.
1. Run

```
bundle install
yarn install

rails db:create db:migrate
rails s
```

2. Get some dummy datas

```
rails c
FactoryBot.create_list :member, 10
```

3. Head to `localhost:3000` to see the table in work.

## Files of interest

1. config/webpack/loaders/jquery.js
2. config/webpack/loaders/datatables.js
3. config/webpack/environment.js
4. app/javascript/packs/application.js
