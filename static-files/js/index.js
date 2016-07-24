'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var algorithmsData = [{
  title: 'Square Sum',
  stars: 1,
  problem: 'Given an array, write a function <code>SqSum()</code> that squares every value and then returns their sum. For example, <code>SqSum([1,2,3])</code> would return 15.',
  twitter: 'Given an array, write a function SqSum() that squares every value',
  solution: 'function sqSum(array) {\n      \n      var arraySquared = array.map(function(n) {\n          return n * n;\n      });\n      \n      var totalSum = arraySquared.reduce(function(total, current) {\n          return total + current;\n      });\n      \n      return totalSum;\n      \n  }'
}, {
  title: 'FizzBuzz',
  stars: 2,
  problem: 'Write a function <code>fizzbuzz()</code> that accepts an argument and returns "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both, and the number if it is divisible by neither.',
  twitter: 'Did you know that the FizzBuzz has eliminated many aspiring coders in the interview stage?',
  solution: 'function fizzbuzz (n) {\n      \n      if (( n % 3 === 0 && n % 5 === 0)) {\n          return "FizzBuzz";\n      }\n      else if (n % 3 === 0) {\n          return f;\n      }\n      else if( n % 5 === 0) {\n          return b;\n      }\n      else return n;\n          \n  }'
}, {
  title: 'Chess Board',
  stars: 3,
  problem: 'Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. The string should look something like this when printed to the console:<br><br> # # # #<br>&nbsp;# # # #<br># # # #<br>&nbsp;# # # #<br><br>The width and height output should be stored in variables so you can easily change the size of the returned string.',
  twitter: 'Use JavaScript to console.log a chessboard of hashes',
  solution: 'function generateChessBoard(width, height) {\n\n    var str = \'\';\n    var row = 0;\n\n    for (var n = 1; n < ((width * height) + 1); n++) {\n        \n        if (row % 2 == 0) {\n            str = str.concat("# ");\n        }\n        \n        else {\n            str = str.concat(" #");\n        }\n        \n        if (n % width == 0) {\n            str = str.concat("\n");\n            row++;\n        }\n        \n    }\n\n    return str;\n\n  }\n\n  var w = 5, h = 5;\n\n  console.log(generateChessBoard(w, h));'
}, {
  title: 'Seek and Destroy',
  stars: 1,
  problem: 'You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.',
  twitter: 'Seek and destroy an array in JavaScript',
  solution: 'function destroyer(arr) {\n    \n      var a = [];\n      \n      for (var n = 1; n < arguments.length; n++) {\n          a.push(arguments[n]);\n      }\n      \n      for (var i = 0; i < arguments[0].length; i++) {\n          \n          for (var j = 0; j < a.length; j++) {\n                  \n              if (arguments[0][i] === a[j]) {\n                  \n                  arguments[0].splice(i, 1);\n                  \n                  j--;\n                  i--;\n                  \n              }\n              \n          }\n          \n      }\n      \n      return arr;\n  }\n\n  destroyer([1, 2, 3, 1, 2, 3], 2, 3);'
}, {
  title: 'Even and Odd',
  stars: 1,
  problem: 'Using recursion, and without the modulus operator, write a function that determines if a positive or negative whole number is even or odd. The function, <code>isEven()</code>,should return <code>true</code> for even numbers and <code>false</code> for odd numbers. Hint: 1 is odd and 0 is even; the absolute value of any number can be reduced to 0 or 1 by N - 2.',
  twitter: 'Defining even and odd numbers with recursion',
  solution: 'function isEven(n) {\n    \n    if (n < 0) {\n      \n      return isEven(Math.abs(n));\n                    \n    }\n      \n    if (n === 1) {\n        \n        return false;\n    \n    }\n    \n    else if (n === 0) {\n        \n        return true;\n    \n    }\n    \n    else if (n > 1) {\n        \n        return isEven(n - 2);\n        \n    }\n    \n  }'
}, {
  title: 'The Sum of a Range',
  stars: 1,
  problem: 'Write two functions that take a range and return the sum, such that <code>sum(range(1, 10))</code> returns 55. The first function should return an array, which, when passed to the second function returns the sum of the contained values. Then, create an optional third parameter to the <code>sum()</code> function that indicates the step by which the range should be generated. For instance, <code>sum(1, 6, 2)</code> should return <code>[1, 3, 5]</code>. If this argument is not included, the step should default to 1.',
  twitter: 'Summing a Range in JavaScript',
  solution: 'function range(start, end, step) {    \n        \n        if (step == undefined) { step = 1 }\n        \n        var arr = [];\n        \n        for (var i = start; i <= end; i += step) {\n            \n            arr.push(i)\n            \n        }\n        \n        return arr;\n        \n    }\n\n    function sum(array) {\n        \n        var sum = 0;\n        var n = 0;\n        \n        while (n < array.length) {\n            \n            sum += array[n];\n            n++;\n            \n        }\n        \n        return sum;\n           \n    }'
}, {
  title: 'Working with Lists',
  stars: 4,
  problem: 'Write two functions that convert data between an array and a list. The function <code>arrayToList(array)</code> should accept an array as input, e.g. <code>[1,2,3]</code>, and return a list, e.g. <code>list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };</code>, based on the array. The second function, <code>listToArray(list)</code>, should reverse this action and return the original array from the list object.',
  twitter: 'Constructing a List Object from an Array, and Back Again',
  solution: '// arrayToList() function:\n\n  var list = {};\n  var rest = {};\n\n  function arrayToList(arr) {\n      \n      if (arr.length > 1 && !rest.hasOwnProperty(\'value\')) {\n          \n          rest = {\n              value: arr[arr.length - 1],\n              rest: null\n          };\n\n          arr.splice(arr.length - 1);\n          \n          arrayToList(arr);\n          \n      }\n      \n      else if (arr.length > 0 && rest.hasOwnProperty(\'value\')) {\n          \n          rest = {\n              value: arr[arr.length - 1],\n              rest: rest\n          };\n          \n          arr.splice(arr.length - 1);\n          \n          if (arr.length == 0) {\n              \n              list = rest;\n\n              return list;\n          \n          }\n          \n          else {\n              \n              arrayToList(arr);\n              \n          }\n          \n      }\n      \n  }\n\n  // listToArray function:\n\n  var arr = [];\n\n  function listToArray(list) {\n      \n      if (list.rest == null) {\n          \n          arr.push(list.value);\n          \n          return arr;\n          \n      }\n      \n      else if (list.hasOwnProperty(\'value\')) {\n          \n          arr.push(list.value);\n          \n          listToArray(list.rest);\n          \n      }\n      \n  }'
}, {
  title: 'Finding a Product',
  stars: 1,
  problem: 'Write a function that takes a positive whole number and returns the product of all positive, even whole numbers less than and including that number. For instance, <code>productEven(6)</code> should return 48, (6 * 4 * 2). Passing 15 to this function should return 645,120.',
  twitter: 'Finding the Product of Whole Numbers',
  solution: 'var ans = 1;\n\n  function productEven(n) {\n      \n      if ( n == 1 ) { return ans; }\n      \n      else if ( n > 1) {\n          \n          if ( n % 2 == 0 ) { ans *= n}\n          \n          productEven( n - 1 );\n          \n      }\n      \n  }'
}, {
  title: 'Filtering an Array',
  stars: 1,
  problem: 'Write a function that accepts an array of items and an item as arguments, and returns the array with the second argument item filtered out of it. If the item is not present, return <code>false</code>.',
  twitter: 'Using JavaScripts array.filter() method',
  solution: 'function filterVal(array, item) {\n      \n      var present = false;\n      \n      var arr = array.filter(function(elem) {\n          if (elem == item ) { present = true; }\n          return elem != item;\n      });\n      \n      if (present == false) { return false; }\n      \n      else { return arr; }\n      \n  }'
}];

