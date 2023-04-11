"use strict";
(() => {
var exports = {};
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 44:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_HomePage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/assets/images/devgrub.png
/* harmony default export */ const devgrub = ({"src":"/_next/static/media/devgrub.57f86373.png","height":1600,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAe0lEQVR42mPIP7Cp4MCmwgObig5syj+4maHg4Oacg5vTD21JPbwVKMGQfXDz2a7GpwXZq5bOTDm8lSHr4Ob7ZQV/PL2eFGTn798I4j8syfvv7PqwODcHqB6o+eCkzmv15XPWLEgDqi84uBmoLfbINiCnECifD7apGGYfAGqnSbdyls2JAAAAAElFTkSuQmCC","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/youtube.png
/* harmony default export */ const youtube = ({"src":"/_next/static/media/youtube.134a3a77.png","height":1600,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAi0lEQVR42gGAAH//AMnQ193j6djd4lZcYVNXWQDW2+Lp7vPCxsmjiYa+oZ0A3uPo5+7y4Nzg5sTE4L2+AODl6ujt8e/0+OHExMyXlgDi5+zk6ezDy9LJw8bJr6wAzNLYcHWCFytVyczX19rmAKOpsThCXVNbc7S6yrnG2AB4folBSWBMU22Rm7CuvtVv5FR7MI2mFAAAAABJRU5ErkJggg==","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: ./src/assets/images/evverest.png
/* harmony default export */ const evverest = ({"src":"/_next/static/media/evverest.18f1a94b.png","height":1600,"width":1000,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAdElEQVR42mNQ13FQ07YHkhAGAxBr6DkCSRVNW6AQg4auo6y8sZaBk4G5l4qmDYOiioWVc5hPRLG5Q5SCshmDrol7Qn5XVGabT2SJjpEbg66xu5ldoJ17lJ17tKaeE4Oqlp2SmpW8kjkQgcwHmgk0EoLUdRwAgwcafJYB9rIAAAAASUVORK5CYII=","blurWidth":5,"blurHeight":8});
;// CONCATENATED MODULE: external "react-spring"
const external_react_spring_namespaceObject = require("react-spring");
;// CONCATENATED MODULE: ./src/components/CardInfo.js



function CardInfo(props) {
    const style = (0,external_react_spring_namespaceObject.useSpring)({
        opacity: 1,
        from: {
            opacity: 0
        }
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_spring_namespaceObject.animated.div, {
        className: "g-card-info",
        style: style,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "g-card-title",
                children: props.title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "g-card-sub-title",
                children: props.subTitle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: props.link,
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View"
            })
        ]
    });
}
/* harmony default export */ const components_CardInfo = (CardInfo);

;// CONCATENATED MODULE: ./src/components/Card.js



function Card(props) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-inline-block g-card",
        onClick: (e)=>props.click(props.item),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: "g-card-image",
                src: props.item.imgSrc,
                alt: props.item.imgSrc
            }),
            props.item.selected && /*#__PURE__*/ jsx_runtime_.jsx(components_CardInfo, {
                title: props.item.title,
                subTitle: props.item.subTitle,
                link: props.item.link
            })
        ]
    });
}
/* harmony default export */ const components_Card = (Card);

// EXTERNAL MODULE: external "react-bootstrap/Container"
var Container_ = __webpack_require__(678);
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);
// EXTERNAL MODULE: external "react-bootstrap/Row"
var Row_ = __webpack_require__(907);
var Row_default = /*#__PURE__*/__webpack_require__.n(Row_);
;// CONCATENATED MODULE: ./src/components/Carousel.js








class Carousel extends external_react_.Component {
    state = {
        items: [
            {
                id: 0,
                title: "Dev Grub",
                subTitle: "The cookbook for developers",
                imgSrc: devgrub,
                link: "https://github.com/garrettlove8",
                selected: false
            },
            {
                id: 1,
                title: "Garrett Love",
                subTitle: "YouTube channel",
                imgSrc: youtube,
                link: "https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw",
                selected: false
            },
            {
                id: 2,
                title: "Everest",
                subTitle: "A social network for developers",
                imgSrc: evverest,
                link: "https://github.com/garrettlove8/evverest",
                selected: false
            }, 
        ]
    };
    handleCardClick = (id, card)=>{
        // console.log(id);
        let items = [
            ...this.state.items
        ];
        items[id].selected = items[id].selected ? false : true;
        items.forEach((item)=>{
            if (item.id !== id) {
                item.selected = false;
            }
        // return item;
        });
        this.setState({
            items
        });
    };
    makeItems = (items)=>{
        return items.map((item)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx(components_Card, {
                item: item,
                click: (e)=>this.handleCardClick(item.id, e)
            }, item.id);
        });
    };
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx((Container_default()), {
            fluid: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Row_default()), {
                className: "justify-content-around",
                children: this.makeItems(this.state.items)
            })
        });
    }
}
/* harmony default export */ const components_Carousel = (Carousel);

