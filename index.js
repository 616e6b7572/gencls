'use strict';

const GenCls = (function(s){
	const abstract = (function(s){
		var store = s;
		return {
			foo:function(f, args){
			store[f].apply(store, args);
		}	
		};	
	})(s);
	return abstract;
});

module.exports = GenCls;
