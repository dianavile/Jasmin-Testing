## Jasmine-Testing (Lesson 22)
- Javascript doesn´t have `unix test` functions by default. 
- Therefore the _popular, easy to use_ [Jasmine Library](https://jasmine.github.io/)(version 2.2) is needed.

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
### Introducing Specs and Suites
- `Describe` and `It` are used to create an __outline__.
- They are used to __ORGANIZE information__.

#### Specs 
- `It` = used to create a __specification(SPEC)__. A `spec` = a _container_ for a __test__, to identify the exact feature to test.
-  `Spec passes`=__If all exceptations(spec) within a spec return "TRUE"__.
-  `Spec fails`=__If any of the exceptations(spec) within a spec returns "FALSE"__.
- `It`= to define the _boundry to its test._

#### Suites 
- `Describe` = used to create a __suite(SUITE)__. 