var parser = new DOMParser();

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    _this.state = {
      algorithms: algorithmsData,
      lastRandom: -1
    };
    _this.handleSort = _this.handleSort.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'handleSort',
    value: function handleSort(direction) {

      if (direction === 'up') {
        var sortedUp = algorithmsData.sort(function (a, b) {
          return a.stars > b.stars ? 1 : b.stars > a.stars ? -1 : 0;
        });
        this.setState({
          algorithms: sortedUp
        });
      } else if (direction === 'down') {
        var sortedDown = algorithmsData.sort(function (a, b) {
          return a.stars < b.stars ? 1 : b.stars < a.stars ? -1 : 0;
        });
        this.setState({
          algorithms: sortedDown
        });
      } else if (direction === 'random') {

        var randomNumber = this.state.lastRandom;

        while (randomNumber === this.state.lastRandom) {
          randomNumber = Math.round(Math.random() * algorithmsData.length);
        }

        var randomAlgorithm = [algorithmsData[randomNumber]];
        this.setState({
          algorithms: randomAlgorithm,
          lastRandom: randomNumber
        });
      } else if (direction === 'all') {
        this.setState({
          algorithms: algorithmsData
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Title, null),
        React.createElement(Sort, { sort: this.handleSort }),
        React.createElement(Algorithms, { algorithms: this.state.algorithms })
      );
    }
  }]);

  return App;
}(React.Component);

