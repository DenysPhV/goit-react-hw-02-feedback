(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),a=n.n(r),s=(n(13),n(4)),o=n(5),l=n(6),j=n(8),d=n(7),b=n(0);function u(e){var t=e.title,n=e.children;return Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:t}),n]})}function h(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,r=e.positiveFeedback;return Object(b.jsx)("div",{children:Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Good:"}),t]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Neutral:"}),n]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Bad:"}),c]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Total:"}),i]}),Object(b.jsxs)("li",{children:[Object(b.jsx)("span",{children:"Positive:"}),r,"%"]})]})})}function O(e){var t=e.options,n=e.onLeaveFeedback;return Object(b.jsx)("div",{children:t.map((function(e){return Object(b.jsx)("button",{onClick:n(e),type:"button",children:e},e)}))})}function p(e){var t=e.message;return Object(b.jsx)("p",{children:t})}var x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={good:e.props.initialValue,neutral:e.props.initialValue,bad:e.props.initialValue},e.increment=function(t){return function(){e.setState((function(e){return Object(s.a)({},t,e[t]+1)}))}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,i=Object.keys(this.state),r=t+n+c,a=Math.round(t/r*100);return Object(b.jsxs)("div",{children:[Object(b.jsx)(u,{title:"Please leave feedback",children:Object(b.jsx)(O,{options:i,onLeaveFeedback:this.increment})}),r>0?Object(b.jsx)(u,{title:"Statistics",children:Object(b.jsx)(h,{good:t,neutral:n,bad:c,total:r,positiveFeedback:a})}):Object(b.jsx)(p,{message:"No feedback given"})]})}}]),n}(i.a.Component);x.defaultProps={initialValue:0};var v=x;a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0ac56723.chunk.js.map