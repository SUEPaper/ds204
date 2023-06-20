"use strict";(self.webpackChunkcs_201=self.webpackChunkcs_201||[]).push([[557],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>g});var t=a(7294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function p(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=t.createContext({}),s=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},m=function(e){var n=s(e.components);return t.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(a),d=l,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||r;return a?t.createElement(g,o(o({ref:n},m),{},{components:a})):t.createElement(g,o({ref:n},m))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,o=new Array(r);o[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p[c]="string"==typeof e?e:l,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9622:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},o="\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",p={unversionedId:"python/oop/Object-Oriented_Programming",id:"python/oop/Object-Oriented_Programming",title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",description:"\u5728\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\uff08OOP\uff09, \u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u7c7b\u4f5c\u4e3a\u84dd\u56fe\uff0c\u7528\u4e8e\u5728 Python \u4e2d\u521b\u5efa\u5177\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff08\u4e0e\u5bf9\u8c61\u76f8\u5173\u7684\u529f\u80fd\uff09\u7684\u5bf9\u8c61\u3002",source:"@site/docs/python/oop/Object-Oriented_Programming.md",sourceDirName:"python/oop",slug:"/python/oop/Object-Oriented_Programming",permalink:"/ds201/python/oop/Object-Oriented_Programming",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"pythonSidebar",previous:{title:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b",permalink:"/ds201/category/\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"},next:{title:"\u6570\u636e\u62bd\u8c61",permalink:"/ds201/python/oop/data_abstraction"}},i={},s=[{value:"\u7c7b\u7684\u5934\u90e8",id:"\u7c7b\u7684\u5934\u90e8",level:2},{value:"<strong>init</strong>\u548c\u5b9e\u4f8b\u5c5e\u6027",id:"init\u548c\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b",id:"\u5982\u4f55\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b",level:2},{value:"\u9ed8\u8ba4\u53c2\u6570",id:"\u9ed8\u8ba4\u53c2\u6570",level:2},{value:"\u5982\u4f55\u83b7\u53d6\u5b9e\u4f8b\u7684\u5c5e\u6027",id:"\u5982\u4f55\u83b7\u53d6\u5b9e\u4f8b\u7684\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u66f4\u65b0\u5b9e\u4f8b\u7684\u5c5e\u6027",id:"\u5982\u4f55\u66f4\u65b0\u5b9e\u4f8b\u7684\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u5220\u9664\u5b9e\u4f8b\u5c5e\u6027",id:"\u5982\u4f55\u5220\u9664\u5b9e\u4f8b\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u5b9e\u4f8b",id:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u5b9e\u4f8b",level:2},{value:"\u516c\u5f00 vs \u975e\u516c\u5f00 \u7684\u5c5e\u6027",id:"\u516c\u5f00-vs-\u975e\u516c\u5f00-\u7684\u5c5e\u6027",level:2},{value:"Python \u4e2d\u7c7b\u7684\u5c5e\u6027",id:"python-\u4e2d\u7c7b\u7684\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u7c7b\u5c5e\u6027",id:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u7c7b\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u66f4\u65b0\u4e00\u4e2a\u7c7b\u5c5e\u6027",id:"\u5982\u4f55\u66f4\u65b0\u4e00\u4e2a\u7c7b\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u7c7b\u5c5e\u6027",id:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u7c7b\u5c5e\u6027",level:2},{value:"\u5982\u4f55\u5b9a\u4e49\u65b9\u6cd5",id:"\u5982\u4f55\u5b9a\u4e49\u65b9\u6cd5",level:2}],m={toc:s},c="wrapper";function u(e){let{components:n,...a}=e;return(0,l.kt)(c,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"},"\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b"),(0,l.kt)("p",null,"\u5728\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\u4e2d\uff08OOP\uff09, \u6211\u4eec\u53ef\u4ee5\u5b9a\u4e49\u7c7b\u4f5c\u4e3a\u84dd\u56fe\uff0c\u7528\u4e8e\u5728 Python \u4e2d\u521b\u5efa\u5177\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff08\u4e0e\u5bf9\u8c61\u76f8\u5173\u7684\u529f\u80fd\uff09\u7684\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\u7c7b\u7684\u4e00\u822c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class <className>:\n\n    <class_attribute_name> = <value>\n\n    def __init__(self,<param1>, <param2>, ...):\n        self.<attr1> = <param1>\n        self.<attr2> = <param2>\n        .\n        .\n        .\n        # As many attributes as needed\n    \n   def <method_name>(self, <param1>, ...):\n       <code>\n       \n   # As many methods as needed\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," self\u662f\u7c7b\u7684\u5b9e\u4f8b(\u7528\u7c7b\u521b\u5efa\u7684\u5bf9\u8c61)\u7684\u5f15\u7528\u3002")),(0,l.kt)("p",null,"\u5982\u4f60\u6240\u89c1\uff0c\u7c7b\u53ef\u4ee5\u6709\u5f88\u591a\u4e0d\u540c\u7684\u5143\u7d20\uff0c\u8ba9\u6211\u4eec\u6765\u5206\u6790\u4e00\u4e0b\u5b83\u4eec\u7684\u7ec6\u8282\uff1a"),(0,l.kt)("h2",{id:"\u7c7b\u7684\u5934\u90e8"},"\u7c7b\u7684\u5934\u90e8"),(0,l.kt)("p",null,"\u7c7b\u5b9a\u4e49\u7684\u7b2c\u4e00\u884c\u662fclass\u5173\u952e\u5b57\u548c\u7c7b\u540d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Dog:\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class House:\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Ball:\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," \u5982\u679c\u4e00\u4e2a\u7c7b\u7ee7\u627f\u4e86\u53e6\u5916\u4e00\u4e2a\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6211\u4eec\u4f1a\u5728\u62ec\u53f7\u4e2d\u770b\u5230\u8be5\u7c7b\u7684\u540d\u79f0\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Poodle(Dog):\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Truck(Vehicle):\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Mom(FamilyMember):\n")),(0,l.kt)("p",null,"Python \u4e2d, \u7c7b\u540d\u7528\u5927\u9a7c\u5cf0\uff08\u4e5f\u79f0\u4e3a Pascal Case\uff09\uff0c\u540d\u79f0\u4e2d\u7684\u6bcf\u4e2a\u4e00\u4e2a\u5355\u8bcd\u90fd\u662f\u4ee5\u5927\u5199\u5b57\u6bcd\u5f00\u5934\u3002\u4f8b\u5982\uff1aFamilyMember"),(0,l.kt)("h2",{id:"init\u548c\u5b9e\u4f8b\u5c5e\u6027"},(0,l.kt)("strong",{parentName:"h2"},"init"),"\u548c\u5b9e\u4f8b\u5c5e\u6027"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u7c7b\u5728 Python \u4e2d\u521b\u5efa\u5bf9\u8c61\uff0c\u5c31\u50cf\u6211\u4eec\u6839\u636e\u56fe\u7eb8\u5efa\u9020\u771f\u6b63\u7684\u623f\u5c4b\u4e00\u6837\u3002"),(0,l.kt)("p",null,"\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u6765\u81ea\u4e8e\u6211\u4eec\u5728\u7c7b\u4e2d\u5b9a\u4e49\uff0c\u800c\u8fd9\u4e9b\u5c5e\u6027\u901a\u5e38\u662f\u5728",(0,l.kt)("strong",{parentName:"p"},"init"),"\u65b9\u6cd5\u4e2d\u88ab\u521d\u59cb\u5316\uff0c\u800c",(0,l.kt)("strong",{parentName:"p"},"init"),"\u65b9\u6cd5\u4f1a\u5728\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b\u65f6\u88ab\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u8fd9\u662f\u4e00\u822c\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(self, <parameter1>, <parameter2>, ...):\n        self.<attribute1> = <parameter1>  # Instance attribute\n        self.<attribute2> = <parameter2>  # Instance attribute\n        .\n        .\n        .\n        # As many instance attributes as needed\n")),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u9700\u8981\u6765\u7ed9\u7c7b\u6307\u5b9a\u5c3d\u53ef\u80fd\u591a\u7684\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"Dog\u7c7b\u7684\u4e00\u4e2a",(0,l.kt)("strong",{parentName:"p"},"init"),"\u65b9\u6cd5\u4f8b\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," \u6ce8\u610f\u540d\u79f0",(0,l.kt)("strong",{parentName:"p"},"init"),"\u4e2d\u7684\u524d\u540e\u7684\u53cc\u4e0b\u5212\u7ebf")),(0,l.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b"},"\u5982\u4f55\u521b\u5efa\u7c7b\u7684\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u8981\u521b\u5efaDog\u7c7b\u7684\u5b9e\u4f8b\uff0c\u6211\u4eec\u9700\u8981\u6307\u5b9a name \u548c age \u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'my_dog = Dog("Nora", 10)\n')),(0,l.kt)("p",null,"\u5f88\u597d\u3002\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u51c6\u5907\u597d\u4e86\u4e00\u4e2a\u53ef\u4ee5\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u7684 Dog \u5b9e\u4f8b\u4e86\u3002"),(0,l.kt)("p",null,"\u6709\u4e9b\u7c7b\uff0c\u53ef\u4ee5\u4e0d\u9700\u8981\u4efb\u4f55\u53c2\u6570\u6765\u521b\u5efa\u5b9e\u4f8b\u3002 \u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u53ea\u9700\u8981\u4e00\u4e2a\u7a7a\u62ec\u53f7\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Circle:\n\n    def __init__(self):\n        self.radius = 1\n")),(0,l.kt)("p",null,"\u521b\u5efa\u5b9e\u4f8b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> my_circle = Circle()\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"self\u50cf\u662f\u4e00\u4e2a\u201c\u5e55\u540e\u201d\u7684\u53c2\u6570\uff0c\u5373\u4f7f\u6211\u4eec\u5728\u65b9\u6cd5\u7684\u5b9a\u4e49\u4e2d\u770b\u5230\u5b83\uff0c\u4f46\u4f60\u4f20\u53c2\u6570\u65f6\u53ef\u4ee5\u4e0d\u7528\u8003\u8651\u5b83\u3002")),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u53c2\u6570"},"\u9ed8\u8ba4\u53c2\u6570"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u4e3a\u7c7b\u7684\u5c5e\u6027\u6307\u5b9a\u9ed8\u8ba4\u503c\uff0c\u4f46\u5982\u679c\u4f7f\u7528\u8005\u60f3\u81ea\u5df1\u8d4b\u503c\uff0c\u4e5f\u662f\u53ef\u4ee5\u7684\u3002"),(0,l.kt)("p",null,"\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u53c2\u6570\u5217\u8868\u4e2d\u5199\u4e0a\u5f62\u5982\uff1a< attribute >=< value >"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Circle:\n\n    def __init__(self, radius=1):\n        self.radius = radius\n")),(0,l.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u521b\u5efaCircle\u5b9e\u4f8b\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u5ffd\u7565 radius \u53c2\u6570\u4f7f\u7528\u5b83\u7684\u9ed8\u8ba4\u503c\uff0c\u4e5f\u53ef\u4ee5\u4f20\u5165\u4e00\u4e2a\u81ea\u5df1\u7684\u503c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Default value\n>>> my_circle1 = Circle()\n\n# Customized value\n>>> my_circle2 = Circle(5)\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6\u5b9e\u4f8b\u7684\u5c5e\u6027"},"\u5982\u4f55\u83b7\u53d6\u5b9e\u4f8b\u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u8bbf\u95ee\u5b9e\u4f8b\u5c5e\u6027\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<object_variable>.<attribute>\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Class definition\n>>> class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n# Create instance        \n>>> my_dog = Dog(\"Nora\", 10)\n\n# Get attributes\n>>> my_dog.name\n'Nora'\n\n>>> my_dog.age\n10\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u66f4\u65b0\u5b9e\u4f8b\u7684\u5c5e\u6027"},"\u5982\u4f55\u66f4\u65b0\u5b9e\u4f8b\u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u66f4\u65b0\u5b9e\u4f8b\u7684\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<object_variable>.<attribute> = <new_value>\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n        \n>>> my_dog = Dog(\"Nora\", 10)\n\n>>> my_dog.name\n'Nora'\n\n# Update the attribute\n>>> my_dog.name = \"Norita\"\n\n>>> my_dog.name\n'Norita'\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u5220\u9664\u5b9e\u4f8b\u5c5e\u6027"},"\u5982\u4f55\u5220\u9664\u5b9e\u4f8b\u5c5e\u6027"),(0,l.kt)("p",null,"\u8981\u5220\u9664\u5b9e\u4f8b\u5c5e\u6027\uff0c\u53ef\u4ee5\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"del <object_variable>.<attribute>\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n        \n>>> my_dog = Dog(\"Nora\", 10)\n\n>>> my_dog.name\n'Nora'\n\n# Delete this attribute\n>>> del my_dog.name\n\n>>> my_dog.name\nTraceback (most recent call last):\n  File \"<pyshell#77>\", line 1, in <module>\n    my_dog.name\nAttributeError: 'Dog' object has no attribute 'name'\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u5b9e\u4f8b"},"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u5b9e\u4f8b"),(0,l.kt)("p",null,"\u540c\u6837\u7684\uff0c\u5220\u9664\u5b9e\u4f8b\u6211\u4eec\u4e5f\u53ef\u4ee5\u7528del\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n        \n>>> my_dog = Dog(\"Nora\", 10)\n\n>>> my_dog.name\n'Nora'\n\n# Delete the instance\n>>> del my_dog\n\n>>> my_dog\nTraceback (most recent call last):\n  File \"<pyshell#79>\", line 1, in <module>\n    my_dog\nNameError: name 'my_dog' is not defined\n")),(0,l.kt)("h2",{id:"\u516c\u5f00-vs-\u975e\u516c\u5f00-\u7684\u5c5e\u6027"},"\u516c\u5f00 vs \u975e\u516c\u5f00 \u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u5728 Python \u4e2d\uff0c\u6211\u4eec\u6ca1\u6709\u7528\u8bbf\u95ee\u4fee\u9970\u7b26\u6765\u9650\u5236\u5bf9\u5b9e\u4f8b\u5c5e\u6027\u7684\u8bbf\u95ee\uff0c\u800c\u662f\u4f9d\u9760\u547d\u540d\u60ef\u4f8b\u6765\u505a\u5230\u8fd9\u4e00\u70b9\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u5728\u5c5e\u6027\u524d\u6dfb\u52a0\u4e00\u4e2a\u524d\u5bfc\u4e0b\u5212\u7ebf\uff0c\u5c31\u53ef\u4ee5\u544a\u8bc9\u5f00\u53d1\u8005\u8fd9\u662f\u4e00\u4e2a\u975e\u516c\u5f00\u7684\u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Dog:\n\n    def __init__(self, name, age):\n        self.name = name  # Public attribute\n        self._age = age   # Non-Public attribute\n")),(0,l.kt)("h2",{id:"python-\u4e2d\u7c7b\u7684\u5c5e\u6027"},"Python \u4e2d\u7c7b\u7684\u5c5e\u6027"),(0,l.kt)("p",null,"\u7c7b\u7684\u5c5e\u6027\u7531\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u3002\u6240\u6709\u5b9e\u4f8b\u90fd\u53ef\u4ee5\u8bbf\u95ee\u8fd9\u4e9b\u5c5e\u6027\uff0c\u5982\u679c\u8fd9\u4e9b\u5c5e\u6027\u88ab\u4fee\u6539\uff0c\u8fd9\u4e9b\u5b9e\u4f8b\u5c06\u90fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class Dog:\n\n    # Class attributes\n    kingdom = "Animalia"\n    species = "Canis lupus"\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u901a\u5e38\uff0c\u5b83\u4eec\u5199\u5728",(0,l.kt)("strong",{parentName:"p"},"init"),"\u65b9\u6cd5\u7684\u524d\u9762\u3002")),(0,l.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u7c7b\u5c5e\u6027"},"\u5982\u4f55\u83b7\u53d6\u4e00\u4e2a\u7c7b\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<class_name>.<attribute>\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    kingdom = \"Animalia\"\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n        \n>>> Dog.kingdom\n'Animalia'\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528\u540c\u6837\u7684\u8bed\u6cd5\u5728\u7c7b\u91cc\u9762\u83b7\u53d6\u5b83\u7684\u503c\u3002")),(0,l.kt)("h2",{id:"\u5982\u4f55\u66f4\u65b0\u4e00\u4e2a\u7c7b\u5c5e\u6027"},"\u5982\u4f55\u66f4\u65b0\u4e00\u4e2a\u7c7b\u5c5e\u6027"),(0,l.kt)("p",null,"\u8981\u66f4\u65b0\u4e00\u4e2a\u7c7b\u5c5e\u6027\uff0c\u6211\u4eec\u4f7f\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<class_name>.<attribute> = <value>\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    kingdom = \"Animalia\"\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n        \n>>> Dog.kingdom\n'Animalia'\n\n>>> Dog.kingdom = \"New Kingdom\"\n\n>>> Dog.kingdom\n'New Kingdom'\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u7c7b\u5c5e\u6027"},"\u5982\u4f55\u5220\u9664\u4e00\u4e2a\u7c7b\u5c5e\u6027"),(0,l.kt)("p",null,"\u6211\u4eec\u4f7f\u7528del\u4e00\u4e2a\u7c7b\u5c5e\u6027\u3002\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},">>> class Dog:\n\n    kingdom = \"Animalia\"\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n>>> Dog.kingdom\n'Animalia'\n        \n# Delete class attribute\n>>> del Dog.kingdom\n\n>>> Dog.kingdom\nTraceback (most recent call last):\n  File \"<pyshell#88>\", line 1, in <module>\n    Dog.kingdom\nAttributeError: type object 'Dog' has no attribute 'kingdom'\n")),(0,l.kt)("h2",{id:"\u5982\u4f55\u5b9a\u4e49\u65b9\u6cd5"},"\u5982\u4f55\u5b9a\u4e49\u65b9\u6cd5"),(0,l.kt)("p",null,"\u65b9\u6cd5\u7528\u4e8e\u8868\u793a\u7c7b\u5b9e\u4f8b\u7684\u529f\u80fd\u3002"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"}," \u5982\u679c\u6211\u4eec\u5728\u5b9e\u4f8b\u65b9\u6cd5\u7684\u5b9a\u4e49\u4e2d\u5199\u4e0aself.< attribute >\uff0c\u90a3\u4e48\u5b9e\u4f8b\u65b9\u6cd5\u5c31\u53ef\u4ee5\u8c03\u7528\u5b9e\u4f8b\u5c5e\u6027\u3002")),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u5b9a\u4e49\u65b9\u6cd5\u7684\u57fa\u672c\u8bed\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e00\u822c\u5b9a\u4e49\u5728",(0,l.kt)("strong",{parentName:"p"},"init"),"\u65b9\u6cd5\u540e\u9762\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class <ClassName>:\n\n    # Class attributes\n\n    # __init__\n\n    def <method_name>(self, <param1>, ...):\n        <code>\n")),(0,l.kt)("p",null,"\u8fd9\u4e9b\u5b9e\u4f8b\u65b9\u6cd5\u53ef\u80fd\u6709 0 \u4e2a\u30011 \u4e2a\u6216\u591a\u4e2a\u53c2\u6570\uff08\u5c31\u50cf\u51fd\u6570\uff01\uff09\uff0c\u4f46self\u5fc5\u987b\u662f\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\uff0c\u4e0b\u9762\u7684bark\u65b9\u6cd5\u6ca1\u6709\u53c2\u6570\uff08\u9664\u4e86self\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'class Dog:\n\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        print(f"woof-woof. I\'m {self.name}")\n')),(0,l.kt)("p",null,"\u8981\u8c03\u7528\u8fd9\u4e2a\u65b9\u6cd5\uff0c\u6211\u4eec\u7528\u4e0b\u9762\u7684\u8bed\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"<object_variable>.<method>(<arguments>)\n")),(0,l.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# Create the instance\n>>> my_dog = Dog("Nora", 10)\n\n# Call the method\n>>> my_dog.bark()\nwoof-woof. I\'m Nora\n')),(0,l.kt)("p",null,"Player\u7c7b\u91cc\u5b9a\u4e49\u4e86\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\u7684increment_speed\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Player:\n\n    def __init__(self, name):\n        self.name = name\n        self.speed = 50\n\n    def increment_speed(self, value):\n        self.speed += value\n")),(0,l.kt)("p",null,"\u8c03\u7528\u6b64\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# Create instance        \n>>> my_player = Player("Nora")\n\n# Check initial speed to see the change\n>>> my_player.speed\n50\n\n# Increment the speed\n>>> my_player.increment_speed(5)\n\n# Confirm the change\n>>> my_player.speed\n55\n')),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u8981\u6dfb\u52a0\u66f4\u591a\u53c2\u6570\uff0c\u53ea\u9700\u8981\u5c06\u591a\u4e2a\u53c2\u6570\u7528\u9017\u53f7\u5206\u9694\u3002\u5efa\u8bae\u5728\u6bcf\u4e2a\u9017\u53f7\u540e\u9762\u52a0\u4e00\u4e2a\u7a7a\u683c\u3002")))}u.isMDXComponent=!0}}]);