(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(98)),i={id:"data-network",title:"\u7f51\u7edc\u8bf7\u6c42"},p={unversionedId:"data-network",id:"data-network",isDocsHomePage:!1,title:"\u7f51\u7edc\u8bf7\u6c42",description:"\u4f7f\u7528 http \u5305\u8bf7\u6c42\u7f51\u7edc\u6570\u636e",source:"@site/../docs/DataNetwork.md",slug:"/data-network",permalink:"/zh/docs/data-network",editUrl:"https://github.com/mpflutter/mpflutter/edit/master/website/../docs/DataNetwork.md",version:"current",sidebar:"docs",previous:{title:"\u6838\u5fc3 Widget \u76ee\u5f55",permalink:"/zh/docs/ui-widgets-index"}},c=[{value:"\u4f7f\u7528 http \u5305\u8bf7\u6c42\u7f51\u7edc\u6570\u636e",id:"\u4f7f\u7528-http-\u5305\u8bf7\u6c42\u7f51\u7edc\u6570\u636e",children:[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",children:[]},{value:"\u53d1\u8d77\u8bf7\u6c42",id:"\u53d1\u8d77\u8bf7\u6c42",children:[]}]},{value:"\u4f7f\u7528 dio \u5305\u8bf7\u6c42\u7f51\u7edc",id:"\u4f7f\u7528-dio-\u5305\u8bf7\u6c42\u7f51\u7edc",children:[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56-1",children:[]},{value:"\u53d1\u8d77\u8bf7\u6c42",id:"\u53d1\u8d77\u8bf7\u6c42-1",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u4f7f\u7528-http-\u5305\u8bf7\u6c42\u7f51\u7edc\u6570\u636e"},"\u4f7f\u7528 http \u5305\u8bf7\u6c42\u7f51\u7edc\u6570\u636e"),Object(o.b)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),Object(o.b)("p",null,"MPFlutter \u5b98\u65b9\u7ef4\u62a4\u7684 http \u5305\uff0c\u4f1a\u4fdd\u8bc1\u5176\u5728\u6240\u6709\u8f93\u51fa\u5e73\u53f0\u4e0a\u5b8c\u5168\u517c\u5bb9\uff0c\u8bf7\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"pubspec.yaml")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"dependencies:\n  # ...\n  http:\n    git:\n      url: https://github.com/mpflutter-plugins/http\n")),Object(o.b)("p",null,"\u7136\u540e\u5728\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"flutter packages get"),"\uff0c\u56fd\u5185\u53ef\u4ee5\u628a ",Object(o.b)("inlineCode",{parentName:"p"},"github.com")," \u66ff\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"gitee.com"),"\u3002"),Object(o.b)("h3",{id:"\u53d1\u8d77\u8bf7\u6c42"},"\u53d1\u8d77\u8bf7\u6c42"),Object(o.b)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\uff0c\u53d1\u8d77 HTTP \u8bf7\u6c42\uff0c\u5e76\u89e3\u6790 JSON \u6570\u636e\u3002"),Object(o.b)("p",null,"\u6ce8\u610f:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u5e94\u7528\u6784\u5efa\u4e3a Web \u540e\uff0c\u8bf7\u6c42\u6709\u8de8\u57df\u9650\u5236\uff0c\u9700\u8981\u4fdd\u8bc1 CORS header \u6709\u6548\u6027\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5e94\u7528\u6784\u5efa\u4e3a\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u540e\uff0c\u8bf7\u6c42\u6709\u4e1a\u52a1\u57df\u540d\u9650\u5236\u3002")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"import 'dart:convert';\nimport 'package:http/http.dart' as http;\n\nclass XXX {\n  void doLoad() async {\n    setState(() {\n      loading = true;\n    });\n    try {\n      final response =\n          await http.get(Uri.parse('https://api.github.com/users/mpflutter'));\n      final result = json.decode(response.body);\n      setState(() {\n        mpflutterLogo = result['avatar_url'];\n      });\n    } catch (e) {} finally {\n      setState(() {\n        loading = false;\n      });\n    }\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://gitpod.io/#github.com/mpflutter/mpflutter_sample/tree/sample_http_lib"},Object(o.b)("img",{parentName:"a",src:"https://gitpod.io/button/open-in-gitpod.svg",alt:"Open in Gitpod"}))),Object(o.b)("p",null,"GitPod \u662f\u5b8c\u6574\u7684\u7f51\u7edc\u8bf7\u6c42\u4f8b\u5b50\u3002"),Object(o.b)("h2",{id:"\u4f7f\u7528-dio-\u5305\u8bf7\u6c42\u7f51\u7edc"},"\u4f7f\u7528 dio \u5305\u8bf7\u6c42\u7f51\u7edc"),Object(o.b)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56-1"},"\u6dfb\u52a0\u4f9d\u8d56"),Object(o.b)("p",null,"MPFlutter \u5b98\u65b9\u7ef4\u62a4\u7684 dio \u5305\uff0c\u4f1a\u4fdd\u8bc1\u5176\u5728\u6240\u6709\u8f93\u51fa\u5e73\u53f0\u4e0a\u5b8c\u5168\u517c\u5bb9\uff0c\u8bf7\u5728 ",Object(o.b)("inlineCode",{parentName:"p"},"pubspec.yaml")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u3002"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-yml"},"dependencies:\n  # ...\n  dio:\n    git:\n      url: https://github.com/mpflutter-plugins/dio\n      path: dio\n")),Object(o.b)("p",null,"\u7136\u540e\u5728\u5de5\u7a0b\u6839\u76ee\u5f55\u4e0b\uff0c\u901a\u8fc7\u547d\u4ee4\u884c\u6267\u884c ",Object(o.b)("inlineCode",{parentName:"p"},"flutter packages get"),"\uff0c\u56fd\u5185\u53ef\u4ee5\u628a ",Object(o.b)("inlineCode",{parentName:"p"},"github.com")," \u66ff\u6362\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"gitee.com"),"\u3002"),Object(o.b)("h3",{id:"\u53d1\u8d77\u8bf7\u6c42-1"},"\u53d1\u8d77\u8bf7\u6c42"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-dart"},"import 'dart:convert';\nimport 'package:dio/dio.dart' as dio;\n\nclass XXX {\n  void doLoad() async {\n    setState(() {\n      loading = true;\n    });\n    try {\n      final response = await dio.Dio().get(\n        'https://api.github.com/users/mpflutter',\n        options: dio.Options(\n          responseType: dio.ResponseType.json,\n        ),\n      );\n      final result = response as Map;\n      setState(() {\n        mpflutterLogo = result['avatar_url'];\n      });\n    } catch (e) {} finally {\n      setState(() {\n        loading = false;\n      });\n    }\n  }\n}\n")))}u.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,p(p({ref:t},l),{},{components:n})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);