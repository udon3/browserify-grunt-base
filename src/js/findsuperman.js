var _ = require('underscore');

module.exports = function(values){

	var foundSuperman = false;

	_.find(values, function(name){
		if (name ==='Clark Kent'){
			console.log('found my Superman');
			foundSuperman = true;
		}else{
			console.log('no Superman');
		}
	});

	return foundSuperman;
}