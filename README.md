## Jasmine-Testing (Lesson 22)
- Javascript doesn´t have `unix test` functions by default. 
- Therefore the _popular, easy to use_ [Jasmine Library](https://jasmine.github.io/)(version 2.2) is needed.
- The way to organize a test is up to you and your preferences. No right or wrong way.

## Jasmine Syntax:
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
### Organize a test: Introducing Specs and Suites
- `Describe` and `It` are used to create an __outline__.
- They are used to __ORGANIZE information__.

#### Specs 
- `It` = used to create a __specification(SPEC)__. 
- A `spec` = a _container_ for a __test__, to identify the exact feature to test.
-  `Spec passes`=__If all exceptations(spec) within a spec return "TRUE"__.
-  `Spec fails`=__If any of the exceptations(spec) within a spec returns "FALSE"__.
- `It`= to define the _boundry to its test._

#### Suites 
- `Describe` = used to identify a __suite(SUITE)__. 
- a `Suite`= a __group of related specs__.
- Everything contained within this block of code is related to the Suite (e.g.´Player´).
- It is a level of `indentation`.

### Write a test:
`__(1)__expect(__(_2)__add(0.1, 0.2)).__(3)__toBe(__(4)__0.3);`
- (1) The __launching point__ of any test to _start the test process_: each test start with a call to `expect`. 
- (2) The __process function__ excepts a _single value_, called the `actual`, to test.
- (3) The __comparision method__ called the `matcher`, it is chained after the call to expect. Example: .toBe = equivalant to "strict=comparison".
- (4) The __expected value__ what you expect the process function with the comparision methd to `return`.

`expect(add(0.1, 0.2)).toBe(0.3);`
= `(add(0.1, 0.2)) === (0.3);` 
- If this expression returns `true`= Test `passes`.
- if this expression returns `false`= Test `do NOT pass`. 






















