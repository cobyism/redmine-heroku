<img src="https://cloud.githubusercontent.com/assets/296432/3865771/e9dde8ba-1fa8-11e4-9ce6-193fc429175c.png" width="120px" />


# Redmine (on Heroku)

This repository is a fork of [Redmine](http://www.redmine.org) (an open source project management application) with the aim of modifying it so that it can be deployed directly to Heroku with no modifications, using only the button below.

## How to deploy Redmine on Heroku

1.  Click this button, and follow the instructions :point_right: [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
2. Make sure you have the [Heroku Toolbelt](https://toolbelt.heroku.com) installed.
3. After you have an instance running on Heroku, run these commands in your terminal.

```
heroku git:clone -a <your-app-name>
cd <your-app-name>
heroku run rake redmine:load_default_data
```

You can now log into your Redmine installation using the initial user account (username: `admin`,  password: `admin`).

## License

Like Redmine, this code is licensed under the [GNU GPL v2.0](./LICENSE) license.
