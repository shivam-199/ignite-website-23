(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8468:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Footer_root__aut_S",
	"name_text": "Footer_name_text__xThmh",
	"tech_council_outer": "Footer_tech_council_outer__0K4Ed",
	"ignite_text": "Footer_ignite_text__EBgqp",
	"tech_council_text": "Footer_tech_council_text__6jKMn",
	"tech_council_quote": "Footer_tech_council_quote__Z8ed9",
	"section_title": "Footer_section_title__thGFi",
	"useful_links_outer": "Footer_useful_links_outer__1O_8B",
	"useful_links": "Footer_useful_links__AEq08",
	"icon_style": "Footer_icon_style__V57cJ",
	"contact_us_outer": "Footer_contact_us_outer__Nz2ti",
	"social_link": "Footer_social_link__P7b3h",
	"torque_magazine_outer": "Footer_torque_magazine_outer__GMKL9",
	"torque_text": "Footer_torque_text__aeQYQ",
	"contact_text": "Footer_contact_text__ha_N4"
};


/***/ }),

/***/ 2508:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Header_navbar__VZo5c",
	"logo_link": "Header_logo_link__7u4H2",
	"logo_class": "Header_logo_class__sFBD0",
	"title": "Header_title__ooqL8",
	"headerLink": "Header_headerLink__qNtS1",
	"header_logo": "Header_header_logo__yiqKd",
	"iitgn_logo_header": "Header_iitgn_logo_header___d_Zb",
	"nav_outer": "Header_nav_outer__Ii6XZ",
	"navigation": "Header_navigation__2L2_B",
	"headerItem": "Header_headerItem__CQuK8",
	"active": "Header_active__m19aF",
	"navLinks": "Header_navLinks___YQfh",
	"bars": "Header_bars__WparY",
	"navigation_sm": "Header_navigation_sm__vY0EA",
	"headerItem_sm": "Header_headerItem_sm__rFDlE",
	"cross": "Header_cross__rXNrU"
};


/***/ }),

/***/ 6602:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Popup_root__DHrz_",
	"heading": "Popup_heading__KbAKl",
	"cross": "Popup_cross___qhCf"
};


/***/ }),

/***/ 7636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./styles/Common/Header.module.css
var Header_module = __webpack_require__(2508);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./public/assets/icons/menu-24.png
/* harmony default export */ const menu_24 = ({"src":"/ignite/_next/static/media/menu-24.cff15663.png","height":24,"width":24,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAO0lEQVR42mPAAP9U/+X+S/uXAYRpQJYqwz/Zf6H/AiEQyJJl+Cf3L/JfyL9QIAwBsuQwBDC0YBiKYSsAheA98bOei3EAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./public/assets/icons/multiply-30.png
/* harmony default export */ const multiply_30 = ({"src":"/ignite/_next/static/media/multiply-30.c9e221f0.png","height":30,"width":30,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAASElEQVR42mWNQQoAIQwDi/sZ9w/2qP9/jd6igwUPSiAko21NSYY+ZChh+uW7OMkiTDVV3AXgK6VrAGkvwMoZKbEjE+IhA+6zC1aXTCkxJIqEAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/Constants/routes.js
const ROUTES = [
    {
        name: "Home",
        path: "/#Home"
    },
    {
        name: "About",
        path: "/#About"
    },
    {
        name: "Events",
        path: "/#Events"
    }, 
];
/* harmony default export */ const routes = (ROUTES);

;// CONCATENATED MODULE: ./src/Common/Header.js









const Header = ()=>{
    const router = (0,router_namespaceObject.useRouter)();
    const [isOpen, setIsOpen] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).navbar,
        id: "myTopnav",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Header_module_default()).title,
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: (Header_module_default()).headerLink,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/ignite/assets/icons/g20-logo.png",
                                height: "20%",
                                width: "20%",
                                className: (Header_module_default()).iitgn_logo_header
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/ignite/assets/icons/iitgn-logo-white.png",
                                height: "20%",
                                width: "20%",
                                className: (Header_module_default()).iitgn_logo_header
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "/ignite/assets/icons/logo_lal_minar.png",
                                height: "20%",
                                width: "20%",
                                className: (Header_module_default()).header_logo
                            }),
                            "IGNITE"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (Header_module_default()).nav_outer,
                children: !isOpen ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: (Header_module_default()).navigation,
                            children: routes.map((route, id)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    className: `${router.asPath === route.path && (Header_module_default()).active} ${(Header_module_default()).headerItem}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: route.path,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            className: (Header_module_default()).navLinks,
                                            children: route.name
                                        })
                                    })
                                }, id);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Header_module_default()).bars,
                            onClick: ()=>setIsOpen(true),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: menu_24,
                                    height: "20%",
                                    width: "20%",
                                    className: (Header_module_default()).menu_logo
                                })
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: (Header_module_default()).navigation_sm,
                    children: [
                        routes.map((route, id)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: `${router.pathname === route.path && (Header_module_default()).active} ${(Header_module_default()).headerItem_sm}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: route.path,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (Header_module_default()).navLinks,
                                        onClick: ()=>setIsOpen(false),
                                        children: route.name
                                    })
                                })
                            }, id);
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: (Header_module_default()).cross,
                            onClick: ()=>setIsOpen(false),
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: multiply_30,
                                    height: "20%",
                                    width: "20%",
                                    className: (Header_module_default()).menu_logo
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Common_Header = (Header);

