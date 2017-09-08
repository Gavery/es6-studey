{
	let readonly=function(target,name,descriptor){
		descriptor.writable=false;
		return descriptor
	};
	class Test{
		@readonly
		time(){
			return '2017-03-11'
		}
	}
	let test=new Test();
	console.log(test.time());
}