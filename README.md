# Reactive Programming with RxJS
##### Untangle Your Asynchronous JavaScript Code
###### by Sergi Mansilla
[Publisher Page](https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs)
[Amazon](http://www.amazon.com/Reactive-Programming-RxJS-Asynchronous-JavaScript/dp/1680501291)

**Book version: P1.0—December 2015**

This includes examples of `Reactive Programming with RxJS` book. 

## Before We Start

We need to download `rx`

`$ npm i`

## Chapter 1 

### Footnotes

http://queue.acm.org/detail.cfm?id=2169076

http://rx.codeplex.com/

## Chapter 2

#### [Example Earthquake](https://github.com/behicsakar/reactive-programming-with-rxjs/tree/master/examples/earthquake/)

Using the concepts that we’ve covered so far in this chapter, we’ll build a web application that uses RxJS to show us where earthquakes are happening in real time. We’ll start by building a functional but naive reactive implementa- tion, and we’ll improve it as we go. The final result will look like this:

![Example Earthquake Image](https://github.com/behicsakar/reactive-programming-with-rxjs/raw/master/examples/earthquake/earthquake.png 'Earthquake')

### Footnotes

https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md

## Chapter 3

#### [Example Spaceship](https://github.com/behicsakar/reactive-programming-with-rxjs/tree/master/examples/spaceship/)

In our game, the player will move the spaceship horizontally using the mouse, and will shoot by clicking the mouse or tapping the spacebar. Our game will have four main actors: the moving star field in the background, the player’s spaceship, the enemies, and the shots from both the player and the enemies.
It will look like this:

![Example Earthquake Image](https://github.com/behicsakar/reactive-programming-with-rxjs/raw/master/examples/spaceship/spaceship.png 'Spaceship')

### Footnotes

*.combineLatest()*

http://reactivex.io/documentation/operators/combinelatest.html

https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/combinelatest.md

*.sample()*

https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/operators/sample.md

### Small Errors Within Sample Codes on Book

---

> **In Ch2**
> Purity and the Observable Pipeline Segment
> spaceship_reactive/pipeline.js" code part

~~FALSE : Rx.Observable.from(1,2,3,4,5,6,7,8)~~

TRUE : Rx.Observable.from([1,2,3,4,5,6,7,8])   `// should be array`

---

> **In Ch3**
> "RxJS's Subject Class" Section
> after the sample code

FALSE "In the preceding example we create a new Subject and a source Observable that emits an integer every ~~second.~~"

TRUE  "In the preceding example we create a new Subject and a source Observable that emits an integer every **300 milisecond.**"

---

> https://media.pragprog.com/titles/smreactjs/code/spaceship_reactive/enemy_shots2.js
> in this script something was wrong.
> i debug it and realized that `enemy.length` are not found error.
> I just added `try catch` block on enemy_shots2.js:83

```javascript
var SHOOTING_SPEED = 15;
function paintHeroShots(heroShots, enemies) {
  heroShots.forEach(function(shot, i) {
    try { var enemies_length = enemies.length }
    catch(err) { var enemies_length = 0 }
    for (var l=0; l < enemies_length || 0; l++) {
      var enemy = enemies[l];
      if (!enemy.isDead && collision(shot, enemy)) {
        enemy.isDead = true;
        shot.x = shot.y = -100;
        break;
      }
    }

    shot.y -= SHOOTING_SPEED;
    drawTriangle(shot.x, shot.y, 5, '#ffff00', 'up');
  });
}
```

---


> **CH3** example
>in score.js

FALSE 191 var ScoreSubject = new ~~Rx.Subject(0);~~

TRUE 191 var ScoreSubject = new **Rx.BehaviorSubject(0);**

---

> https://media.pragprog.com/titles/smreactjs/code/examples_earthquake_ui/code3.bufferWithTime.js
> in this link line 54

`.filter(function(rows) { return rows.length > 0; } // (2))`

**a closed parantehesis should be before comment not after.**

---

> https://media.pragprog.com/titles/smreactjs/code/hot_cold.js

```
var rangeToFive = Rx.Observable.range(1, 5);
var obs1 = rangeToFive.subscribe(printValue); // 1, 2, 3, 4, 5
var obs2 = Rx.Observable
  .delay(2000)
  .flatMap(function() {
    return rangeToFive.subscribe(printValue); // 1, 2, 3, 4, 5
  });
```

FALSE : `var obs2 = Rx.Observable.delay(2000)`

TRUE : `var obs2 = Rx.Observable.just().delay(2000)`
