module.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(r,a,function(t){return e[t]}.bind(null,a));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="0Wka")}({"+0gX":function(e){e.exports=require("@babel/runtime/helpers/interopRequireDefault")},"0Wka":function(e,t,n){function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,c.default)(this,n)}}function a(){var e=(0,s.default)(["\n  padding: 25px;\n  background-color: rgb(209, 189, 189);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n\n  .card {\n    margin-top: 15px;\n    margin-bottom: 10px;\n  }\n"]);return a=function(){return e},e}var o=n("mzt6"),l=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n("MmcY")),i=l(n("iTvO")),d=l(n("cB7G")),c=l(n("86LY")),f=l(n("a4YD")),s=l(n("6/X0")),m=o(n("cDcd")),v=l(n("rf6O")),p=l(n("Dtiu")),h=n("h74D"),g=l(n("Lc87")),E=l(n("m6Ln")),y=l(n("9ftt")),b=l(n("VyGU")),w=l(n("BijZ")),x=l(n("2wEF")),C=n("wBE/"),S=p.default.section(a()),_=function(e){function t(){return(0,u.default)(this,t),n.apply(this,arguments)}(0,d.default)(t,e);var n=r(t);return(0,i.default)(t,[{key:"shouldComponentUpdate",value:function(e){var t=this.props,n=t.location,r=t.data,a=t.isShowEditPage,o=t.isShowDeletePage,l=e.location;return n.pathname!==l.pathname||n.search!==e.location.search||JSON.stringify(r)!==JSON.stringify(e.data)||a!==e.isShowEditPage||o!==e.isShowDeletePage}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.fetchMovies,r=t.fetchMoviesByGenre,a=t.location;if(e.location.search!==a.search){var o=a.search,l=g.default.parse(o),u=l.sortBy,i=l.search,d=l.searchBy,c=l.filter;u&&i&&n(u,i),u&&d&&c&&r(u,c)}}},{key:"render",value:function(){var e,t=this.props,n=t.data,r=t.isShowEditPage,a=t.isShowDeletePage;return null!==n&&n.length?e=m.default.createElement(S,null,n.map((function(e){return m.default.createElement(E.default,{key:e.id,info:e})}))):null!==n&&!n.length&&(e=m.default.createElement(x.default,null)),m.default.createElement(m.default.Fragment,null,r&&m.default.createElement(y.default,null),a&&m.default.createElement(b.default,null),m.default.createElement(w.default,null),e)}}],[{key:"initialAction",value:function(e){var t=e.query,n=t.sortBy,r=t.search,a=t.searchBy,o=t.filter;return n&&r?(0,C.fetchMovies)(n,r):n&&a&&o?(0,C.fetchMoviesByGenre)(n,o):(0,C.fetchMoviesBegin)()}}]),t}(m.Component);_.propTypes={data:v.default.arrayOf(v.default.object),isShowEditPage:v.default.bool,isShowDeletePage:v.default.bool,fetchMovies:v.default.func,fetchMoviesByGenre:v.default.func,location:v.default.objectOf(v.default.any)};var M={fetchMovies:C.fetchMovies,fetchMoviesByGenre:C.fetchMoviesByGenre},D=(0,h.connect)((function(e){return{data:e.movieReducer.moviesByCriteria.data,isShowEditPage:e.windowReducer.isShowEditPage,isShowDeletePage:e.windowReducer.isShowDeletePage}}),M)(_);t.default=D},"2wEF":function(e,t,n){function r(){var e=(0,l.default)(["\n  margin: 150px auto 0;\n  text-transform: capitalize;\n  text-align: center;\n  font-size: 40px;\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")).default.h3(r()),d=(0,u.memo)((function(){return u.default.createElement(i,null,"No movie found")}));t.default=d},"3//T":function(e,t,n){var r=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=(0,o.useState)((function(){return t+""})),r=(0,a.default)(n,2),l=r[0],u=r[1];return(0,o.useEffect)((function(){var t=window.localStorage.getItem(e);t&&""!==t&&u(t)}),[e]),(0,o.useEffect)((function(){window.localStorage.setItem(e,l)}),[e,l]),[l,u]};var a=r(n("YQGl")),o=n("cDcd")},"4vsW":function(e){e.exports=require("node-fetch")},"6/X0":function(e){e.exports=require("@babel/runtime/helpers/taggedTemplateLiteralLoose")},"61jP":function(e,t,n){function r(){var e=(0,u.default)(["\n  display: inline-block;\n\n  button: hover {\n    background-color: #f65261;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("YQGl")),u=o(n("6/X0")),i=a(n("cDcd")),d=n("oL/c"),c=n("h74D"),f=o(n("Dtiu")),s=o(n("rf6O")),m=n("wBE/"),v=(0,f.default)(d.Dropdown)(r()),p=function(e){var t=e.sortType,n=e.sort,r=(0,i.useState)(!1),a=(0,l.default)(r,2),o=a[0],u=a[1],c=(0,i.useState)("release_date"===t?"Release date":"Rating"),f=(0,l.default)(c,2),s=f[0],m=f[1],p=(0,i.useCallback)((function(e){m((function(){return e.target.textContent})),n(e.target.textContent)}),[n]);return i.default.createElement(v,null,i.default.createElement(d.Dropdown,{className:"drop",isOpen:o,toggle:function(){u((function(e){return!e}))}},i.default.createElement(d.DropdownToggle,{caret:!0},s),i.default.createElement(d.DropdownMenu,null,i.default.createElement(d.DropdownItem,{onClick:p},"Release date"),i.default.createElement(d.DropdownItem,{onClick:p},"Rating"))))};p.propTypes={sortType:s.default.string,sort:s.default.func};var h={sort:m.sort},g=(0,c.connect)((function(e){return{sortType:e.movieReducer.sort}}),h)(p);t.default=g},"86LY":function(e){e.exports=require("@babel/runtime/helpers/possibleConstructorReturn")},"9ftt":function(e,t,n){function r(){var e=(0,l.default)(["\n  .modal {\n    background: rgba(0, 0, 0, 0.6);\n    display: block;\n  }\n\n  .modal-main {\n    position: fixed;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 25px;\n    margin: 50px auto;\n    border: 3px solid black;\n    background-color: #424242;\n  }\n\n  label {\n    text-transform: uppercase;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")),d=o(n("cNWQ")),c=i.default.section(r()),f=(0,u.memo)((function(){return u.default.createElement(c,null,u.default.createElement("div",{className:"modal"},u.default.createElement("section",{className:"modal-main"},u.default.createElement(d.default,{namePage:"Edit movie",nameButton:"Save"}))))}));t.default=f},BijZ:function(e,t,n){function r(){var e=(0,l.default)(["\n  height: 333px;\n  background-color: rgb(161, 144, 144);\n\n  .types {\n    padding: 10px 50px;\n    display: flex;\n    margin-top: 50px;\n    justify-content: space-between;\n    background-color: rgb(90, 70, 70);\n    color: beige;\n  }\n\n  .count-movie {\n    padding-left: 50px;\n    display: flex;\n    justify-content: flex-end;\n    color: beige;\n  }\n\n  .count-movie p {\n    margin-left: 0;\n  }\n\n  .add-movie {\n    margin: 40px;\n    float: right;\n  }\n\n  .add-movie:hover {\n    background-color: rgb(90, 70, 70);\n  }\n\n  div,\n  button {\n    text-transform: uppercase;\n  }\n\n  .count-movie {\n    text-transform: lowercase;\n  }\n\n  .nav-item a:hover {\n    border-bottom: 2px solid red;\n  }\n\n  .active {\n    border-bottom: 2px solid red;\n  }\n\n  h1 {\n    padding: 70px 0 20px 50px;\n  }\n\n  p {\n    display: inline-block;\n    margin: 0 20px 0 50px;\n    padding-top: 5px;\n  }\n\n  .count {\n    flex-grow: 1;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")),d=n("h74D"),c=o(n("rf6O")),f=o(n("Q9W4")),s=o(n("dwHC")),m=o(n("uWmK")),v=i.default.header(r()),p=function(e){var t=e.total;return u.default.createElement(v,null,u.default.createElement(f.default,null),u.default.createElement("div",{className:"types"},u.default.createElement(m.default,null),u.default.createElement(s.default,null)),u.default.createElement("div",{className:"count-movie"},0<t&&u.default.createElement("p",{className:"count"},t," Movies found")))};p.propTypes={total:c.default.number};var h=(0,d.connect)((function(e){return{total:e.movieReducer.moviesByCriteria.totalAmount}}))((0,u.memo)(p));t.default=h},C8TP:function(e){e.exports=require("yup")},CGtv:function(e,t,n){function r(){var e=(0,l.default)(["\n  h2,\n  .close {\n    color: #fff;\n  }\n\n  h2 {\n    text-transform: uppercase;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")),d=o(n("rf6O")),c=i.default.div(r()),f=function(e){var t=e.namePage,n=e.handleClose;return u.default.createElement(c,null,u.default.createElement("button",{type:"button",className:"close",onClick:n},u.default.createElement("span",null,"×")),u.default.createElement("h2",null,t))};f.propTypes={handleClose:d.default.func,namePage:d.default.string};var s=(0,u.memo)(f);t.default=s},Dtiu:function(e){e.exports=require("styled-components")},IZS3:function(e){e.exports=require("react-bootstrap")},KA8b:function(e,t,n){function r(){var e=(0,l.default)(["\n  .modal-main {\n    position: fixed;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 25px;\n    margin: 50px auto;\n    border: 3px solid black;\n    background-color: #424242;\n  }\n\n  .modal {\n    display: block;\n    background: rgba(0, 0, 0, 0.6);\n  }\n\n  .select div {\n    text-transform: none;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")),d=o(n("cNWQ")),c=i.default.section(r()),f=(0,u.memo)((function(){return u.default.createElement(c,null,u.default.createElement("div",{className:"modal"},u.default.createElement("section",{className:"modal-main"},u.default.createElement(d.default,{namePage:"Add movie",nameButton:"Submit"}))))}));t.default=f},Lc87:function(e){e.exports=require("query-string")},MmcY:function(e){e.exports=require("@babel/runtime/helpers/classCallCheck")},NM28:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=selectOptions=[{value:"adventure",label:"Adventure"},{value:"action",label:"Action"},{value:"animation",label:"Animation"},{value:"comedy",label:"Comedy"},{value:"crime",label:"Crime"},{value:"drama",label:"Drama"},{value:"horror",label:"Horror"},{value:"history",label:"History"},{value:"fantasy",label:"Fantasy"},{value:"family",label:"Family"},{value:"mystery",label:"Mystery"},{value:"music",label:"Music"},{value:"romance",label:"Romance"},{value:"science fiction",label:"Science Fiction"},{value:"thriller",label:"Thriller"},{value:"war",label:"War"}];t.default=n},OfsH:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.showAddPage=t.showDeletePage=t.showEditPage=t.setEditFilm=t.SHOW_ADDPAGE=t.SHOW_DELETEPAGE=t.SHOW_EDITPAGE=t.SET_EDITFILM=void 0;var n="SET_EDITFILM";t.SET_EDITFILM=n;var r="SHOW_EDITPAGE";t.SHOW_EDITPAGE=r;var a="SHOW_DELETEPAGE";t.SHOW_DELETEPAGE=a;var o="SHOW_ADDPAGE";t.SHOW_ADDPAGE=o,t.setEditFilm=function(e,t){return{type:n,payload:{filmEdit:e,actionType:t}}},t.showEditPage=function(e){return{type:r,payload:{isShowEditPage:e}}},t.showDeletePage=function(e){return{type:a,payload:{isShowDeletePage:e}}},t.showAddPage=function(e){return{type:o,payload:{isShowAddPage:e}}}},Q9W4:function(e,t,n){function r(){var e=(0,i.default)(["\n  a {\n    color: #f65261;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  button:hover > a {\n    color: #fff;\n  }\n"]);return r=function(){return e},e}function a(){var e=(0,i.default)(["\n  padding: 0 50px;\n  margin: 0 auto;\n  max-width: 700px;\n\n  .input-group-append {\n    background-color: bisque;\n  }\n"]);return a=function(){return e},e}var o=n("mzt6"),l=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n("YQGl")),i=l(n("6/X0")),d=o(n("cDcd")),c=n("IZS3"),f=n("oncg"),s=n("h74D"),m=l(n("rf6O")),v=l(n("Dtiu")),p=l(n("KA8b")),h=l(n("3//T")),g=n("OfsH"),E=(0,v.default)(c.InputGroup)(a()),y=v.default.div(r()),b=function(e){var t=e.sortType,n=e.isShowAddPage,r=e.showAddPage,a=(0,f.useHistory)(),o=(0,d.useState)({disabled:!0,myRef:(0,d.createRef)()}),l=(0,u.default)(o,2),i=l[0],s=l[1],m=(0,h.default)("my-app-defaultValueSearch",""),v=(0,u.default)(m,2),g=v[0],b=v[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(y,null,n&&d.default.createElement(p.default,null),d.default.createElement(c.Button,{className:"add-movie",variant:"outline-danger",onClick:function(){r(!0)}},"+ Add movie"),d.default.createElement("h1",null,"Find your movie")),d.default.createElement(E,{className:"mb-3"},d.default.createElement(c.FormControl,{placeholder:"Please write the film name",ref:function(e){return i.myRef=e},onChange:function(){s({disabled:!i.myRef.value}),b(i.myRef.value)},defaultValue:g}),d.default.createElement(c.InputGroup.Append,null,d.default.createElement(c.Button,{variant:"outline-danger",onClick:function(){a.push("/search/movies?sortBy="+t+"&sortOrder=desc&search="+i.myRef.value+"&searchBy=title")},disabled:i.disabled&&!g},"Search"))))};b.propTypes={showAddPage:m.default.func,sortType:m.default.string,isShowAddPage:m.default.bool};var w={showAddPage:g.showAddPage},x=(0,s.connect)((function(e){return{sortType:e.movieReducer.sort,isShowAddPage:e.windowReducer.isShowAddPage}}),w)(b);t.default=x},QxnH:function(e){e.exports=require("formik")},UQSI:function(e){e.exports=require("@material-ui/icons/MoreVert")},VivA:function(e,t,n){function r(){var e=(0,l.default)(["\n  .modal {\n    display: block;\n    position: absolute;\n    z-index: 1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.6);\n  }\n\n  .modal-main {\n    position: absolute;\n    background: white;\n    border-radius: 5%;\n    width: 50%;\n    height: auto;\n    top: 12%;\n    left: 72%;\n    background-color: rgb(161, 144, 144);\n    transform: translate(-50%, -50%);\n  }\n\n  p {\n    margin: 10px 2px 2px;\n    color: white;\n  }\n\n  p: nth-child(2) {\n    margin-top: 22px;\n  }\n\n  p: hover {\n    background-color: #f65261;\n    cursor: pointer;\n  }\n\n  .close: hover {\n    text-decoration: none;\n    color: #f65261;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=o(n("Dtiu")),d=o(n("rf6O")),c=i.default.div(r()),f=function(e){var t=e.handleClose,n=e.children;return u.default.createElement(c,null,u.default.createElement("div",{className:"modal"},u.default.createElement("section",{className:"modal-main"},u.default.createElement("button",{type:"button",className:"close","aria-label":"Close",onClick:t},u.default.createElement("span",{"aria-hidden":"true"},"×")),n)))};f.propTypes={handleClose:d.default.func,children:d.default.arrayOf(d.default.object)};var s=(0,u.memo)(f);t.default=s},VyGU:function(e,t,n){function r(){var e=(0,l.default)(["\n  .modal {\n    background: rgba(0, 0, 0, 0.6);\n    display: block;\n  }\n\n  .modal-main {\n    position: fixed;\n    width: 400px;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    padding: 25px;\n    margin: 50px auto;\n    border: 3px solid black;\n    background-color: #424242;\n  }\n\n  p {\n    color: #fff;\n  }\n\n  .btn-primary {\n    background-color: #232323;\n    border-color: #f65261;\n    color: #f65261;\n    text-transform: uppercase;\n    margin-left: 250px;\n  }\n\n  .btn-primary: hover {\n    background-color: #f65261;\n    color: #fff;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=n("IZS3"),d=o(n("Dtiu")),c=n("h74D"),f=o(n("rf6O")),s=o(n("CGtv")),m=n("OfsH"),v=n("wBE/"),p=d.default.section(r()),h=function(e,t){return{data:e.data.filter((function(e){return e.id!==t})),totalAmount:e.totalAmount-1}},g=function(e){var t=e.moviesByCriteria,n=e.movies,r=e.filmEdit,a=e.deleteMovie,o=e.showDeletePage,l=(0,u.useCallback)((function(){return o(!1)}),[o]),d=(0,u.useCallback)((function(){var e=h(t,r.id),o=h(n,r.id);a(r.id,e,o)}),[t,r.id,n,a]);return u.default.createElement(p,null,u.default.createElement("div",{className:"modal"},u.default.createElement("section",{className:"modal-main"},u.default.createElement(s.default,{namePage:"Delete Movie",handleClose:l}),u.default.createElement("p",null,"Are you sure you want to delete this movie?"),u.default.createElement(i.Button,{variant:"primary",onClick:d},"Confirm"))))};g.propTypes={showDeletePage:f.default.func,deleteMovie:f.default.func,filmEdit:f.default.shape({id:f.default.number}),moviesByCriteria:f.default.shape({data:f.default.arrayOf(f.default.object)}),movies:f.default.shape({data:f.default.arrayOf(f.default.object)})};var E={deleteMovie:v.deleteMovie,showDeletePage:m.showDeletePage},y=(0,c.connect)((function(e){return{filmEdit:e.windowReducer.filmEdit,moviesByCriteria:e.movieReducer.moviesByCriteria,movies:e.movieReducer.movies}}),E)((0,u.memo)(g));t.default=y},YQGl:function(e){e.exports=require("@babel/runtime/helpers/slicedToArray")},a4YD:function(e){e.exports=require("@babel/runtime/helpers/getPrototypeOf")},aOen:function(e,t,n){function r(){var e=(0,l.default)(["\n  width: 173px;\n  margin-left: 170px;\n  display: flex;\n  justify-content: space-between;\n\n  .btn-primary,\n  .btn-primary:disabled {\n    background-color: #232323;\n    border-color: #f65261;\n    color: #f65261;\n  }\n\n  .btn-primary: hover {\n    background-color: #f65261;\n    color: #fff;\n  }\n\n  button {\n    text-transform: uppercase;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=n("IZS3"),d=o(n("Dtiu")),c=o(n("rf6O")),f=d.default.div(r()),s=function(e){var t=e.handleReset,n=e.handleSave,r=e.nameButton,a=e.disabledSave;return u.default.createElement(f,null,u.default.createElement(i.Button,{variant:"primary",onClick:t},"Reset"),u.default.createElement(i.Button,{variant:"primary",onClick:n,disabled:a},r))};s.propTypes={handleReset:c.default.func,handleSave:c.default.func,nameButton:c.default.string,disabledSave:c.default.bool};var m=(0,u.memo)(s);t.default=m},cB7G:function(e){e.exports=require("@babel/runtime/helpers/inherits")},cDcd:function(e){e.exports=require("react")},cNWQ:function(e,t,n){function r(){var e=(0,l.default)(["\n  label {\n    color: #f65261;\n    text-transform: uppercase;\n  }\n\n  .error {\n    color: green;\n    text-transform: uppercase;\n  }\n"]);return r=function(){return e},e}var a=n("mzt6"),o=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n("6/X0")),u=a(n("cDcd")),i=n("IZS3"),d=o(n("vtRj")),c=n("h74D"),f=o(n("Dtiu")),s=o(n("rf6O")),m=n("QxnH"),v=a(n("C8TP")),p=o(n("aOen")),h=o(n("CGtv")),g=o(n("NM28")),E=n("wBE/"),y=n("OfsH"),b=v.object({id:v.number().integer("Invalid format"),title:v.string().required("Required"),date:v.date().required("Required"),url:v.string().url("Invalid format").required("Required"),genre:v.string().nullable().required("Required"),overview:v.string().required("Required"),runtime:v.number().integer("Invalid format").positive("Invalid format").required("Required")}),w=function(e,t){var n=JSON.parse(JSON.stringify(e));return n.data.forEach((function(e){if(e.id===t.id)for(var n in e)"id"!==n&&(e[n]=t[n])})),n},x=f.default.div(r()),C=function(e){var t=e.namePage,n=e.filmEdit,r=e.movies,a=e.moviesByCriteria,o=e.nameButton,l=e.updateMovie,c=e.addMovie,f=e.showEditPage,s=e.showAddPage,v=(0,m.useFormik)({initialValues:{id:"",title:"",date:"",url:"",genre:"",overview:"",runtime:""},validationSchema:b,onSubmit:(0,u.useCallback)((function(e){var t={title:e.title,genres:Array.from(e.genre,(function(e){return e.label})),release_date:e.date,poster_path:e.url,overview:e.overview,runtime:e.runtime};if("Submit"===o)c(t),C();else if("Save"===o){t.id=e.id,t.vote_average=n.vote_average;var u=w(a,t),i=w(r,t);l(t,u,i)}}),[c,n,C,r,a,o,l])}),E=(0,u.useCallback)((function(){v.resetForm(),"Edit movie"===t&&v.setFieldValue("id",n.id)}),[v,t,n]),y=(0,u.useCallback)((function(){v.setValues({id:n.id,title:n.title||"",date:n.release_date||"",url:n.poster_path||"",genre:n.genres.flatMap((function(e){return{value:e.toLowerCase(),label:e}})),overview:n.overview||"",runtime:n.runtime||""})}),[n,v]),C=(0,u.useCallback)((function(){switch(t){case"Edit movie":y(),f(!1);break;case"Add movie":E(),s(!1)}}),[E,t,y,s,f]);return(0,u.useEffect)((function(){"Edit movie"===t&&n&&!v.values.id&&y()}),[n,t,y,v]),u.default.createElement(x,null,u.default.createElement(i.Form,null,u.default.createElement(h.default,{namePage:t,handleClose:C}),u.default.createElement(i.Form.Group,{className:t},"Edit movie"===t&&u.default.createElement(u.default.Fragment,null,u.default.createElement(i.Form.Label,null,"Movie id"),u.default.createElement(i.Form.Control,{type:"number",value:v.values.id,name:"id",onChange:v.handleChange,placeholder:"Id",readOnly:!0})),u.default.createElement(i.Form.Label,null,"Title"),u.default.createElement(i.Form.Control,{type:"title",placeholder:"Title",value:v.values.title,name:"title",onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.title&&v.errors.title?u.default.createElement("div",{className:"error"},v.errors.title):null,u.default.createElement(i.Form.Label,null,"Release date"),u.default.createElement(i.Form.Control,{type:"date",placeholder:"Select Date",value:v.values.date,name:"date",onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.date&&v.errors.date?u.default.createElement("div",{className:"error"},v.errors.date):null,u.default.createElement(i.Form.Label,null,"Movie URL"),u.default.createElement(i.Form.Control,{type:"url",placeholder:"Movie URL here",value:v.values.url,name:"url",onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.url&&v.errors.url?u.default.createElement("div",{className:"error"},v.errors.url):null,u.default.createElement(i.Form.Label,null,"Example select"),u.default.createElement(d.default,{className:"select",options:g.default,placeholder:"Select Genre",value:v.values.genre,isMulti:"true",onChange:function(e){v.setFieldValue("genre",e)},onMenuClose:function(){v.setTouched({genre:!0})}}),v.touched.genre&&v.errors.genre?u.default.createElement("div",{className:"error"},v.errors.genre):null,u.default.createElement(i.Form.Label,null,"Overview"),u.default.createElement(i.Form.Control,{type:"text",placeholder:"Overview here",value:v.values.overview,name:"overview",onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.overview&&v.errors.overview?u.default.createElement("div",{className:"error"},v.errors.overview):null,u.default.createElement(i.Form.Label,null,"Runtime"),u.default.createElement(i.Form.Control,{type:"number",placeholder:"Runtime here",value:v.values.runtime,name:"runtime",onChange:v.handleChange,onBlur:v.handleBlur}),v.touched.runtime&&v.errors.runtime?u.default.createElement("div",{className:"error"},v.errors.runtime):null),u.default.createElement(p.default,{nameButton:o,handleReset:E,handleSave:v.submitForm,disabledSave:!(v.dirty&&v.isValid)})))};C.propTypes={filmEdit:s.default.shape({id:s.default.number,title:s.default.string,release_date:s.default.string,poster_path:s.default.string,vote_average:s.default.number,genres:s.default.arrayOf(s.default.string),overview:s.default.string,runtime:s.default.number}),namePage:s.default.string,nameButton:s.default.string,moviesByCriteria:s.default.shape({data:s.default.arrayOf(s.default.object)}),movies:s.default.shape({data:s.default.arrayOf(s.default.object)}),updateMovie:s.default.func,addMovie:s.default.func,showEditPage:s.default.func,showAddPage:s.default.func};var S={updateMovie:E.updateMovie,addMovie:E.addMovie,showEditPage:y.showEditPage,showAddPage:y.showAddPage},_=(0,c.connect)((function(e){return{filmEdit:e.windowReducer.filmEdit,moviesByCriteria:e.movieReducer.moviesByCriteria,movies:e.movieReducer.movies}}),S)((0,u.memo)(C));t.default=_},dwHC:function(e,t,n){var r=n("+0gX"),a=n("mzt6");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("cDcd")),l=r(n("61jP")),u=(0,o.memo)((function(){return o.default.createElement("div",null,o.default.createElement("p",null,"Sort by"),o.default.createElement(l.default,null))}));t.default=u},h74D:function(e){e.exports=require("react-redux")},iTvO:function(e){e.exports=require("@babel/runtime/helpers/createClass")},m6Ln:function(e,t,n){function r(){var e=(0,i.default)(["\n  width: 230px;\n  border: none;\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n\n  .card-body {\n    padding-bottom: 10px;\n    padding-top: 10px;\n  }\n\n  .card-text button {\n    background: none;\n    border: none;\n    color: #212529;\n    padding: 0;\n  }\n\n  img {\n    width: 230px;\n    height: 300px;\n  }\n\n  img:hover {\n    cursor: pointer;\n  }\n\n  .card-text,\n  .card-text p {\n    margin: 0;\n    padding: 0;\n    font-size: 14px;\n  }\n\n  span {\n    height: 24px;\n  }\n\n  button {\n    margin-right: 3px;\n  }\n\n  button:hover {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n\n  .show {\n    display: block;\n    border-radius: 50%;\n    background-color: gray;\n    position: absolute;\n    z-index: 2;\n    margin: 5px 5px 0 197px;\n  }\n\n  svg: hover {\n    cursor: pointer;\n  }\n"]);return r=function(){return e},e}function a(){var e=(0,i.default)(["\n  display: flex;\n  justify-content: space-between;\n\n  a {\n    color: #212;\n  }\n"]);return a=function(){return e},e}var o=n("mzt6"),l=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=l(n("YQGl")),i=l(n("6/X0")),d=o(n("cDcd")),c=n("IZS3"),f=n("oncg"),s=l(n("nxIs")),m=l(n("Dtiu")),v=l(n("rf6O")),p=n("h74D"),h=l(n("UQSI")),g=n("wBE/"),E=n("OfsH"),y=l(n("VivA")),b=(0,m.default)(c.Card.Title)(a()),w=(0,m.default)(c.Card)(r()),x=function(e){var t=e.sortType,n=e.info,r=e.setEditFilm,a=(0,f.useHistory)(),o=(0,d.useState)({dotsIsVisible:!1,showModalWindow:!1}),l=(0,u.default)(o,2),i=l[0],m=l[1],v=(0,d.useCallback)((function(e){a.push("/search/movies?sortBy="+t+"&sortOrder=desc&searchBy=genres&filter="+e.target.value.toLowerCase())}),[a,t]),p=function(){m({dotsIsVisible:!0})},g=function(){m({dotsIsVisible:!1})},E=function(){m({showModalWindow:!1})},x=function(e){g(),E(),r(n,e.target.innerHTML)};return d.default.createElement(w,null,i.dotsIsVisible&&d.default.createElement(h.default,{"data-testid":"custom-element",className:"show",onMouseEnter:p,onClick:function(){g(),m({showModalWindow:!0})}}),i.showModalWindow&&d.default.createElement(y.default,{handleClose:E,onMouseOut:E},d.default.createElement("p",{onClick:x,onKeyDown:x},"Edit"),d.default.createElement("p",{onClick:x,onKeyDown:x},"Delete")),d.default.createElement(c.Card.Img,{variant:"top",alt:"img",src:n.poster_path,onMouseEnter:p,onMouseLeave:g,width:"230",height:"300"}),d.default.createElement(c.Card.Body,null,d.default.createElement(b,null,d.default.createElement(f.Link,{to:{pathname:"/movies/"+n.id}},n.title),d.default.createElement(c.Badge,{variant:"secondary"},n.release_date.trim().slice(0,4))),d.default.createElement(c.Card.Text,null,n.genres.map((function(e){return d.default.createElement("button",{type:"submit",onClick:v,value:e,href:"#",key:(0,s.default)(),info:e,variant:"secondary"},e)})))))};x.propTypes={sortType:v.default.string,setEditFilm:v.default.func,info:v.default.shape({id:v.default.number,title:v.default.string,genres:v.default.arrayOf(v.default.string),release_date:v.default.string,poster_path:v.default.string})};var C={setEditFilm:E.setEditFilm,fetchMovieId:g.fetchMovieId},S=(0,p.connect)((function(e){return{sortType:e.movieReducer.sort,movies:e.movieReducer.movies}}),C)(x);t.default=S},mzt6:function(e){e.exports=require("@babel/runtime/helpers/interopRequireWildcard")},nxIs:function(e){e.exports=require("react-uuid")},"oL/c":function(e){e.exports=require("reactstrap")},oncg:function(e){e.exports=require("react-router-dom")},rf6O:function(e){e.exports=require("prop-types")},uWmK:function(e,t,n){var r=n("mzt6"),a=n("+0gX");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("YQGl")),l=r(n("cDcd")),u=n("IZS3"),i=n("h74D"),d=a(n("rf6O")),c=n("wBE/"),f=function(e){var t=e.genre,n=e.setGenre,r=(0,l.useState)("All"),a=(0,o.default)(r,2),i=a[0],d=a[1];return(0,l.useEffect)((function(){d(t)}),[t]),l.default.createElement(u.Nav,{activeKey:"/home",onSelect:function(e){n(e)}},l.default.createElement(u.Nav.Item,null,l.default.createElement(u.Nav.Link,{eventKey:"All",className:"All"===i?"active":""},"All")),l.default.createElement(u.Nav.Item,null,l.default.createElement(u.Nav.Link,{eventKey:"Documentary",className:"Documentary"===i?"active":""},"Documentary")),l.default.createElement(u.Nav.Item,null,l.default.createElement(u.Nav.Link,{eventKey:"Comedy",className:"Comedy"===i?"active":""},"Comedy")),l.default.createElement(u.Nav.Item,null,l.default.createElement(u.Nav.Link,{eventKey:"Horror",className:"Horror"===i?"active":""},"Horror")),l.default.createElement(u.Nav.Item,null,l.default.createElement(u.Nav.Link,{eventKey:"Crime",className:"Crime"===i?"active":""},"Crime")))};f.propTypes={genre:d.default.string,setGenre:d.default.func};var s={setGenre:c.setGenre},m=(0,i.connect)((function(e){return{genre:e.movieReducer.genre}}),s)(f);t.default=m},vtRj:function(e){e.exports=require("react-select")},"wBE/":function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.fetchMovies=function(e,t){return function(n){return n(m()),a("http://localhost:4000/movies?sortBy="+e+"&sortOrder=desc&search="+t+"&searchBy=title").then((function(e){return e.json()})).then((function(e){return n(v(e)),n(y("All")),e})).catch((function(e){return n(p(e))}))}},t.deleteMovie=function(e,t,n){return function(o){return a("http://localhost:4000/movies/"+e,{method:"DELETE"}).then((function(e){if(e.ok)return o(v(n,t)),o((0,r.showDeletePage)(!1)),e;throw new Error})).catch((function(e){return e}))}},t.addMovie=function(e){return function(t){return a("http://localhost:4000/movies",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return t((0,r.showAddPage)(!1)),e.json();throw new Error})).catch((function(e){return e}))}},t.updateMovie=function(e,t,n){return function(o){return a("http://localhost:4000/movies",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return o(v(n,t)),o((0,r.showEditPage)(!1)),e.json();throw new Error})).catch((function(e){return e}))}},t.fetchMoviesByGenre=function(e,t){return function(n){return n(m()),a("http://localhost:4000/movies?sortBy="+e+"&sortOrder=desc&searchBy=genres&filter="+t).then((function(e){return e.json()})).then((function(e){return n(y("All")),n(v(e)),e})).catch((function(e){return n(p(e))}))}},t.fetchMovieId=function(e){return function(t){return t(h()),a("http://localhost:4000/movies/"+e).then((function(e){return e.json()})).then((function(e){return t(g(e)),e})).catch((function(e){return t(E(e))}))}},t.setGenre=t.sort=t.fetchFilmIdFailure=t.fetchFilmIdSuccess=t.fetchFilmIdBegin=t.fetchMoviesFailure=t.fetchMoviesSuccess=t.fetchMoviesBegin=t.SORT_GENRE=t.SET_GENRE=t.SORT=t.FETCH_FILMID_FAILURE=t.FETCH_FILMID_SUCCESS=t.FETCH_FILMID_BEGIN=t.FETCH_MOVIES_FAILURE=t.FETCH_MOVIES_SUCCESS=t.FETCH_MOVIES_BEGIN=void 0;var r=n("OfsH"),a=n("4vsW").default,o="FETCH_MOVIES_BEGIN";t.FETCH_MOVIES_BEGIN=o;var l="FETCH_MOVIES_SUCCESS";t.FETCH_MOVIES_SUCCESS=l;var u="FETCH_MOVIES_FAILURE";t.FETCH_MOVIES_FAILURE=u;var i="FETCH_FILMID_BEGIN";t.FETCH_FILMID_BEGIN=i;var d="FETCH_FILMID_SUCCESS";t.FETCH_FILMID_SUCCESS=d;var c="FETCH_FILMID_FAILURE";t.FETCH_FILMID_FAILURE=c;var f="SORT";t.SORT=f;var s="SET_GENRE";t.SET_GENRE=s,t.SORT_GENRE="SORT_GENRE";var m=function(){return{type:o}};t.fetchMoviesBegin=m;var v=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e;return{type:l,payload:{movies:e,moviesByCriteria:t}}};t.fetchMoviesSuccess=v;var p=function(e){return{type:u,payload:{error:e}}};t.fetchMoviesFailure=p;var h=function(){return{type:i}};t.fetchFilmIdBegin=h;var g=function(e){return{type:d,payload:{data:e}}};t.fetchFilmIdSuccess=g;var E=function(e){return{type:c,payload:{error:e}}};t.fetchFilmIdFailure=E,t.sort=function(e){return{type:f,payload:{value:e}}};var y=function(e){return{type:s,payload:{genre:e}}};t.setGenre=y}});