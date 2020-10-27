(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a906676c"],{"209c":function(t,s,a){"use strict";var i=a("51af"),c=a.n(i);c.a},"24c8":function(t,s,a){},"2e5a":function(t,s,a){"use strict";var i=a("24c8"),c=a.n(i);c.a},"51af":function(t,s,a){},b789:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",[a("SectionBanner",{attrs:{title:"Shopping Cart"}}),a("SectionProductCart")],1)},c=[],e=a("bae0"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",{staticClass:"product-cart"},[a("div",{staticClass:"container"},[a("div",{staticClass:"wrapper"},[a("h2",{staticClass:"section-h-black"},[t._v("Product Cart")]),a("div",{staticClass:"row"},[a("ArticleItems"),a("AsideSummary")],1)])])])},r=[],l=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("article",[a("table",{staticClass:"products-table"},[t._m(0),a("tbody",t._l(t.cart.order,(function(s){return a("tr",{key:s.id},[a("td",[a("img",{staticClass:"item-img",attrs:{src:s.image,alt:"Position image"}}),a("p",{staticClass:"title"},[t._v(t._s(s.title))]),a("button",{staticClass:"btn-delete",on:{click:function(a){return t.deletePosition(s.id)}}},[a("i",{staticClass:"fas fa-times"})])]),a("td",[a("p",{staticClass:"price"},[t._v("$ "+t._s(s.price))])]),a("td",{staticClass:"input-td"},[a("button",{staticClass:"btn-increment",on:{click:function(a){return t.quantityIncrement(s.id)}}},[a("i",{staticClass:"fas fa-plus"})]),a("div",{staticClass:"quantity-box"},[a("p",{staticClass:"quantity"},[t._v(t._s(s.quantity))])]),a("button",{staticClass:"btn-decrement",attrs:{disabled:s.quantity<=1},on:{click:function(a){return t.quantityDecrement(s.id)}}},[a("i",{staticClass:"fas fa-minus"})])]),a("td",[a("p",{staticClass:"subtotal"},[t._v("$ "+t._s(s.price*s.quantity))])])])})),0)])])},o=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("td",{staticClass:"section-h-black"},[t._v("Item")]),a("td",{staticClass:"section-h-black"},[t._v("Price")]),a("td",{staticClass:"section-h-black"},[t._v("Qty")]),a("td",{staticClass:"section-h-black"},[t._v("Subtotal")])])])}],u=a("2f62"),d={computed:Object(u["b"])(["cart"]),methods:{deletePosition:function(t){this.$store.dispatch("removeFromCart",t)},quantityIncrement:function(t){var s={id:t,action:"increment"};this.$store.dispatch("updateQuantity",s)},quantityDecrement:function(t){var s={id:t,action:"decrement"};this.$store.dispatch("updateQuantity",s)}}},p=d,f=(a("2e5a"),a("2877")),m=Object(f["a"])(p,l,o,!1,null,"39bd5fe7",null),C=m.exports,v=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("aside",{staticClass:"side-bar"},[a("div",{staticClass:"summary"},[a("div",{staticClass:"summary-header"},[a("h3",{staticClass:"summary-title"},[t._v("Summary")]),a("p",{staticClass:"info"},[a("span",{staticClass:"info-description"},[t._v("Subtotal")]),a("span",{staticClass:"info-price"},[t._v(": $"+t._s(t.cart.totalPrice))])]),a("p",{staticClass:"info"},[a("span",{staticClass:"info-description"},[t._v("Shipping cost")]),a("span",{staticClass:"info-price"},[t._v(": $"+t._s(t.cart.deliveryPrice))])]),a("p",{staticClass:"info"},[a("span",{staticClass:"info-description"},[t._v("Tax")]),a("span",{staticClass:"info-price"},[t._v(": $"+t._s(t.cart.tax))])])]),a("div",{staticClass:"summary-footer"},[a("p",{staticClass:"order-total"},[a("span",{staticClass:"total-title"},[t._v("order total")]),a("span",{staticClass:"total-price"},[t._v(": $ "+t._s(t.cart.totalPrice+t.cart.tax))])]),a("button",{staticClass:"btn btn-checkout"},[t._v("go to checkout")])])])])},_=[],b={computed:Object(u["b"])(["cart"])},h=b,y=(a("209c"),Object(f["a"])(h,v,_,!1,null,"50dff1f9",null)),k=y.exports,$={components:{ArticleItems:C,AsideSummary:k}},S=$,P=(a("d228"),Object(f["a"])(S,n,r,!1,null,"3b420a50",null)),q=P.exports,w={components:{SectionBanner:e["a"],SectionProductCart:q}},x=w,g=Object(f["a"])(x,i,c,!1,null,null,null);s["default"]=g.exports},d228:function(t,s,a){"use strict";var i=a("e5cc"),c=a.n(i);c.a},e5cc:function(t,s,a){}}]);
//# sourceMappingURL=chunk-a906676c.28a9d39c.js.map