(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{6071:function(e,n,a){"use strict";var r=a(3038),t=a(862);n.default=void 0;var l=t(a(7294)),o=a(1689),s=a(2441),c=a(5749),i={};function u(e,n,a,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,a,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;i[n+"%"+a+(t?"%"+t:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,a=(0,s.useRouter)(),t=a&&a.asPath||"/",f=l.default.useMemo((function(){var n=(0,o.resolveHref)(t,e.href,!0),a=r(n,2),l=a[0],s=a[1];return{href:l,as:e.as?(0,o.resolveHref)(t,e.as):s||l}}),[t,e.href,e.as]),d=f.href,v=f.as,p=e.children,h=e.replace,b=e.shallow,m=e.scroll,y=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var g=l.Children.only(p),x=g&&"object"===typeof g&&g.ref,N=(0,c.useIntersection)({rootMargin:"200px"}),j=r(N,2),k=j[0],w=j[1],E=l.default.useCallback((function(e){k(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,k]);(0,l.useEffect)((function(){var e=w&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof y?y:a&&a.locale,t=i[d+"%"+v+(r?"%"+r:"")];e&&!t&&u(a,d,v,{locale:r})}),[v,d,w,y,n,a]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,a,r,t,l,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(a))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),n[t?"replace":"push"](a,r,{shallow:l,locale:c,scroll:s}))}(e,a,d,v,h,b,m,y)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),u(a,d,v,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var L="undefined"!==typeof y?y:a&&a.locale,M=a&&a.isLocaleDomain&&(0,o.getDomainLocale)(v,L,a&&a.locales,a&&a.domainLocales);_.href=M||(0,o.addBasePath)((0,o.addLocale)(v,L,a&&a.defaultLocale))}return l.default.cloneElement(g,_)};n.default=f},5749:function(e,n,a){"use strict";var r=a(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,a=e.disabled||!o,c=(0,t.useRef)(),i=(0,t.useState)(!1),u=r(i,2),f=u[0],d=u[1],v=(0,t.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),a||f||e&&e.tagName&&(c.current=function(e,n,a){var r=function(e){var n=e.rootMargin||"",a=s.get(n);if(a)return a;var r=new Map,t=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;n&&a&&n(a)}))}),e);return s.set(n,a={id:n,observer:t,elements:r}),a}(a),t=r.id,l=r.observer,o=r.elements;return o.set(e,n),l.observe(e),function(){o.delete(e),l.unobserve(e),0===o.size&&(l.disconnect(),s.delete(t))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[a,n,f]);return(0,t.useEffect)((function(){if(!o&&!f){var e=(0,l.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[f]),[v,f]};var t=a(7294),l=a(8391),o="undefined"!==typeof IntersectionObserver;var s=new Map},5972:function(e,n,a){"use strict";a.r(n);var r=a(5893),t=a(1664);n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("nav",{className:"navbar navbar-expand-lg bg-primary navbar-dark",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("a",{className:"navbar-brand",href:"#",children:"Tile World"}),(0,r.jsx)("button",{className:"navbar-toggler",type:"button",children:(0,r.jsx)("span",{className:"navbar-toggler-icon"})}),(0,r.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:(0,r.jsxs)("div",{className:"navbar-nav",children:[(0,r.jsx)(t.default,{href:"/",children:(0,r.jsx)("a",{className:"nav-link active",children:"Home"})}),(0,r.jsx)(t.default,{href:"./walltiles",children:(0,r.jsx)("a",{className:"nav-link",children:"Wall Tiles"})}),(0,r.jsx)(t.default,{href:"./subwaytiles",children:(0,r.jsx)("a",{className:"nav-link",children:"Subway Tiles"})}),(0,r.jsx)(t.default,{href:"./pooltiles",children:(0,r.jsx)("a",{className:"nav-link",children:"Pool Tiles"})})]})})]})})})}},4775:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/navbar",function(){return a(5972)}])},1664:function(e,n,a){e.exports=a(6071)}},function(e){e.O(0,[774,888,179],(function(){return n=4775,e(e.s=n);var n}));var n=e.O();_N_E=n}]);