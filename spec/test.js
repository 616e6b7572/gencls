var module = {};
 
describe('test', function() {
	it('testing GenCls', function() {
		const aa = new GenCls({
			_bar:function(){
				console.log('bar bar');
			},

			goo:function(f1,f2){
				return this._foo(f1,f2);
			},
			_foo:function(f1,f2){
				return f1+f2;
			}		
		});	
		expect(aa.goo(1,2)).toBe(3);
		expect(aa._foo).toBe(undefined);
	});
});
