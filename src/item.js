"use strict";

module.exports.handle_routes = function (info, sessionID)
{
    this.resetOutput();

    for (let body of info.data) {
        let pmcData = profile_f.handler.getPmcProfile(sessionID);
        if (body.Action in this.routes) {
            this.routes[body.Action](pmcData, body, sessionID);
        } else {
            logger.logError(`[UNHANDLED ACTION] ${body.Action} with body ${body}`);
        }
    }
    return this.output;
}
