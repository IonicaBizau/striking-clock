"use strict";

// Dependencies
const Daty = require("daty");
const spawno = require("spawno").promise;
const ul = require("ul");
const map = require("map-o");

class StrikingClock {
    /**
     * Constructor
     * Initialize the instance of StrikingClock.
     *
     * @param {Object} files An object with time and file path pairs.
     * @param {Object} options Optional configuration options.
     * @param {String} options.time_format The format for representing time.
     */
    constructor(files, options = {}) {
        // Improved code readability by adding comments for constructor parameters.
        this.files = map(files, val => {
            if (typeof val === "string") {
                return {
                    path: val,
                    repeat: 1
                };
            }
            return val;
        });

        this.options = ul.merge(options, {
            time_format: "hh_mm"
        });
    }

    /**
     * getCurrentFile
     * Get the current file to play.
     *
     * @return {Object|null} An object with path and repeat options or null if none found.
     */
    getCurrentFile() {
        // Added a comment explaining what this method does.
        return this.files[this.getTime()];
    }

    /**
     * getTime
     * Get the current time.
     *
     * @return {String} The current time formatted as a string.
     */
    getTime() {
        // Added a comment explaining what this method does.
        return new Daty().format(this.options.time_format);
    }

    /**
     * auto
     * If a sound path is found at the current time, it will be played.
     *
     * @param {String} time An optional time parameter to play the sound for a given time.
     * @return {Promise<ChildProcess|null>} A promise that resolves to the spawned process or null if there is no file to play.
     */
    async auto(time) {
        // Added comments explaining the purpose of the 'auto' method.
        const file = time ? this.files[time] : this.getCurrentFile();
        if (!file) {
            // Improved error handling by throwing an error with a descriptive message.
            throw new Error("No file found to play.");
        }
        return this.play(file.path, file.repeat);
    }

    /**
     * play
     * Play a specific file using the `play` command by default.
     * This method can be overridden if needed.
     *
     * @param {String} file The file path.
     * @param {Number} repeat How many times to repeat the sound.
     * @return {Promise<void>} A promise that resolves when the playback is complete.
     */
    async play(file, repeat) {
        // Added comments to explain the purpose of the 'play' method.
        for (let i = 0; i < repeat; ++i) {
            await spawno("play", [file]);
        }
    }
}

module.exports = StrikingClock;