// EXTERNAL MODULE: ./styles/Common/Footer.module.css
var Footer_module = __webpack_require__(8468);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/Constants/footer_links.js
const QUICK = [
    {
        id: 1,
        name: "IITGN Website",
        path: "https://iitgn.ac.in/",
        icon: "/ignite/assets/icons/icons8-cpu-64.png"
    },
    {
        id: 2,
        name: "Tech Council",
        path: "https://students.iitgn.ac.in/tech-council/",
        icon: "/ignite/assets/icons/icons8-cpu-64.png"
    },
    {
        id: 3,
        name: "Academics",
        path: "https://iitgn.ac.in/academics/",
        icon: "/ignite/assets/icons/icons8-cpu-64.png"
    }, 
];
const SOCIAL = {
    facebook: "https://www.facebook.com/igniteiitgn/",
    // youtube: "https://www.youtube.com/channel/UCW7mfvpgbit4JZmMXOJihrA",
    instagram: "https://www.instagram.com/ignite_iitgn/",
    email: "ignite@iitgn.ac.in"
};
const FOOTER_LINKS = {
    quick: QUICK,
    social: SOCIAL
};
/* harmony default export */ const footer_links = (FOOTER_LINKS);

;// CONCATENATED MODULE: ./src/Common/Footer.js



function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Footer_module_default()).root,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).tech_council_outer,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (Footer_module_default()).name_text,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Footer_module_default()).ignite_text,
                                children: "G20- IGNITE"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: (Footer_module_default()).tech_council_text,
                                children: "IIT Gandhinagar"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: (Footer_module_default()).tech_council_quote,
                        children: '"To create a culture where technology is the solution of every problem."'
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).useful_links_outer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Footer_module_default()).section_title,
                        children: "USEFUL LINKS"
                    }),
                    footer_links.quick.map((link)=>{
                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: (Footer_module_default()).useful_links,
                            href: link.path,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: link.icon,
                                    width: "15%",
                                    height: "15%",
                                    className: (Footer_module_default()).icon_style
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: link.name
                                })
                            ]
                        }, link.id);
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Footer_module_default()).contact_us_outer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: (Footer_module_default()).section_title,
                        children: "CONTACT US"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: (Footer_module_default()).contact_text,
                        children: "Indian Institute of Technology Gandhinagar Palaj, Gandhinagar, Gujarat, India - 382355"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: footer_links.social.facebook,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/ignite/assets/icons/icons8-facebook-48.png",
                                    className: (Footer_module_default()).social_link
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: footer_links.social.instagram,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/ignite/assets/icons/icons8-instagram-48.png",
                                    className: (Footer_module_default()).social_link
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: `mailto:${footer_links.social.email}`,
                                target: "_blank",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "/ignite/assets/icons/icons8-envelope-48.png",
                                    className: (Footer_module_default()).social_link
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./styles/Common/Popup.module.css
var Popup_module = __webpack_require__(6602);
var Popup_module_default = /*#__PURE__*/__webpack_require__.n(Popup_module);
;// CONCATENATED MODULE: ./src/Common/Popup.js





const Popup = ()=>{
    const [isOpen, setIsOpen] = external_react_default().useState(true);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Popup_module_default()).root,
        children: isOpen && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Popup_module_default()).heading,
                    children: "Avail discount on group registration for 50+ students."
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "/ignite/assets/icons/multiply-30.png",
                    className: (Popup_module_default()).cross,
                    onClick: ()=>setIsOpen(false)
                })
            ]
        })
    });
};
/* harmony default export */ const Common_Popup = (Popup);

;// CONCATENATED MODULE: ./src/Common/Layout.js





const Layout = ({ children  })=>{
    const footerVisibility = (0,router_namespaceObject.useRouter)().pathname === "/Contact" ? false : true;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Common_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Common_Popup, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            footerVisibility && /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const Common_Layout = (Layout);

// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
;// CONCATENATED MODULE: ./pages/_app.js





const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.NextUIProvider, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Common_Layout, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61], () => (__webpack_exec__(7636)));
module.exports = __webpack_exports__;

})();