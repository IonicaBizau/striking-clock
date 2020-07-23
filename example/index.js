"use strict";

const StrikingClock = require("../lib")

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