// EXTERNAL MODULE: ./src/components/Hero.js
var Hero = __webpack_require__(574);
;// CONCATENATED MODULE: external "react-icons/bs"
const bs_namespaceObject = require("react-icons/bs");
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./src/components/TestIcons.js




const TestIcons = ()=>{
    const { 0: showText , 1: setShowText  } = (0,external_react_.useState)(false);
    const copyToClipboard = ()=>{
        setShowText(true);
        setTimeout(()=>{
            setShowText(false);
        }, 2000);
    };
    let text = encodeURIComponent("HEy There!");
    let copyUrl = `https://legendary-gnome-12ddb6.netlify.app/`;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "d-flex align-items-center email-link-cont email-link-cont-selected",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mr-1"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "d-flex flex-column position-relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mb-0 email-link-title color-white",
                                children: "Share Job Description as Link"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "email-link-subtitle color-white",
                                children: "An online link where candidates can view description and apply"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "d-flex align-items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `https://www.linkedin.com/shareArticle?url=${copyUrl}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsLinkedin, {
                                            className: "cursor-pointer share-link-logo",
                                            style: {
                                                fontSize: "27px",
                                                color: "#4170b1",
                                                marginRight: "5px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `https://web.whatsapp.com/send?text=${text} ${copyUrl}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaWhatsappSquare, {
                                            className: "cursor-pointer share-link-logo",
                                            style: {
                                                fontSize: "32px",
                                                color: "#49a83f",
                                                marginRight: "5px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `https://twitter.com/intent/tweet?url=${copyUrl}&title=${text}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTwitterSquare, {
                                            className: "cursor-pointer share-link-logo",
                                            style: {
                                                fontSize: "32px",
                                                color: "#1da1f2",
                                                marginRight: "5px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `https://www.facebook.com/sharer.php?u=${copyUrl}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(bs_namespaceObject.BsFacebook, {
                                            className: "cursor-pointer share-link-logo",
                                            style: {
                                                fontSize: "31px",
                                                color: "#1876f3",
                                                marginRight: "5px"
                                            }
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: `https://telegram.me/share/url?url=${copyUrl}&text=${text}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_namespaceObject.FaTelegram, {
                                            className: "cursor-pointer share-link-logo",
                                            style: {
                                                fontSize: "31px",
                                                color: "#00ace3",
                                                marginRight: "8px"
                                            }
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "position-relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "copy-link-btn cursor-pointer",
                                        onClick: copyToClipboard,
                                        children: "Copy Link"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: `d-none ${showText && "link-copied"}`,
                                        children: "Link copied"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "ribbon-email-link",
                children: "Hello"
            })
        ]
    });
};
/* harmony default export */ const components_TestIcons = (TestIcons);

;// CONCATENATED MODULE: ./pages/HomePage.js





function HomePage({ data  }) {
    const func = async ()=>{
        // const res = await fetch(`/api/revalidate/myagency?rxveohyjwptnzkb`);
        console.log(res, "console.log", "res", data);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            "time" + "hello",
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>func(),
                children: "revalidate"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_TestIcons, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Carousel, {})
        ]
    });
}
/* harmony default export */ const pages_HomePage = (HomePage);
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
    const profileData = await fetch(`${baseurl}RecruiterV2/Profile/GET/GetAgencyByDomainName?site_name=${siteName}`).then((res1)=>{
        return res1 === null || res1 === void 0 ? void 0 : res1.json();
    });
    // fetch pricing data for job board
    let dev = (process === null || process === void 0 ? void 0 : (ref = process.env) === null || ref === void 0 ? void 0 : "production") === "development" ? "http://localhost:5004" : "https://test.lineupx.com";
    const res1 = await fetch(dev + `/api/pricing/${(ref1 = profileData.result) === null || ref1 === void 0 ? void 0 : ref1._id}`);
    const data = await (res1 === null || res1 === void 0 ? void 0 : res1.json());
    console.log("profileData", data, "data");
    // fetch appearance data for meta tags
    const appearanceData = await fetch(`${baseurl}RecruiterV2/Profile/GET/GetAppearanceSettings?agency_id=${profileData === null || profileData === void 0 ? void 0 : (ref2 = profileData.result) === null || ref2 === void 0 ? void 0 : ref2._id}`).then((res1)=>res1.json());
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
            time: new Date().getTime()
        }
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("react-bootstrap/Jumbotron");

/***/ }),

/***/ 907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

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
var __webpack_exports__ = __webpack_require__.X(0, [574], () => (__webpack_exec__(44)));
module.exports = __webpack_exports__;

})();