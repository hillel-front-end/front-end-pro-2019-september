let fs = require('fs');
let path = '.';

function pathConcat(pathname) {
	return path + '/' + pathname;
}

function filereader(path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf8', function (e, d) {

			if (e) reject(e);

			else resolve(JSON.parse(d));
		});
	});
}

// function getBuildings(req, res) {
// 	let path = pathConcat('api' + req.route.path + '/' + req.method.toLowerCase() + '.json'),
// 		servicePromise = filereader(path);

// 	console.log(path);
	
// 	servicePromise
// 		.then((response) => {
// 			res.json(response);
// 		});
// }

// function getUser(req, res) {
// 	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
// 		servicePromise = filereader(path);

// 	console.log(path);
	
// 	servicePromise
// 		.then((response) => {
// 			response.data = 'VAYSA';

// 			return response;
// 		})
// 		.then((response) => {
// 			res.json(response);
// 		});
// }

// function list(req, res) {
// 	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
// 		servicePromise = filereader(path);

// 	console.log(path);
	
// 	servicePromise
// 		.then((response) => {
// 			res.json(response);
// 		});
// }

function universalMethod(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json');
	console.log('Universal', path);
	filereader(path)
		.then(response => {
			res.json(response)
		});
}


module.exports = { 
	// getBuildings, 
	pathConcat, 
	// getUser, 
	// list, 
	universalMethod 
};