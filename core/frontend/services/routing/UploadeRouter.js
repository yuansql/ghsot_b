const ParentRouter = require('./ParentRouter');
const controllers = require('./controllers');

/**
 * @description Unsubscribe Router.
 *
 * "/unsubscribe/" -> Unsubscribe Router
 */
class UploadeRouter extends ParentRouter {
	constructor() {
		super('UploadeRouter');
		
		// @NOTE: hardcoded, not configurable
		this.route = {value: '/upload/'};
		this._registerRoutes();
	}
	
	/**
	 * @description Register all routes of this router.
	 * @private
	 */
	_registerRoutes() {
		this.mountRoute(this.route.value, controllers.unsubscribe);
	}
}

module.exports = UploadeRouter;
