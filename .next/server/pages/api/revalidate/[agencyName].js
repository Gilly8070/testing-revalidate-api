"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/revalidate/[agencyName]";
exports.ids = ["pages/api/revalidate/[agencyName]"];
exports.modules = {

/***/ "(api)/./pages/api/revalidate/[agencyName]/index.js":
/*!****************************************************!*\
  !*** ./pages/api/revalidate/[agencyName]/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nasync function handler(req, res) {\n    var ref, ref1;\n    let agencyName = req.query.agencyName;\n    let str = ((ref = req.url) === null || ref === void 0 ? void 0 : ref.split(\"?\")) && ((ref1 = req.url) === null || ref1 === void 0 ? void 0 : ref1.split(\"?\")[1]);\n    let val = \"rxveohyjwptnzkb\";\n    let revalidated = false;\n    console.log(req.query, \"req\", \"console.log2222\", agencyName, str, agencyName);\n    // Check for secret to confirm this is a valid request\n    // if (str !== val) {\n    //     return res.status(401).json({ message: 'Invalid token' })\n    // }\n    try {\n        // this should be the actual path not a rewritten path\n        // e.g. for \"/blog/[slug]\" this should be \"/blog/post-1\"\n        await res.revalidate(`/test`);\n        // await res.revalidate(`/_sites/${agencyName}/pricing`);\n        revalidated = true;\n    // return res.json({ revalidated: true });\n    } catch (err) {\n        // If there was an error, Next.js will continue\n        // to show the last successfully generated page\n        console.log(err, \"err\");\n        return res.status(500).send(\"Error revalidating\");\n    }\n    return res.json({\n        revalidated\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcmV2YWxpZGF0ZS9bYWdlbmN5TmFtZV0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLGVBQWVBLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7UUFFbENELEdBQU8sRUFBZ0JBLElBQU87SUFEeEMsSUFBSUUsVUFBVSxHQUFHRixHQUFHLENBQUNHLEtBQUssQ0FBQ0QsVUFBVTtJQUNyQyxJQUFJRSxHQUFHLEdBQUdKLENBQUFBLENBQUFBLEdBQU8sR0FBUEEsR0FBRyxDQUFDSyxHQUFHLGNBQVBMLEdBQU8sV0FBTyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEdBQU8sQ0FBRU0sS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFJTixDQUFBQSxJQUFPLEdBQVBBLEdBQUcsQ0FBQ0ssR0FBRyxjQUFQTCxJQUFPLFdBQU8sR0FBZEEsS0FBQUEsQ0FBYyxHQUFkQSxJQUFPLENBQUVNLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSUMsR0FBRyxHQUFHLGlCQUFpQjtJQUMzQixJQUFJQyxXQUFXLEdBQUcsS0FBSztJQUN2QkMsT0FBTyxDQUFDQyxHQUFHLENBQUNWLEdBQUcsQ0FBQ0csS0FBSyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBRUQsVUFBVSxFQUFFRSxHQUFHLEVBQUVGLFVBQVUsQ0FBQyxDQUFDO0lBRTlFLHNEQUFzRDtJQUN0RCxxQkFBcUI7SUFDckIsZ0VBQWdFO0lBQ2hFLElBQUk7SUFFSixJQUFJO1FBQ0Esc0RBQXNEO1FBQ3RELHdEQUF3RDtRQUN4RCxNQUFNRCxHQUFHLENBQUNVLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUIseURBQXlEO1FBQ3pESCxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLDBDQUEwQztJQUM5QyxFQUFFLE9BQU9JLEdBQUcsRUFBRTtRQUNWLCtDQUErQztRQUMvQywrQ0FBK0M7UUFDL0NILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxHQUFHLEVBQUUsS0FBSyxDQUFDO1FBQ3ZCLE9BQU9YLEdBQUcsQ0FBQ1ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDckQsQ0FBQztJQUNELE9BQU9iLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO1FBQUVQLFdBQVc7S0FBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby1zaXRlLy4vcGFnZXMvYXBpL3JldmFsaWRhdGUvW2FnZW5jeU5hbWVdL2luZGV4LmpzPzlkZWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGxldCBhZ2VuY3lOYW1lID0gcmVxLnF1ZXJ5LmFnZW5jeU5hbWVcbiAgICBsZXQgc3RyID0gcmVxLnVybD8uc3BsaXQoJz8nKSAmJiByZXEudXJsPy5zcGxpdCgnPycpWzFdO1xuICAgIGxldCB2YWwgPSAncnh2ZW9oeWp3cHRuemtiJztcbiAgICBsZXQgcmV2YWxpZGF0ZWQgPSBmYWxzZTtcbiAgICBjb25zb2xlLmxvZyhyZXEucXVlcnksICdyZXEnLCAnY29uc29sZS5sb2cyMjIyJywgYWdlbmN5TmFtZSwgc3RyLCBhZ2VuY3lOYW1lKTtcblxuICAgIC8vIENoZWNrIGZvciBzZWNyZXQgdG8gY29uZmlybSB0aGlzIGlzIGEgdmFsaWQgcmVxdWVzdFxuICAgIC8vIGlmIChzdHIgIT09IHZhbCkge1xuICAgIC8vICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBtZXNzYWdlOiAnSW52YWxpZCB0b2tlbicgfSlcbiAgICAvLyB9XG5cbiAgICB0cnkge1xuICAgICAgICAvLyB0aGlzIHNob3VsZCBiZSB0aGUgYWN0dWFsIHBhdGggbm90IGEgcmV3cml0dGVuIHBhdGhcbiAgICAgICAgLy8gZS5nLiBmb3IgXCIvYmxvZy9bc2x1Z11cIiB0aGlzIHNob3VsZCBiZSBcIi9ibG9nL3Bvc3QtMVwiXG4gICAgICAgIGF3YWl0IHJlcy5yZXZhbGlkYXRlKGAvdGVzdGApO1xuICAgICAgICAvLyBhd2FpdCByZXMucmV2YWxpZGF0ZShgL19zaXRlcy8ke2FnZW5jeU5hbWV9L3ByaWNpbmdgKTtcbiAgICAgICAgcmV2YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgICAvLyByZXR1cm4gcmVzLmpzb24oeyByZXZhbGlkYXRlZDogdHJ1ZSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgd2FzIGFuIGVycm9yLCBOZXh0LmpzIHdpbGwgY29udGludWVcbiAgICAgICAgLy8gdG8gc2hvdyB0aGUgbGFzdCBzdWNjZXNzZnVsbHkgZ2VuZXJhdGVkIHBhZ2VcbiAgICAgICAgY29uc29sZS5sb2coZXJyLCAnZXJyJylcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNTAwKS5zZW5kKCdFcnJvciByZXZhbGlkYXRpbmcnKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oeyByZXZhbGlkYXRlZCB9KTtcbn0iXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsImFnZW5jeU5hbWUiLCJxdWVyeSIsInN0ciIsInVybCIsInNwbGl0IiwidmFsIiwicmV2YWxpZGF0ZWQiLCJjb25zb2xlIiwibG9nIiwicmV2YWxpZGF0ZSIsImVyciIsInN0YXR1cyIsInNlbmQiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/revalidate/[agencyName]/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/revalidate/[agencyName]/index.js"));
module.exports = __webpack_exports__;

})();