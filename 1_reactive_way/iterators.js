function iterateOnMultiples(arr, divisor){
  this.cursor = 0;
  this.array = arr;
  this.divisor = divisor || 1;
}

iterateOnMultiples.prototype.next = function(){
  while (this.cursor < this.array.length){
    var value = this.array[this.cursor++];
    if (value % this.divisor === 0){
      return value;
    }
  }
}

iterateOnMultiples.prototype.hasNext = function(){
  var cur = this.cursor;
  while (cur < this.array.length){
    if (this.array[cur++] % this.divisor === 0){
      return true;
    }
  }
  return false;
}

var consumer = new iterateOnMultiples([1,2,3,4,5,6,7,8,9,10,11,12,13], 3);

console.log(consumer.next(), consumer.hasNext())
console.log(consumer.next(), consumer.hasNext())
console.log(consumer.next(), consumer.hasNext())
console.log(consumer.next(), consumer.hasNext())
