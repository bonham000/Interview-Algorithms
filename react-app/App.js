var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

const algorithmsData = [
  {
    title: 'Square Sum',
    stars: 1,
    problem: 'Given an array, write a function <code>SqSum()</code> that squares every value and then returns their sum. For example, <code>SqSum([1,2,3])</code> would return 15.',
    solution: `function sqSum(array) {
      
      var arraySquared = array.map(function(n) {
          return n * n;
      });
      
      var totalSum = arraySquared.reduce(function(total, current) {
          return total + current;
      });
      
      return totalSum;
      
  }`
  },
  {
    title: 'FizzBuzz',
    stars: 2,
    problem: 'Write a function <code>fizzbuzz()</code> that accepts an argument and returns "Fizz" if the number is divisible by 3, "Buzz" if divisible by 5, "FizzBuzz" if divisible by both, and the number if it is divisible by neither.',
    solution: `function fizzbuzz (n) {
      
      if (( n % 3 === 0 && n % 5 === 0)) {
          return "FizzBuzz";
      }
      else if (n % 3 === 0) {
          return f;
      }
      else if( n % 5 === 0) {
          return b;
      }
      else return n;
          
  }`
  },
  {
    title: 'Chess Board',
    stars: 3,
    problem: 'Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board. The string should look something like this when printed to the console:<br><br> # # # #<br>&nbsp;# # # #<br># # # #<br>&nbsp;# # # #<br><br>The width and height output should be stored in variables so you can easily change the size of the returned string.',
    solution: `function generateChessBoard(width, height) {

    var str = '';
    var row = 0;

    for (var n = 1; n < ((width * height) + 1); n++) {
        
        if (row % 2 == 0) {
            str = str.concat("# ");
        }
        
        else {
            str = str.concat(" #");
        }
        
        if (n % width == 0) {
            str = str.concat("\n");
            row++;
        }
        
    }

    return str;

  }

  var w = 5, h = 5;

  console.log(generateChessBoard(w, h));`
  },
  {
    title: 'Seek and Destroy',
    stars: 1,
    problem: 'You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.',
    solution: `function destroyer(arr) {
    
      var a = [];
      
      for (var n = 1; n < arguments.length; n++) {
          a.push(arguments[n]);
      }
      
      for (var i = 0; i < arguments[0].length; i++) {
          
          for (var j = 0; j < a.length; j++) {
                  
              if (arguments[0][i] === a[j]) {
                  
                  arguments[0].splice(i, 1);
                  
                  j--;
                  i--;
                  
              }
              
          }
          
      }
      
      return arr;
  }

  destroyer([1, 2, 3, 1, 2, 3], 2, 3);`
  },
  {
    title: 'Even and Odd',
    stars: 1,
    problem: 'Using recursion, and without the modulus operator, write a function that determines if a positive or negative whole number is even or odd. The function, <code>isEven()</code>,should return <code>true</code> for even numbers and <code>false</code> for odd numbers. Hint: 1 is odd and 0 is even; the absolute value of any number can be reduced to 0 or 1 by N - 2.',
    solution: `function isEven(n) {
    
    if (n < 0) {
      
      return isEven(Math.abs(n));
                    
    }
      
    if (n === 1) {
        
        return false;
    
    }
    
    else if (n === 0) {
        
        return true;
    
    }
    
    else if (n > 1) {
        
        return isEven(n - 2);
        
    }
    
  }`
  },
  {
    title: 'The Sum of a Range',
    stars: 1,
    problem: 'Write two functions that take a range and return the sum, such that <code>sum(range(1, 10))</code> returns 55. The first function should return an array, which, when passed to the second function returns the sum of the contained values. Then, create an optional third parameter to the <code>sum()</code> function that indicates the step by which the range should be generated. For instance, <code>sum(1, 6, 2)</code> should return <code>[1, 3, 5]</code>. If this argument is not included, the step should default to 1.',
    solution: `function range(start, end, step) {    
        
        if (step == undefined) { step = 1 }
        
        var arr = [];
        
        for (var i = start; i <= end; i += step) {
            
            arr.push(i)
            
        }
        
        return arr;
        
    }

    function sum(array) {
        
        var sum = 0;
        var n = 0;
        
        while (n < array.length) {
            
            sum += array[n];
            n++;
            
        }
        
        return sum;
           
    }`
  },
  {
    title: 'Working with Lists',
    stars: 4,
    problem: 'Write two functions that convert data between an array and a list. The function <code>arrayToList(array)</code> should accept an array as input, e.g. <code>[1,2,3]</code>, and return a list, e.g. <code>list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };</code>, based on the array. The second function, <code>listToArray(list)</code>, should reverse this action and return the original array from the list object.',
    solution: `// arrayToList() function:

  var list = {};
  var rest = {};

  function arrayToList(arr) {
      
      if (arr.length > 1 && !rest.hasOwnProperty('value')) {
          
          rest = {
              value: arr[arr.length - 1],
              rest: null
          };

          arr.splice(arr.length - 1);
          
          arrayToList(arr);
          
      }
      
      else if (arr.length > 0 && rest.hasOwnProperty('value')) {
          
          rest = {
              value: arr[arr.length - 1],
              rest: rest
          };
          
          arr.splice(arr.length - 1);
          
          if (arr.length == 0) {
              
              list = rest;

              return list;
          
          }
          
          else {
              
              arrayToList(arr);
              
          }
          
      }
      
  }

  // listToArray function:

  var arr = [];

  function listToArray(list) {
      
      if (list.rest == null) {
          
          arr.push(list.value);
          
          return arr;
          
      }
      
      else if (list.hasOwnProperty('value')) {
          
          arr.push(list.value);
          
          listToArray(list.rest);
          
      }
      
  }`
  },
  {
    title: 'Finding a Product',
    stars: 1,
    problem: 'Write a function that takes a positive whole number and returns the product of all positive, even whole numbers less than and including that number. For instance, <code>productEven(6)</code> should return 48, (6 * 4 * 2). Passing 15 to this function should return 645,120.',
    solution: `var ans = 1;

  function productEven(n) {
      
      if ( n == 1 ) { return ans; }
      
      else if ( n > 1) {
          
          if ( n % 2 == 0 ) { ans *= n}
          
          productEven( n - 1 );
          
      }
      
  }`
  },
  {
    title: 'Filtering an Array',
    stars: 1,
    problem: 'Write a function that accepts an array of items and an item as arguments, and returns the array with the second argument item filtered out of it. If the item is not present, return <code>false</code>.',
    solution: `function filterVal(array, item) {
      
      var present = false;
      
      var arr = array.filter(function(elem) {
          if (elem == item ) { present = true; }
          return elem != item;
      });
      
      if (present == false) { return false; }
      
      else { return arr; }
      
  }`
  }  
];

