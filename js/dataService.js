var app = angular.module('quoteBook');

app.service('dataService', function () {
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];
  //create a method called getData() that returns the quotes array
  this.getData = function(){
    return quotes;
  };
  
  //Create a method called addData() that takes in a data object verifies that data has the proper keys(text, author) then adds the obj to the end of the quotes array 

   this.addData = function (textAdded, authorAdded) {
    var quoteAdder = prompt("What is your quote?")
    var authorAdder = prompt("What is your name?")    
    var QuoteAdder = function (quote, author) {
      this.text = quote;
      this.author = author;
    }
      if (quoteAdder !== "" && authorAdder !== "") {
        quotes.push(new QuoteAdder(quoteAdder, authorAdder))
        }
    };

    this.removeData = function(){
      console.log('made it to this pont');
      var removeText = prompt('What would you like to remove?');
      for (var i = 0; i < quotes.length; i++) {
        if(removeText === quotes[i].text) {
          quotes.splice(i, 1);
          i--;
        }
      };
    }
});
  
