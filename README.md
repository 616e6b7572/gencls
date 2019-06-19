A Simple generator class to provide powerful mechanism to create a class like functionality, by providing "private and public" function's like capabilty.

## Installation

```

npm install gencls

```

## Quick start

All you need to do is to initialize it, as you would for any class with an object as a parameter containing all the data (variables and functions):
```
/*
*
* GenCls(object)
* object: It can contain getter and setters, which will act like private functions.
*			and functions can be accessed publicly.
*
*/

const MyClass = GenCls({
	
	/*
	* This can act like a private function, 
	* which you can call from other functions. 
	*/
	get private(){
		console.log('this is a private function!');
	},
	
	/*
	* It will act as a public function. 
	*/
	public: function(){ 
		console.log('this is a private function!');
	},
});

```
