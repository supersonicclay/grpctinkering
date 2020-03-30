/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for groceries
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.groceries = require('./groceries_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.groceries.GroceriesClient =
  function (hostname, credentials, options) {
    if (!options) options = {};
    options['format'] = 'text';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;

  };


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.groceries.GroceriesPromiseClient =
  function (hostname, credentials, options) {
    if (!options) options = {};
    options['format'] = 'text';

    /**
     * @private @const {!grpc.web.GrpcWebClientBase} The client
     */
    this.client_ = new grpc.web.GrpcWebClientBase(options);

    /**
     * @private @const {string} The hostname
     */
    this.hostname_ = hostname;

  };


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.groceries.Empty,
 *   !proto.groceries.GroceryItems>}
 */
const methodDescriptor_Groceries_GetAll = new grpc.web.MethodDescriptor(
  '/groceries.Groceries/GetAll',
  grpc.web.MethodType.UNARY,
  proto.groceries.Empty,
  proto.groceries.GroceryItems,
  /**
   * @param {!proto.groceries.Empty} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.groceries.GroceryItems.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.groceries.Empty,
 *   !proto.groceries.GroceryItems>}
 */
const methodInfo_Groceries_GetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.groceries.GroceryItems,
  /**
   * @param {!proto.groceries.Empty} request
   * @return {!Uint8Array}
   */
  function (request) {
    return request.serializeBinary();
  },
  proto.groceries.GroceryItems.deserializeBinary
);


/**
 * @param {!proto.groceries.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.groceries.GroceryItems)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.groceries.GroceryItems>|undefined}
 *     The XHR Node Readable Stream
 */
proto.groceries.GroceriesClient.prototype.getAll =
  function (request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ +
      '/groceries.Groceries/GetAll',
      request,
      metadata || {},
      methodDescriptor_Groceries_GetAll,
      callback);
  };


/**
 * @param {!proto.groceries.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.groceries.GroceryItems>}
 *     A native promise that resolves to the response
 */
proto.groceries.GroceriesPromiseClient.prototype.getAll =
  function (request, metadata) {
    return this.client_.unaryCall(this.hostname_ +
      '/groceries.Groceries/GetAll',
      request,
      metadata || {},
      methodDescriptor_Groceries_GetAll);
  };


module.exports = proto.groceries;

