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
  it(´should be able to play a Song´, function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);
```
## Organize a test: Introducing Specs and Suites
- `Describe` and `It` are used to create an __outline__.
- They are used to __ORGANIZE information__.

### Specs 
- `It` = used to create a __specification(SPEC)__. 
- A `spec` = a _container_ for a __test__, to identify the exact feature to test.
-  `Spec passes`=__If all exceptations(spec) within a spec return "TRUE"__.
-  `Spec fails`=__If any of the exceptations(spec) within a spec returns "FALSE"__.
- `It`= to define the _boundry to its test._

### Suites 
- `Describe` = used to identify a __suite(SUITE)__. 
- a `Suite`= a __group of related specs__.
- Everything contained within this block of code is related to the Suite (e.g.´Player´).
- It is a level of `indentation`.

## Write a test:
`expect(add(0.1, 0.2)).toBe(0.3);`
- (1) The __launching point__ of any test to _start the test process_: each test start with a call to `expect`. 
- (2) The __process function__ excepts a _single value_, called the `actual`, to test.
- (3) The __comparision method__ called the `matcher`, it is chained after the call to expect. 
      Example: `.toBe` = equivalant to "strict=comparison".
- (4) The __expected value__ what you expect the process function with the comparision methd to `return`.

- If this expression returns `true`= Test `passes`:
`expect(add(0.1, 0.2)).toBe(0.3);`
= `(add(0.1, 0.2)) === (0.3);` 

- If this expression returns `false`= Test `do NOT pass`. 
- To negate a test (test expression = `false`)
= `expect(add(0.1, 0.2)).not.toBe(0.1);`

## Quiz: Would this spec pass or fail?
- A spec can contain multiple test, but each test must return `true` for the spec to `pass` the test.
```
 it(´should consider this spec´.function() {
    expect(true).toBe(true);
    expect(false).not.toBe(false); 
```
- This spec would `fail` because our second test is returning `false`.

## Getting Started with Red-Green-Refactor
- Write your test first.
- They all fail, since there is no code to make them pass.
- Then you go write your code to make your test pass.
- Once that is complete, you can safely refactor your code, as you continue to add new features.

