;

var Title = function (_React$Component2) {
  _inherits(Title, _React$Component2);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Title).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'titleWrapper' },
        React.createElement(
          'h1',
          null,
          'JavaScript Algorithm Challenges'
        ),
        React.createElement(
          'p',
          { className: 'description' },
          '     This is a list of computer algorithm challenges paired with solutions intended to be useful to anyone looking to improve their coding skills, especially beginners. All of the answers are written in JavaScript. I\'ve compiled these challenges from a number of sources, but many come from ',
          React.createElement(
            'a',
            { target: '_blank', href: 'http://eloquentjavascript.net/' },
            'Eloquent Javascript'
          ),
          ' or ',
          React.createElement(
            'a',
            { target: '_blank', href: 'http://freecodecamp.com' },
            'Free Code Camp'
          ),
          ' both of which are excellent resources for anyone interested in JavaScript or Web Development.'
        ),
        React.createElement(
          'p',
          { className: 'description credits' },
          React.createElement(
            'a',
            { target: '_blank', href: 'http://sean-smith.me' },
            'Coded by Sean Smith'
          )
        ),
        React.createElement('hr', null)
      );
    }
  }]);

  return Title;
}(React.Component);

;

var Sort = function (_React$Component3) {
  _inherits(Sort, _React$Component3);

  function Sort() {
    _classCallCheck(this, Sort);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sort).apply(this, arguments));
  }

  _createClass(Sort, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'sortWrapper' },
        React.createElement(
          'button',
          { className: 'sortBtn', onClick: this.props.sort.bind(this, 'up') },
          'Sort Up'
        ),
        React.createElement(
          'button',
          { className: 'sortBtn', onClick: this.props.sort.bind(this, 'down') },
          'Sort Down'
        ),
        React.createElement(
          'button',
          { className: 'sortBtn', onClick: this.props.sort.bind(this, 'random') },
          'Random One'
        ),
        React.createElement(
          'button',
          { className: 'sortBtn', onClick: this.props.sort.bind(this, 'all') },
          'Show All'
        )
      );
    }
  }]);

  return Sort;
}(React.Component);

;

var Algorithms = function (_React$Component4) {
  _inherits(Algorithms, _React$Component4);

  function Algorithms() {
    _classCallCheck(this, Algorithms);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Algorithms).apply(this, arguments));
  }

  _createClass(Algorithms, [{
    key: 'render',
    value: function render() {
      var renderAlgorithms = this.props.algorithms.map(function (algorithm, i) {
        var stars;
        if (algorithm.stars == 0) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' })
          );
        } else if (algorithm.stars == 1) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' })
          );
        } else if (algorithm.stars == 2) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' })
          );
        } else if (algorithm.stars == 3) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' })
          );
        } else if (algorithm.stars == 4) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star-o', 'aria-hidden': 'true' })
          );
        } else if (algorithm.stars == 5) {
          stars = React.createElement(
            'h2',
            null,
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' }),
            React.createElement('i', { className: 'fa fa-star', 'aria-hidden': 'true' })
          );
        }
        function createMarkup() {
          return { __html: algorithm.problem };
        };
        return React.createElement(
          ReactCSSTransitionGroup,
          {
            transitionName: 'algorithmsList',
            transitionEnterTimeout: 1000,
            transitionLeaveTimeout: 1000 },
          React.createElement(
            'div',
            { className: 'algoWrapper', key: Math.random() * 25 },
            React.createElement(
              'h1',
              { className: 'title' },
              algorithm.title
            ),
            stars,
            React.createElement('p', { className: 'problem', dangerouslySetInnerHTML: createMarkup() }),
            React.createElement(
              'div',
              { className: 'algo' },
              React.createElement(
                'pre',
                null,
                React.createElement(
                  'code',
                  { className: 'language-js' },
                  algorithm.solution
                )
              )
            )
          )
        );
      });
      return React.createElement(
        'div',
        { className: 'titleWrapper' },
        renderAlgorithms
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      Prism.highlightAll();
    }
  }]);

  return Algorithms;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('main'));
