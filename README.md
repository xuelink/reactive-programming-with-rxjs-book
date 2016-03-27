# Reactive Programming with RxJS
##### Untangle Your Asynchronous JavaScript Code
###### by Sergi Mansilla

[Publisher Page](https://pragprog.com/book/smreactjs/reactive-programming-with-rxjs)

[Amazon](http://www.amazon.com/Reactive-Programming-RxJS-Asynchronous-JavaScript/dp/1680501291)

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
