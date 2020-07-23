## Documentation

You can see below the API reference of this module.

### `strikingClock(files)`
StrikingClock
Initialize the instance of StrikingClock.

#### Params

- **Object** `files`: An object following the patern below:
    ```js
    {
      "00:00": "path/to/midnight.mp3"
    }
    ```

#### Return
- **Number** Return description.

### `getCurrentFile()`
getCurrentFile.

#### Return
- **Object** The path to the file to play and the other options.

### `getTime()`
Get the current time.

#### Return
- **String** The current time, formatted as string.

### `auto(An)`
If a sound path is found at the current time, it will
be played.

#### Params

- **String** `An`: optional time param to play the sound for a given time.

#### Return
- **Process** The spawned process or `null` if there is no file to play.

### `play(file, repeat)`
Play a specific file. This uses the `play` command by default.
If needed, can be overridden using `StrikingClock.prototype.play = ...`

#### Params

- **String** `file`: The file path.
- **Number** `repeat`: How many times to repeat the sound.

#### Return
- **String** The child process.

