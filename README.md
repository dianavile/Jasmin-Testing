## Jasmine-Testing (Lesson 22)
- Javascript doesn´t have `unix test` functions by default. Therefore the [Jasmine Library](https://jasmine.github.io/)(version 2.2) is needed. It is a popular, easy to use library.

## Jasmine Syntax
- 1) `Describe()` calls = colored __black__
```
describe("Player", function() {
  var player;
  var song;
```
- 2) `It()` calls= colored _green!_
```
  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
```
### Introducing Suites and Specs










