#gencls 

>A Simple generator class to provide powerful mechanism to create a class like functionality, by providing "private and public" function's like capabilty.

## Installation

```

npm install gencls

```

## Testing

	**Check any syntactical errors**

		```
		npm run lint
		```
	**Fix any syntactical errors**

		```
		npm run lint-fix
		```
	**Check for code based errros**

		```
		npm run test
		```


## Quick start

All you need to do is to initialize it, as you would for any class with an object as a parameter containing all the data (variables and functions):
```
/*
*
* GenCls(object)
* object: Functions having a preceding underscore ( '_fun' ) is treated as a private functon 
*			which can not be accesed from outside world
*			and all other functions can be accessed publicly.
*
*/

const GenCls = require('gencls');

const MyClass = GenCls({
	
	/*
	* This can act like a private function, 
	* which you can call from other functions. 
	*/
	_private: function(){
		console.log('I\'m inside a private function!');
	},
	
	/*
	* It will act as a public function. 
	*/
	public: function(){ 
		console.log('this is a public function!');
		this._private();
	},
});

MyClass.public();

/*
*	Outputs:
*		this is a public function!
*		I'm inside a private function!
*/


```
## Use Case
	One can create a class like functionality using this package, but best
	suited, when you need to create a class dynamically or on the fly.

## Downside
	Although gencls mimick a class perfectly, but under the hood it uses
	proxy functions to achive that, which might look like a performance
	overhead in some situations but not in others. So use it as you 
	please :)
	
## Contributing
	Feel free to contribute.

