const { Empty, GroceryItems } = require('./groceries_pb.js');
const { GroceriesClient } = require('./groceries_grpc_web_pb.js');

var groceriesService = new GroceriesClient('http://localhost:50099');

var request = new Empty();

groceriesService.getAll(request, {}, function (err, response) {
    console.log(err);
    console.log(response);
});