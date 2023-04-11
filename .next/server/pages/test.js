"use strict";
(() => {
var exports = {};
exports.id = 378;
exports.ids = [378];
exports.modules = {

/***/ 344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Test = ({ data , time  })=>{
    const func = async ()=>{
        const res = await fetch(`/api/revalidate/myagency?rxveohyjwptnzkb`);
        console.log(res, "console.log", "res", data);
    };
    console.log(time, "time data", "console.log");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            time + "hello",
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: ()=>func(),
                children: "revalidate"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Test);
// export async function getStaticPaths() {
//     const paths = [];
//     return {
//         paths: paths,
//         fallback: "blocking",
//     };
// }
const getStaticProps = async (context)=>{
    var ref, ref1, ref2, ref3;
    let siteName = "myagency";
    const baseurl = "https://testapikube.lineupx.com/";
    // fetch profile information for given site name
    const profileData = await fetch(`${baseurl}RecruiterV2/Profile/GET/GetAgencyByDomainName?site_name=${siteName}`).then((res)=>{
        return res === null || res === void 0 ? void 0 : res.json();
    });
    // fetch pricing data for job board
    let dev = (process === null || process === void 0 ? void 0 : (ref = process.env) === null || ref === void 0 ? void 0 : "production") === "development" ? "http://localhost:5004" : "https://test.lineupx.com";
    const res = await fetch(dev + `/api/pricing/${(ref1 = profileData.result) === null || ref1 === void 0 ? void 0 : ref1._id}`);
    const data = await (res === null || res === void 0 ? void 0 : res.json());
    console.log("profileData", data, "data");
    // fetch appearance data for meta tags
    const appearanceData = await fetch(`${baseurl}RecruiterV2/Profile/GET/GetAppearanceSettings?agency_id=${profileData === null || profileData === void 0 ? void 0 : (ref2 = profileData.result) === null || ref2 === void 0 ? void 0 : ref2._id}`).then((res)=>res.json());
    // if no profile data is found for given site name
    // then redirect to 404 page
    if (profileData === null || profileData === void 0 ? void 0 : profileData.message) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            agencyId: (ref3 = profileData.result) === null || ref3 === void 0 ? void 0 : ref3._id,
            data: data,
            appearanceData: appearanceData,
            time: new Date().toISOString()
        }
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(344));
module.exports = __webpack_exports__;

})();