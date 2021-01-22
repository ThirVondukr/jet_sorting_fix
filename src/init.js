exports.mod = (mod_info) => {
    item_f.handler.handleRoutes = require('./item.js').handle_routes
    move_f = require('./move.js')

	logger.logSuccess("[MOD] SortingFix - Applied");
}