var parser = new DOMParser();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      algorithms: algorithmsData,
      lastRandom: -1
    }
    this.handleSort = this.handleSort.bind(this);
  }
  handleSort(direction) {

    if (direction === 'up') {
      var sortedUp = algorithmsData.sort(function(a, b) {
        return (a.stars > b.stars ? 1 : ((b.stars > a.stars) ? -1 : 0)  )
      });
      this.setState({
        algorithms: sortedUp
      });
    }

    else if (direction === 'down') {
      var sortedDown = algorithmsData.sort(function(a, b) {
        return (a.stars < b.stars ? 1 : ((b.stars < a.stars) ? -1 : 0)  )
      });
      this.setState({
        algorithms: sortedDown
      });
    }

    else if (direction === 'random') {

      var randomNumber = this.state.lastRandom;

      while (randomNumber === this.state.lastRandom) {
        randomNumber = Math.round(Math.random() * algorithmsData.length);
      }

      var randomAlgorithm = [algorithmsData[randomNumber]];
      this.setState({
        algorithms: randomAlgorithm,
        lastRandom: randomNumber
      });
    }

    else if (direction === 'all') {
      this.setState({
        algorithms: algorithmsData
      });
    }

  }
	render() {
		return (
      <div>
        <Title />
        <Sort sort = {this.handleSort}/>
          <Algorithms algorithms = {this.state.algorithms} />
      </div>
		);
	}
};

class Title extends React.Component {
  render() {
    return (
      <div className = "titleWrapper">
        <h1>JavaScript Algorithm Challenges</h1>
        <p className = "description">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This is a list of computer algorithm challenges paired with solutions intended to be useful to anyone looking to improve their coding skills, especially beginners. All of the answers are written in JavaScript. I've compiled these challenges from a number of sources, but some come from <a target = "_blank"  href="http://eloquentjavascript.net/">Eloquent Javascript</a> or <a target = "_blank" href="http://freecodecamp.com">Free Code Camp</a> both of which are excellent resources for anyone interested in learning JavaScript.</p>
        <p className = "description credits"><a target = "_blank" href="http://sean-smith.me">Coded by Sean Smith</a></p>
        <hr />
      </div>
    );
  }
};

class Sort extends React.Component {
  render() {
    return (
      <div className = "sortWrapper">
        <button className="sortBtn" onClick = {this.props.sort.bind(this, 'up')}>Sort Up</button>
        <button className="sortBtn" onClick = {this.props.sort.bind(this, 'down')}>Sort Down</button>
        <button className="sortBtn" onClick = {this.props.sort.bind(this, 'random')}>Random One</button>
        <button className="sortBtn" onClick = {this.props.sort.bind(this, 'all')}>Show All</button>        
      </div>
    );
  }
};

class Algorithms extends React.Component {
  render() {
    var renderAlgorithms = this.props.algorithms.map( (algorithm, i) => {
      var stars;
      if (algorithm.stars == 0) {
        stars = (
        <h2>        
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </h2>
        );   
      }
      else if (algorithm.stars == 1) {
        stars = (
        <h2>        
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </h2>
        );
      }
      else if (algorithm.stars == 2) {
        stars = (
        <h2>        
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </h2>
        );
      }
      else if (algorithm.stars == 3) {
        stars = (
        <h2>        
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </h2>
        );
      }
      else if (algorithm.stars == 4) {
        stars = (
        <h2>        
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star-o" aria-hidden="true"></i>
        </h2>
        );
      }
      else if (algorithm.stars == 5) {
        stars = (
        <h2>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </h2>
        );
      }
      function createMarkup() { return {__html: algorithm.problem}; };
      return (
          <ReactCSSTransitionGroup 
            key = {i}
            transitionName = 'algorithmsList'
            transitionEnterTimeout = {1000}
            transitionLeaveTimeout = {1000} >
          <div className = "algoWrapper" key = {Math.random() * 25}>
            <h1 className = "title">{algorithm.title}</h1>
            {stars}
            <p className = "problem" dangerouslySetInnerHTML={createMarkup()} />
            <div className="algo">
              <pre>
              <code className="language-js">
                {algorithm.solution}
              </code>
              </pre>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    });
    return (
      <div className = "titleWrapper">
        {renderAlgorithms}
      </div>
    );
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
};

ReactDOM.render(<App />, document.getElementById('main'));
