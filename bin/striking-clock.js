#!/usr/bin/env node
"use strict";

const Tilda = require("tilda")
    , StrikingClock = require("..")
    ;

new Tilda(`${__dirname}/../package.json`, {
    options: [
        {
            name: "file"
          , opts: ["f", "sound-file"]
          , desc: "The file path to the chiming sound."
          , default: `${__dirname}/../lib/default.mp3`
        }
      , {
            name: "time"
          , opts: ["t", "time"]
          , desc: "An optional time argument."
        }
    ]
}).main(action => {
    const soundFile = action.options.soundFile.value
    const myClock = new StrikingClock({
        // Hourly
        "00:00": { path: soundFile, repeat: 12 }
      , "01:00": soundFile
      , "02:00": { path: soundFile, repeat: 2 }
      , "03:00": { path: soundFile, repeat: 3 }
      , "04:00": { path: soundFile, repeat: 4 }
      , "05:00": { path: soundFile, repeat: 5 }
      , "06:00": { path: soundFile, repeat: 6 }
      , "07:00": { path: soundFile, repeat: 7 }
      , "08:00": { path: soundFile, repeat: 8 }
      , "09:00": { path: soundFile, repeat: 9 }
      , "10:00": { path: soundFile, repeat: 10 }
      , "11:00": { path: soundFile, repeat: 11 }
    })
    myClock.auto(action.options.time.value)
});
