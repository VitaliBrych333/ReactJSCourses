module.exports=function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="dgTK")}({"+0gX":function(e){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},"6/X0":function(e){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteralLoose")},Dtiu:function(e){e.exports=require("styled-components")},IZS3:function(e){e.exports=require("react-bootstrap")},cDcd:function(e){e.exports=require("react")},dgTK:function(e,n,t){function r(){var e=(0,i.default)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin: 250px auto 0;\n  width: 370px;\n\n  .btn-primary {\n    background-color: #232323;\n    border-color: #f65261;\n    color: #f65261;\n  }\n\n  .btn-primary: hover {\n    background-color: #f65261;\n    color: #fff;\n  }\n\n  button {\n    width: 200px;\n    text-transform: uppercase;\n    margin: 0 auto;\n  }\n\n  p {\n    font-size: 50px;\n    text-align: center;\n    text-transform: capitalize;\n  }\n\n  span {\n    font-size: 170px;\n    text-align: center;\n  }\n"]);return r=function(){return e},e}var o=t("mzt6"),u=t("+0gX");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(t("6/X0")),a=o(t("cDcd")),l=u(t("Dtiu")),c=t("IZS3"),f=t("oncg"),p=l.default.h3(r()),d=(0,a.memo)((function(){var e=(0,f.useHistory)();return a.default.createElement(p,null,a.default.createElement("p",null,"Page not found"),a.default.createElement("span",null,"404"),a.default.createElement(c.Button,{variant:"primary",onClick:function(){e.push("/")}},"Go back to home"))}));n.default=d},mzt6:function(e){e.exports=require("@babel/runtime/helpers/interopRequireWildcard")},oncg:function(e){e.exports=require("react-router-dom")}});