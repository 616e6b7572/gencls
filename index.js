'use strict';

const GenCls = (function(s){
	const abstract = (function(s){
		var store = s;
		var ret = {
			_m:function(fun, args){
				return store[fun].apply(store, args);
			}
		};
		for(let i in s){
			var m = i.search('_') > -1 ? true:false;
			if(m){
				continue;
			}
			if(typeof s[i] == 'function'){
				ret[i] = function(...args){
					var f = i;
					return ret['_m'](f, args);
				};
			}
		}
		return ret;	
	})(s);
	return abstract;
});

module.exports = GenCls;






/*'use strict';

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
*/
