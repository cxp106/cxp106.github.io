(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{177:function(t,s,e){"use strict";e.r(s);var n=e(0),a=Object(n.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("事件委托是将事件监听器添加到父元素，而不是每个子元素单独设置事件监听器。当触发子元素时，事件会冒泡到父元素，监听器就会触发。这种技术的好处是：")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),e("p",[t._v("闭包是函数和声明该函数的词法环境的组合。词法作用域中使用的域，是变量在代码中声明的位置所决定的。闭包是即使被外部函数返回，依然可以访问到外部（封闭）函数作用域的函数。")]),t._v(" "),t._m(20),t._v(" "),e("ul",[e("li",[t._v("利用闭包实现数据私有化或模拟私有方法。这个方式也称为"),e("a",{attrs:{href:"https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("模块模式（module pattern）"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.l4b6l1i3x",target:"_blank",rel:"noopener noreferrer"}},[t._v("部分参数函数（partial applications）柯里化（currying）"),e("OutboundLink")],1),t._v(".")])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"javascript-问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-问题","aria-hidden":"true"}},[this._v("#")]),this._v(" Javascript 问题")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是事件委托"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是事件委托","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是事件委托")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("内存占用减少，因为只需要一个父元素的事件处理程序，而不必为每个后代都添加事件处理程序。")]),this._v(" "),s("li",[this._v("无需从已删除的元素中解绑处理程序，也无需将处理程序绑定到新元素上。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"javascript中的this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript中的this","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("JavaScript")]),this._v("中的"),s("code",[this._v("this")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("JS 中的"),s("code",[this._v("this")]),this._v("是一个相对复杂的概念，不是简单几句能解释清楚的。粗略地讲，函数的调用方式决定了"),s("code",[this._v("this")]),this._v("的值。一般来说"),s("code",[this._v("this")]),this._v("取值符合以下规则：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("在调用函数时使用"),e("code",[t._v("new")]),t._v("关键字，函数内的"),e("code",[t._v("this")]),t._v("是一个全新的对象。")]),t._v(" "),e("li",[t._v("如果"),e("code",[t._v("apply")]),t._v("、"),e("code",[t._v("call")]),t._v("或"),e("code",[t._v("bind")]),t._v("方法用于调用、创建一个函数，函数内的 this 就是作为参数传入这些方法的对象。")]),t._v(" "),e("li",[t._v("当函数作为对象里的方法被调用时，函数内的"),e("code",[t._v("this")]),t._v("是调用该函数的对象。比如当"),e("code",[t._v("obj.method()")]),t._v("被调用时，函数内的 this 将绑定到"),e("code",[t._v("obj")]),t._v("对象。")]),t._v(" "),e("li",[t._v("如果调用函数不符合上述规则，那么"),e("code",[t._v("this")]),t._v("的值指向全局对象（global object）。浏览器环境下"),e("code",[t._v("this")]),t._v("的值指向"),e("code",[t._v("window")]),t._v("对象，但是在严格模式下("),e("code",[t._v("'use strict'")]),t._v(")，"),e("code",[t._v("this")]),t._v("的值为"),e("code",[t._v("undefined")]),t._v("。")]),t._v(" "),e("li",[t._v("如果符合上述多个规则，则较高的规则（1 号最高，4 号最低）将决定"),e("code",[t._v("this")]),t._v("的值。")]),t._v(" "),e("li",[t._v("如果该函数是 ES2015 中的箭头函数，将忽略上面的所有规则，"),e("code",[t._v("this")]),t._v("被设置为它被创建时的上下文。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"原型继承（prototypal-inheritance）的工作原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型继承（prototypal-inheritance）的工作原理","aria-hidden":"true"}},[this._v("#")]),this._v(" 原型继承（prototypal inheritance）的工作原理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这是一个非常常见的 JavaScript 问题。所有 JS 对象都有一个"),s("code",[this._v("prototype")]),this._v("属性，指向它的原型对象。当试图访问一个对象的属性时，如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。这种行为是在模拟经典的继承，但是与其说是继承，不如说是委托（delegation）。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请解释下面代码为什么不能用作-iife：function-foo-，需要作出哪些修改才能使其成为-iife"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请解释下面代码为什么不能用作-iife：function-foo-，需要作出哪些修改才能使其成为-iife","aria-hidden":"true"}},[this._v("#")]),this._v(" 请解释下面代码为什么不能用作 IIFE："),s("code",[this._v("function foo(){ }();")]),this._v("，需要作出哪些修改才能使其成为 IIFE")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("IIFE（Immediately Invoked Function Expressions）代表立即执行函数。 JavaScript 解析器将 "),e("code",[t._v("function foo(){ }();")]),t._v("解析成"),e("code",[t._v("function foo(){ }")]),t._v("和"),e("code",[t._v("();")]),t._v("。其中，前者是函数声明；后者（一对括号）是试图调用一个函数，却没有指定名称，因此它会抛出"),e("code",[t._v("Uncaught SyntaxError: Unexpected token )")]),t._v("的错误。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("修改方法是：再添加一对括号，形式上有两种："),s("code",[this._v("(function foo(){ })()")]),this._v("和"),s("code",[this._v("(function foo(){ }())")]),this._v("。以上函数不会暴露到全局作用域，如果不需要在函数内部引用自身，可以省略函数的名称。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"null、undefined和未声明变量之间有什么区别？如何检查判断这些状态值？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#null、undefined和未声明变量之间有什么区别？如何检查判断这些状态值？","aria-hidden":"true"}},[this._v("#")]),this._v(" "),s("code",[this._v("null")]),this._v("、"),s("code",[this._v("undefined")]),this._v("和未声明变量之间有什么区别？如何检查判断这些状态值？")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("当你没有提前使用"),e("code",[t._v("var")]),t._v("、"),e("code",[t._v("let")]),t._v("或"),e("code",[t._v("const")]),t._v("声明变量，就为一个变量赋值时，该变量是未声明变量（undeclared variables）。未声明变量会脱离当前作用域，成为全局作用域下定义的变量。在严格模式下，给未声明的变量赋值，会抛出"),e("code",[t._v("ReferenceError")]),t._v("错误。和使用全局变量一样，使用未声明变量也是非常不好的做法，应当尽可能避免。要检查判断它们，需要将用到它们的代码放在"),e("code",[t._v("try")]),t._v("/"),e("code",[t._v("catch")]),t._v("语句中。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在严格模式下，抛出 ReferenceError 错误")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("当一个变量已经声明，但没有赋值时，该变量的值是"),e("code",[t._v("undefined")]),t._v("。如果一个函数的执行结果被赋值给一个变量，但是这个函数却没有返回任何值，那么该变量的值是"),e("code",[t._v("undefined")]),t._v("。要检查它，需要使用严格相等（"),e("code",[t._v("===")]),t._v("）；或者使用"),e("code",[t._v("typeof")]),t._v("，它会返回"),e("code",[t._v("'undefined'")]),t._v("字符串。请注意，不能使用非严格相等（"),e("code",[t._v("==")]),t._v("）来检查，因为如果变量值为"),e("code",[t._v("null")]),t._v("，使用非严格相等也会返回"),e("code",[t._v("true")]),t._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undefined'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true. 错误，不要使用非严格相等！")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" baz "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("bar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("baz"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("null")]),t._v("只能被显式赋值给变量。它表示"),e("code",[t._v("空值")]),t._v("，与被显式赋值 "),e("code",[t._v("undefined")]),t._v(" 的意义不同。要检查判断"),e("code",[t._v("null")]),t._v("值，需要使用严格相等运算符。请注意，和前面一样，不能使用非严格相等（"),e("code",[t._v("==")]),t._v("）来检查，因为如果变量值为"),e("code",[t._v("undefined")]),t._v("，使用非严格相等也会返回"),e("code",[t._v("true")]),t._v("。")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n\nconsole"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true. 错误，不要使用非严格相等！")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("作为一种个人习惯，我从不使用未声明变量。如果定义了暂时没有用到的变量，我会在声明后明确地给它们赋值为"),s("code",[this._v("null")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是闭包（closure），为什么使用闭包？"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是闭包（closure），为什么使用闭包？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是闭包（closure），为什么使用闭包？")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("为什么使用闭包？")])])}],!1,null,null,null);s.default=a.exports}}]);