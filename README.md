<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# `$ striking-clock`

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/striking-clock.svg)](https://www.npmjs.com/package/striking-clock) [![Downloads](https://img.shields.io/npm/dt/striking-clock.svg)](https://www.npmjs.com/package/striking-clock)

> A small cli to simulate a striking clock.

## :cloud: Installation

You can install the package globally and use it as command line tool:


```sh
# Using npm
npm install --global striking-clock

# Using yarn
yarn global add striking-clock
```


Then, run `striking-clock --help` and see what the CLI tool can do.


```
$ striking-clock --help
Usage: striking-clock [options]

A small cli to simulate a striking clock.

Options:
  -t, --time <time>        An optional time argument.
  -f, --sound-file <file>  The file path to the chiming sound.
  -h, --help               Displays this help.
  -v, --version            Displays version information.

Documentation can be found at https://github.com/IonicaBizau/striking-clock#readme.
```

## :clipboard: Example


Here is an example how to use this package as library. To install it locally, as library, you can do that using `npm` (or `yarn`):

```sh
# Using npm
npm install --save striking-clock

# Using yarn
yarn add striking-clock
```



```js
const StrikingClock = require("striking-clock")

const DEFAULT_PATH = `${__dirname}/../lib/default.mp3`

const myClock = new StrikingClock({
    // Hourly
    "00:00": { path: DEFAULT_PATH, repeat: 12 }
  , "01:00": DEFAULT_PATH
  , "02:00": { path: DEFAULT_PATH, repeat: 2 }
  , "03:00": { path: DEFAULT_PATH, repeat: 3 }
  , "04:00": { path: DEFAULT_PATH, repeat: 4 }
  , "05:00": { path: DEFAULT_PATH, repeat: 5 }
  , "06:00": { path: DEFAULT_PATH, repeat: 6 }
  , "07:00": { path: DEFAULT_PATH, repeat: 7 }
  , "08:00": { path: DEFAULT_PATH, repeat: 8 }
  , "09:00": { path: DEFAULT_PATH, repeat: 9 }
  , "10:00": { path: DEFAULT_PATH, repeat: 10 }
  , "11:00": { path: DEFAULT_PATH, repeat: 11 }
})

myClock.auto("07:00")
```





## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:

 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:




## :memo: Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:



## :scroll: License

[MIT][license] © [Ionică Bizău][website]


[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg

[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2020#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
