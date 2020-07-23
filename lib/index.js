"use strict";

// Dependencies
const Daty = require("daty")
    , spawno = require("spawno").promise
    , ul = require("ul")
    , map = require("map-o")

module.exports = class StrikingClock {
    /**
     * StrikingClock
     * Initialize the instance of StrikingClock.
     *
     * @name strikingClock
     * @function
     * @param {Object} files An object following the patern below:
     *
     *     ```js
     *     {
     *       "00:00": "path/to/midnight.mp3"
     *     }
     *     ```
     * @return {Number} Return description.
     */
    constructor (files, options) {

        this.files = map(files, val => {
            if (typeof val === "string") {
                return {
                    path: val,
                    repeat: 1
                }
            }
            return val
        })

        this.options = ul.merge(options, {
            time_format: "hh_mm"
        })
    }

    /**
     * getCurrentFile.
     *
     * @name getCurrentFile
     * @function
     * @return {Object} The path to the file to play and the other options.
     */
    getCurrentFile () {
        return this.files[this.getTime()]
    }

    /**
     * getTime
     * Get the current time.
     *
     * @name getTime
     * @function
     * @return {String} The current time, formatted as string.
     */
    getTime () {
        return new Daty().format(this.options.time_format)
    }

    /**
     * auto
     * If a sound path is found at the current time, it will
     * be played.
     *
     * @name auto
     * @function
     * @param {String} An optional time param to play the sound for a given time.
     * @return {Process} The spawned process or `null` if there is no file to play.
     */
    async auto (time) {
        const file = time ? this.files[time] : this.getCurrentFile()
        if (!file) {
            return null
        }
        return this.play(file.path, file.repeat)
    }

    /**
     * play
     * Play a specific file. This uses the `play` command by default.
     * If needed, can be overridden using `StrikingClock.prototype.play = ...`
     *
     * @name play
     * @function
     * @param {String} file The file path.
     * @param {Number} repeat How many times to repeat the sound.
     * @return {String} The child process.
     */
    async play (file, repeat) {
        for (let i = 0; i < repeat; ++i) {
            await spawno("play", [file])
        }
    }
}
