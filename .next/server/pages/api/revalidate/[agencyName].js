"use strict";
(() => {
var exports = {};
exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    var ref, ref1;
    let agencyName = req.query.agencyName;
    let str = ((ref = req.url) === null || ref === void 0 ? void 0 : ref.split("?")) && ((ref1 = req.url) === null || ref1 === void 0 ? void 0 : ref1.split("?")[1]);
    let val = "rxveohyjwptnzkb";
    let revalidated = false;
    console.log(req.query, "req", "console.log2222", agencyName, str, agencyName);
    // Check for secret to confirm this is a valid request
    // if (str !== val) {
    //     return res.status(401).json({ message: 'Invalid token' })
    // }
    try {
        // this should be the actual path not a rewritten path
        // e.g. for "/blog/[slug]" this should be "/blog/post-1"
        await res.revalidate(`/test`);
        // await res.revalidate(`/_sites/${agencyName}/pricing`);
        revalidated = true;
    // return res.json({ revalidated: true });
    } catch (err) {
        // If there was an error, Next.js will continue
        // to show the last successfully generated page
        console.log(err, "err");
        return res.status(500).send("Error revalidating");
    }
    return res.json({
        revalidated
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(976));
module.exports = __webpack_exports__;

})();