/*! For license information please see bubble-card.js.LICENSE.txt */
(()=>{"use strict";var e={382:(e,t,n)=>{function o(e){return null==e}n.d(t,{Ay:()=>bt,Hh:()=>it,ZU:()=>Ze,my:()=>rt});var r={isNothing:o,isObject:function(e){return"object"==typeof e&&null!==e},toArray:function(e){return Array.isArray(e)?e:o(e)?[]:[e]},repeat:function(e,t){var n,o="";for(n=0;n<t;n+=1)o+=e;return o},isNegativeZero:function(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e},extend:function(e,t){var n,o,r,i;if(t)for(n=0,o=(i=Object.keys(t)).length;n<o;n+=1)e[r=i[n]]=t[r];return e}};function i(e,t){var n="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(n+='in "'+e.mark.name+'" '),n+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!t&&e.mark.snippet&&(n+="\n\n"+e.mark.snippet),o+" "+n):o}function a(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=i(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack||""}a.prototype=Object.create(Error.prototype),a.prototype.constructor=a,a.prototype.toString=function(e){return this.name+": "+i(this,e)};var s=a;function l(e,t,n,o,r){var i="",a="",s=Math.floor(r/2)-1;return o-t>s&&(t=o-s+(i=" ... ").length),n-o>s&&(n=o+s-(a=" ...").length),{str:i+e.slice(t,n).replace(/\t/g,"→")+a,pos:o-t+i.length}}function c(e,t){return r.repeat(" ",t-e.length)+e}var d=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],u=["scalar","sequence","mapping"],p=function(e,t){if(t=t||{},Object.keys(t).forEach((function(t){if(-1===d.indexOf(t))throw new s('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')})),this.options=t,this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.representName=t.representName||null,this.defaultStyle=t.defaultStyle||null,this.multi=t.multi||!1,this.styleAliases=function(e){var t={};return null!==e&&Object.keys(e).forEach((function(n){e[n].forEach((function(e){t[String(e)]=n}))})),t}(t.styleAliases||null),-1===u.indexOf(this.kind))throw new s('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')};function b(e,t){var n=[];return e[t].forEach((function(e){var t=n.length;n.forEach((function(n,o){n.tag===e.tag&&n.kind===e.kind&&n.multi===e.multi&&(t=o)})),n[t]=e})),n}function h(e){return this.extend(e)}h.prototype.extend=function(e){var t=[],n=[];if(e instanceof p)n.push(e);else if(Array.isArray(e))n=n.concat(e);else{if(!e||!Array.isArray(e.implicit)&&!Array.isArray(e.explicit))throw new s("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");e.implicit&&(t=t.concat(e.implicit)),e.explicit&&(n=n.concat(e.explicit))}t.forEach((function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(e.loadKind&&"scalar"!==e.loadKind)throw new s("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(e.multi)throw new s("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")})),n.forEach((function(e){if(!(e instanceof p))throw new s("Specified list of YAML types (or a single Type object) contains a non-Type object.")}));var o=Object.create(h.prototype);return o.implicit=(this.implicit||[]).concat(t),o.explicit=(this.explicit||[]).concat(n),o.compiledImplicit=b(o,"implicit"),o.compiledExplicit=b(o,"explicit"),o.compiledTypeMap=function(){var e,t,n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}};function o(e){e.multi?(n.multi[e.kind].push(e),n.multi.fallback.push(e)):n[e.kind][e.tag]=n.fallback[e.tag]=e}for(e=0,t=arguments.length;e<t;e+=1)arguments[e].forEach(o);return n}(o.compiledImplicit,o.compiledExplicit),o};var m=h,g=new p("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}}),f=new p("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}}),y=new p("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}}),v=new m({explicit:[g,f,y]}),_=new p("tag:yaml.org,2002:null",{kind:"scalar",resolve:function(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)},construct:function(){return null},predicate:function(e){return null===e},represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"}),w=new p("tag:yaml.org,2002:bool",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)},construct:function(e){return"true"===e||"True"===e||"TRUE"===e},predicate:function(e){return"[object Boolean]"===Object.prototype.toString.call(e)},represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function x(e){return 48<=e&&e<=55}function k(e){return 48<=e&&e<=57}var C=new p("tag:yaml.org,2002:int",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,o=e.length,r=0,i=!1;if(!o)return!1;if("-"!==(t=e[r])&&"+"!==t||(t=e[++r]),"0"===t){if(r+1===o)return!0;if("b"===(t=e[++r])){for(r++;r<o;r++)if("_"!==(t=e[r])){if("0"!==t&&"1"!==t)return!1;i=!0}return i&&"_"!==t}if("x"===t){for(r++;r<o;r++)if("_"!==(t=e[r])){if(!(48<=(n=e.charCodeAt(r))&&n<=57||65<=n&&n<=70||97<=n&&n<=102))return!1;i=!0}return i&&"_"!==t}if("o"===t){for(r++;r<o;r++)if("_"!==(t=e[r])){if(!x(e.charCodeAt(r)))return!1;i=!0}return i&&"_"!==t}}if("_"===t)return!1;for(;r<o;r++)if("_"!==(t=e[r])){if(!k(e.charCodeAt(r)))return!1;i=!0}return!(!i||"_"===t)},construct:function(e){var t,n=e,o=1;if(-1!==n.indexOf("_")&&(n=n.replace(/_/g,"")),"-"!==(t=n[0])&&"+"!==t||("-"===t&&(o=-1),t=(n=n.slice(1))[0]),"0"===n)return 0;if("0"===t){if("b"===n[1])return o*parseInt(n.slice(2),2);if("x"===n[1])return o*parseInt(n.slice(2),16);if("o"===n[1])return o*parseInt(n.slice(2),8)}return o*parseInt(n,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&e%1==0&&!r.isNegativeZero(e)},represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),$=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"),A=/^[-+]?[0-9]+e/,S=new p("tag:yaml.org,2002:float",{kind:"scalar",resolve:function(e){return null!==e&&!(!$.test(e)||"_"===e[e.length-1])},construct:function(e){var t,n;return n="-"===(t=e.replace(/_/g,"").toLowerCase())[0]?-1:1,"+-".indexOf(t[0])>=0&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?NaN:n*parseFloat(t,10)},predicate:function(e){return"[object Number]"===Object.prototype.toString.call(e)&&(e%1!=0||r.isNegativeZero(e))},represent:function(e,t){var n;if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(r.isNegativeZero(e))return"-0.0";return n=e.toString(10),A.test(n)?n.replace("e",".e"):n},defaultStyle:"lowercase"}),L=v.extend({implicit:[_,w,C,S]}),E=L,M=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),T=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"),B=new p("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:function(e){return null!==e&&(null!==M.exec(e)||null!==T.exec(e))},construct:function(e){var t,n,o,r,i,a,s,l,c=0,d=null;if(null===(t=M.exec(e))&&(t=T.exec(e)),null===t)throw new Error("Date resolve error");if(n=+t[1],o=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,o,r));if(i=+t[4],a=+t[5],s=+t[6],t[7]){for(c=t[7].slice(0,3);c.length<3;)c+="0";c=+c}return t[9]&&(d=6e4*(60*+t[10]+ +(t[11]||0)),"-"===t[9]&&(d=-d)),l=new Date(Date.UTC(n,o,r,i,a,s,c)),d&&l.setTime(l.getTime()-d),l},instanceOf:Date,represent:function(e){return e.toISOString()}}),I=new p("tag:yaml.org,2002:merge",{kind:"scalar",resolve:function(e){return"<<"===e||null===e}}),P="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r",O=new p("tag:yaml.org,2002:binary",{kind:"scalar",resolve:function(e){if(null===e)return!1;var t,n,o=0,r=e.length,i=P;for(n=0;n<r;n++)if(!((t=i.indexOf(e.charAt(n)))>64)){if(t<0)return!1;o+=6}return o%8==0},construct:function(e){var t,n,o=e.replace(/[\r\n=]/g,""),r=o.length,i=P,a=0,s=[];for(t=0;t<r;t++)t%4==0&&t&&(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)),a=a<<6|i.indexOf(o.charAt(t));return 0==(n=r%4*6)?(s.push(a>>16&255),s.push(a>>8&255),s.push(255&a)):18===n?(s.push(a>>10&255),s.push(a>>2&255)):12===n&&s.push(a>>4&255),new Uint8Array(s)},predicate:function(e){return"[object Uint8Array]"===Object.prototype.toString.call(e)},represent:function(e){var t,n,o="",r=0,i=e.length,a=P;for(t=0;t<i;t++)t%3==0&&t&&(o+=a[r>>18&63],o+=a[r>>12&63],o+=a[r>>6&63],o+=a[63&r]),r=(r<<8)+e[t];return 0==(n=i%3)?(o+=a[r>>18&63],o+=a[r>>12&63],o+=a[r>>6&63],o+=a[63&r]):2===n?(o+=a[r>>10&63],o+=a[r>>4&63],o+=a[r<<2&63],o+=a[64]):1===n&&(o+=a[r>>2&63],o+=a[r<<4&63],o+=a[64],o+=a[64]),o}}),q=Object.prototype.hasOwnProperty,j=Object.prototype.toString,N=new p("tag:yaml.org,2002:omap",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,r,i,a=[],s=e;for(t=0,n=s.length;t<n;t+=1){if(o=s[t],i=!1,"[object Object]"!==j.call(o))return!1;for(r in o)if(q.call(o,r)){if(i)return!1;i=!0}if(!i)return!1;if(-1!==a.indexOf(r))return!1;a.push(r)}return!0},construct:function(e){return null!==e?e:[]}}),U=Object.prototype.toString,z=new p("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:function(e){if(null===e)return!0;var t,n,o,r,i,a=e;for(i=new Array(a.length),t=0,n=a.length;t<n;t+=1){if(o=a[t],"[object Object]"!==U.call(o))return!1;if(1!==(r=Object.keys(o)).length)return!1;i[t]=[r[0],o[r[0]]]}return!0},construct:function(e){if(null===e)return[];var t,n,o,r,i,a=e;for(i=new Array(a.length),t=0,n=a.length;t<n;t+=1)o=a[t],r=Object.keys(o),i[t]=[r[0],o[r[0]]];return i}}),D=Object.prototype.hasOwnProperty,R=new p("tag:yaml.org,2002:set",{kind:"mapping",resolve:function(e){if(null===e)return!0;var t,n=e;for(t in n)if(D.call(n,t)&&null!==n[t])return!1;return!0},construct:function(e){return null!==e?e:{}}}),V=E.extend({implicit:[B,I],explicit:[O,N,z,R]}),F=Object.prototype.hasOwnProperty,H=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,W=/[\x85\u2028\u2029]/,Y=/[,\[\]\{\}]/,K=/^(?:!|!!|![a-z\-]+!)$/i,X=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function J(e){return Object.prototype.toString.call(e)}function G(e){return 10===e||13===e}function Q(e){return 9===e||32===e}function Z(e){return 9===e||32===e||10===e||13===e}function ee(e){return 44===e||91===e||93===e||123===e||125===e}function te(e){var t;return 48<=e&&e<=57?e-48:97<=(t=32|e)&&t<=102?t-97+10:-1}function ne(e){return 48===e?"\0":97===e?"":98===e?"\b":116===e||9===e?"\t":110===e?"\n":118===e?"\v":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"":95===e?" ":76===e?"\u2028":80===e?"\u2029":""}function oe(e){return e<=65535?String.fromCharCode(e):String.fromCharCode(55296+(e-65536>>10),56320+(e-65536&1023))}for(var re=new Array(256),ie=new Array(256),ae=0;ae<256;ae++)re[ae]=ne(ae)?1:0,ie[ae]=ne(ae);function se(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||V,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.json=t.json||!1,this.listener=t.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.firstTabInLine=-1,this.documents=[]}function le(e,t){var n={name:e.filename,buffer:e.input.slice(0,-1),position:e.position,line:e.line,column:e.position-e.lineStart};return n.snippet=function(e,t){if(t=Object.create(t||null),!e.buffer)return null;t.maxLength||(t.maxLength=79),"number"!=typeof t.indent&&(t.indent=1),"number"!=typeof t.linesBefore&&(t.linesBefore=3),"number"!=typeof t.linesAfter&&(t.linesAfter=2);for(var n,o=/\r?\n|\r|\0/g,i=[0],a=[],s=-1;n=o.exec(e.buffer);)a.push(n.index),i.push(n.index+n[0].length),e.position<=n.index&&s<0&&(s=i.length-2);s<0&&(s=i.length-1);var d,u,p="",b=Math.min(e.line+t.linesAfter,a.length).toString().length,h=t.maxLength-(t.indent+b+3);for(d=1;d<=t.linesBefore&&!(s-d<0);d++)u=l(e.buffer,i[s-d],a[s-d],e.position-(i[s]-i[s-d]),h),p=r.repeat(" ",t.indent)+c((e.line-d+1).toString(),b)+" | "+u.str+"\n"+p;for(u=l(e.buffer,i[s],a[s],e.position,h),p+=r.repeat(" ",t.indent)+c((e.line+1).toString(),b)+" | "+u.str+"\n",p+=r.repeat("-",t.indent+b+3+u.pos)+"^\n",d=1;d<=t.linesAfter&&!(s+d>=a.length);d++)u=l(e.buffer,i[s+d],a[s+d],e.position-(i[s]-i[s+d]),h),p+=r.repeat(" ",t.indent)+c((e.line+d+1).toString(),b)+" | "+u.str+"\n";return p.replace(/\n$/,"")}(n),new s(t,n)}function ce(e,t){throw le(e,t)}function de(e,t){e.onWarning&&e.onWarning.call(null,le(e,t))}var ue={YAML:function(e,t,n){var o,r,i;null!==e.version&&ce(e,"duplication of %YAML directive"),1!==n.length&&ce(e,"YAML directive accepts exactly one argument"),null===(o=/^([0-9]+)\.([0-9]+)$/.exec(n[0]))&&ce(e,"ill-formed argument of the YAML directive"),r=parseInt(o[1],10),i=parseInt(o[2],10),1!==r&&ce(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=i<2,1!==i&&2!==i&&de(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var o,r;2!==n.length&&ce(e,"TAG directive accepts exactly two arguments"),o=n[0],r=n[1],K.test(o)||ce(e,"ill-formed tag handle (first argument) of the TAG directive"),F.call(e.tagMap,o)&&ce(e,'there is a previously declared suffix for "'+o+'" tag handle'),X.test(r)||ce(e,"ill-formed tag prefix (second argument) of the TAG directive");try{r=decodeURIComponent(r)}catch(t){ce(e,"tag prefix is malformed: "+r)}e.tagMap[o]=r}};function pe(e,t,n,o){var r,i,a,s;if(t<n){if(s=e.input.slice(t,n),o)for(r=0,i=s.length;r<i;r+=1)9===(a=s.charCodeAt(r))||32<=a&&a<=1114111||ce(e,"expected valid JSON character");else H.test(s)&&ce(e,"the stream contains non-printable characters");e.result+=s}}function be(e,t,n,o){var i,a,s,l;for(r.isObject(n)||ce(e,"cannot merge mappings; the provided source object is unacceptable"),s=0,l=(i=Object.keys(n)).length;s<l;s+=1)a=i[s],F.call(t,a)||(t[a]=n[a],o[a]=!0)}function he(e,t,n,o,r,i,a,s,l){var c,d;if(Array.isArray(r))for(c=0,d=(r=Array.prototype.slice.call(r)).length;c<d;c+=1)Array.isArray(r[c])&&ce(e,"nested arrays are not supported inside keys"),"object"==typeof r&&"[object Object]"===J(r[c])&&(r[c]="[object Object]");if("object"==typeof r&&"[object Object]"===J(r)&&(r="[object Object]"),r=String(r),null===t&&(t={}),"tag:yaml.org,2002:merge"===o)if(Array.isArray(i))for(c=0,d=i.length;c<d;c+=1)be(e,t,i[c],n);else be(e,t,i,n);else e.json||F.call(n,r)||!F.call(t,r)||(e.line=a||e.line,e.lineStart=s||e.lineStart,e.position=l||e.position,ce(e,"duplicated mapping key")),"__proto__"===r?Object.defineProperty(t,r,{configurable:!0,enumerable:!0,writable:!0,value:i}):t[r]=i,delete n[r];return t}function me(e){var t;10===(t=e.input.charCodeAt(e.position))?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):ce(e,"a line break is expected"),e.line+=1,e.lineStart=e.position,e.firstTabInLine=-1}function ge(e,t,n){for(var o=0,r=e.input.charCodeAt(e.position);0!==r;){for(;Q(r);)9===r&&-1===e.firstTabInLine&&(e.firstTabInLine=e.position),r=e.input.charCodeAt(++e.position);if(t&&35===r)do{r=e.input.charCodeAt(++e.position)}while(10!==r&&13!==r&&0!==r);if(!G(r))break;for(me(e),r=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===r;)e.lineIndent++,r=e.input.charCodeAt(++e.position)}return-1!==n&&0!==o&&e.lineIndent<n&&de(e,"deficient indentation"),o}function fe(e){var t,n=e.position;return!(45!==(t=e.input.charCodeAt(n))&&46!==t||t!==e.input.charCodeAt(n+1)||t!==e.input.charCodeAt(n+2)||(n+=3,0!==(t=e.input.charCodeAt(n))&&!Z(t)))}function ye(e,t){1===t?e.result+=" ":t>1&&(e.result+=r.repeat("\n",t-1))}function ve(e,t){var n,o,r=e.tag,i=e.anchor,a=[],s=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=a),o=e.input.charCodeAt(e.position);0!==o&&(-1!==e.firstTabInLine&&(e.position=e.firstTabInLine,ce(e,"tab characters must not be used in indentation")),45===o)&&Z(e.input.charCodeAt(e.position+1));)if(s=!0,e.position++,ge(e,!0,-1)&&e.lineIndent<=t)a.push(null),o=e.input.charCodeAt(e.position);else if(n=e.line,xe(e,t,3,!1,!0),a.push(e.result),ge(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==o)ce(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return!!s&&(e.tag=r,e.anchor=i,e.kind="sequence",e.result=a,!0)}function _e(e){var t,n,o,r,i=!1,a=!1;if(33!==(r=e.input.charCodeAt(e.position)))return!1;if(null!==e.tag&&ce(e,"duplication of a tag property"),60===(r=e.input.charCodeAt(++e.position))?(i=!0,r=e.input.charCodeAt(++e.position)):33===r?(a=!0,n="!!",r=e.input.charCodeAt(++e.position)):n="!",t=e.position,i){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&62!==r);e.position<e.length?(o=e.input.slice(t,e.position),r=e.input.charCodeAt(++e.position)):ce(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==r&&!Z(r);)33===r&&(a?ce(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),K.test(n)||ce(e,"named tag handle cannot contain such characters"),a=!0,t=e.position+1)),r=e.input.charCodeAt(++e.position);o=e.input.slice(t,e.position),Y.test(o)&&ce(e,"tag suffix cannot contain flow indicator characters")}o&&!X.test(o)&&ce(e,"tag name cannot contain such characters: "+o);try{o=decodeURIComponent(o)}catch(t){ce(e,"tag name is malformed: "+o)}return i?e.tag=o:F.call(e.tagMap,n)?e.tag=e.tagMap[n]+o:"!"===n?e.tag="!"+o:"!!"===n?e.tag="tag:yaml.org,2002:"+o:ce(e,'undeclared tag handle "'+n+'"'),!0}function we(e){var t,n;if(38!==(n=e.input.charCodeAt(e.position)))return!1;for(null!==e.anchor&&ce(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!Z(n)&&!ee(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&ce(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function xe(e,t,n,o,i){var a,s,l,c,d,u,p,b,h,m=1,g=!1,f=!1;if(null!==e.listener&&e.listener("open",e),e.tag=null,e.anchor=null,e.kind=null,e.result=null,a=s=l=4===n||3===n,o&&ge(e,!0,-1)&&(g=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;_e(e)||we(e);)ge(e,!0,-1)?(g=!0,l=a,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):l=!1;if(l&&(l=g||i),1!==m&&4!==n||(b=1===n||2===n?t:t+1,h=e.position-e.lineStart,1===m?l&&(ve(e,h)||function(e,t,n){var o,r,i,a,s,l,c,d=e.tag,u=e.anchor,p={},b=Object.create(null),h=null,m=null,g=null,f=!1,y=!1;if(-1!==e.firstTabInLine)return!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),c=e.input.charCodeAt(e.position);0!==c;){if(f||-1===e.firstTabInLine||(e.position=e.firstTabInLine,ce(e,"tab characters must not be used in indentation")),o=e.input.charCodeAt(e.position+1),i=e.line,63!==c&&58!==c||!Z(o)){if(a=e.line,s=e.lineStart,l=e.position,!xe(e,n,2,!1,!0))break;if(e.line===i){for(c=e.input.charCodeAt(e.position);Q(c);)c=e.input.charCodeAt(++e.position);if(58===c)Z(c=e.input.charCodeAt(++e.position))||ce(e,"a whitespace character is expected after the key-value separator within a block mapping"),f&&(he(e,p,b,h,m,null,a,s,l),h=m=g=null),y=!0,f=!1,r=!1,h=e.tag,m=e.result;else{if(!y)return e.tag=d,e.anchor=u,!0;ce(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!y)return e.tag=d,e.anchor=u,!0;ce(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===c?(f&&(he(e,p,b,h,m,null,a,s,l),h=m=g=null),y=!0,f=!0,r=!0):f?(f=!1,r=!0):ce(e,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),e.position+=1,c=o;if((e.line===i||e.lineIndent>t)&&(f&&(a=e.line,s=e.lineStart,l=e.position),xe(e,t,4,!0,r)&&(f?m=e.result:g=e.result),f||(he(e,p,b,h,m,g,a,s,l),h=m=g=null),ge(e,!0,-1),c=e.input.charCodeAt(e.position)),(e.line===i||e.lineIndent>t)&&0!==c)ce(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return f&&he(e,p,b,h,m,null,a,s,l),y&&(e.tag=d,e.anchor=u,e.kind="mapping",e.result=p),y}(e,h,b))||function(e,t){var n,o,r,i,a,s,l,c,d,u,p,b,h=!0,m=e.tag,g=e.anchor,f=Object.create(null);if(91===(b=e.input.charCodeAt(e.position)))a=93,c=!1,i=[];else{if(123!==b)return!1;a=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),b=e.input.charCodeAt(++e.position);0!==b;){if(ge(e,!0,t),(b=e.input.charCodeAt(e.position))===a)return e.position++,e.tag=m,e.anchor=g,e.kind=c?"mapping":"sequence",e.result=i,!0;h?44===b&&ce(e,"expected the node content, but found ','"):ce(e,"missed comma between flow collection entries"),p=null,s=l=!1,63===b&&Z(e.input.charCodeAt(e.position+1))&&(s=l=!0,e.position++,ge(e,!0,t)),n=e.line,o=e.lineStart,r=e.position,xe(e,t,1,!1,!0),u=e.tag,d=e.result,ge(e,!0,t),b=e.input.charCodeAt(e.position),!l&&e.line!==n||58!==b||(s=!0,b=e.input.charCodeAt(++e.position),ge(e,!0,t),xe(e,t,1,!1,!0),p=e.result),c?he(e,i,f,u,d,p,n,o,r):s?i.push(he(e,null,f,u,d,p,n,o,r)):i.push(d),ge(e,!0,t),44===(b=e.input.charCodeAt(e.position))?(h=!0,b=e.input.charCodeAt(++e.position)):h=!1}ce(e,"unexpected end of the stream within a flow collection")}(e,b)?f=!0:(s&&function(e,t){var n,o,i,a,s,l=1,c=!1,d=!1,u=t,p=0,b=!1;if(124===(a=e.input.charCodeAt(e.position)))o=!1;else{if(62!==a)return!1;o=!0}for(e.kind="scalar",e.result="";0!==a;)if(43===(a=e.input.charCodeAt(++e.position))||45===a)1===l?l=43===a?3:2:ce(e,"repeat of a chomping mode identifier");else{if(!((i=48<=(s=a)&&s<=57?s-48:-1)>=0))break;0===i?ce(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):d?ce(e,"repeat of an indentation width identifier"):(u=t+i-1,d=!0)}if(Q(a)){do{a=e.input.charCodeAt(++e.position)}while(Q(a));if(35===a)do{a=e.input.charCodeAt(++e.position)}while(!G(a)&&0!==a)}for(;0!==a;){for(me(e),e.lineIndent=0,a=e.input.charCodeAt(e.position);(!d||e.lineIndent<u)&&32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position);if(!d&&e.lineIndent>u&&(u=e.lineIndent),G(a))p++;else{if(e.lineIndent<u){3===l?e.result+=r.repeat("\n",c?1+p:p):1===l&&c&&(e.result+="\n");break}for(o?Q(a)?(b=!0,e.result+=r.repeat("\n",c?1+p:p)):b?(b=!1,e.result+=r.repeat("\n",p+1)):0===p?c&&(e.result+=" "):e.result+=r.repeat("\n",p):e.result+=r.repeat("\n",c?1+p:p),c=!0,d=!0,p=0,n=e.position;!G(a)&&0!==a;)a=e.input.charCodeAt(++e.position);pe(e,n,e.position,!1)}}return!0}(e,b)||function(e,t){var n,o,r;if(39!==(n=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,o=r=e.position;0!==(n=e.input.charCodeAt(e.position));)if(39===n){if(pe(e,o,e.position,!0),39!==(n=e.input.charCodeAt(++e.position)))return!0;o=e.position,e.position++,r=e.position}else G(n)?(pe(e,o,r,!0),ye(e,ge(e,!1,t)),o=r=e.position):e.position===e.lineStart&&fe(e)?ce(e,"unexpected end of the document within a single quoted scalar"):(e.position++,r=e.position);ce(e,"unexpected end of the stream within a single quoted scalar")}(e,b)||function(e,t){var n,o,r,i,a,s,l;if(34!==(s=e.input.charCodeAt(e.position)))return!1;for(e.kind="scalar",e.result="",e.position++,n=o=e.position;0!==(s=e.input.charCodeAt(e.position));){if(34===s)return pe(e,n,e.position,!0),e.position++,!0;if(92===s){if(pe(e,n,e.position,!0),G(s=e.input.charCodeAt(++e.position)))ge(e,!1,t);else if(s<256&&re[s])e.result+=ie[s],e.position++;else if((a=120===(l=s)?2:117===l?4:85===l?8:0)>0){for(r=a,i=0;r>0;r--)(a=te(s=e.input.charCodeAt(++e.position)))>=0?i=(i<<4)+a:ce(e,"expected hexadecimal character");e.result+=oe(i),e.position++}else ce(e,"unknown escape sequence");n=o=e.position}else G(s)?(pe(e,n,o,!0),ye(e,ge(e,!1,t)),n=o=e.position):e.position===e.lineStart&&fe(e)?ce(e,"unexpected end of the document within a double quoted scalar"):(e.position++,o=e.position)}ce(e,"unexpected end of the stream within a double quoted scalar")}(e,b)?f=!0:function(e){var t,n,o;if(42!==(o=e.input.charCodeAt(e.position)))return!1;for(o=e.input.charCodeAt(++e.position),t=e.position;0!==o&&!Z(o)&&!ee(o);)o=e.input.charCodeAt(++e.position);return e.position===t&&ce(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),F.call(e.anchorMap,n)||ce(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],ge(e,!0,-1),!0}(e)?(f=!0,null===e.tag&&null===e.anchor||ce(e,"alias node should not have any properties")):function(e,t,n){var o,r,i,a,s,l,c,d,u=e.kind,p=e.result;if(Z(d=e.input.charCodeAt(e.position))||ee(d)||35===d||38===d||42===d||33===d||124===d||62===d||39===d||34===d||37===d||64===d||96===d)return!1;if((63===d||45===d)&&(Z(o=e.input.charCodeAt(e.position+1))||n&&ee(o)))return!1;for(e.kind="scalar",e.result="",r=i=e.position,a=!1;0!==d;){if(58===d){if(Z(o=e.input.charCodeAt(e.position+1))||n&&ee(o))break}else if(35===d){if(Z(e.input.charCodeAt(e.position-1)))break}else{if(e.position===e.lineStart&&fe(e)||n&&ee(d))break;if(G(d)){if(s=e.line,l=e.lineStart,c=e.lineIndent,ge(e,!1,-1),e.lineIndent>=t){a=!0,d=e.input.charCodeAt(e.position);continue}e.position=i,e.line=s,e.lineStart=l,e.lineIndent=c;break}}a&&(pe(e,r,i,!1),ye(e,e.line-s),r=i=e.position,a=!1),Q(d)||(i=e.position+1),d=e.input.charCodeAt(++e.position)}return pe(e,r,i,!1),!!e.result||(e.kind=u,e.result=p,!1)}(e,b,1===n)&&(f=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(f=l&&ve(e,h))),null===e.tag)null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);else if("?"===e.tag){for(null!==e.result&&"scalar"!==e.kind&&ce(e,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+e.kind+'"'),c=0,d=e.implicitTypes.length;c<d;c+=1)if((p=e.implicitTypes[c]).resolve(e.result)){e.result=p.construct(e.result),e.tag=p.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else if("!"!==e.tag){if(F.call(e.typeMap[e.kind||"fallback"],e.tag))p=e.typeMap[e.kind||"fallback"][e.tag];else for(p=null,c=0,d=(u=e.typeMap.multi[e.kind||"fallback"]).length;c<d;c+=1)if(e.tag.slice(0,u[c].tag.length)===u[c].tag){p=u[c];break}p||ce(e,"unknown tag !<"+e.tag+">"),null!==e.result&&p.kind!==e.kind&&ce(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+p.kind+'", not "'+e.kind+'"'),p.resolve(e.result,e.tag)?(e.result=p.construct(e.result,e.tag),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):ce(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")}return null!==e.listener&&e.listener("close",e),null!==e.tag||null!==e.anchor||f}function ke(e){var t,n,o,r,i=e.position,a=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap=Object.create(null),e.anchorMap=Object.create(null);0!==(r=e.input.charCodeAt(e.position))&&(ge(e,!0,-1),r=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==r));){for(a=!0,r=e.input.charCodeAt(++e.position),t=e.position;0!==r&&!Z(r);)r=e.input.charCodeAt(++e.position);for(o=[],(n=e.input.slice(t,e.position)).length<1&&ce(e,"directive name must not be less than one character in length");0!==r;){for(;Q(r);)r=e.input.charCodeAt(++e.position);if(35===r){do{r=e.input.charCodeAt(++e.position)}while(0!==r&&!G(r));break}if(G(r))break;for(t=e.position;0!==r&&!Z(r);)r=e.input.charCodeAt(++e.position);o.push(e.input.slice(t,e.position))}0!==r&&me(e),F.call(ue,n)?ue[n](e,n,o):de(e,'unknown document directive "'+n+'"')}ge(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,ge(e,!0,-1)):a&&ce(e,"directives end mark is expected"),xe(e,e.lineIndent-1,4,!1,!0),ge(e,!0,-1),e.checkLineBreaks&&W.test(e.input.slice(i,e.position))&&de(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&fe(e)?46===e.input.charCodeAt(e.position)&&(e.position+=3,ge(e,!0,-1)):e.position<e.length-1&&ce(e,"end of the stream or a document separator is expected")}function Ce(e,t){t=t||{},0!==(e=String(e)).length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new se(e,t),o=e.indexOf("\0");for(-1!==o&&(n.position=o,ce(n,"null byte is not allowed in input")),n.input+="\0";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)ke(n);return n.documents}var $e=function(e,t,n){null!==t&&"object"==typeof t&&void 0===n&&(n=t,t=null);var o=Ce(e,n);if("function"!=typeof t)return o;for(var r=0,i=o.length;r<i;r+=1)t(o[r])},Ae=function(e,t){var n=Ce(e,t);if(0!==n.length){if(1===n.length)return n[0];throw new s("expected a single document in the stream, but found more")}},Se=Object.prototype.toString,Le=Object.prototype.hasOwnProperty,Ee=65279,Me={0:"\\0",7:"\\a",8:"\\b",9:"\\t",10:"\\n",11:"\\v",12:"\\f",13:"\\r",27:"\\e",34:'\\"',92:"\\\\",133:"\\N",160:"\\_",8232:"\\L",8233:"\\P"},Te=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"],Be=/^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;function Ie(e){var t,n,o;if(t=e.toString(16).toUpperCase(),e<=255)n="x",o=2;else if(e<=65535)n="u",o=4;else{if(!(e<=4294967295))throw new s("code point within a string may not be greater than 0xFFFFFFFF");n="U",o=8}return"\\"+n+r.repeat("0",o-t.length)+t}function Pe(e){this.schema=e.schema||V,this.indent=Math.max(1,e.indent||2),this.noArrayIndent=e.noArrayIndent||!1,this.skipInvalid=e.skipInvalid||!1,this.flowLevel=r.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=function(e,t){var n,o,r,i,a,s,l;if(null===t)return{};for(n={},r=0,i=(o=Object.keys(t)).length;r<i;r+=1)a=o[r],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),(l=e.compiledTypeMap.fallback[a])&&Le.call(l.styleAliases,s)&&(s=l.styleAliases[s]),n[a]=s;return n}(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.lineWidth=e.lineWidth||80,this.noRefs=e.noRefs||!1,this.noCompatMode=e.noCompatMode||!1,this.condenseFlow=e.condenseFlow||!1,this.quotingType='"'===e.quotingType?2:1,this.forceQuotes=e.forceQuotes||!1,this.replacer="function"==typeof e.replacer?e.replacer:null,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function Oe(e,t){for(var n,o=r.repeat(" ",t),i=0,a=-1,s="",l=e.length;i<l;)-1===(a=e.indexOf("\n",i))?(n=e.slice(i),i=l):(n=e.slice(i,a+1),i=a+1),n.length&&"\n"!==n&&(s+=o),s+=n;return s}function qe(e,t){return"\n"+r.repeat(" ",e.indent*t)}function je(e){return 32===e||9===e}function Ne(e){return 32<=e&&e<=126||161<=e&&e<=55295&&8232!==e&&8233!==e||57344<=e&&e<=65533&&e!==Ee||65536<=e&&e<=1114111}function Ue(e){return Ne(e)&&e!==Ee&&13!==e&&10!==e}function ze(e,t,n){var o=Ue(e),r=o&&!je(e);return(n?o:o&&44!==e&&91!==e&&93!==e&&123!==e&&125!==e)&&35!==e&&!(58===t&&!r)||Ue(t)&&!je(t)&&35===e||58===t&&r}function De(e,t){var n,o=e.charCodeAt(t);return o>=55296&&o<=56319&&t+1<e.length&&(n=e.charCodeAt(t+1))>=56320&&n<=57343?1024*(o-55296)+n-56320+65536:o}function Re(e){return/^\n* /.test(e)}function Ve(e,t,n,o,r){e.dump=function(){if(0===t.length)return 2===e.quotingType?'""':"''";if(!e.noCompatMode&&(-1!==Te.indexOf(t)||Be.test(t)))return 2===e.quotingType?'"'+t+'"':"'"+t+"'";var i=e.indent*Math.max(1,n),a=-1===e.lineWidth?-1:Math.max(Math.min(e.lineWidth,40),e.lineWidth-i),l=o||e.flowLevel>-1&&n>=e.flowLevel;switch(function(e,t,n,o,r,i,a,s){var l,c,d=0,u=null,p=!1,b=!1,h=-1!==o,m=-1,g=Ne(c=De(e,0))&&c!==Ee&&!je(c)&&45!==c&&63!==c&&58!==c&&44!==c&&91!==c&&93!==c&&123!==c&&125!==c&&35!==c&&38!==c&&42!==c&&33!==c&&124!==c&&61!==c&&62!==c&&39!==c&&34!==c&&37!==c&&64!==c&&96!==c&&function(e){return!je(e)&&58!==e}(De(e,e.length-1));if(t||a)for(l=0;l<e.length;d>=65536?l+=2:l++){if(!Ne(d=De(e,l)))return 5;g=g&&ze(d,u,s),u=d}else{for(l=0;l<e.length;d>=65536?l+=2:l++){if(10===(d=De(e,l)))p=!0,h&&(b=b||l-m-1>o&&" "!==e[m+1],m=l);else if(!Ne(d))return 5;g=g&&ze(d,u,s),u=d}b=b||h&&l-m-1>o&&" "!==e[m+1]}return p||b?n>9&&Re(e)?5:a?2===i?5:2:b?4:3:!g||a||r(e)?2===i?5:2:1}(t,l,e.indent,a,(function(t){return function(e,t){var n,o;for(n=0,o=e.implicitTypes.length;n<o;n+=1)if(e.implicitTypes[n].resolve(t))return!0;return!1}(e,t)}),e.quotingType,e.forceQuotes&&!o,r)){case 1:return t;case 2:return"'"+t.replace(/'/g,"''")+"'";case 3:return"|"+Fe(t,e.indent)+He(Oe(t,i));case 4:return">"+Fe(t,e.indent)+He(Oe(function(e,t){for(var n,o,r,i=/(\n+)([^\n]*)/g,a=(r=-1!==(r=e.indexOf("\n"))?r:e.length,i.lastIndex=r,We(e.slice(0,r),t)),s="\n"===e[0]||" "===e[0];o=i.exec(e);){var l=o[1],c=o[2];n=" "===c[0],a+=l+(s||n||""===c?"":"\n")+We(c,t),s=n}return a}(t,a),i));case 5:return'"'+function(e){for(var t,n="",o=0,r=0;r<e.length;o>=65536?r+=2:r++)o=De(e,r),!(t=Me[o])&&Ne(o)?(n+=e[r],o>=65536&&(n+=e[r+1])):n+=t||Ie(o);return n}(t)+'"';default:throw new s("impossible error: invalid scalar style")}}()}function Fe(e,t){var n=Re(e)?String(t):"",o="\n"===e[e.length-1];return n+(!o||"\n"!==e[e.length-2]&&"\n"!==e?o?"":"-":"+")+"\n"}function He(e){return"\n"===e[e.length-1]?e.slice(0,-1):e}function We(e,t){if(""===e||" "===e[0])return e;for(var n,o,r=/ [^ ]/g,i=0,a=0,s=0,l="";n=r.exec(e);)(s=n.index)-i>t&&(o=a>i?a:s,l+="\n"+e.slice(i,o),i=o+1),a=s;return l+="\n",e.length-i>t&&a>i?l+=e.slice(i,a)+"\n"+e.slice(a+1):l+=e.slice(i),l.slice(1)}function Ye(e,t,n,o){var r,i,a,s="",l=e.tag;for(r=0,i=n.length;r<i;r+=1)a=n[r],e.replacer&&(a=e.replacer.call(n,String(r),a)),(Xe(e,t+1,a,!0,!0,!1,!0)||void 0===a&&Xe(e,t+1,null,!0,!0,!1,!0))&&(o&&""===s||(s+=qe(e,t)),e.dump&&10===e.dump.charCodeAt(0)?s+="-":s+="- ",s+=e.dump);e.tag=l,e.dump=s||"[]"}function Ke(e,t,n){var o,r,i,a,l,c;for(i=0,a=(r=n?e.explicitTypes:e.implicitTypes).length;i<a;i+=1)if(((l=r[i]).instanceOf||l.predicate)&&(!l.instanceOf||"object"==typeof t&&t instanceof l.instanceOf)&&(!l.predicate||l.predicate(t))){if(n?l.multi&&l.representName?e.tag=l.representName(t):e.tag=l.tag:e.tag="?",l.represent){if(c=e.styleMap[l.tag]||l.defaultStyle,"[object Function]"===Se.call(l.represent))o=l.represent(t,c);else{if(!Le.call(l.represent,c))throw new s("!<"+l.tag+'> tag resolver accepts not "'+c+'" style');o=l.represent[c](t,c)}e.dump=o}return!0}return!1}function Xe(e,t,n,o,r,i,a){e.tag=null,e.dump=n,Ke(e,n,!1)||Ke(e,n,!0);var l,c=Se.call(e.dump),d=o;o&&(o=e.flowLevel<0||e.flowLevel>t);var u,p,b="[object Object]"===c||"[object Array]"===c;if(b&&(p=-1!==(u=e.duplicates.indexOf(n))),(null!==e.tag&&"?"!==e.tag||p||2!==e.indent&&t>0)&&(r=!1),p&&e.usedDuplicates[u])e.dump="*ref_"+u;else{if(b&&p&&!e.usedDuplicates[u]&&(e.usedDuplicates[u]=!0),"[object Object]"===c)o&&0!==Object.keys(e.dump).length?(function(e,t,n,o){var r,i,a,l,c,d,u="",p=e.tag,b=Object.keys(n);if(!0===e.sortKeys)b.sort();else if("function"==typeof e.sortKeys)b.sort(e.sortKeys);else if(e.sortKeys)throw new s("sortKeys must be a boolean or a function");for(r=0,i=b.length;r<i;r+=1)d="",o&&""===u||(d+=qe(e,t)),l=n[a=b[r]],e.replacer&&(l=e.replacer.call(n,a,l)),Xe(e,t+1,a,!0,!0,!0)&&((c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024)&&(e.dump&&10===e.dump.charCodeAt(0)?d+="?":d+="? "),d+=e.dump,c&&(d+=qe(e,t)),Xe(e,t+1,l,!0,c)&&(e.dump&&10===e.dump.charCodeAt(0)?d+=":":d+=": ",u+=d+=e.dump));e.tag=p,e.dump=u||"{}"}(e,t,e.dump,r),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,r,i,a,s,l="",c=e.tag,d=Object.keys(n);for(o=0,r=d.length;o<r;o+=1)s="",""!==l&&(s+=", "),e.condenseFlow&&(s+='"'),a=n[i=d[o]],e.replacer&&(a=e.replacer.call(n,i,a)),Xe(e,t,i,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+(e.condenseFlow?'"':"")+":"+(e.condenseFlow?"":" "),Xe(e,t,a,!1,!1)&&(l+=s+=e.dump));e.tag=c,e.dump="{"+l+"}"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else if("[object Array]"===c)o&&0!==e.dump.length?(e.noArrayIndent&&!a&&t>0?Ye(e,t-1,e.dump,r):Ye(e,t,e.dump,r),p&&(e.dump="&ref_"+u+e.dump)):(function(e,t,n){var o,r,i,a="",s=e.tag;for(o=0,r=n.length;o<r;o+=1)i=n[o],e.replacer&&(i=e.replacer.call(n,String(o),i)),(Xe(e,t,i,!1,!1)||void 0===i&&Xe(e,t,null,!1,!1))&&(""!==a&&(a+=","+(e.condenseFlow?"":" ")),a+=e.dump);e.tag=s,e.dump="["+a+"]"}(e,t,e.dump),p&&(e.dump="&ref_"+u+" "+e.dump));else{if("[object String]"!==c){if("[object Undefined]"===c)return!1;if(e.skipInvalid)return!1;throw new s("unacceptable kind of an object to dump "+c)}"?"!==e.tag&&Ve(e,e.dump,t,i,d)}null!==e.tag&&"?"!==e.tag&&(l=encodeURI("!"===e.tag[0]?e.tag.slice(1):e.tag).replace(/!/g,"%21"),l="!"===e.tag[0]?"!"+l:"tag:yaml.org,2002:"===l.slice(0,18)?"!!"+l.slice(18):"!<"+l+">",e.dump=l+" "+e.dump)}return!0}function Je(e,t){var n,o,r=[],i=[];for(Ge(e,r,i),n=0,o=i.length;n<o;n+=1)t.duplicates.push(r[i[n]]);t.usedDuplicates=new Array(o)}function Ge(e,t,n){var o,r,i;if(null!==e&&"object"==typeof e)if(-1!==(r=t.indexOf(e)))-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,i=e.length;r<i;r+=1)Ge(e[r],t,n);else for(r=0,i=(o=Object.keys(e)).length;r<i;r+=1)Ge(e[o[r]],t,n)}function Qe(e,t){return function(){throw new Error("Function yaml."+e+" is removed in js-yaml 4. Use yaml."+t+" instead, which is now safe by default.")}}var Ze=p,et=m,tt=v,nt=L,ot=E,rt=V,it=Ae,at=$e,st=function(e,t){var n=new Pe(t=t||{});n.noRefs||Je(e,n);var o=e;return n.replacer&&(o=n.replacer.call({"":o},"",o)),Xe(n,0,o,!0,!0)?n.dump+"\n":""},lt=s,ct={binary:O,float:S,map:y,null:_,pairs:z,set:R,timestamp:B,bool:w,int:C,merge:I,omap:N,seq:f,str:g},dt=Qe("safeLoad","load"),ut=Qe("safeLoadAll","loadAll"),pt=Qe("safeDump","dump");const bt={Type:Ze,Schema:et,FAILSAFE_SCHEMA:tt,JSON_SCHEMA:nt,CORE_SCHEMA:ot,DEFAULT_SCHEMA:rt,load:it,loadAll:at,dump:st,YAMLException:lt,types:ct,safeLoad:dt,safeLoadAll:ut,safeDump:pt}},957:(e,t,n)=>{n.d(t,{WF:()=>ue,AH:()=>c,qy:()=>Y,s6:()=>X,XX:()=>de,iz:()=>l});const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),a=new WeakMap;class s{constructor(e,t,n){if(this._$cssResult$=!0,n!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=a.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&a.set(t,e))}return e}toString(){return this.cssText}}const l=e=>new s("string"==typeof e?e:e+"",void 0,i),c=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[o+1]),e[0]);return new s(n,e,i)},d=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const n of t){const t=document.createElement("style"),r=o.litNonce;void 0!==r&&t.setAttribute("nonce",r),t.textContent=n.cssText,e.appendChild(t)}},u=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return l(t)})(e):e,{is:p,defineProperty:b,getOwnPropertyDescriptor:h,getOwnPropertyNames:m,getOwnPropertySymbols:g,getPrototypeOf:f}=Object,y=globalThis,v=y.trustedTypes,_=v?v.emptyScript:"",w=y.reactiveElementPolyfillSupport,x=(e,t)=>e,k={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},C=(e,t)=>!p(e,t),$={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:C};Symbol.metadata??=Symbol("metadata"),y.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=$){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),o=this.getPropertyDescriptor(e,n,t);void 0!==o&&b(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){const{get:o,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const i=o?.call(this);r.call(this,t),this.requestUpdate(e,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??$}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...m(e),...g(e)];for(const n of t)this.createProperty(n,e[n])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const n=this._$Eu(e,t);void 0!==n&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return d(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EC(e,t){const n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(void 0!==o&&!0===n.reflect){const r=(void 0!==n.converter?.toAttribute?n.converter:k).toAttribute(t,n.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const n=this.constructor,o=n._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=n.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:k;this._$Em=o,this[o]=r.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,n){if(void 0!==e){if(n??=this.constructor.getPropertyOptions(e),!(n.hasChanged??C)(this[e],t))return;this.P(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,n){this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,n]of e)!0!==n.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],n)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,w?.({ReactiveElement:A}),(y.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,L=S.trustedTypes,E=L?L.createPolicy("lit-html",{createHTML:e=>e}):void 0,M="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,B="?"+T,I=`<${B}>`,P=document,O=()=>P.createComment(""),q=e=>null===e||"object"!=typeof e&&"function"!=typeof e,j=Array.isArray,N="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,z=/-->/g,D=/>/g,R=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),V=/'/g,F=/"/g,H=/^(?:script|style|textarea|title)$/i,W=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Y=W(1),K=(W(2),W(3),Symbol.for("lit-noChange")),X=Symbol.for("lit-nothing"),J=new WeakMap,G=P.createTreeWalker(P,129);function Q(e,t){if(!j(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const n=e.length-1,o=[];let r,i=2===t?"<svg>":3===t?"<math>":"",a=U;for(let t=0;t<n;t++){const n=e[t];let s,l,c=-1,d=0;for(;d<n.length&&(a.lastIndex=d,l=a.exec(n),null!==l);)d=a.lastIndex,a===U?"!--"===l[1]?a=z:void 0!==l[1]?a=D:void 0!==l[2]?(H.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=R):void 0!==l[3]&&(a=R):a===R?">"===l[0]?(a=r??U,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,s=l[1],a=void 0===l[3]?R:'"'===l[3]?F:V):a===F||a===V?a=R:a===z||a===D?a=U:(a=R,r=void 0);const u=a===R&&e[t+1].startsWith("/>")?" ":"";i+=a===U?n+I:c>=0?(o.push(s),n.slice(0,c)+M+n.slice(c)+T+u):n+T+(-2===c?t:u)}return[Q(e,i+(e[n]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class ee{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,i=0;const a=e.length-1,s=this.parts,[l,c]=Z(e,t);if(this.el=ee.createElement(l,n),G.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=G.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(M)){const t=c[i++],n=o.getAttribute(e).split(T),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:n,ctor:"."===a[1]?ie:"?"===a[1]?ae:"@"===a[1]?se:re}),o.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(H.test(o.tagName)){const e=o.textContent.split(T),t=e.length-1;if(t>0){o.textContent=L?L.emptyScript:"";for(let n=0;n<t;n++)o.append(e[n],O()),G.nextNode(),s.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===B)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(T,e+1));)s.push({type:7,index:r}),e+=T.length-1}r++}}static createElement(e,t){const n=P.createElement("template");return n.innerHTML=e,n}}function te(e,t,n=e,o){if(t===K)return t;let r=void 0!==o?n._$Co?.[o]:n._$Cl;const i=q(t)?void 0:t._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),void 0===i?r=void 0:(r=new i(e),r._$AT(e,n,o)),void 0!==o?(n._$Co??=[])[o]=r:n._$Cl=r),void 0!==r&&(t=te(e,r._$AS(e,t.values),r,o)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,o=(e?.creationScope??P).importNode(t,!0);G.currentNode=o;let r=G.nextNode(),i=0,a=0,s=n[0];for(;void 0!==s;){if(i===s.index){let t;2===s.type?t=new oe(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new le(r,this,e)),this._$AV.push(t),s=n[++a]}i!==s?.index&&(r=G.nextNode(),i++)}return G.currentNode=P,o}p(e){let t=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=X,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=te(this,e,t),q(e)?e===X||null==e||""===e?(this._$AH!==X&&this._$AR(),this._$AH=X):e!==this._$AH&&e!==K&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>j(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==X&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=ee.createElement(Q(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new ne(o,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=J.get(e.strings);return void 0===t&&J.set(e.strings,t=new ee(e)),t}k(e){j(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,o=0;for(const r of e)o===t.length?t.push(n=new oe(this.O(O()),this.O(O()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=X,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=X}_$AI(e,t=this,n,o){const r=this.strings;let i=!1;if(void 0===r)e=te(this,e,t,0),i=!q(e)||e!==this._$AH&&e!==K,i&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=te(this,o[n+a],t,a),s===K&&(s=this._$AH[a]),i||=!q(s)||s!==this._$AH[a],s===X?e=X:e!==X&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}i&&!o&&this.j(e)}j(e){e===X?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===X?void 0:e}}class ae extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==X)}}class se extends re{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=te(this,e,t,0)??X)===K)return;const n=this._$AH,o=e===X&&n!==X||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==X&&(n===X||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class le{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){te(this,e)}}const ce=S.litHtmlPolyfillSupport;ce?.(ee,oe),(S.litHtmlVersions??=[]).push("3.2.1");const de=(e,t,n)=>{const o=n?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=n?.renderBefore??null;o._$litPart$=r=new oe(t.insertBefore(O(),e),e,void 0,n??{})}return r._$AI(e),r};class ue extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=de(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}}ue._$litElement$=!0,ue.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ue});const pe=globalThis.litElementPolyfillSupport;pe?.({LitElement:ue}),(globalThis.litElementVersions??=[]).push("4.1.1")},880:(e,t,n)=>{n.d(t,{N$:()=>i,R:()=>r,cH:()=>a});var o=n(716);function r(e){let t="";const n=e._hass.states[e.config.entity],o=n.attributes.hvac_action,r=n.state,i="heating"===o||"heat"===r&&e.config.state_color,a="cooling"===o||"cool"===r&&e.config.state_color,s="off"!==r&&"unknown"!==r;switch(r){case"fan_only":t="var(--bubble-state-climate-fan-only-color, var(--state-climate-fan-only-color, var(--state-climate-active-color, var(--state-active-color))))";break;case"dry":t="var(--bubble-state-climate-dry-color, var(--state-climate-dry-color, var(--state-climate-active-color, var(--state-active-color))))";break;default:t=a?"var(--bubble-state-climate-cool-color, var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color))))":i?"var(--bubble-state-climate-heat-color, var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color))))":s&&e.config.state_color?"auto"===r?"var(--bubble-state-climate-auto-color, var(--state-climate-auto-color, var(--state-climate-active-color, var(--state-active-color))))":"heat_cool"===r?"var(--bubble-state-climate-heat-cool-color, var(--state-climate-heat-cool-color, var(--state-climate-active-color, var(--state-active-color))))":"var(--bubble-climate-accent-color, var(--bubble-accent-color, var(--accent-color)))":""}return t}function i(e,t){const n=e._hass,o=n?.states?.[e.config.entity],r="°C"===n?.config?.unit_system?.temperature,i=t??e.config.step??o?.attributes?.target_temp_step??(r?.5:1);return Number.isInteger(Number(i))?0:1}function a(e,t,n){const r=i(t,n),a=(0,o.$z)(t._hass),s=t._hass?.locale?.language||"en-US";return(0,o.IU)(e,r,a,s)}},314:(e,t,n)=>{n.d(t,{Uk:()=>c,iJ:()=>b,m9:()=>u,wd:()=>d,zQ:()=>p});var o=n(716),r=n(216),i=n(388),a=n(880),s=n(140);const l=.6;function c(e){const t=e.config?.entity,n=e.card,i=e._hass.states[t],a=(0,o.D$)(e,e.config.attribute,t),s=i?.last_changed,l=i?.last_updated,d="state"===e.config.button_type,u=e.config.show_name??!0,p=e.config.show_icon??!0,b=e.config.show_state??d,h=e.config.show_attribute??d,m=e.config.show_last_changed??!1,g=e.config.show_last_updated??!1,f=e.config.scrolling_effect??!0,y=e.previousConfig||{};if(e.previousState===i&&e.previousAttribute===a&&e.previousLastChanged===s&&e.previousLastUpdated===l&&y.showName===u&&y.showIcon===p&&y.showState===b&&y.showAttribute===h&&y.showLastChanged===m&&y.showLastUpdated===g&&y.scrollingEffect===f)return;const v=(0,o.Vw)(t);let _="";if(i&&b)if(v){const n=(0,o.ls)(i);_=(0,o.PF)(e._hass,i,n)||"","active"===i.state?(0,o.HD)(e,t,(()=>{const n=e._hass.states[t];n&&"active"===n.state?(e.previousState=null,c(e)):(0,o.bE)(e)})):(0,o.bE)(e)}else _=e._hass.formatEntityState(i),(0,o.bE)(e);else v&&(0,o.bE)(e);let w="",x="",k="",C="";function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A(e,t,n,o=!0){if(null==e)return"";const r=parseFloat(e);if(isNaN(r))return e;let i=0===r?"0":r.toFixed(t);return o&&(i=i.replace(/\.0$/,"")),i+" "+n}if(h&&a)if(e.config.attribute.includes("forecast")){const t="°C"===e._hass.config.unit_system.temperature,n="km"===e._hass.config.unit_system.length;w=e.config.attribute.includes("temperature")?i?A(a,1,t?"°C":"°F"):"":e.config.attribute.includes("humidity")?i?A(a,0,"%",!1):"":e.config.attribute.includes("precipitation")?i?A(a,1,"mm"):"":e.config.attribute.includes("wind_speed")?i?A(a,1,n?"km/h":"mph"):"":i?a:""}else w=i?e.config.attribute.includes("[")?a:e._hass.formatEntityAttributeValue(i,e.config.attribute)??a:"";m&&i&&(x=i?$((0,o.r6)(s,e._hass.locale.language)):""),g&&i&&(k=i?$((0,o.r6)(l,e._hass.locale.language)):""),C=[_,w,x,k].filter(Boolean).join(" • "),e.elements.name.classList.toggle("hidden",!u),e.elements.iconContainer.classList.toggle("hidden",!p),e.elements.nameContainer.classList.toggle("name-without-icon",!p),e.elements.state.classList.toggle("state-without-name",(b||m||g||h)&&!u),e.elements.state.classList.toggle("display-state",b||m||g||h),e.elements.state.classList.toggle("hidden",!(b||m||g||h)),(0,r.N)(e,e.elements.state,C),t===e.config.entity&&!i?.attributes?.unit_of_measurement?.includes("°")&&i&&((0,o.$C)(e,t)?n.classList.contains("is-on")||(n.classList.remove("is-off"),n.classList.add("is-on")):n.classList.contains("is-off")||(n.classList.remove("is-on"),n.classList.add("is-off"))),e.previousState=i,e.previousAttribute=a,e.previousConfig={showName:u,showIcon:p,showState:b,showAttribute:h,showLastChanged:m,showLastUpdated:g,scrollingEffect:f}}function d(e){const t=e.config.card_type,n=e.config.button_type,r=(0,o.$C)(e),c=(0,o.md)(e,"climate"),d=(0,i.sW)(e),u=(0,i.Qp)(e),p=e.elements.iconContainer?.style.color,b=e.elements.image?.style.backgroundImage,h=e.elements.icon?.icon,m=e.elements.icon?.style.display,g=e.elements.image?.style.display;let f="inherit";r&&"name"!==n&&("pop-up"!==t||n)&&(f=c?(0,a.R)(e):`var(--bubble-icon-color, ${(0,i.VA)(e)})`);const y=r||""!==u?f:function(e,t){if(!e)return t;const n="inherit"===t?"":t;return e.style.color!==n&&(e.style.color=n),(0,s.Bz)(window.getComputedStyle(e).color,l)}(e.elements.icon,f),v="inherit"===y?"":y;if(e.elements.iconContainer&&("inherit"!==f?p!==f&&(e.elements.iconContainer.style.color=f):""!==p&&(e.elements.iconContainer.style.color="")),""!==u){const t=`url(${u})`;b!==t&&(e.elements.image.style.backgroundImage=t),"none"!==m&&(e.elements.icon.style.display="none"),""!==g&&(e.elements.image.style.display="")}else""!==d?(h!==d&&(e.elements.icon.icon=d),e.elements.icon.style.color!==v&&(e.elements.icon.style.color=v),""!==m&&(e.elements.icon.style.display=""),"none"!==g&&(e.elements.image.style.display="none")):("none"!==m&&(e.elements.icon.style.display="none"),"none"!==g&&(e.elements.image.style.display="none"));e.elements.icon?.getAttribute("icon")!==e.elements.icon?.icon&&e.elements.icon.setAttribute("icon",e.elements.icon.icon)}function u(e,t=!0){const n="name"!==e.config.button_type?(0,o.mG)(e):e.config.name;e.elements.name&&(t?(0,r.N)(e,e.elements.name,n):n!==e.previousName&&(e.elements.name.innerText=n),e.previousName=n)}function p(e){"unavailable"===(0,o.Gu)(e)?e.card.classList.add("is-unavailable"):e.card.classList.remove("is-unavailable")}function b(e){const t=e?.elements?.cardWrapper,n=e?.elements?.subButtonContainer;if(!t&&!n)return;const o=e?.config?.sub_button,r=e?.config?.main_buttons_position||"default";let i=!1,a=!1;if(o)if(Array.isArray(o))for(const e of o){if(e&&Array.isArray(e.buttons)){const t=e.position||"top";"bottom"===t?i=!0:"top"===t&&(a=!0)}if(i&&a)break}else{const e=Array.isArray(o.main)?o.main:[],t=Array.isArray(o.bottom)?o.bottom:[];for(const t of e)if(t&&Array.isArray(t.group)){a=!0;break}for(const e of t)if(e){if(Array.isArray(e.group)){i=!0;break}i=!0;break}}const s="bottom"===r;i||s?(t&&t.classList.add("fixed-top"),n&&n.classList.add("fixed-top")):(t&&t.classList.remove("fixed-top"),n&&n.classList.remove("fixed-top"));const l=e?.elements?.bottomSubButtonContainer;if(l&&s){const t=e?.elements?.buttonsContainer;t?t.classList.contains("hidden")||"none"===t.style.display||"none"===getComputedStyle(t).display?l.classList.remove("with-main-buttons-bottom"):l.classList.add("with-main-buttons-bottom"):l.classList.remove("with-main-buttons-bottom")}}},653:(e,t,n)=>{n.d(t,{N0:()=>d,KQ:()=>p,iJ:()=>u.iJ});var o=n(716),r=n(642),i=n(345),a=n(391);n(772);var s=n(175);const l="/* 'card-type' in CSS variables is replaced with the real card type \r\n   in card-structure.js for easier maintenance */\r\n\r\n* {\r\n    -webkit-tap-highlight-color: transparent !important;\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n\r\n    -webkit-user-select: none; /* Safari */\r\n    -ms-user-select: none; /* IE 10 and IE 11 */\r\n    user-select: none; /* Standard syntax */\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n}\r\n\r\nha-card {\r\n    background: none;\r\n    opacity: 1;\r\n}\r\n\r\n.scrolling-container {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\r\n    -webkit-mask-image: linear-gradient(to right, transparent, black 8px, black calc(100% - 8px), transparent);\r\n    overflow: hidden;\r\n    contain: content;\r\n}\r\n\r\n.scrolling-container span {\r\n    display: inline-block;\r\n    animation-name: bubble-scroll;\r\n    animation-timing-function: linear;\r\n    animation-iteration-count: infinite;\r\n    animation-play-state: paused;\r\n    will-change: transform;\r\n}\r\n\r\n.bubble-scroll-separator {\r\n    opacity: .3;\r\n    margin: 0 6px 0 8px;\r\n}\r\n\r\n@keyframes bubble-scroll {\r\n    from { transform: translateX(0); }\r\n    to { transform: translateX(-50%); }\r\n}\r\n/* End of scrolling styles */\r\n\r\n.bubble-container {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 50px;\r\n    background-color: var(--bubble-card-type-main-background-color, var(--bubble-main-background-color, var(--background-color-2, var(--secondary-background-color))));\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    box-shadow: var(--bubble-card-type-box-shadow, var(--bubble-box-shadow, none));\r\n    overflow: hidden;\r\n    touch-action: auto;\r\n    border: var(--bubble-card-type-border, var(--bubble-border, none));\r\n    box-sizing: border-box;\r\n    -webkit-transform: translateZ(0); /* Fix slider rendering issues on Safari on older devices */\r\n}\r\n\r\n.bubble-wrapper {\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    transition: all 1.5s;\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: rgba(0,0,0,0);\r\n    overflow: visible;\r\n}\r\n\r\n.bubble-wrapper.fixed-top {\r\n    align-items: baseline;\r\n}\r\n\r\n.bubble-content-container {\r\n    display: contents;\r\n}\r\n\r\n.bubble-wrapper.fixed-top .bubble-content-container {\r\n    display: flex;\r\n    align-items: center;\r\n    align-self: flex-start;\r\n    overflow: hidden;\r\n    flex-grow: 1;\r\n    margin-top: 1px;\r\n    min-height: 54px;\r\n}\r\n\r\n.bubble-content-container.fixed-bottom {\r\n    display: flex;\r\n    align-self: flex-end;\r\n}\r\n\r\n.bubble-buttons-container {\r\n    --icon-primary-color: var(--primary-text-color);\r\n    display: flex;\r\n    margin-right: 8px;\r\n    gap: 4px;\r\n}\r\n\r\n.fixed-top .bubble-buttons-container {\r\n    margin-top: 10px;\r\n}\r\n\r\n.bubble-buttons-container.bottom-fixed {\r\n    position: absolute;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 8px;\r\n    padding: 0 8px;\r\n    box-sizing: border-box;\r\n    width: 100%;\r\n}\r\n\r\n.full-width > .bubble-button,\r\n.full-width > .bubble-media-button {\r\n    width: 100% !important;\r\n    background-color: var(--bubble-main-buttons-background-color, var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))));\r\n}\r\n\r\n.bubble-buttons-container.bottom-fixed.align-start {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-buttons-container.bottom-fixed.align-center {\r\n    justify-content: center;\r\n}\r\n\r\n.bubble-buttons-container.bottom-fixed.align-end {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.bubble-buttons-container.bottom-fixed.align-space-between {\r\n    justify-content: space-between;\r\n}\r\n\r\n.bubble-background {\r\n    display: flex;\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    transition: background-color 1.5s;\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\r\n    mask-image: radial-gradient(circle, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);\r\n    /* Optimize repaints on Safari for color transitions */\r\n    -webkit-transform: translateZ(0);\r\n    transform: translateZ(0);\r\n}\r\n\r\n.bubble-icon-container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n    justify-content: center;\r\n    min-width: 38px;\r\n    min-height: 38px;\r\n    margin: 6px;\r\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n    background-color: var(--bubble-card-type-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-icon-feedback-container {\r\n    border-radius: var(--bubble-card-type-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n    overflow: hidden !important;\r\n}\r\n\r\n.bubble-main-icon {\r\n    transition: all .3s ease-in-out;\r\n}\r\n\r\n.is-on .bubble-main-icon {\r\n  /* filter: brightness(1.1); */\r\n  opacity: 1;\r\n}\r\n\r\n.bubble-entity-picture {\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n}\r\n\r\n.bubble-name,\r\n.bubble-state {\r\n    display: flex;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bubble-name-container {\r\n    display: flex;\r\n    line-height: 18px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    margin: 0 16px 0 4px;\r\n    pointer-events: none;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-name {\r\n    font-size: 13px;\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-state {\r\n    font-size: 12px;\r\n    font-weight: normal;\r\n    opacity: 0.7;\r\n}\r\n\r\n.is-unavailable .bubble-wrapper {\r\n    cursor: not-allowed;\r\n}\r\n\r\n.is-unavailable .bubble-buttons-container {\r\n    display: none;\r\n}\r\n\r\n.is-unavailable {\r\n    opacity: 0.5;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n.state-without-name {\r\n    opacity: 1;\r\n    font-size: 14px;\r\n}\r\n\r\n.name-without-icon {\r\n    margin-left: 16px;\r\n}\r\n\r\n.display-state {\r\n    display: flex;\r\n}\r\n\r\n.bubble-action-enabled {\r\n    cursor: pointer;\r\n}\r\n\r\n.large .bubble-container {\r\n    height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\r\n    border-radius: var(--bubble-card-type-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n}\r\n\r\n.large .bubble-icon-container {\r\n    --mdc-icon-size: 24px;\r\n    min-width: 42px;\r\n    min-height: 42px;\r\n    margin-left: 8px;\r\n} ",c={};function d(e,t={}){e.elements=e.elements||{};const n={...p,appendTo:e.content,iconDefaultActions:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}},buttonDefaultActions:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},baseCardStyles:l,...t};if(n.withMainContainer&&(e.elements.mainContainer=(0,o.n)("div",`bubble-${n.type}-container bubble-container`)),n.withBaseElements&&(e.elements.cardWrapper=(0,o.n)("div",`bubble-${n.type} bubble-wrapper`),e.elements.contentContainer=(0,o.n)("div","bubble-content-container"),e.elements.buttonsContainer=(0,o.n)("div","bubble-buttons-container"),e.elements.iconContainer=(0,o.n)("div","bubble-main-icon-container bubble-icon-container icon-container"),e.elements.icon=(0,o.n)("ha-icon","bubble-main-icon bubble-icon icon"),e.elements.image=(0,o.n)("div","bubble-entity-picture entity-picture"),e.elements.nameContainer=(0,o.n)("div","bubble-name-container name-container"),e.elements.name=(0,o.n)("div","bubble-name name"),e.elements.state=(0,o.n)("div","bubble-state state"),e.elements.iconContainer.append(e.elements.icon,n.withImage?e.elements.image:null),e.elements.nameContainer.append(e.elements.name,n.withState?e.elements.state:null),e.elements.contentContainer.append(e.elements.iconContainer,e.elements.nameContainer),e.elements.cardWrapper.append(e.elements.contentContainer,e.elements.buttonsContainer),n.withBackground&&(e.elements.background=(0,o.n)("div","bubble-background"),e.elements.cardWrapper.prepend(e.elements.background)),e.elements.mainContainer.appendChild(e.elements.cardWrapper),n.withSlider&&(0,i.H)(e,{holdToSlide:n.holdToSlide,readOnlySlider:n.readOnlySlider})),n.styles&&(c[n.type]||(c[n.type]=n.baseCardStyles.replace(/card-type/g,n.type)),e.elements.style=(0,o.n)("style"),e.elements.style.textContent=c[n.type]+n.styles,e.elements.mainContainer.appendChild(e.elements.style)),n.withCustomStyle&&(e.elements.customStyle=(0,o.n)("style"),e.elements.mainContainer.appendChild(e.elements.customStyle)),n.withSubButtons&&((0,a.gS)(e,{container:n.appendTo,appendTo:e.elements.cardWrapper??e.elements.mainContainer,before:!1}),e.elements.buttonsContainer&&e.elements.cardWrapper.appendChild(e.elements.buttonsContainer)),e.elements.mainContainer){const t=(0,s.mg)(e.config),n=Array.isArray(t.bottom)&&t.bottom.length>0,o="bottom"===e.config?.main_buttons_position;(n||o)&&e.elements.mainContainer.classList.add("with-bottom-buttons")}let d,u;!0===n.iconActions?d=n.iconDefaultActions:"object"==typeof n.iconActions&&(d=n.iconActions),!0===n.buttonActions?u=n.buttonDefaultActions:"object"==typeof n.buttonActions&&(u=n.buttonActions);let b={has_action:!1};e.elements.iconContainer&&(b=(0,r.dN)(e.elements.iconContainer,e.config,e.config.entity,d));let h={has_action:!1};return!1!==n.buttonActions&&e.elements.background&&(h=(0,r.dN)(e.elements.background,e.config.button_action,e.config.entity,u)),b.has_action&&e.elements.iconContainer&&(e.elements.iconFeedbackContainer=(0,o.n)("div","bubble-icon-feedback-container bubble-feedback-container"),e.elements.iconContainer.appendChild(e.elements.iconFeedbackContainer),e.elements.iconFeedback=(0,o.n)("div","bubble-icon-feedback bubble-feedback-element feedback-element"),e.elements.iconFeedback.style.display="none",e.elements.iconFeedbackContainer.appendChild(e.elements.iconFeedback),(0,r.pd)(e.elements.iconContainer,e.elements.iconFeedback)),n.withFeedback&&h.has_action&&e.elements.background&&(e.elements.feedbackContainer=(0,o.n)("div","bubble-feedback-container feedback-container"),e.elements.feedback=(0,o.n)("div","bubble-feedback-element feedback-element"),e.elements.feedback.style.display="none",e.elements.feedbackContainer.append(e.elements.feedback),e.elements.cardWrapper.append(e.elements.feedbackContainer),(0,r.pd)(e.elements.background,e.elements.feedback)),n.appendTo===e.content?e.content.appendChild(e.elements.mainContainer):n.appendTo.appendChild(e.elements.mainContainer),e.elements}var u=n(314);const p={type:"base",appendTo:null,baseCardStyles:null,styles:"",withMainContainer:!0,withBaseElements:!0,withFeedback:!0,withImage:!0,withSlider:!1,holdToSlide:!1,readOnlySlider:!1,withCustomStyle:!0,withState:!0,withBackground:!0,withSubButtons:!1,iconActions:!0,buttonActions:!1}},752:(e,t,n)=>{n.d(t,{O:()=>r});var o=n(531);function r(e,t=e.elements,n=e.config.entity,r){if(t.currentState=e._hass.states[n]?.state,!t.currentState)return;t.currentList=n?.startsWith("input_select")||n?.startsWith("select")?e._hass.states[n].attributes.options:e._hass.states[n].attributes[r.select_attribute],t.currentSelectedAttribute=(0,o.aX)(e._hass.states[n],r.select_attribute);const i=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}(t.previousList,t.currentList);if(i&&t.previousState===t.currentState&&t.previousSelectedAttribute===t.currentSelectedAttribute)return;const a=(0,o.ax)(e?._hass),s=a?"ha-dropdown-item":"mwc-list-item";let l=t.currentList;if(i&&Array.isArray(t.currentList)){const e=t.dropdownSelect.querySelectorAll(s);if(e&&e.length===t.currentList.length)return e.forEach((e=>{(a?e.dataset.bubbleValue:e.value)===t.currentSelectedAttribute?e.setAttribute("selected",""):e.removeAttribute("selected")})),t.previousSelectedAttribute=t.currentSelectedAttribute,void(t.previousState=t.currentState)}for(;t.dropdownSelect.firstChild;)t.dropdownSelect.removeChild(t.dropdownSelect.firstChild);Array.isArray(l)&&l.forEach((i=>{const l=document.createElement(s);l.value=i,a&&(l.dataset.bubbleValue=i);const c=(0,o.z_)(e,e._hass.states[n],r.select_attribute,i);c&&(a?c.slot="icon":(l.graphic="icon",c.slot="graphic"),l.appendChild(c));const d=(0,o.PW)(e,e._hass.states[n],r.select_attribute,i);l.appendChild(document.createTextNode(d)),i===t.currentSelectedAttribute&&l.setAttribute("selected",""),t.dropdownSelect.appendChild(l)})),t.previousList=Array.isArray(t.currentList)?t.currentList.slice():t.currentList,t.previousState=t.currentState,t.previousSelectedAttribute=t.currentSelectedAttribute,t.dropdownSelect.isConnected||t.dropdownContainer.appendChild(t.dropdownSelect)}},531:(e,t,n)=>{n.d(t,{Ab:()=>c,PW:()=>a,aX:()=>s,ax:()=>i,z_:()=>l});var o=n(716);const r="2026.3.0";function i(e){return e?.config?.version?(0,o._0)(e,r):!!customElements.get("ha-picker-field")}function a(e,t,n,o){function r(e){const t=e.replace(/_/g," ");return t.charAt(0).toUpperCase()+t.slice(1)}switch(n){case"fan_modes":return e._hass.formatEntityAttributeValue(t,"fan_mode",o);case"hvac_modes":return e._hass.formatEntityState(t,o);case"swing_modes":return e._hass.formatEntityAttributeValue(t,"swing_mode",o);case"preset_modes":return e._hass.formatEntityAttributeValue(t,"preset_mode",o);default:return r(e._hass.formatEntityState(t,o))??r(o)}}function s(e,t){switch(t){case"fan_modes":return e.attributes.fan_mode||null;case"swing_modes":return e.attributes.swing_mode||null;case"preset_modes":return e.attributes.preset_mode||null;case"effect_list":return e.attributes.effect||null;case"source_list":return e.attributes.source||null;case"sound_mode_list":return e.attributes.sound_mode||null;default:return e.state}}function l(e,t,n,o){let r;switch(n){case"hvac_modes":r=document.createElement("ha-icon"),r.slot="graphic",r.icon=function(e){switch(e){case"auto":return"mdi:thermostat-auto";case"cool":return"mdi:snowflake";case"heat":return"mdi:fire";case"heat_cool":return"mdi:sun-snowflake-variant";case"dry":return"mdi:water-percent";case"fan_only":default:return"mdi:fan";case"off":return"mdi:power"}}(o);break;case"fan_modes":if(!t.attributes.fan_modes)return null;r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="fan_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;case"swing_modes":r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="swing_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;case"preset_modes":r=document.createElement("ha-attribute-icon"),r.slot="graphic",r.attribute="preset_mode",r.attributeValue=o,r.hass=e._hass,r.stateObj=t;break;default:r=!1}return r}function c(e,t,n,o){const r=t?.split(".")[0];switch(r){case"input_select":e._hass.callService("input_select","select_option",{entity_id:t,option:n});break;case"select":e._hass.callService("select","select_option",{entity_id:t,option:n});break;case"climate":switch(o.select_attribute){case"hvac_modes":e._hass.callService("climate","set_hvac_mode",{entity_id:t,hvac_mode:n});break;case"fan_modes":e._hass.callService("climate","set_fan_mode",{entity_id:t,fan_mode:n});break;case"swing_modes":e._hass.callService("climate","set_swing_mode",{entity_id:t,swing_mode:n});break;case"preset_modes":e._hass.callService("climate","set_preset_mode",{entity_id:t,preset_mode:n})}break;case"fan":"preset_modes"===o.select_attribute&&e._hass.callService("fan","set_preset_mode",{entity_id:t,preset_mode:n});break;case"light":"effect_list"===o.select_attribute&&e._hass.callService("light","turn_on",{entity_id:t,effect:n});break;case"media_player":switch(o.select_attribute){case"source_list":e._hass.callService("media_player","select_source",{entity_id:t,source:n});break;case"sound_mode_list":e._hass.callService("media_player","select_sound_mode",{entity_id:t,sound_mode:n})}break;default:console.warn(`Unsupported entity type: ${r}`)}}},361:(e,t,n)=>{n.d(t,{XO:()=>d,Fi:()=>c});var o=n(716),r=n(531);const i="/* =====================================================================\r\n   OLD HA frontend (mwc/MDC-based ha-select)\r\n   These styles are injected into ha-select's shadow DOM and the container.\r\n   On new HA they are no-ops (target elements that no longer exist).\r\n   ===================================================================== */\r\n\r\nmwc-list-item {\r\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px));\r\n    margin: 0 8px;\r\n}\r\n\r\nmwc-list-item[selected] {\r\n    color: var(--primary-text-color) !important;\r\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))); /* Added the missing 'select' in the first var without removing the previous one for compatibilty */ \r\n}\r\n\r\nha-select {\r\n    --mdc-shape-medium: var(--bubble-select-list-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    --mdc-theme-surface: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\r\n    --mdc-shape-large: 32px;\r\n    --mdc-shape-small: 64px;\r\n    --mdc-menu-max-width: min-content;\r\n    --mdc-menu-min-width: var(--bubble-select-list-width, 200px);\r\n    --mdc-select-max-width: min-content;\r\n    --mdc-select-outlined-hover-border-color: transparent;\r\n    --mdc-select-outlined-idle-border-color: transparent;\r\n    --mdc-theme-primary: transparent;\r\n    --right-value: calc(var(--mdc-menu-min-width) - 160px);\r\n}\r\n\r\n.bubble-sub-button ha-select {\r\n    --right-value: calc(var(--mdc-menu-min-width) - 168px);\r\n}\r\n\r\n.mdc-select {\r\n    color: transparent !important;\r\n    width: 150px !important;\r\n    position: absolute !important;\r\n    pointer-events: none;\r\n    right: var(--right-value, 46px);\r\n    height: 0px !important;\r\n}\r\n\r\n.mdc-select.bubble-open-right {\r\n    right: auto;\r\n    left: calc(var(--right-value, 46px) - 58px);\r\n}\r\n\r\n.mdc-menu, mwc-list, .mdc-list-item {\r\n    pointer-events: auto;\r\n}\r\n\r\n/* Hide old HA dropdown scrollbars while keeping scroll behavior */\r\n.mdc-menu,\r\nmwc-list {\r\n    scrollbar-width: none;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\n.mdc-menu::-webkit-scrollbar,\r\nmwc-list::-webkit-scrollbar {\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.mdc-select__dropdown-icon {\r\n    display: none !important;\r\n}\r\n\r\n.mdc-select__selected-text {\r\n    color: transparent !important;\r\n}\r\n\r\n.mdc-select__anchor {\r\n    width: 100%;\r\n    pointer-events: none;\r\n    top: -14px !important;\r\n    height: 28px !important;\r\n}\r\n\r\n/* =====================================================================\r\n   NEW HA frontend (webawesome-based ha-select with ha-dropdown)\r\n   ha-picker-field styles are injected into ha-select's shadow DOM:\r\n     - hide the native trigger button that would appear behind our arrow\r\n     - configure ha-dropdown's menu appearance\r\n   ha-dropdown-item styles are applied in the container's light DOM scope.\r\n   On old HA these are no-ops (target elements that do not exist).\r\n   ===================================================================== */\r\n\r\n/* Hide the ha-picker-field trigger but keep it for popup anchor positioning */\r\nha-picker-field {\r\n    position: absolute !important;\r\n    top: 0 !important;\r\n    left: 0 !important;\r\n    width: 100% !important;\r\n    height: 100% !important;\r\n    opacity: 0 !important;\r\n    pointer-events: none !important;\r\n}\r\n\r\n/* Constrain ha-select host so it matches our arrow button size */\r\n:host(.bubble-dropdown-select) {\r\n    height: 36px !important;\r\n    overflow: visible !important;\r\n}\r\n\r\n/* ha-dropdown: menu background color (via webawesome surface token) */\r\nha-dropdown {\r\n    --wa-color-surface-raised: var(--bubble-select-list-background-color, var(--bubble-select-main-background-color, var(--bubble-main-background-color, var(--card-background-color, var(--secondary-background-color)))));\r\n}\r\n\r\n/* ha-dropdown menu panel: match old mwc-menu appearance */\r\nha-dropdown::part(menu) {\r\n    border: none !important;\r\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 32px)) !important;\r\n    min-width: var(--bubble-select-list-width, 200px) !important;\r\n    padding: 8px 0 !important;\r\n    scrollbar-width: none;\r\n    -ms-overflow-style: none;\r\n}\r\n\r\nha-dropdown::part(menu)::-webkit-scrollbar {\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n/* ha-dropdown-item: match old mwc-list-item dimensions and spacing (light DOM scope) */\r\nha-dropdown-item {\r\n    /* Match old mwc-list-item min-height */\r\n    min-height: 48px !important;\r\n    border-radius: var(--bubble-select-list-border-radius, var(--bubble-border-radius, 24px)) !important;\r\n    margin: 0 8px;\r\n    overflow: hidden;\r\n    /* Suppress any default webawesome border on items */\r\n    border: none !important;\r\n    outline: none !important;\r\n    /* Explicitly re-enable pointer events: the container has pointer-events:none,\r\n       but CSS spec allows descendants with an explicit value to still be targets */\r\n    pointer-events: auto;\r\n}\r\n\r\n/* Keep the initial programmatic focus from looking like a stuck hover state. */\r\nha-dropdown-item:not([selected]):focus:not(:hover) {\r\n    background-color: transparent !important;\r\n}\r\n\r\nha-dropdown-item[selected]:focus:not(:hover) {\r\n    background-color: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))) !important;\r\n}\r\n\r\n/* ha-dropdown-item selected state: match old mwc-list-item[selected] appearance */\r\nha-dropdown-item[selected] {\r\n    /* Override primary color (used for text/icons) to match HA primary text */\r\n    --primary-color: var(--primary-text-color);\r\n    /* Override background fill to use the Bubble Card accent color */\r\n    --ha-color-fill-primary-quiet-resting: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color))));\r\n    --ha-color-fill-primary-quiet-hover: var(--bubble-select-list-item-accent-color, var(--bubble-list-item-accent-color, var(--bubble-accent-color, var(--bubble-default-color))));\r\n}\r\n\r\n/* =====================================================================\r\n   Shared styles (apply to both old and new HA)\r\n   ===================================================================== */\r\n\r\n.bubble-dropdown-container {\r\n    display: flex !important;\r\n    position: relative;\r\n    pointer-events: none;\r\n    width: auto;\r\n    align-self: center;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.bubble-dropdown-arrow {\r\n    display: flex;\r\n    position: absolute;\r\n    background: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n    height: 36px;\r\n    width: 36px;\r\n    pointer-events: none;\r\n    border-radius: var(--bubble-select-button-border-radius, var(--bubble-border-radius, 20px));\r\n    align-items: center;\r\n    justify-content: center;\r\n    transition: background 0.2s, transform 0.2s;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-dropdown-select {\r\n    position: relative;\r\n    width: 36px;\r\n}\r\n\r\n.bubble-dropdown-inner-border {\r\n    display: none;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    border: var(--bubble-select-border, solid 2px var(--bubble-accent-color, var(--bubble-default-color)));\r\n    border-radius: var(--bubble-border-radius, 28px);\r\n    box-sizing: border-box;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-sub-button .bubble-dropdown-inner-border,\r\n.bubble-sub-button-group .bubble-dropdown-inner-border {\r\n    border-radius: var(--bubble-border-radius, 18px);\r\n}\r\n",a=200,s=40;function l(e,t){if(!e?.shadowRoot||!t)return;const n=e.shadowRoot.querySelector(".mdc-select");!function(e){if(!e)return!1;const t=e.getBoundingClientRect().left,n=function(e){let t=e;for(;t;){const e=t.closest?.(".bubble-pop-up-container");if(e)return e;const n=t.getRootNode?.();if(!(n instanceof ShadowRoot))break;t=n.host}return null}(e);if(!n)return t<a-s;const o=n.getBoundingClientRect(),r=parseFloat(getComputedStyle(n).paddingLeft)||0;return t-o.left-r<a-s}(t)?(n?.classList.remove("bubble-open-right"),t.classList.remove("bubble-open-right")):(n?.classList.add("bubble-open-right"),t.classList.add("bubble-open-right"))}function c(e,t=e.elements,n){t.dropdownContainer=t.dropdownContainer||(0,o.n)("div","bubble-dropdown-container"),t.dropdownSelect=t.dropdownSelect||(0,o.n)("ha-select","bubble-dropdown-select"),t.dropdownSelect.setAttribute("outlined",""),t.dropdownArrow=t.dropdownArrow||(0,o.n)("ha-icon","bubble-dropdown-arrow"),t.dropdownArrow.setAttribute("icon","mdi:chevron-down"),t.dropdownStyleElement=t.dropdownStyleElement||(0,o.n)("style"),t.dropdownCustomStyleElement=t.dropdownCustomStyleElement||(0,o.n)("style"),t._dropdownShadowStylesInitialized||(t.dropdownStyleElement.textContent=i,t._dropdownShadowStylesInitialized=!0),t.dropdownContainerStyle=t.dropdownContainerStyle||(0,o.n)("style"),t._dropdownContainerStyleInitialized||(t.dropdownContainerStyle.textContent=i,t._dropdownContainerStyleInitialized=!0),t.dropdownArrow.isConnected||t.dropdownContainer.appendChild(t.dropdownArrow),t.dropdownContainerStyle.isConnected||t.dropdownContainer.appendChild(t.dropdownContainerStyle),t.dropdownSelect.updateComplete.then((()=>{!function(){if(t.dropdownSelect.shadowRoot){const o=t.dropdownSelect.shadowRoot;t.dropdownStyleElement&&!t.dropdownStyleElement.isConnected&&o.appendChild(t.dropdownStyleElement),t.dropdownCustomStyleElement&&!t.dropdownCustomStyleElement.isConnected&&o.appendChild(t.dropdownCustomStyleElement),(0,r.ax)(e?._hass)||(n=o.querySelector("ha-menu.mdc-select__menu"))&&(n.addEventListener("opened",(()=>{setTimeout((()=>{n.removeAttribute("open"),n.style.display=""}),0)}),{once:!0}),n.style.display="none",n.setAttribute("open",""))}var n}()})),t===e.elements?t.buttonsContainer.appendChild(t.dropdownContainer):t.appendChild(t.dropdownContainer)}function d(e,t=e.elements,n=e.config.entity,i=e.config){const{dropdownArrow:a,dropdownSelect:s,mainContainer:c,background:d}=t,u=t===e.elements?c:t,p=t===e.elements?d:t,b=(0,r.ax)(e?._hass);"function"==typeof t.dropdownCleanup&&t.dropdownCleanup(),t.innerBorderElement?t.innerBorderElement.isConnected||u.appendChild(t.innerBorderElement):(t.innerBorderElement=(0,o.n)("div"),t.innerBorderElement.classList.add("bubble-dropdown-inner-border"),u.appendChild(t.innerBorderElement)),u.haRipple||(u.haRipple=(0,o.n)("ha-ripple")),u.haRipple.isConnected||(t===e.elements?t.background.appendChild(u.haRipple):u.appendChild(u.haRipple));const h=e.elements.mainContainer;h&&void 0===h.openDropdowns&&(h.openDropdowns=0);let m=!1,g=null,f=0;const y=t===e.elements?!!(i&&i.button_action&&i.button_action.double_tap_action&&i.button_action.double_tap_action.action&&"none"!==i.button_action.double_tap_action.action):!!(i&&i.double_tap_action&&i.double_tap_action.action&&"none"!==i.double_tap_action.action),v=()=>{a.style.transform="rotate(180deg)",t.dropdownArrow.style.background="var(--bubble-accent-color, var(--bubble-default-color))",t.innerBorderElement&&(t.innerBorderElement.style.display="block"),b&&(s.style.pointerEvents="auto"),e.elements&&e.elements.mainContainer&&(m||(m=!0,h&&h.openDropdowns++),e.elements.mainContainer.style.overflow="visible")},_=()=>{if(b){const e=s.shadowRoot?.querySelector("ha-dropdown");e&&(e.open=!0)}else{const e=s.shadowRoot?.querySelector("ha-menu.mdc-select__menu");if(!e){const e=s.shadowRoot?.querySelector("mwc-menu");return void(e&&(l(s,t.dropdownContainer),e.setAttribute("open","")))}l(s,t.dropdownContainer),e.show()}},w=new AbortController,{signal:x}=w;b&&(s.style.pointerEvents="none"),u.addEventListener("hass-action",(e=>{const t=e?.detail?.action;"double_tap"!==t&&"hold"!==t||("function"==typeof e.composedPath?e.composedPath():[]).includes(p)&&(g&&(clearTimeout(g),g=null),f=Date.now()+300)}),{signal:x});const k=n=>{n.stopPropagation(),a.style.transform="rotate(0deg)",t.innerBorderElement&&(t.innerBorderElement.style.display="none"),t.dropdownArrow.style.background="",b&&(s.style.pointerEvents="none"),e.elements&&e.elements.mainContainer&&(m&&(m=!1,h&&h.openDropdowns--),h&&0===h.openDropdowns&&(e.elements.mainContainer.style.overflow=""))},C=t=>{const o=b?t.detail?.value:t.target?.value;void 0!==o&&(0,r.Ab)(e,n,o,i)};p.addEventListener("click",(e=>{if(!e.target.closest?.("mwc-list-item, ha-dropdown-item"))return m?(g&&(clearTimeout(g),g=null),void(f=Date.now()+200)):void(Date.now()<f||(y?(g&&(clearTimeout(g),g=null),g=setTimeout((()=>{Date.now()<f||(_(),v()),g=null}),220)):(_(),v())))}),{signal:x}),b?s.addEventListener("selected",C,{signal:x}):(s.addEventListener("closed",k,{signal:x}),s.addEventListener("click",C,{signal:x}));let $=null,A=!1;if(b){const e=()=>{if(A)return;const e=s.shadowRoot?.querySelector("ha-dropdown");if(!e)return;$=new AbortController;const{signal:t}=$;e.addEventListener("wa-after-hide",k,{signal:t})};s.shadowRoot?.querySelector("ha-dropdown")?e():s.updateComplete?.then(e)}t.dropdownCleanup=()=>{A=!0,g&&(clearTimeout(g),g=null),w.abort(),$?.abort(),$=null,t.dropdownArrow&&(t.dropdownArrow.style.transform="rotate(0deg)",t.dropdownArrow.style.background=""),t.innerBorderElement&&(t.innerBorderElement.style.display="none"),b&&s&&(s.style.pointerEvents=""),h&&"number"==typeof h.openDropdowns&&m&&(h.openDropdowns=Math.max(0,h.openDropdowns-1),m=!1)}}},459:(e,t,n)=>{n.d(t,{P9:()=>d,VM:()=>u,zU:()=>p});var o=n(716),r=n(388),i=n(371);function a(e,t){if(!e||!e.elements)return;if(e.dragging)return;const n=e.config.entity?.split?.(".")[0],o=e?.config?.light_slider_type||"brightness",r="light"===n&&["hue","saturation","white_temp"].includes(o),a=(0,i.QN)(Math.round(t)),s=function(e){try{if(Number.isFinite(e._lastVisualFillPercentage))return(0,i.el)(e,e._lastVisualFillPercentage);if(e.elements?.rangeFill){const t=function(e){const t=/translate([XY])\(([-\d.]+)%\)/.exec(e||"");if(!t)return null;const[,n,o]=t,r=parseFloat(o);return Number.isFinite(r)?{axis:n,value:r}:null}(e.elements.rangeFill.style.transform);if(t){const n=(0,i.oR)(e),o="top"===n||"bottom"===n?"Y":"X";if(t.axis===o)return(0,i.el)(e,Math.abs(t.value))}}}catch(e){}try{return Math.round((0,i.uo)(e,e.config.entity))}catch(e){return 0}}(e);if(!Number.isFinite(s)||Math.abs(s-a)<.5){if(d(a),u(a,!0),r&&("hue"===o||"saturation"===o)&&"function"==typeof e.updateColorTrackBackground)try{e.updateColorTrackBackground()}catch(e){}return}try{e._sliderAnimRaf&&cancelAnimationFrame(e._sliderAnimRaf)}catch(e){}const l=performance.now(),c=t=>{if(e.dragging)return;const n=Math.min(1,(t-l)/250),i=s+(a-s)*(e=>1-Math.pow(1-e,3))(n);if(d(i),u(i),n<1)e._sliderAnimRaf=requestAnimationFrame(c);else{if(d(a),u(a,!0),r&&("hue"===o||"saturation"===o)&&"function"==typeof e.updateColorTrackBackground)try{e.updateColorTrackBackground()}catch(e){}try{e._sliderAnimRaf=null}catch(e){}}};function d(t){const n=Math.round((0,i.QN)(t));try{if(r&&"function"==typeof e.setColorCursorPosition&&(e.setColorCursorPosition(n),"function"==typeof e.updateColorCursorIndicator))try{e.updateColorCursorIndicator(n)}catch(e){}(0,i.lt)(e,n)}catch(e){}}function u(t,n=!1){if(e.elements?.rangeValue)try{const o=n?(0,i.aJ)(e):(0,i.BG)(e,(0,i.QN)(t));e.elements.rangeValue.textContent!==o&&(e.elements.rangeValue.textContent=o)}catch(e){}}e._sliderAnimRaf=requestAnimationFrame(c)}let s=0,l=!1;function c(){s++,l=!1}function d(e,t,n=!1,o=null){let r=o;r||(e._sliderRectCache&&e._sliderRectCache.frameId===s?r=e._sliderRectCache.rect:(r=e.elements.rangeSlider.getBoundingClientRect(),e._sliderRectCache||(e._sliderRectCache={}),e._sliderRectCache.rect=r,e._sliderRectCache.frameId=s,l||(requestAnimationFrame(c),l=!0)));const a=(0,i.oR)(e),d="top"===a||"bottom"===a,u=d?r?.height??0:r?.width??0;if(u<=0)return(0,i.QN)((0,i.uo)(e,e.config.entity));let p=(t-(d?r.top:r.left))/u*100;p=(0,i.QN)(p),"right"!==a&&"bottom"!==a||(p=100-p);let b=(0,i.el)(e,p);const h=e.config.entity?.split(".")[0];return"light"!==h||!1!==e.config.tap_to_slide&&void 0!==e.config.tap_to_slide||!0===e.config.allow_light_slider_to_0||b<1&&(b=1),b=(0,i.QN)(b),(0,i.lt)(e,b),b}function u(e,t=e.elements.rangeFill,n=e.config.entity){if(e.dragging)return;const s=(0,i.uo)(e,n),l=e._lastSliderPercentage;if(function(e){if(!e.elements?.rangeFill)return;const t=e.config.entity?.split(".")[0],n="light"===t,i=(0,o.$C)(e,e.config.entity),a=n&&"brightness"===(e?.config?.light_slider_type||"brightness"),s=e.config.use_accent_color,l=e._hass?.states?.[e.config.entity],c=(0,r.S1)(l,e.config.entity);e._previousSliderColorSignature,e._previousSliderColorSignature=c;const d=e.elements.rangeFill,u=d.classList.contains("slider-use-light-color"),p=d.classList.contains("slider-use-accent-color"),b=Date.now();if(e._lastSliderStyleChange,e._lastSliderStyleChange=b,i)if(a&&!s){const t="button"===e.config.card_type?e.card?.style.getPropertyValue("--bubble-button-background-color"):e.popUp?.style.getPropertyValue("--bubble-button-background-color"),n=(0,o.C$)(e,e.config.entity,!0,t||null,null);u||(d.classList.remove("slider-use-accent-color"),d.classList.add("slider-use-light-color")),d.style.setProperty("--bubble-slider-fill-color",n)}else p||(d.classList.remove("slider-use-light-color"),d.style.removeProperty("--bubble-slider-fill-color"),d.classList.add("slider-use-accent-color"));else(u||p)&&(d.classList.remove("slider-use-light-color","slider-use-accent-color"),d.style.removeProperty("--bubble-slider-fill-color"));if("function"==typeof e.syncSliderValuePosition)try{e.syncSliderValuePosition()}catch(e){}}(e),void 0!==l&&Math.abs(l-s)<.01)return;e._lastSliderPercentage=s;const c=n?.split?.(".")[0];if("light"===c&&["hue","saturation","white_temp"].includes(e?.config?.light_slider_type||"brightness")&&e.elements?.colorCursor)return void a(e,s);const d=void 0===l,u=void 0!==l&&Math.abs(l-s)>5;if(d||u){const t=Math.round((0,i.QN)(s));try{if((0,i.lt)(e,t),e.elements?.rangeValue){const t=(0,i.aJ)(e);e.elements.rangeValue.textContent!==t&&(e.elements.rangeValue.textContent=t)}}catch(e){}}else a(e,s)}function p(e,t){const n=e._hass.states[e.config.entity];if(!n)return;const r=e.config.entity.split(".")[0],a=(0,i.nZ)(e,n),s=(0,i.BJ)(e,n),l=(0,i.et)(e,n);let c=(0,i.lY)(t,a,s),d=(0,i.y$)(c,l);d=Math.max(a,Math.min(s,d));const u=s-a,p=u>0?(0,i.QN)((d-a)/u*100):0;switch(r){case"light":{const n=e?.config?.light_slider_type||"brightness";if("hue"===n||"saturation"===n){const t=e._hass.states[e.config.entity]?.attributes?.hs_color||[],o=parseFloat(t[0])||0,r=parseFloat(t[1])||0,i="hue"===n?Math.round(p/100*360):o,a=10,s=!0===e.config?.hue_force_saturation,l=Number(e.config?.hue_force_saturation_value),c=Number.isFinite(l)?Math.max(0,Math.min(100,l)):100,d="saturation"===n?Math.round(p):s?c:r<a?100:r;e._hass.callService("light","turn_on",{entity_id:e.config.entity,hs_color:[i,d]});break}if("white_temp"===n){const t=e._hass.states[e.config.entity]?.attributes||{},n=Number(t.min_color_temp_kelvin),o=Number(t.max_color_temp_kelvin),r=Number.isFinite(n)?n:2e3,a=Number.isFinite(o)?o:6500,s=Math.min(r,a),l=Math.max(r,a),c=l-s,d=c>0?l-p/100*c:s,u=Math.round((0,i.y$)(d,1)),b=Math.max(s,Math.min(l,u));e._hass.callService("light","turn_on",{entity_id:e.config.entity,color_temp_kelvin:b});break}let o;if(void 0!==e.config.min_value||void 0!==e.config.max_value)o=Math.round(255*d/100);else{const e=Number.isFinite(p)?p:t;o=Math.round(255*e/100)}const r=e.config.light_transition,a=""===e.config.light_transition_time||isNaN(e.config.light_transition_time)?500:e.config.light_transition_time;e._hass.callService("light","turn_on",{entity_id:e.config.entity,brightness:o,...r&&{transition:a/1e3}});break}case"media_player":{let t;t=void 0!==e.config.min_value||void 0!==e.config.max_value||void 0!==e.config.min_volume||void 0!==e.config.max_volume?d/100:p/100,t=Math.max(0,Math.min(1,t)),e._hass.callService("media_player","volume_set",{entity_id:e.config.entity,volume_level:t.toFixed(2)});break}case"cover":{let t;t=void 0!==e.config.min_value||void 0!==e.config.max_value?Math.round(d):Math.round(p),e._hass.callService("cover","set_cover_position",{entity_id:e.config.entity,position:t});break}case"input_number":e._hass.callService("input_number","set_value",{entity_id:e.config.entity,value:d});break;case"fan":{let t;t=void 0!==e.config.min_value||void 0!==e.config.max_value?Math.round(d):Math.round(p),e._hass.callService("fan","set_percentage",{entity_id:e.config.entity,percentage:t});break}case"climate":{const t=parseFloat(d.toFixed(1));(0,o.$C)(e,e.config.entity)?e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t}):e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then((()=>{e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t})})).catch((n=>{console.error("Error turning on climate entity:",n),e._hass.callService("climate","set_temperature",{entity_id:e.config.entity,temperature:t})}));break}case"number":e._hass.callService("number","set_value",{entity_id:e.config.entity,value:d})}}},371:(e,t,n)=>{n.d(t,{BG:()=>$,BJ:()=>w,BK:()=>i,QN:()=>d,YX:()=>p,_W:()=>m,aJ:()=>A,el:()=>b,et:()=>x,lY:()=>v,lt:()=>g,nZ:()=>_,oR:()=>h,uo:()=>C,y$:()=>f,zD:()=>k});var o=n(716);const r=["left","right","top","bottom"],i=["right","left","center"],a={"inline-end":"right","inline-start":"left"},s=new Set([...i,...Object.keys(a)]);function l(e){return e?.split(".")[0]}function c(e,t,n){return void 0===t||void 0===n?e:n<=t?t:Math.max(t,Math.min(n,e))}function d(e){return Math.max(0,Math.min(100,e))}function u(e){if(!e?.config?.invert_slider_value)return!1;if("light"===l(e?.config?.entity)){const t=e?.config?.light_slider_type;if(["hue","saturation","white_temp"].includes(t))return!1}return!0}function p(e,t){const n=d(Number(t)||0);return u(e)?100-n:n}function b(e,t){const n=d(Number(t)||0);return u(e)?100-n:n}function h(e){const t=e?.config?.slider_fill_orientation;return r.includes(t)?t:"left"}function m(e){const t=e?.config?.slider_value_position;return"hidden"===t?"hidden":t?a[t]?a[t]:s.has(t)?t:"right":"right"}function g(e,t){if(!e?.elements?.rangeFill)return;const n=p(e,t),o=h(e),r=function(e,t){switch(e){case"right":return`translateX(-${t}%)`;case"top":return`translateY(${t}%)`;case"bottom":return`translateY(-${t}%)`;default:return`translateX(${t}%)`}}(o,n);e.elements.rangeFill.style.transform!==r&&(e.elements.rangeFill.style.transform=r),e._lastVisualFillPercentage=n,e._lastFillOrientation=o}function f(e,t){return!isFinite(t)||t<=0?e:Math.round(e/t)*t}function y(e,t,n){return void 0===t||void 0===n||n<=t?0:100*(c(e,t,n)-t)/(n-t)}function v(e,t,n){return void 0===t||void 0===n||n<=t?0:t+e/100*(n-t)}function _(e,t){if(void 0!==e.config.min_value)return parseFloat(e.config.min_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.min_volume?parseFloat(e.config.min_volume):"climate"===n?t.attributes.min_temp??0:t.attributes.min??0}function w(e,t){if(void 0!==e.config.max_value)return parseFloat(e.config.max_value);const n=t.entity_id.split(".")[0];return"media_player"===n&&void 0!==e.config.max_volume?parseFloat(e.config.max_volume):"climate"===n?t.attributes.max_temp??100:t.attributes.max??100}function x(e,t){if(void 0!==e.config.step)return parseFloat(e.config.step);switch(t.entity_id.split(".")[0]){case"input_number":case"number":return t.attributes.step??1;case"fan":return t.attributes.percentage_step??1;case"climate":{const n="°C"===e._hass.config.unit_system.temperature;return t.attributes.target_temp_step??(n?.5:1)}case"media_player":return.01;default:return 1}}function k(e){if(!e)return!0;const t=l(e);return"sensor"===t||!["light","media_player","cover","input_number","number","fan","climate"].includes(t)}function C(e,t=e.config.entity){const n=l(t);if("sensor"===n&&"%"===(0,o.D$)(e,"unit_of_measurement",t))return d(parseFloat((0,o.Gu)(e,t))||0);const r=e._hass.states[t];if(!r)return 0;const i=_(e,r),a=w(e,r);switch(n){case"light":{const n=e?.config?.light_slider_type||"brightness";if("hue"===n){const n=(0,o.D$)(e,"hs_color",t)||[];return d(((Array.isArray(n)&&parseFloat(n[0])||0)%360+360)%360/360*100)}if("saturation"===n){const n=(0,o.D$)(e,"hs_color",t)||[];return d(Array.isArray(n)&&parseFloat(n[1])||0)}if("white_temp"===n){const n=parseFloat((0,o.D$)(e,"color_temp_kelvin",t)),r=parseFloat((0,o.D$)(e,"min_color_temp_kelvin",t)),i=parseFloat((0,o.D$)(e,"max_color_temp_kelvin",t)),a=Number.isFinite(r)?r:2e3,s=Number.isFinite(i)?i:6500;if(!Number.isFinite(n))return 0;const l=Math.min(a,s),u=Math.max(a,s),p=u-l;return p<=0?0:d((u-c(n,l,u))/p*100)}const r=100*((0,o.D$)(e,"brightness",t)??0)/255;return void 0!==e.config.min_value||void 0!==e.config.max_value?y(r,i,a):d(r)}case"media_player":{const n=(0,o.D$)(e,"volume_level",t),r=null!=n?100*n:0;return void 0!==e.config.min_value||void 0!==e.config.max_value||void 0!==e.config.min_volume||void 0!==e.config.max_volume?y(r,i,a):d(r)}case"cover":{const n=(0,o.D$)(e,"current_position",t),r=null!=n?n:0;return void 0!==e.config.min_value||void 0!==e.config.max_value?y(r,i,a):d(r)}case"input_number":case"number":{const n=parseFloat((0,o.Gu)(e,t));return isNaN(n)?0:y(c(n,i,a),i,a)}case"fan":if((0,o.$C)(e,t)){const n=(0,o.D$)(e,"percentage",t)??0;return void 0!==e.config.min_value||void 0!==e.config.max_value?y(c(parseFloat(n),i,a),i,a):d(n)}return 0;case"climate":if((0,o.$C)(e,t)){const n=parseFloat((0,o.D$)(e,"temperature",t));return isNaN(n)?0:y(c(n,i,a),i,a)}return 0;default:if(void 0!==e.config.min_value&&void 0!==e.config.max_value){const n=parseFloat((0,o.Gu)(e,t));return isNaN(n)?0:y(c(n,i,a),i,a)}return 0}}function $(e,t){const n=e.config.entity,o=l(n),r=e._hass,i=e.sliderMinValue??e.config?.min_value,a=e.sliderMaxValue??e.config?.max_value,s=e.sliderStep??e.config?.step??1;let u=Number(i),p=Number(a),b=Number(s);Number.isFinite(u)||(u=0),Number.isFinite(p)||(p="climate"===o?u+1:100),p<=u&&(p="climate"===o?u+1:u+100),(!Number.isFinite(b)||b<=0)&&(b=1);const h=d(Number(t)||0),m=p-u;return S(e,c(f(u+(m>0?h/100*m:0),b),u,p),o,n,r)}function A(e){const t=e.config.entity,n=l(t),r=e._hass,i=r?.states?.[t];if(!i)return r?.localize?.("state.default.unavailable")||"0%";let a=0;switch(n){case"climate":if(!(0,o.$C)(e,t))return r?.localize?.("state.default.off")||"0%";a=parseFloat((0,o.D$)(e,"temperature",t))||0;break;case"input_number":case"number":default:a=parseFloat((0,o.Gu)(e,t))||0;break;case"light":a=100*((0,o.D$)(e,"brightness",t)??0)/255;break;case"media_player":{const n=(0,o.D$)(e,"volume_level",t);a=null!=n?100*n:0;break}case"cover":{const n=(0,o.D$)(e,"current_position",t);a=null!=n?n:0;break}case"fan":a=(0,o.$C)(e,t)?(0,o.D$)(e,"percentage",t)??0:0}return S(e,a,n,t,r)}function S(e,t,n,r,i){const a=i?.locale?.language||"en-US",s=(e,t,n)=>(0,o.IU)(e,t,n,a);switch(n){case"climate":{if(!(0,o.$C)(e,r))return i?.localize?.("state.default.off")||"0%";const n=(0,o.$z)(i);return s(t,Number.isInteger(t)?0:1,n)}case"input_number":case"number":{const n=(0,o.D$)(e,"unit_of_measurement",r)||"";return s(t,i?.states?.[r]?.attributes?.precision??(Number.isInteger(t)?0:1),n)}case"light":case"media_player":case"cover":case"fan":return s(Math.round(t),0,"%");default:{const n=(0,o.D$)(e,"unit_of_measurement",r)||"";return n?s(t,i?.states?.[r]?.attributes?.precision??(Number.isInteger(t)?0:1),n):s(Math.round(t),0,"%")}}}},345:(e,t,n)=>{n.d(t,{H:()=>s,K:()=>l});var o=n(716),r=n(459);const i='.bubble-range-fill {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    left: -100%;\r\n    transition: all .5s ease-in-out;\r\n    z-index: 0;\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n}\r\n\r\n.bubble-range-fill.fill-orientation-left {\r\n    left: -100%;\r\n    right: auto;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.bubble-range-fill.fill-orientation-right {\r\n    left: auto;\r\n    right: -100%;\r\n    top: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.bubble-range-fill.fill-orientation-top {\r\n    top: -100%;\r\n    bottom: auto;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.bubble-range-fill.fill-orientation-bottom {\r\n    top: auto;\r\n    bottom: -100%;\r\n    left: 0;\r\n    right: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.slider-use-light-color {\r\n    background-color: var(--bubble-slider-fill-color, var(--bubble-light-color, rgb(225, 225, 210))) !important;\r\n    opacity: 0.7;\r\n}\r\n\r\n.slider-use-accent-color {\r\n    background-color: var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color))) !important;\r\n    opacity: 1;\r\n}\r\n\r\n.is-light .bubble-range-fill {\r\n    background-color: var(--bubble-light-color, rgb(225, 225, 210));\r\n    opacity: 0.7;\r\n}\r\n\r\n.is-dragging .bubble-range-fill {\r\n    transition: none !important;\r\n}\r\n\r\n.bubble-range-value {\r\n    position: absolute;\r\n    display: none;\r\n    top: 50%;\r\n    right: 14px;\r\n    left: auto;\r\n    transform: translateY(-50%);\r\n    padding: 0 6px;\r\n    pointer-events: none;\r\n    white-space: nowrap;\r\n    align-items: center;\r\n    z-index: 1;\r\n}\r\n\r\n.bubble-range-value.is-visible {\r\n    display: flex;\r\n}\r\n\r\n.bubble-range-slider.value-position-left .bubble-range-value,\r\n.bubble-range-slider.value-position-inline-start .bubble-range-value {\r\n    left: 14px;\r\n    right: auto;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-range-slider.value-position-right .bubble-range-value,\r\n.bubble-range-slider.value-position-inline-end .bubble-range-value {\r\n    right: 14px;\r\n    left: auto;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.bubble-range-slider.value-position-center .bubble-range-value {\r\n    left: 50%;\r\n    right: auto;\r\n    transform: translate(-50%, -50%);\r\n    justify-content: center;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.is-unavailable .bubble-range-slider {\r\n    cursor: not-allowed;\r\n}\r\n\r\n/* Ensure touch drag is recognized on mobile for slider track */\r\n.bubble-range-slider {\r\n    touch-action: pan-y pinch-zoom;\r\n    backface-visibility: hidden;\r\n    height: 100%;\r\n}\r\n\r\n/* Vertical sliders: allow horizontal scroll, block vertical */\r\n.bubble-range-slider.fill-orientation-top,\r\n.bubble-range-slider.fill-orientation-bottom {\r\n    touch-action: pan-x pinch-zoom;\r\n}\r\n\r\n/* Slider container styles */\r\n.slider-container {\r\n    cursor: ew-resize;\r\n    touch-action: pan-y pinch-zoom;\r\n}\r\n\r\n/* Vertical slider containers: allow horizontal scroll, block vertical */\r\n.slider-container:has(.fill-orientation-top),\r\n.slider-container:has(.fill-orientation-bottom) {\r\n    cursor: ns-resize;\r\n    touch-action: pan-x pinch-zoom;\r\n}\r\n\r\n/* When touching (pre-drag), allow pinch-zoom but block panning natively */\r\n.slider-container.is-touching,\r\n.slider-container.is-touching .bubble-range-slider,\r\n.bubble-range-slider.is-touching {\r\n    touch-action: pinch-zoom;\r\n}\r\n\r\nhtml.bubble-slider-dragging,\r\nbody.bubble-slider-dragging {\r\n    touch-action: none;\r\n    overscroll-behavior: contain;\r\n    overflow: hidden;\r\n}\r\n\r\n/* When dragging, disable all touch actions to prevent conflicts */\r\n.is-dragging .bubble-range-slider,\r\n.is-dragging.slider-container {\r\n    touch-action: none;\r\n}\r\n\r\n.slider-container.slider-hold-focus > :not(.bubble-range-slider):not(style) {\r\n    transition: opacity 0.3s ease-in-out;\r\n}\r\n\r\n.slider-container.slider-hold-focus.is-dragging > :not(.bubble-range-slider):not(style) {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.slider-appear-animation {\r\n    transition: none;\r\n    animation: sliderAppear 0.2s ease-in-out;\r\n    transform-origin: center;\r\n}\r\n\r\n@keyframes sliderAppear {\r\n    0% {\r\n        transform: scale(0.96);\r\n        opacity: 0.8;\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n/* Color slider specific */\r\n.is-color-slider .bubble-range-fill { \r\n    background: transparent !important; \r\n    opacity: 0 !important; \r\n}\r\n\r\n.bubble-color-track {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 0;\r\n}\r\n\r\n.bubble-color-cursor {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    transform: translate(-50%, -50%);\r\n    width: 8px;\r\n    height: 90%;\r\n    border-radius: 999px;\r\n    background: var(--bubble-color-cursor-background, #fff);\r\n    z-index: 1;\r\n    transition: transform .15s ease, left .15s ease, top .15s ease;\r\n    box-shadow: 0 2px 6px rgba(0,0,0,0.35);\r\n}\r\n\r\n.bubble-color-cursor::before {\r\n    content: "";\r\n    position: absolute;\r\n    top: var(--bubble-color-cursor-indicator-top, 18%);\r\n    bottom: var(--bubble-color-cursor-indicator-bottom, 18%);\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 2px;\r\n    background: var(--bubble-color-cursor-indicator-color, var(--primary-text-color));\r\n    border-radius: 2px;\r\n    opacity: var(--bubble-color-cursor-indicator-opacity, 0.7);\r\n    transition: background-color .15s ease, top .15s ease, bottom .15s ease;\r\n}\r\n\r\n.is-dragging .bubble-color-cursor {\r\n    transition: none !important;\r\n}\r\n\r\n.is-dragging .bubble-color-cursor::before {\r\n    opacity: var(--bubble-color-cursor-indicator-active-opacity, 0.9);\r\n    top: var(--bubble-color-cursor-indicator-active-top, 12%);\r\n    bottom: var(--bubble-color-cursor-indicator-active-bottom, 12%);\r\n    width: 4px;\r\n}\r\n\r\n.fill-orientation-right .bubble-color-track,\r\n.fill-orientation-left .bubble-color-track,\r\n.fill-orientation-top .bubble-color-track,\r\n.fill-orientation-bottom .bubble-color-track {\r\n    pointer-events: none;\r\n}\r\n\r\n.fill-orientation-right .bubble-color-cursor,\r\n.fill-orientation-left .bubble-color-cursor {\r\n    height: 90%;\r\n    width: 8px;\r\n}\r\n\r\n.fill-orientation-top .bubble-color-cursor,\r\n.fill-orientation-bottom .bubble-color-cursor {\r\n    width: 90%;\r\n    height: 8px;\r\n}\r\n\r\n.fill-orientation-top .bubble-color-cursor::before,\r\n.fill-orientation-bottom .bubble-color-cursor::before {\r\n    top: 50%;\r\n    bottom: auto;\r\n    left: 5%;\r\n    right: 5%;\r\n    height: 2px;\r\n    width: auto;\r\n    transform: translateY(-50%);\r\n}';var a=n(371);function s(e,t={}){const n={...l,targetElement:e.elements.mainContainer,insertBefore:e.elements.cardWrapper,sliderLiveUpdate:e.config.slider_live_update,relativeSlide:e.config.relative_slide,holdToSlide:!1,readOnlySlider:!1,styles:i,...t},s=[...a.BK.map((e=>`value-position-${e}`)),"value-position-inline-end","value-position-inline-start"],c=e._hass.states[e.config.entity],d=e.config.entity?.split(".")[0];if(c?(e.sliderMinValue=(0,a.nZ)(e,c),e.sliderMaxValue=(0,a.BJ)(e,c),e.sliderStep=(0,a.et)(e,c)):(e.sliderMinValue=e.config.min_value??0,e.sliderMaxValue=e.config.max_value??100,e.sliderStep=e.config.step??1),e.sliderMaxValue<=e.sliderMinValue&&(e.sliderMaxValue="climate"===d?e.sliderMinValue+1:e.sliderMinValue+100),e.elements.rangeFill=(0,o.n)("div","bubble-range-fill range-fill"),e.elements.rangeSlider=(0,o.n)("div","bubble-range-slider range-slider"),n.styles){const Z=(0,o.n)("style");Z.textContent=n.styles,e.elements.rangeSlider.appendChild(Z)}const u=e?.config?.light_slider_type,p="light"===d&&["hue","saturation","white_temp"].includes(u);e._isColorSlider=p,e._currentSliderValuePosition=null,e._shouldDisplaySliderValue=!1,e.syncSliderValuePosition=()=>{if(!e.elements?.rangeSlider)return;const t=e.elements.rangeSlider,n=(0,a._W)(e);if(e._isColorSlider||"hidden"===n)return s.forEach((e=>t.classList.remove(e))),e._currentSliderValuePosition=null,e._shouldDisplaySliderValue=!1,void(e.elements.rangeValue&&e.elements.rangeValue.classList.remove("is-visible"));e._shouldDisplaySliderValue=!0,e._currentSliderValuePosition!==n&&(e._currentSliderValuePosition&&t.classList.remove(`value-position-${e._currentSliderValuePosition}`),t.classList.add(`value-position-${n}`),e._currentSliderValuePosition=n),e.elements.rangeValue||(e.elements.rangeValue=(0,o.n)("div","bubble-range-value"),t.appendChild(e.elements.rangeValue),e.elements.rangeValue.textContent=(0,a.aJ)(e))};let b=null;if(p){e.elements.rangeSlider.classList.add("is-color-slider"),e.elements.rangeSlider.classList.add(`is-color-${u}`),e.elements.colorTrack=(0,o.n)("div","bubble-color-track"),e.elements.colorCursor=(0,o.n)("div","bubble-color-cursor"),e.elements.rangeSlider.appendChild(e.elements.colorTrack),e.elements.rangeSlider.appendChild(e.elements.colorCursor);const ee=["left","right","top","bottom"];function te(t){e?.elements?.colorTrack&&e?.elements?.colorCursor&&(ee.forEach((t=>{e.elements.colorTrack.classList.remove(`fill-orientation-${t}`),e.elements.colorCursor.classList.remove(`fill-orientation-${t}`)})),e.elements.colorTrack.classList.add(`fill-orientation-${t}`),e.elements.colorCursor.classList.add(`fill-orientation-${t}`))}function ne(){if(!e?.elements?.colorTrack)return;const t=(0,a.oR)(e),n="right"===t?"270deg":"left"===t?"90deg":"top"===t?"180deg":"0deg";if("hue"===u){const t=e._hass.states[e.config.entity]?.attributes?.hs_color||[],o=Number(t[1]??100),r=o<10?100:o;e.elements.colorTrack.style.background=`linear-gradient(${n}, hsl(0 ${r}% 50%), hsl(60 ${r}% 50%), hsl(120 ${r}% 50%), hsl(180 ${r}% 50%), hsl(240 ${r}% 50%), hsl(300 ${r}% 50%), hsl(360 ${r}% 50%))`}else if("saturation"===u){const t=e._hass.states[e.config.entity]?.attributes?.hs_color||[],o=Number(t[0]??180);e.elements.colorTrack.style.background=`linear-gradient(${n}, hsl(${o} 0% 50%), hsl(${o} 100% 50%))`}else"white_temp"===u&&(e.elements.colorTrack.style.background=`linear-gradient(${n}, #d2e7ff, #f3f7ff 35%, #fff1e0 65%, #ffb56b)`)}function oe(t){if(!e?.elements?.colorCursor)return;let n="#000000";if("hue"===u){const o=e._hass.states[e.config.entity]?.attributes?.hs_color||[],r=Number(o[1]??100);n=`hsl(${t/100*360}, ${r<10?100:r}%, 50%)`}else if("saturation"===u){const o=e._hass.states[e.config.entity]?.attributes?.hs_color||[];n=`hsl(${Number(o[0]??180)}, ${t}%, 50%)`}else if("white_temp"===u){const e=t/100;n=e<.35?"#d2e7ff":e<.65?"#fff1e0":"#ffb56b"}e.elements.colorCursor.style.setProperty("--bubble-color-cursor-indicator-color",n)}te((0,a.oR)(e)),b=t=>{if(!e?.elements?.colorCursor)return;const n=(0,a.YX)(e,t);e._lastVisualFillPercentage=n;const o=(0,a.oR)(e),r="right"===o||"bottom"===o?100-n:n,i=e.elements.colorCursor;i.style.removeProperty("right"),i.style.removeProperty("bottom"),"left"===o||"right"===o?(i.style.left=`${r}%`,i.style.top="50%"):(i.style.top=`${r}%`,i.style.left="50%")},e.setColorCursorPosition=b,ne(),e.updateColorTrackBackground=ne,e.updateColorCursorIndicator=oe}function h(){return(0,a.uo)(e)}function m(t){return(0,a.YX)(e,t)}function g(t){e.elements.rangeValue&&(e.elements.rangeValue.textContent=(0,a.BG)(e,t))}const f=m(h());e.syncSliderValuePosition(),n.withValueDisplay&&e._shouldDisplaySliderValue&&e.elements.rangeValue&&(e.elements.rangeValue.classList.add("is-visible"),e.elements.rangeValue.textContent=(0,a.aJ)(e));const y=(0,a.oR)(e),v="top"===y||"bottom"===y;e.elements.rangeFill.classList.add(`fill-orientation-${y}`),e.elements.rangeSlider.classList.add(`fill-orientation-${y}`),p&&e.elements.colorCursor?(b?.(f),"function"==typeof e.updateColorCursorIndicator&&e.updateColorCursorIndicator(f)):(0,a.lt)(e,f),e.elements.rangeSlider.appendChild(e.elements.rangeFill),n.insertBefore&&n.targetElement.contains(n.insertBefore)?n.targetElement.insertBefore(e.elements.rangeSlider,n.insertBefore):n.targetElement.appendChild(e.elements.rangeSlider),n.targetElement&&(n.targetElement.classList.add("slider-container"),n.holdToSlide&&!e.config.tap_to_slide&&n.targetElement.classList.add("slider-hold-focus"));const _={passive:!1};let w=0,x=0,k=0,C=0,$=null,A=!1,S=null,L=!1,E=!1,M=0;function T(){return S||(S=e.elements.rangeSlider.getBoundingClientRect()),S}function B(){S=null}function I(){A=!1,L=!1}function P(){E||(E=!0,n.targetElement.classList.add("is-touching"),e.elements.rangeSlider&&e.elements.rangeSlider.classList.add("is-touching"))}function O(){E&&(E=!1,n.targetElement.classList.remove("is-touching"),e.elements.rangeSlider&&e.elements.rangeSlider.classList.remove("is-touching"))}function q(e){return void 0!==e.pageX?e.pageX:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].pageX:e.touches&&e.touches[0]?e.touches[0].pageX:void 0!==e.clientX?e.clientX:0}function j(e){return void 0!==e.pageY?e.pageY:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].pageY:e.touches&&e.touches[0]?e.touches[0].pageY:void 0!==e.clientY?e.clientY:0}function N(e){return void 0!==e.clientX?e.clientX:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].clientX:e.touches&&e.touches[0]?e.touches[0].clientX:q(e)-(window.scrollX||window.pageXOffset||0)}function U(e){return void 0!==e.clientY?e.clientY:e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].clientY:e.touches&&e.touches[0]?e.touches[0].clientY:j(e)-(window.scrollY||window.pageYOffset||0)}function z(e){return v?j(e):q(e)}function D(e){return v?q(e):j(e)}function R(e){if("number"==typeof e?.pointerId)try{"function"==typeof n.targetElement.hasPointerCapture&&n.targetElement.hasPointerCapture(e.pointerId)&&n.targetElement.releasePointerCapture(e.pointerId)}catch(e){}}function V(){n.targetElement.removeEventListener("pointermove",Y,_),n.targetElement.removeEventListener("touchmove",Y,_),n.targetElement.removeEventListener("touchend",J,_),window.removeEventListener("pointermove",Y,_),window.removeEventListener("pointerup",J,_),window.removeEventListener("pointercancel",X,_),window.removeEventListener("touchmove",Y,_),window.removeEventListener("touchend",J,_),window.removeEventListener("touchcancel",X,_),window.removeEventListener("blur",X),document.removeEventListener("visibilitychange",F)}function F(){document.hidden&&e.dragging&&X()}function H(){n.targetElement.addEventListener("pointermove",Y,_),n.targetElement.addEventListener("touchmove",Y,_),n.targetElement.addEventListener("touchend",J,_),window.addEventListener("pointermove",Y,_),window.addEventListener("pointerup",J,_),window.addEventListener("pointercancel",X,_),window.addEventListener("touchmove",Y,_),window.addEventListener("touchend",J,_),window.addEventListener("touchcancel",X,_),window.addEventListener("blur",X),document.addEventListener("visibilitychange",F)}function W(e){try{const t="function"==typeof e.composedPath?e.composedPath():[];if(t&&t.some((e=>e?.tagName&&"ha-sidebar"===e.tagName.toLowerCase())))return!0}catch(e){}let t=e.clientX;return void 0===t&&(t=e.changedTouches&&e.changedTouches[0]?e.changedTouches[0].clientX:e.touches&&e.touches[0]?e.touches[0].clientX:0),("touch"===e.pointerType||!!e.touches||!!e.changedTouches)&&t<=30}function Y(t){if(function(e){if(L)return!1;const t=z(e),n=D(e),o=v?x:w,r=v?w:x,i=Math.abs(t-o),a=Math.abs(n-r);return i>=4?(L=!0,!1):a>10&&i<4}(t))return O(),A=!0,L=!1,R(t),V(),n.targetElement.classList.remove("is-dragging"),e.dragging=!1,window.isScrolling=!1,void B();if(t.stopPropagation(),t.touches&&t.touches.length>1||!t.cancelable||t.preventDefault(),t.target.closest(".bubble-action"))return;window.isScrolling=!0;const o=(0,r.P9)(e,K(t),!1,T());p&&e.elements.colorCursor&&(b?.(o),"saturation"===u&&"function"==typeof e.updateColorTrackBackground&&e.updateColorTrackBackground(),"function"==typeof e.updateColorCursorIndicator&&e.updateColorCursorIndicator(o)),n.sliderLiveUpdate&&Q(e,o),g(o)}function K(e){const t=function(e){return v?U(e):N(e)}(e),o=z(e);return n.relativeSlide?(v?C:k)+(o-(v?x:w)):t}function X(t){if(!e.dragging)return;if(Date.now()-M<150)return;R(t),$&&clearTimeout($),n.targetElement.classList.remove("is-dragging"),V(),I(),B(),O();const o=m(h());p&&e.elements.colorCursor?(b?.(o),"function"==typeof e.updateColorCursorIndicator&&e.updateColorCursorIndicator(o)):(0,a.lt)(e,o),e._shouldDisplaySliderValue&&e.elements.rangeValue&&(e.elements.rangeValue.textContent=(0,a.aJ)(e),!n.holdToSlide||e.config.tap_to_slide||n.persistentValueDisplay||e.elements.rangeValue.classList.remove("is-visible")),e.dragging=!1,window.isScrolling=!1}function J(t){if(A)return O(),I(),void B();t.stopPropagation(),t.touches&&t.touches.length>1||t.preventDefault(),R(t),$&&clearTimeout($);const i=z(t),a=(0,r.P9)(e,K(t),!0,T()),s=v?x:w;Math.abs(i-s)>5&&(t.preventDefault(),t.stopImmediatePropagation()),n.targetElement.classList.remove("is-dragging"),V(),I(),B(),O(),p&&e.elements.colorCursor&&(b?.(a),"function"==typeof e.updateColorCursorIndicator&&e.updateColorCursorIndicator(a)),(0,o.md)(e,"climate",e.config.entity)&&!(0,o.$C)(e,e.config.entity)?e._hass.callService("climate","turn_on",{entity_id:e.config.entity}).then((()=>{Q(e,a)})).catch((e=>{console.error("Error turning on climate entity:",e)})):Q(e,a),(0,o.jp)("selection"),g(a),n.holdToSlide&&!e.config.tap_to_slide&&e._shouldDisplaySliderValue&&e.elements.rangeValue&&!n.persistentValueDisplay&&e.elements.rangeValue.classList.remove("is-visible"),$=setTimeout((()=>{e&&(e.dragging=!1,window.isScrolling=!1)}),100)}const G=(()=>{const t=e.config.entity;if(!t)return!0;const n=t?.split(".")[0];return"sensor"===n||!["light","media_player","cover","input_number","number","fan","climate"].includes(n)})();if(e.config.read_only_slider||G)return;if(!n.holdToSlide||n.readOnlySlider||e.config.tap_to_slide)n.readOnlySlider||n.targetElement.addEventListener("pointerdown",(t=>{if(W(t))return;const o=!!t.target.closest(".bubble-main-icon-container"),r=t.target.closest(".bubble-sub-button"),i=r?.hasAttribute("no-slide");if(!(o||r||i)){try{n.targetElement.setPointerCapture(t.pointerId)}catch(e){}if(!e.card||!e.card.classList.contains("is-unavailable")){if(P(),e.dragging=!0,window.isScrolling=!0,w=q(t),x=j(t),I(),B(),n.relativeSlide){const e=m(h()),t=T();if(v){const n="bottom"===y?100-e:e;C=t.top+t.height*n/100}else k=t.left+t.width*e/100}else T();n.targetElement.classList.add("is-dragging"),H()}}}),_);else{let re;const ie=200,ae=6;let se=null,le=null,ce=!1;const de=()=>{se&&(n.targetElement.removeEventListener("pointermove",se),se=null),le&&(n.targetElement.removeEventListener("pointerup",le),n.targetElement.removeEventListener("pointercancel",le),le=null)},ue=t=>{ce||(ce=!0,clearTimeout(re),de(),function(t){if(W(t))return void O();try{n.targetElement.setPointerCapture(t.pointerId)}catch(e){}if(e.card&&e.card.classList.contains("is-unavailable"))return void O();e.dragging=!0,window.isScrolling=!0,M=Date.now(),w=q(t),x=j(t),I(),L=!0,B();let i=0;(0,o.md)(e,"climate")&&!(0,o.$C)(e,e.config.entity)?(i=0,p&&e.elements.colorCursor?(b?.(i),"function"==typeof e.updateColorCursorIndicator&&e.updateColorCursorIndicator(i)):(0,a.lt)(e,i)):i=(0,r.P9)(e,function(e){if(w=q(e),x=j(e),I(),!n.relativeSlide)return v?U(e):N(e);const t=m(h()),o=T();if(v){const e="bottom"===y?100-t:t;return C=o.top+o.height*e/100,C}return k=o.left+o.width*t/100,k}(t),!1,T()),function(t){e._isColorSlider||(e.syncSliderValuePosition?.(),e._shouldDisplaySliderValue&&e.elements.rangeValue&&(g(t),e.elements.rangeValue.classList.add("is-visible")))}(i),g(i),n.sliderLiveUpdate&&Q(e,i),n.targetElement.classList.add("slider-appear-animation"),(0,o.jp)("selection"),setTimeout((()=>{n.targetElement.classList.remove("slider-appear-animation")}),300),n.targetElement.classList.add("is-dragging"),H(),n.targetElement.addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation()}),{capture:!0,once:!0})}(t))};n.targetElement.addEventListener("pointerdown",(t=>{if(W(t))return;const o=t.target.closest(".bubble-action"),r=t.target.closest(".bubble-sub-button")?.hasAttribute("no-slide");if(r||o&&'{"action":"none"}'!==o.getAttribute("data-hold-action"))return;if(ce=!1,clearTimeout(re),de(),e.card&&e.card.classList.contains("is-unavailable"))return;P(),w=q(t),x=j(t),I();const i=e=>{const t=z(e),n=D(e),o=v?x:w,r=v?w:x,i=Math.abs(t-o),s=Math.abs(n-r);if(!(i>=2&&s<=4))return s>10&&s>i+4?(A=!0,void a()):void(i>ae&&i>=s&&ue(e));ue(e)},a=()=>{clearTimeout(re),de(),A&&O()};se=i,le=a,n.targetElement.addEventListener("pointermove",i,{passive:!1}),n.targetElement.addEventListener("pointerup",a),n.targetElement.addEventListener("pointercancel",a),re=setTimeout((()=>ue(t)),ie)}),{passive:!1}),n.targetElement.addEventListener("pointerup",(()=>{ce||(clearTimeout(re),de(),A=!1,O())})),n.targetElement.addEventListener("pointercancel",(()=>{ce||(clearTimeout(re),de(),A=!1,O())}))}const Q=(0,o.nF)(r.zU,200)}const l={targetElement:null,insertBefore:null,sliderLiveUpdate:!1,withValueDisplay:!1,initialValue:null,persistentValueDisplay:!1}},772:(e,t,n)=>{n.d(t,{Kr:()=>w,AQ:()=>_});var o=n(716),r=n(391),i=n(653),a=n(175),s=n(388),l=n(752),c=n(531);var d=n(345),u=n(459);function p(e,t){const n=!(!t.alwaysVisible||!t.subButton?.show_button_info);return{entity:t.entity,...void 0!==t.subButton?.min_value?{min_value:t.subButton.min_value}:{},...void 0!==t.subButton?.max_value?{max_value:t.subButton.max_value}:{},...void 0!==t.subButton?.step?{step:t.subButton.step}:{},...void 0!==t.subButton?.tap_to_slide?{tap_to_slide:t.subButton.tap_to_slide}:{},...void 0!==t.subButton?.relative_slide?{relative_slide:t.subButton.relative_slide}:{},...void 0!==t.subButton?.read_only_slider?{read_only_slider:t.subButton.read_only_slider}:{},...void 0!==t.subButton?.slider_live_update?{slider_live_update:t.subButton.slider_live_update}:{},...void 0!==t.subButton?.invert_slider_value?{invert_slider_value:t.subButton.invert_slider_value}:{},...void 0!==t.subButton?.slider_fill_orientation?{slider_fill_orientation:t.subButton.slider_fill_orientation}:{},slider_value_position:n?"right":t.subButton?.slider_value_position??"right",...void 0!==t.subButton?.use_accent_color?{use_accent_color:t.subButton.use_accent_color}:{},...void 0!==t.subButton?.allow_light_slider_to_0?{allow_light_slider_to_0:t.subButton.allow_light_slider_to_0}:{},...void 0!==t.subButton?.light_transition?{light_transition:t.subButton.light_transition}:{},...void 0!==t.subButton?.light_transition_time?{light_transition_time:t.subButton.light_transition_time}:{},...void 0!==t.subButton?.light_slider_type?{light_slider_type:t.subButton.light_slider_type}:{},...void 0!==t.subButton?.hue_force_saturation?{hue_force_saturation:t.subButton.hue_force_saturation}:{},...void 0!==t.subButton?.hue_force_saturation_value?{hue_force_saturation_value:t.subButton.hue_force_saturation_value}:{}}}function b(e,t){try{const n="function"==typeof t.composedPath?t.composedPath():[];return!(!Array.isArray(n)||0===n.length)&&(n.includes(e.sliderWrapper)||n.includes(e.sliderContainer)||n.includes(e.sliderCloseBtn))}catch(e){return!1}}function h(e){if(e&&e._globalBlockerAdded&&e._globalBlockerHandler){try{(e._globalBlockerEvents||["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"]).forEach((t=>document.removeEventListener(t,e._globalBlockerHandler,!0)))}catch(e){}try{delete e._globalBlockerHandler,delete e._globalBlockerEvents}catch(e){}e._globalBlockerAdded=!1}}function m(e,t){e&&(e.sliderAlwaysVisible||e.sliderCloseBtn&&e.sliderCloseBtn.classList.toggle("is-hidden",!t))}function g(e,t){const n=e=>{e&&e.classList.toggle("is-hidden",t)};n(e.elements?.nameContainer),n(e.elements?.iconContainer),n(e.elements?.image),n(e.elements?.buttonsContainer),e.elements?.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=t?"0":"",e.elements.subButtonContainer.style.pointerEvents=t?"none":"")}function f(e,t){if(!t.sliderWrapper)return;t.sliderWrapper.classList.add("is-hidden");const n=t._parentGroupContainer;n&&n.classList?n.classList.remove("group-slider-open"):(function(e){g(e,!1)}(e),function(e){if(e.elements&&e.elements.cardWrapper){try{e.elements.cardWrapper.style.removeProperty("--bubble-sub-slider-left-offset")}catch(e){}try{e.elements.cardWrapper.style.removeProperty("--bubble-sub-slider-width")}catch(e){}}}(e)),t.sliderOpen=!1,m(t,!1),h(t);try{t._blockerPointerDownInside=!1}catch(e){}}function y(e,t,n){if(!t.sliderWrapper){const n=(0,o.n)("div","bubble-sub-slider-wrapper is-hidden");(e.elements.cardWrapper||e.elements.mainContainer||e.content).appendChild(n),t.sliderWrapper=n;const r=(0,o.n)("div","bubble-sub-button-slider");n.appendChild(r),t.sliderContainer=r;const i=(0,o.n)("div","bubble-sub-slider-close"),a=(0,o.n)("ha-icon");a.setAttribute("icon","mdi:close");try{i.haRipple=(0,o.n)("ha-ripple"),i.appendChild(i.haRipple)}catch(e){}i.appendChild(a),n.appendChild(i),t.sliderCloseBtn=i}const i=["pointerdown","pointermove","touchstart","touchmove","mousedown","mousemove","click"];if(!t._stopPropAdded&&t.sliderContainer){const e=e=>e.stopPropagation();i.forEach((n=>{t.sliderContainer.addEventListener(n,e,{passive:!1})})),t._stopPropAdded=!0,t._stopPropHandler=e}if(t.sliderContext)t.sliderContext.config=p(0,n);else{const o={_hass:e._hass,config:p(0,n),elements:{mainContainer:t.sliderContainer,cardWrapper:e.elements.cardWrapper||e.elements.mainContainer||e.content},content:e.content,card:e.card};(0,d.H)(o,{targetElement:t.sliderContainer,sliderLiveUpdate:!!n.subButton?.slider_live_update,withValueDisplay:!0,persistentValueDisplay:!0,holdToSlide:!0,readOnlySlider:!!n.subButton?.read_only_slider}),t.sliderContext=o}if(n.alwaysVisible){t.sliderAlwaysVisible=!0;const r=n.groupContainer||e.elements.subButtonContainer;if(t.sliderWrapper.parentNode!==r){try{t.sliderWrapper.parentNode?.removeChild(t.sliderWrapper)}catch(e){}r.appendChild(t.sliderWrapper)}t.sliderWrapper.classList.add("inline"),t.sliderContainer.classList.add("inline");const i=!!n.subButton?.show_button_info;if(t.sliderContext?.elements?.rangeValue){t.sliderInfoWrapper||(t.sliderInfoWrapper=(0,o.n)("div","bubble-sub-button-info-wrapper"),t.sliderContainer.insertBefore(t.sliderInfoWrapper,t.sliderContainer.firstChild));const e=t.sliderContext.elements.rangeValue;e&&e.parentNode!==t.sliderInfoWrapper&&(t.sliderInfoWrapper.appendChild(e),e.classList.add("in-info-wrapper")),t.sliderContainer.classList.add("has-info-wrapper"),t.sliderWrapper.classList.add("has-info-wrapper"),i?(t.nameContainer&&t.nameContainer.parentNode!==t.sliderInfoWrapper&&t.sliderInfoWrapper.appendChild(t.nameContainer),t.sliderContainer.classList.add("with-button-info"),t.sliderWrapper.classList.add("with-button-info")):(t.nameContainer&&t.nameContainer.parentNode===t.sliderInfoWrapper&&t.appendChild(t.nameContainer),t.sliderContainer.classList.remove("with-button-info"),t.sliderWrapper.classList.remove("with-button-info"))}n.subButton?.fill_width?(t.sliderWrapper.classList.add("fill-width"),t.sliderContainer.classList.add("fill-width")):(t.sliderWrapper.classList.remove("fill-width"),t.sliderContainer.classList.remove("fill-width"));try{const e=n.subButton?.width;if(n.subButton?.fill_width||null==e||""===e)n.subButton?.fill_width?(t.sliderWrapper.style.removeProperty("width"),t.sliderWrapper.classList.remove("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.remove("has-custom-width"),t.sliderContainer.style.removeProperty("--slider-container-min-width"))):null!=e&&""!==e||(t.sliderWrapper.style.removeProperty("width"),t.sliderWrapper.classList.remove("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.remove("has-custom-width"),t.sliderContainer.style.removeProperty("--slider-container-min-width")));else{const o=Number(e);if(!Number.isNaN(o)&&o>0){const e="main"===n.section?"px":"%";t.sliderWrapper.style.setProperty("width",`${o}${e}`),t.sliderWrapper.classList.add("has-custom-width"),t.sliderContainer&&(t.sliderContainer.classList.add("has-custom-width"),"main"===n.section&&(o<96?t.sliderContainer.style.setProperty("--slider-container-min-width",`${o}px`):t.sliderContainer.style.removeProperty("--slider-container-min-width")))}else"string"==typeof e&&(t.sliderWrapper.style.setProperty("width",e),t.sliderWrapper.classList.add("has-custom-width"),t.sliderContainer&&t.sliderContainer.classList.add("has-custom-width"))}}catch(e){}try{const e=n.subButton?.custom_height;if(null!=e&&""!==e){const n=Number(e);!Number.isNaN(n)&&n>0&&(t.sliderWrapper.style.setProperty("--bubble-sub-slider-height",`${n}px`),t.sliderWrapper.style.setProperty("height",`${n}px`),t.sliderContainer&&t.sliderContainer.style.setProperty("height",`${n}px`))}else t.sliderWrapper.style.removeProperty("--bubble-sub-slider-height"),t.sliderWrapper.style.removeProperty("height"),t.sliderContainer&&t.sliderContainer.style.removeProperty("height")}catch(e){}t.sliderWrapper.classList.remove("is-hidden"),t.classList.add("inline-slider-host"),t.sliderOpen=!0;try{t.classList.remove("bubble-action","bubble-action-enabled")}catch(e){}if(t.haRipple){try{t.removeChild(t.haRipple)}catch(e){}try{delete t.haRipple}catch(e){}}if(t.sliderCloseBtn&&(t.sliderCloseBtn.style.display="none"),t._outsideClickListenerAdded&&t._outsideClickHandler){try{document.removeEventListener("click",t._outsideClickHandler,!1)}catch(e){}try{delete t._outsideClickHandler}catch(e){}t._outsideClickListenerAdded=!1}h(t)}else{if(t.sliderAlwaysVisible=!1,t.setAttribute("no-slide",""),t.classList.remove("inline-slider-host"),!t.sliderToggleAdded){if(t.addEventListener("click",(n=>{n.stopPropagation(),t.sliderOpen?f(e,t):function(e,t){if(!t.sliderWrapper)return;const n=t._parentGroupContainer;n&&n.classList?n.classList.add("group-slider-open"):g(e,!0),t.sliderWrapper.classList.remove("is-hidden"),t.sliderOpen=!0,m(t,!0),function(e,t){if(!t||t._globalBlockerAdded)return;const n=n=>{if(!t.sliderOpen||t.sliderAlwaysVisible)return;const o=n.target,r=function(e,t){return e.sliderWrapper&&e.sliderWrapper.contains(t)||e.sliderContainer&&e.sliderContainer.contains(t)||e.sliderCloseBtn&&e.sliderCloseBtn.contains(t)}(t,o)||b(t,n),i=n.type;if("pointerdown"!==i&&"touchstart"!==i&&"mousedown"!==i)if("pointerup"!==i&&"touchend"!==i&&"mouseup"!==i&&"click"!==i);else{const o=!0===t._blockerPointerDownInside,i=!(!t.sliderContext||!t.sliderContext.dragging);if(r||o||i)return;try{n.preventDefault()}catch(e){}n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}f(e,t)}else if(t._blockerPointerDownInside=!!r,!r){try{n.preventDefault()}catch(e){}n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}}},o=["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"];o.forEach((e=>document.addEventListener(e,n,!0))),t._globalBlockerAdded=!0,t._globalBlockerHandler=n,t._globalBlockerEvents=o}(e,t)}(e,t)})),t.sliderCloseBtn){const n=n=>{n.preventDefault(),n.stopPropagation();try{n.stopImmediatePropagation()}catch(e){}f(e,t)};try{t.sliderCloseBtn.removeEventListener("click",t._closeHandler),t.sliderCloseBtn.removeEventListener("touchend",t._closeHandler)}catch(e){}t.sliderCloseBtn.addEventListener("click",n),t.sliderCloseBtn.addEventListener("touchend",n),t.sliderCloseBtn.addEventListener("touchstart",(e=>{e.preventDefault(),e.stopPropagation()}),{passive:!1}),t._closeHandler=n}t.sliderToggleAdded=!0}const o=!!n.overlayAtCardLevel,r=e.elements.cardWrapper||e.elements.mainContainer||e.content,i=o?r:n.groupContainer||r;if(t.sliderWrapper.parentNode!==i){try{t.sliderWrapper.parentNode?.removeChild(t.sliderWrapper)}catch(e){}i.appendChild(t.sliderWrapper)}t.sliderWrapper.classList.remove("inline"),t.sliderContainer.classList.remove("inline"),t.sliderWrapper.classList.remove("fill-width"),t.sliderContainer.classList.remove("fill-width");try{t._parentGroupContainer=o?null:n.groupContainer||null}catch(e){}}if(n.alwaysVisible){if(t._outsideClickListenerAdded&&t._outsideClickHandler){try{document.removeEventListener("click",t._outsideClickHandler,!1)}catch(e){}try{delete t._outsideClickHandler}catch(e){}t._outsideClickListenerAdded=!1}}else if(!t._outsideClickListenerAdded){const n=n=>{if(!t.sliderOpen||t.sliderAlwaysVisible)return;const o=n.target,r=t.sliderContainer&&t.sliderContainer.contains(o)||b(t,n),i=!0===t._blockerPointerDownInside,a=!(!t.sliderContext||!t.sliderContext.dragging);r||t.contains&&t.contains(o)||i||a||f(e,t)};document.addEventListener("click",n,{passive:!0}),t._outsideClickListenerAdded=!0,t._outsideClickHandler=n}try{t.sliderCloseBtn&&(n.overlayAtCardLevel?t.sliderCloseBtn.classList.add("top-aligned"):t.sliderCloseBtn.classList.remove("top-aligned")),t.sliderWrapper&&(n.overlayAtCardLevel?t.sliderWrapper.classList.add("top-aligned"):t.sliderWrapper.classList.remove("top-aligned"))}catch(e){}!function(e,t){if(!e||!t)return;const n=null!=t.index?String(t.index).replace(/_/g,"-"):null,o=e.dataset?.sliderIndexClass;if(n){const t=`bubble-sub-button-slider-${n}`;o&&o!==t&&e.classList.remove(o),e.classList.add(t),e.dataset.sliderIndexClass=t}else o&&(e.classList.remove(o),delete e.dataset.sliderIndexClass);const i=(0,r.mp)(t.subButton?.name),a=e.dataset?.sliderNameClass;a&&a!==i&&e.classList.remove(a),i?(e.classList.add(i),e.dataset.sliderNameClass=i):a&&delete e.dataset.sliderNameClass}(t.sliderContainer,n)}function v(e,t,n){(0,a.gQ)(t,n.subButton),(0,a.L)(t,n.subButton,n.section||"main",n.groupContainer||null),(0,a.uH)(t,n.subButton),"slider"===n.subButtonType?function(e,t,n){const o=(0,a.nu)(n,e,t);(0,a.Y1)(t,n);const r=t._previousDisplayedState,i=t._previousState,l=n.state?.state,c=r!==o,d=i!==l;t._previousDisplayedState=o,t._previousState=l,(c||d||void 0===r)&&((0,a.rz)(t,n),(0,a.m_)(t,n,o),t.nameContainer&&(0,a.NH)(e,t.nameContainer,o,n.subButton));const p=n.subButton?.light_slider_type??n.light_slider_type;let b;if(b="hue"===p?n.subButton?.icon||"mdi:palette":"saturation"===p?n.subButton?.icon||"mdi:contrast-circle":"white_temp"===p?n.subButton?.icon||"mdi:thermometer":n.icon,n.showIcon&&b){let e=t.icon;if(e||(e=document.createElement("ha-icon"),e.classList.add("bubble-sub-button-icon"),e.classList.add("show-icon"),t.appendChild(e),t.icon=e),e.icon!==b){e.setAttribute("icon",b);try{e.icon=b}catch(e){}}(0,s.jA)(e,o)}else t.icon&&(t.icon.classList.remove("show-icon"),t.icon.classList.add("hidden"));if(t.icon?.getAttribute("icon")!==t.icon?.icon)try{t.icon.icon=t.icon.getAttribute("icon")}catch(e){}y(e,t,n);const h=!(!n.alwaysVisible||!n.subButton?.show_button_info);h&&t.icon&&t.sliderInfoWrapper?t.icon.parentNode!==t.sliderInfoWrapper&&t.sliderInfoWrapper.appendChild(t.icon):t.icon&&!h&&t.icon.parentNode!==t&&t.appendChild(t.icon),t.sliderContext&&(t.sliderContext._hass=e._hass,(0,u.VM)(t.sliderContext))}(e,t,n):"select"===n.subButtonType||!n.subButton?.sub_button_type&&n.isSelect?function(e,t,n){const{isSelect:o,showArrow:r,entity:i,subButton:d}=n;o&&t.dropdownSelect&&(function(e,t,n,o){const r=e._hass.states[n],i=o?.select_attribute,a=r&&i?(0,c.aX)(r,i):r?.state,s=e.previousValues[n]?.selectedValue;a!==s&&(a&&t.dropdownSelect&&t.dropdownSelect.value!==a&&(t.dropdownSelect.value=a,t.dropdownSelect.dispatchEvent(new Event("change",{bubbles:!0}))),e.previousValues[n]={selectedValue:a})}(e,t,i,d),(0,l.O)(e,t,i,d),function(e,t){e.style.removeProperty("padding"),t?(e.dropdownArrow.style.display="",e.dropdownContainer.style.width="24px"):(e.dropdownArrow.style.display="none",e.dropdownContainer.style.width="0px")}(t,r));const u=(0,a.nu)(n,e,t);(0,a.Y1)(t,n);const p=t._previousDisplayedState,b=t._previousState,h=n.state?.state,m=p!==u,g=b!==h;t._previousDisplayedState=u,t._previousState=h,(m||g||void 0===p)&&((0,a.rz)(t,n),(0,a.m_)(t,n,u),t.nameContainer&&(0,a.NH)(e,t.nameContainer,u,n.subButton));const f=function(e){return!(!e.isSelect||!e.state)&&((0,c.aX)(e.state,e.subButton.select_attribute)??!1)}(n),y=t._prevSelectedOption,v=t._prevConfigIcon,_=y!==f,w=v!==n.icon;t._prevSelectedOption=f,t._prevConfigIcon=n.icon,(0,s.DK)(t,n,u,{beforeIconUpdate:(n,o)=>{if(_||w||void 0===y)if(f){const r=(0,c.z_)(e,o.state,o.subButton.select_attribute,f);if(r&&!o.subButton.icon)return function(e,t,n,o){if("HA-ATTRIBUTE-ICON"===t.tagName&&"HA-ATTRIBUTE-ICON"===n.tagName)return(t.attribute!==n.attribute||t.attributeValue!==n.attributeValue)&&(t.attribute=n.attribute,t.attributeValue=n.attributeValue,t.hass=n.hass,t.stateObj=n.stateObj),function(e){if("HA-ATTRIBUTE-ICON"===e.tagName){if(null!=e.getAttribute?.("icon")&&e.removeAttribute("icon"),void 0!==e.icon)try{e.icon=""}catch(e){}e.style?.color&&(e.style.color="")}}(t),t;const r=t.icon??t.getAttribute?.("icon"),i=n.icon??n.getAttribute?.("icon");return t.tagName!==n.tagName||r!==i?(e.replaceChild(n,t),e.icon=n,n):(o&&r!==o&&t.setAttribute("icon",o),t)}(t,n,r,o.icon);n.icon!==o.icon&&n.setAttribute("icon",o.icon)}else n.icon!==o.icon&&n.setAttribute("icon",o.icon);return n}}),"HA-ICON"===t.icon?.tagName&&t.icon.getAttribute("icon")!==t.icon.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,t,n):function(e,t,n){const o=(0,a.nu)(n,e,t);(0,a.Y1)(t,n);const r=t._previousDisplayedState,i=t._previousState,l=n.state?.state,c=r!==o,d=i!==l;t._previousDisplayedState=o,t._previousState=l,(c||d||void 0===r)&&((0,a.rz)(t,n),(0,a.m_)(t,n,o),t.nameContainer&&(0,a.NH)(e,t.nameContainer,o,n.subButton)),(0,s.DK)(t,n,o),t.icon?.getAttribute("icon")!==t.icon?.icon&&t.icon.setAttribute("icon",t.icon.icon)}(e,t,n)}function _(e){const t=(0,a.mg)(e.config),n=Array.isArray(t.main)?t.main:[],o=Array.isArray(t.bottom)?t.bottom:[],r=[];return n.filter((e=>e&&!Array.isArray(e.group))).forEach((t=>{const n=t.entity??e.config.entity,o=e._hass.states[n];r.push(o?.state??"unknown")})),[...n.filter((e=>e&&Array.isArray(e.group))).map((e=>e.group)),...o.filter((e=>e&&Array.isArray(e.group))).map((e=>e.group))].forEach((t=>{t.forEach((t=>{if(t){const n=t.entity??e.config.entity,o=e._hass.states[n];r.push(o?.state??"unknown")}}))})),r}function w(e,t=e.config.sub_button){!function(e){e.elements&&Object.keys(e.elements).forEach((t=>{const n=e.elements[t];n&&n.sliderContext&&n.sliderContext.config&&(n.sliderContext._hass=e._hass,(0,u.VM)(n.sliderContext))})),e.elements&&e.elements.groups&&Object.values(e.elements.groups).forEach((t=>{t.buttons&&Object.values(t.buttons).forEach((t=>{t&&t.sliderContext&&t.sliderContext.config&&(t.sliderContext._hass=e._hass,(0,u.VM)(t.sliderContext))}))}))}(e),function(e,t){if(!t)return;let n;n=Array.isArray(t)?{main:t,bottom:[]}:(0,a.lc)(t)?t:(0,a.zD)(t||[]),e.previousValues=e.previousValues||{},(Array.isArray(n.main)?n.main:[]).filter((e=>e&&!Array.isArray(e.group))),e.previousValues.mainSubButtons;const s=Array.isArray(n.bottom)?n.bottom:[],l=e.config?.sub_button?.main_layout??"inline",c=(Array.isArray(n.main)?n.main:[]).some((e=>e&&Array.isArray(e.group)&&e.group.length>0)),d=s.some((e=>e&&Array.isArray(e.group)&&e.group.length>0)),u=s.some((e=>e&&!Array.isArray(e.group)));let p=1;"rows"===l||c||u||d||(Array.isArray(n.main)?n.main:[]).forEach((t=>{if(!t||Array.isArray(t.group))return;const n=(0,a.H2)(e,t,p);if("fan_modes"===n.attributeType&&null==n.attribute){let i=e.elements[n.index];if(!i){const e=["bubble-sub-button",`bubble-sub-button-${n.index}`];if(t?.name){const n=(0,r.mp)(t.name);n&&e.push(n)}i=(0,o.n)("div",e.join(" "))}return i.classList.add("hidden"),void p++}let i=e.elements[n.index];const s="slider"===n.subButtonType&&n.alwaysVisible;i?s&&i.parentElement&&i.parentElement.removeChild(i):i=(0,r.nE)(e,n.index,n.isSelect,n.showArrow,n.entity,t,null,{attachToDom:!s}),s||i.isConnected||!e.elements.subButtonContainer||e.elements.subButtonContainer.appendChild(i),(0,a.pZ)(i,t,e)||(v(e,i,{...n,subButton:t,groupContainer:null,section:"main"}),(0,a.Zu)(i,t,e._hass,e)),p++})),function(e,t){let n;e.elements.groups=e.elements.groups||{},e.previousValues=e.previousValues||{},e.previousValues.groupButtons=e.previousValues.groupButtons||{},n=Array.isArray(t)?{main:t,bottom:[]}:t&&(Array.isArray(t.main)||Array.isArray(t.bottom))?t:(0,a.mg)(e.config);const o=(Array.isArray(n.main)?n.main:[]).filter((e=>e&&!Array.isArray(e.group))),i=(Array.isArray(n.bottom)?n.bottom:[]).filter((e=>e&&!Array.isArray(e.group))),s=(Array.isArray(n.main)?n.main:[]).map(((e,t)=>({key:`g_main_${t}`,position:"top",item:e}))).filter((({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0)),l=(Array.isArray(n.bottom)?n.bottom:[]).map(((e,t)=>({key:`g_bottom_${t}`,position:"bottom",item:e}))).filter((({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0)),c=e.config?.sub_button?.main_layout??"inline",d=e.config?.sub_button?.bottom_layout??"inline",u=o,p=s.length>0,b="rows"===c||p||i.length>0||l.length>0;let h=[];u.length>0&&b&&(h=[{key:"g_main_auto",position:"top",item:{group:u,buttons_layout:"inline"}}]);const m=(Array.isArray(n.bottom)?n.bottom:[]).filter((e=>e&&Array.isArray(e.group)&&e.group.length>0));let g=[];i.length>0&&(m.length>0?i.forEach(((e,t)=>{g.push({key:`g_bottom_individual_${t}`,position:"bottom",item:{group:[e],buttons_layout:"inline"}})})):g=[{key:"g_bottom_auto",position:"bottom",item:{group:i,buttons_layout:"inline"}}]);const f=[...s,...h,...l,...g].map((({key:e,position:t,item:n})=>({key:e,group:{buttons:n.group,position:t,justify_content:n.justify_content,group_layout:"bottom"===t?d:c,display:n.buttons_layout}})));let y=h.length>0?1:o.length+1;f.forEach((({key:t,group:n})=>{if(!n||!Array.isArray(n.buttons))return;e.elements.groups[t]||(e.elements.groups[t]={buttons:{}}),e.previousValues.groupButtons[t]||(e.previousValues.groupButtons[t]=[]);const o=e.elements.groups[t],i=o.container;if(!i)return;const s=n.buttons.filter((e=>e&&!e.fill_width&&null!=e.width&&""!==e.width)).length;s>0&&i.classList.contains("display-inline")?i.dataset.totalButtonsWithWidth=s.toString():delete i.dataset.totalButtonsWithWidth,n.buttons.forEach(((s,l)=>{if(!s)return;const c=y;y++;const d=`${t}_button_${l}`,u=(0,a.H2)(e,s,c),p="slider"===u.subButtonType&&u.alwaysVisible;let b=o.buttons?o.buttons[d]:null;if(b){const e=`bubble-sub-button-${String(c).replace(/_/g,"-")}`,t=Array.from(b.classList).find((e=>e.startsWith("bubble-sub-button-")&&"bubble-sub-button"!==e));t!==e&&(t&&b.classList.remove(t),b.classList.add(e))}else b=(0,r.nE)(e,c,u.isSelect,u.showArrow,u.entity,s,i,{attachToDom:!p}),o.buttons||(o.buttons={}),o.buttons[d]=b;if(p&&b.parentElement?b.parentElement.removeChild(b):p||b.isConnected||!i||i.appendChild(b),(0,a.pZ)(b,s,e))return;const h="top"===(n.position||"top")&&"slider"===s.sub_button_type&&!s.always_visible,m="bottom"===(n.position||"top"),g=m?{...s,fill_width:null==s.fill_width||s.fill_width}:s,f=m?"bottom":"main";v(e,b,{...u,subButton:g,groupContainer:i,overlayAtCardLevel:h,section:f}),(0,a.Zu)(b,s,e._hass,e)})),function(e){if(!e)return;const t=Array.from(e.querySelectorAll(".bubble-sub-button")),n=Array.from(e.querySelectorAll(".bubble-sub-slider-wrapper.inline")),o=0===t.length||t.every((e=>e.classList.contains("hidden")||"none"===e.style.display)),r=n.some((e=>"none"!==e.style.display&&!e.classList.contains("hidden"))),i=o&&!r;e.classList.toggle("hidden",i)}(i),(0,r.cj)(i)}))}(e,n),(0,i.iJ)(e)}(e,t),function(e){Array.isArray(e.subButtonIcon)||(e.subButtonIcon=[]);("pop-up"===e.config.card_type?e.popUp:e.content).querySelectorAll(".bubble-sub-button-icon").forEach(((t,n)=>{e.subButtonIcon[n]=t})),e.elements&&e.elements.groups&&Object.values(e.elements.groups).forEach((t=>{t.container&&t.container.querySelectorAll(".bubble-sub-button-icon").forEach((t=>{e.subButtonIcon.push(t)}))}))}(e)}},391:(e,t,n)=>{n.d(t,{nE:()=>w,gS:()=>u,mp:()=>_,cj:()=>y});var o=n(716),r=n(361),i=n(653),a=n(175);const s='.bubble-sub-button-container {\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: var(--bubble-sub-button-justify-content, end);\r\n    right: 8px;\r\n    align-content: center;\r\n    gap: 8px;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-sub-button-container.fixed-top {\r\n    align-self: flex-start;\r\n}\r\n\r\n.fixed-top .bubble-sub-button-container {\r\n    margin-top: 10px;\r\n}\r\n\r\n/* Group containers */\r\n.bubble-sub-button-group {\r\n    display: flex;\r\n    position: relative;\r\n    gap: 8px;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-sub-button-group.position-top,\r\n.bubble-sub-button-group.position-bottom {\r\n    margin-top: 0;\r\n}\r\n\r\n.bubble-sub-button-bottom-container {\r\n    position: absolute;\r\n    display: flex;\r\n    justify-content: var(--bubble-sub-button-justify-content, end);\r\n    bottom: 0;\r\n    width: calc(100% - 16px);\r\n    margin: 0 8px 8px 8px;\r\n    gap: 8px;\r\n    pointer-events: none;\r\n    flex-wrap: nowrap;\r\n    /* Allow bottom inline sliders to shrink without affecting top sliders */\r\n    --slider-container-min-width: 36px;\r\n}\r\n\r\n.bubble-sub-button-bottom-container.alignment-lanes-active {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-sub-button-bottom-container.with-main-buttons-bottom {\r\n    bottom: 44px;\r\n}\r\n\r\n.bubble-sub-button-bottom-container > * {\r\n    pointer-events: auto;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    gap: 8px;\r\n    align-items: center;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-start,\r\n.bubble-sub-button-alignment-lane.lane-center,\r\n.bubble-sub-button-alignment-lane.lane-end {\r\n    flex: 0 0 auto;\r\n    min-width: 0;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-start {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-center {\r\n    justify-content: center;\r\n    flex: 1 1 0%;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-end {\r\n    justify-content: flex-end;\r\n    margin-left: auto;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-expand {\r\n    flex: 1 1 0%;\r\n    min-width: 0;\r\n}\r\n\r\n.bubble-sub-button-alignment-lane.lane-fill {\r\n    flex: 1 1 100%;\r\n    width: 100%;\r\n    min-width: 0;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-sub-button-bottom-container .bubble-sub-button-group {\r\n    flex: 0 0 auto;\r\n    min-width: 0;\r\n}\r\n\r\n.bubble-sub-button-bottom-container .bubble-sub-button-group.alignment-fill,\r\n.bubble-sub-button-bottom-container .bubble-sub-button-group.alignment-fill-auto {\r\n    flex: 1 1 0%;\r\n}\r\n\r\n/* Display styles for groups */\r\n.bubble-sub-button-group.display-inline {\r\n    flex-direction: row;\r\n    justify-content: var(--bubble-sub-button-group-justify-content, end);\r\n}\r\n\r\n.bubble-sub-button-group.display-column {\r\n    flex-direction: column;\r\n    align-items: var(--bubble-sub-button-group-justify-content, end);\r\n    gap: 8px;\r\n}\r\n\r\n.bubble-sub-button-group.display-column > .bubble-sub-button,\r\n.bubble-sub-button-group.group-layout-inline > .bubble-sub-button {\r\n    width: auto;\r\n}\r\n\r\n/* Group placement layout (rows vs inline) */\r\n.bubble-sub-button-container.groups-layout-rows,\r\n.bubble-sub-button-bottom-container.groups-layout-rows {\r\n    flex-direction: column;\r\n}\r\n\r\n.bubble-sub-button-container.groups-layout-inline,\r\n.bubble-sub-button-bottom-container.groups-layout-inline {\r\n    flex-direction: row;\r\n}\r\n\r\n/* When groups-layout-rows is active, each group spans full width by default */\r\n.groups-layout-rows .bubble-sub-button-group {\r\n    width: 100%;\r\n}\r\n\r\n.bubble-sub-button {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row-reverse;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    right: 0;\r\n    box-sizing: border-box;\r\n    width: max-content;\r\n    min-width: 36px;\r\n    height: var(--bubble-sub-button-height, 36px);\r\n    vertical-align: middle;\r\n    font-size: 12px;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\r\n    padding: 0 8px;\r\n    white-space: nowrap;\r\n    transition: all 0.5s ease-in-out;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-sub-button.fill-width {\r\n    flex: 1 1 0%;\r\n}\r\n\r\n.bubble-sub-button-group.display-column > .bubble-sub-button.fill-width {\r\n    width: 100%;\r\n    flex: 0 0 auto;\r\n}\r\n\r\n/* When a slider is inline, allow it to expand to fill width when requested */\r\n.bubble-sub-slider-wrapper.inline.fill-width,\r\n.bubble-sub-button-slider.inline.fill-width {\r\n    flex: 1 1 0%;\r\n    width: 100%;\r\n    min-width: 0;\r\n}\r\n\r\n/* Hide only the host button content (icon + text) when inline slider is shown */\r\n.bubble-sub-button.inline-slider-host {\r\n    padding: 0;\r\n    min-width: 0;\r\n    display: none;\r\n}\r\n\r\n.bubble-sub-button.inline-slider-host > .bubble-sub-button-name-container,\r\n.bubble-sub-button.inline-slider-host > .bubble-sub-button-icon,\r\n.bubble-sub-button.inline-slider-host > .bubble-feedback-container,\r\n.bubble-sub-button.inline-slider-host > .bubble-dropdown-arrow {\r\n    display: none !important;\r\n}\r\n\r\n.bubble-sub-button-name-container {\r\n    display: flex;\r\n    overflow: auto;\r\n}\r\n\r\n/* Lower line-height when scrolling effect is disabled (multi-line mode) */\r\n.bubble-sub-button-name-container[style*="-webkit-box"] {\r\n    line-height: 1.1;\r\n}\r\n\r\n/* Content layout styles */\r\n.bubble-sub-button.content-icon-top,\r\n.bubble-sub-button.content-icon-bottom,\r\n.bubble-sub-button.content-icon-right,\r\n.bubble-sub-button.content-icon-left {\r\n    justify-content: center;\r\n}\r\n\r\n.bubble-sub-button.content-icon-top {\r\n    flex-direction: column-reverse;\r\n}\r\n\r\n.bubble-sub-button.content-icon-bottom {\r\n    flex-direction: column;\r\n}\r\n\r\n.bubble-sub-button.content-icon-right {\r\n    flex-direction: row;\r\n}\r\n\r\n.bubble-sub-button.content-icon-left {\r\n    flex-direction: row-reverse;\r\n}\r\n\r\n.content-icon-right .icon-with-state {\r\n    margin: 0 0 0 4px;\r\n}\r\n\r\n.content-icon-top .icon-with-state,\r\n.content-icon-bottom .icon-with-state {\r\n    margin: 0;\r\n}\r\n\r\n.show-icon {\r\n    display: flex;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n.bubble-sub-button-image {\r\n    background-size: cover;\r\n    background-position: center;\r\n    min-width: 20px;\r\n    min-height: 20px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.bubble-sub-button-image.icon-with-state {\r\n    margin-right: 4px;\r\n}\r\n\r\n.bubble-sub-button-image.icon-without-state,\r\n.content-icon-top .bubble-sub-button-image.icon-with-state,\r\n.content-icon-bottom .bubble-sub-button-image.icon-with-state {\r\n    margin: 0;\r\n}\r\n\r\n.content-icon-right .bubble-sub-button-image.icon-with-state {\r\n    margin: 0 0 0 4px;\r\n}\r\n\r\n/* Full-size entity picture when only the icon is displayed */\r\n.bubble-sub-button.has-image-full {\r\n    padding: 0;\r\n}\r\n\r\n.bubble-sub-button-image.image-full {\r\n    position: absolute;\r\n    inset: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    min-width: unset;\r\n    min-height: unset;\r\n    border-radius: inherit;\r\n    margin: 0;\r\n}\r\n\r\n.bright-background {\r\n    color: var(--bubble-sub-button-dark-text-color, rgb(0, 0, 0));\r\n}\r\n\r\n.background-on {\r\n    background-color: var(--bubble-sub-button-light-background-color, var(--bubble-accent-color, var(--bubble-default-color)));\r\n}\r\n\r\n.background-off {\r\n    background-color: var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n\r\n.icon-with-state {\r\n    margin-right: 4px;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n.icon-without-state {\r\n    margin-right: 0;\r\n    --mdc-icon-size: 20px;\r\n}\r\n\r\n.no-icon-select-arrow {\r\n    width: 24px !important;\r\n    height: 24px !important;\r\n    --mdc-icon-size: 24px;\r\n}\r\n\r\n.no-icon-select-container {\r\n    width: 16px !important;\r\n}\r\n\r\n.bubble-sub-button .bubble-dropdown-container {\r\n    position: static;\r\n    width: 36px;\r\n    height: 36px;\r\n}\r\n\r\n.bubble-sub-button .bubble-dropdown-arrow {\r\n    background: none !important;\r\n}\r\n\r\n.bubble-sub-button .bubble-dropdown-select {\r\n    position: absolute;\r\n    inset: 0;\r\n    width: auto;\r\n    height: 36px;\r\n    margin: auto;\r\n}\r\n\r\n.bubble-sub-button.is-select.background-on {\r\n    background-color: var(--bubble-select-arrow-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n\r\n.sub-buttons-grid .bubble-sub-button-container {\r\n    display: grid;\r\n    row-gap: calc( ( ( var(--row-height,56px) - 36px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( var(--row-size,1) + 1 ));\r\n    grid-template-rows: repeat(var(--row-size,1), 1fr);\r\n    grid-template-columns: repeat(1, 1fr);\r\n    grid-auto-flow: column;\r\n}\r\n\r\n.sub-buttons-grid .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\r\n    grid-row: 1 / calc(var(--row-size,1) + 1);\r\n}\r\n\r\n.rows-2 .bubble-sub-button-container {\r\n    flex-direction: column;\r\n    gap: 4px !important;\r\n    row-gap: calc( ( ( var(--row-height,56px) - 40px ) * var(--row-size,1) + var(--row-gap, 8px) * ( var(--row-size,1) - 1 ) ) / ( 2*var(--row-size,1) + 2 ));\r\n    column-gap: 4px !important;\r\n    display: grid !important;\r\n    grid-template-columns: repeat(1, 1fr);\r\n    grid-template-rows: repeat(calc(2*var(--row-size,1)), minmax(auto, max-content));\r\n    grid-auto-flow: column;\r\n    width: auto;\r\n}\r\n\r\n.rows-2 .bubble-sub-button {\r\n    height: 20px;\r\n    justify-content: left;\r\n}\r\n\r\n.large.rows-2 .bubble-sub-button-container:has(> :last-child:nth-child(2)) :nth-child(2) {\r\n    grid-row: 1 / calc(2*var(--row-size,1) + 1);\r\n}\r\n\r\n/* Slider overlay wrapper: holds slider + close button and positions them relatively to card/group */\r\n.bubble-sub-slider-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    height: 36px;\r\n    width: calc(100% - 16px);\r\n    left: 8px;\r\n    right: 8px;\r\n    z-index: 2;\r\n    opacity: 1;\r\n    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;\r\n    transform: translateX(0);\r\n    /* Prevent browser from handling horizontal pan on mobile during drag */\r\n    touch-action: none;\r\n}\r\n\r\n/* The actual slider surface in overlay mode fills remaining space inside wrapper */\r\n.bubble-sub-slider-wrapper > .bubble-sub-button-slider {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    border-radius: var(--bubble-sub-slider-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-sub-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n\r\n/* Align wrapper vertically when overlay is card-level at top */\r\n.bubble-sub-slider-wrapper.top-aligned {\r\n    top: 7px;\r\n    bottom: auto;\r\n}\r\n\r\n/* Specific positioning for bottom containers to maintain existing behavior */\r\n.bubble-sub-button-bottom-container .bubble-sub-slider-wrapper {\r\n    width: 100%;\r\n    left: 0;\r\n    right: auto;\r\n}\r\n\r\n.bubble-sub-slider-close {\r\n    display: flex;\r\n    position: relative;\r\n    right: auto;\r\n    height: 36px;\r\n    width: 36px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    z-index: 3;\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-button-background-color);\r\n    transition: all 0.3s ease;\r\n    touch-action: none;\r\n    -webkit-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.bubble-sub-slider-close ha-icon {\r\n    --mdc-icon-size: 20px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-sub-button-slider .bubble-range-value {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 36px;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    opacity: 0.8;\r\n    z-index: 1;\r\n}\r\n\r\n.is-hidden {\r\n    opacity: 0 !important;\r\n    pointer-events: none;\r\n    transform: translateX(14px);\r\n}\r\n\r\n.bubble-icon-container.is-hidden,\r\n.bubble-main-icon-container.is-hidden,\r\n.bubble-sub-slider-close.is-hidden {\r\n    transform: none;\r\n}\r\n\r\n.bubble-icon-container.is-hidden,\r\n.bubble-main-icon-container.is-hidden {\r\n    transition: opacity 0.15s ease-in-out;\r\n}\r\n\r\n/* Allow overlay sliders to translate out without extending card width */\r\n.bubble-sub-slider-wrapper:not(.inline).is-hidden {\r\n    right: calc(8px + 14px);\r\n}\r\n\r\n/* Bottom-aligned overlays rely on explicit width instead of right offsets */\r\n.bubble-sub-button-bottom-container .bubble-sub-slider-wrapper:not(.inline).is-hidden {\r\n    width: calc(100% - 14px);\r\n}\r\n\r\n.bubble-sub-button-slider .bubble-range-fill {\r\n    height: 101%; /* Ensure the fill is not glitching */\r\n}\r\n\r\n.bubble-sub-button-slider .bubble-range-fill.slider-use-light-color {\r\n    opacity: 1;\r\n}\r\n\r\n.large .bubble-sub-slider-wrapper,\r\n.large .bubble-sub-button-slider .bubble-range-value {\r\n    height: 36px;\r\n}\r\n\r\n.large .bubble-sub-slider-wrapper > .bubble-sub-button-slider {\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\r\n}\r\n\r\n.large .bubble-sub-button-slider .bubble-range-value {\r\n    place-items: center;\r\n}\r\n\r\n/* Inline sub-slider mode (alwaysVisible): wrapper + slider sit inside sub-buttons row */\r\n.bubble-sub-slider-wrapper.inline {\r\n    position: relative;\r\n    left: 0;\r\n    width: auto;\r\n    height: var(--bubble-sub-slider-height, 36px);\r\n    transform: none;\r\n    z-index: 1;\r\n    touch-action: pan-y pinch-zoom;\r\n    flex-shrink: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Vertical inline sliders: allow horizontal scroll, block vertical initially */\r\n.bubble-sub-slider-wrapper.inline:has(.fill-orientation-top),\r\n.bubble-sub-slider-wrapper.inline:has(.fill-orientation-bottom) {\r\n    touch-action: pan-x pinch-zoom;\r\n}\r\n\r\n/* Custom width wrapper styles */\r\n.bubble-sub-slider-wrapper.inline.has-custom-width {\r\n    flex: 0 0 auto;\r\n}\r\n\r\n/* Slider container inline styles */\r\n.bubble-sub-button-slider.inline {\r\n    position: relative;\r\n    left: 0;\r\n    width: auto;\r\n    min-width: var(--slider-container-min-width, 96px);\r\n    height: var(--bubble-sub-slider-height, 36px);\r\n    transform: none;\r\n    opacity: 1;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\r\n}\r\n\r\n/* Bottom section: container fills wrapper width */\r\n.bubble-sub-button-bottom-container .bubble-sub-button-slider.inline.has-custom-width,\r\n.bubble-sub-button-group.position-bottom .bubble-sub-button-slider.inline.has-custom-width {\r\n    width: 100%;\r\n    min-width: 0;\r\n}\r\n\r\n/* Main section: container respects wrapper width when custom width is small */\r\n.bubble-sub-button-container .bubble-sub-button-slider.inline.has-custom-width,\r\n.bubble-sub-button-group.position-top .bubble-sub-button-slider.inline.has-custom-width,\r\n.bubble-sub-button-group:not(.position-bottom) .bubble-sub-button-slider.inline.has-custom-width {\r\n    min-width: var(--slider-container-min-width, 96px);\r\n}\r\n/* Horizontal inline sliders: allow vertical scroll, block horizontal */\r\n.bubble-sub-button-slider.inline.slider-container,\r\n.bubble-sub-button-slider.inline .bubble-range-slider {\r\n    touch-action: pan-y pinch-zoom;\r\n}\r\n\r\n/* Vertical inline sliders: allow horizontal scroll, block vertical */\r\n.bubble-sub-button-slider.inline.slider-container:has(.fill-orientation-top),\r\n.bubble-sub-button-slider.inline.slider-container:has(.fill-orientation-bottom),\r\n.bubble-sub-button-slider.inline .bubble-range-slider.fill-orientation-top,\r\n.bubble-sub-button-slider.inline .bubble-range-slider.fill-orientation-bottom {\r\n    touch-action: pan-x pinch-zoom;\r\n}\r\n\r\n/* When touching (pre-drag) any inline slider, allow pinch-zoom but block panning natively */\r\n.bubble-sub-button-slider.inline.slider-container.is-touching,\r\n.bubble-sub-button-slider.inline.slider-container.is-touching .bubble-range-slider,\r\n.bubble-sub-button-slider.inline .bubble-range-slider.is-touching {\r\n    touch-action: pinch-zoom;\r\n}\r\n\r\n/* When dragging any inline slider, block all touch actions to prevent conflicts */\r\n.bubble-sub-button-slider.inline.slider-container.is-dragging,\r\n.bubble-sub-button-slider.inline.slider-container.is-dragging .bubble-range-slider {\r\n    touch-action: none;\r\n}\r\n\r\n.bubble-sub-button-slider > .bubble-range-slider {\r\n    overflow: visible; /* Fix a slight visual glitch when border-radius is applied to the slider */\r\n}\r\n\r\n.bubble-sub-button-slider.inline .bubble-range-value {\r\n    height: var(--bubble-sub-slider-height, 36px);\r\n}\r\n\r\n/* Fade only group content when a group-owned slider is open */\r\n.bubble-sub-button-group.group-slider-open > *:not(.bubble-sub-slider-wrapper),\r\n.bubble-sub-button-group.group-slider-open > .bubble-sub-slider-wrapper.inline {\r\n    opacity: 0;\r\n    pointer-events: none;\r\n    transition: opacity .2s ease;\r\n}\r\n\r\n.element-actions {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n/* Slider with button info container - same structure as normal sub-button */\r\n.bubble-sub-button-info-wrapper {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-end;\r\n    padding: 0 12px 0 12px;\r\n    font-size: 12px;\r\n    color: var(--primary-text-color);\r\n    z-index: 1;\r\n    pointer-events: none;\r\n    min-width: 0;\r\n    width: 100%;\r\n    height: var(--bubble-sub-slider-height, 36px);\r\n    position: relative;\r\n    white-space: nowrap;\r\n}\r\n\r\n/* When with-button-info is active, use row-reverse for proper icon/name/value order */\r\n.bubble-sub-button-slider.inline.with-button-info .bubble-sub-button-info-wrapper {\r\n    flex-direction: row-reverse;\r\n    justify-content: flex-start;\r\n}\r\n\r\n/* When with-button-info is active, value should always be on the right (forced) */\r\n.bubble-sub-button-slider.inline.with-button-info .bubble-sub-button-info-wrapper .bubble-range-value.in-info-wrapper {\r\n    margin-left: auto;\r\n}\r\n\r\n.bubble-sub-button-info-wrapper .bubble-sub-button-name-container {\r\n    overflow: auto;\r\n    min-width: 0;\r\n    flex-shrink: 1;\r\n    margin-right: 16px;\r\n}\r\n\r\n.bubble-sub-button-info-wrapper .bubble-sub-button-icon {\r\n    flex-shrink: 0;\r\n}\r\n\r\n.bubble-sub-button-info-wrapper .bubble-sub-button-icon.icon-with-state {\r\n    margin-right: 4px;\r\n}\r\n\r\n.bubble-sub-button-info-wrapper .bubble-sub-button-icon.icon-without-state {\r\n    margin-right: 0;\r\n}\r\n\r\n.bubble-sub-button-info-wrapper .bubble-range-value.in-info-wrapper {\r\n    position: static;\r\n    transform: none;\r\n    padding: 0;\r\n    flex-shrink: 0;\r\n    display: flex;\r\n    opacity: 0.8;\r\n    pointer-events: auto;\r\n}\r\n\r\n/* Respect value-position classes from rangeSlider (only when show_button_info is false) */\r\n.bubble-sub-button-slider.inline:not(.with-button-info):has(.bubble-range-slider.value-position-right) .bubble-sub-button-info-wrapper,\r\n.bubble-sub-button-slider.inline:not(.with-button-info):has(.bubble-range-slider.value-position-inline-end) .bubble-sub-button-info-wrapper {\r\n    justify-content: flex-end;\r\n}\r\n\r\n.bubble-sub-button-slider.inline:not(.with-button-info):has(.bubble-range-slider.value-position-left) .bubble-sub-button-info-wrapper,\r\n.bubble-sub-button-slider.inline:not(.with-button-info):has(.bubble-range-slider.value-position-inline-start) .bubble-sub-button-info-wrapper {\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-sub-button-slider.inline:not(.with-button-info):has(.bubble-range-slider.value-position-center) .bubble-sub-button-info-wrapper {\r\n    justify-content: center;\r\n}\r\n\r\n/* Reset margin-left for all value positions except when with-button-info is active */\r\n.bubble-sub-button-slider.inline:not(.with-button-info) .bubble-sub-button-info-wrapper .bubble-range-value.in-info-wrapper {\r\n    margin-left: 0;\r\n}\r\n\r\n/* Hidden value position works for both modes */\r\n.bubble-sub-button-slider.inline:has(.bubble-range-slider.value-position-hidden) .bubble-sub-button-info-wrapper .bubble-range-value.in-info-wrapper {\r\n    display: none;\r\n}\r\n\r\n/* During drag: keep rangeValue visible, hide other info elements */\r\n.bubble-sub-button-slider.inline.is-dragging .bubble-range-value.in-info-wrapper,\r\n.bubble-sub-button-slider.inline.is-touching .bubble-range-value.in-info-wrapper {\r\n    opacity: 1 !important;\r\n    visibility: visible !important;\r\n}\r\n\r\n.bubble-sub-button-slider.inline.slider-hold-focus.is-dragging .bubble-sub-button-info-wrapper {\r\n    opacity: 1;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-sub-button-slider.inline.slider-hold-focus.is-dragging .bubble-sub-button-info-wrapper .bubble-sub-button-name-container,\r\n.bubble-sub-button-slider.inline.slider-hold-focus.is-dragging .bubble-sub-button-info-wrapper .bubble-sub-button-icon {\r\n    opacity: 0;\r\n}\r\n\r\n/* Ensure slider container has proper layout when info wrapper is present */\r\n.bubble-sub-button-slider.inline.has-info-wrapper {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.bubble-sub-button-slider.inline.has-info-wrapper .bubble-range-slider {\r\n    position: absolute;\r\n    inset: 0;\r\n    z-index: 0;\r\n}',l={start:1,center:2,fill:3,end:4},c="alignment-",d="bubble-sub-button-alignment-lane";function u(e,t={}){const{container:n=e.content,appendTo:r=n.firstChild?.firstChild,before:l=!1}=t;e.elements=e.elements||{},e.elements.groups=e.elements.groups||{};const c=(0,a.mg)(e.config),d=Array.isArray(c.main)?c.main:[],u=Array.isArray(c.bottom)?c.bottom:[],m=e.config?.sub_button?.main_layout??"inline",g=e.config?.sub_button?.bottom_layout??"inline";let y=e.elements.subButtonContainer;if(!y&&e.config.sub_button){y=(0,o.n)("div","bubble-sub-button-container");const t=(0,o.n)("style");t.textContent=s,y.appendChild(t),l&&r?r.prepend(y):r&&r.appendChild(y),e.elements.subButtonContainer=y,e.config.sub_button_justify_content&&y.style.setProperty("--bubble-sub-button-justify-content",e.config.sub_button_justify_content)}let v=e.elements.bottomSubButtonContainer;if(!v&&u.length>0){v=(0,o.n)("div","bubble-sub-button-bottom-container");const t=e.elements.cardWrapper||r;t&&t.appendChild(v),e.elements.bottomSubButtonContainer=v}else v&&0===u.length&&(v.remove(),delete e.elements.bottomSubButtonContainer,delete e.elements.bottomAlignmentLanes);(0,i.iJ)(e),v&&("inline"!==g?(function(e){const t=e.elements.bottomAlignmentLanes,n=e.elements.bottomSubButtonContainer;t&&n&&Object.keys(t).forEach((e=>{const o=t[e];if(o){for(;o.firstChild;){const e=o.firstChild;f(e),n.appendChild(e)}o.remove(),delete t[e]}}))}(e),h(e,!1)):e.elements.bottomAlignmentLanes=e.elements.bottomAlignmentLanes||{});const _=d.map(((e,t)=>({key:`g_main_${t}`,item:e,idx:t,position:"top"}))).filter((({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0)),w=u.map(((e,t)=>({key:`g_bottom_${t}`,item:e,idx:t,position:"bottom"}))).filter((({item:e})=>e&&Array.isArray(e.group)&&e.group.length>0)),x=[..._,...w],k=d.filter((e=>e&&!Array.isArray(e.group))),C=_.length>0,$="rows"===m||C||u.length>0;k.length>0&&$&&x.push({key:"g_main_auto",item:{group:k,buttons_layout:"inline"},idx:-1,position:"top"});const A=u.filter((e=>e&&!Array.isArray(e.group))),S=u.filter((e=>e&&Array.isArray(e.group)&&e.group.length>0));if(A.length>0&&(S.length>0?A.forEach(((e,t)=>{x.push({key:`g_bottom_individual_${t}`,item:{group:[e],buttons_layout:"inline"},idx:-1,position:"bottom"})})):x.push({key:"g_bottom_auto",item:{group:A,buttons_layout:"inline"},idx:-1,position:"bottom"})),x.length>0){const t=new Set(x.map((({key:e})=>e)));Object.keys(e.elements.groups).forEach((n=>{if((n.startsWith("g_main_")||n.startsWith("g_bottom_"))&&!t.has(n)&&e.elements.groups[n]?.container){const t=e.elements.groups[n].container;f(t),t.remove(),delete e.elements.groups[n]}})),x.forEach((({item:t,key:n,position:r})=>{e.elements.groups[n]||(e.elements.groups[n]={});const i="bottom"===r?g:m,a="bottom"===r?function(e){if(!e)return"fill";const t=String(e).toLowerCase().trim();return"fill"===t?"fill":["start","flex-start","left"].includes(t)?"start":["end","flex-end","right"].includes(t)?"end":"center"===t?"center":(["space-between","space-around","space-evenly","stretch"].includes(t),"fill")}(t.justify_content):null,s=e.elements.groups[n].alignmentKey;if(e.elements.groups[n].container){const o=e.elements.groups[n].container,l=o.className.match(/position-(\w+)/);l&&l[1]!==r&&(f(o),o.classList.remove(`position-${l[1]}`),o.classList.add(`position-${r}`));const c=o.className.match(/display-(\w+)/);c&&c[1]!==(t.buttons_layout||"inline")&&(o.classList.remove(`display-${c[1]}`),o.classList.add(`display-${t.buttons_layout||"inline"}`));const d=o.className.match(/group-layout-(\w+)/);d&&d[1]!==i&&(o.classList.remove(`group-layout-${d[1]}`),o.classList.add(`group-layout-${i}`)),o.style.setProperty("--bubble-sub-button-group-justify-content",t.justify_content||"end"),"bottom"===r&&s!==a&&b(o,a),p(e,o,r,i,a),e.elements.groups[n].alignmentKey=a}else{const s=(0,o.n)("div",`bubble-sub-button-group position-${r} display-${t.buttons_layout||"inline"} group-layout-${i}`);s.setAttribute("data-group-id",n),t.justify_content&&s.style.setProperty("--bubble-sub-button-group-justify-content",t.justify_content),"bottom"===r&&b(s,a),p(e,s,r,i,a),e.elements.groups[n].container=s,e.elements.groups[n].alignmentKey=a}})),v&&"inline"===g&&(function(e){const t=e.elements.bottomAlignmentLanes;t&&Object.keys(t).forEach((e=>{const n=t[e];n&&0===n.childElementCount&&(n.remove(),delete t[e])}))}(e),h(e,!0)),function(e){const t=e?.elements?.bottomSubButtonContainer,n=e?.elements?.subButtonContainer,o=e.config?.sub_button?.main_layout??"inline",r=e.config?.sub_button?.bottom_layout??"inline";t&&(t.classList.remove("groups-layout-rows","groups-layout-inline"),t.classList.add("rows"===r?"groups-layout-rows":"groups-layout-inline")),n&&(n.classList.remove("groups-layout-rows","groups-layout-inline"),n.classList.add("rows"===o?"groups-layout-rows":"groups-layout-inline"))}(e)}return(0,i.iJ)(e),y}function p(e,t,n,r,i){if("bottom"===n)return void function(e,t,n,r){const i=e.elements.bottomSubButtonContainer;if(!i)return;if("inline"!==n)return f(t),void(t.parentElement!==i&&i.appendChild(t));const a=function(e,t){const n=e.elements.bottomSubButtonContainer;if(!n)return null;e.elements.bottomAlignmentLanes=e.elements.bottomAlignmentLanes||{};let r=e.elements.bottomAlignmentLanes[t];return r?r.isConnected||n.appendChild(r):(r=(0,o.n)("div",`bubble-sub-button-alignment-lane lane-${t}`),r.dataset.lane=t,r.style.order=`${l[t]??l.fill}`,e.elements.bottomAlignmentLanes[t]=r,n.appendChild(r)),r}(e,r||"fill");a&&t.parentElement!==a&&a.appendChild(t),g(t,!1)}(e,t,r,i);const a=e.elements.subButtonContainer;a&&t.parentElement!==a&&a.appendChild(t)}function b(e,t){if(!e)return;["start","center","fill","end"].forEach((t=>{e.classList.remove(`${c}${t}`)}));const n=t||"fill";e.classList.add(`${c}${n}`)}function h(e,t){const n=e.elements.bottomSubButtonContainer;if(!n)return;const o=t&&function(e){const t=e.elements.bottomAlignmentLanes;return!!t&&Object.keys(t).length>0}(e);o?n.classList.add("alignment-lanes-active"):n.classList.remove("alignment-lanes-active")}function m(e){if(!e||!e.parentElement)return null;const t=e.parentElement;return t.classList&&t.classList.contains(d)?t:null}function g(e,t){const n=m(e);if(n){if(null===t)try{delete e.dataset.laneNeedsFill}catch(e){}else e.dataset.laneNeedsFill=t?"true":"false";v(n)}}function f(e){e?.classList?.remove("alignment-fill-auto"),g(e,null)}function y(e){const t=m(e);if(!t)return;const n=e.classList.contains(`${c}fill`)||!!e.querySelector(".bubble-sub-slider-wrapper.inline.fill-width, .bubble-sub-button-slider.inline.fill-width, .bubble-sub-button.fill-width"),o=e.classList.contains(`${c}fill`),r=n&&!o;e.classList.toggle("alignment-fill-auto",r),e.dataset.laneNeedsFill=n?"true":"false",v(t)}function v(e){e&&(e.classList.contains("lane-fill")||e.classList.contains("lane-center")||Array.from(e.children||[]).some((e=>"true"===e?.dataset?.laneNeedsFill))?e.classList.add("lane-expand"):e.classList.remove("lane-expand"))}function _(e){return e&&"string"==typeof e?e.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""):null}function w(e,t,n,i,s,l,c,d={}){e.elements.subButtonContainer||c||u(e);const{attachToDom:p=!0}=d,b=["bubble-sub-button",`bubble-sub-button-${String(t).replace(/_/g,"-")}`];if(l?.name){const e=_(l.name);e&&b.push(e)}const h=(0,o.n)("div",b.join(" "));h.nameContainer=(0,o.n)("div","bubble-sub-button-name-container"),h.feedbackContainer=(0,o.n)("div","bubble-feedback-container"),h.feedback=(0,o.n)("div","bubble-feedback-element feedback-element"),h.appendChild(h.feedbackContainer),h.feedbackContainer.appendChild(h.feedback),n&&(h.classList.add("is-select"),(0,r.Fi)(e,h,i),h.dropdownContainer.style.display="none",(0,r.XO)(e,h,s,l)),(0,a.gQ)(h,l);const m=c&&c.classList&&c.classList.contains("bubble-sub-button-group");return(0,a.L)(h,l,"main",m?c:null),(0,a.uH)(h,l),l.content_layout&&h.classList.add(`content-${l.content_layout}`),h.appendChild(h.nameContainer),c?p&&c.appendChild(h):(p&&e.elements.subButtonContainer.appendChild(h),e.elements[t]=h),h}},175:(e,t,n)=>{n.d(t,{H2:()=>c,L:()=>g,NH:()=>d,Y1:()=>b,Zu:()=>m,gQ:()=>y,lc:()=>_,m_:()=>p,mg:()=>x,nu:()=>u,pZ:()=>v,rz:()=>h,uH:()=>f,zD:()=>w});var o=n(716),r=n(216),i=n(388),a=n(642),s=n(315);function l(e,t,n){return t.force_icon||t.icon?"":(0,i.Qp)(e,n,!0)}function c(e,t,n){const r=t.entity??e.config.entity,a=r?.startsWith("input_select")||r?.startsWith("select")||t.select_attribute,s=t.sub_button_type,c=null!=s?"select"===s:a,d=s??(a?"select":"default");return{index:n,entity:r,context:e,state:e._hass.states[r],name:t.name??(0,o.D$)(e,"friendly_name",r)??"",attributeType:t.attribute??"",attribute:(0,o.D$)(e,t.attribute??"",r),isOn:(0,o.$C)(e,r),showName:t.show_name??!1,showState:t.show_state??!1,showAttribute:t.show_attribute??!1,showLastChanged:t.show_last_changed??!1,showLastUpdated:t.show_last_updated??!1,showIcon:t.show_icon??!0,showBackground:t.show_background??!0,stateBackground:t.state_background??!0,lightBackground:t.light_background??!0,showArrow:t.show_arrow??!0,isSelect:c,icon:(0,i.sW)(e,r,t.icon??""),image:l(e,t,r),subButtonType:d,alwaysVisible:t.always_visible??!1,subButton:t}}function d(e,t,n,o){if(!t||!n)return;const i=o?.scrolling_effect??e.config?.scrolling_effect??!0,a={...e,config:{...e.config,scrolling_effect:i}};(0,r.N)(a,t,n)}function u(e,t,n=null){const{state:r,name:i,attribute:a,attributeType:s,showName:l,showState:c,showAttribute:p,showLastChanged:b,showLastUpdated:h,entity:m}=e,g=[];if(l&&i&&"unknown"!==i&&g.push(i),r&&c&&"unknown"!==r.state){const i=(0,o.Vw)(m);if(i){const a=(0,o.ls)(r),s=(0,o.PF)(t._hass,r,a);s&&g.push(s),n&&"active"===r.state?(0,o.df)(n,t,m,(()=>{if(n.isConnected&&t._hass?.states?.[m]){const r=t._hass.states[m];if(r&&"active"===r.state){const o=u({...e,state:r},t,n);n.nameContainer&&d(t,n.nameContainer,o,e.subButton)}else(0,o.j9)(n)}else(0,o.j9)(n)})):n&&i&&(0,o.j9)(n)}else g.push(t._hass.formatEntityState(r)),n&&(0,o.j9)(n)}else n&&(0,o.j9)(n);if(r&&b&&"unknown"!==r.last_changed&&g.push((0,o.r6)(r.last_changed,t._hass.locale.language)),r&&h&&"unknown"!==r.last_updated&&g.push((0,o.r6)(r.last_updated,t._hass.locale.language)),r&&p)if(s.includes("forecast")){const e="km"===t._hass.config.unit_system.length,n=t._hass?.locale?.language||"en-US";if(s.includes("temperature")&&null!=a){const e=parseFloat(a),r=(0,o.$z)(t._hass),i=0===e||0===e?0:1;g.push((0,o.IU)(e,i,r,n))}else if(s.includes("humidity")&&null!=a)g.push((0,o.IU)(parseFloat(a),0,"%",n));else if(s.includes("precipitation")&&null!=a)g.push((0,o.IU)(parseFloat(a),1,"mm",n));else if(s.includes("wind_speed")&&null!=a){const t=e?"km/h":"mph";g.push((0,o.IU)(parseFloat(a),1,t,n))}else null!=a&&"unknown"!==a&&g.push(a)}else{const e=t._hass.formatEntityAttributeValue(r,s),n=r.attributes?.[s],o=e&&"string"==typeof e&&e.trim().startsWith("0")&&e.trim().length>1;(0!==a&&"unknown"!==a&&null!=a||o)&&"unknown"!==n&&null!=n&&g.push(e??a)}return g.length?g.join(" · ").charAt(0).toUpperCase()+g.join(" · ").slice(1):""}function p(e,t,n){const{showIcon:o,isSelect:r}=t;if(!e._hasVisibilityConditions){const t=!n&&!o&&!r;e.classList.toggle("hidden",t)}e.dropdownContainer&&(e.dropdownContainer.classList.toggle("no-icon-select-container",!n&&!o&&r),e.dropdownArrow.classList.toggle("no-icon-select-arrow",!n&&!o&&r))}function b(e,t){const{showBackground:n,isOn:r,stateBackground:a,lightBackground:s,entity:l,context:c}=t;if(!n)return(e.classList.contains("background-on")||e.classList.contains("background-off"))&&e.classList.remove("background-on","background-off"),void(e.style.getPropertyValue("--bubble-sub-button-light-background-color")&&e.style.removeProperty("--bubble-sub-button-light-background-color"));const d=(0,i.S1)(t.state,l),u=e._previousColorSignature!==d;if(e._previousColorSignature=d,r&&a){let t;if((0,o.m_)(c,l))t="var(--red-color, var(--error-color))";else{const e=c.config.card_type;if("slider"===c.config.button_type){let e=null;if(c.elements?.rangeFill)try{e=getComputedStyle(c.elements.rangeFill).backgroundColor}catch(e){}t=(0,o.C$)(c,l,s,e,null)}else{const n="button"===e?c.card?.style.getPropertyValue("--bubble-button-background-color"):c.popUp?.style.getPropertyValue("--bubble-button-background-color");t=(0,o.C$)(c,l,s,n||null)}}(e.style.getPropertyValue("--bubble-sub-button-light-background-color")!==t||u)&&e.style.setProperty("--bubble-sub-button-light-background-color",t),e.classList.contains("background-on")||(e.classList.add("background-on"),e.classList.remove("background-off"))}else e.classList.contains("background-off")||(e.classList.add("background-off"),e.classList.remove("background-on")),e.style.getPropertyValue("--bubble-sub-button-light-background-color")&&e.style.removeProperty("--bubble-sub-button-light-background-color")}function h(e,t){const{subButton:n,isSelect:r,entity:i}=t;if(("none"!==n.tap_action?.action||"none"!==n.double_tap_action?.action||"none"!==n.hold_action?.action)&&!e.actionAdded){const o={tap_action:{action:r?"none":"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}};if("slider"!==t.subButtonType||t.alwaysVisible)if(r){const t={...n,tap_action:{action:"none"}};(0,a.dN)(e,t,i),e.setAttribute("no-slide","")}else(0,a.dN)(e,n,i,o);else{const t={...n,tap_action:{action:"none"}};(0,a.dN)(e,t,i),e.setAttribute("no-slide","")}(0,a.pd)(e,e.feedback),r&&(e.style.pointerEvents="auto",e.style.cursor="pointer"),e.actionAdded=!0}if("slider"===t.subButtonType&&!t.alwaysVisible&&(e.classList.add("bubble-action"),e.style.cursor="pointer",e.style.pointerEvents="auto",!e.haRipple))try{e.haRipple=(0,o.n)("ha-ripple"),e.appendChild(e.haRipple)}catch(e){}}function m(e,t,n,o=null){const r=t.visibility,i=t=>{e?.sliderAlwaysVisible&&e.sliderWrapper&&(t?(e.sliderWrapper.style.removeProperty("display"),e.sliderWrapper.removeAttribute("aria-hidden")):(e.sliderWrapper.style.display="none",e.sliderWrapper.setAttribute("aria-hidden","true")))};if(null!=r){e._hasVisibilityConditions=!0;const t=(0,s.eC)(r);if((0,s.db)(t)){const r=(0,s.XH)(t,n);void 0!==e._previousVisibilityState&&e._previousVisibilityState===r||(e.classList.toggle("hidden",!r),e._previousVisibilityState=r,(t=>{if(!t&&e.sliderOpen&&!e.sliderAlwaysVisible&&e.sliderWrapper&&o){e.sliderWrapper.classList.add("is-hidden"),e.sliderOpen=!1,e.sliderCloseBtn&&e.sliderCloseBtn.classList.add("is-hidden");const t=e._parentGroupContainer;if(t&&t.classList&&t.classList.remove("group-slider-open"),!t&&o.elements){const e=(e,t)=>{e&&e.classList.toggle("is-hidden",t)};e(o.elements?.nameContainer,!1),e(o.elements?.iconContainer,!1),e(o.elements?.image,!1),e(o.elements?.buttonsContainer,!1),o.elements?.subButtonContainer&&(o.elements.subButtonContainer.style.opacity="",o.elements.subButtonContainer.style.pointerEvents="")}if(e._globalBlockerAdded&&e._globalBlockerHandler){try{(e._globalBlockerEvents||["pointerdown","pointerup","click","touchstart","touchend","mousedown","mouseup"]).forEach((t=>document.removeEventListener(t,e._globalBlockerHandler,!0)))}catch(e){}try{delete e._globalBlockerHandler,delete e._globalBlockerEvents}catch(e){}e._globalBlockerAdded=!1}try{e._blockerPointerDownInside=!1}catch(e){}}})(r)),i(r)}else i(!0)}else e._hasVisibilityConditions=!1,i(!0)}function g(e,t,n="main",o=null){try{const r=t.width;if(t.fill_width||null==r||""===r)t.fill_width?(e.style.removeProperty("width"),e.style.removeProperty("flex")):null!=r&&""!==r||(e.style.removeProperty("width"),e.style.removeProperty("flex"));else{const t=Number(r);if(!Number.isNaN(t)&&t>0){let r="main"===n;if("bottom"===n&&o)if(o.classList.contains("alignment-start")||o.classList.contains("alignment-end")||o.classList.contains("alignment-center"))r=!0;else{const e=o.style.getPropertyValue("--bubble-sub-button-group-justify-content");if(e){const t=e.trim().toLowerCase();r=["start","end","center"].includes(t)}}const i=r?"px":"%";let a=`${t}${i}`;if("%"===i&&o&&o.classList.contains("display-inline")){const e=8,n=parseInt(o.dataset.totalButtonsWithWidth||"0",10);n>0&&(a=`calc(${t}% - ${(n-1)*e/n}px)`)}e.style.width=a,e.style.flex="0 0 auto"}else if("string"==typeof r){let t=r;if(r.includes("%")&&o&&o.classList.contains("display-inline")){const e=r.match(/(\d+(?:\.\d+)?)%/);if(e){const n=parseFloat(e[1]),r=8,i=parseInt(o.dataset.totalButtonsWithWidth||"0",10);i>0&&(t=`calc(${n}% - ${(i-1)*r/i}px)`)}}e.style.width=t,e.style.flex="0 0 auto"}}}catch(e){}}function f(e,t){try{const n=t.custom_height;if(null!=n&&""!==n){const t=Number(n);!Number.isNaN(t)&&t>0&&e.style.setProperty("--bubble-sub-button-height",`${t}px`)}else e.style.removeProperty("--bubble-sub-button-height")}catch(e){}}function y(e,t){if(!e||!e.classList)return;const n=!!t?.fill_width;e.classList.toggle("fill-width",n)}function v(e,t,n){if(t.hide_when_parent_unavailable&&n.config.entity&&!n.detectedEditor){if("unavailable"===(0,o.Gu)(n,n.config.entity))return e.style.display="none",!0;"none"===e.style.display&&(e.style.display="")}return!1}function _(e){return!!e&&!Array.isArray(e)&&(Array.isArray(e.main)||Array.isArray(e.bottom))}function w(e){if(!Array.isArray(e))return{main:[],bottom:[]};const t=[];return e.forEach((e=>{e&&t.push({...e})})),{main:t,bottom:[]}}function x(e){if(!e)return{main:[],bottom:[]};const t=e.sub_button;return _(t)?{main:Array.isArray(t.main)?[...t.main]:[],bottom:Array.isArray(t.bottom)?[...t.bottom]:[]}:w(t||[])}},134:(e,t,n)=>{n.r(t),n.d(t,{deleteFile:()=>m,deleteModuleFile:()=>A,ensureBCTProviderAvailable:()=>d,getAllModulesLastModified:()=>I,getCachedAggregatedModules:()=>T,getModuleFileName:()=>w,getModuleLastModified:()=>B,isBCTAvailableSync:()=>u,isMigrationDone:()=>_,listFiles:()=>p,readAllModules:()=>k,readConfig:()=>f,readFile:()=>b,setMigrationDone:()=>v,writeConfig:()=>y,writeFile:()=>h,writeModuleYaml:()=>$});var o=n(382);const r=5e3,i=3e4,a=6e4,s="module",l={checked:!1,available:!1,lastChecked:0,retryAt:0,pendingPromise:null};function c(e){try{window.__bubble_bct_available=!!e}catch(e){}}async function d(e){const t=Date.now();if(!e){if(l.checked&&l.available&&t-l.lastChecked<a)return!0;if(l.checked&&!l.available){if(l.retryAt&&t<l.retryAt)return!1}else l.checked=!1,l.available=!1,l.retryAt=0,c(!1);return!1}if(l.pendingPromise)return l.pendingPromise;if(l.checked&&l.available&&t-l.lastChecked<3e5)return!0;if(l.checked&&!l.available){if(l.retryAt&&t<l.retryAt)return!1;l.checked=!1}else if(l.retryAt&&t<l.retryAt)return!1;return l.pendingPromise=(async()=>{try{const t=await e.callWS({type:"bubble_card_tools/list_modules"}),n=!!t&&Array.isArray(t.files);l.checked=!0,l.available=n,l.lastChecked=Date.now(),l.retryAt=n?0:Date.now()+i,c(n);const o=e?.user?.is_admin||e?.user?.is_owner;if(n&&"function"==typeof e?.connection?.subscribeEvents&&!L&&o)try{e.connection.subscribeEvents((()=>{!function(){try{localStorage.removeItem(E())}catch(e){}}();try{document.dispatchEvent(new CustomEvent("yaml-modules-updated"))}catch(e){}}),"bubble_card_tools.updated"),L=!0}catch(e){}return n}catch(e){return l.checked&&l.available?(l.checked=!1,l.available=!1,l.lastChecked=Date.now(),l.retryAt=Date.now()+r,c(!1)):(l.lastChecked=Date.now(),l.retryAt=Date.now()+r),!1}finally{l.pendingPromise=null}})(),l.pendingPromise}function u(){const e=Date.now();return!!(l.checked&&l.available&&e-l.lastChecked<3e5)||!(l.checked&&!l.available&&l.retryAt&&e<l.retryAt)&&!("undefined"==typeof window||!window.__bubble_bct_available)}async function p(e){if(!await d(e))return[];try{const t=await e.callWS({type:"bubble_card_tools/list_modules"});return Array.isArray(t?.files)?t.files:[]}catch(e){return[]}}async function b(e,t){if(!await d(e))return null;try{return await e.callWS({type:"bubble_card_tools/read_module",name:t})}catch(e){return null}}async function h(e,t,n){if(!await d(e))return{status:"unavailable"};try{return await e.callWS({type:"bubble_card_tools/write_module",name:t,content:n})}catch(e){return{status:"error",error:String(e?.message||e)}}}async function m(e,t){if(!await d(e))return{status:"unavailable"};try{return await e.callWS({type:"bubble_card_tools/delete_module",name:t})}catch(e){return{status:"error",error:String(e?.message||e)}}}const g="config.yaml";async function f(e){const t=await b(e,g);if(!t||"string"!=typeof t.content)return{};try{const e=o.Ay.load(t.content)||{};return"object"==typeof e&&e?e:{}}catch(e){return{}}}async function y(e,t){try{const n=o.Ay.dump(t??{},{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0});return await h(e,g,n)}catch(e){return{status:"error",error:String(e?.message||e)}}}async function v(e,t={}){const n={...await f(e)||{},migration:{done:!0,sources:t,migrated_at:(new Date).toISOString(),version:1}};return await y(e,n)}async function _(e){const t=await f(e);return!(!t||!t.migration||!0!==t.migration.done)}function w(e){const t=String(e??""),n=function(e){return String(e??"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^A-Za-z0-9_-]+/g,"-").replace(/-{2,}/g,"-").replace(/^[-_]+|[-_]+$/g,"")||s}(t);return function(e){return/^[A-Za-z0-9_-]+$/.test(String(e??""))}(t)&&t===n?`modules/${t}.yaml`:`modules/${n}--${function(e){const t=String(e??"");let n=0;for(let e=0;e<t.length;e++)n=(n<<5)-n+t.charCodeAt(e)|0;return Math.abs(n).toString(36)}(t)}.yaml`}function x(e,t){if(!t||"object"!=typeof t)return null;const{yaml:n,editor_raw:o,id:r,...i}=t;return{...i,id:e}}async function k(e){const t=await p(e);if(!t||0===t.length)return new Map;const n=(M()||{version:S,files:{}}).files||{},r=new Map;for(const e of t)e?.name&&/\.ya?ml$/i.test(e.name)&&e.name!==g&&r.set(e.name,e.updated_at||null);const i=[],a=[];r.forEach(((e,t)=>{const o=n[t];o&&o.updated_at===e?a.push({name:t,updated_at:e,modules:o.modules||{}}):i.push({name:t,updated_at:e})}));const s=i.map((async t=>{const n=await b(e,t.name);if(!n||!n.content)return{name:t.name,updated_at:t.updated_at,modules:{}};let r=null;try{r=o.Ay.load(n.content)}catch(e){r=null}const i={};if(r&&"object"==typeof r){const e=Object.keys(r);if(1===e.length){const t=e[0],n=r[t];if(n&&(n.name||n.code)){const e=x(t,n);i[t]=e}}else for(const t of e){const e=r[t];if(e&&"object"==typeof e&&(e.name||e.code)){const n=x(t,e);i[t]=n}}}return{name:t.name,updated_at:t.updated_at,modules:i}})),l=await Promise.all(s),c={};for(const e of a)c[e.name]={updated_at:e.updated_at,modules:e.modules};for(const e of l)c[e.name]={updated_at:e.updated_at,modules:e.modules};const d=new Map;Object.values(c).forEach((e=>{const t=e?.modules||{};Object.keys(t).forEach((e=>{d.set(e,t[e])}))}));const u={};return d.forEach(((e,t)=>{u[t]=e})),function(e){try{localStorage.setItem(E(),JSON.stringify(e))}catch(e){}}({version:S,files:c,aggregatedModules:u,updatedAt:(new Date).toISOString()}),d}async function C(e){try{await k(e)}catch(e){}}async function $(e,t,n){let r="";if("string"==typeof n)r=n;else if(n&&"object"==typeof n){const e={},i={...n};delete i.id,delete i.yaml,delete i.editor_raw,Array.isArray(i.supported)&&Array.isArray(i.unsupported)&&delete i.unsupported,e[t]=i,r=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}const i=w(t),a=await h(e,i,r);return a&&"error"===a.status||await C(e),a}async function A(e,t){const n=w(t),o=await m(e,n);return o&&"error"===o.status||await C(e),o}const S=1;let L=!1;function E(){try{const e="undefined"!=typeof location?location.host:"default";return`bubble-card-bct-cache-v${S}:${e}`}catch(e){return`bubble-card-bct-cache-v${S}:default`}}function M(){try{const e=localStorage.getItem(E());if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t:null}catch(e){return null}}function T(){const e=M(),t=e?.aggregatedModules;return t&&"object"==typeof t&&Object.keys(t).length>0?t:null}function B(e){try{const t=M();if(!t||!t.files)return null;const n=w(e),o=t.files[n];if(o&&o.updated_at)return o.updated_at;const r=t.files[`modules/${e}.yaml`];if(r&&r.updated_at)return r.updated_at;for(const n of Object.keys(t.files)){const o=t.files[n];if(o?.updated_at&&o?.modules&&o.modules[e])return o.updated_at}return null}catch(e){return null}}function I(){try{const e=M();if(!e||!e.files)return new Map;const t=new Map;return Object.keys(e.files).forEach((n=>{const o=e.files[n];if(!o||!o.updated_at)return;const r=Object.keys(o.modules||{});r.length>0&&r.forEach((e=>{t.set(e,o.updated_at)}))})),t}catch(e){return new Map}}},241:(e,t,n)=>{function o(){try{const e=localStorage.getItem("bubble-card-module-store");if(!e)return null;const t=JSON.parse(e);if(localStorage.getItem("bubble-card-api-failure-timestamp")&&t&&t.expiration<Date.now()){console.log("🛡️ API in cooldown period after failure and cache expired, temporary extension of validity");const e=Date.now()+72e5;return t.expiration=e,localStorage.setItem("bubble-card-module-store",JSON.stringify(t)),console.log("⏳ Cache extended until",new Date(e)),t}return t&&t.expiration>Date.now()?t:t||null}catch(e){return console.error("Error reading cache:",e),null}}function r(e){if(e&&0!==Object.keys(e).length)try{const t=Date.now()+864e5;localStorage.setItem("bubble-card-module-store",JSON.stringify({modules:e,expiration:t,lastFetchedAt:Date.now()})),console.log("Module data cached until",new Date(t))}catch(e){console.error("Error saving to cache:",e)}}function i(e,t,n="info"){if(e.hass){const o=new CustomEvent("hass-notification",{detail:{message:t,severity:n},bubbles:!0,composed:!0});e.dispatchEvent(o)}else console.log(`[${n}] ${t}`)}n.d(t,{TJ:()=>o,aN:()=>r,qk:()=>i})},397:(e,t,n)=>{n.d(t,{Ac:()=>d,Hs:()=>l,generateYamlExport:()=>s,lW:()=>c});var o=n(382),r=n(241),i=n(937);function a(e){const{id:t,name:n,version:o,creator:r,link:a,supported:s,description:l,code:c,editor:d,is_global:u}={...e},p=(0,i.n$)().map((e=>e.id));let b=s;s&&Array.isArray(s)&&s.length===p.length&&p.every((e=>s.includes(e)))&&(b=void 0);const h={name:n,version:o,creator:r,link:a,supported:b,description:l,code:c,editor:d};return!0===u&&(h.is_global=!0),Object.keys(h).forEach((e=>{const t=h[e];(null==t||"link"===e&&""===t)&&delete h[e]})),{id:t,cleanData:h}}function s(e){try{const{id:t,cleanData:n}=a(e),r={[t]:n};return o.Ay.dump(r,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,sortKeys:!1})}catch(e){return console.error("Error generating YAML export:",e),"# Error generating YAML export"}}function l(e){try{const{id:t,cleanData:n}=a(e),{name:r,version:s,creator:l,description:c,code:d,editor:u,supported:p}=n,b=(0,i.n$)().map((e=>e.id)),h=!p||Array.isArray(p)&&p.length===b.length&&b.every((e=>p.includes(e)));let m=`# ${r}\n\n`;if(m+=`**Version:** ${s}  \n`,m+=`**Creator:** ${l}\n\n`,m+="> [!IMPORTANT] \n",m+="> **Supported cards:**\n",h?m+=">  - All cards are supported\n":p&&p.length>0&&p.forEach((e=>{m+=`>  - ${e.replace(/-/g," ").replace(/\b\w/g,(e=>e.toUpperCase()))}\n`})),m+="\n",c&&(m+=`${c}\n`,m+="Configure this module via the editor or in YAML, for example:\n\n"),m+="```yaml\n",m+=`${t}: \n`,u&&Array.isArray(u)&&u.length>0){const e=u[0];e&&e.name&&(m+=`    ${e.name}: YOUR_VALUE\n`)}else m+="    # Your configuration here\n";if(m+="```\n\n",m+="---\n\n",m+="<details>\n\n",m+="<summary><b>🧩 Get this Module</b></summary>\n\n",m+="<br>\n\n",m+=`> To use this module, simply install it from the Module Store (from the editor of any card > Modules), or copy and paste the following configuration into a \`/www/bubble/modules/${t}.yaml\` file.\n\n`,m+="```yaml\n",m+=`${t}:\n`,m+=`    name: "${r}"\n`,m+=`    version: "${s}"\n`,m+=`    creator: "${l}"\n`,m+='    link: "https://github.com/Clooos/Bubble-Card/discussions/XXXX"\n\n',p&&p.length>0&&!h&&(m+="    supported:\n",p.forEach((e=>{m+=`        - ${e}\n`})),m+="\n"),m+="    description: |\n",c){const e=c.split("\n").map((e=>`        ${e}`)).join("\n");if(m+=`${e}\n`,m+="        <br><br>\n",m+="        <code-block><pre>\n",m+=`        ${t}: \n`,u&&Array.isArray(u)&&u.length>0){const e=u[0];e&&e.name?m+=`            ${e.name}: YOUR_VALUE\n`:m+="            # Your configuration here\n"}else m+="            # Your configuration here\n";m+="        </pre></code-block>\n\n"}if(m+="    code: |\n",d){const e=d.split("\n").map((e=>`        ${e}`)).join("\n");m+=`${e}\n\n`}else m+="        # Your code here\n\n";if(u){const e="object"==typeof u?o.Ay.dump(u,{indent:2}):u;m+="    editor:\n";const t=e.split("\n").map((e=>`      ${e}`)).join("\n");m+=`${t}`,m+="\n```"}else m+="```";return m+="\n\n</details>\n\n",m+="---\n\n",m+="### Screenshot:\n\n",m+="Important: The first screenshot here will be used on the Module Store, so please provide one.\n",m}catch(e){return console.error("Error generating GitHub export:",e),"# Error generating GitHub export format"}}async function c(e,t,n,o){const i=()=>{(0,r.qk)(e,n,"success"),"function"==typeof o&&o(t)},a=()=>{(0,r.qk)(e,"Could not copy to clipboard. Please copy manually from the preview below.","error"),"function"==typeof o&&o(t)};if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText(t),void i()}catch(e){console.warn("Clipboard API failed:",e.name,e.message)}try{const n=e.shadowRoot??document.body,o=document.createElement("textarea");o.value=t,Object.assign(o.style,{position:"fixed",top:"0",left:"0",width:"2em",height:"2em",border:"none",padding:"0",margin:"0",outline:"none",opacity:"0",pointerEvents:"none"}),n.appendChild(o),o.focus({preventScroll:!0}),o.select();const r=document.execCommand("copy");n.removeChild(o),r?i():a()}catch(e){console.error("execCommand clipboard fallback failed:",e),a()}}function d(e,t,n){try{const o=s(t),i=new Blob([o],{type:"text/yaml"}),a=URL.createObjectURL(i),l=document.createElement("a");return l.href=a,l.download=`${t.id}.yaml`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(a),(0,r.qk)(e,"Module downloaded as YAML file!","success"),"function"==typeof n&&n(o),!0}catch(t){return console.error("Error downloading module:",t),(0,r.qk)(e,"Error downloading module: "+t.message,"error"),!1}}},868:(e,t,n)=>{n.d(t,{G:()=>c,m:()=>d});var o=n(888),r=n(241),i=n(264),a=n(716),s=n(382);function l(e){try{e._processedSchemas&&(e._processedSchemas={}),e._schemaCache?Object.keys(e._schemaCache).forEach((t=>{delete e._schemaCache[t]})):e._schemaCache={},e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,a.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout((()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout((()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,a.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()}),100)}),50)}catch(e){}}async function c(e,t){try{let c="";if(t.yamlContent&&""!==t.yamlContent.trim()?c=t.yamlContent:t.description&&""!==t.description.trim()&&(c=t.description),!c)throw new Error("No YAML content found for this module");const d=(0,i.oV)(c)||t.id,u=(0,i.tF)(c,d,{title:t.name,defaultCreator:t.creator});let p=c;try{const e=s.Ay.load(c);if(e&&"object"==typeof e){const n=Object.keys(e);if(1===n.length){const o=n[0],r=e[o];if(r&&"object"==typeof r)if(r[d]){t.moduleLink&&"object"==typeof r[d]&&(r[d].link=t.moduleLink);const e={};e[d]=r[d],p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})}else if(o===d&&Object.keys(r).some((e=>"object"==typeof r[e]&&r[e].name&&r[e].code))){const e={};Object.entries(r).forEach((([t,n])=>{"object"==typeof n&&"unsupported"!==t&&"editor"!==t&&n.name||(e[t]=n)})),t.moduleLink&&(e.link=t.moduleLink),e.code&&"string"==typeof e.code&&(e.code=e.code.replace(/\n/g,"\n      "));const n={};n[d]=e,p=s.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}else if(o===d)t.moduleLink&&!e[d].link&&(e[d].link=t.moduleLink),p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1});else{t.moduleLink&&(r.link=t.moduleLink);const e={};e[d]=r,p=s.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}}else{t.moduleLink&&(e.link=t.moduleLink);const n={};n[d]=e,p=s.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0,flowLevel:-1})}p=p.replace(/code: \|/g,"code: |").replace(/description: \|/g,"description: |").replace(/(\|\n)(\s+)/g,((e,t,n)=>t+"      "));try{const e=s.Ay.load(p);e&&e[d]||console.warn("Warning: YAML formatting may have issues")}catch(e){console.warn("Error validating formatted YAML:",e),p=c}}}catch(e){console.warn("Error processing YAML structure:",e)}const b=p;o.Ki.set(d,u);try{o.sq.set(d,"entity")}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated")),function(e,t){try{window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}catch(e){}}(d,u);try{const t=await Promise.resolve().then(n.bind(n,134));return await t.ensureBCTProviderAvailable(e.hass)?(await t.writeModuleYaml(e.hass,d,b),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),(0,r.qk)(e,"Module installed successfully")):(0,r.qk)(e,"Install Bubble Card Tools to save modules persistently","warning"),(0,a.rC)(e,"config-changed",{config:e._config}),l(e),e.requestUpdate(),{success:!0,moduleId:d}}catch(t){return console.error("Persistence error:",t),(0,r.qk)(e,"Module saved locally only","warning"),l(e),{success:!0,storage:"local_only",moduleId:d}}}catch(t){throw console.error("Installation error:",t),(0,r.qk)(e,"Installation error: "+t.message,"error"),t}}async function d(e,t,o){try{if(!t||""===t.trim())throw new Error("No YAML content provided");if(o)try{const{extractYamlFromMarkdown:e}=await Promise.resolve().then(n.bind(n,264)),r=e("```yaml\n"+t+"\n```",o);r&&r!==t&&(t=r)}catch(e){console.warn("Could not add link directly to YAML:",e)}const r={yamlContent:t,description:t,moduleLink:o};return await c(e,r)}catch(t){throw console.error("Manual module installation error:",t),(0,r.qk)(e,"Installation error: "+t.message,"error"),t}}},937:(e,t,n)=>{n.d(t,{cu:()=>g,dK:()=>v,kA:()=>w,n$:()=>f,s:()=>_});var o=n(957),r=n(716),i=n(888),a=n(264),s=n(382),l=n(397),c=n(134),d=n(766),u=n(933);function p(e,t,n=null){if(!e._config||!e._config.modules)return;let o=[...e._config.modules];n&&n!==t&&(o=o.filter((e=>e!==n))),o.includes(t)||(o=[...o,t]),e._config.modules=o,e._previousModuleId=t,(0,r.rC)(e,"config-changed",{config:e._config})}function b(e){e.lastEvaluatedStyles="",e.stylesYAML=null,e.handleCustomStyles&&e.card&&e.handleCustomStyles(e,e.card),e.requestUpdate()}function h(e,t){window.dispatchEvent(new CustomEvent("bubble-card-module-updated",{detail:{moduleId:e,moduleData:t}}))}function m(e){try{const t=document.querySelector("home-assistant")?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot;if(!t)return;const n=t.querySelectorAll("ha-dialog-footer [slot='primaryAction']");if(n.length>0)return void n.forEach((t=>{"disabled"in t&&(t.disabled=e)}));const o=t.querySelector("ha-dialog > div:nth-child(4)");o&&(o.style.display=e?"none":"")}catch(e){}}function g(e){if(!e._editingModule)return m(!1),o.qy``;m(!0);const t=!!d.dn&&(0,d.dn)(e._editingModule.id),g=!!e._yamlErrorMessage,f="string"==typeof e.errorMessage&&e.errorMessage.trim().length>0&&!!e._editingModule,v=g||f,_=t=>{const n=e.shadowRoot?.querySelector("#export-preview-content");if(n){n.textContent=t;const o=e.shadowRoot?.querySelector(".export-preview ha-expansion-panel");o&&!o.expanded&&(o.expanded=!0);const r=e.shadowRoot?.querySelector(".export-preview");r&&(r.style.animation="none",setTimeout((()=>{r.style.animation="highlight 1s ease"}),10))}};return o.qy`
    <div class="module-editor-form">
        <div class="form-content">
          <h3>
            <ha-icon style="margin: 8px;" icon="${e._showNewModuleForm?"mdi:puzzle-plus-outline":"mdi:puzzle-edit-outline"}"></ha-icon>
            ${e._showNewModuleForm?"Create new Module":"default"===e._editingModule.id?"Edit Default Module":"Edit Module"}
          </h3>
          
          <div class="module-editor-not-default" style="display: ${"default"===e._editingModule.id?"none":""}">
            ${t?o.qy`
              <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:file-document-alert"></ha-icon>
                  Read-only Module
                </h4>
                <div class="content">
                  <p>This Module is installed from a YAML file. You need to modify the <code>bubble-modules.yaml</code> 
                  file directly, or remove it from your YAML file then import it here.</p>
                </div>
              </div>
            `:""}
            
            <ha-textfield
              label="Module ID"
              .value=${e._editingModule.id||""}
              @input=${t=>{const n=e._editingModule.id;e._editingModule.id=t.target.value,e._showNewModuleForm&&e._config.modules&&(p(e,t.target.value,n),(0,r.rC)(e,"config-changed",{config:e._config}))}}
              ?disabled=${!e._showNewModuleForm||t}
            ></ha-textfield>
            <span class="helper-text">
              Must be unique and cannot be changed after the Module is created.
            </span>
            
            <ha-textfield
              label="Module Name"
              .value=${e._editingModule.name||""}
              @input=${t=>{e._editingModule.name=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Version"
              .value=${e._editingModule.version||"1.0"}
              @input=${t=>{e._editingModule.version=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-textfield
              label="Creator"
              .value=${e._editingModule.creator||""}
              @input=${t=>{e._editingModule.creator=t.target.value}}
              ?disabled=${t}
            ></ha-textfield>
            
            <ha-expansion-panel 
              .header=${o.qy`
                <ha-icon icon="mdi:filter-check-outline" style="margin-right: 8px;"></ha-icon>
                Supported cards
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div>
                ${function(e,t=!1){const n=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}],r=n.map((e=>e.id));void 0===e._editingModule.supported&&(e._editingModule.unsupported&&e._editingModule.unsupported.length>0?e._editingModule.supported=r.filter((t=>!e._editingModule.unsupported.includes(t))):e._editingModule.supported=void 0);const i=!e._editingModule.supported||Array.isArray(e._editingModule.supported)&&e._editingModule.supported.length===r.length&&r.every((t=>e._editingModule.supported.includes(t)));return o.qy`
    <div class="checkbox-grid">
      <ha-formfield label="All cards" style="grid-column: 1 / -1; margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid var(--divider-color);">
        <ha-checkbox
          .checked=${i}
          @change=${n=>{t||(n.target.checked?delete e._editingModule.supported:e._editingModule.supported=[],e.requestUpdate())}}
          ?disabled=${t}
        ></ha-checkbox>
      </ha-formfield>
      ${n.map((n=>o.qy`
        <ha-formfield label="${n.name}">
          <ha-checkbox
            .checked=${!e._editingModule.supported||e._editingModule.supported.includes(n.id)}
            @change=${o=>{t||(e._editingModule.supported||(e._editingModule.supported=r.slice()),o.target.checked?(e._editingModule.supported.includes(n.id)||e._editingModule.supported.push(n.id),e._editingModule.supported.length===r.length&&r.every((t=>e._editingModule.supported.includes(t)))&&delete e._editingModule.supported):e._editingModule.supported=e._editingModule.supported.filter((e=>e!==n.id)),e.requestUpdate())}}
            ?disabled=${t}
          ></ha-checkbox>
        </ha-formfield>
      `))}
    </div>
    <div class="helper-text">
      Select the card types that this module supports.
    </div>
  `}(e,t)}
              </div>
            </ha-expansion-panel>

            <ha-expansion-panel 
              .header=${o.qy`
                <ha-icon icon="mdi:file-document-outline" style="margin-right: 8px;"></ha-icon>
                Description
              `}
              @expanded-changed=${e=>e.stopPropagation()}
            >
              <div class="code-editor-container">
                <ha-code-editor
                  class="${t?"disabled":""}"
                  mode="yaml"
                  .value=${e._editingModule.description||""}
                  @value-changed=${t=>{e._editingModule.description=t.detail.value}}
                ></ha-code-editor>
              </div>
              <span class="helper-text">
                This description appears in your module and in the Module Store (if you share it), so make sure it's clear and concise. <b>You can use HTML and inline CSS</b>, but note that it will only be rendered in your module, the Module Store will not display it.            
              </span>
            </ha-expansion-panel>
          </div>

          <ha-expansion-panel 
            .header=${o.qy`
              <ha-icon icon="mdi:code-json" style="margin-right: 8px;"></ha-icon>
              Code (CSS/JS template)
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="code-editor-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.code||""}
                @value-changed=${n=>(n=>{if(!e._editingModule||!e._config||t)return;const o=e._editingModule.id;if("function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(o),!e._originalModuleState){const t=i.Ki.get(o);t&&(e._originalModuleState=JSON.parse(JSON.stringify(t)))}e._editingModule.code=n;try{e._moduleCodeDebounce&&clearTimeout(e._moduleCodeDebounce)}catch(e){}e._moduleCodeDebounce=setTimeout((()=>{e.stylesYAML&&(e.stylesYAML=null);const t={...i.Ki.get(o)||{},code:e._editingModule.code,id:o};i.Ki.set(o,t),p(e,o,e._previousModuleId),h(o,t)}),140)})(n.detail.value)}
              ></ha-code-editor>
            </div>
            ${e.createErrorConsole(e)}
            <span class="helper-text">
              More information and examples about the CSS and JS template possibilities can be found in the <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#styling" target="_blank">Styling and Templates documentation</a>. Tip: You can enlarge the editor by clicking on the panel title (Bubble Card configuration).
            </span>
          </ha-expansion-panel>
          
          <ha-expansion-panel 
            style="display: ${"default"===e._editingModule.id?"none":""}" 
            .header=${o.qy`
              <ha-icon icon="mdi:form-select" style="margin-right: 8px;"></ha-icon>
              Optional: Editor schema (YAML)
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="editor-schema-container">
              <ha-code-editor
                class="${t?"disabled":""}"
                mode="yaml"
                .value=${e._editingModule.editor_raw||("object"==typeof e._editingModule.editor?s.Ay.dump(e._editingModule.editor):e._editingModule.editor||"")}
                @value-changed=${n=>{e._editingModule.editor_raw=n.detail.value,clearTimeout(e._editorSchemaDebounce),e._editorSchemaDebounce=setTimeout((()=>{try{const o=s.Ay.load(n.detail.value);null!==o&&"object"==typeof o&&((n=>{if(e._editingModule&&e._config&&!t)try{const t=e._editingModule.id;if(!e._originalModuleState){const n=i.Ki.get(t);n&&(e._originalModuleState=JSON.parse(JSON.stringify(n)))}const o=e._editingModule.editor_raw;e._editingModule.editor=n,o&&(e._editingModule.editor_raw=o);const a=i.Ki.get(t);if(a){const o={...a,editor:n};i.Ki.set(t,o),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.requestUpdate(),setTimeout((()=>{(0,r.rC)(e,"editor-refresh",{}),e.requestUpdate()}),50)}}catch(e){console.warn("Error applying live editor schema:",e)}})(o),e._yamlErrorMessage&&(e._yamlErrorMessage=null,e.requestUpdate()))}catch(t){console.warn("Invalid YAML for editor schema:",t),e._editingModule.editor=e._editingModule.editor_raw||n.detail.value,e._yamlErrorMessage=t.message,e.requestUpdate()}}),100)}}
              ></ha-code-editor>
            </div>
            <div class="bubble-info error" 
                style="display: ${e._yamlErrorMessage?"":"none"}">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in YAML schema
                </h4>
                <div class="content">
                    <pre style="margin: 0; white-space: pre-wrap; font-size: 12px;">${e._yamlErrorMessage?e._yamlErrorMessage.charAt(0).toUpperCase()+e._yamlErrorMessage.slice(1):""}</pre>
                </div>
            </div>
            <span class="helper-text">
              This allows you to add a visual editor to your module. Learn about all available editor schema options in the <a href="https://github.com/Clooos/Bubble-Card/blob/main/src/modules/editor-schema-docs.md" target="_blank">editor schema documentation</a>.
            </span>

            ${e._editingModule.editor&&Array.isArray(e._editingModule.editor)&&e._editingModule.editor.length>0?o.qy`
              <div class="form-preview">
                <h4>Editor preview</h4>
                <div class="form-preview-container">
                  <ha-form
                    .hass=${e.hass}
                    .data=${{}}
                    .schema=${e._editingModule.editor}
                    .computeLabel=${e._computeLabelCallback||(e=>e.label||e.name)}
                  ></ha-form>
                </div>
              </div>
            `:""}
          </ha-expansion-panel>

          ${!t&&v?o.qy`
            <div class="bubble-info warning" style="margin-top: 8px;">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Save disabled
              </h4>
              <div class="content">
                <p style="margin: 0;">
                  ${g?o.qy`Fix the error(s) in the Editor schema (YAML) above to enable saving.`:""}
                  ${g&&f?o.qy`<br>`:""}
                  ${f?o.qy`Fix the error(s) in the CSS/JS template above to enable saving.`:""}
                </p>
              </div>
            </div>
          `:""}

          <hr>

          <ha-expansion-panel 
            .header=${o.qy`
              <ha-icon icon="mdi:export" style="margin-right: 8px;"></ha-icon>
              Export Module
            `}
            @expanded-changed=${e=>e.stopPropagation()}
          >
            <div class="content">
                <div class="export-section">
                    <div class="export-buttons">
                        <button class="icon-button" @click=${()=>{const t=(0,l.generateYamlExport)(e._editingModule);(0,l.lW)(e,t,"YAML format copied to clipboard!",_)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy YAML
                        </button>
                        
                        <button class="icon-button" @click=${()=>{const t=(0,l.Hs)(e._editingModule);(0,l.lW)(e,t,"GitHub Discussion format copied to clipboard!",_)}}>
                        <ha-icon icon="mdi:content-copy"></ha-icon>
                        Copy for GitHub
                        </button>
                        
                        <button class="icon-button" @click=${()=>{(0,l.Ac)(e,e._editingModule,_)}}>
                        <ha-icon icon="mdi:file-download"></ha-icon>
                        Download YAML
                        </button>
                    </div>
                    
                    <div class="export-preview">
                        <ha-expansion-panel 
                          .header=${"Export preview"}
                          @expanded-changed=${e=>e.stopPropagation()}
                        >
                        <pre id="export-preview-content">Click on a button above to generate the preview</pre>
                        </ha-expansion-panel>
                    </div>

                    <div class="bubble-info">
                      <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Sharing your Module to the Store
                      </h4>
                      <div class="content">
                        <p>To share your Module to the Module Store, click on <strong>Copy for GitHub</strong> and paste the content in a new discussion in the
                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-modules" target="_blank">Share your Modules</a> category.
                        <strong>Edit the description</strong> (if needed), <strong>the example</strong> (for YAML users), and remember to <strong>include at least one screenshot</strong> for the Module Store.</p>
                        <p><strong>Your Module becomes available right after that</strong> (after a Store refresh), so double-check that everything is correctly written and the Module is working as expected. You can of course edit/update the Module after it is shared.</p>
                      </div>
                    </div>
                </div>
            </div>
          </ha-expansion-panel>
          
          <div class="module-editor-buttons-container">
            <button class="icon-button" style="flex: 1;" @click=${()=>{try{if(!e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;"function"==typeof e._clearCurrentModuleError&&e._clearCurrentModuleError(t),function(e,t){if(!t)return;let n;e._originalModuleState?(n=e._originalModuleState,e._originalModuleState=null):n=i.Ki.get(t),n&&(e.lastEvaluatedStyles="",e.stylesYAML=null,i.Ki.set(t,{...n}),e._schemaCache&&delete e._schemaCache[t],e._processedSchemas&&delete e._processedSchemas[t],e.handleCustomStyles&&e.handleCustomStyles(e,e.card),h(t,n),setTimeout((()=>{if(e._config){const t={...e._config};(0,r.rC)(e,"config-changed",{config:t})}e.requestUpdate()}),50))}(e,t)}else if(e._showNewModuleForm&&e._editingModule){const t=e._editingModule.id;e._config&&e._config.modules&&t&&(e._config.modules=e._config.modules.filter((e=>e!==t)),(0,r.rC)(e,"config-changed",{config:e._config}),i.Ki.has(t)&&i.Ki.delete(t),b(e))}}finally{e._editingModule=null,e._showNewModuleForm=!1,e._previousModuleId=null,m(!1),e.requestUpdate(),setTimeout((()=>(0,u.XY)(e)),0)}}}>
              <ha-icon icon="mdi:close"></ha-icon>
              Cancel
            </button>
            
            <button class="icon-button ${t||v?"disabled":""}" ?disabled=${t||v} style="flex: 1;" @click=${()=>{t||v||("function"==typeof e._clearCurrentModuleError&&e._editingModule?.id&&e._clearCurrentModuleError(e._editingModule.id),async function(e,t){try{const o=t.id,l=e._config.modules&&e._config.modules.includes(o),d=i.Ki.get(o),u=d&&!0===d.is_global;if(t.editor_raw&&"string"==typeof t.editor_raw)try{const e=s.Ay.load(t.editor_raw);null!==e&&"object"==typeof e&&(t.editor=e)}catch(e){console.warn("Couldn't parse editor schema during save, using fallback:",e)}t.editor_raw&&delete t.editor_raw,t.supported&&t.unsupported&&delete t.unsupported;const p=[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}].map((e=>e.id));t.supported&&Array.isArray(t.supported)&&t.supported.length===p.length&&p.every((e=>t.supported.includes(e)))&&delete t.supported;const{generateYamlExport:g}=await Promise.resolve().then(n.bind(n,397)),f=g(t),v=(0,a.tF)(f,t.id,{title:t.name,defaultCreator:t.creator});u&&(v.is_global=!0),document.dispatchEvent(new CustomEvent("yaml-modules-updated"));const _=Array.from(i.Ki.keys()),w=new Map;_.forEach((e=>{e===t.id?w.set(t.id,v):w.set(e,i.Ki.get(e))})),_.includes(t.id)||w.set(t.id,v),i.Ki.clear(),w.forEach(((e,t)=>{i.Ki.set(t,e)})),e._config&&e._config.modules&&(e._config.modules.includes(o)||e._config.modules.push(o),(0,r.rC)(e,"config-changed",{config:e._config}));let x=!1;try{if(await(0,c.ensureBCTProviderAvailable)(e.hass)){await(0,c.writeModuleYaml)(e.hass,o,f);try{i.sq.set(o,"file")}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated")),x=!0}}catch(e){console.warn("File-based save failed; keeping changes local only:",e)}if(!x)try{i.sq.set(o,"editor")}catch(e){}h(o,v),e.stylesYAML=null,l&&b(e),e._editingModule=null,e._showNewModuleForm=!1,y(e),m(!1)}catch(e){console.error("Error saving module:",e)}finally{m(!1)}}(e,e._editingModule),setTimeout((()=>(0,u.XY)(e)),0))}}>
              <ha-icon icon="mdi:content-save"></ha-icon>
              Save Module
            </button>
          </div>
        </div>
    </div>
  `}function f(){return[{id:"button",name:"Button"},{id:"calendar",name:"Calendar"},{id:"climate",name:"Climate"},{id:"cover",name:"Cover"},{id:"horizontal-buttons-stack",name:"Horizontal buttons stack"},{id:"media-player",name:"Media player"},{id:"pop-up",name:"Pop-up"},{id:"select",name:"Select"},{id:"separator",name:"Separator"},{id:"sub-buttons",name:"Sub-buttons"}]}function y(e){e._processedSchemas&&(e._processedSchemas={}),e._selectedModuleTab=0,"function"==typeof e._getProcessedSchema&&(e._schemaCache?Object.keys(e._schemaCache).forEach((t=>{delete e._schemaCache[t]})):e._schemaCache={}),e.lastEvaluatedStyles="",e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),(0,r.rC)(e,"editor-refresh",{}),e.requestUpdate(),setTimeout((()=>{e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card),e.requestUpdate(),setTimeout((()=>{if(e._config){const t={...e._config};e.stylesYAML&&(e.stylesYAML=null,document.dispatchEvent(new CustomEvent("yaml-modules-updated"))),(0,r.rC)(e,"config-changed",{config:t}),e.card&&"function"==typeof e.handleCustomStyles&&e.handleCustomStyles(e,e.card)}e.requestUpdate()}),100)}),50)}function v(e,t){e._originalModuleState=null;const n=i.Ki.get(t);n?(e._editingModule={id:t,...n},m(!0),e._editingModule.code||(e._editingModule.code=""),e._editingModule.editor&&"string"==typeof e._editingModule.editor&&(e._editingModule.editorReference=e._editingModule.editor,e._editingModule.editor=[]),"object"==typeof e._editingModule.editor?e._editingModule.editor_raw=s.Ay.dump(e._editingModule.editor):e._editingModule.editor_raw=e._editingModule.editor||"",e.requestUpdate(),setTimeout((()=>(0,u.XY)(e)),0)):console.error(`Module ${t} not found`)}async function _(e,t){if(confirm(`Are you sure you want to delete module "${t}"?`))try{i.Ki.delete(t);try{i.sq.delete(t)}catch(e){}document.dispatchEvent(new CustomEvent("yaml-modules-updated"));let n=!1;try{await(0,c.ensureBCTProviderAvailable)(e.hass)&&(await(0,c.deleteModuleFile)(e.hass,t),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),n=!0)}catch(e){console.warn("File-based deletion failed; keeping changes local only:",e)}e._config&&e._config.modules&&(e._config.modules=e._config.modules.filter((e=>e!==t)),(0,r.rC)(e,"config-changed",{config:e._config}),b(e)),y(e),m(!1)}catch(e){console.error("Error deleting module:",e)}finally{m(!1)}}function w(e){if(!e._editingModuleInitialized){e._editingModule=null,e._showNewModuleForm=!1,e._showManualImportForm=!1,e._manualYamlContent="",e._exportContent=null,e._exportType=null,e._exportStep=0,e._schemaCache={},e._processedSchemas={},e._originalModuleState=null,e._previousModuleId=null,e._generateUniqueModuleId=(e="my_module")=>{if(!i.Ki.has(e))return e;let t=1,n=`${e}_${t}`;for(;i.Ki.has(n);)t++,n=`${e}_${t}`;return n};const t=e._generateUniqueModuleId("my_module");e._newModuleTemplate={id:t,name:"My Module",description:"",creator:"",version:"1.0",code:"",editor:""},e._editingModuleInitialized=!0}}},264:(e,t,n)=>{n.d(t,{N5:()=>d,extractYamlFromMarkdown:()=>c,oV:()=>l,tF:()=>u});var o=n(382),r=n(933),i=n(937);function a(e){if(!e||"string"!=typeof e)return null;const t=e.trim().toLowerCase().replace(/['"]/g,""),n=(0,i.n$)(),o=n.find((e=>e.id.toLowerCase()===t||e.name.toLowerCase()===t));if(o)return o.id;const r=t.replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,""),a=n.find((e=>e.id.replace(/-/g,"")===r.replace(/-/g,"")||e.name.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")===r));return a?a.id:t}function s(e){if(!e||"string"!=typeof e)return[];const t=[...(0,i.n$)()].sort(((e,t)=>{const n=(e?.name||e?.id||"").length;return(t?.name||t?.id||"").length-n}));let n=e.trim();n=n.replace(/^[\[\(\{]\s*/,"").replace(/\s*[\]\)\}]\s*$/,""),n=n.split("|")[0]||n,n=n.split("**")[0]||n;const o=[],r=(e,t)=>{if(!t)return null;const n=e.trimStart(),o=n.toLowerCase(),r=t.toLowerCase();if(!o.startsWith(r))return null;return(i=o[r.length])&&!/\s|,|;|\||\/|&|\+|\]|\)|\}/.test(i)?null:{length:e.length-n.length+r.length};var i};for(let e=0;e<10;e++){let e=null,i=null;n=n.replace(/^\s*(?:-|\*|•)\s*/g,"");for(const o of t){const t=r(n,o.name),a=r(n,o.id);if(e=t||a,e){i=o;break}}if(!e||!i)break;if(o.includes(i.id)||o.push(i.id),n=n.slice(e.length),n=n.replace(/^\s*(?:,|;|\||\/|&|\+|\band\b|\bor\b)\s*/i,""),!n.trim())break}return o}function l(e){if(!e)return null;try{const t=o.Ay.load(e);if(t&&"object"==typeof t){const e=Object.keys(t);if(e.length>0){if(t[e[0]]?.name)return e[0];for(const n of e)if(t[n]?.name)return n;return e[0]}}}catch(e){console.warn("Error during YAML parsing for key extraction:",e)}try{const t=/^([a-zA-Z0-9_-]+)(?:\s*:|:)/m,n=e.match(t);if(n&&n[1])return n[1]}catch(e){console.warn("Error during key extraction by regex:",e)}return null}function c(e,t=null){if(!e)return"";const n=[...e.matchAll(/```(?:yaml|yml)\s+([\s\S]*?)```/g)];if(n.length>0){for(const e of n){let n=e[1].trim();try{const e=o.Ay.load(n);if(e&&"object"==typeof e){const r=Object.keys(e)[0];if(e[r]?.name||e[r]?.code||e[r]?.description||e[r]?.version)return t&&"object"==typeof e[r]&&!e[r].link&&(e[r].link=t,n=o.Ay.dump(e,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0})),n}}catch(e){}}let e=n[0][1].trim();if(t)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const r=Object.keys(n)[0];r&&"object"==typeof n[r]&&!n[r].link&&(n[r].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}const r=[...e.matchAll(/```\s*([\s\S]*?)```/g)];if(r.length>0){let e="";for(const t of r){const n=t[1].trim();n.length>e.length&&(e=n)}if(t&&e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){const r=Object.keys(n)[0];r&&"object"==typeof n[r]&&!n[r].link&&(n[r].link=t,e=o.Ay.dump(n,{indent:2,lineWidth:-1,noRefs:!0,noCompatMode:!0}))}}catch(e){}return e}return""}function d(e){return e&&Array.isArray(e)?e.filter((e=>e&&e.title)).map((e=>{try{const t=e.title.match(/\[(.*?)\]/);let n=t?(0,r.TL)(t[1]):`discussion-${e.number}`,o="",i=e.html_url;if(e.body&&(o=c(e.body,i),o)){const e=l(o);e&&(n=e)}const a=u(o,n,{bodyText:e.body,title:e.title,defaultCreator:e.user?.login||""});return{id:a.id,name:a.name,description:a.description,creator:a.creator,version:a.version,moduleLink:e.html_url,type:a.type,imageUrl:a.imageUrl,supportedCards:void 0===a.supported?void 0:Array.isArray(a.supported)?a.supported:a.supported?[a.supported]:[],unsupportedCards:Array.isArray(a.unsupported)?a.unsupported:a.unsupported?[a.unsupported]:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions,yamlContent:o}}catch(t){return console.error(`Error parsing discussion #${e.number}:`,t),{id:`discussion-${e.number}`,name:e.title||`Discussion #${e.number}`,description:"Error parsing the discussion",creator:e.user?.login||"",version:"",moduleLink:e.html_url,type:"",supportedCards:[],unsupportedCards:[],createdAt:e.created_at,updated_at:e.updated_at,userAvatar:e.user?.avatar_url,comments:e.comments,reactions:e.reactions}}})).filter((e=>e.id&&e.name)):[]}function u(e,t,n={}){const{bodyText:i,title:l,defaultCreator:c}=n;let d={id:t,name:t,version:"1.0",author:"",description:"",type:"Module",editor:[],supported:["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"],unsupported:[],creator:c||"",link:"",imageUrl:"",yaml:e};const u={name:!1,version:!1,author:!1,creator:!1,description:!1,type:!1,link:!1,supported:!1,unsupported:!1,editor:!1,code:!1,imageUrl:!1,is_global:!1},p=(e,t,n=t,o=[])=>{if(void 0!==e[t])return d[n]=e[t],u[n]=!0,!0;for(const t of o)if(void 0!==e[t]&&!u[n])return d[n]=e[t],u[n]=!0,!0;return!1},b=e=>"string"==typeof e?e:Array.isArray(e)?e.join("\n"):"object"==typeof e?JSON.stringify(e):"";if(e)try{const n=o.Ay.load(e);if(n&&"object"==typeof n){if(1===Object.keys(n).length){const e=Object.keys(n)[0],o=n[e];if(d.id===t&&(d.id=e),o&&"object"==typeof o){if(p(o,"name"),p(o,"version"),p(o,"author"),p(o,"type"),p(o,"code"),p(o,"editor"),p(o,"link"),p(o,"creator"),p(o,"is_global"),p(o,"form_schema","editor"),p(o,"supported","supported",["supported_card","supported_cards"]),p(o,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),o.unsupported&&!o.supported&&!u.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"];d.supported=e.filter((e=>!o.unsupported.includes(e))),u.supported=!0}void 0!==o.description&&(d.description=b(o.description),u.description=!0),o.info&&"object"==typeof o.info&&(p(o.info,"name"),p(o.info,"version"),p(o.info,"author"),p(o.info,"type"),p(o.info,"creator"),p(o.info,"link"),p(o.info,"supported","supported",["supported_card","supported_cards"]),p(o.info,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),void 0===o.info.description||u.description||(d.description=b(o.info.description),u.description=!0))}}else{if(p(n,"name"),p(n,"version"),p(n,"author"),p(n,"type"),p(n,"code"),p(n,"editor"),p(n,"link"),p(n,"creator"),p(n,"is_global"),p(n,"form_schema","editor"),p(n,"supported","supported",["supported_card","supported_cards"]),p(n,"unsupported","unsupported",["unsupported_card","unsupported_cards"]),n.unsupported&&!n.supported&&!u.supported){const e=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"];d.supported=e.filter((e=>!n.unsupported.includes(e))),u.supported=!0}void 0!==n.description&&(d.description=b(n.description),u.description=!0)}if(!(u.editor||d.editor&&d.editor.length)){const e=JSON.stringify(n);if(e.includes('"type":')&&e.includes('"name":')&&1===Object.keys(n).length){const e=Object.keys(n)[0],t=n[e];if(t&&"object"==typeof t){const e=Object.keys(t).filter((e=>"object"==typeof t[e]&&(t[e].type||t[e].name||t[e].field)));e.length>0&&(d.editor=e.map((e=>({name:e,type:t[e].type||"input",...t[e]}))),u.editor=!0)}}}}}catch(e){console.error("Error during YAML analysis:",e)}if(!d.author&&d.creator?d.author=d.creator:!d.creator&&d.author&&(d.creator=d.author),i){if(!u.version){const e=[/\*\*Version:\*\*\s*(v?[\d\.]+)/i,/\|\s*(?:Version|v):\s*(v?[\d\.]+)\s*\|/i,/version\s+(v?[\d\.]+)/i];for(const t of e){const e=i.match(t);if(e&&e[1]){d.version=e[1];break}}}if(!u.description&&!d.description){const e=i.match(/\*\*Description\s*:\*\*\s*(.*?)(?=\n\s*\*\*|\n\s*#|$)/is);if(e&&e[1])d.description=(0,r.yh)(e[1].trim());else{const e=(0,r.yh)(i).split(/\n{2,}/);for(const t of e){const e=t.trim();if(e&&!e.startsWith("#")&&!e.match(/^[a-z_]+\s*:/i)&&e.length>15){d.description=e;break}}}}if(!u.supported){const e=function(e){if(!e||"string"!=typeof e)return null;const t=e.split(/\r?\n/),n=e=>{if(!e||"string"!=typeof e)return!1;const t=e.trim();return/^all(?:\s+cards?)?\b/i.test(t)},o=e=>(e||"").replace(/^\s*>\s*/g,"").trim(),r=e=>{const t=o(e);return!(!t||!/^\[!\w+\]/.test(t)&&!/^#{1,6}\s+/.test(t)&&!/^\*\*[^*]+:\*\*/.test(t))};for(let e=0;e<t.length;e++){const i=t[e],l=o(i);if(!l)continue;if(/unsupported\s*cards?/i.test(l))continue;const c=l.match(/(?:\*\*)?\s*supported\s*(?:cards|card)?\s*:\s*(?:\*\*)?\s*(.*)$/i);if(!c)continue;const d=(c[1]||"").trim();if(d){if(n(d))return;const e=s(d);if(e.length)return e;const t=d.split(",").map((e=>a(e.trim()))).filter(Boolean);if(t.length)return[...new Set(t)]}const u=[];for(let i=e+1;i<t.length;i++){const e=t[i],l=o(e);if(!l){if(u.length)break;continue}if(/^\[!\w+\]/.test(l))continue;if(r(e)&&u.length)break;const c=l.match(/^(?:-|\*|•)\s+(.+)$/);if(c){u.push(c[1].trim());continue}if(u.length)break;if(n(l))return;const d=s(l);if(d.length)return d;const p=l.split(",").map((e=>a(e.trim()))).filter(Boolean);if(p.length)return[...new Set(p)];break}if(u.length){if(u.some((e=>n(e))))return;const e=u.map((e=>s(e))).flat().filter(Boolean);if(e.length)return[...new Set(e)];const t=u.map((e=>a(e.trim()))).filter(Boolean);if(t.length)return[...new Set(t)]}}return null}(i);if(void 0===e?(d.supported=void 0,u.supported=!0):Array.isArray(e)&&e.length>0&&(d.supported=e,u.supported=!0),!u.supported)if(i.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*(?:-\s*)?(?:All|all\s+cards?)/i))d.supported=void 0,u.supported=!0;else{const e=i.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*\[(.*?)\]/i);if(e){const t=e[1].split(",").map((e=>a(e.trim()))).filter((e=>e&&e.length>0));t.length>0&&(d.supported=t,u.supported=!0)}else{const e=i.match(/\*\*Supported\s*(?:Cards|Card)?\s*:\*\*\s*([^\n\r]+?)(?=\||\n|$)/i);if(e){const t=e[1].trim();if(!/^(?:All|all\s+cards?)$/i.test(t)){const e=s(t);if(e.length>0)d.supported=e,u.supported=!0;else{const e=t.split(",").map((e=>a(e.trim()))).filter((e=>e&&e.length>0));e.length>0&&(d.supported=e,u.supported=!0)}}}}}}if(!(u.creator||d.creator&&d.creator!==c)){const e=i.match(/\*\*Creator\s*:\*\*\s*\[?([^\]\n\r]+)(?:\]|\n|$)/i);e&&(d.creator=e[1].trim(),d.author||(d.author=d.creator))}if(!u.imageUrl&&!d.imageUrl){const e={Screenshot:i.match(/Screenshot:([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||"",GetThisModule:i.match(/Get this Module([^#]*?)(?=#|\n\s*\n\s*\*\*|$)/is)?.[1]||""},t=[{regex:/!\[.*?\]\((https:\/\/[^)]+)\)/g,isGlobal:!0},{regex:/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i,isGlobal:!1},{regex:/src="(https:\/\/github\.com\/user-attachments\/assets\/[^"]+)"/i,isGlobal:!1}];for(const n of Object.values(e))if(n){for(const e of t)if(e.isGlobal){const t=[...n.matchAll(e.regex)];if(t.length>0){d.imageUrl=t[0][1];break}}else{const t=n.match(e.regex);if(t){d.imageUrl=t[1];break}}if(d.imageUrl)break}if(!d.imageUrl){const e=[...i.matchAll(/!\[.*?\]\((https:\/\/[^)]+)\)/g)];if(e.length>0){const t=e.filter((e=>e[1].includes("user-images.githubusercontent.com")||e[1].includes("github.com/user-attachments")));d.imageUrl=t.length>0?t[0][1]:e[0][1]}else{const e=i.match(/<img[^>]*src=["'](https:\/\/[^"']+)["'][^>]*>/i);e&&(d.imageUrl=e[1])}}}}if(l){if(!u.type){const e=l.match(/\[(.*?) Module\]/i);e&&(d.type=e[1].toLowerCase())}if(!u.version&&"1.0"===d.version){const e=l.match(/(v?[\d\.]+)/);e&&(d.version=e[1])}if(!u.name){let e=l.replace(/\[.*?\]\s*/,"").trim();e=e.replace(/\s*-\s*v?[\d\.]+$/,"").trim(),d.name=e}}return d}},888:(e,t,n)=>{n.d(t,{wv:()=>w,sq:()=>g,nO:()=>_,Ki:()=>f});var o=n(134),r=n(382);const i="/local/bubble/";let a=null;function s(){if(a)return a;const e=new r.ZU("!include",{kind:"scalar",resolve:e=>"string"==typeof e&&e.trim().length>0,construct:e=>{const t=function(e){if("undefined"==typeof XMLHttpRequest)return console.warn("Bubble Card - XMLHttpRequest is unavailable, skipping !include resolution."),null;const t=(n=e)&&"string"==typeof n?n.trim().replace(/^\.\/+/,"").replace(/^\/+/,""):"";var n;if(!t)return null;const o=`${i}${t}`;try{const e=new XMLHttpRequest;if(e.open("GET",o,!1),e.send(null),200===e.status)return e.responseText;console.error(`Bubble Card - Unable to resolve !include (${o}): HTTP ${e.status}`)}catch(e){console.error(`Bubble Card - Error while loading included YAML (${o}):`,e)}return null}(e);if(!t||!t.trim())return null;try{return r.Hh(t,{schema:s()})}catch(t){return console.error(`Bubble Card - Error parsing included YAML (${e}):`,t),null}}});return a=r.my.extend([e]),a}function l(e){if(!e||"string"!=typeof e)return null;try{return r.Hh(e,{schema:s()})}catch(e){return console.error("Bubble Card - YAML parsing error:",e),null}}const c=["modules","friendly_name","last_updated"],d=["name","code","description","editor","version","creator","link","supported","unsupported","is_global"];function u(e,t,n){var o;t&&"string"==typeof t&&n&&"object"==typeof n&&(o=n)&&"object"==typeof o&&d.some((e=>e in o))&&e.set(t,{id:t,...n})}async function p(e){try{if(!await(0,o.ensureBCTProviderAvailable)(e))return!1;if(await(0,o.isMigrationDone)(e))return!1;try{if((await(0,o.listFiles)(e)).filter((e=>e?.name&&e.name.startsWith("modules/")&&/\.ya?ml$/i.test(e.name))).length>0)return await(0,o.setMigrationDone)(e,{detected:"files_exist"}),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){}const t=await async function(e){try{const t="sensor.bubble_card_modules",n=e?.states?.[t];if(!n)return new Map;const o=n.attributes?.modules;if(!o||"object"!=typeof o)return new Map;const r=new Map;return Object.values(o).forEach((e=>{if(!e)return;const t=e.id||null;let n=null;try{if("string"==typeof e.yaml&&e.yaml.trim()){const o=l(e.yaml);if(o&&"object"==typeof o){const e=Object.keys(o);if(1===e.length){const t=e[0];n={id:t,...o[t]||{}}}else t&&o[t]&&"object"==typeof o[t]&&(n={id:t,...o[t]})}}}catch(e){}if(!n){const o={};["name","version","creator","description","supported","unsupported","code","editor","link","is_global"].forEach((t=>{t in e&&(o[t]=e[t])})),t&&(o.id=t),Object.keys(o).length>0&&(n=o)}if(n&&(n.id||t)){const e=n.id||t;r.set(e,{...n,id:e})}})),r}catch(e){return new Map}}(e),n=await async function(){try{const e=`/local/bubble/bubble-modules.yaml?v=${Date.now()}`,t=await fetch(e,{cache:"no-store"});if(!t.ok)return new Map;const n=await t.text();if(!n||!n.trim())return new Map;const o=l(n);return o&&"object"==typeof o?function(e){const t=new Map;return e&&"object"==typeof e?(Object.keys(e).forEach((n=>{c.includes(n)||u(t,n,e[n])})),e.modules&&"object"==typeof e.modules&&Object.keys(e.modules).forEach((n=>{u(t,n,e.modules[n])})),t):t}(o):new Map}catch(e){return new Map}}(),r=new Map(n);t.forEach(((e,t)=>{r.set(t,e)}));let i=0;for(const[t,n]of r.entries()){if(!t||"string"!=typeof t)continue;try{const n=await(0,o.readFile)(e,(0,o.getModuleFileName)(t));if(n&&"string"==typeof n.content)continue}catch(e){}const r={...n};delete r.id,await(0,o.writeModuleYaml)(e,t,r),i++}return await(0,o.setMigrationDone)(e,{entity_count:t.size,yaml_count:n.size,written_count:i}),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){return!1}}let b=null,h=!1,m=null,g=new Map,f=new Map,y=new Map;document.addEventListener("yaml-modules-updated",(()=>{h=!1,b=null,m=null;try{window.dispatchEvent(new CustomEvent("bubble-card-modules-changed"))}catch(e){}})),window.addEventListener("bubble-card-module-updated",(e=>{if(e?.detail?.moduleId&&e?.detail?.moduleData){f.set(e.detail.moduleId,e.detail.moduleData),g.has(e.detail.moduleId)||g.set(e.detail.moduleId,"editor");try{window.dispatchEvent(new CustomEvent("bubble-card-modules-changed"))}catch(e){}}}));const v=async e=>{for(const t of e){const e=`${t}?v=${Date.now()}`;try{const n=await fetch(e,{cache:"no-store"});if(!n.ok){try{window.bubbleYamlWarning=!0}catch(e){}continue}const o=l(await n.text());return!f.size&&o&&Object.entries(o).forEach((([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&f.set(e,t)})),y.set(t,o),o}catch(t){console.warn(`Error fetching 'bubble-modules.yaml' from ${e}:`,t);try{window.bubbleYamlWarning=!0}catch(e){}}}return null};function _(e){e.config?.card_type&&!e.stylesYAML&&(e.stylesYAML=h&&b?Promise.resolve(b):w(e))}async function w(e){return h&&b?b:m||(m=(async()=>{try{const t=(0,o.getCachedAggregatedModules)();if(t&&Object.keys(t).length>0)return g.clear(),f.clear(),b={},Object.keys(t).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&(b[e]=t[e],f.set(e,t[e]),g.set(e,"file"))})),h=!0,(async()=>{try{if(!await(0,o.ensureBCTProviderAvailable)(e?._hass))return;try{await p(e?._hass)}catch(e){}const t=await(0,o.readAllModules)(e?._hass),n={};if(t.forEach(((e,t)=>{"modules"!==t&&"friendly_name"!==t&&"last_updated"!==t&&(n[t]=e)})),JSON.stringify(n)!==JSON.stringify(b)){g.clear(),f.clear(),b={},Object.keys(n).forEach((e=>{b[e]=n[e],f.set(e,n[e]),g.set(e,"file")}));try{document.dispatchEvent(new CustomEvent("yaml-modules-updated"))}catch(e){}}}catch(e){}})(),b}catch(e){}if(await(0,o.ensureBCTProviderAvailable)(e?._hass)){try{await p(e?._hass)}catch(e){console.warn("Bubble Card - Migration check failed:",e)}const t=(0,o.getCachedAggregatedModules)();if(t&&Object.keys(t).length>0)return g.clear(),f.clear(),b={},Object.keys(t).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&(b[e]=t[e],f.set(e,t[e]),g.set(e,"file"))})),h=!0,(async()=>{try{const t=await(0,o.readAllModules)(e?._hass),n={};if(t.forEach(((e,t)=>{"modules"!==t&&"friendly_name"!==t&&"last_updated"!==t&&(n[t]=e)})),JSON.stringify(n)!==JSON.stringify(b)){g.clear(),f.clear(),b={},Object.keys(n).forEach((e=>{b[e]=n[e],f.set(e,n[e]),g.set(e,"file")}));try{document.dispatchEvent(new CustomEvent("yaml-modules-updated"))}catch(e){}}}catch(e){}})(),b;const n=await(0,o.readAllModules)(e?._hass);return g.clear(),f.clear(),b={},n.forEach(((e,t)=>{"modules"!==t&&"friendly_name"!==t&&"last_updated"!==t&&(b[t]=e,f.set(t,e),g.set(t,"file"))})),h=!0,b}const t=await v(["/local/bubble/bubble-modules.yaml"]),n=e?._hass?await async function(e){const t=e?.states?.["sensor.bubble_card_modules"];if(!t)return{};if(!t.attributes?.modules)return{};const n={};try{Object.values(t.attributes.modules).forEach((e=>{try{if(!e.yaml&&(e.code||e.description))return void(n[e.id]=e);if(!e.yaml)return}catch(t){console.error(`❌ YAML parsing error for module ${e.id}:`,t),"string"==typeof e.yaml?console.error("Problematic YAML content:",e.yaml.substring(0,100)+"..."):console.error("Problematic YAML content type:",typeof e.yaml)}}))}catch(e){console.error("Error while processing modules from text entity:",e)}return n}(e._hass):{};return g.clear(),t&&Object.keys(t).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,"yaml")})),n&&Object.keys(n).forEach((e=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&g.set(e,"entity")})),b={...t||{},...n||{}},f.clear(),Object.entries(b).forEach((([e,t])=>{"modules"!==e&&"friendly_name"!==e&&"last_updated"!==e&&f.set(e,t)})),h=!0,b})(),m)}},766:(e,t,n)=>{n.d(t,{Xe:()=>_,_e:()=>m,dn:()=>v});var o=n(957),r=n(888),i=n(933),a=n(264),s=n(241),l=n(868),c=n(382),d=n(134);const u=5e3,p="bubble-card-rate-limit-warning";function b(e){try{const t="number"==typeof e&&Number.isFinite(e)?e:Date.now()+36e5;localStorage.setItem(p,JSON.stringify({resetTime:t}))}catch(e){console.warn("Failed to persist rate limit warning to localStorage",e)}}function h(){try{localStorage.removeItem(p)}catch(e){console.warn("Failed to clear rate limit warning from localStorage",e)}}function m(e){const t=e.hass&&e.hass.states&&e.hass.states["sensor.bubble_card_modules"];if(void 0===e._storeShowOnlyCompatible&&(e._storeShowOnlyCompatible=!0),void 0===e._rankingInfoDismissed)try{e._rankingInfoDismissed="true"===localStorage.getItem("bubble-card-ranking-info-dismissed")}catch(t){e._rankingInfoDismissed=!1}if(void 0===e._rateLimitWarning){const t=function(){try{const e=localStorage.getItem(p);if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t:null}catch(e){return null}}(),n=t?.resetTime;"number"==typeof n&&n>Date.now()?(e._rateLimitWarning=!0,e._rateLimitResetTime=n):(e._rateLimitWarning=!1,t&&h())}e._dismissRankingInfo=()=>{e._rankingInfoDismissed=!0;try{localStorage.setItem("bubble-card-ranking-info-dismissed","true")}catch(e){console.warn("Failed to save ranking info dismiss state to localStorage",e)}e.requestUpdate()};const n=(0,d.isBCTAvailableSync)();if(e._storeBctRetryHandle&&n&&(clearTimeout(e._storeBctRetryHandle),e._storeBctRetryHandle=null),!e.hass||n||e._storeBctCheckAttempted)e.hass&&n&&!e._storeBctCheckAttempted&&(e._storeBctCheckInFlight||(e._storeBctCheckInFlight=!0,e._storeBctCheckAttempted=!0,(0,d.ensureBCTProviderAvailable)(e.hass).finally((()=>{e._storeBctCheckInFlight=!1,(0,d.isBCTAvailableSync)()!==n&&e.requestUpdate()}))));else{const t=Date.now(),n=e._storeLastBctCheckAt??0,o=n?t-n:1/0,r=n&&o<u;if(e._storeBctCheckInFlight||r){if(r&&!e._storeBctRetryHandle){const t=Math.max(50,u-o);e._storeBctRetryHandle=setTimeout((()=>{e._storeBctRetryHandle=null,e.requestUpdate()}),t)}}else e._storeBctRetryHandle&&(clearTimeout(e._storeBctRetryHandle),e._storeBctRetryHandle=null),e._storeBctCheckInFlight=!0,e._storeBctCheckAttempted=!0,e._storeLastBctCheckAt=t,(0,d.ensureBCTProviderAvailable)(e.hass).finally((()=>{e._storeBctCheckInFlight=!1,e.requestUpdate()}))}if(!n){const e=r.Ki&&r.Ki.size>0||t;return o.qy`
      <div class="bubble-info warning">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Bubble Card Tools required
        </h4>
        <div class="content">
          ${e?o.qy`
            <p><b>To use the Module Store and to install/edit modules, install <code>Bubble Card Tools</code>.</b></p>
            <p>Existing modules will still be read from legacy sources for compatibility.</p>
          `:o.qy`
            <p><b>No modules detected yet.</b> To install or edit modules and use the Module Store, install <code>Bubble Card Tools</code>.</p>
          `}
        </div>
      </div>
    `}if(!e._storeModules){const t=(0,s.TJ)();if(t){e._storeModules=t.modules,e._isLoadingStore=!1;const n=Date.now(),o=n-(t.lastFetchedAt||(t.expiration?t.expiration-864e5:0))>216e5,r=t.expiration<n+36e5;(o||r)&&k(e,!0)}else e._isLoadingStore=!0,k(e)}if(e._storeAutoRefreshTimer||(e._storeAutoRefreshTimer=setInterval((()=>{k(e,!0)}),216e5)),e._isLoadingStore){const t=e._loadingProgress||0,n=e._loadingStatus||"Loading modules";return o.qy`
      <div class="store-loading">
        <div class="bubble-loading-icon">
          <div class="icon-center-wrapper">
            <ha-icon icon="mdi:puzzle"></ha-icon>
          </div>
          <div class="bubble-loading-orbit">
            <div class="bubble-loading-satellite"></div>
          </div>
        </div>
        <div class="bubble-progress-container">
          <div class="bubble-progress-track">
            <div class="bubble-progress-bar" style="width: ${t}%">
              <div class="bubble-progress-glow"></div>
            </div>
          </div>
          <div class="bubble-progress-percentage">
            <span class="bubble-progress-text">${n}</span>
            <span class="bubble-progress-value">${Math.round(t)}%</span>
          </div>
        </div>
      </div>
    `}return e._storeError?o.qy`
      <div class="bubble-info error">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
          Loading error
        </h4>
        <div class="content">
          <p>Could not load modules from GitHub: ${e._storeError}</p>
          <mwc-button @click=${()=>k(e)}>
            <ha-icon icon="mdi:refresh" style="margin-right: 8px;"></ha-icon>
            Retry
          </mwc-button>
        </div>
      </div>
    `:([...new Set(e._storeModules.filter((e=>e.type)).map((e=>e.type.toLowerCase())))].sort(),void 0===e._zoomedImage&&(e._zoomedImage=null),e._toggleImageZoom=t=>{e._zoomedImage===t?e._zoomedImage=null:e._zoomedImage=t,e.requestUpdate()},o.qy`
    <div class="module-store">
      <div class="store-header">
        <div class="store-header-top">
          <div class="store-header-title">
            <ha-icon icon="mdi:puzzle-plus-outline"></ha-icon>
            <span>Module Store</span>
          </div>
          <div 
            class="store-refresh-button" 
            @click=${()=>{e._isApiCallInProgress=!1,k(e,!1)}}
            title="Refresh module list"
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </div>
        </div>
        <div class="store-search">
          <ha-textfield
            label="Search for a module"
            icon
            .value=${e._storeSearchQuery||""}
            @input=${t=>{e._storeSearchQuery=t.target.value,e.requestUpdate()}}
          >
            <slot name="prefix" slot="leadingIcon">
              <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
            </slot>
          </ha-textfield>
        </div>
        <div class="store-filters">

          <ha-formfield label="Show only modules compatible with this card">
            <ha-switch
              .checked=${e._storeShowOnlyCompatible??!0}
              @change=${t=>{e._storeShowOnlyCompatible=t.target.checked,e.requestUpdate()}}
            ></ha-switch>
          </ha-formfield>
        </div>
      </div>

      ${e._rankingInfoDismissed?"":o.qy`
        <div class="bubble-info info">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:information-outline"></ha-icon>
              How modules are ranked
              <div class="bubble-info-dismiss bubble-badge" @click=${e._dismissRankingInfo} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>Due to a limitation in GitHub's API, only top-level reactions like ❤️ 👍 🚀 on the main discussion post are counted for popularity, along with other factors like recent activity, number of comments, updates...</p>
            <p><b>Click the "More info" button and show some love there if you find a module useful!</b></p>
          </div>
        </div>
      `}

      ${e._rateLimitWarning?o.qy`
        <div class="bubble-info warning">
          <div class="bubble-info-header">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              API rate limit reached
              <div class="bubble-info-dismiss bubble-badge" @click=${()=>{e._rateLimitWarning=!1,h(),e.requestUpdate()}} title="Dismiss" 
                style="
                  display: inline-flex;
                  align-items: center;
                  position: absolute;
                  right: 16px;
                  padding: 0 8px;
                  cursor: pointer;"
              >
                <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
                Dismiss
              </div>
            </h4>
          </div>
          <div class="content">
            <p>GitHub API rate limit was reached. The module list is loaded from cache. ${e._rateLimitResetTime?`Please try again in ${function(e){const t=e-Date.now();if(t<=0)return"now";const n=Math.ceil(t/6e4);if(n<60)return`${n} minute${n>1?"s":""}`;const o=Math.floor(n/60),r=n%60;return 0===r?`${o} hour${o>1?"s":""}`:`${o} hour${o>1?"s":""} and ${r} minute${r>1?"s":""}`}(e._rateLimitResetTime)}.`:"Please try again later."}</p>
          </div>
        </div>
      `:""}

      <div class="store-modules">
        ${g(e).map((t=>{const n=y(t.id),r=v(t.id),a=w(t.id,t.version),s=e._config.card_type??"";let c=!0;return c=Array.isArray(t.supportedCards)?t.supportedCards.includes(s):!t.unsupportedCards||!t.unsupportedCards.includes(s),o.qy`
            <div class="store-module-card">
              <div class="store-module-header ${c?"":"warning"}">
                <div class="bubble-section-title">
                  <ha-icon icon="mdi:puzzle"></ha-icon>
                  <h3>${t.name}</h3>
                </div>

                <div class="store-module-meta">
                  <div class="store-module-author">
                    ${t.userAvatar?o.qy`
                      <img src="${t.userAvatar}" alt="${t.creator||"Anonymous"}" class="author-avatar">
                    `:""}
                    <span>by ${t.creator||"Anonymous"}</span>
                  </div>
                  <div class="version-container">
                    ${f(t)?o.qy`<span class="bubble-badge new-badge"><ha-icon icon="mdi:bell-outline"></ha-icon> New</span>`:""}
                    ${c?"":o.qy`<span class="bubble-badge incompatible-badge">Incompatible</span>`}
                    ${a?o.qy`<span class="bubble-badge update-badge">Update available</span>`:""}
                    ${r?o.qy`<span class="bubble-badge yaml-badge">YAML</span>`:""}
                    <span class="bubble-badge version-badge">${t.version||""}</span>
                  </div>
                </div>

                <div class="store-module-badges bubble-badges">
                </div>
              </div>

              <div class="store-module-content">
                <div class="store-module-description">
                  ${t.description?o.qy`
                    <p class="module-description" .innerHTML=${(0,i.bx)(t.description)}></p>
                  `:o.qy`
                    <p><em>No description</em></p>
                  `}
                  ${t.imageUrl?o.qy`
                    <div class="module-preview-container">
                      <img src="${t.imageUrl}" alt="${t.name}" class="module-preview-image">
                      <div class="module-preview-zoom-btn" @click=${n=>{n.stopPropagation(),e._toggleImageZoom(t.imageUrl)}}>
                        <ha-icon icon="mdi:magnify"></ha-icon>
                      </div>
                    </div>
                  `:""}
                </div>

                <div class="store-module-actions bubble-badges">
                  ${n?o.qy`
                      ${a?o.qy`
                          ${x(t)?o.qy`
                              <a 
                                href="${t.moduleLink}"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update (Manual install)</span>
                              </a>
                            `:o.qy`
                              <div 
                                @click=${()=>(0,l.G)(e,t)}
                                class="bubble-badge update-button hoverable"
                                style="cursor: pointer;"
                              >
                                <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                                <span>Update</span>
                              </div>
                            `}
                        `:o.qy`
                          <div class="bubble-badge installed-button">
                            <ha-icon icon="mdi:check"></ha-icon>
                            <span>${r?"Installed via YAML":"Installed"}</span>
                          </div>
                        `}
                    `:o.qy`
                      ${x(t)?o.qy`
                          <a
                            href="${t.moduleLink}"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:github"></ha-icon>
                            <span>Manual install</span>
                          </a>
                        `:o.qy`
                          <div
                            @click=${()=>(0,l.G)(e,t)}
                            class="bubble-badge install-button hoverable"
                            style="cursor: pointer;"
                          >
                            <ha-icon icon="mdi:download"></ha-icon>
                            <span>Install</span>
                          </div>
                        `}
                    `}
                  <a
                    href="${t.moduleLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bubble-badge link-button"
                  >
                    <ha-icon icon="mdi:github"></ha-icon>
                    More info / Issue report
                  </a>
                </div>
              </div>
            </div>
          `}))}
      </div>

      ${0===g(e).length?o.qy`
        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            No modules found
          </h4>
          <div class="content">
            <p>No modules match your search criteria. Try modifying your search or filters.</p>
          </div>
        </div>
      `:""}
      
      <div class="back-to-top-button" @click=${()=>(0,i.XY)(e)}>
        <ha-icon icon="mdi:arrow-up"></ha-icon>
      </div>
    </div>

    ${e._zoomedImage?o.qy`
      <div class="module-preview-fullscreen" @click=${()=>e._toggleImageZoom(null)}>
        <img src="${e._zoomedImage}" alt="Fullscreen preview">
      </div>
    `:""}
  `)}function g(e){if(!e._storeModules)return[];let t=[...e._storeModules];const n=new Map([["smart_icons"]]);if(t=t.filter((e=>{const t=e&&e.id;return!t||!n.has(t)||y(t)})),e._storeSearchQuery){const n=e._storeSearchQuery.toLowerCase();t=t.filter((e=>e.name&&e.name.toLowerCase().includes(n)||e.description&&e.description.toLowerCase().includes(n)||e.creator&&e.creator.toLowerCase().includes(n)||e.type&&e.type.toLowerCase().includes(n)))}if(e._storeShowOnlyCompatible){const n=e._config.card_type??"";t=t.filter((e=>e.supportedCards&&Array.isArray(e.supportedCards)?e.supportedCards.includes(n):!e.unsupportedCards||!e.unsupportedCards.includes(n)))}return e._storeSelectedType&&"all"!==e._storeSelectedType&&(t=t.filter((t=>t.type&&t.type.toLowerCase()===e._storeSelectedType.toLowerCase()))),t=(o=t)&&Array.isArray(o)?o.map((e=>{let t=0,n=!1,o=!1;if(e.comments&&(t+=Math.min(e.comments,8),n=!0),e.reactions?.total_count&&(t+=5*e.reactions.total_count,n=!0),e.reactions?.heart&&(t+=10*e.reactions.total_count,n=!0),e.createdAt){const n=new Date(e.createdAt),r=(new Date-n)/864e5;r<=7?(t+=30,o=!0):r<=30?(t+=15,o=!0):r<=90&&(t+=5)}if(e.updated_at){const n=new Date(e.updated_at),r=(new Date-n)/864e5;r<=7?(t+=25,o=!0):r<=30?(t+=15,o=!0):r<=90&&(t+=8)}return n||o||(t-=30),n&&o&&(t+=20),"Clooos"===e.creator&&(t+=100),f(e)&&(t+=1e4),{...e,relevanceScore:t}})).sort(((e,t)=>t.relevanceScore-e.relevanceScore)):[],t;var o}function f(e){if(!e.createdAt)return!1;const t=new Date(e.createdAt);return(new Date-t)/864e5<=14}function y(e){return r.Ki.has(e)}function v(e){if(!y(e))return!1;if(r.sq.has(e))return"yaml"===r.sq.get(e);try{return!JSON.parse(localStorage.getItem("bubble-card-modules")||"{}")[e]}catch(e){return console.warn("Error checking module installation source:",e),!1}}function _(){const e=Array.from(r.Ki.keys()),t=[];let n=0;const o=(0,s.TJ)();return o&&o.modules&&o.modules.length?(e.forEach((e=>{const i=o.modules.find((t=>t.id===e));i&&w(e,i.version)&&(n++,t.push({id:e,name:i.name||r.Ki.get(e).name||e,currentVersion:r.Ki.get(e).version||"0",newVersion:i.version}))})),{hasUpdates:n>0,updateCount:n,modules:t}):{hasUpdates:!1,updateCount:0,modules:[]}}function w(e,t){if(!y(e)||!t)return!1;const n=(r.Ki.get(e)||{}).version||"0";return(0,i._O)(t,n)>0}function x(e){if(!e||!e.yamlContent)return!0;const t=e.yamlContent.trim();if(!t)return!0;try{const e=c.Ay.load(t);if(!e||"object"!=typeof e)return!0;const n=Object.keys(e);if(n.length>1){let t=0;for(const o of n){const n=e[o];n&&"object"==typeof n&&(n.name||n.code)&&t++}if(t>1)return!0}if(1===n.length){const t=e[n[0]];if(t&&"object"==typeof t){const e=Object.keys(t);let n=0;for(const o of e){const e=t[o];e&&"object"==typeof e&&(e.name||e.code)&&n++}if(n>1)return!0}}if(1===n.length){const t=e[n[0]];if(!t||"object"!=typeof t)return!0;if(!t.name||!t.code)return!0}}catch(e){return console.warn("Error checking module YAML compatibility:",e),!0}return!1}async function k(e,t=!1){if(e._isApiCallInProgress)return;e._isApiCallInProgress=!0;const n=!t&&void 0!==e._storeModules;if(!t){e._isLoadingStore=!0,e._storeError=null,e._loadingProgress=5,e._loadingStatus="Connecting to GitHub",e.requestUpdate();let t=setInterval((()=>{if(!e._isLoadingStore)return void clearInterval(t);const n=e._loadingProgress||0;let o=0;n<40?o=2.5*Math.random():n<60?o=1.5*Math.random():n<75?o=.8*Math.random():n<90&&(o=.3*Math.random()),n<90&&(e._loadingProgress=n+o,e.requestUpdate())}),200);e._progressInterval=t}try{if(!n){const n=localStorage.getItem("bubble-card-api-failure-timestamp");if(n){const o=parseInt(n),r=18e5;if(Date.now()-o<r){const n=(0,s.TJ)();return n&&!e._storeModules&&(e._storeModules=n.modules,e._isLoadingStore=!1,e.requestUpdate()),t||(e._loadingStatus="Loading from cache",e._loadingProgress=100,e.requestUpdate(),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)),void(e._isApiCallInProgress=!1)}localStorage.removeItem("bubble-card-api-failure-timestamp")}}let o=[],r=1,i=!0,l=!1;for(t||(e._loadingStatus="Downloading module data",e._loadingProgress=Math.max(e._loadingProgress,50),e.requestUpdate());i;){let n,a=0;const s=2;for(;a<=s;)try{if(n=await fetch(`https://api.github.com/repos/Clooos/Bubble-Card/discussions?per_page=100&page=${r}`,{method:"GET",headers:{Accept:"application/vnd.github.v3+json","X-GitHub-Api-Version":"2022-11-28"}}),n.ok||n.status>=400&&n.status<500)break;if(!(a<s))break;console.warn(`⚠️ Server error ${n.status} on page ${r}, retrying in ${500*(a+1)}ms...`),await new Promise((e=>setTimeout(e,500*(a+1)))),a++}catch(e){if(!(a<s)){if(console.warn(`⚠️ Network error on page ${r} after ${s} retries:`,e.message),o.length>0){console.warn(`Using ${o.length} discussions from previous pages`),l=!0,i=!1,n=null;break}throw e}console.warn(`⚠️ Network error on page ${r}, retrying in ${500*(a+1)}ms...`),await new Promise((e=>setTimeout(e,500*(a+1)))),a++}if(!n)continue;if(t||(e._loadingStatus=`Processing page ${r}`,e._loadingProgress=Math.max(e._loadingProgress,Math.min(50+5*r,80)),e.requestUpdate()),!n.ok){const t=n.headers.get("x-ratelimit-remaining"),a=n.headers.get("x-ratelimit-reset"),s=null!==t?Number(t):null,c=a?1e3*parseInt(a,10):null;if(403===n.status&&0===s&&(c&&(e._rateLimitResetTime=c),e._rateLimitWarning=!0,b(e._rateLimitResetTime)),o.length>0&&n.status>=500){console.warn(`⚠️ Server error on page ${r}, using ${o.length} discussions from previous pages`),l=!0,i=!1;continue}throw localStorage.setItem("bubble-card-api-failure-timestamp",Date.now().toString()),new Error(`REST API Error: ${n.status}`)}const c=await n.json();0===c.length?i=!1:(o=[...o,...c],r++,i&&await new Promise((e=>setTimeout(e,1e3))));const d=n.headers.get("x-ratelimit-remaining"),u=n.headers.get("x-ratelimit-reset");d<=5&&(console.warn("⚠️ API limit approaching, stopping pagination"),l=!0,i=!1,u&&(e._rateLimitResetTime=1e3*parseInt(u)))}t||(e._loadingStatus="Filtering modules",e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate());const c=o.filter((e=>{const t=e.category?.name;return"Share your Modules"===t})),d=(0,a.N5)(c),u=(0,s.TJ)(),p=d.length>0;if(l&&u&&u.modules&&u.modules.length>d.length)return console.warn("⚠️ Rate limit reached with incomplete data, preserving existing cache"),e._rateLimitWarning=!0,b(e._rateLimitResetTime),t||(e._loadingStatus="Rate limit reached - Using cached data",e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),await new Promise((e=>setTimeout(e,300))),t||(e._loadingProgress=100,e._loadingStatus="Loaded from cache (API limit reached)",e.requestUpdate()),e._storeModules=u.modules,e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),void e.requestUpdate();e._rateLimitWarning=!1,h(),t||(e._loadingStatus="Saving to cache",e._loadingProgress=Math.max(e._loadingProgress,95),e.requestUpdate()),p&&(0,s.aN)(d),t||(await new Promise((e=>setTimeout(e,300))),e._loadingProgress=100,e._loadingStatus="Complete",e.requestUpdate()),t&&e._storeModules||(e._storeModules=p?d:u?.modules||[],e._isLoadingStore=!1,e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null),e.requestUpdate()),t&&e._storeModules&&p&&(e._storeModules=d,e.requestUpdate())}catch(n){if(console.error("Error loading modules:",n),!t){e._loadingStatus="Error - Loading from cache",e._loadingProgress=Math.max(e._loadingProgress,85),e.requestUpdate();const t=(0,s.TJ)();t?(await new Promise((e=>setTimeout(e,300))),e._storeModules=t.modules,e._isLoadingStore=!1,e._loadingProgress=100,e._loadingStatus="Loaded from cache",e.requestUpdate()):(e._storeError=n.message,e._isLoadingStore=!1,e.requestUpdate()),e._progressInterval&&(clearInterval(e._progressInterval),e._progressInterval=null)}}finally{e._isApiCallInProgress=!1,t||e.requestUpdate()}}},933:(e,t,n)=>{n.d(t,{TL:()=>l,XY:()=>u,_O:()=>d,a7:()=>r,bx:()=>i,yh:()=>s});var o=n(888);function r(e){const t=o.Ki.get(e)||{};let n=t.name||e,r=t.description||"",i=t.editor||[],a=t.supported||[],s=t.unsupported||[],l=t.creator||t.author||"",c=t.link||"",d=t.version||"";return"string"==typeof i&&(i=o.Ki.get(i)?.editor||[]),Array.isArray(i)||(i=[i]),Array.isArray(a)||(a=[a]),Array.isArray(s)||(s=[s]),s.length>0&&0===a.length&&(a=["button","climate","cover","horizontal-buttons-stack","media-player","pop-up","select","separator","sub-buttons"].filter((e=>!s.includes(e)))),{name:n,description:r,formSchema:i,supportedCards:a,unsupportedCard:s,moduleVersion:d,creator:l,moduleLink:c}}function i(e){if(!e)return"No description available";try{const t=/Description:\s*([^\n]+)/i,n=e.match(t);if(n&&n[1]){const e=s(n[1].trim());if(e&&e.length>5)return a(e)}const o=/description:\s*\|([\s\S]*?)(?=\n\s*\w+:|$)/i,r=e.match(o);if(r&&r[1]){const e=r[1].trim().split(/\n{2,}/)[0].trim();if(e&&e.length>5)return a(s(e))}const i=/description:\s*["']([^"']+)["']/i,l=e.match(i);if(l&&l[1]){const e=s(l[1].trim());if(e&&e.length>5)return a(e)}const c=/description:\s*([^\n\r]+)/i,d=e.match(c);if(d&&d[1]){const e=s(d[1].trim());if(e&&e.length>5)return a(e)}const u=e.split("\n");let p=!1,b=[];for(let e=0;e<u.length;e++){const t=u[e].trim();if(t)if(t.includes("Supported cards:")||t.match(/^Version:/i)||t.match(/^Creator:/i)||t.match(/^ID:/i))p=!0;else if(p){if(t.startsWith("```")||t.startsWith("#")||t.startsWith("-")||t.startsWith(">")||t.includes("yaml")||t.match(/^\s*[a-z_]+:/i))continue;if(t.length>10&&!t.includes("Supported")&&(b.push(t),b.join(" ").length>40))break}}return b.length>0?a(s(b.join(" ").trim())):"string"!=typeof e||e.includes("description:")?"No description available":a(s(e))}catch(e){return console.warn("Error during description formatting:",e),"No description available"}}function a(e){if(!e)return e;const t=e.trim(),n=(e,t)=>e>=0&&(-1===o||e<o);let o=-1,r=null;const i=t.search(/[.!?]\s/);n(i)&&(o=i+1,r="punct");const a=t.search(/<br|<\/p>|<p\s|<div|<\/div|<\/a>/i);n(a)&&(o=a,r="html");const s=t.search(/\n|\r\n/);if(n(s)&&(o=s,r="break"),o>=0){let e=t.substring(0,o).trim();if(e.length<5&&t.length>30){const n=t.substring(o+1).search(/[.!?]|\n|<br/i);n>0&&(e=t.substring(0,o+1+n).trim())}return e=e.replace(/<[^>]*>/g,"").trim(),"punct"===r||e.endsWith(".")?e:e+"."}const l=t.replace(/<[^>]*>/g,"").trim();return l.endsWith(".")?l:l+"."}function s(e){return e?e.replace(/\*\*(.*?)\*\*/g,"$1").replace(/\*(.*?)\*/g,"$1").replace(/`(.*?)`/g,"$1").replace(/~~(.*?)~~/g,"$1").replace(/\[(.*?)\]\(.*?\)/g,"$1").replace(/<\/?[^>]+(>|$)/g,"").replace(/^#+\s+/gm,"").replace(/\n{3,}/g,"\n\n").trim():""}function l(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function c(e){return null==e?"":"string"==typeof e?e.trim().replace(/^[vV]/,""):"number"==typeof e?String(e):Array.isArray(e)?e.map((e=>c(e))).filter(Boolean).join("."):"object"==typeof e?"string"==typeof e.version||"number"==typeof e.version?c(e.version):"string"==typeof e.value||"number"==typeof e.value?c(e.value):"":""}function d(e,t){const n=c(e),o=c(t);if(!n||!o)return 0;const r=n.split(".").map(Number),i=o.split(".").map(Number);for(let e=0;e<Math.max(r.length,i.length);e++){const t=r[e]||0,n=i[e]||0;if(t>n)return 1;if(t<n)return-1}return 0}function u(e,t=!0){const n=e.shadowRoot.getElementById("module-editor-top-marker");if(n){const e=t?"smooth":"instant";n.scrollIntoView({behavior:e,block:"start"})}}},388:(e,t,n)=>{n.d(t,{DK:()=>k,Qp:()=>w,S1:()=>i,VA:()=>_,jA:()=>x,sW:()=>f,w1:()=>v});var o=n(716),r=n(140);function i(e,t){if(!e||!t||!t.startsWith("light."))return"";const n=e.attributes||{},o=[];return n.rgb_color&&o.push(`rgb:${n.rgb_color.join(",")}`),n.hs_color&&o.push(`hs:${n.hs_color.join(",")}`),n.xy_color&&o.push(`xy:${n.xy_color.join(",")}`),null!=n.color_temp&&o.push(`ct:${n.color_temp}`),null!=n.color_temp_kelvin&&o.push(`ctk:${n.color_temp_kelvin}`),null!=n.brightness&&o.push(`br:${n.brightness}`),n.color_mode&&o.push(`cm:${n.color_mode}`),o.join("|")}const a="bubble-card-icons-cache";let s=null,l=null,c=!1;const d={},u={},p=new WeakMap,b=new Set;try{const e=localStorage.getItem(a);e&&(s=JSON.parse(e))}catch(e){}function h(e){"function"!=typeof e?.requestUpdate?"function"==typeof e?.card?.requestUpdate&&e.card.requestUpdate():e.requestUpdate()}function m(e,t){if(!t)return"";if(null!=e&&t.state?.[e])return t.state[e];if(null!=e&&t.range&&!isNaN(Number(e))){let n=p.get(t.range);n||(n=Object.keys(t.range).map(Number).filter((e=>!isNaN(e))).sort(((e,t)=>e-t)),p.set(t.range,n));const o=Number(e);if(n.length&&o>=n[0]){let e=n[0];for(const t of n){if(!(o>=t))break;e=t}return t.range[String(e)]||t.default||""}}return t.default||""}const g={ai_task:"mdi:star-four-points",air_quality:"mdi:air-filter",alert:"mdi:alert",automation:"mdi:robot",calendar:"mdi:calendar",climate:"mdi:thermostat",configurator:"mdi:cog",conversation:"mdi:forum-outline",counter:"mdi:counter",date:"mdi:calendar",datetime:"mdi:calendar-clock",demo:"mdi:home-assistant",device_tracker:"mdi:account",google_assistant:"mdi:google-assistant",group:"mdi:google-circles-communities",homeassistant:"mdi:home-assistant",homekit:"mdi:home-automation",image_processing:"mdi:image-filter-frames",image:"mdi:image",input_boolean:"mdi:toggle-switch",input_button:"mdi:button-pointer",input_datetime:"mdi:calendar-clock",input_number:"mdi:ray-vertex",input_select:"mdi:format-list-bulleted",input_text:"mdi:form-textbox",lawn_mower:"mdi:robot-mower",light:"mdi:lightbulb",notify:"mdi:comment-alert",number:"mdi:ray-vertex",persistent_notification:"mdi:bell",person:"mdi:account",plant:"mdi:flower",proximity:"mdi:apple-safari",remote:"mdi:remote",scene:"mdi:palette",schedule:"mdi:calendar-clock",script:"mdi:script-text",select:"mdi:format-list-bulleted",sensor:"mdi:eye",simple_alarm:"mdi:bell",siren:"mdi:bullhorn",stt:"mdi:microphone-message",sun:"mdi:white-balance-sunny",text:"mdi:form-textbox",time:"mdi:clock",timer:"mdi:timer-outline",template:"mdi:code-braces",todo:"mdi:clipboard-list",tts:"mdi:speaker-message",vacuum:"mdi:robot-vacuum",wake_word:"mdi:chat-sleep",weather:"mdi:weather-partly-cloudy",zone:"mdi:map-marker-radius"};function f(e,t=e.config.entity,n=e.config.icon){const r=e?._hass;if(function(e){l||c||!e?.callWS||(l=e.callWS({type:"frontend/get_icons",category:"entity_component"}).then((e=>{s=e?.resources||{};try{localStorage.setItem(a,JSON.stringify(s))}catch(e){}for(const e of b)h(e);b.clear()})).catch((()=>{l=null,c=!0})))}(r),n)return n;const i=r?.entities?.[t]?.icon;if(i)return i;const p=(0,o.D$)(e,"icon",t);if(p)return p;const f=r?.states?.[t];if(!t||!f||!r)return"";const y=function(e,t,n){const o=t.split(".")[0],r=e.entities?.[t],i=n.attributes?.device_class,a=n.state;if(r?.platform&&r?.translation_key){const e=d[r.platform];if(e){const t=m(a,e[o]?.[r.translation_key]);if(t)return t}}if(s){const e=s[o];if(e){const t=m(a,i&&e[i]||e._);if(t)return t}}return g[o]||""}(r,t,f);return y||(b.add(e),function(e,t,n){const o=e.entities?.[t],r=o?.platform;r&&o?.translation_key&&!d[r]&&e?.callWS&&(u[r]||(u[r]=e.callWS({type:"frontend/get_icons",category:"entity",integration:r}).then((e=>{d[r]=e?.resources?.[r]||{},h(n)})).catch((()=>{d[r]={},delete u[r]}))))}(r,t,e),"")}const y={"clear-night":"mdi:weather-night",cloudy:"mdi:weather-cloudy",exceptional:"mdi:alert-circle-outline",fog:"mdi:weather-fog",hail:"mdi:weather-hail",lightning:"mdi:weather-lightning","lightning-rainy":"mdi:weather-lightning-rainy",partlycloudy:"mdi:weather-partly-cloudy",pouring:"mdi:weather-pouring",rainy:"mdi:weather-rainy",snowy:"mdi:weather-snowy","snowy-rainy":"mdi:weather-snowy-rainy",sunny:"mdi:weather-sunny",windy:"mdi:weather-windy","windy-variant":"mdi:weather-windy-variant"};function v(e){return y[e]||"mdi:weather-cloudy"}function _(e,t=e.config.entity,n=1){const{card_type:i,use_accent_color:a}=e.config,s=(0,o.D$)(e,"rgb_color",t),l=(0,o.GM)("var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))))")?n-.2:n,c=t===e.config.entity&&(0,o.D$)(e,"unit_of_measurement",t)?.includes("°"),d=t===e.config.entity&&e._hass.states[t]?.state?.match(/\d+/);if(!t||c||d)return"var(--bubble-icon-color)";if((0,o.md)(e,"light")&&!a?"button"===i?e.card.classList.add("is-light"):"pop-up"===i&&e.elements.headerContainer.classList.add("is-light"):"button"===i?e.card.classList.remove("is-light"):"pop-up"===i&&e.elements.headerContainer.classList.remove("is-light"),!t.startsWith("light.")||a)return"var(--bubble-accent-color, var(--bubble-default-color))";const u=(0,o.f9)([225,225,210],l);if(!s)return`var(--bubble-light-color, var(--bubble-light-white-color, rgba(${u.join(", ")})))`;const p=(0,o.f9)(s,l);return(0,r.qd)(s)?`var(--bubble-light-color, var(--bubble-light-white-color, rgba(${u.join(", ")})))`:`var(--bubble-light-color, rgba(${p.join(", ")}))`}function w(e,t=e.config.entity,n=!1){if(!n&&(e.config.force_icon||e.config.icon))return"";const r=(0,o.D$)(e,"entity_picture_local",t)||(0,o.D$)(e,"entity_picture",t);return r?e._hass.hassUrl(r):""}function x(e,t){e&&(e.classList.remove("hidden"),e.classList.add("bubble-sub-button-icon","show-icon"),e.classList.toggle("icon-with-state",!!t),e.classList.toggle("icon-without-state",!t))}function k(e,t,n,o={}){const{beforeIconUpdate:r}=o,i=t.image;let a=t.icon;const s=t.showIcon,l=!!n,c=t.isSelect&&t.showArrow,d=!l&&!c;if(s&&i){let t=e.image;t||(t=document.createElement("div"),t.classList.add("bubble-sub-button-image"),t.classList.add("show-icon"),e.appendChild(t),e.image=t);const o=`url(${i})`;return t.style.backgroundImage!==o&&(t.style.backgroundImage=o),t.classList.remove("hidden"),t.classList.add("show-icon"),x(t,n),t.classList.toggle("image-full",d),e.classList.toggle("has-image-full",d),e.icon&&(e.icon.classList.remove("show-icon"),e.icon.classList.add("hidden")),t}if(s){let o=e.icon;if(o||(o=document.createElement("ha-icon"),o.classList.add("bubble-sub-button-icon"),e.appendChild(o),e.icon=o),a){if(r){const n=r(o,t);null!=n&&n instanceof HTMLElement&&n!==o&&(e.icon=n,o=n)}else o.icon!==a&&o.setAttribute("icon",a);o.classList.remove("hidden"),o.classList.add("show-icon"),x(o,n)}else o.classList.remove("show-icon"),o.classList.add("hidden");return e.classList.remove("has-image-full"),e.image&&(e.image.classList.remove("show-icon","image-full"),e.image.classList.add("hidden")),o}return e.classList.remove("has-image-full"),e.icon&&(e.icon.classList.remove("show-icon"),e.icon.classList.add("hidden")),e.image&&(e.image.classList.remove("show-icon","image-full"),e.image.classList.add("hidden")),null}},748:(e,t,n)=>{n.d(t,{eX:()=>a,sl:()=>l});const o=new Map,r=new Set;let i=!1;const a=e=>(r.add(e),()=>r.delete(e)),s=(e,t,n)=>e.subscribeMessage((e=>t(e)),{type:"render_template",...n});function l(e,t,n={}){if(!e?.connection||!t)return;const a=JSON.stringify({template:t,variables:n});if(o.has(a)){const e=o.get(a);return e.lastAccess=Date.now(),e.result}o.set(a,{result:void 0,unsubscribe:void 0,lastAccess:Date.now()}),s(e.connection,(e=>{const t=o.get(a);if(!t)return;const n=t.result;e.error?(console.error("Bubble Card - Template Error:",e.error),t.result=void 0):t.result=e.result,n!==t.result&&(i||(i=!0,requestAnimationFrame((()=>{i=!1;for(const e of r)try{e()}catch(e){console.error("Error in template change subscriber:",e)}}))))}),{template:t,variables:n,strict:!0}).then((e=>{const t=o.get(a);t?t.unsubscribe=e:e()}))}},140:(e,t,n)=>{n.d(t,{$i:()=>a,Bz:()=>i,qd:()=>r});var o=n(716);function r(e,t=40){if(Array.isArray(e)&&3===e.length){for(let t=0;t<3;t++)if(e[t]<0||e[t]>255)return;return e.every((e=>Math.abs(e-255)<=t))}}function i(e,t,n=1){if(!e||"string"!=typeof e)return`rgba(0, 0, 0, ${t})`;let r;if(e.startsWith("#"))r=4===e.length?"rgba("+Math.min(255,parseInt(e.charAt(1).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(2).repeat(2),16)*n)+", "+Math.min(255,parseInt(e.charAt(3).repeat(2),16)*n)+", "+t+")":"rgba("+Math.min(255,parseInt(e.slice(1,3),16)*n)+", "+Math.min(255,parseInt(e.slice(3,5),16)*n)+", "+Math.min(255,parseInt(e.slice(5,7),16)*n)+", "+t+")";else if(e.startsWith("rgb")){let o=e.match(/\d+/g);o&&o.length>=3&&(r="rgba("+Math.min(255,o[0]*n)+", "+Math.min(255,o[1]*n)+", "+Math.min(255,o[2]*n)+", "+t+")")}else if(e.startsWith("var(--")){let a=e.slice(4,-1),s=(0,o.EA)().getPropertyValue(a);s&&(s.startsWith("#")||s.startsWith("rgb"))&&(r=i(s,t,n))}return r??`rgba(0, 0, 0, ${t})`}function a(e=!0){const t=(0,o.qL)("var(--primary-background-color, #ffffff)");let n=(0,o.E2)(t)||(0,o.rY)(t)||[255,255,255];const r=[0,145,255].map(((e,t)=>Math.round(.7*e+.3*n[t]))),i=`rgb(${r[0]}, ${r[1]}, ${r[2]})`;return e&&document.documentElement.style.setProperty("--bubble-default-color",i),i}},642:(e,t,n)=>{n.d(t,{VR:()=>u,Xs:()=>g,dN:()=>p,pd:()=>m});var o=n(716);let r;window.isScrolling=!1;let i=!1;function a(){r&&(r.style.transform="translate(-50%, -50%) scale(0)",setTimeout((()=>{r&&(r.style.display="none")}),180))}function s(){window.isScrolling=!0,setTimeout((()=>{window.isScrolling=!1}),300)}window.__bubbleTapActionsInitialized||(document.addEventListener("scroll",s,{passive:!0}),document.addEventListener("contextmenu",(function(e){const t=e.composedPath().find((e=>e.classList?.contains("bubble-action")));if(t&&t.dataset.holdAction)try{"none"!==JSON.parse(t.dataset.holdAction).action&&(e.preventDefault(),e.stopPropagation())}catch(e){}})),document.body.addEventListener("pointerdown",d,{passive:!0}),document.body.addEventListener("touchstart",d,{passive:!0}),window.__bubbleTapActionsInitialized=!0);const l=new WeakMap,c=new Set;function d(e){if(window.isScrolling)return;if(e.touches&&e.touches.length>1||"touch"===e.pointerType&&!1===e.isPrimary)return;const t=e.composedPath().find((e=>e.classList?.contains("bubble-action")));if(e.composedPath().find((e=>e.classList?.contains("close-pop-up")||e.classList?.contains("bubble-close-button"))))return;if(!t)return;let n=l.get(t);if(n)n.resetState();else{const e={tap_action:JSON.parse(t.dataset.tapAction),double_tap_action:JSON.parse(t.dataset.doubleTapAction),hold_action:JSON.parse(t.dataset.holdAction),entity:t.dataset.entity};n=new b(t,e,h),l.set(t,n)}try{"pointerdown"===e.type&&t.haRipple&&"function"==typeof t.haRipple.startPress&&t.haRipple.startPress(e)}catch(e){}if(n.handleStart(e),!n.isInteractionInProgress())return;c.add(n);const o=e=>{"none"!==(n.config.hold_action||{action:"none"}).action&&(e.preventDefault(),e.stopPropagation())},r=()=>{t.removeEventListener("pointerup",i),t.removeEventListener("pointercancel",i),t.removeEventListener("touchend",i),t.removeEventListener("touchcancel",i),t.removeEventListener("contextmenu",o),document.removeEventListener("pointerup",i),document.removeEventListener("touchend",i),document.removeEventListener("scroll",a);try{t.haRipple&&"function"==typeof t.haRipple.endPress&&t.haRipple.endPress()}catch(e){}c.delete(n)},i=e=>{n.handleEnd(e),r()},a=()=>{n.handleScroll(),r()};t.addEventListener("pointerup",i,{once:!0}),t.addEventListener("pointercancel",i,{once:!0}),t.addEventListener("touchend",i,{once:!0}),t.addEventListener("touchcancel",i,{once:!0}),t.addEventListener("contextmenu",o),document.addEventListener("pointerup",i,{once:!0}),document.addEventListener("touchend",i,{once:!0}),document.addEventListener("scroll",a,{once:!0})}function u(e,t,n){const o=new Event("hass-action",{bubbles:!0,composed:!0}),r={...t};r.entity&&!r.entity_id&&(r.entity_id=r.entity),"tap"===n||"double_tap"===n||"hold"===n?o.detail={config:r,action:n}:(e.modifiedConfig={...r,tap_action:{...r[n]}},delete e.modifiedConfig[n],o.detail={config:e.modifiedConfig,action:"tap"}),e.dispatchEvent(o)}function p(e,t,n,r={}){e.classList.add("bubble-action");const i=t?.tap_action||r?.tap_action||{action:"none"},a=t?.double_tap_action||r?.double_tap_action||{action:"none"},s=t?.hold_action||r?.hold_action||{action:"none"};e.dataset.entity=t?.entity||n,e.dataset.tapAction=JSON.stringify(i),e.dataset.doubleTapAction=JSON.stringify(a),e.dataset.holdAction=JSON.stringify(s);const l="none"!==i.action||"none"!==a.action||"none"!==s.action;return l&&(e.classList.add("bubble-action-enabled"),e.haRipple=(0,o.n)("ha-ripple"),e.appendChild(e.haRipple)),{tap_action:i,double_tap_action:a,hold_action:s,has_action:l}}class b{constructor(e,t,n){this.element=e,this.config=t,this.sendActionEvent=n,this.tapTimeout=null,this.holdTimeout=null,this.startX=0,this.startY=0,this.lastX=0,this.lastY=0,this.holdFired=!1,this.pointerMoveListener=this.detectScrollLikeMove.bind(this),this.touchMoveListener=this.detectScrollLikeMove.bind(this),this.isDisconnected=!1,this.hasMoved=!1,this.interactionStarted=!1,this.justEndedTouchEventTime=0,this.currentInteractionType=null,this.interactionStartTime=0,this.preventDefaultCalled=!1}isInteractionInProgress(){return this.interactionStarted}resetState(){clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.tapTimeout=null,this.holdTimeout=null,this.holdFired=!1,this.hasMoved=!1,this.interactionStarted=!1,this.isDisconnected=!1,this.justEndedTouchEventTime=0,this.currentInteractionType=null,this.interactionStartTime=0,this.preventDefaultCalled=!1,this.startX=0,this.startY=0,this.lastX=0,this.lastY=0}cleanup(){this.isDisconnected=!0,clearTimeout(this.tapTimeout),clearTimeout(this.holdTimeout),document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.tapTimeout=null,this.holdTimeout=null,this.interactionStarted=!1}handleStart(e){const t=Date.now();"pointerdown"===e.type&&t-this.justEndedTouchEventTime<50||window.isScrolling||this.isDisconnected||(this.interactionStarted?"touchstart"===e.type&&"pointerdown"===this.currentInteractionType&&this.interactionStartTime:(this.interactionStarted=!0,this.currentInteractionType=e.type,this.interactionStartTime=t,e.touches&&e.touches.length>1?this.interactionStarted=!1:(this.holdFired=!1,this.hasMoved=!1,e.touches&&e.touches[0]?(this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.lastX=this.startX,this.lastY=this.startY):(this.startX=e.clientX,this.startY=e.clientY,this.lastX=this.startX,this.lastY=this.startY),document.addEventListener("pointermove",this.pointerMoveListener,{passive:!0}),document.addEventListener("touchmove",this.touchMoveListener,{passive:!0}),this.holdTimeout=setTimeout((()=>{if("none"!==(this.config.hold_action||{action:"none"}).action&&!window.isScrolling){const e=Math.abs(this.lastX-this.startX),t=Math.abs(this.lastY-this.startY);if(Math.sqrt(e*e+t*t)<=15){this.holdFired=!0;const e="touchstart"===this.currentInteractionType;!function(e,t,n){const o=function(e){if(!r){const e=document.createElement("div");r=e,document.body.appendChild(e)}const t=e?100:50;return Object.assign(r.style,{position:"fixed",width:`${t}px`,height:`${t}px`,transform:"translate(-50%, -50%) scale(0)",pointerEvents:"none",zIndex:"999",background:"var(--primary-color)",display:"none",opacity:"0.4",borderRadius:"50%",transition:"transform 180ms ease-in-out"}),i||(["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll","pointercancel"].forEach((e=>{document.addEventListener(e,(()=>{a()}),{passive:!0})})),i=!0),r}(n),s=n?100:50;o.style.width=`${s}px`,o.style.height=`${s}px`,o.style.left=`${Math.round(e)}px`,o.style.top=`${Math.round(t)}px`,o.style.display="block",o.offsetWidth,o.style.transform="translate(-50%, -50%) scale(1)"}(this.startX,this.startY,e)}}}),500))))}detectScrollLikeMove(e){let t,n;e.touches&&e.touches[0]?(t=e.touches[0].clientX,n=e.touches[0].clientY):(t=e.clientX,n=e.clientY),this.lastX=t,this.lastY=n;const o=Math.abs(t-this.startX),r=Math.abs(n-this.startY),i=Math.sqrt(o*o+r*r);(o>5||r>5)&&(this.hasMoved=!0,s(),i>15&&(clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener)))}handleEnd(e){if("touchend"!==e.type&&"touchcancel"!==e.type||(this.justEndedTouchEventTime=Date.now()),!this.interactionStarted)return;let t,n;e.changedTouches&&e.changedTouches[0]?(t=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY):(t=e.clientX,n=e.clientY);const o=Math.abs(t-this.startX),r=Math.abs(n-this.startY),i=Math.sqrt(o*o+r*r),s=this.holdFired&&i<=15;if(window.isScrolling||this.isDisconnected||this.hasMoved&&!s)return this.interactionStarted=!1,void a();clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener);const l=this.holdFired,c=Date.now(),d=this.config.double_tap_action||{action:"none"},u=this.config.tap_action||{action:"none"};let p=!1;if(l?this.sendActionEvent(this.element,this.config,"hold"):this.lastTap&&c-this.lastTap<200&&"none"!==d.action?(clearTimeout(this.tapTimeout),this.sendActionEvent(this.element,this.config,"double_tap"),p=!0):"none"!==u.action&&("none"!==d.action?(this.tapTimeout=setTimeout((()=>{this.isDisconnected||this.holdFired||this.hasMoved||this.sendActionEvent(this.element,this.config,"tap")}),200),p=!0):(this.sendActionEvent(this.element,this.config,"tap"),p=!0)),p||l){e.cancelable&&e.preventDefault();const t=e=>{const t=e.composedPath().find((e=>e.classList&&e.classList.contains("bubble-pop-up")));let n=!0;t&&"true"===t.dataset.closeOnClick&&(n=!1),n&&e.stopPropagation(),l&&e.preventDefault()};document.body.addEventListener("click",t,{capture:!0,once:!0}),setTimeout((()=>{document.body.removeEventListener("click",t,{capture:!0})}),350)}this.lastTap=c,this.interactionStarted=!1,a()}handleScroll(){this.hasMoved=!0,clearTimeout(this.holdTimeout),this.holdTimeout=null,document.removeEventListener("pointermove",this.pointerMoveListener),document.removeEventListener("touchmove",this.touchMoveListener),this.interactionStarted=!1}}function h(e,t,n){const o=t.tap_action||{action:"more-info"},r=t.double_tap_action||{action:"none"},i=t.hold_action||{action:"none"},a=t.entity||this.config?.entity,s=e=>e.service&&"entity"===e.target?.entity_id&&a?{...e,target:{...e.target,entity_id:a}}:e,l=s(o),c=s(r),d=s(i);let p;switch(n){case"tap":default:p=l;break;case"double_tap":p=c;break;case"hold":p=d}u(e,{entity:a,tap_action:l,double_tap_action:c,hold_action:d},n)}function m(e,t){e.addEventListener("pointerup",(e=>{e.cancelable&&e.preventDefault(),(0,o.jp)("selection")}))}function g(){for(const e of c)e.cleanup();c.clear()}},216:(e,t,n)=>{n.d(t,{I:()=>m,N:()=>h});const o=new WeakMap,r=16,i=2,a='<span class="bubble-scroll-separator"> | </span>',s=new Set;let l=0,c=null,d=null;function u(){l||(l=requestAnimationFrame(p))}function p(){l=0;const e=[...s];s.clear();const t=[];for(const n of e){const e=o.get(n);if(!e||!n.isConnected)continue;const r=n.clientWidth,a=e.animated&&e.span?.isConnected?e.span.scrollWidth/2:n.scrollWidth;t.push({el:n,state:e,content:a,needsScroll:a>r+i})}for(const{el:e,state:n,content:r,needsScroll:i}of t)if(n.animated){if(i)n.span&&(n.span.style.animationDuration=b(r));else if(e.removeAttribute("data-animated"),e.innerHTML=n.text,n.animated=!1,n.span=null,d)try{d.unobserve(e)}catch(e){}}else if(i){e.innerHTML=`<div class="scrolling-container"><span>${n.text}${a}${n.text}${a}</span></div>`,e.setAttribute("data-animated","true");const t=e.querySelector(".scrolling-container span");n.animated=!0,n.span=t,t&&(t.style.animationDuration=b(r)),(d||(d=new IntersectionObserver((e=>{for(const t of e){const e=o.get(t.target);e?.span&&(e.span.style.animationPlayState=t.isIntersecting?"running":"paused")}}),{threshold:.1})),d).observe(e)}}function b(e){return`${Math.max(1,e/r).toFixed(2)}s`}function h(e,t,n){const{scrolling_effect:r=!0}=e.config;if(!r){if((t.previousText!==n||o.has(t))&&function(e,t){e.innerHTML=t,e.previousText=t,Object.assign(e.style,{whiteSpace:"normal",display:"-webkit-box",WebkitLineClamp:"2",WebkitBoxOrient:"vertical",textOverflow:"ellipsis",overflow:"hidden"})}(t,n),c)try{c.unobserve(t)}catch(e){}if(d)try{d.unobserve(t)}catch(e){}return void o.delete(t)}if(t.previousText===n&&o.has(t))return;t.previousText=n;const i=o.get(t);if(i)return i.text=n,i.animated&&i.span?i.span.innerHTML=`${n}${a}${n}${a}`:(t.innerHTML=n,i.animated=!1,i.span=null),s.add(t),void u();"true"===t.getAttribute("data-animated")&&t.removeAttribute("data-animated"),o.set(t,{text:n,animated:!1,span:null}),t.innerHTML=n,t.style.cssText="",(c||(c=new ResizeObserver((e=>{for(const t of e){const e=t.target;if(e.isConnected)o.has(e)&&s.add(e);else{if(c.unobserve(e),d)try{d.unobserve(e)}catch(e){}o.delete(e)}}u()}))),c).observe(t),s.add(t),u()}function m(e){try{const t=e.querySelectorAll("*");for(const e of t){if(!o.has(e)&&void 0===e.previousText)continue;if(c)try{c.unobserve(e)}catch(e){}if(d)try{d.unobserve(e)}catch(e){}const t=o.get(e);t&&("true"===e.getAttribute("data-animated")&&(e.removeAttribute("data-animated"),e.innerHTML=t.text||e.textContent||""),o.delete(e)),delete e.previousText}}catch(e){}}},716:(e,t,n)=>{n.d(t,{$C:()=>B,$z:()=>ae,C$:()=>S,D$:()=>M,E2:()=>w,EA:()=>g,GM:()=>C,Gu:()=>E,HD:()=>D,IU:()=>ie,JK:()=>J,Nv:()=>f,PF:()=>N,Vw:()=>q,_0:()=>l,bE:()=>R,df:()=>V,f9:()=>$,j9:()=>F,jp:()=>a,ls:()=>j,mG:()=>L,m_:()=>I,md:()=>T,n:()=>P,nF:()=>G,qL:()=>_,qo:()=>re,r6:()=>O,rC:()=>i,rY:()=>x}),n(140);var o=n(653),r=n(388);const i=(e,t,n,o)=>{o=o||{},n=null==n?{}:n;const r=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return r.detail=n,e.dispatchEvent(r),r},a=e=>{i(window,"haptic",e)};function s(e){if(null==e)return"";const t="string"==typeof e||"number"==typeof e?String(e).trim():"";if(!t)return"";const n=t.match(/\d+/g);return n?n.join("."):""}function l(e,t){const n=e?.config?.version;return!(!n||!t)&&function(e,t){const n=s(e),o=s(t);if(!n||!o)return 0;const r=n.split(".").map(Number),i=o.split(".").map(Number),a=Math.max(r.length,i.length);for(let e=0;e<a;e++){const t=r[e]||0,n=i[e]||0;if(t>n)return 1;if(t<n)return-1}return 0}(n,t)>=0}const c=new Map;let d=null,u=null,p=0,b=!1;function h(){d=null,u=null,p++,b=!1}function m(){b||(requestAnimationFrame(h),b=!0)}function g(){return d||(d=getComputedStyle(document.documentElement),m()),d}function f(){return u||(u=getComputedStyle(document.body),m()),u}const y=new Map;let v=-1;function _(e){if(!e)return"";if(v!==p&&(y.clear(),v=p),y.has(e))return y.get(e);let t=e;if(!t.startsWith("var("))return y.set(e,t),t;const n=f();let o=0;for(;t&&t.startsWith("var(")&&o<10;){const e=t.match(/var\((--[^,]+),?\s*(.*)?\)/);if(!e)break;const[,r,i]=e;t=n.getPropertyValue(r).trim()||i&&i.trim()||"",o++}return y.set(e,t),t}function w(e){const t=e.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}function x(e){const t=e.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);return t?[parseInt(t[1],10),parseInt(t[2],10),parseInt(t[3],10)]:null}function k(e,t,n){return(.2126*e+.7152*t+.0722*n)/255}function C(e,t=.5){const n=_(e);if(!n)return!1;if(c.has(n))return c.get(n);let o=w(n)||x(n);if(!o)return c.set(n,!1),!1;const r=k(...o)>t;return c.set(n,r),r}function $(e,t){return e.map((e=>Math.min(255,Math.round(e*t))))}function A(e,t,n=15){return!(!e||!t||3!==e.length||3!==t.length)&&Math.abs(e[0]-t[0])+Math.abs(e[1]-t[1])+Math.abs(e[2]-t[2])<=n}function S(e,t=e.config.entity,n=!0,o=null,i=null){const a=e.config.use_accent_color;!n&&t?.startsWith("light.")&&(e.config.use_accent_color=!0);const s=(0,r.VA)(e,t);!n&&t?.startsWith("light.")&&(e.config.use_accent_color=a);try{let r=_(s);if(r&&r.startsWith("var(")){const e=r.match(/var\((--[^,]+),?\s*(.*)?\)/);if(e){const[,t]=e,n=g().getPropertyValue(t).trim();n&&(r=n)}}const a=w(r)||x(r);if(!a)return s;const l=n&&t?.startsWith("light.")&&!e.config.use_accent_color;let c=!1;if(i){let e=_(i);if(e&&e.startsWith("var(")){const t=e.match(/var\((--[^,]+),?\s*(.*)?\)/);if(t){const[,n]=t,o=g().getPropertyValue(n).trim();o&&(e=o)}}const t=w(e)||x(e);t&&A(a,t)&&(c=!0)}if(!l&&o){let e=_(o);if(e&&e.startsWith("var(")){const t=e.match(/var\((--[^,]+),?\s*(.*)?\)/);if(t){const[,n]=t,o=g().getPropertyValue(n).trim();o&&(e=o)}}const t=w(e)||x(e);t&&A(a,t)&&(c=!0)}if(!l&&!c)return s;const d=_("var(--primary-text-color, #ffffff)"),u=w(d)||x(d),p=!u||k(...u)>.5,b=$(a,l?p?.84:1.16:p?.92:1.08);return`rgb(${b[0]}, ${b[1]}, ${b[2]})`}catch(e){return s}}function L(e){const t=e.config.name,n=M(e,"friendly_name");return e.name||t||n||""}function E(e,t=e.config.entity){return e._hass.states[t]?.state??""}function M(e,t,n=e.config.entity){if(!t)return"";try{const o=e?._hass?.states?.[n]?.attributes;if(!o)return"";if(t.includes(" ")){const e=o[t];return 0===e?"0":e??""}const r=function(e,t){if(!e||!t||"string"!=typeof t)return;const n=/[^.\[\]]+|\[(?:'([^']+)'|"([^"]+)"|(\d+))\]/g;let o,r=e;for(;(o=n.exec(t))&&null!=r;){const[,e,t,n]=o,i=void 0!==n?Number(n):void 0!==e?e:void 0!==t?t:o[0],a=void 0!==e||void 0!==t||void 0!==n?i:o[0];r=r?.[a]}return r}(o,t);return 0===r?"0":r??""}catch(e){return console.warn(`Error accessing attribute '${t}' for entity '${n}':`,e),""}}function T(e,t,n){return void 0===n&&(n=e?.config?.entity),n&&"string"==typeof n&&n.startsWith(t+".")||!1}function B(e,t=e.config.entity){const n=E(e,t).toLowerCase(),o=M(e,"unit_of_measurement",t)?.includes("°"),r=Number(n);return!!(["on","open","opening","closing","cleaning","true","home","playing","locked","unlocked","occupied","available","running","active","connected","online","mowing","edgecut","starting","heat","cool","dry","heat_cool","fan_only","auto","alarm","error"].includes(n)||r||o)}function I(e,t=e.config.entity){const n=E(e,t).toLowerCase();return["unlocked","error"].includes(n)}function P(e,t=""){const n=document.createElement(e);return""!==t&&t.split(" ").forEach((e=>{n.classList.add(e)})),n}function O(e,t){if(!e)return"";const n=new Date(e),o=new Date;let r,i,a=Math.floor((o-n)/1e3);return isNaN(a)?"":(a<60?(r="second",i=a+1):a<3600?(r="minute",i=Math.round(a/60)):a<86400?(r="hour",i=Math.round(a/3600)):(r="day",i=Math.round(a/86400)),new Intl.RelativeTimeFormat(t,{numeric:"auto"}).format(-i,r))}function q(e){return e&&"string"==typeof e&&e.startsWith("timer.")}function j(e){if(!e||!e.attributes)return;if(!e.attributes.remaining)return;let t=function(e){if(!e)return 0;if("number"==typeof e)return e;if("string"==typeof e){let t=0;const n=e.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);if(n)return t+=3600*parseInt(n[1]||0,10),t+=60*parseInt(n[2]||0,10),t+=parseInt(n[3]||0,10),t;const o=e.split(":").map((e=>parseInt(e,10)));if(3===o.length)return 3600*o[0]+60*o[1]+o[2];if(2===o.length)return 60*o[0]+o[1]}return 0}(e.attributes.remaining);if("active"===e.state&&e.attributes.finishes_at){const n=(new Date).getTime(),o=new Date(e.attributes.finishes_at).getTime();t=Math.max((o-n)/1e3,0)}return t}function N(e,t,n){if(!t)return null;if("idle"===t.state||0===n)return e.formatEntityState(t);let o=function(e){if(null==e||isNaN(e))return null;const t=Math.floor(e);if(t<0)return"0";const n=Math.floor(t/3600),o=Math.floor(t%3600/60),r=t%60;return n>0?`${n}:${String(o).padStart(2,"0")}:${String(r).padStart(2,"0")}`:o>0?`${o}:${String(r).padStart(2,"0")}`:`0:${String(r).padStart(2,"0")}`}(n||0)||"0";return"paused"===t.state&&(o=`${o} (${e.formatEntityState(t)})`),o}const U=new WeakMap,z=new WeakMap;function D(e,t,n){R(e);const o=e._hass?.states?.[t];if(!o||"active"!==o.state)return;const r=setInterval((()=>{if(!e._hass?.states?.[t])return void R(e);const o=e._hass.states[t];o&&"active"===o.state?n&&n():R(e)}),1e3);U.set(e,r)}function R(e){const t=U.get(e);t&&(clearInterval(t),U.delete(e))}function V(e,t,n,o){F(e);const r=t._hass?.states?.[n];if(!r||"active"!==r.state)return;const i=setInterval((()=>{if(!e.isConnected)return void F(e);if(!t._hass?.states?.[n])return void F(e);const r=t._hass.states[n];r&&"active"===r.state?o&&o():F(e)}),1e3);z.set(e,i)}function F(e){const t=z.get(e);t&&(clearInterval(t),z.delete(e))}let H=null,W=null,Y=null,K=null,X=!1;function J(e,t=null,n=null){const r=t||e.content;if(!r)return;let i;if(n)i=e.config.card_layout??n;else{X||(H=document.querySelector("body > home-assistant"),W=H?.shadowRoot?.querySelector("home-assistant-main"),Y=W?.shadowRoot?.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace"),K=Y?.shadowRoot?.querySelector("hui-root"),H&&W&&Y&&K?X=!0:(H=null,W=null,Y=null,K=null,X=!1)),K&&!K.isConnected&&(X=!1,H=null,W=null,Y=null,K=null);let t="normal";if(K?.shadowRoot){const e=K.shadowRoot.querySelector("#view > hui-view > hui-masonry-view");window.isSectionView=!e,t=window.isSectionView?"large":"normal"}i=e.config.card_layout??t;try{const t=e?.config?.sub_button;if(!!t&&!Array.isArray(t)&&(Array.isArray(t.bottom)?t.bottom:[]).some((e=>!!e))){const t=Boolean(window.isSectionView),n=e?.config?.card_layout,o=Object.prototype.hasOwnProperty.call(e?.config,"card_layout"),r=null==n||"normal"===n;if(t&&o&&"normal"===n)try{delete e.config.card_layout}catch(t){const n={...e.config};delete n.card_layout,e.config=n}else!t&&r&&(i="large",e.config.card_layout="large")}}catch(e){}}if(e.previousLayout===i)return;e.previousLayout=i;const a="large"===i||"large-2-rows"===i||"large-sub-buttons-grid"===i,s="large-2-rows"===i,l="large-sub-buttons-grid"===i;r.classList.toggle("large",a),r.classList.toggle("rows-2",s),r.classList.toggle("sub-buttons-grid",l),(()=>{const t=e.elements?.buttonsContainer,n=e.elements?.cardWrapper,o=e.elements?.bottomSubButtonContainer;if(!t||!n)return;const r=e.config?.main_buttons_position||"default",i=e.config?.main_buttons_alignment||"end",a=e.config?.main_buttons_full_width??"bottom"===r;if(t.classList.remove("bottom-fixed","full-width","align-start","align-center","align-end","align-space-between"),n.classList.remove("has-bottom-buttons"),o?.classList.remove("with-main-buttons-bottom"),"bottom"!==r)return;const s={start:"align-start",center:"align-center",end:"align-end","space-between":"align-space-between"}[i]||"align-end";t.classList.add("bottom-fixed",s),a&&t.classList.add("full-width"),n.classList.add("has-bottom-buttons"),!t.classList.contains("hidden")&&"none"!==t.style.display&&"none"!==getComputedStyle(t).display&&o?.classList.add("with-main-buttons-bottom")})(),(0,o.iJ)(e),r===e.content&&e.elements?.mainContainer&&(e.config.rows||e.config.grid_options?.rows)?"auto"===e.config.rows||"auto"===e.config.grid_options?.rows||e.elements.mainContainer.style.setProperty("--row-size",e.config.rows||e.config.grid_options?.rows):"separator"===e.config.card_type&&e.elements.mainContainer.style.setProperty("--row-size",.8)}function G(e,t=300){let n,o,r=new Date(0);return(...i)=>{o=i;const a=Date.now()-r;a>=t?(r=Date.now(),e(...o)):n||(n=setTimeout((()=>{n=void 0,r=Date.now(),e(...o)}),t-a))}}let Q=0,Z=0;const ee="bubble-html-scroll-locked",te="bubble-body-scroll-locked",ne="bubbleScrollLockInline",oe=["position","width","top","left","right"];function re(e){!function(){const e="bubble-card-no-scroll-styles",t=`\n        body.${te} {\n            overflow: hidden !important;\n            overscroll-behavior: none;\n        }\n    `;let n=document.getElementById(e);n||(n=document.createElement("style"),n.id=e,document.head.appendChild(n)),n.textContent!==t&&(n.textContent=t)}();const t=document.documentElement,n=document.body;if(n){if(e){if(n.classList.contains(te))return;return Q=void 0!==window.scrollY?window.scrollY:(t||document.body.parentNode||document.body).scrollTop,Z=void 0!==window.scrollX?window.scrollX:(t||document.body.parentNode||document.body).scrollLeft,function(e){const t={};oe.forEach((n=>{const o=e.style[n];o&&(t[n]=o)})),e.dataset[ne]=JSON.stringify(t)}(n),n.classList.add(te),n.style.position="fixed",n.style.width="100%",n.style.top=`-${Q}px`,n.style.left="0",void(n.style.right="0")}t&&t.classList.remove(ee),n.classList.contains(te)&&(n.classList.remove(te),function(e){const t=e.dataset[ne];if(delete e.dataset[ne],t)try{const n=JSON.parse(t);oe.forEach((t=>{n[t]?e.style[t]=n[t]:e.style.removeProperty(t)}))}catch(t){oe.forEach((t=>e.style.removeProperty(t)))}else oe.forEach((t=>e.style.removeProperty(t)))}(n),window.scrollTo({top:Q,left:Z,behavior:"auto"}))}}function ie(e,t=0,n="",o="en-US"){const r=Number(e);if(Number.isNaN(r))return"";const i=r.toLocaleString(o,{minimumFractionDigits:t,maximumFractionDigits:t,useGrouping:!1});return n?`${i} ${n}`:i}function ae(e){return"°C"===e?.config?.unit_system?.temperature?"°C":"°F"}},315:(e,t,n)=>{n.d(t,{XH:()=>s,db:()=>c,eC:()=>a});var o=n(748);function r(e,t){try{if(e.states[t])return e.states[t]?.state}catch{}}function i(e,t){const n=e.entity_id||e.entity,o=n&&t.states[n]?t.states[n]:null,i=o?e.attribute&&o.attributes?o.attributes[e.attribute]:o.state:"unavailable";let s=e.state??e.state_not;if(Array.isArray(s)){const e=s.map((e=>r(t,e))).filter((e=>void 0!==e));s=[...s,...e]}else if("string"==typeof s){const e=r(t,s);s=[s],e&&s.push(e)}return null!=e.state?a(s).includes(i):null!=e.state_not&&!a(s).includes(i)}function a(e){return void 0===e||Array.isArray(e)?e:[e]}function s(e,t){return e.every((e=>{if(e&&!1===e.enabled)return!0;if("condition"in e)switch(e.condition){case"screen":return!!(n=e).media_query&&matchMedia(n.media_query).matches;case"user":return function(e,t){return!(!e.users||!t.user?.id)&&e.users.includes(t.user.id)}(e,t);case"numeric_state":return function(e,t){const n=(i=e.entity_id||e.entity,Array.isArray(i)?i.filter(Boolean):i?[i]:[]);var i;if(!n.length)return!1;let a=e.above,s=e.below;"string"==typeof a&&(a=r(t,a)??a),"string"==typeof s&&(s=r(t,s)??s);const l=Number(a),c=Number(s);return n.some((n=>{const r=t.states[n];if(!r)return!1;let i=e.attribute&&r.attributes?r.attributes[e.attribute]:r.state;if(e.value_template){const a=(0,o.sl)(t,e.value_template,{value:i,entity:r,entity_id:n});void 0!==a&&(i=a)}const a=Number(i);return!isNaN(a)&&(null==e.above||isNaN(l)||l<a)&&(null==e.below||isNaN(c)||c>a)}))}(e,t);case"template":return function(e,t){if(!e.value_template)return!1;const n=(0,o.sl)(t,e.value_template);return!0===n||"true"===n||1===n||"1"===n||"True"===n}(e,t);case"and":return function(e,t){return!e.conditions||s(e.conditions,t)}(e,t);case"or":return function(e,t){return!e.conditions||e.conditions.some((e=>s([e],t)))}(e,t);case"not":return function(e,t){return!e.conditions||!e.conditions.some((e=>s([e],t)))}(e,t);default:return i(e,t)}var n;return i(e,t)}))}function l(e){return null!=(e.entity_id||e.entity)&&(null!=e.state||null!=e.state_not)}function c(e){return e.every((e=>{if(e&&!1===e.enabled)return!0;if("condition"in e)switch(e.condition){case"screen":return null!=e.media_query;case"user":return null!=e.users;case"numeric_state":return function(e){const t=e.entity_id||e.entity;return(Array.isArray(t)?t.length>0:null!=t)&&(null!=e.above||null!=e.below)}(e);case"template":return function(e){return null!=e.value_template}(e);case"and":case"or":case"not":return function(e){return null!=e.conditions}(e);default:return l(e)}return l(e)}))}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};let o="v3.1.4";var r=n(642),i=n(888),a=n(140),s=n(716),l=n(216),c=n(957),d=n(388),u=n(772),p=n(315),b=n(748),h=n(134);const m=new Map,g=new Map,f=/\/\*[\s\S]*?\*\//g,y=/\s+/g,v=/\s*([{};,])\s*/g,_=/([a-zA-Z0-9_-]+)\s*:\s*;/g,w=/undefined(?=(?:(?:[^"]*"){2})*[^"]*$)/g,x=/[^{};]+\s*{\s*}/g,k=/,(?=\s*[}\n])/g,C=/(@[^{}]*?\{(?:[^{}]*?\{[^{}]*?\})*?[^{}]*?\}|[^{}]*?\{[^{}]*?\})/g,$=/,\s*(\/\*.*\*\/)?$/,A=/^[.:#&\[*]/,S=/^[>+~]/,L=/^[a-zA-Z][a-zA-Z0-9-_]*$/,E=/::?[a-zA-Z_-][a-zA-Z0-9_-]*/,M=/^[()\[\]]+,?$/,T=async(e,t=e.card)=>{const n="STYLE"===t.tagName,o=n?null:t,r="pop-up"===e.cardType&&t===e.popUp,a=r&&(e.elements?.popUpContainer||("function"==typeof t.querySelector?t.querySelector(".bubble-pop-up-container"):null))||o,s=r?"visibility":"display",l=e.config.styles;if(void 0===e.cardLoaded&&!n&&(e.lastEvaluatedStyles="",e.initialLoad=!0,!e._moduleChangeListenerAdded)){const t=()=>{e.lastEvaluatedStyles="",e.stylesYAML=null,i.Ki.forEach(((t,n)=>{e._processedSchemas?.[n]&&delete e._processedSchemas[n]}));const t="pop-up"===e.cardType&&e.popUp?e.popUp:e.card;T(e,t)},n=()=>{e.lastEvaluatedStyles="",e._templateResultVersion=(e._templateResultVersion||0)+1,e._bb_cache&&(e._bb_cache.lastStateSignature="");const t="pop-up"===e.cardType&&e.popUp?e.popUp:e.card;T(e,t)};window.addEventListener("bubble-card-modules-changed",t),window.addEventListener("bubble-card-module-updated",t),(0,b.eX)(n),document.addEventListener("yaml-modules-updated",t),e._moduleChangeListenerAdded=!0,e._moduleChangeHandler=t,e._templateChangeHandler=n}e.initialLoad&&a?.style&&!a.dataset.bubbleStyleHideMode&&("visibility"===s?a.style.visibility="hidden":a.style.display="none",a.dataset.bubbleStyleHideMode=s);const c=function(e,t){if("STYLE"===t.tagName)return t;if(!e.styleElement||e.styleElement.parentElement!==t){const n=document.createElement("style");n.id="bubble-styles",t.appendChild(n),e.styleElement=n}return e.styleElement}(e,t);try{let t={};i.Ki.size>0?i.Ki.forEach(((e,n)=>{t[n]=e})):t=await e.stylesYAML||{};let o=[];const r=new Set,s=[],d=new Set;Array.isArray(e.config.modules)?e.config.modules.forEach((e=>{"string"==typeof e&&e.startsWith("!")?d.add(e.substring(1)):"string"==typeof e&&s.push(e)})):e.config.modules&&"string"==typeof e.config.modules&&(e.config.modules.startsWith("!")?d.add(e.config.modules.substring(1)):s.push(e.config.modules)),i.Ki.has("default")&&!d.has("default")&&r.add("default");const u=e=>{if(!e||!e.states||!e.states["sensor.bubble_card_modules"])return;const t=e.states["sensor.bubble_card_modules"].attributes.modules;if(t)for(const e in t)!0===t[e].is_global&&i.Ki.has(e)&&!d.has(e)&&r.add(e)};(()=>{try{i.Ki.forEach(((e,t)=>{e&&"object"==typeof e&&!0===e.is_global&&!d.has(t)&&r.add(t)}))}catch(e){}})(),h.isBCTAvailableSync&&(0,h.isBCTAvailableSync)()||!e._hass||u(e._hass),s.forEach((e=>{i.Ki.has(e)&&!d.has(e)&&r.add(e)})),o=Array.from(r);let p="";o.length>0&&(p=o.map((n=>{try{let o=t[n]??"";if("object"==typeof o&&""===o.code||""===o)return"{}";const r="object"==typeof o&&o.code?o.code:o;return B(e,r,{type:"module",id:n})}catch(e){return console.error(`Bubble Card - Error processing module "${n}" before evaluation:`,e),"{}"}})).join("\n"));let b="";try{b=B(e,l,{type:"custom_styles"})}catch(e){console.error("Bubble Card - Error processing custom styles before evaluation:",e)}const m=`${p}\n${b}`.trim();let g=!0;n?m===c.textContent&&(g=!1):m===e.lastEvaluatedStyles?g=!1:e.lastEvaluatedStyles=m,g&&(c.textContent=m),e.initialLoad&&a?.style&&("visibility"===a.dataset.bubbleStyleHideMode?a.style.visibility="":a.style.display="",delete a.dataset.bubbleStyleHideMode,n||(e.initialLoad=!1,e.cardLoaded=!0))}catch(t){console.error("Error applying styles:",t),e.initialLoad&&o?.style&&(o.style.display="")}};function B(e,t="",n={type:"unknown"}){if(!t)return"";if(e.editor&&e.templateEvaluationBlocked)return"";const o=["innerText","textContent","innerHTML"];["state","name"].forEach((n=>{o.map((e=>`card.querySelector('.bubble-${n}').${e} =`)).some((e=>t.includes(e)))&&!e.elements[n].templateDetected&&(e.elements[n].templateDetected=!0)}));try{let n=m.get(t);if(!n&&(n=Function("hass","entity","state","icon","subButtonState","subButtonIcon","getWeatherIcon","card","name","checkConditionsMet",`return \`${t}\`;`),m.set(t,n),m.size>500)){const e=m.keys().next().value;m.delete(e)}const o="pop-up"===e.config.card_type?e.popUp:e.card,r=n.call(e,e._hass,e.config.entity,(0,s.Gu)(e),e.elements.icon,(0,u.AQ)(e),e.subButtonIcon,d.w1,o,o.name,p.XH);e._localStyleCache||(e._localStyleCache=new Map);const i=e._localStyleCache.get(t);if(i&&i.raw===r)return i.cleaned;const a=function(e){if(!e||"string"!=typeof e)return"";if(g.has(e)){const t=g.get(e);return g.delete(e),g.set(e,t),t}let t=e;if(t.includes("/*")&&(t=t.replace(f,"")),t.includes("\n")){let e=0;const n=[],o=t.split("\n");for(let t=0;t<o.length;t++){const r=o[t],i=r.trim();if(!i)continue;let a=0,s=0;for(let e=0;e<r.length;e++)"{"===r[e]?a++:"}"===r[e]&&s++;let l=e>0;l||(l=a>0||s>0||i.startsWith("@")||i.startsWith("--")||$.test(i)||A.test(i)||S.test(i)||L.test(i)||E.test(i)||M.test(i)),l&&n.push(r),e+=a-s,e<0&&(e=0)}t=n.join("\n")}t=t.replace(y," "),t=t.replace(v,"$1"),(t.includes(":;")||t.includes(": "))&&(t=t.replace(_,"")),t.includes("undefined")&&(t=t.replace(w,"")),t.includes("{")&&(t=t.replace(x,"")),t.includes(",")&&(t=t.replace(k,""));const n=t.match(C);if(t=n?n.join("\n"):"",g.set(e,t),g.size>300){const e=g.keys().next().value;g.delete(e)}return t}(r);return e._localStyleCache.set(t,{raw:r,cleaned:a}),a}catch(t){let o="Unknown source";"module"===n.type&&n.id?o=`Module ('${n.id}')`:"custom_styles"===n.type?o="Card Configuration (styles section)":"unknown"===n.type&&(o="Direct call or unspecified source");const r=e.config?.card_type||"N/A",i=e.config?.entity||"N/A",a=`Bubble Card - Template Error:\n  Card Type: ${r}\n  Entity: ${i}\n  Source: ${o}\n  Error: ${t.message}`;if(e.editor){const o=t.message;e.lastEmittedEditorError=o;const a={cardType:r,entityId:i,sourceType:n.type,moduleId:n.id};requestAnimationFrame((()=>function(e,t){window.dispatchEvent(new CustomEvent("bubble-card-error",{detail:{message:e,context:t}}))}(o,a))),e.templateEvaluationBlocked=!0,e.templateErrorClearTimeout&&clearTimeout(e.templateErrorClearTimeout),e.templateErrorClearTimeout=setTimeout((()=>{e.templateEvaluationBlocked=!1;try{"function"==typeof e.handleCustomStyles&&(e.lastEvaluatedStyles="",e.stylesYAML=null,requestAnimationFrame((()=>e.handleCustomStyles(e,e.card))))}catch(e){}}),900)}return console.error(a),""}}let I,P,O,q;const j=window.matchMedia("(prefers-color-scheme: dark)");function N(){const e=(0,s.Nv)();q=e.getPropertyValue("--ha-card-background")||e.getPropertyValue("--card-background-color"),document.body.style.setProperty("--bubble-default-backdrop-background-color",(0,a.Bz)(q,.8,.6))}function U(e){if(I)return I.activeContext=e,I;const t=(0,s.n)("div","bubble-backdrop-host"),n=t.attachShadow({mode:"open"}),o=(0,s.n)("div","bubble-backdrop backdrop is-hidden");n.appendChild(o);const r=(0,s.n)("style");r.textContent=".bubble-backdrop {\r\n  position: fixed;\r\n  background-color: var(--bubble-backdrop-background-color, var(--bubble-default-backdrop-background-color));\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  z-index: 4;\r\n  opacity: 0;\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n.bubble-backdrop.is-visible {\r\n  opacity: 1;\r\n}\r\n\r\n.bubble-backdrop.is-hidden {\r\n  opacity: 0;\r\n  pointer-events: none;\r\n}\r\n\r\n.bubble-backdrop.has-blur {\r\n  backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\r\n  -webkit-backdrop-filter: var(--bubble-backdrop-filter, var(--custom-backdrop-filter));\r\n}\r\n",n.appendChild(r);const i=(0,s.n)("style");function a(e){if(!e?.config)return;e.config.hide_backdrop?(t.style.display="none",t.style.pointerEvents="none"):(t.style.display="",t.style.pointerEvents="");const n=e.config.backdrop_blur??0,r=parseFloat(n)>0;o.classList.toggle("has-blur",r),r?o.style.setProperty("--custom-backdrop-filter",`blur(${n}px)`):o.style.removeProperty("--custom-backdrop-filter")}i.dataset.bubbleTarget="backdrop",n.appendChild(i),document.body.appendChild(t);let l=!1,c=null;function d(t,n=!0){if(c=t||c||I?.activeContext||e,l)return;l=!0;const o=()=>{l=!1;const t=c||I?.activeContext||e;c=null;try{T(t,i)}catch(e){}};n?(e=>{try{if("function"==typeof window.requestIdleCallback)return void window.requestIdleCallback(e,{timeout:500})}catch(e){}setTimeout(e,350)})(o):requestAnimationFrame(o)}return a(e),d(e,!0),I={hideBackdrop:function(){o.classList.contains("is-hidden")||o.classList.add("is-hidden"),o.classList.remove("is-visible")},showBackdrop:function(t){const n=t||I?.activeContext||e;a(n),d(n,!1),requestAnimationFrame((()=>{o.classList.contains("is-visible")||o.classList.add("is-visible"),o.classList.remove("is-hidden")}))},backdropElement:o,backdropCustomStyle:i,updateBackdropStyles:d,applyBackdropConfig:a,activeContext:e},I}j.addEventListener("change",N),N();const z={hashRecentlyAdded:!1,scrollY:0,currentHash:null,hashChangeProtection:!1,isAnimating:!1,animationDuration:300,activePopups:new Set,entityTriggeredPopup:null};if(!window.__bubbleLocationDeduperAdded)try{let e=null,t=0,n=!1,o="",r=window.location.hash||"";window.addEventListener("location-changed",(()=>{const i=window.location.href,a=!!window.location.hash,s=i.split("#")[0];if(a)return e=s,t=Date.now(),n=!1,o=r||"",void(r=window.location.hash);if(n)return n=!1,e=null,o="",void(r=window.location.hash||"");if(e&&s===e&&Date.now()-t<1500&&!o)try{n=!0,history.back()}catch(e){}e=null,o="",r=window.location.hash||""})),window.__bubbleLocationDeduperAdded=!0}catch(e){}const D=new Set(["HA-DIALOG","HA-MORE-INFO-DIALOG","HA-DIALOG-DATE-PICKER"]),R={recentlyClosedTimestamp:0,protectionWindow:500};function V(e=!1){return!(z.hashRecentlyAdded||!location.hash||!e&&z.hashChangeProtection||(setTimeout((()=>{if(!e&&z.hashChangeProtection)return;const t=window.location.href.split("#")[0];history.replaceState(null,"",t),window.dispatchEvent(new Event("location-changed"))}),50),0))}function F(e){z.hashChangeProtection=!0;const t=e.startsWith("#")?window.location.href.split("#")[0]+e:e;history.pushState(null,"",t),window.dispatchEvent(new Event("location-changed")),setTimeout((()=>{z.hashChangeProtection=!1}),200)}function H(e,t){e.config.background_update?e.popUp.style.display="none":e.editor||(e.hideContentTimeout=setTimeout((()=>{const{sectionRow:t,sectionRowContainer:n}=e;"hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!0,t.style.display="none",n?.classList.contains("card")&&(n.style.display="none",n.style.position=""))}),t))}function W(e,t){const{showBackdrop:n,hideBackdrop:o}=U(e);t?n(e):o()}function Y(e,t){e.config.background_update||(t?e.verticalStack.contains(e.popUp)||e.verticalStack.appendChild(e.popUp):t||e.config.background_update||e.verticalStack.contains(e.popUp)&&e.verticalStack.removeChild(e.popUp))}function K(e,t){z.isAnimating=!0,e.classList.add(t?"is-opening":"is-closing"),requestAnimationFrame((()=>{e.classList.toggle("is-popup-opened",t),e.classList.toggle("is-popup-closed",!t),setTimeout((()=>{z.isAnimating=!1,e.classList.remove("is-opening","is-closing")}),z.animationDuration)}))}function X(e,t){if(e.boundClickOutside||(e.boundClickOutside=t=>function(e,t){(t.config.close_by_clicking_outside??1)&&t.popUp.classList.contains("is-popup-opened")&&(Date.now()-R.recentlyClosedTimestamp<R.protectionWindow||e.composedPath().find((e=>!(!e.classList&&!e.nodeName)&&(e.classList?.contains("bubble-pop-up")||D.has(e.nodeName))))||V(!0))}(t,e)),e.resetCloseTimeout||(e.resetCloseTimeout=()=>function(e){e.config.auto_close&&e.closeTimeout&&(clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout(V,e.config.auto_close))}(e)),!e.touchHandlersInitialized){const{handleTouchStart:t,handleTouchMove:n,handleTouchEnd:o}=function(e){if(!e.handleTouchStart){let t=0,n=0,o=!1;e.handleTouchStart=e=>{t=e.touches[0].clientY,n=t,o=!1},e.handleTouchMove=r=>{if(1!==r.touches.length)return;n=r.touches[0].clientY;const i=n-t;Math.abs(i)>10&&(o=!0,i>0&&(e.popUp.style.transform=`translateY(${i}px)`,r.preventDefault()))},e.handleTouchEnd=r=>{o&&(n-t>100?V(!0):e.popUp.style.transform="",o=!1)}}return{handleTouchStart:e.handleTouchStart,handleTouchMove:e.handleTouchMove,handleTouchEnd:e.handleTouchEnd}}(e);e.handleTouchStart=t,e.handleTouchMove=n,e.handleTouchEnd=o,e.touchHandlersInitialized=!0}t&&!e.editor?(e.listenersAdded||(e.config.auto_close&&(e.popUp.addEventListener("touchstart",e.resetCloseTimeout,{passive:!0}),e.popUp.addEventListener("click",e.resetCloseTimeout,{passive:!0})),e.popUp&&(e.handleTouchStart&&e.popUp.addEventListener("touchstart",e.handleTouchStart,{passive:!0}),e.handleTouchMove&&e.popUp.addEventListener("touchmove",e.handleTouchMove,{passive:!1}),e.handleTouchEnd&&e.popUp.addEventListener("touchend",e.handleTouchEnd,{passive:!0}),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.addEventListener("touchmove",e.handleHeaderTouchMove,{passive:!0}),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.addEventListener("touchend",e.handleHeaderTouchEnd,{passive:!0}),e.closeOnEscape&&window.addEventListener("keydown",e.closeOnEscape,{passive:!0}),e.config.close_on_click?(e.popUp.addEventListener("click",V,{passive:!0}),e.popUp.dataset.closeOnClick="true"):delete e.popUp.dataset.closeOnClick),e.listenersAdded=!0),e.clickOutsideListenerAdded||(window.addEventListener("click",e.boundClickOutside,{passive:!0}),e.clickOutsideListenerAdded=!0)):(e.listenersAdded&&((0,s.qo)(!1),e.config.auto_close&&(e.popUp.removeEventListener("touchstart",e.resetCloseTimeout),e.popUp.removeEventListener("click",e.resetCloseTimeout)),e.popUp&&(e.handleTouchStart&&e.popUp.removeEventListener("touchstart",e.handleTouchStart),e.handleTouchMove&&e.popUp.removeEventListener("touchmove",e.handleTouchMove),e.handleTouchEnd&&e.popUp.removeEventListener("touchend",e.handleTouchEnd),e.handleHeaderTouchMove&&e.elements?.header&&e.elements.header.removeEventListener("touchmove",e.handleHeaderTouchMove),e.handleHeaderTouchEnd&&e.elements?.header&&e.elements.header.removeEventListener("touchend",e.handleHeaderTouchEnd),e.closeOnEscape&&window.removeEventListener("keydown",e.closeOnEscape),e.config.close_on_click&&(e.popUp.removeEventListener("click",V),delete e.popUp.dataset.closeOnClick)),e.listenersAdded=!1),e.clickOutsideListenerAdded&&(window.removeEventListener("click",e.boundClickOutside),e.clickOutsideListenerAdded=!1))}function J(e){["hideContentTimeout","removeDomTimeout","closeTimeout"].forEach((t=>{e[t]&&(clearTimeout(e[t]),e[t]=null)}))}function G(e,t=!1){(e.popUp.classList.contains("is-popup-opened")||t)&&(J(e),z.activePopups.delete(e),z.entityTriggeredPopup===e&&(z.entityTriggeredPopup=null),e.popUp.style.willChange="transform",K(e.popUp,!1),W(e,!1),e.removeDomTimeout=setTimeout((()=>{e.popUp.style.willChange="",Y(e,!1),H(e,0),void 0!==z.scrollY&&window.scrollTo(0,z.scrollY)}),z.animationDuration),X(e,!1),(0,s.qo)(!1),e.config.close_action&&(0,r.VR)(e,e.config,"close_action"))}window.__bubbleDialogListenerAdded||(window.addEventListener("dialog-closed",(()=>{R.recentlyClosedTimestamp=Date.now()}),{capture:!0}),window.addEventListener("iron-overlay-closed",(()=>{R.recentlyClosedTimestamp=Date.now()}),{capture:!0}),window.__bubbleDialogListenerAdded=!0);const Q=new Map;let Z=!1,ee=location.hash;function te(e){const t=e.config.hash;if(t){if(e._registeredHash&&e._registeredHash!==t){const t=Q.get(e._registeredHash);t?.deref()===e&&Q.delete(e._registeredHash)}e._registeredHash=t,Q.set(t,new WeakRef(e)),function(){if(Z)return;Z=!0;const e=()=>{const e=location.hash,t=e!==ee;ee=e;const n=new Set(z.activePopups);for(const t of n)t.config.hash&&t.config.hash!==e&&t.popUp.classList.contains("is-popup-opened")&&G(t);const o=Q.get(e),i=o?.deref();if(i){const n=i.popUp.classList.contains("is-popup-opened"),o=Date.now()-R.recentlyClosedTimestamp<R.protectionWindow;if(n&&!t&&!z.entityTriggeredPopup&&!o)return void V(!0);if(z.entityTriggeredPopup)return;z.hashRecentlyAdded=!0,z.currentHash=e,z.hashChangeProtection=!0,function(e){const t=new Set(z.activePopups);for(const n of t)n!==e&&G(n,!0)}(i),setTimeout((()=>{z.hashRecentlyAdded=!1,setTimeout((()=>{z.hashChangeProtection=!1}),100)}),100),function(e){if(e.popUp.classList.contains("is-popup-opened"))return;if(z.activePopups.size>0&&z.entityTriggeredPopup)return;J(e),z.scrollY=window.scrollY;const{popUp:t}=e;z.activePopups.add(e),t.style.willChange="transform",requestAnimationFrame((()=>{z.activePopups.has(e)&&(function(e){if(e.config.background_update)return void(e.popUp.style.display="");const{sectionRow:t,sectionRowContainer:n,popUp:o}=e;o.style.transform="",o.style.visibility="","hui-card"===t?.tagName.toLowerCase()&&(t.hidden=!1,t.style.display="",n?.classList.contains("card")&&(n.style.display="",n.style.position="absolute"))}(e),window.__bubblePopupOpening=!0,e.verticalStack.contains(t)||Y(e,!0),window.__bubblePopupOpening=!1,K(t,!0),W(e,!0),X(e,!0),setTimeout((()=>{t.style.willChange="",t.classList.contains("is-popup-opened")&&z.activePopups.has(e)&&requestAnimationFrame((()=>{z.activePopups.has(e)&&((0,s.qo)(!0),e.config.auto_close>0&&(e.closeTimeout&&clearTimeout(e.closeTimeout),e.closeTimeout=setTimeout((()=>{!z.activePopups.has(e)||e.config.hash!==location.hash&&e.config.hash?z.activePopups.has(e)&&G(e):V()}),e.config.auto_close)),e.config.open_action&&(0,r.VR)(e.popUp,e.config,"open_action"))}))}),z.animationDuration))}))}(i)}else o&&Q.delete(e),requestAnimationFrame((()=>{for(const t of z.activePopups)t.popUp.classList.contains("is-popup-opened")&&t.config.hash&&t.config.hash!==e&&G(t)}))};window.addEventListener("location-changed",e),window.addEventListener("popstate",e)}()}}class ne extends c.WF{static properties={hass:{attribute:!1},selector:{attribute:!1},value:{attribute:!1},label:{},helper:{},disabled:{type:Boolean},required:{type:Boolean},localizeValue:{attribute:!1}};constructor(){super(),this.disabled=!1,this.required=!1}_generateSchema(e,t){if(!e)return[];const n=Array.isArray(e)?e.map(((e,t)=>[e.name||t,e])):Object.entries(e);let o=null;for(const[e,t]of n)if(t.selector&&t.selector.entity){o=e;break}return n.map((([e,t])=>{const n={name:e,selector:t.selector,required:t.required??!1};return t.selector&&t.selector.attribute&&o&&(n.context={filter_entity:o}),n}))}_computeLabel(e){const t=this.selector?.bc_object?.fields?.[e.name];if(t?.label)return t.label;const n=this.selector?.bc_object?.translation_key;if(this.localizeValue&&n){const t=this.localizeValue(`${n}.fields.${e.name}.name`)||this.localizeValue(`${n}.fields.${e.name}`);if(t)return t}return e.name}_computeHelper(e){const t=this.selector?.bc_object?.fields?.[e.name];if(t?.description)return t.description;const n=this.selector?.bc_object?.translation_key;if(this.localizeValue&&n){const t=this.localizeValue(`${n}.fields.${e.name}.description`);if(t)return t}return""}_formatValue(e,t){if(!e||!this.hass)return"";const n=this.selector?.bc_object?.label_field||Object.keys(this.selector?.bc_object?.fields||{})[0];if(!n)return"";const o=e[n];if(!o)return"";if(this.selector?.bc_object?.fields?.[n]?.selector?.entity){const e=this.hass.states[o];if(e)return e.attributes.friendly_name||o}return String(o)}_getDescription(e){const t=this.selector?.bc_object?.description_field;return t&&e&&e[t]||""}render(){const e=this.selector?.bc_object?.multiple||!1,t=this.selector?.bc_object?.fields;return t?e?this._renderMultiple():this._renderSingle():c.qy`<div>No fields defined</div>`}_renderMultiple(){const e=Array.isArray(this.value)?this.value:[];return c.qy`
      ${this.label?c.qy`<label class="bc-object-label">${this.label}</label>`:c.s6}
      <div class="bc-object-items">
        ${e.map(((e,t)=>this._renderItem(e,t)))}
        <ha-button 
          class="bc-object-add-button"
          @click=${this._addItem}
          ?disabled=${this.disabled}
        >
          <ha-icon icon="mdi:plus"></ha-icon>
          ${this.hass?.localize?.("ui.common.add")||"Add"}
        </ha-button>
      </div>
      ${this.helper?c.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:c.s6}
    `}_renderSingle(){return this.value?c.qy`
        ${this.label?c.qy`<label class="bc-object-label">${this.label}</label>`:c.s6}
        <div class="bc-object-items">
          ${this._renderItem(this.value,0)}
        </div>
        ${this.helper?c.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:c.s6}
      `:c.qy`
      ${this.label?c.qy`<label class="bc-object-label">${this.label}</label>`:c.s6}
      <ha-button 
        class="bc-object-add-button"
        @click=${this._addItem}
        ?disabled=${this.disabled}
      >
        <ha-icon icon="mdi:plus"></ha-icon>
        ${this.hass?.localize?.("ui.common.add")||"Add"}
      </ha-button>
      ${this.helper?c.qy`<ha-input-helper-text>${this.helper}</ha-input-helper-text>`:c.s6}
    `}_renderItem(e,t){const n=this._formatValue(e,this.selector)||`Item ${t+1}`,o=this._getDescription(e),r=this.selector?.bc_object?.multiple||!1;return c.qy`
      <ha-expansion-panel outlined class="bc-object-item">
        <h4 slot="header" class="bc-object-item-header">
          <div class="bc-object-item-title-container">
            <span class="bc-object-item-label">${n}</span>
            ${o?c.qy`<span class="bc-object-item-description">${o}</span>`:c.s6}
          </div>
          <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
            <ha-icon-button
              class="delete-icon"
              @click=${()=>this._deleteItem(t)}
              ?disabled=${this.disabled}
              .label="${this.hass?.localize?.("ui.common.delete")||"Delete"}"
            >
              <ha-icon icon="${r?"mdi:delete":"mdi:close"}"></ha-icon>
            </ha-icon-button>
          </div>
        </h4>
        <div class="bc-object-item-content">
          <ha-form
            .hass=${this.hass}
            .data=${e}
            .schema=${this._generateSchema(this.selector?.bc_object?.fields,e)}
            .disabled=${this.disabled}
            .computeLabel=${e=>this._computeLabel(e)}
            .computeHelper=${e=>this._computeHelper(e)}
            .localizeValue=${this.localizeValue}
            @value-changed=${e=>this._itemChanged(e,t)}
          ></ha-form>
        </div>
      </ha-expansion-panel>
    `}_addItem(){if(this.selector?.bc_object?.multiple){const e=[...Array.isArray(this.value)?this.value:[],{}];(0,s.rC)(this,"value-changed",{value:e})}else(0,s.rC)(this,"value-changed",{value:{}})}_deleteItem(e){if(this.selector?.bc_object?.multiple){const t=[...this.value||[]];t.splice(e,1),(0,s.rC)(this,"value-changed",{value:t})}else(0,s.rC)(this,"value-changed",{value:void 0})}_itemChanged(e,t){if(e.stopPropagation(),this.selector?.bc_object?.multiple){const n=[...this.value||[]];n[t]=e.detail.value,(0,s.rC)(this,"value-changed",{value:n})}else(0,s.rC)(this,"value-changed",{value:e.detail.value})}static styles=c.AH`
    :host {
      display: block;
    }

    .bc-object-label {
      display: block;
      margin-bottom: 8px;
      font-weight: var(--ha-font-weight-medium, 500);
    }

    .bc-object-items {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .bc-object-item {
      --expansion-panel-summary-padding: 0 16px;
      width: 100% !important;
      max-width: 100% !important;
    }

    .bc-object-item-header {
      display: flex;
      align-items: center;
      margin: 0;
      width: 100%;
      justify-content: space-between;
    }

    .bc-object-item-title-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 12px 0;
      overflow: hidden;
    }

    .bc-object-item-label {
      font-weight: var(--ha-font-weight-medium, 500);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-description {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-top: 2px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .bc-object-item-content {
      padding: 16px;
      width: 100% !important;
      box-sizing: border-box;
    }

    .button-container {
      display: flex;
      align-items: center;
      margin-left: 8px;
    }

    .delete-icon {
      color: var(--secondary-text-color);
    }

    .delete-icon ha-icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .delete-icon[disabled] {
      color: var(--disabled-text-color);
      opacity: 0.5;
    }

    .bc-object-add-button {
      align-self: flex-start;
    }

    ha-input-helper-text {
      display: block;
      margin-top: 4px;
    }
  `}customElements.define("ha-selector-bc_object",ne);var oe=n(371);const re=[{label:"Fill from left (default)",value:"left"},{label:"Fill from right",value:"right"},{label:"Fill from top",value:"top"},{label:"Fill from bottom",value:"bottom"}],ie=[{label:"Right (default)",value:"right"},{label:"Left",value:"left"},{label:"Center",value:"center"},{label:"Hidden",value:"hidden"}];function ae(e){const t=e._config.entity;return(0,oe.zD)(t)}function se({hass:e,data:t={},entity:n,computeLabel:o,onFormChange:r,onToggleChange:i,isReadOnly:a,showEntityFilterToggle:s=!1,entityFilterValue:l=!1,onEntityFilterToggle:d,showEntityFilterInfo:u=l,rangeFormDisabled:p=!1,forceValuePositionRight:b=!1}){const h=n?.startsWith("light")&&["hue","saturation","white_temp"].includes(t.light_slider_type),m=h,g=(e,t,n={})=>{"function"==typeof i&&i(e,t,n)},f=(e,t)=>({control:e,eventType:t});return c.qy`

        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:gesture-swipe-horizontal"></ha-icon>
                Slider behavior
            </h4>
            <div class="content">
                ${s?c.qy`
                    <div class="checkbox-wrapper">
                        <ha-formfield label="Disable entity filter (for custom slider)">
                            <ha-switch
                                .checked=${l}
                                @change=${e=>{return t=e.target.checked,void("function"==typeof d&&d(t));var t}}
                            ></ha-switch>
                        </ha-formfield>
                    </div>
                    <div class="bubble-info" style="display: ${u?"":"none"}">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom slider
                        </h4>
                        <div class="content">
                            <p>To create a custom slider (read only), select an <b>entity with a numeric state</b> above, then define the <b>min</b> and <b>max</b> values below.</p>
                            <p>For example, this allows you to display your solar production within a specific range.</p>
                        </div>
                    </div>
                `:""}
                <div class="range-inputs" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                    <ha-textfield
                        label="Min value"
                        type="number"
                        step="any"
                        .value="${t.min_value??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("min_value",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Max value"
                        type="number"
                        step="any"
                        .value="${t.max_value??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("max_value",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Step"
                        type="number"
                        step="any"
                        .value="${t.step??""}"
                        .disabled=${p}
                        @input="${e=>{const t=e.target.value;g("step",""===t?void 0:Number(t),f("ha-textfield","input"))}}"
                    ></ha-textfield>
                </div>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.tap_to_slide&&!t.relative_slide}
                        @change=${e=>g("tap_to_slide",e.target.checked,f("ha-switch","change"))}
                        .disabled=${t.relative_slide||a}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Tap to slide (previous behavior)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${!t.tap_to_slide&&t.relative_slide}
                        @change=${e=>g("relative_slide",e.target.checked,f("ha-switch","change"))}
                        .disabled=${t.tap_to_slide||a}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Relative slide (incompatible with tap to slide)</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.read_only_slider??a}
                        @change=${e=>g("read_only_slider",e.target.checked,f("ha-switch","change"))}
                        .disabled=${a}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Read only slider</label>
                    </div>
                </ha-formfield>
                <ha-formfield>
                    <ha-switch
                        .checked=${t.slider_live_update??!1}
                        @change=${e=>g("slider_live_update",e.target.checked,f("ha-switch","change"))}
                        .disabled=${a}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Slider live update</label>
                    </div>
                </ha-formfield>
                <div class="bubble-info" style="display: ${t.slider_live_update?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Slider live update
                    </h4>
                    <div class="content">
                        <p>By default, sliders are updated only on release. When this option is enabled, the slider will update the entity state while sliding. <b>This feature is not recommended for all entities, disable it if you encounter issues.</b></p>
                    </div>
                </div>
            </div>
        </ha-expansion-panel>
        <ha-expansion-panel outlined>
            <h4 slot="header">
                <ha-icon icon="mdi:view-grid"></ha-icon>
                Slider layout
            </h4>
            <div class="content">
                <ha-form
                    .hass=${e}
                    .data=${{slider_fill_orientation:t.slider_fill_orientation||"left"}}
                    .schema=${[{name:"slider_fill_orientation",selector:{select:{options:re,mode:"dropdown"}}}]}
                    .computeLabel=${e=>"function"==typeof o?o(e):"Fill orientation"}
                    @value-changed=${e=>g("slider_fill_orientation",e.detail.value.slider_fill_orientation,f("ha-combo-box","value-changed"))}
                ></ha-form>
                <div class="bubble-info" style="display: ${["top","bottom"].includes(t.slider_fill_orientation)?"":"none"}">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Vertical slider behavior
                    </h4>
                    <div class="content">
                        <p>When using vertical fill orientation (top or bottom), swiping over the card on mobile will activate the slider. This is because there's no way to distinguish between scrolling and slider interaction.</p>
                    </div>
                </div>
                ${h?"":c.qy`
                    <ha-form
                        .hass=${e}
                        .data=${{slider_value_position:b?"right":t.slider_value_position||"right"}}
                        .schema=${[{name:"slider_value_position",disabled:b,selector:{select:{options:ie,mode:"dropdown"}}}]}
                        .computeLabel=${e=>"function"==typeof o?o(e):"Value position"}
                        @value-changed=${e=>g("slider_value_position",e.detail.value.slider_value_position,f("ha-combo-box","value-changed"))}
                    ></ha-form>
                    ${b?c.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Value position locked
                            </h4>
                            <div class="content">
                                <p>Value position is forced to "Right" because "Show button info" is enabled. Disable it to change this setting.</p>
                            </div>
                        </div>
                    `:""}
                `}
                <ha-formfield style="display: ${m?"none":""}">
                    <ha-switch
                        .checked=${t.invert_slider_value??!1}
                        @change=${e=>g("invert_slider_value",e.target.checked,f("ha-switch","change"))}
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Invert slider direction (100% fill equals minimum)</label>
                    </div>
                </ha-formfield>
            </div>
        </ha-expansion-panel>
        ${n?.startsWith("light")?c.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:lightbulb-outline"></ha-icon>
                    Light options
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e}
                        .data=${{light_slider_type:t.light_slider_type||"brightness"}}
                        .schema=${[{name:"light_slider_type",selector:{select:{options:[{value:"brightness",label:"Brightness (default)"},{value:"hue",label:"Color (Hue)"},{value:"saturation",label:"Saturation"},{value:"white_temp",label:"White temperature"}],mode:"dropdown"}}}]}
                        .computeLabel=${e=>"function"==typeof o?o(e):"Light slider mode"}
                        @value-changed=${e=>g("light_slider_type",e.detail.value.light_slider_type,f("ha-combo-box","value-changed"))}
                    ></ha-form>
                    ${"hue"===t.light_slider_type?c.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.hue_force_saturation??!1}
                                @change=${e=>g("hue_force_saturation",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Force saturation when adjusting Hue</label>
                            </div>
                        </ha-formfield>
                        ${t.hue_force_saturation?c.qy`
                            <ha-textfield
                                label="Forced saturation value (0-100)"
                                type="number"
                                min="0"
                                max="100"
                                .value=${String(t.hue_force_saturation_value??100)}
                                @input=${e=>g("hue_force_saturation_value",e.target.value,f("ha-textfield","input"))}
                            ></ha-textfield>
                        `:""}
                    `:""}
                    ${["hue","saturation","white_temp"].includes(t.light_slider_type)?c.qy``:c.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.use_accent_color??!1}
                                @change=${e=>g("use_accent_color",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Use accent color instead of light color</label>
                            </div>
                        </ha-formfield>
                    `}
                    ${t.tap_to_slide?"":c.qy`
                        <ha-formfield>
                            <ha-switch
                                .checked=${t.allow_light_slider_to_0??!1}
                                @change=${e=>g("allow_light_slider_to_0",e.target.checked,f("ha-switch","change"))}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Allow slider to turn off light (reach 0%)</label>
                            </div>
                        </ha-formfield>
                    `}
                    <ha-formfield>
                        <ha-switch
                            .checked=${t.light_transition??!1}
                            @change=${e=>g("light_transition",e.target.checked,f("ha-switch","change"))}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Enable smooth brightness transitions</label>
                        </div>
                    </ha-formfield>
                    ${t.light_transition?c.qy`
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                Light transition
                            </h4>
                            <div class="content">
                                <p><b>Important:</b> This feature only works for lights that support the 
                                <a target="_blank" rel="noopener noreferrer" href="https://www.home-assistant.io/integrations/light/#action-lightturn_on">light.turn_on</a> transition attribute.</p>
                                <p>Enabling this for lights that do not support transitions will unfortunately have no effect. Defaults to 500ms unless overridden below.</p>
                            </div>
                        </div>
                        <ha-textfield
                            label="Transition time (ms)"
                            type="number"
                            min="1"
                            max="100000"
                            .value=${t.light_transition_time}
                            @input=${e=>g("light_transition_time",e.target.value,f("ha-textfield","input"))}
                        ></ha-textfield>
                    `:""}
                </div>
            </ha-expansion-panel>
        `:""}
    `}function le(e){let t={};"slider"!==e._config.button_type||e._disableEntityFilter||(t={filter:[{domain:["light","media_player","cover","input_number","number","climate","fan"]},{domain:"sensor",device_class:"battery"}]});const n="pop-up"===e._config.card_type;let o=e._config.button_action||"";e._config.button_type||(e._config.button_type=n?"name":"switch");let r=e._config.button_type;return c.qy`
        <div class="card-config">
            ${n?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}
            ${e.makeDropdown("Button type","button_type",[{label:"Switch",value:"switch"},{label:"Slider",value:"slider"},{label:"State",value:"state"},{label:"Name / Text (No entity required)",value:"name"}])}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"slider"!==r?"Entity (toggle)":"Entity (See text below for supported entities)",selector:{entity:t}}]}   
                .computeLabel=${e._computeLabelCallback}
                .disabled="${"name"===e._config.button_type}"
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:cog"></ha-icon>
                ${n?"Header card settings":"Card settings"}
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            ${function(e){void 0===e._disableEntityFilter&&(e._disableEntityFilter=!1);const t="slider"===e._config.button_type;return c.qy`
        <ha-expansion-panel outlined style="display: ${t?"":"none"}">
            <h4 slot="header">
            <ha-icon icon="mdi:tune-variant"></ha-icon>
            Slider settings
            </h4>
            <div class="content">
                ${se({hass:e.hass,data:e._config,entity:e._config.entity,computeLabel:e._computeLabelCallback,onFormChange:e._valueChanged,onToggleChange:(t,n,o={})=>{if(!t)return;const r=(o.control||"").toUpperCase(),i=o.eventType||("HA-TEXTFIELD"===r?"input":"HA-COMBO-BOX"===r?"value-changed":"change"),a={configValue:t,tagName:r||"INPUT"};"HA-SWITCH"===r?a.checked=n:a.value=n;const s={type:i,target:a,detail:"value-changed"===i||"selected"===i?{value:n}:void 0};e._valueChanged(s)},isReadOnly:ae(e),showEntityFilterToggle:!0,entityFilterValue:e._disableEntityFilter,onEntityFilterToggle:t=>{e._disableEntityFilter=t,e.requestUpdate()},showEntityFilterInfo:e._disableEntityFilter,rangeFormDisabled:"name"===e._config.button_type})}
            </div>
        </ha-expansion-panel>
    `}(e)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap"></ha-icon>
                Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined style="display: ${"slider"===e._config.button_type&&e._config.tap_to_slide?"none":""}">
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    <!-- 
                      Default button action mapping to match create.js defaults:
                      - name: tap="none", double="none", hold="none"
                      - state: tap="more-info", double="none", hold="more-info" 
                      - slider: tap="more-info"(sensor)/"toggle"(others), double="none", hold="none"
                      - switch: tap="toggle", double="none", hold="more-info"
                    -->
                    ${e.makeActionPanel("Tap action",o,"name"===e._config.button_type?"none":"state"===e._config.button_type||"slider"===e._config.button_type&&(0,s.md)(e,"sensor",e._config.entity)?"more-info":"toggle","button_action")}
                    ${e.makeActionPanel("Double tap action",o,"none","button_action")}
                    ${e.makeActionPanel("Hold action",o,"name"===e._config.button_type||"slider"===e._config.button_type?"none":"more-info","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:palette"></ha-icon>
                Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${n?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${n?"":e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Button card ${n?"(as pop-up header)":""}
                </h4>
                <div class="content">
                    <p>This card is very versatile. It can be used as a <b>switch</b>, a <b>slider</b>, a <b>state</b> or a <b>name/text</b> button. Select the type of button you want to get more information about it.</p>
                    
                    ${"switch"!==e._config.button_type&&e._config.button_type?"":c.qy`
                        <p><strong>Switch button:</strong> This is the default button type. By default, it toggles an entity and its background color changes based on the entity's state or the color of a light. You can change its action in the <b>Tap action on card</b> section.</p>
                    `}
                    
                    ${"slider"===e._config.button_type?c.qy`
                        <p><strong>Slider button:</strong> This button type lets you control entities with adjustable ranges. It's ideal for dimming lights, and its fill color will adapt to the light's color. You can also use it to display values, such as a battery level.</p>
                        <p>Supported entities for sliders:</p>
                        <ul class="icon-list">
                            <li><ha-icon icon="mdi:lightbulb-outline"></ha-icon>Light (brightness)</li>
                            <li><ha-icon icon="mdi:speaker"></ha-icon>Media player (volume)</li>
                            <li><ha-icon icon="mdi:window-shutter"></ha-icon>Cover (position)</li>
                            <li><ha-icon icon="mdi:fan"></ha-icon>Fan (percentage)</li>
                            <li><ha-icon icon="mdi:thermometer"></ha-icon>Climate (temperature)</li>
                            <li><ha-icon icon="mdi:numeric"></ha-icon>Input number and number (value)</li>
                            <li><ha-icon icon="mdi:battery-50"></ha-icon>Battery sensor (percentage, read only)</li>
                        </ul>
                        <p>You can also use any entity with a <b>numeric state</b> by disabling the entity filter in <b>Slider settings</b>, then define the <b>min</b> and <b>max</b> values. This option is read only.</p>
                    `:""}
                    
                    ${"state"===e._config.button_type?c.qy`
                        <p><strong>State button:</strong> Perfect for displaying information from a sensor or any entity. When you press it, it will show the "More info" panel of the entity. Its background color does not change.</p>
                    `:""}
                    
                    ${"name"===e._config.button_type?c.qy`
                        <p><strong>Name/Text button:</strong> The only button type that doesn't need an entity. It allows you to display a short text, a name or a title. You can also add actions to it. Its background color does not change.</p>
                    `:""}
                </div>
            </div>
            ${n?"":e.makeVersion()}
        </div>
    `}const ce="bubble-card-popup-hashes",de="bubble-popup-hashes-updated",ue="bubble_popups",pe="Bubble Card pop-ups",be=["related","dashboards","views","other_routes"];function he(){try{return location.pathname}catch(e){return"/"}}function me(e){if("string"!=typeof e)return null;const t=e.trim();return!t||t.startsWith("/")?null:t.startsWith("#")?t:`#${t}`}function ge(){return window.__bubbleRegisteredPopUpHashes instanceof Map||(window.__bubbleRegisteredPopUpHashes=new Map),window.__bubbleRegisteredPopUpHashes}const fe=new Set,ye=[];function ve(e){if(!e||function(e){return ye.some((t=>t.hash===e&&t.ref.deref()?.isConnected))}(e))return!1;fe.delete(e);const t=ge().get(e);return t?.path===he()&&ge().delete(e),!0}function _e(){const e=new Set;for(let t=ye.length-1;t>=0;t--){const n=ye[t];n.ref.deref()?.isConnected||(e.add(n.hash),ye.splice(t,1))}let t=!1;return e.forEach((e=>{ve(e)&&(t=!0)})),t}function we(e){if(!e?._navigationGroups||!e?._navigationItems)return;const t=ge(),n=he(),o=function(e){return be.flatMap((t=>e._navigationGroups?.[t]||[]))}(e),r=new Set(o.map((e=>e?.id))),i=[];t.forEach(((e,t)=>{e.path===n&&fe.has(t)&&t&&!r.has(t)&&i.push({id:t,primary:e.name||t,secondary:e.name?t:"Bubble Card pop-up hash",icon:e.icon||"mdi:pound",sorting_label:`zzz_bubble_pop_up_${t}`})})),"function"==typeof e._sortBySortingLabel&&i.sort(((t,n)=>e._sortBySortingLabel(t,n))),e.__bubblePopUpNavigationItems=i,e._navigationItems=[...o,...i]}function xe(){document.querySelectorAll("ha-navigation-picker").forEach((e=>{try{we(e),e.requestUpdate?.()}catch(e){}}))}function ke(e){if(e.__bubbleGetItemsPatched)return;const t=e._getItems;"function"==typeof t&&(e._getItems=function(n,o){we(e);const r=function(e,t){const n="string"==typeof t?t.trim().toLowerCase():"";return n?e.filter((e=>[e.id,e.primary,e.secondary].some((e=>(e||"").toLowerCase().includes(n))))):e}(e.__bubblePopUpNavigationItems||[],n);if(o===ue)return r;const i=t.call(e,n,o);return o||!r.length?i:[...i,pe,...r]},e.__bubbleGetItemsPatched=!0)}function Ce(){const e=customElements.get("ha-navigation-picker");if(!e?.prototype)return!1;const t=e.prototype;if(t.__bubblePopUpHashesPatched)return!0;const n=t._loadNavigationItems,o=t.updated;return"function"==typeof n&&(t._loadNavigationItems=async function(...e){await n.apply(this,e),ke(this),we(this)},t.updated=function(e){o?.call(this,e);try{ke(this),we(this),function(e){const t=e.renderRoot?.querySelector("ha-generic-picker");if(!t)return;const n=e.__bubblePopUpNavigationItems?.length>0,o=Array.isArray(t.sections)?t.sections:[],r=o.filter((e=>e?.id!==ue));n?t.sections=[...r,{id:ue,label:pe}]:r.length!==o.length&&(t.sections=r)}(this)}catch(e){}},t.__bubblePopUpHashesPatched=!0,!0)}function $e(e,{name:t,icon:n,isConnected:o=!0,element:r}={}){if(!o)return;const i=me(e);if(!i)return;const a=he();let s=!1;if(r){_e()&&(s=!0);const e=ye.find((e=>e.ref.deref()===r));if(e){if(e.hash!==i||e.path!==a){const t=e.hash;e.hash=i,e.path=a,ve(t),s=!0}}else ye.push({ref:new WeakRef(r),hash:i,path:a}),s=!0}fe.add(i);const l=ge(),c=l.get(i),d={name:t||null,icon:n||null,path:a},u=!c||c.name!==d.name||c.icon!==d.icon||c.path!==d.path;l.set(i,d),(s||u)&&function(){try{const e=ge(),t=he(),n={};e.forEach(((e,o)=>{const r=e.path||"/";(r!==t||fe.has(o))&&(n[r]??=[]).push({hash:o,name:e.name||null,icon:e.icon||null})})),localStorage.setItem(ce,JSON.stringify(n))}catch(e){}window.dispatchEvent(new Event(de))}()}function Ae(){return c.qy`
        <div id="duplicate-hash-warning" style="display: none;">
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Duplicate hash
                </h4>
                <div class="content">
                    <p>This hash is already used by another pop-up on this view. Please choose a different one.</p>
                </div>
            </div>
        </div>
    `}function Se(e,t){const n=e.shadowRoot?.querySelector("#hash-input"),o=e.shadowRoot?.querySelector("#duplicate-hash-warning");if(!n||!o)return;const r=function(e,t){const n=me(e);if(!n)return!1;_e();const o=me(t);if(n===o){const e=he();return ye.filter((t=>t.path===e&&t.hash===n)).length>1}return function(e){if(!fe.has(e))return!1;const t=ge().get(e);return t?.path===he()}(n)}(n.value,t);o.style.display=r?"":"none";const i=e.shadowRoot?.querySelector(".icon-button");i&&i.classList.toggle("disabled",r)}function Le(e){const t=e._config?.trigger??[];if(e._config.button_action,"pop-up"===e._config.card_type&&!e._config.hash){const t={...e._config};let n=!1;return setTimeout((()=>{n=!1===window.popUpError,function(e,t){if(!e.shadowRoot)return;const n=e.shadowRoot.querySelector("#vertical-stack-alert-container");n&&(n.style.display=t?"block":"none");const o=e.shadowRoot.querySelector(".icon-button ha-icon");o&&(o.icon=t?"mdi:content-save":"mdi:plus");const r=e.shadowRoot.querySelector("#button-text");r&&(r.textContent=t?"Update Hash":"Create Pop-up");const i=e.shadowRoot.querySelector("#include-example");i&&(i.disabled=t);const a=e.shadowRoot.querySelector(".mdc-form-field .mdc-label");a&&(a.textContent="Include example configuration"+(t?" (disabled because pop-up is already in a vertical stack)":""))}(e,n),Se(e)}),0),e.createPopUpConfig=()=>function(e,t){try{const t=!1===window.popUpError,n=e.shadowRoot.querySelector("#include-example")?.checked||!1;let o="#pop-up-name";const r=e.shadowRoot.querySelector("#hash-input");if(r&&r.value&&(o=r.value),t)return e._config.hash=o,$e(o,{name:e._config.name,icon:e._config.icon}),(0,s.rC)(e,"config-changed",{config:e._config}),void console.info("Pop-up already in a vertical stack. Hash updated. Note that manually creating a vertical stack is no longer required.");if(n){const t=function(e,t="light",n=2){const o=[];return e&&e.states?(Object.keys(e.states).forEach((r=>{if(!(o.length>=n)&&r.startsWith(t+".")){let t=!1;"brightness"in e.states[r].attributes&&(t=!0),o.push({entity:r,supportsBrightness:t})}})),o):o}(e.hass);e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",name:"Living room",icon:"mdi:sofa-outline",hash:o},{type:"custom:bubble-card",card_type:"separator",name:"Lights (example)",icon:"mdi:lightbulb-outline"},{type:"horizontal-stack",cards:t.length>0?t.map((e=>({type:"custom:bubble-card",card_type:"button",button_type:e.supportsBrightness?"slider":"switch",entity:e.entity,show_state:!0}))):[{type:"custom:bubble-card",card_type:"button",button_type:"name",name:"Floor lamp",icon:"mdi:floor-lamp-outline"}]}]}}else e._config={type:"vertical-stack",cards:[{type:"custom:bubble-card",card_type:"pop-up",hash:o}]},window.bubbleNewlyCreatedHashes=window.bubbleNewlyCreatedHashes||new Set,window.bubbleNewlyCreatedHashes.add(o);$e(o,{name:e._config.cards?.[0]?.name,icon:e._config.cards?.[0]?.icon}),(0,s.rC)(e,"config-changed",{config:e._config})}catch(n){console.error("Error creating pop-up:",n),e._config=t,e._config.hash=e.shadowRoot.querySelector("#hash-input")?.value||"#pop-up-name",$e(e._config.hash,{name:e._config.name,icon:e._config.icon}),(0,s.rC)(e,"config-changed",{config:e._config})}}(e,t),c.qy`
            <div class="card-config">
                ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
                <div id="vertical-stack-alert-container" style="display: none;">
                    <div class="bubble-info warning">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:alert-outline"></ha-icon>
                            Old configuration detected
                        </h4>
                        <div class="content">
                            <p>This pop-up is already inside a vertical stack (old method). This is no longer required, but it will work fine. You can simply update the hash below.</p>
                        </div>
                    </div>
                </div>
                <ha-textfield
                    label="Hash (e.g. #kitchen)"
                    .value="${e._config?.hash||"#pop-up-name"}"
                    id="hash-input"
                    @input="${()=>Se(e)}"
                ></ha-textfield>
                ${Ae()}
                <ha-formfield .label="Include example configuration">
                    <ha-switch
                        aria-label="Include example configuration"
                        .checked=${!1}
                        id="include-example"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Include example configuration</label>
                    </div>
                </ha-formfield>
                
                <button class="icon-button" @click="${()=>e.createPopUpConfig()}">
                    <ha-icon icon="mdi:plus"></ha-icon>
                    <span id="button-text">Create pop-up</span>
                </button>

                <hr />

                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        Pop-up
                    </h4>
                    <div class="content">
                        <p>Pop-ups are a great way to declutter your dashboard and quickly display more information when you need it.</p>
                        <p>If it's your first time creating a pop-up, you can use the example configuration to get started.</p>
                    </div>
                </div>
                
                ${e.makeVersion()}
            </div>
        `}const n=function(e){const t=window.__bubbleEditorSession;if(t){if(t.originalHash===e)return t;if(t.lastChangedHash===e&&!t.committed)return t}return window.__bubbleEditorSession={originalHash:e,lastChangedHash:e,committed:!1},window.__bubbleEditorSession}(e._config?.hash||null);return setTimeout((()=>Se(e,n.originalHash)),0),c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-textfield
                label="Hash (e.g. #kitchen)"
                .value="${e._config?.hash||"#pop-up-name"}"
                .configValue="${"hash"}"
                id="hash-input"
                @input="${t=>{e._config.hash=t.target.value,window.__bubbleEditorSession&&(window.__bubbleEditorSession.lastChangedHash=t.target.value),Se(e,n.originalHash)}}"
                @change="${t=>{window.__bubbleEditorSession&&(window.__bubbleEditorSession.committed=!0),e._valueChanged(t)}}"
            ></ha-textfield>
            ${Ae()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:dock-top"></ha-icon>
                  Header settings
                </h4>
                <div class="content">
                    <ha-formfield .label="Show header">
                        <ha-switch
                            aria-label="Show header"
                            .checked=${e._config.show_header??!0}
                            .configValue="${"show_header"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Show header</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Hidden header
                        </h4>
                        <div class="content">
                            <p>You can completely hide the pop-up header, including the close button. To close it when hidden, either make a long swipe within the pop-up or click outside of it.</p>
                        </div>
                    </div>
                    <div style="${e._config?.show_header??1?"":"display: none;"}">
                        <hr />
                        ${le(e)}
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Pop-up settings
                </h4>
                <div class="content">
                    <ha-textfield
                        label="Auto close in milliseconds (e.g. 15000)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="1000"
                        .value="${e._config?.auto_close||""}"
                        .configValue="${"auto_close"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Slide to close distance (default to 400)"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        step="10"
                        .value="${e._config.slide_to_close_distance??400}"
                        .configValue="${"slide_to_close_distance"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-formfield .label="Close the pop-up by clicking outside of it (a refresh is needed)">
                        <ha-switch
                            aria-label="Close the pop-up by clicking outside of it (a refresh is needed)"
                            .checked=${e._config?.close_by_clicking_outside??!0}
                            .configValue="${"close_by_clicking_outside"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up by clicking outside of it (a refresh is needed)</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Close the pop-up after any click or tap">
                        <ha-switch
                            aria-label="Close the pop-up after any click or tap"
                            .checked=${e._config?.close_on_click||!1}
                            .configValue="${"close_on_click"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close the pop-up after any click or tap</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Update cards in background (not recommended)">
                        <ha-switch
                            aria-label="Update cards in background (not recommended)"
                            .checked=${e._config?.background_update||!1}
                            .configValue="${"background_update"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Update cards in background (not recommended)</label> 
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Background updates
                        </h4>
                        <div class="content">
                            <p>Background updates are only recommended if you encounter issues with certain cards within your pop-up.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:bell"></ha-icon>
                  Pop-up trigger
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            .checked=${e._config.trigger_close??!0}
                            .configValue="${"trigger_close"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Close pop-up when conditions are not met</label> 
                        </div>
                    </ha-formfield>
                    <ha-card-conditions-editor
                        .hass=${e.hass}
                        .conditions=${t}
                        @value-changed=${t=>e._conditionChanged(t)}
                    >
                    </ha-card-conditions-editor>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About conditions
                        </h4>
                        <div class="content">
                            <p>The pop-up will be opened when ALL conditions are fulfilled. For example you can open a "Security" pop-up with a camera when a person is in front of your house.</p>
                            <p>You can also create a toggle helper (<code>input_boolean</code>) and trigger its opening/closing in an automation.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Pop-up open/close action
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Open action",e._config,"none")}
                    ${e.makeActionPanel("Close action",e._config,"none")}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            About actions
                        </h4>
                        <div class="content">
                            <p>This allows you to trigger an action on pop-up open/close.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Pop-up styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on mobile (e.g. -56px if your header is hidden)"
                                .value="${e._config?.margin_top_mobile||"0px"}"
                                .configValue="${"margin_top_mobile"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Top margin on desktop (e.g. 50vh for an half sized pop-up)"
                                .value="${e._config?.margin_top_desktop||"0px"}"
                                .configValue="${"margin_top_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background color (any var, hex, rgb or rgba value)"
                                .value="${e._config?.bg_color||""}"
                                .configValue="${"bg_color"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_opacity?e._config?.bg_opacity:"88"}"
                                .configValue="${"bg_opacity"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Background blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.bg_blur?e._config?.bg_blur:"10"}"
                                .configValue="${"bg_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Backdrop blur (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .value="${void 0!==e._config?.backdrop_blur?e._config?.backdrop_blur:"0"}"
                                .configValue="${"backdrop_blur"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Shadow opacity (0-100 range)"
                                type="number"
                                inputMode="numeric"
                                min="0"
                                max="100"
                                .configValue="${"shadow_opacity"}"
                                .value="${void 0!==e._config?.shadow_opacity?e._config?.shadow_opacity:"0"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Hide pop-up backdrop (a refresh is needed)">
                                <ha-switch
                                    aria-label="Hide pop-up backdrop (a refresh is needed)"
                                    .checked=${e._config.hide_backdrop??!1}
                                    .configValue="${"hide_backdrop"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Hide pop-up backdrop (a refresh is needed)</label> 
                                </div>
                            </ha-formfield>
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:information-outline"></ha-icon>
                                    Hide pop-up backdrop
                                </h4>
                                <div class="content">
                                    <p>This will hide the pop-up backdrop, which is a dark overlay that appears behind the pop-up.</p>
                                    <p>You can enable this setting for all your pop-ups at once by turning it on in the first pop-up on your dashboard.</p>
                                    <p><b>Hiding it is recommended if you encounter performance issues when opening/closing pop-ups.</b></p>
                                </div>
                            </div>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info-container">
                <div class="bubble-info">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        How to use pop-ups
                    </h4>
                    <div class="content">
                        <p>Each pop-up is <b>hidden by default</b> and <b>can be opened by targeting its hash</b> (e.g., '#pop-up-name'), with <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a>.</p>
                        <p><b>You can also watch this <a href="https://www.youtube.com/watch?v=7mOV7BfWoFc" target="_blank" rel="noopener noreferrer">video</a> that explains how to create your first pop-up</b> (this video is outdated, you don't need to add a vertical stack anymore).</p>
                    </div>
                </div>
                
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Important
                    </h4>
                    <div class="content">
                        <p>To avoid misalignment with your view, place this card after all other dashboard cards. You can't trigger it from a different view.</p>
                        <p>If the content of your pop-up appears on the screen during page loading, <a href="https://github.com/Clooos/Bubble-Card#pop-up-initialization-fix" target="_blank" rel="noopener noreferrer">you can install this fix</a> (recommended).</p>
                    </div>
                </div>
            </div>
            ${e.makeVersion()}
      </div>
    `}function Ee(e,t){delete e._config[t+"_name"],delete e._config[t+"_icon"],delete e._config[t+"_link"],delete e._config[t+"_entity"],delete e._config[t+"_pir_sensor"];for(let n=t;n<e.buttonIndex;n++)e._config[n+"_name"]=e._config[n+1+"_name"],e._config[n+"_icon"]=e._config[n+1+"_icon"],e._config[n+"_link"]=e._config[n+1+"_link"],e._config[n+"_entity"]=e._config[n+1+"_entity"],e._config[n+"_pir_sensor"]=e._config[n+1+"_pir_sensor"];delete e._config[e.buttonIndex+"_name"],delete e._config[e.buttonIndex+"_icon"],delete e._config[e.buttonIndex+"_link"],delete e._config[e.buttonIndex+"_entity"],delete e._config[e.buttonIndex+"_pir_sensor"],e.buttonIndex--,(0,s.rC)(e,"config-changed",{config:e._config})}var Me=n(175);const Te={en:{cards:{calendar:{busy:"Busy",all_day:"All day"}},editor:{calendar:{entity:"Entity",color:"Color",days:"Max days",limit:"Limit",list_of_calendars:"List of calendars",show_end:"Show end time",show_progress:"Show progress",show_place:"Show place",show_started_events:"Show started events",text_scrolling:"Text scrolling effect",name:"Calendar",new_calendar:"Add another calendar",remove_calendar:"Remove this calendar",settings:"Calendar settings"}}},fr:{cards:{calendar:{busy:"Occupé",all_day:"Journée"}},editor:{calendar:{entity:"Entité",color:"Couleur",days:"Jours max.",limit:"Limite",list_of_calendars:"Liste des calendriers",show_end:"Voir l'heure de fin",show_progress:"Voir la progression",show_place:"Voir le lieu",show_started_events:"Afficher les événements en cours",text_scrolling:"Effet de défilement du texte",name:"Calendrier",new_calendar:"Ajouter un autre calendrier",remove_calendar:"Supprimer ce calendrier",settings:"Paramètres du calendrier"}}},de:{cards:{calendar:{busy:"Beschäftigt",all_day:"Ganztägig"}},editor:{calendar:{entity:"Entität",color:"Farbe",days:"Max tage",limit:"Anzeigelimit",list_of_calendars:"Kalenderliste",show_end:"Endzeitpunkt anzeigen",show_progress:"Fortschritt anzeigen",show_started_events:"Laufende Ereignisse anzeigen",text_scrolling:"Lauftext",name:"Kalender",new_calendar:"Kalender hinzufügen",remove_calendar:"Kalender entfernen",settings:"Kalendereinstellungen"}}},"zh-Hans":{cards:{calendar:{busy:"忙碌",all_day:"全天"}},editor:{calendar:{entity:"实体",color:"颜色",days:"最大天数",limit:"限制",list_of_calendars:"日历列表",show_end:"显示结束时间",show_progress:"显示进度",show_started_events:"显示已开始的事件",text_scrolling:"文字滚动效果",name:"日历",new_calendar:"添加另一个日历",remove_calendar:"删除此日历",settings:"日历设置"}}}};function Be(e,t){return e[t]}function Ie(e,t){try{const n=Te[t];return e.split(".").reduce(Be,n)}catch{return}}function Pe(e){return function(t){const n=function(e){return e?.locale.language??"en"}(e),o=Ie(t,n);if(o)return o;return Ie(t,"en")||t}}function Oe(e){return Array.from(e).reduce(((e,t)=>t.charCodeAt(0)+((e<<5)-e)),0)}function qe(e){const t=(16777215&e).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t}function je(e){if(e.date){const t=e.date.split("-"),n=parseInt(t[0],10),o=parseInt(t[1],10)-1,r=parseInt(t[2],10);return new Date(n,o,r)}return new Date(e.dateTime)}function Ne(e,t){const n=je(e.start),o=je(t.start),r=new Date(n.getFullYear(),n.getMonth(),n.getDate()),i=new Date(o.getFullYear(),o.getMonth(),o.getDate()),a=r.getTime()-i.getTime();if(0!==a)return a;const s=void 0!==e.start.date,l=void 0!==t.start.date;return s&&!l?-1:!s&&l?1:s||l?0:n.getTime()-o.getTime()}const Ue=e=>e.title||e.label;class ze extends c.WF{getSchema(e){const t=Pe(this.hass);return[{type:"expandable",name:"",title:e?this.hass.states[e].attributes.friendly_name||e:t("editor.calendar.new_calendar"),schema:[{name:"entity",title:t("editor.calendar.entity"),selector:{entity:{domain:["calendar"]}}},{name:"color",title:t("editor.calendar.color"),selector:{ui_color:{}}}]}]}static properties={hass:{},value:{type:Array},label:{}};constructor(){super(),this.value=[]}render(){const e=Pe(this.hass),t=e=>()=>{const t=[...this.value||[]];t.splice(e,1),this.valueChanged({detail:{value:t}})},n=this.value??[];return c.qy`
      <ha-expansion-panel outlined style="--expansion-panel-summary-padding: 0 8px;">
        <h4 slot="header" style="display: flex; align-items: center; margin: 10px 0;">
          <ha-icon icon="mdi:calendar" style="margin: 8px;"></ha-icon>
          &nbsp;${e("editor.calendar.list_of_calendars")}
        </h4>
        <div class="content"> 
          ${n.map(((n,o)=>c.qy`
              <div style="display: flex; align-items: center; margin: 12px 4px 14px 4px">
                <ha-form
                  .data=${n}
                  .schema=${this.getSchema(n.entity)}
                  .hass=${this.hass}
                  .computeLabel=${Ue}
                  @value-changed=${e=>{e.stopPropagation();const t=[...this.value||[]];t[o]=e.detail.value,this.valueChanged({detail:{value:t}})}}
                  style="flex-grow: 1;"
                ></ha-form>
                <ha-button @click=${t(o)}>
                  <ha-icon icon="mdi:calendar-remove"></ha-icon>&nbsp;
                  ${e("editor.calendar.remove_calendar")}
                </ha-button>
              </div>
            `))}
          <ha-button @click=${()=>{const e=[...this.value||[]];e.push({entity:"",color:""}),this.valueChanged({detail:{value:e}})}} style="margin: 12px 4px 14px 4px;">
            <ha-icon icon="mdi:calendar-plus"></ha-icon>&nbsp;
            ${e("editor.calendar.new_calendar")}
          </ha-button>
        </div>
      </ha-expansion-panel>
    `}valueChanged(e){const t=e.detail.value.map((e=>{const t=e.entity?qe(Oe(e.entity)):"";return{entity:e.entity,color:e.color||t}}));(0,s.rC)(this,"value-changed",{value:t},void 0)}}function De(e,t,n,o){if(void 0===e._lazyContentLoadedFlags&&(e._lazyContentLoadedFlags={}),n&&!e._lazyContentLoadedFlags[t]&&(e._lazyContentLoadedFlags[t]=!0),e._lazyContentLoadedFlags[t])return o()}function Re(){return"undefined"!=typeof customElements&&void 0!==customElements.get("ha-dropdown")}function Ve({trigger:e,items:t}){const n=t.map((e=>"divider"===e.type?Re()?c.qy`<wa-divider role="separator" aria-orientation="horizontal" orientation="horizontal"></wa-divider>`:c.qy`<li divider role="separator"></li>`:function({icon:e,label:t,disabled:n=!1,onClick:o,variant:r=null,type:i="item",checked:a=!1}){return Re()?c.qy`
            <ha-dropdown-item 
                ?disabled=${n} 
                @click=${o} 
                variant=${r||""}
                type=${"checkbox"===i?"checkbox":""}
                ?checked=${"checkbox"===i&&a}
            >
                ${e?c.qy`<ha-icon icon="${e}" slot="icon"></ha-icon>`:""}
                ${t}
            </ha-dropdown-item>
        `:c.qy`
            <mwc-list-item 
                graphic="icon" 
                ?disabled=${n} 
                @click=${o} 
                class=${"danger"===r?"warning":""}
                ?selected=${"checkbox"===i&&a}
            >
                ${e?c.qy`<ha-icon icon="${e}" slot="graphic"></ha-icon>`:""}
                ${t}
            </mwc-list-item>
        `}(e)));return Re()?c.qy`
            <ha-dropdown>
                ${e}
                ${n}
            </ha-dropdown>
        `:c.qy`
            <ha-button-menu corner="BOTTOM_START" menuCorner="START" fixed @closed=${e=>e.stopPropagation()} @click=${e=>e.stopPropagation()}>
                ${e}
                ${n}
            </ha-button-menu>
        `}function Fe(e,t,n,o,r,i,a,s,l,d={}){const{panelKeyPrefix:u="sub_button",buttonTitle:p=`Button ${n+1}${t.name?` - ${t.name}`:""}`,arrayLength:b=null}=d;void 0===e._expandedPanelStates&&(e._expandedPanelStates={});const h=t.entity??e._config.entity,m=(0,oe.zD)(h),g=h?.startsWith("input_select")||h?.startsWith("select")||t.select_attribute;if(!t.sub_button_type&&g)try{setTimeout((()=>r({sub_button_type:"select"})))}catch(e){}const f=e.hass.states[h]?.attributes,y=e._selectable_attributes.some((e=>f?.[e])),v=Object.keys(e.hass.states[h]?.attributes||{}).map((t=>{let n=e.hass.states[h];return{label:e.hass.formatEntityAttributeName(n,t),value:t}})).filter((t=>e._selectable_attributes.includes(t.value))),_=t.visibility??[],w=[{label:"Default (button)",value:"default"},...m?[]:[{label:"Slider",value:"slider"}],...g||y?[{label:"Dropdown / Select",value:"select"}]:[]],x=`${u}_main_${n}`,k=`${u}_settings_${n}`,C=`${u}_actions_${n}`,$=`${u}_visibility_${n}`,A=`${u}_layout_${n}`,S=`${u}_type_slider_${n}`,L="slider"===t.sub_button_type&&t.always_visible,E="select"===t.sub_button_type||!t.sub_button_type&&g||L,M="string"==typeof o&&o.startsWith("sub_button.bottom"),T=null==t.fill_width?!!M:t.fill_width;let B=!1;if("string"==typeof o&&o.includes(".group")){const t=o.match(/^sub_button\.(main|bottom)\.(\d+)\.group$/);if(t){const[,n,o]=t,r=e._config.sub_button;if(r&&r[n]){const e=r[n][parseInt(o,10)];if(e&&e.justify_content){const t=e.justify_content.toLowerCase();B=["end","start","center"].includes(t)}}}}const I=null===b||n>0,P=null===b||n<b-1;return c.qy`
    <ha-expansion-panel 
      outlined
      @expanded-changed=${t=>{e._expandedPanelStates[x]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:border-radius"></ha-icon>
        ${p}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${Ve({trigger:c.qy`
              <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-left",label:"Move left",disabled:!I,onClick:e=>{e.stopPropagation(),I&&a(-1)}},{type:"item",icon:"mdi:arrow-right",label:"Move right",disabled:!P,onClick:e=>{e.stopPropagation(),P&&a(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:"Copy",onClick:e=>{e.stopPropagation(),s(e)}},{type:"item",icon:"mdi:content-cut",label:"Cut",onClick:e=>{e.stopPropagation(),l(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:"Delete",variant:"danger",onClick:e=>{e.stopPropagation(),i(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${De(e,x,!!e._expandedPanelStates[x],(()=>c.qy`
          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[k]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:cog"></ha-icon>
              Button settings
            </h4>
            <div class="content">
              ${De(e,k,!!e._expandedPanelStates[k],(()=>c.qy` 
                <ha-form
                  .hass=${e.hass}
                  .data=${t}
                  .schema=${[{name:"entity",label:"Optional - Entity (default to card entity)",selector:{entity:{}}}]}   
                  .computeLabel=${e._computeLabelCallback}
                  @value-changed=${e=>r(e.detail.value)}
                ></ha-form>
                <ha-form
                  .hass=${e.hass}
                  .data=${{sub_button_type:t.sub_button_type??"default"}}
                  .schema=${[{name:"sub_button_type",selector:{select:{options:w,mode:"dropdown"}}}]}
                  .computeLabel=${()=>"Sub-button type"}
                  @value-changed=${e=>r({sub_button_type:e.detail.value.sub_button_type})}
                ></ha-form>
                ${"slider"===t.sub_button_type?c.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Slider behavior
                    </h4>
                    <div class="content">
                      <p>By default, you need to tap the sub-button to reveal the slider. To make the slider always visible, enable the "Always show slider" option in the Layout section below.</p>
                    </div>
                  </div>
                `:""}
                ${("select"===t.sub_button_type||!t.sub_button_type&&g)&&y?c.qy`
                  <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:t.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:v,mode:"dropdown"}}}]}
                    .computeLabel=${()=>"Optional - Select menu (from attributes)"}
                    @value-changed=${e=>r({select_attribute:e.detail.value.select_attribute})}
                  ></ha-form>
                `:""}
                <div class="ha-textfield">
                  <ha-textfield
                    label="Optional - Name"
                    .value="${t.name??""}"
                    @input="${e=>r({name:e.target.value})}"
                  ></ha-textfield>
                </div>
                <div class="ha-icon-picker">
                  <ha-icon-picker
                    label="Optional - Icon"
                    .value="${t.icon}"
                    item-label-path="label"
                    item-value-path="value"
                    @value-changed="${e=>r({icon:e.detail.value})}"
                  ></ha-icon-picker>
                </div>
              `))}
              ${e.makeShowState(t,`${o}.${n}.`,o,n)}
            </div>
          </ha-expansion-panel>

          ${"slider"===t.sub_button_type?c.qy`
            <ha-expansion-panel 
              outlined
              @expanded-changed=${t=>{e._expandedPanelStates[S]=t.target.expanded,e.requestUpdate()}}
            >
              <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Slider settings
              </h4>
              <div class="content">
                ${De(e,S,!!e._expandedPanelStates[S],(()=>c.qy`
                  ${se({hass:e.hass,data:t,entity:h,computeLabel:e._computeLabelCallback,onFormChange:e=>r(e.detail.value),onToggleChange:(e,t)=>r({[e]:t}),isReadOnly:m,forceValuePositionRight:!(!t.always_visible||!t.show_button_info)})}
                `))}
              </div>
            </ha-expansion-panel>
          `:""}

          <ha-expansion-panel 
            outlined 
            @expanded-changed=${t=>{e._expandedPanelStates[C]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:gesture-tap"></ha-icon>
              Tap action on button
            </h4>
            <div class="content">
              ${De(e,C,!!e._expandedPanelStates[C],(()=>c.qy`
                ${L?c.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Actions disabled
                    </h4>
                    <div class="content">
                      <p>Tap, double tap, and hold actions are disabled on this sub-button because "Always show slider" is enabled.</p>
                    </div>
                  </div>
                `:""}
                <div style="${E?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Tap action",t,"more-info",o,n)}
                </div>
                <div style="${E?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Double tap action",t,"none",o,n)}
                </div>
                <div style="${E?"opacity: 0.5; pointer-events: none;":""}">
                  ${e.makeActionPanel("Hold action",t,"none",o,n)}
                </div>
              `))}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[$]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:eye"></ha-icon>
              Visibility
            </h4>
            <div class="content">
              ${De(e,$,!!e._expandedPanelStates[$],(()=>c.qy`
                <ha-formfield label="Hide when parent entity is unavailable">
                  <ha-switch
                    .checked=${t.hide_when_parent_unavailable??!1}
                    @change=${e=>r({hide_when_parent_unavailable:e.target.checked})}
                  ></ha-switch>
                </ha-formfield>
                <ha-card-conditions-editor
                  .hass=${e.hass}
                  .conditions=${_}
                  @value-changed=${e=>r({visibility:e.detail.value})}
                >
                </ha-card-conditions-editor>
                <ha-alert alert-type="info">
                  The sub-button will be shown when ALL conditions are fulfilled. If no conditions are set, the sub-button will always be shown.
                </ha-alert>
              `))}
            </div>
          </ha-expansion-panel>

          <ha-expansion-panel 
            outlined
            @expanded-changed=${t=>{e._expandedPanelStates[A]=t.target.expanded,e.requestUpdate()}}
          >
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Layout
            </h4>
            <div class="content">
              ${De(e,A,!!e._expandedPanelStates[A],(()=>c.qy`
                ${M?c.qy`
                  <ha-formfield label="Fill available width">
                    <ha-switch
                      .checked=${T??!0}
                      @change=${e=>r({fill_width:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                ${"slider"===t.sub_button_type?c.qy`
                  <ha-formfield label="Always show slider">
                    <ha-switch
                      .checked=${t.always_visible??!1}
                      @change=${e=>r({always_visible:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                ${"slider"===t.sub_button_type&&t.always_visible?c.qy`
                  <ha-formfield label="Show button info (Icon, name, state...)">
                    <ha-switch
                      .checked=${t.show_button_info??!1}
                      @change=${e=>r({show_button_info:e.target.checked})}
                    ></ha-switch>
                  </ha-formfield>
                `:""}
                <ha-textfield
                  label="${M&&!B?"Custom button width (%)":"Custom button width (px)"}"
                  type="number"
                  min="${M&&!B?0:"slider"===t.sub_button_type&&t.always_visible?68:36}"
                  max="${M&&!B?100:600}"
                  .value="${t.width??""}"
                  .disabled=${!0===T}
                  @input="${e=>{const t=e.target.value;r({width:""===t?void 0:Number(t)})}}"
                ></ha-textfield>
                <ha-textfield
                  label="Custom button height (px)"
                  type="number"
                  min="20"
                  max="600"
                  .value="${t.custom_height??""}"
                  @input="${e=>{const t=e.target.value;r({custom_height:""===t?void 0:Number(t)})}}"
                ></ha-textfield>
                ${"slider"===t.sub_button_type&&t.always_visible?"":c.qy`
                  <ha-form
                    .hass=${e.hass}
                    .data=${{content_layout:t.content_layout??"icon-left"}}
                    .schema=${[{name:"content_layout",selector:{select:{options:[{value:"icon-left",label:"Icon on left (default)"},{value:"icon-top",label:"Icon on top"},{value:"icon-bottom",label:"Icon on bottom"},{value:"icon-right",label:"Icon on right"}],mode:"dropdown"}}}]}
                    .computeLabel=${()=>"Content layout"}
                    @value-changed=${e=>r({content_layout:e.detail.value.content_layout})}
                  ></ha-form>
                `}
              `))}
            </div>
          </ha-expansion-panel>
        `))}
      </div>
    </ha-expansion-panel>
  `}function He(e,t,n){return o=>{if(o?.stopPropagation(),t){try{e._clipboardButton=JSON.parse(JSON.stringify(t))}catch(n){e._clipboardButton=t}n&&n(e._clipboardButton),e.requestUpdate()}}}function We(e,t,n,o){return r=>{r?.stopPropagation(),He(e,t,o)(r),n&&n(r)}}function Ye(e,t){return t===e._config.sub_button?.main?"main":t===e._config.sub_button?.bottom?"bottom":null}function Ke(e,t,n){try{e._config.sub_button[t]=n(e._config.sub_button[t])}catch(o){try{e._config.sub_button={...e._config.sub_button,[t]:n(e._config.sub_button[t])}}catch(o){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:n(e._config.sub_button[t])}}}}}function Xe(e,t,n,o){return r=>{r?.stopPropagation();const i=Ye(e,t);if(!i)return[...t].splice(n,1),o&&o(e),void e.requestUpdate();const a=[...e._config.sub_button[i]];a.splice(n,1),Ke(e,i,(()=>a)),o&&o(e),e.requestUpdate()}}function Je(e,t,n,o){return r=>{const i=n+r;if(i<0||i>=t.length)return;const a=Ye(e,t);if(!a){const r=[...t];return[r[n],r[i]]=[r[i],r[n]],o&&o(e),void e.requestUpdate()}const s=[...e._config.sub_button[a]];[s[n],s[i]]=[s[i],s[n]],Ke(e,a,(()=>s)),o&&o(e),e.requestUpdate()}}function Ge(e){const t=e.filter((e=>e&&!Array.isArray(e.group)));return 0===t.length?[...e]:[{name:"Automatically grouped",buttons_layout:"inline",group:t},...e.filter((e=>e&&Array.isArray(e.group)))]}function Qe(e,t){const n=e._clipboardButton||(t?t():null);return n?`Paste "${n.name||"sub-button"}"`:"Paste"}customElements.define("ha-selector-calendar_entity",ze);const Ze="bubble-card-subbutton-clipboard";function et(){try{const e=localStorage.getItem(Ze);if(!e)return null;const t=JSON.parse(e);return t&&"object"==typeof t?t.payload??null:null}catch(e){return null}}function tt(e){if(e)try{const t=JSON.parse(JSON.stringify(e)),n={type:t&&Array.isArray(t.buttons)?"group":"sub-button",savedAt:Date.now(),payload:t};localStorage.setItem(Ze,JSON.stringify(n))}catch(e){}}function nt(e,t){if("sub-buttons"===e._config.card_type&&"main"===t)return[];if(Array.isArray(e._config.sub_button)){const t=(0,Me.zD)(e._config.sub_button),n={};Array.isArray(t.main)&&t.main.length&&(n.main=t.main.slice()),Array.isArray(t.bottom)&&t.bottom.length&&(n.bottom=t.bottom.slice());try{e._config.sub_button=n}catch(t){e._config={...e._config,sub_button:n}}}if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}if(!Array.isArray(e._config.sub_button[t]))try{e._config.sub_button[t]=[]}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:[]}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:[]}}}}return e._config.sub_button[t]}function ot(e,t,n,o){const r=n([...nt(e,t)]);try{e._config.sub_button[t]=r}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:r}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:r}}}}o&&o(e),e.requestUpdate()}function rt(e,t,n,o,r){const i=[...nt(e,t)],a=o({...i[n]});i[n]=a;try{e._config.sub_button[t]=i}catch(n){try{e._config.sub_button={...e._config.sub_button,[t]:i}}catch(n){e._config={...e._config,sub_button:{...e._config.sub_button,[t]:i}}}}r&&r(e),e.requestUpdate()}function it(e){const t=e._config.sub_button,n="sub-buttons"===e._config.card_type,o=e=>Array.isArray(e)&&e.some((e=>!!e&&(Array.isArray(e.group),!0))),r=!n&&o(t?.main),i=o(t?.bottom),a=!(!t||void 0===t.main_layout&&void 0===t.bottom_layout);if(!r&&!i&&!a){try{delete e._config.sub_button}catch(t){e._config={...e._config},delete e._config.sub_button}return void e._valueChanged({target:{configValue:"sub_button",value:void 0}})}if(i){e._firstRowsComputation=!0;const t=Boolean(window.isSectionView),n=Object.prototype.hasOwnProperty.call(e._config,"card_layout");if(t&&n&&"normal"===e._config.card_layout){try{delete e._config.card_layout}catch(t){const n={...e._config};delete n.card_layout,e._config=n}e._valueChanged({target:{configValue:"card_layout",value:void 0}})}}const s={};r&&(s.main=(t.main||[]).filter((e=>!!e))),i&&(s.bottom=(t.bottom||[]).filter((e=>!!e))),t&&void 0!==t.main_layout&&!n&&(s.main_layout=t.main_layout),t&&void 0!==t.bottom_layout&&(s.bottom_layout=t.bottom_layout),e._valueChanged({target:{configValue:"sub_button",value:s}})}function at(e,t){const n=(0,Me.mg)(e._config),o=Array.isArray(n?.[t])?n[t]:[];return{items:o,hasGroups:o.some((e=>e&&Array.isArray(e.group))),hasIndividualButtons:o.some((e=>e&&!Array.isArray(e.group)))}}function st(e,t){let{items:n,hasGroups:o,hasIndividualButtons:r}=at(e,t);o&&r&&(n=Ge(n),ot(e,t,(()=>n),it));const{isDismissed:i,dismiss:a}=function(e,t){const n=`bubble-card-groups-info-dismissed-${t}`;if(e._groupsInfoDismissed||(e._groupsInfoDismissed={}),void 0===e._groupsInfoDismissed[t])try{e._groupsInfoDismissed[t]="true"===localStorage.getItem(n)}catch(n){e._groupsInfoDismissed[t]=!1}return{isDismissed:e._groupsInfoDismissed[t],dismiss:()=>{e._groupsInfoDismissed[t]=!0;try{localStorage.setItem(n,"true")}catch(e){}e.requestUpdate()}}}(e,t),s=()=>{ot(e,t,(e=>{const t=Ge(e),n=t.filter((e=>e&&Array.isArray(e.group))).length;return[...t,{name:`Group ${n+1}`,buttons_layout:"inline",group:[]}]}),it)};return c.qy`
    ${o&&!i?c.qy`
      <div class="bubble-info">
        <h4 class="bubble-section-title">
          <ha-icon icon="mdi:information-outline"></ha-icon>
          Groups mode
          <div class="bubble-info-dismiss bubble-badge" @click=${a} title="Dismiss" 
            style="display: inline-flex; align-items: center; position: absolute; right: 16px; padding: 0 8px; cursor: pointer;">
            <ha-icon icon="mdi:close" style="margin: 0;"></ha-icon>
            Dismiss
          </div>
        </h4>
        <div class="content">
          <p>You are now in <b>groups mode</b>. All sub-buttons must be inside a group to ensure consistent ordering. You can rename, reorder, or delete groups as needed.</p>
        </div>
      </div>
    `:""}
    ${n.map(((n,o)=>{if(!n)return null;if(Array.isArray(n.group))return function(e,t,n,o){const r=`${o}_group_${n}`,i="main"===o?e._config.sub_button.main:e._config.sub_button.bottom,a=t=>{rt(e,o,n,(e=>{const n={...e},r=Array.isArray(e.group)?[...e.group]:[],i=r.some((e=>e&&!0===e.fill_width));if(Object.prototype.hasOwnProperty.call(t,"name")&&(n.name=t.name),Object.prototype.hasOwnProperty.call(t,"buttons_layout")&&(n.buttons_layout=t.buttons_layout),"bottom"===o&&Object.prototype.hasOwnProperty.call(t,"justify_content")){const e=t.justify_content;if("fill"===e){if(Object.prototype.hasOwnProperty.call(n,"justify_content")&&delete n.justify_content,Array.isArray(r)){for(let e=0;e<r.length;e+=1){const t=r[e];if(t)if("bottom"===o){if(!1===t.fill_width){const{fill_width:n,...o}=t;r[e]={...o}}}else!0!==t.fill_width&&(r[e]={...t,fill_width:!0})}n.group=r}}else if(i);else if(n.justify_content=e,Array.isArray(r)){for(let e=0;e<r.length;e+=1){const t=r[e];t&&!1!==t.fill_width&&(r[e]={...t,fill_width:!1})}n.group=r}}return n}),it)},s=i[n],l=Xe(e,i,n,it),d=Je(e,i,n,it),u=He(e,s,tt),p=We(e,s,l,tt),b=function(e,t,n,o,r){return()=>{const i=e._clipboardButton||(r?r():null);if(!i)return;e._clipboardButton=i;const a=Ye(e,t);if(!a)return;const s=[...e._config.sub_button[a]],l={...s[n]};Array.isArray(l.group)||(l.group=[]);const c="bottom"===a&&l.justify_content&&"fill"!==l.justify_content;if(Array.isArray(i?.buttons)||Array.isArray(i?.group)){let e=JSON.parse(JSON.stringify(i.buttons||i.group||[]));c&&(e=e.map((e=>e?{...e,fill_width:!1}:e))),l.group=[...l.group,...e]}else{let e=JSON.parse(JSON.stringify(i));c&&e&&(e.fill_width=!1),l.group=[...l.group,e]}s[n]=l,Ke(e,a,(()=>s)),o&&o(e),e.requestUpdate()}}(e,i,n,it,et),h=n>0,m=n<i.length-1;return c.qy`
    <ha-expansion-panel 
      outlined
      style="border-style: dashed;"
      @expanded-changed=${t=>{e._expandedPanelStates[r]=t.target.expanded,e.requestUpdate()}}
    >
      <h4 slot="header">
        <ha-icon icon="mdi:format-list-group"></ha-icon>
        ${t.name||`Group ${n+1}`}
        <div class="button-container" @click=${e=>e.stopPropagation()} @mousedown=${e=>e.stopPropagation()} @touchstart=${e=>e.stopPropagation()}>
          ${Ve({trigger:c.qy`
              <mwc-icon-button slot="trigger" class="icon-button header" title="Options">
                <ha-icon style="display: flex" icon="mdi:dots-vertical"></ha-icon>
              </mwc-icon-button>
            `,items:[{type:"item",icon:"mdi:arrow-up",label:"Move up",disabled:!h,onClick:e=>{e.stopPropagation(),h&&d(-1)}},{type:"item",icon:"mdi:arrow-down",label:"Move down",disabled:!m,onClick:e=>{e.stopPropagation(),m&&d(1)}},{type:"divider"},{type:"item",icon:"mdi:content-copy",label:"Copy group",onClick:e=>{e.stopPropagation(),u(e)}},{type:"item",icon:"mdi:content-cut",label:"Cut group",onClick:e=>{e.stopPropagation(),p(e)}},{type:"divider"},{type:"item",icon:"mdi:delete",label:"Delete",variant:"danger",onClick:e=>{e.stopPropagation(),l(e)}}]})}
        </div>
      </h4>
      <div class="content">
        ${De(e,r,!!e._expandedPanelStates[r],(()=>c.qy`
          <ha-form
            .hass=${e.hass}
            .data=${{name:t.name??""}}
            .schema=${[{name:"name",label:"Group name",selector:{text:{}}}]}
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e=>a(e.detail.value)}
          ></ha-form>

          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:view-grid"></ha-icon>
              Group layout
            </h4>
            <div class="content">
              <ha-form
                .hass=${e.hass}
                .data=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some((e=>e&&!0===e.fill_width))?"fill":t.justify_content??"fill";return{buttons_layout:t.buttons_layout??"inline",justify_content:e}})()}
                .schema=${(()=>{const e=(Array.isArray(t.group)?t.group:[]).some((e=>e&&!0===e.fill_width));let n=[{value:"fill",label:"Fill available width (default)"},{value:"end",label:"Right"},{value:"start",label:"Left"},{value:"center",label:"Center"},{value:"space-between",label:"Space between"},{value:"space-around",label:"Space around"},{value:"space-evenly",label:"Space evenly"}];"column"===t.buttons_layout&&(n=n.filter((e=>!["space-between","space-around","space-evenly"].includes(e.value))));const r=[{name:"buttons_layout",label:"Buttons layout",selector:{select:{options:[{value:"inline",label:"Inline"},{value:"column",label:"Column"}],mode:"dropdown"}}}];return"bottom"===o&&r.push({name:"justify_content",label:"Buttons alignment",selector:{select:{options:n,mode:"dropdown"}},disabled:e}),r})()}
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e=>a(e.detail.value)}
              ></ha-form>
              ${"bottom"!==o?"":(Array.isArray(t.group)?t.group:[]).some((e=>e&&!0===e.fill_width))?c.qy`
                  <div class="bubble-info">
                    <h4 class="bubble-section-title">
                      <ha-icon icon="mdi:information-outline"></ha-icon>
                      Buttons alignment locked by sub-button settings
                    </h4>
                    <div class="content">
                      <p>One or more sub-buttons explicitly enable "Fill available width". To change alignment, first disable "Fill available width" in those sub-buttons.</p>
                    </div>
                  </div>
                `:""}
            </div>
          </ha-expansion-panel>

          <h4 class="group-buttons-header">Group sub-buttons</h4>
          ${Array.isArray(t.group)?t.group.map(((r,i)=>{if(!r)return null;const a=t=>{t?.stopPropagation(),rt(e,o,n,(e=>{const t={...e},n=Array.isArray(t.group)?[...t.group]:[];return n.splice(i,1),t.group=n,t}),it)},s=Array.isArray(t.group)?t.group[i]:null,l=He(e,s,tt),c=We(e,s,a,tt),d=(Array.isArray(t.group)?t.group:[]).length;return Fe(e,r,i,`sub_button.${o}.${n}.group`,(t=>{rt(e,o,n,(e=>{const n={...e},o=Array.isArray(n.group)?[...n.group]:[];return o[i]={...o[i]||{},...t},n.group=o,n}),it)}),a,(t=>{const r=i+t,a=nt(e,o),s=Array.isArray(a[n]?.group)?a[n].group:[];r<0||r>=s.length||rt(e,o,n,(e=>{const t={...e},n=Array.isArray(t.group)?[...t.group]:[];return[n[i],n[r]]=[n[r],n[i]],t.group=n,t}),it)}),l,c,{panelKeyPrefix:`${o}_group_${n}_button`,buttonTitle:r.name||`Button ${i+1}`,arrayLength:d})})):null}

          <div class="element-actions">
            <button class="icon-button paste-button no-bg ${e._clipboardButton||et()?"":"disabled"}" @click=${b}>
              <ha-icon icon="mdi:content-paste"></ha-icon>
              <span class="paste-button-text">
                ${Qe(e,et)}
              </span>
            </button>
            <button class="icon-button" @click=${()=>{rt(e,o,n,(t=>{const n={...t};Array.isArray(n.group)||(n.group=[]);const r="bottom"===o&&n.justify_content&&"fill"!==n.justify_content?{entity:e._config.entity,fill_width:!1}:{entity:e._config.entity};return n.group=[...n.group,r],n}),it)}}>
              <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
              Add sub-button
            </button>
          </div>
        `))}
      </div>
    </ha-expansion-panel>
  `}(e,n,o,t);const r="main"===t?e._config.sub_button.main:e._config.sub_button.bottom,i=Xe(e,r,o,it),a=Je(e,r,o,it),s=r[o],l=He(e,s,tt),d=We(e,s,i,tt),u=r.length;return Fe(e,n,o,`sub_button.${t}`,(n=>{ot(e,t,(e=>{const t=[...e];return t[o]={...t[o]||{},...n},t}),it)}),i,a,l,d,{panelKeyPrefix:`${t}_button`,buttonTitle:`Button ${o+1}${n.name?` - ${n.name}`:""}`,arrayLength:u})}))}

    <div class="element-actions">
      ${(()=>{const n=nt(e,"main"===t?"main":"bottom"),o=function(e,t,n,o){return()=>{const r=e._clipboardButton||(o?o():null);if(!r)return;e._clipboardButton=r;const i=JSON.parse(JSON.stringify(r)),a=Ye(e,t),s=Array.isArray(i.buttons)||Array.isArray(i.group),l=a?e._config.sub_button[a]:t;let c=s?Ge(l):[...l];s?c.push({name:i.name,buttons_layout:i.display||i.buttons_layout||"inline",justify_content:i.justify_content,group:i.buttons||i.group||[]}):c.push(i),a&&Ke(e,a,(()=>c)),n&&n(e),e.requestUpdate()}}(e,n,it,et);return c.qy`
          <button class="icon-button paste-button no-bg ${e._clipboardButton||et()?"":"disabled"}" @click=${o}>
            <ha-icon icon="mdi:content-paste"></ha-icon>
            <span class="paste-button-text">
              ${Qe(e,et)}
            </span>
          </button>
        `})()}
      ${o?c.qy`
        <button class="icon-button" @click=${()=>{s()}}>
          <ha-icon icon="mdi:format-list-group-plus"></ha-icon>
          Add group
        </button>
      `:Ve({trigger:c.qy`
          <button slot="trigger" class="icon-button add-menu-trigger">
            <ha-icon icon="mdi:plus"></ha-icon>
            Add
          </button>
        `,items:[{type:"item",icon:"mdi:shape-square-rounded-plus",label:"Add sub-button",onClick:()=>{ot(e,t,(t=>[...t,{entity:e._config.entity}]),it)}},{type:"item",icon:"mdi:format-list-group-plus",label:"Add group",onClick:()=>{s()}}]})}
    </div>
  `}function lt(e,t){if(!at(e,t).hasGroups)return"";const n=`${t}_layout`,o=e._config?.sub_button?.[n]??"inline";return c.qy`
    <ha-form
      .hass=${e.hass}
      .data=${{[n]:o}}
      .schema=${[{name:n,label:"Groups placement",selector:{select:{options:[{value:"inline",label:"Inline"},{value:"rows",label:"Rows (stack groups vertically)"}],mode:"dropdown"}}}]}
      .computeLabel=${e._computeLabelCallback}
      @value-changed=${t=>{const o=t.detail?.value?.[n];if(!e._config.sub_button)try{e._config.sub_button={}}catch(t){e._config={...e._config,sub_button:{}}}try{e._config.sub_button[n]=o}catch(t){try{e._config.sub_button={...e._config.sub_button,[n]:o}}catch(t){e._config={...e._config,sub_button:{...e._config.sub_button,[n]:o}}}}it(e),e.requestUpdate()}}
    ></ha-form>
  `}var ct=n(933),dt=n(766),ut=n(937),pt=n(868);const bt="sensor.bubble_card_modules",ht=["modules","store"],mt="bubble-card-force-unsupported-modules";async function gt(e,t,n){try{if(!e.hass)return!1;if(!await(0,h.ensureBCTProviderAvailable)(e.hass))return console.warn("Bubble Card Tools is required to change global status."),!1;const o={...i.Ki.get(t)||{}};return!0===n?o.is_global=!0:delete o.is_global,i.Ki.set(t,o),await(0,h.writeModuleYaml)(e.hass,t,o),document.dispatchEvent(new CustomEvent("yaml-modules-updated")),!0}catch(e){return console.error("Error setting module global status:",e),!1}}function ft(e,t){try{const n=i.Ki.get(e);if(n&&"object"==typeof n&&!0===n.is_global)return!0;if(h.isBCTAvailableSync&&(0,h.isBCTAvailableSync)())return!1;if(!t||!t.states||!t.states[bt])return!1;const o=t.states[bt];if(!o.attributes||!o.attributes.modules)return!1;const r=o.attributes.modules[e];return r&&!0===r.is_global}catch(t){return console.warn(`Error checking if module ${e} is global:`,t),!1}}function yt(e,t){const n=e._config?.modules||[],o=Array.isArray(n)?n:[n];return!o.includes(`!${t}`)&&(!!o.includes(t)||ft(t,e.hass))}function vt(e){if(!i.Ki||0===i.Ki.size)return[];let t=Array.from(i.Ki.keys());const n=e._myModulesSearchQuery;if(n&&n.trim()){const e=n.toLowerCase().trim();t=t.filter((t=>{const n=(0,ct.a7)(t),o=(n.name||t).toLowerCase(),r=(n.description||"").toLowerCase(),i=(n.creator||"").toLowerCase();return o.includes(e)||r.includes(e)||i.includes(e)}))}if(!e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const o=e._myModulesSortOrder||"default",r=(0,h.getAllModulesLastModified)(),a=e=>{const t=r.get(e);if(!t)return 0;const n=new Date(t).getTime();return isNaN(n)?0:n};return t.sort(((t,n)=>{if("default"===t)return-1;if("default"===n)return 1;const r=(0,ct.a7)(t),i=(0,ct.a7)(n),s=yt(e,t),l=yt(e,n);switch(o){case"alphabetical":return(r.name||t).localeCompare(i.name||n,void 0,{sensitivity:"base"});case"default":if(s!==l)return s?-1:1;const e=a(t),o=a(n);return e!==o&&e>0&&o>0?o-e:(r.name||t).localeCompare(i.name||n,void 0,{sensitivity:"base"});case"recent-first":const c=a(t),d=a(n);return c!==d&&c>0&&d>0?d-c:(r.name||t).localeCompare(i.name||n,void 0,{sensitivity:"base"});default:if(s!==l)return s?-1:1;const u=a(t),p=a(n);return u!==p&&u>0&&p>0?p-u:(r.name||t).localeCompare(i.name||n,void 0,{sensitivity:"base"})}})),t}function _t(e){if(void 0===e._selectedModuleTab&&(e._selectedModuleTab=0),void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0===e._myModulesSortOrder)try{const t=localStorage.getItem("bubble-card-modules-sort-order");e._myModulesSortOrder=t||"default"}catch(t){e._myModulesSortOrder="default"}const t=e._myModulesSortOrder||"default";if(void 0===e._forceUnsupportedModules)try{const t=localStorage.getItem(mt);e._forceUnsupportedModules="true"===t}catch(t){e._forceUnsupportedModules=!1}const n="bubble-card-module-editor-tab-group",o="undefined"!=typeof customElements&&void 0!==customElements.get("ha-tab-group")&&void 0!==customElements.get("ha-tab-group-tab")?"ha-tab-group":"undefined"!=typeof customElements&&void 0!==customElements.get("sl-tab-group")?"sl-tab-group":"ha-tabs",r="ha-tab-group"===o,a=r&&(0,s._0)(e.hass,"2026.3");e._modulesLoaded||(0,i.wv)(e).then((()=>{if(e._modulesLoaded=!0,(!h.isBCTAvailableSync||!(0,h.isBCTAvailableSync)())&&function(e){const t={entityFound:!1,hasAttributes:!1,hasModulesAttribute:!1,modulesIsObject:!1,hasLastUpdated:!1,isReady:!1};if(!e||!e.states)return t;const n=e.states[bt];if(!n)return t;t.entityFound=!0;const o=n.attributes||{};return t.hasAttributes=!!n.attributes,"modules"in o&&(t.hasModulesAttribute=!0,t.modulesIsObject=null!==o.modules&&"object"==typeof o.modules),"last_updated"in o&&(t.hasLastUpdated="string"==typeof o.last_updated&&o.last_updated.length>0),t.isReady=t.entityFound&&t.hasModulesAttribute&&t.modulesIsObject&&t.hasLastUpdated,t}(e.hass).isReady){const t=e.hass.states[bt].attributes.modules;t&&t.default&&!0!==t.default.is_global&&gt(e,"default",!0).then((e=>{e?document.dispatchEvent(new CustomEvent("yaml-modules-updated")):console.warn(`Failed to set module 'default' to global in ${bt}.`)}))}e.requestUpdate()}));const l=(0,h.isBCTAvailableSync)();if(e._bctRetryHandle&&l&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),!e.hass||l||e._bctCheckAttempted)e.hass&&l&&!e._bctCheckAttempted&&(e._bctCheckInFlight||(e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,(0,h.ensureBCTProviderAvailable)(e.hass).finally((()=>{e._bctCheckInFlight=!1,(0,h.isBCTAvailableSync)()!==l&&e.requestUpdate()}))));else{const t=Date.now(),n=e._lastBctCheckAt??0,o=n?t-n:1/0,r=n&&o<5e3;if(e._bctCheckInFlight||r){if(r&&!e._bctRetryHandle){const t=Math.max(50,5e3-o);e._bctRetryHandle=setTimeout((()=>{e._bctRetryHandle=null,e.requestUpdate()}),t)}}else e._bctRetryHandle&&(clearTimeout(e._bctRetryHandle),e._bctRetryHandle=null),e._bctCheckInFlight=!0,e._bctCheckAttempted=!0,e._lastBctCheckAt=t,(0,h.ensureBCTProviderAvailable)(e.hass).finally((()=>{e._bctCheckInFlight=!1,e.requestUpdate()}))}if((0,ut.kA)(e),e._workingModuleConfigs||(e._workingModuleConfigs={}),e._modulesLoaded&&!i.Ki.has("default")&&l){const t="default:\n  name: Default\n  version: ''\n  description: Empty and enabled by default. Add your custom styles and/or JS templates here to apply them to all cards by pressing the <ha-icon icon=\"mdi:pencil\"></ha-icon> button above.\n  code: ''\n  is_global: true\n  ";(0,pt.m)(e,t).then((()=>{console.info("Default module created automatically"),e.requestUpdate()})).catch((e=>{console.error("Error creating default module:",e)}))}const d=(0,dt.Xe)(),u=t=>{let n;if("sl-tab-group"===o)n=parseInt(t?.detail?.name??t?.target?.activeTab??t?.detail?.value,10);else if("ha-tab-group"===o){const e=t?.detail??{},o=e.tab??e.target??e.item,r=o?.getAttribute?o.getAttribute("panel"):void 0,i=e.panel??e.tabId??r??e.value??t?.target?.activePanel??t?.target?.activeTab;if("number"==typeof i)n=i;else if("string"==typeof i){const e=ht.indexOf(i);n=-1!==e?e:parseInt(i,10)}}else n=t?.detail?.value??t?.target?.selected;Number.isFinite(n)||(n=0),e._selectedModuleTab=n,e.requestUpdate(),requestAnimationFrame((()=>{(0,ct.XY)(e,!1)}))},p=c.qy`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:puzzle"></ha-icon>
        Modules
        ${d.hasUpdates&&l?c.qy`
          <span class="bubble-badge update-badge" style="margin-left: 8px; font-size: 0.8em; vertical-align: middle; z-index: 5;">
            <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
            ${d.updateCount} update${d.updateCount>1?"s":""} available
          </span>
        `:""}
      </h4>
      <div class="content module-editor-content ${r?"module-editor-content--ha-tab-group":""} ${a?"module-editor-content--ha-tab-group-modern":""}" style="margin: -8px 4px 14px 4px;">
        ${l?"":c.qy`
            <div class="bubble-info warning">
              <h4 class="bubble-section-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                Bubble Card Tools required
              </h4>
              <div class="content">
                ${i.Ki&&i.Ki.size>0||e.hass&&e.hass.states&&e.hass.states[bt]?c.qy`
                  <p><b>Since v3.1.0, to install, edit or delete modules, and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</b></p>
                  <p>Your existing modules will be automatically migrated once Bubble Card Tools is installed.</p>
                `:c.qy`
                  <p><b>No modules detected yet.</b> To create and manage modules and to use the Module Store, please install <a href="https://github.com/Clooos/Bubble-Card-Tools" target="_blank" rel="noopener noreferrer">Bubble Card Tools</a> (everything is explained there).</p>
                `}
              </div>
            </div>
        `}

        <div id="module-editor-top-marker"></div>
        
        ${(()=>{const t=e._selectedModuleTab||0,r=ht[t]??t.toString(),i=t=>{const n=ht.indexOf(t);e._selectedModuleTab=-1!==n?n:parseInt(t,10)||0,e.requestUpdate(),requestAnimationFrame((()=>(0,ct.XY)(e,!1)))};return"ha-tab-group"===o?c.qy`
        <ha-tab-group
          class="module-tabs module-tabs--ha-tab-group ${a?"module-tabs--ha-tab-group-modern":""}"
          id="${n}"
          .activePanel=${r}
          @wa-tab-show=${u}
          @active-panel-changed=${u}
          >
          <ha-tab-group-tab
            slot="nav"
            panel=${ht[0]}
            .active=${r===ht[0]}
            @click=${()=>i(ht[0])}
          >
            <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
            My Modules
          </ha-tab-group-tab>
            <ha-tab-group-tab
            slot="nav"
            panel=${ht[1]}
              .active=${r===ht[1]}
              ?disabled=${!l}
            @click=${()=>i(ht[1])}
          >
            <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
            Module Store
          </ha-tab-group-tab>
        </ha-tab-group>
      `:"sl-tab-group"===o?c.qy`
        <sl-tab-group
          class="module-tabs module-tabs--sl-tab-group"
          id="${n}"
          .selected=${t.toString()}
          @sl-tab-show=${u}
        >
          <sl-tab slot="nav" panel="0">
            <ha-icon icon="mdi:puzzle-heart-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            My Modules
          </sl-tab>
          <sl-tab slot="nav" panel="1" ?disabled=${!l}>
            <ha-icon icon="mdi:puzzle-plus-outline" style="color: inherit !important; margin-right: 8px;"></ha-icon>
            Module Store
          </sl-tab>
          <sl-tab-panel name="0"></sl-tab-panel>
          <sl-tab-panel name="1"></sl-tab-panel>
        </sl-tab-group>
      `:c.qy`
      <ha-tabs
        class="module-tabs module-tabs--ha-tabs"
        .selected=${t}
        @selected-changed=${u}
      >
        <paper-tab>
          <ha-icon icon="mdi:puzzle-heart-outline" style="margin-right: 8px;"></ha-icon>
          My Modules
        </paper-tab>
        <paper-tab class="${l?"":"disabled"}" ?disabled=${!l}>
          <ha-icon icon="mdi:puzzle-plus-outline" style="margin-right: 8px;"></ha-icon>
          Module Store
        </paper-tab>
      </ha-tabs>
    `})()}

        ${0!==e._selectedModuleTab&&l?(0,dt._e)(e):c.qy`
          ${e._showManualImportForm?c.qy`
            <div class="module-editor-form">
              <div class="card-content">
                <h3>
                    <ha-icon icon="mdi:code-json" style="margin: 8px;"></ha-icon>
                    Import Module from YAML
                </h3>
                <p style="margin-top: 0;">Paste the complete YAML code of the module:</p>
                
                <div class="css-editor-container">
                  <ha-code-editor
                    .value=${e._manualYamlContent||""}
                    .mode=${"yaml"}
                    .autofocus=${!0}
                    @value-changed=${t=>{e._manualYamlContent=t.detail.value}}
                  ></ha-code-editor>
                </div>
                
                <div class="module-editor-buttons-container">
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${()=>{e._showManualImportForm=!1,e.requestUpdate()}}
                  >
                    <ha-icon icon="mdi:close"></ha-icon>
                    Cancel
                  </button>
                  <button 
                    class="icon-button" 
                    style="flex: 1;"
                    @click=${async()=>{try{const t=e._manualYamlContent;if(!t||""===t.trim())return void(0,s.rC)(e,"bubble-card-error",{message:"No YAML content provided"});const n=await(0,pt.m)(e,t);e._showManualImportForm=!1,e._manualYamlContent="",n&&n.moduleId&&(e._recentlyToggledModuleId=n.moduleId,setTimeout((()=>{e._recentlyToggledModuleId=null,e.requestUpdate()}),2e3)),e.requestUpdate(),n&&n.moduleId&&requestAnimationFrame((()=>{requestAnimationFrame((()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${n.moduleId}"]`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})}))}))}catch(e){console.error("Error installing manual module:",e)}}}
                  >
                    <ha-icon icon="mdi:content-save"></ha-icon>
                    Import Module
                  </button>
                </div>
              </div>
            </div>
          `:e._showNewModuleForm||e._editingModule?(0,ut.cu)(e):c.qy`
            <!-- Search and Sort Controls -->
            <div class="my-modules-controls">
              <div class="my-modules-top-row">
                <div class="my-modules-search">
                  <ha-textfield
                    label="Search modules"
                    icon
                    .value=${e._myModulesSearchQuery||""}
                    @input=${t=>{e._myModulesSearchQuery=t.target.value,e.requestUpdate()}}
                  >
                    <slot name="prefix" slot="leadingIcon">
                      <ha-icon slot="prefix" icon="mdi:magnify"></ha-icon>
                    </slot>
                  </ha-textfield>
                </div>
                <div class="my-modules-sort-menu">
                  ${Ve({trigger:c.qy`
                      <mwc-icon-button slot="trigger" class="icon-button header sort-trigger" title="Sort modules">
                        <ha-icon icon="mdi:sort"></ha-icon>
                      </mwc-icon-button>
                    `,items:[{type:"checkbox",icon:"mdi:check-circle",label:"Active and recent first",checked:"default"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="default";try{localStorage.setItem("bubble-card-modules-sort-order","default")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:sort-alphabetical-ascending",label:"Alphabetical",checked:"alphabetical"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="alphabetical";try{localStorage.setItem("bubble-card-modules-sort-order","alphabetical")}catch(e){}e.requestUpdate()}},{type:"checkbox",icon:"mdi:clock-outline",label:"Recent first",checked:"recent-first"===t,onClick:t=>{t.stopPropagation(),e._myModulesSortOrder="recent-first";try{localStorage.setItem("bubble-card-modules-sort-order","recent-first")}catch(e){}e.requestUpdate()}}]})}
                </div>
              </div>
              <ha-formfield label="Enable unsupported modules">
                <ha-switch
                  .checked=${!!e._forceUnsupportedModules}
                  @change=${t=>{const n=t.target.checked;e._forceUnsupportedModules=n;try{localStorage.setItem(mt,n?"true":"false")}catch(e){}e.requestUpdate()}}
                ></ha-switch>
              </ha-formfield>
              ${e._forceUnsupportedModules?c.qy`
                <div class="bubble-info warning unsupported-modules-warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Use carefully
                  </h4>
                  <div class="content">
                    <p>Some modules may work despite being marked as unsupported, while others can fail entirely.</p>
                  </div>
                </div>
              `:""}
            </div>
            
            <!-- Installed Modules List -->
            ${vt(e).map((t=>{const{name:n,description:o,formSchema:r,supportedCards:i,unsupportedCard:a,creator:u,moduleLink:p,moduleVersion:b}=(0,ct.a7)(t),h=yt(e,t),m=ft(t,e.hass),g=r&&r.length>0,f="default"===t,y=f||g,v=e._config[t];void 0===e._workingModuleConfigs[t]&&(e._workingModuleConfigs[t]=structuredClone(v??{}));const _=e._workingModuleConfigs[t],w=e._config.card_type??"";let x=!1;x=i&&Array.isArray(i)&&i.length>0?!i.includes(w):a.includes(w);const k=!0===e._forceUnsupportedModules,C=x&&!k&&!h&&!m&&!f,$=r&&r.length>0?e._getProcessedSchema(t,r,_):[],A=d.modules.some((e=>e.id===t))&&l,S=A?d.modules.find((e=>e.id===t)):null,L=e._recentlyToggledModuleId===t;return c.qy`
                <ha-expansion-panel 
                  outlined 
                  class="${C?"disabled":""} ${L?"recently-toggled":""}"
                  data-module-id="${t}"
                  .expanded=${!!e._expandedPanelStates[t]}
                  @expanded-changed=${n=>{n.target.getAttribute("data-module-id")===t&&(e._expandedPanelStates[t]=n.target.expanded,e.requestUpdate())}}
                >
                  <h4 slot="header">
                    <ha-icon
                      icon="${h?"mdi:puzzle-check":"mdi:puzzle-outline"}"
                      style="${h?"opacity: 1; color: var(--info-color) !important;":"opacity: 0.3;"}"
                    ></ha-icon>
                    ${n}
                    <span class="module-badges" style="display: inline-flex; margin-left: auto;">
                      ${A?c.qy`
                        <span class="bubble-badge update-badge">
                          <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                          Update: ${S.newVersion}
                        </span>
                      `:""}
                      ${m?c.qy`
                        <span class="bubble-badge update-badge global-badge">
                          <ha-icon icon="mdi:cards-outline" style="color: var(--primary-text-color) !important;"></ha-icon>
                        </span>
                      `:""}
                    </span>
                  </h4>
                  <div class="content" style="margin-top: 4px;">
                    ${De(e,t,!!e._expandedPanelStates[t],(()=>c.qy`
                      <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="module-toggles-container">
                          <span class="module-toggles-label">
                            APPLY TO
                          </span>
                          <div class="module-toggles">
                            <button 
                              class="bubble-badge toggle-badge ${h?"install-button":"link-button"}"
                              style="${"default"===t&&h?"cursor: default;":""} cursor: pointer;"
                              @click=${()=>{(t=>{const n=t.target,o=n.configValue,r=n.checked;e._config.modules=Array.isArray(e._config.modules)?e._config.modules:[];const i=ft(o,e.hass);r?(e._config.modules=e._config.modules.filter((e=>e!==`!${o}`)),i||e._config.modules.includes(o)||(e._config.modules=[...e._config.modules,o])):i?(e._config.modules.includes(`!${o}`)||(e._config.modules=[...e._config.modules,`!${o}`]),e._config.modules=e._config.modules.filter((e=>e!==o))):e._config.modules=e._config.modules.filter((e=>e!==o));const a=e._myModulesSortOrder||"default",l=!0===e._expandedPanelStates?.[o];"default"===a&&(e._recentlyToggledModuleId=o,l&&(e._expandedPanelStates=e._expandedPanelStates||{},e._expandedPanelStates[o]=!0),setTimeout((()=>{e._recentlyToggledModuleId=null,e.requestUpdate()}),2e3)),(0,s.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),"default"===a&&r&&requestAnimationFrame((()=>{requestAnimationFrame((()=>{const t=e.shadowRoot?.querySelector(`ha-expansion-panel[data-module-id="${o}"]`);if(t){l&&!t.expanded&&(t.expanded=!0);const e=t.getBoundingClientRect();e.top>=0&&e.bottom<=window.innerHeight||t.scrollIntoView({behavior:"smooth",block:"start"})}}))}))})({target:{checked:!h,configValue:t}})}}
                            >
                              <ha-icon icon="mdi:card-outline"></ha-icon>
                              <span>This card</span>
                            </button>
                            
                            <button 
                              class="bubble-badge toggle-badge ${m&&!g?"update-button":"link-button"} ${y||!l?"disabled":""}"
                              style="cursor: pointer; ${y||!l?"opacity: 0.7; cursor: default;":""}"
                              @click=${()=>{y||(async(t,n)=>{await gt(e,t,n)&&(!0===n&&(e._config.modules=Array.isArray(e._config.modules)?e._config.modules.filter((e=>e!==`!${t}`)):[]),(0,s.rC)(e,"config-changed",{config:e._config}),e.requestUpdate(),setTimeout((()=>e.requestUpdate()),100))})(t,!m)}}
                              ?disabled=${y||!l}
                            >
                              <ha-icon icon="mdi:cards-outline"></ha-icon>
                              <span>${"All cards"}</span>
                            </button>
                            ${y&&!f?c.qy`
                              <button 
                                class="bubble-badge toggle-badge"
                                style="padding: 4px;"
                                @click=${n=>{n.stopPropagation(),e._helpModuleId=e._helpModuleId===t?null:t,e.requestUpdate()}}
                                title="Show help"
                              >
                                <ha-icon icon="mdi:help"></ha-icon>
                              </button>
                            `:""}
                          </div>
                        </div>
                        
                        <!-- Module Action Buttons -->
                        <div class="module-actions">
                          ${A?c.qy`
                            <button 
                              class="icon-button update-button" 
                              style="margin: 0 24px;"
                              @click=${()=>{e._selectedModuleTab=1,e._storeSearchQuery=n,e.requestUpdate()}} 
                              title="Update Module"
                            >
                              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
                              Update
                            </button>
                          `:""}
                          <button class="icon-button ${l?"":"disabled"}" @click=${()=>(0,ut.dK)(e,t)} title="Edit Module">
                            <ha-icon icon="mdi:pencil"></ha-icon>
                          </button>
                          ${dt.dn&&(0,dt.dn)(t)||"default"===t?"":c.qy`
                              <button class="icon-button ${l?"":"disabled"}" @click=${()=>(0,ut.s)(e,t)} title="Delete Module">
                                <ha-icon icon="mdi:delete"></ha-icon>
                              </button>
                            `}
                        </div>
                      </div>
                      <hr>

                      ${e._helpModuleId===t?c.qy`
                        <div class="bubble-info">
                          <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Why "All cards" is disabled?
                          </h4>
                          <div class="content">
                            <p>Modules with custom editors cannot be applied globally. This feature is reserved for modules that only apply styles.</p>
                          </div>
                        </div>
                      `:""}

                      ${r.length>0?c.qy`
                          <h4 class="${h?"":"disabled"}">
                            <ha-icon icon="mdi:cog"></ha-icon>
                            Configuration
                          </h4>
                          <ha-form
                            class="${h?"":"disabled"}"
                            .hass=${e.hass}
                            .data=${_}
                            .schema=${$}
                            .computeLabel=${e._computeLabelCallback}
                            .disabled=${!h}
                            @value-changed=${n=>e._valueChangedInHaForm(n,t,r)}
                          ></ha-form>
                          <hr>
                        `:""}

                      <div class="bubble-info" style="display: ${o?"":"none"}">
                        <h4 class="bubble-section-title">
                          <ha-icon icon="mdi:information-outline"></ha-icon>
                            About this module
                        </h4>
                        <div class="content">
                          ${c.qy`<span .innerHTML=${o}></span>`}
                        </div>
                      </div>

                      ${u||p||b?c.qy`
                          <h4 class="version module-version">
                            ${u?`Created by ${u}`:""}
                            <span class="version-number">
                              ${p?c.qy`<a href="${p}" target="_blank" rel="noopener noreferrer">Module link</a> • `:""}
                              ${b||""}
                            </span>
                          </h4>
                          `:""}
                    `))}
                  </div>
                </ha-expansion-panel>
              `}))}
            
            ${0===vt(e).length?c.qy`
              <div class="bubble-info">
                <h4 class="bubble-section-title">
                  <ha-icon icon="mdi:information-outline"></ha-icon>
                  No modules found
                </h4>
                <div class="content">
                  <p>No modules match your search criteria. Try modifying your search or sort order.</p>
                </div>
              </div>
            `:""}
          `}

          <hr>
          ${e._showNewModuleForm||e._showManualImportForm||e._editingModule||!l?"":c.qy`
          <div class="module-editor-buttons-container" style="display: flex;">
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showNewModuleForm=!0,e._showManualImportForm=!1,e._generateUniqueModuleId&&(e._newModuleTemplate.id=e._generateUniqueModuleId("my_module")),e._editingModule={...e._newModuleTemplate},e._config.modules||(e._config.modules=e._config.style_templates||[]),e._config.modules.includes(e._editingModule.id)||(e._config.modules=[...e._config.modules,e._editingModule.id],(0,s.rC)(e,"config-changed",{config:e._config})),e.requestUpdate(),setTimeout((()=>(0,ct.XY)(e)),0)}}>
              <ha-icon icon="mdi:puzzle-plus"></ha-icon>
              Create new Module
            </button>
            
            <button class="icon-button" style="flex: 1;" @click=${()=>{e._showManualImportForm=!0,e._showNewModuleForm=!1,e._manualYamlContent="",e.requestUpdate(),setTimeout((()=>(0,ct.XY)(e)),0)}}>
              <ha-icon icon="mdi:code-json"></ha-icon>
              Import from YAML
            </button>
          </div>
          `}
        `}

        <div class="bubble-info">
          <h4 class="bubble-section-title">
            <ha-icon icon="mdi:information-outline"></ha-icon>
            Modules
          </h4>
          <div class="content">
            <p>Modules are really powerful and the best way to apply <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">custom styles</a> and/or <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> to your cards, without having to copy/paste the same code over and over again.</p>
            <p>This makes it easy to change things like the styles of all your cards, and for advanced users, to modify or add features with a real editor.</p>
            <p><b>If coding isn't your thing</b>, you can also find and install modules made by the community in the <b>Module Store</b>.</p>
          </div>
        </div>
      </div>
    </ha-expansion-panel>
  `;return"sl-tab-group"===o?requestAnimationFrame((()=>{const t=e.shadowRoot?.getElementById(n);if(t&&"function"==typeof t.show){const n=void 0!==e._selectedModuleTab?e._selectedModuleTab.toString():"0";t.show(n)}})):"ha-tab-group"===o&&requestAnimationFrame((()=>{const t=e.shadowRoot?.getElementById(n);if(!t)return;const o=ht[e._selectedModuleTab??0]??(e._selectedModuleTab??0).toString();"activePanel"in t&&(t.activePanel=o),t.setAttribute("active-panel",o)})),p}class wt extends c.WF{_previewStyleApplied=!1;_entityCache={};_cachedAttributeList=null;_cachedAttributeListEntity=null;_expandedPanelStates={};_moduleErrorCache={};_moduleCodeEvaluating=null;_rowsAutoMode=void 0;_autoRowsComputeScheduled=!1;_previewCardRoot=null;_previewCardHost=null;_previewCardScore=-1/0;_cardContextListener=null;_lastMeasuredHeights=null;constructor(){super(),this._expandedPanelStates={},this._cardContextListener=e=>this._handleCardContext(e),window.addEventListener("bubble-card-context",this._cardContextListener)}setConfig(e){const t=this._previewCardHost||this._previewCardRoot?.host||null,n=!!t?.isConnected;this._config={...e},n?this._previewCardScore=-1/0:this._resetPreviewCardReference(),void 0===this._rowsAutoMode&&(this._rowsAutoMode=!0),void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows&&(this._rowsAutoMode=!1)}_deepQuerySelector(e,t,n=6){try{if(!e||n<0)return null;const o=e.querySelector?.(t);if(o)return o;const r=e.querySelectorAll?.("*")||[];for(const e of r)if(e?.shadowRoot){const o=this._deepQuerySelector(e.shadowRoot,t,n-1);if(o)return o}return null}catch(e){return null}}_getEditorPreviewContainer(){try{const e=document.querySelector("body > home-assistant");return e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview")||null}catch(e){return null}}_removeRowsOverrideAndRecalculate=()=>{try{const e={...this._config};if(e.grid_options){const{rows:t,...n}=e.grid_options;Object.keys(n).length>0?e.grid_options=n:delete e.grid_options}delete e.rows,this._rowsAutoMode=!0,this._config=e,(0,s.rC)(this,"config-changed",{config:e}),requestAnimationFrame((()=>{try{this._firstRowsComputation=!0,this._lastMeasuredHeights=null,this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e?this._computeAndApplyRows(e):this._waitForPreviewAndRecompute()}catch(e){}}))}catch(e){console.error("Bubble Card Editor: failed to remove rows override",e)}};_waitForPreviewAndRecompute(e=0){try{const e=this._getBubbleCardFromPreview();if(e){this._setupAutoRowsObserver();const t=this._computeAndApplyRows(e);if(t?.applied)return}}catch(e){}e+1>=40||setTimeout((()=>this._waitForPreviewAndRecompute(e+1)),50)}_scheduleAutoRowsCompute(){this._autoRowsComputeScheduled||(this._autoRowsComputeScheduled=!0,requestAnimationFrame((()=>{this._autoRowsComputeScheduled=!1;try{if(void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows||!1===this._rowsAutoMode)return;this._setupAutoRowsObserver();const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)}catch(e){}})))}static get properties(){return{hass:{},_config:{}}}get _card_type(){return this._config?.card_type||""}get _button_type(){return this._config?.button_type||("pop-up"===this._config?.card_type?"":"switch")}get _entity(){return this._config?.entity||""}get _selectable_attributes(){return["source_list","sound_mode_list","hvac_modes","fan_modes","swing_modes","preset_modes","effect_list"]}updated(e){super.updated(e),e.has("hass")&&(this.listsUpdated=!1,this._entityCache={},this._cachedAttributeList=null,this._cachedAttributeListEntity=null),this._setupAutoRowsObserver()}async firstUpdated(e){if(super.firstUpdated(e),this.hass&&this.hass.loadFragmentTranslation)try{await this.hass.loadFragmentTranslation("config")}catch(e){console.error("Bubble Card Editor: Failed to load 'config' fragment translation",e)}}disconnectedCallback(){super.disconnectedCallback?.();try{this._errorListener&&(window.removeEventListener("bubble-card-error",this._errorListener),this._errorListener=null)}catch(e){}try{this._moduleChangeHandler&&(window.removeEventListener("bubble-card-modules-changed",this._moduleChangeHandler),window.removeEventListener("bubble-card-module-updated",this._moduleChangeHandler),document.removeEventListener("yaml-modules-updated",this._moduleChangeHandler),this._moduleChangeHandler=null,this._moduleChangeListenerAdded=!1)}catch(e){}try{this._storeAutoRefreshTimer&&(clearInterval(this._storeAutoRefreshTimer),this._storeAutoRefreshTimer=null)}catch(e){}try{this._progressInterval&&(clearInterval(this._progressInterval),this._progressInterval=null)}catch(e){}try{this._editorSchemaDebounce&&(clearTimeout(this._editorSchemaDebounce),this._editorSchemaDebounce=null)}catch(e){}try{this._cardContextListener&&(window.removeEventListener("bubble-card-context",this._cardContextListener),this._cardContextListener=null)}catch(e){}wt._resizeObserver&&this._observedElements&&(this._observedElements.forEach((e=>{wt._resizeObserver.unobserve(e),wt._editorInstanceMap.delete(e)})),this._observedElements=[])}render(){if(!this.hass)return c.qy``;const e=Pe(this.hass);if(!this._previewStyleApplied){const e=document.querySelector("body > home-assistant"),t=e?.shadowRoot?.querySelector("hui-dialog-edit-card")?.shadowRoot?.querySelector("ha-dialog > div.content > div.element-preview");t?.style&&"sticky"!==t.style.position&&(t.style.position="sticky",t.style.top="0",t.style.height="calc(100vh - 224px)",t.style.overflowY="auto",this._previewStyleApplied=!0)}this.listsUpdated||(this._initializeLists(e),this.listsUpdated=!0);const t=this.cardTypeList;switch(this.buttonTypeList,this._config?.card_type){case"pop-up":return Le(this);case"button":return le(this);case"sub-buttons":return function(e){const t="pop-up"===e._config.card_type;return c.qy`
        <div class="card-config">
            ${t?"":e.makeDropdown("Card type","card_type",e.cardTypeList)}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:cog"></ha-icon>
                    Card settings
                </h4>
                <div class="content">
                    <ha-formfield>
                        <ha-switch
                            label="Hide main background"
                            .checked="${e._config?.hide_main_background||!1}"
                            .configValue="${"hide_main_background"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Hide main background</label> 
                        </div>
                    </ha-formfield>

                    <ha-formfield>
                        <ha-switch
                            label="Footer mode (Fixed position at bottom)"
                            .checked="${e._config?.footer_mode||!1}"
                            .configValue="${"footer_mode"}"
                            @change="${e._valueChanged}"
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Footer mode (Fixed position at bottom)</label> 
                        </div>
                    </ha-formfield>

                    ${e._config?.footer_mode?c.qy`
                        <div style="margin-top: 16px; padding-left: 16px; border-left: 2px solid var(--divider-color);">
                            <ha-formfield>
                                <ha-switch
                                    label="Full width footer"
                                    .checked="${e._config?.footer_full_width||!1}"
                                    .configValue="${"footer_full_width"}"
                                    @change="${e._valueChanged}"
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Full width footer (100% width)</label> 
                                </div>
                            </ha-formfield>

                            ${e._config?.footer_full_width?"":c.qy`
                                <ha-textfield
                                    label="Custom footer width (px)"
                                    type="number"
                                    value="${e._config?.footer_width||500}"
                                    .configValue="${"footer_width"}"
                                    @input="${e._valueChanged}"
                                    min="200"
                                    max="1200"
                                    step="10"
                                    style="margin-top: 8px;"
                                ></ha-textfield>
                                <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                    Footer will be centered on the page
                                </div>
                            `}

                            <ha-textfield
                                label="Footer bottom distance (px)"
                                type="number"
                                value="${e._config?.footer_bottom_offset||16}"
                                .configValue="${"footer_bottom_offset"}"
                                @input="${e._valueChanged}"
                                min="0"
                                max="100"
                                step="1"
                                style="margin-top: 16px;"
                            ></ha-textfield>
                            <div style="font-size: 0.8em; color: var(--secondary-text-color); margin-top: 4px;">
                                Distance from the bottom of the page (default: 16px)
                            </div>
                        </div>
                    `:""}
                </div>
            </ha-expansion-panel>

            ${e.makeSubButtonPanel()}

            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:palette"></ha-icon>
                    Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${t?"":e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>

            ${e.makeModulesEditor()}

            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Sub-buttons card
                </h4>
                <div class="content">
                    <p>This card can only contain sub-buttons, perfect for displaying information, creating menus, and even a fixed footer menu at the bottom of the page.</p>
                </div>
            </div>

            ${t?"":e.makeVersion()}
        </div>
    `}(this);case"separator":return n=this,c.qy`
    <div class="card-config">
        ${n.makeDropdown("Card type","card_type",n.cardTypeList)}
        <ha-textfield
            label="Name"
            .value="${n._config?.name||""}"
            .configValue="${"name"}"
            @input="${n._valueChanged}"
        ></ha-textfield>
        ${n.makeDropdown("Icon","icon")}
        ${n.makeSubButtonPanel()}
        <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:palette"></ha-icon>
              Styling and layout options
            </h4>
            <div class="content">
                ${n.makeLayoutPanel()}
                ${n.makeStyleEditor()}
            </div>
        </ha-expansion-panel>
        ${n.makeModulesEditor()}
        <div class="bubble-info">
            <h4 class="bubble-section-title">
                <ha-icon icon="mdi:information-outline"></ha-icon>
                Separator card
            </h4>
            <div class="content">
                <p>This card is a simple separator for dividing your pop-up/dashboard into categories or sections. e.g. Lights, Devices, Covers, Settings, Automations...</p>
            </div>
        </div>
        ${n.makeVersion()}
  </div>
`;case"horizontal-buttons-stack":return function(e){if(!e.buttonAdded)for(e.buttonAdded=!0,e.buttonIndex=0;e._config[e.buttonIndex+1+"_link"];)e.buttonIndex++;return c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <div id="buttons-container">
                ${function(e){let t=[];for(let n=1;n<=e.buttonIndex;n++)t.push(c.qy`
            <div class="${n}_button">
                <ha-expansion-panel outlined>
                    <h4 slot="header">
                        <ha-icon icon="mdi:border-radius"></ha-icon>
                        Button ${n} ${e._config[n+"_name"]?"- "+e._config[n+"_name"]:""}
                        <div class="button-container">
                            <button class="icon-button header" @click="${()=>Ee(e,n)}">
                              <ha-icon icon="mdi:delete"></ha-icon>
                            </button>
                        </div>
                    </h4>
                    <div class="content">
                        <ha-textfield
                            label="Link / Hash to pop-up (e.g. #kitchen)"
                            .value="${e._config[n+"_link"]||""}"
                            .configValue="${n}_link"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-textfield
                            label="Optional - Name"
                            .value="${e._config[n+"_name"]||""}"
                            .configValue="${n}_name"
                            @input="${e._valueChanged}"
                        ></ha-textfield>
                        <ha-icon-picker
                            label="Optional - Icon"
                            .value="${e._config[n+"_icon"]||""}"
                            .configValue="${n}_icon"
                            item-label-path="label"
                            item-value-path="value"
                            @value-changed="${e._valueChanged}"
                        ></ha-icon-picker>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_entity",label:"Optional - Light / Light group (For background color)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-form
                            .hass=${e.hass}
                            .data=${e._config}
                            .schema=${[{name:n+"_pir_sensor",label:"Optional - Presence / Occupancy sensor (For button auto order)",selector:{entity:{}}}]}   
                            .computeLabel=${e._computeLabelCallback}
                            @value-changed=${e._valueChanged}
                        ></ha-form>
                        <ha-alert alert-type="info">In fact you can also get the auto order with any entity type, for example you can add light groups to these fields and the order will change based on the last changed states.</ha-alert>
                    </div>
                </ha-expansion-panel>
            </div>
        `);return t}(e)}
            </div>
            <button class="icon-button" @click="${function(){e.buttonIndex++,e.requestUpdate()}}">
                <ha-icon icon="mdi:plus"></ha-icon>
                New button
            </button>
            <hr>
            <ha-formfield .label="Auto order">
                <ha-switch
                    aria-label="Toggle auto order"
                    .checked=${e._config?.auto_order||!1}
                    .configValue="${"auto_order"}"
                    @change=${e._valueChanged}
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Optional - Auto order (Presence/occupancy sensors needed)</label> 
                </div>
            </ha-formfield>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">  
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Horizontal buttons stack styling
                        </h4>
                        <div class="content"> 
                            <ha-textfield
                                label="Optional - Margin (fix centering on some themes) (e.g. 13px)"
                                .value="${e._config?.margin||"7px"}"
                                .configValue="${"margin"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-textfield
                                label="Optional - Width on desktop (100% by default on mobile)"
                                .value="${e._config?.width_desktop||"540px"}"
                                .configValue="${"width_desktop"}"
                                @input="${e._valueChanged}"
                            ></ha-textfield>
                            <ha-formfield .label="Optional - Rise animation (Displays an animation once the page has loaded)">
                                <ha-switch
                                    aria-label="Optional - Rise animation (Displays an animation once the page has loaded)"
                                    .checked=${void 0===e._config?.rise_animation||e._config?.rise_animation}
                                    .configValue="${"rise_animation"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Rise animation (Displays an animation once the page has loaded)</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Highlight current hash / view">
                                <ha-switch
                                    aria-label="Optional - Highlight current hash / view"
                                    .checked=${e._config?.highlight_current_view||!1}
                                    .configValue="${"highlight_current_view"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Highlight current hash / view</label> 
                                </div>
                            </ha-formfield>
                            <ha-formfield .label="Optional - Hide gradient">
                                <ha-switch
                                    aria-label="Optional - Hide gradient"
                                    .checked=${e._config.hide_gradient||!1}
                                    .configValue="${"hide_gradient"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Hide gradient</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Horizontal buttons stack card
                </h4>
                <div class="content">
                    <p>This card is a good companion to the pop-up card, allowing you to open pop-ups or any page of your dashboard. In addition, you can add your motion sensors so that the order of the buttons adapts according to the room you just entered. This card is scrollable, remains visible and acts as a footer.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"cover":return function(e){let t=e._config.button_action||"";return c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["cover"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Open icon","icon_open")}
                    ${e.makeDropdown("Optional - Closed icon","icon_close")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:window-shutter-cog"></ha-icon>
                  Custom services
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Open service (cover.open_cover by default)"
                        .value="${e._config?.open_service||"cover.open_cover"}"
                        .configValue="${"open_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Stop service (cover.stop_cover by default)"
                        .value="${e._config?.stop_service||"cover.stop_cover"}"
                        .configValue="${"stop_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    <ha-textfield
                        label="Optional - Close service (cover.close_cover by default)"
                        .value="${e._config?.close_service||"cover.close_cover"}"
                        .configValue="${"close_service"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content"> 
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Cover styling
                        </h4>
                        <div class="content"> 
                            ${e.makeDropdown("Optional - Arrow down icon","icon_down")}
                            ${e.makeDropdown("Optional - Arrow up icon","icon_up")}
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Cover card
                </h4>
                <div class="content">
                    <p>This card allows you to control your covers.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"media-player":return function(e){let t=e._config.button_action||"";return c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["media_player"]}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content"> 
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Media player settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_volume",label:"Min volume",selector:{number:{step:"any"}}},{name:"max_volume",label:"Max volume",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    <ha-formfield .label="Optional - Hide play/pause button">
                        <ha-switch
                            aria-label="Optional - Hide play/pause button"
                            .checked=${e._config.hide?.play_pause_button||!1}
                            .configValue="${"hide.play_pause_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide play/pause button</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide volume button">
                        <ha-switch
                            aria-label="Optional - Hide volume button"
                            .checked=${e._config.hide?.volume_button||!1}
                            .configValue="${"hide.volume_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide volume button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide next button">
                        <ha-switch
                            aria-label="Optional - Hide next button"
                            .checked=${e._config.hide?.next_button||!1}
                            .configValue="${"hide.next_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide next button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide previous button">
                        <ha-switch
                            aria-label="Optional - Hide previous button"
                            .checked=${e._config.hide?.previous_button||!1}
                            .configValue="${"hide.previous_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide previous button</label>
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Hide power button">
                        <ha-switch
                            aria-label="Optional - Hide power button"
                            .checked=${e._config.hide?.power_button}
                            .configValue="${"hide.power_button"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide power button</label>
                        </div>
                    </ha-formfield>
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Buttons default behavior
                        </h4>
                        <div class="content">
                            <p>Outside of the editor, buttons other than the power button only appear if the media player is turned on.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    <ha-expansion-panel outlined>
                        <h4 slot="header">
                          <ha-icon icon="mdi:palette"></ha-icon>
                          Media player styling
                        </h4>
                        <div class="content"> 
                            <ha-formfield .label="Optional - Blurred media cover in background">
                                <ha-switch
                                    aria-label="Optional - Blurred media cover in background"
                                    .checked=${e._config.cover_background??!1}
                                    .configValue="${"cover_background"}"
                                    @change=${e._valueChanged}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Optional - Blurred media cover in background</label> 
                                </div>
                            </ha-formfield>
                        </div>
                    </ha-expansion-panel>
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Media player card
                </h4>
                <div class="content">
                    <p>This card allows you to control a media player entity.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"empty-column":return function(e){return c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                </div>
            </ha-expansion-panel>
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Empty column card
                </h4>
                <div class="content">
                    <p>Just an empty card to fill any empty column.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"select":return function(e){const t=e._config.entity,n=t?.startsWith("input_select")||t?.startsWith("select")||e._config.select_attribute,o=e.hass.states[t]?.attributes,r=e._selectable_attributes.some((e=>o?.[e])),i=Object.keys(e.hass.states[t]?.attributes||{}).map((n=>{let o=e.hass.states[t];return{label:e.hass.formatEntityAttributeName(o,n),value:n}})).filter((t=>e._selectable_attributes.includes(t.value)));let a=e._config.button_action||"";return c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.inputSelectList}
                .data=${e._config}
                .schema=${[{name:"entity",label:"Entity",selector:{entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            ${r?c.qy`
                <ha-form
                    .hass=${e.hass}
                    .data=${{select_attribute:e._config.select_attribute}}
                    .schema=${[{name:"select_attribute",selector:{select:{options:i,mode:"dropdown"}}}]}
                    .computeLabel=${()=>"Select menu (from attributes)"}
                    @value-changed=${t=>{e._valueChanged({target:{configValue:"select_attribute"},detail:{value:t.detail.value.select_attribute}})}}
                ></ha-form>
            `:""}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content">                   
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on button
                </h4>
                <div class="content">
                    <div style="${n?"opacity: 0.5; pointer-events: none;":""}">
                        ${e.makeActionPanel("Tap action",a,"none","button_action")}
                    </div>
                    ${e.makeActionPanel("Double tap action",a,"none","button_action")}
                    ${e.makeActionPanel("Hold action",a,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Select card
                </h4>
                <div class="content">
                    <p>This card allows you to have a select menu for your entities with selectable options:</p>
                    <ul class="icon-list">
                        <li><ha-icon icon="mdi:format-list-bulleted"></ha-icon>Input Select entities</li>
                        <li><ha-icon icon="mdi:form-dropdown"></ha-icon>Select entities</li>
                        <li><ha-icon icon="mdi:playlist-music"></ha-icon>Media players with&nbsp;<b>source list</b></li>
                        <li><ha-icon icon="mdi:speaker"></ha-icon>Media players with&nbsp;<b>sound mode list</b></li>
                        <li><ha-icon icon="mdi:thermostat"></ha-icon>Climate entities with&nbsp;<b>hvac modes</b></li>
                        <li><ha-icon icon="mdi:fan"></ha-icon>Climate/Fan entities with&nbsp;<b>fan modes</b></li>
                        <li><ha-icon icon="mdi:air-conditioner"></ha-icon>Climate entities with&nbsp;<b>swing modes</b></li>
                        <li><ha-icon icon="mdi:thermostat-auto"></ha-icon>Climate entities with&nbsp;<b>preset modes</b></li>
                        <li><ha-icon icon="mdi:lightbulb-group"></ha-icon>Light entities with&nbsp;<b>effect list</b></li>
                    </ul>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"climate":return function(e){let t=e._config.button_action||"";if("climate"===e._config.card_type&&!e.climateSubButtonsAdded&&e._config.entity){const t=e.hass.states[e._config.entity]?.attributes?.hvac_modes;if(t){const t=(0,Me.mg)(e._config);if(!(Array.isArray(t.main)&&t.main.length>0)){const n={name:"HVAC modes menu",select_attribute:"hvac_modes",state_background:!1,show_arrow:!1};t.main.push(n),e._config.sub_button=t,e._firstRowsComputation=!0}}e.climateSubButtonsAdded=!0}return c.qy`
        <div class="card-config">
        ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
        <ha-form
            .hass=${e.hass}
            .data=${e._config}
            .schema=${[{name:"entity",label:"Entity",selector:{entity:{domain:["climate"]}}}]}   
            .computeLabel=${e._computeLabelCallback}
            @value-changed=${e._valueChanged}
        ></ha-form>
                                <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  Card settings
                </h4>
                <div class="content">     
                    <ha-textfield
                        label="Optional - Name"
                        .value="${e._config?.name||""}"
                        .configValue="${"name"}"
                        @input="${e._valueChanged}"
                    ></ha-textfield>
                    ${e.makeDropdown("Optional - Icon","icon")}
                    ${e.makeShowState()}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:tune-variant"></ha-icon>
                Climate settings
                </h4>
                <div class="content">
                    <ha-form
                        .hass=${e.hass}
                        .data=${e._config}
                        .schema=${[{type:"grid",flatten:!0,schema:[{name:"min_temp",label:"Min temperature",selector:{number:{step:"any"}}},{name:"max_temp",label:"Max temperature",selector:{number:{step:"any"}}},{name:"step",label:"Step",selector:{number:{step:"any"}}}]}]}   
                        .computeLabel=${e._computeLabelCallback}
                        .disabled="${"name"===e._config.button_type}"
                        @value-changed=${e._valueChanged}
                    ></ha-form>
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_low?c.qy`
                        <ha-formfield .label="Optional - Hide target temp low">
                            <ha-switch
                                aria-label="Optional - Hide target temp low"
                                .checked=${e._config.hide_target_temp_low}
                                .configValue="${"hide_target_temp_low"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp low</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    ${e.hass.states[e._config.entity]?.attributes?.target_temp_high?c.qy`
                        <ha-formfield .label="Optional - Hide target temp high">
                            <ha-switch
                                aria-label="Optional - Hide target temp high"
                                .checked=${e._config.hide_target_temp_high}
                                .configValue="${"hide_target_temp_high"}"
                                @change=${e._valueChanged}
                            ></ha-switch>
                            <div class="mdc-form-field">
                                <label class="mdc-label">Optional - Hide target temp high</label> 
                            </div>
                        </ha-formfield>
                    `:""}
                    <ha-formfield .label="Optional - Hide temperature control">
                        <ha-switch
                            aria-label="Optional - Hide temperature control"
                            .checked=${e._config.hide_temperature}
                            .configValue="${"hide_temperature"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Hide temperature control</label> 
                        </div>
                    </ha-formfield>
                    <ha-formfield .label="Optional - Constant background color when ON">
                        <ha-switch
                            aria-label="Optional - Constant background color when ON"
                            .checked=${!0===e._config.state_color}
                            .configValue="${"state_color"}"
                            @change=${e._valueChanged}
                        ></ha-switch>
                        <div class="mdc-form-field">
                            <label class="mdc-label">Optional - Constant background color when ON</label> 
                        </div>
                    </ha-formfield>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on icon
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                Tap action on card
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Double tap action",t,"none","button_action")}
                    ${e.makeActionPanel("Hold action",t,"none","button_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling and layout options
                </h4>
                <div class="content">
                    ${e.makeLayoutPanel()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Climate card
                </h4>
                <div class="content">
                    <p>This card allows you to control your climate entities. You can also add a sub-button that display a dropdown menu for your climate modes (check if you have "Select menu" available when you create a new sub-button).</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case"calendar":return function(e){const t=Pe(e.hass);return e._config.event_action||(e._config.event_action={tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}}),c.qy`
        <div class="card-config">
            ${e.makeDropdown("Card type","card_type",e.cardTypeList)}
            <ha-form
                .hass=${e.hass}
                .data=${e._config}
                .schema=${[{name:"entities",title:t("editor.calendar.entities"),selector:{calendar_entity:{}}}]}   
                .computeLabel=${e._computeLabelCallback}
                @value-changed=${e._valueChanged}
            ></ha-form>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:cog"></ha-icon>
                  ${t("editor.calendar.settings")}
                </h4>
                <div class="content">
                    <ha-form
                      .hass=${e.hass}
                      .data=${e._config}
                      .schema=${[{name:"days",label:t("editor.calendar.days"),title:t("editor.calendar.days"),selector:{number:{step:1,min:1,max:7}}},{name:"limit",label:t("editor.calendar.limit"),title:t("editor.calendar.limit"),selector:{number:{step:1,min:1}}},{name:"show_end",label:t("editor.calendar.show_end"),title:t("editor.calendar.show_end"),selector:{boolean:{}}},{name:"show_progress",label:t("editor.calendar.show_progress"),title:t("editor.calendar.show_progress"),selector:{boolean:{}}},{name:"show_started_events",label:t("editor.calendar.show_started_events"),title:t("editor.calendar.show_started_events"),selector:{boolean:{}},default:!0},{name:"show_place",label:t("editor.calendar.show_place"),title:t("editor.calendar.show_place"),selector:{boolean:{}}},{name:"scrolling_effect",label:t("editor.calendar.text_scrolling"),title:t("editor.calendar.text_scrolling"),selector:{boolean:{}},default:!0}]}   
                      .computeLabel=${e._computeLabelCallback}
                      @value-changed=${e._valueChanged}
                    ></ha-form>
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap"></ha-icon>
                  Tap action on day
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config,"none")}
                    ${e.makeActionPanel("Double tap action")}
                    ${e.makeActionPanel("Hold action")}
                </div>
            </ha-expansion-panel>
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:gesture-tap-button"></ha-icon>
                  Tap action on event
                </h4>
                <div class="content">
                    ${e.makeActionPanel("Tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Double tap action",e._config.event_action,"none","event_action")}
                    ${e.makeActionPanel("Hold action",e._config.event_action,"none","event_action")}
                </div>
            </ha-expansion-panel>
            ${e.makeSubButtonPanel()}
            <ha-expansion-panel outlined>
                <h4 slot="header">
                  <ha-icon icon="mdi:palette"></ha-icon>
                  Styling options
                </h4>
                <div class="content">
                    ${e.makeLayoutOptions()}
                    ${e.makeStyleEditor()}
                </div>
            </ha-expansion-panel>
            ${e.makeModulesEditor()}
            <div class="bubble-info">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:information-outline"></ha-icon>
                    Calendar card
                </h4>
                <div class="content">
                    <p>This card allows you to display a calendar and is scrollable, so you can view additional events.</p>
                </div>
            </div>
            ${e.makeVersion()}
        </div>
    `}(this);case void 0:return c.qy`
                    <div class="card-config">
                        <div class="bubble-info">
                            <h4 class="bubble-section-title">
                                <ha-icon icon="mdi:information-outline"></ha-icon>
                                You need to add a card type first
                            </h4>
                        </div>
                        ${this.makeDropdown("Card type","card_type",t)}
                        <img style="width: 100%; height: auto; border-radius: 24px;" src="https://raw.githubusercontent.com/Clooos/Bubble-Card/main/.github/bubble-card.gif">
                        
                        <div class="bubble-info-container">
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:tag-text"></ha-icon>
                                    Bubble Card ${o}
                                </h4>
                                <div class="content">
                                    <p>If you want to know what's new in this version, you can check the changelog <a href="https://github.com/Clooos/Bubble-Card/releases/tag/${o}" target="_blank" rel="noopener noreferrer"><b>here</b></a>.</p>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:help-circle-outline"></ha-icon>
                                    Resources & Help
                                </h4>
                                <div class="content">
                                    <p>If you have an issue or a question you can find more details in the GitHub documentation. You can also find useful resources and help in these links.</p>
                                    <div class="bubble-badges">
                                        <a href="https://github.com/Clooos/Bubble-Card" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:github"></ha-icon>
                                            <span>Documentation</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/issues" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:bug"></ha-icon>
                                            <span>Issues</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/questions-about-config-custom-styles-and-templates" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:help"></ha-icon>
                                            <span>Config Help</span>
                                        </a>
                                        <a href="https://github.com/Clooos/Bubble-Card/discussions/categories/share-your-custom-styles-templates-and-dashboards" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:wrench"></ha-icon>
                                            <span>Shared Examples</span>
                                        </a>
                                        <a href="https://www.youtube.com/@cloooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:youtube"></ha-icon>
                                            <span>YouTube</span>
                                        </a>
                                        <a href="https://www.reddit.com/r/BubbleCard/" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:reddit"></ha-icon>
                                            <span>r/BubbleCard</span>
                                        </a>
                                        <a href="https://community.home-assistant.io/t/bubble-card-a-minimalist-card-collection-for-home-assistant-with-a-nice-pop-up-touch/609678" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <ha-icon icon="mdi:home-assistant"></ha-icon>
                                            <span>HA Forum</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="bubble-info">
                                <h4 class="bubble-section-title">
                                    <ha-icon icon="mdi:heart-outline"></ha-icon>
                                    Support the Project
                                </h4>
                                <div class="content">
                                    <p>Hi I'm Clooos the Bubble Card developer. I dedicate most of my spare time to making this project the best it can be. So if you appreciate my work, any donation would be a great way to show your support.</p>
                                    <p>Also, check out my Patreon for exclusive custom styles, templates, and modules. Subscribing is probably the best way to support me and keep this project going.</p>
                                    <div class="bubble-badges">
                                        <a href="https://www.buymeacoffee.com/clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="bmc-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379-.197-.069-.42-.098-.57-.241-.152-.143-.196-.366-.231-.572-.065-.378-.125-.756-.192-1.133-.057-.325-.102-.69-.25-.987-.195-.4-.597-.634-.996-.788a5.723 5.723 0 00-.626-.194c-1-.263-2.05-.36-3.077-.416a25.834 25.834 0 00-3.7.062c-.915.083-1.88.184-2.75.5-.318.116-.646.256-.888.501-.297.302-.393.77-.177 1.146.154.267.415.456.692.58.36.162.737.284 1.123.366 1.075.238 2.189.331 3.287.37 1.218.05 2.437.01 3.65-.118.299-.033.598-.073.896-.119.352-.054.578-.513.474-.834-.124-.383-.457-.531-.834-.473-.466.074-.96.108-1.382.146-1.177.08-2.358.082-3.536.006a22.228 22.228 0 01-1.157-.107c-.086-.01-.18-.025-.258-.036-.243-.036-.484-.08-.724-.13-.111-.027-.111-.185 0-.212h.005c.277-.06.557-.108.838-.147h.002c.131-.009.263-.032.394-.048a25.076 25.076 0 013.426-.12c.674.019 1.347.067 2.017.144l.228.031c.267.04.533.088.798.145.392.085.895.113 1.07.542.055.137.08.288.111.431l.319 1.484a.237.237 0 01-.199.284h-.003c-.037.006-.075.01-.112.015a36.704 36.704 0 01-4.743.295 37.059 37.059 0 01-4.699-.304c-.14-.017-.293-.042-.417-.06-.326-.048-.649-.108-.973-.161-.393-.065-.768-.032-1.123.161-.29.16-.527.404-.675.701-.154.316-.199.66-.267 1-.069.34-.176.707-.135 1.056.087.753.613 1.365 1.37 1.502a39.69 39.69 0 0011.343.376.483.483 0 01.535.53l-.071.697-1.018 9.907c-.041.41-.047.832-.125 1.237-.122.637-.553 1.028-1.182 1.171-.577.131-1.165.2-1.756.205-.656.004-1.31-.025-1.966-.022-.699.004-1.556-.06-2.095-.58-.475-.458-.54-1.174-.605-1.793l-.731-7.013-.322-3.094c-.037-.351-.286-.695-.678-.678-.336.015-.718.3-.678.679l.228 2.185.949 9.112c.147 1.344 1.174 2.068 2.446 2.272.742.12 1.503.144 2.257.156.966.016 1.942.053 2.892-.122 1.408-.258 2.465-1.198 2.616-2.657.34-3.332.683-6.663 1.024-9.995l.215-2.087a.484.484 0 01.39-.426c.402-.078.787-.212 1.074-.518.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233-2.416.359-4.866.54-7.308.46-1.748-.06-3.477-.254-5.207-.498-.17-.024-.353-.055-.47-.18-.22-.236-.111-.71-.054-.995.052-.26.152-.609.463-.646.484-.057 1.046.148 1.526.22.577.088 1.156.159 1.737.212 2.48.226 5.002.19 7.472-.14.45-.06.899-.13 1.345-.21.399-.072.84-.206 1.08.206.166.281.188.657.162.974a.544.544 0 01-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a5.884 5.884 0 01-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38 0 0 1.243.065 1.658.065.447 0 1.786-.065 1.786-.065.783 0 1.434-.6 1.499-1.38l.94-9.95a3.996 3.996 0 00-1.322-.238c-.826 0-1.491.284-2.26.613z"/>
                                                </svg>
                                            </div>
                                            <span>Buy me a beer</span>
                                        </a>
                                        <a href="https://www.paypal.com/donate/?business=MRVBV9PLT9ZPL&no_recurring=0&item_name=Hi%2C+I%27m+Clooos+the+creator+of+Bubble+Card.+Thank+you+for+supporting+me+and+my+passion.+You+are+awesome%21+%F0%9F%8D%BB&currency_code=EUR" target="_blank" rel="noopener noreferrer" class="bubble-badge support-badge">
                                            <div class="paypal-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.016 19.198h-4.2a.562.562 0 0 1-.555-.65L5.093.584A.692.692 0 0 1 5.776 0h7.222c3.417 0 5.904 2.488 5.846 5.5-.006.25-.027.5-.066.747A6.794 6.794 0 0 1 12.071 12H8.743a.69.69 0 0 0-.682.583l-.325 2.056-.013.083-.692 4.39-.015.087zM19.79 6.142c-.01.087-.01.175-.023.261a7.76 7.76 0 0 1-7.695 6.598H9.007l-.283 1.795-.013.083-.692 4.39-.134.843-.014.088H6.86l-.497 3.15a.562.562 0 0 0 .555.65h3.612c.34 0 .63-.249.683-.585l.952-6.031a.692.692 0 0 1 .683-.584h2.126a6.793 6.793 0 0 0 6.707-5.752c.306-1.95-.466-3.744-1.89-4.906z"/>
                                                </svg>
                                            </div>
                                            <span>PayPal</span>
                                        </a>
                                        <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer" class="bubble-badge">
                                            <div class="patreon-icon">
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>
                                                </svg>
                                            </div>
                                            <span>Patreon</span>
                                        </a>
                                    </div>
                                    <div class="creator-message">
                                        <a href="https://www.reddit.com/user/Clooooos/" target="_blank" rel="noopener noreferrer">
                                            <img src="https://avatars.githubusercontent.com/u/36499953" alt="Clooos" class="creator-avatar">
                                        </a>
                                        <p class="bubble-thank-you">Thank you for being part of this awesome community! Cheers from Belgium! 🍻</p>
                                    </div>
                                </div>
                            </div>
                            ${this.makeVersion()}
                        </div>
                    </div>
                `}var n}makeLayoutOptions(){const e=window.isSectionView?"large":"normal",t="separator"===this._config.card_type?"0.8":"1",n="pop-up"!==this._config.card_type&&(this._config.card_layout?.includes("large")||window.isSectionView&&!this._config.card_layout);return c.qy`
            ${this._renderConditionalContent(this._config.grid_options?.rows,c.qy`
                <div class="bubble-info warning">
                    <h4 class="bubble-section-title">
                        <ha-icon icon="mdi:alert-outline"></ha-icon>
                        Rows are already set in the "Layout" options
                    </h4>
                    <div class="content">
                        <p>If you want to change the rows, you can do it in the "Layout" options at the top of this editor. Or remove it from your config in YAML to enable this option.</p>
                    </div>
                </div>
            `)}
            ${this._renderConditionalContent(n,c.qy`
                <ha-textfield
                    label="Rows (Card height)"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    step="0.1"
                    .disabled="${this._config.grid_options?.rows}"
                    .value="${this._config.rows||this._config.grid_options?.rows||t}"
                    .configValue="${"rows"}"
                    @input="${this._valueChanged}"
                ></ha-textfield>
                <br>
            `)}
            <div class="bubble-info warning">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Card layout deprecation
                </h4>
                <div class="content">
                    <p><b>The card layout options are deprecated, but still available for backwards compatibility.</b> Please use the new sub-button groups and layout options instead for better flexibility.</p>
                </div>
            </div>
            <ha-form
                .hass=${this.hass}
                .data=${{card_layout:this._config.card_layout||e}}
                .schema=${[{name:"card_layout",selector:{select:{options:[{label:"Normal (previous default)",value:"normal"},{label:"Large",value:"large"},{label:"Large with 2 sub-buttons rows",value:"large-2-rows"},{label:"Large with sub-buttons in a grid (Layout: min. 2 rows)",value:"large-sub-buttons-grid"}],mode:"dropdown"}}}]}
                .computeLabel=${()=>"pop-up"===this._config.card_type?"Header card layout":"Card layout"}
                @value-changed=${e=>{this._valueChanged({target:{configValue:"card_layout"},detail:{value:e.detail.value.card_layout}})}}
            ></ha-form>
        `}makeLayoutPanel(){return c.qy`
            <ha-expansion-panel outlined>
                <h4 slot="header">
                    <ha-icon icon="mdi:view-grid"></ha-icon>
                    Layout
                </h4>
                <div class="content">
                    ${this.makeLayoutOptions()}
                </div>
            </ha-expansion-panel>
        `}makeShowState(e=this._config,t="",n=!1,o){const r=e?.entity??this._config.entity??"",i="name"===this._config.button_type,a=r?.startsWith("input_select")||r?.startsWith("select")||e.select_attribute,s="sub_button"===n||"string"==typeof n&&n.startsWith("sub_button"),l=s&&("select"===e?.sub_button_type||!e?.sub_button_type&&a),d=e?.show_attribute?Object.keys(this.hass.states[r]?.attributes||{}).map((e=>{let t=this.hass.states[r];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})):[];return c.qy`

            <ha-formfield .label="Text scrolling effect">
                <ha-switch
                    aria-label="Text scrolling effect"
                    .checked=${e?.scrolling_effect??!0}
                    .configValue="${t+"scrolling_effect"}"
                    @change="${n?e=>this._arrayValueChange(o,{scrolling_effect:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Text scrolling effect</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(s,c.qy`
                <ha-formfield .label="Show background">
                    <ha-switch
                        aria-label="Show background when entity is on"
                        .checked=${e?.show_background??!0}
                        @change="${e=>this._arrayValueChange(o,{show_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show background when entity is on</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(s&&(e?.show_background??!0),c.qy`
                <ha-formfield .label="Background color based on state">
                    <ha-switch
                        aria-label="Background color based on state"
                        .checked=${e?.state_background??!0}
                        @change="${e=>this._arrayValueChange(o,{state_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on state</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(s&&(e?.state_background??!0)&&r.startsWith("light"),c.qy`
                <ha-formfield .label="Background color based on light color">
                    <ha-switch
                        aria-label="Background color based on light color"
                        .checked=${e?.light_background??!0}
                        @change="${e=>this._arrayValueChange(o,{light_background:e.target.checked},n)}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Background color based on light color</label> 
                    </div>
                </ha-formfield>
            `)}
            ${this._renderConditionalContent(!s&&r.startsWith("light"),c.qy`
                <ha-formfield .label="Use accent color instead of light color">
                    <ha-switch
                        aria-label="Use accent color instead of light color"
                        .checked=${e?.use_accent_color??!1}
                        .configValue="${t+"use_accent_color"}"
                        @change="${this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Use accent color instead of light color</label> 
                    </div>
                </ha-formfield>
            `)}
            <ha-formfield .label="Show icon">
                <ha-switch
                    aria-label="Show icon"
                    .checked=${e?.show_icon??!0}
                    .configValue="${t+"show_icon"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_icon:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show icon</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Prioritize icon over entity picture">
                <ha-switch
                    aria-label="Prioritize icon over entity picture"
                    .checked=${e?.force_icon??!1}
                    .configValue="${t+"force_icon"}"
                    .disabled="${i&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{force_icon:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Prioritize icon over entity picture</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show name">
                <ha-switch
                    aria-label="Show name"
                    .checked=${e?.show_name??!s}
                    .configValue="${t+"show_name"}"
                    @change="${n?e=>this._arrayValueChange(o,{show_name:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show name</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show entity state">
                <ha-switch
                    aria-label="Show entity state"
                    .checked="${e?.show_state??"state"===e.button_type}"
                    .configValue="${t+"show_state"}"
                    .disabled="${i&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_state:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show entity state</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last changed">
                <ha-switch
                    aria-label="Show last changed"
                    .checked=${e?.show_last_changed}
                    .configValue="${t+"show_last_changed"}"
                    .disabled="${i&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_changed:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last changed</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show last updated">
                <ha-switch
                    aria-label="Show last updated"
                    .checked=${e?.show_last_updated}
                    .configValue="${t+"show_last_updated"}"
                    .disabled="${i&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_last_updated:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show last updated</label> 
                </div>
            </ha-formfield>
            <ha-formfield .label="Show attribute">
                <ha-switch
                    aria-label="Show attribute"
                    .checked=${e?.show_attribute}
                    .configValue="${t+"show_attribute"}"
                    .disabled="${i&&!s}"
                    @change="${n?e=>this._arrayValueChange(o,{show_attribute:e.target.checked},n):this._valueChanged}"
                ></ha-switch>
                <div class="mdc-form-field">
                    <label class="mdc-label">Show attribute</label> 
                </div>
            </ha-formfield>
            ${this._renderConditionalContent(e?.show_attribute,c.qy`
                <ha-form
                    .hass=${this.hass}
                    .data=${{attribute:e?.attribute}}
                    .schema=${[{name:"attribute",selector:{select:{options:d,mode:"dropdown"}}}]}
                    .disabled=${i&&!s}
                    .computeLabel=${()=>"Attribute to show"}
                    @value-changed=${e=>{const r=e.detail.value.attribute;n?this._arrayValueChange(o,{attribute:r},n):this._valueChanged({target:{configValue:t+"attribute"},detail:{value:r}})}}
                ></ha-form>
            `)}
            ${this._renderConditionalContent(l,c.qy`
                <ha-formfield .label="Show arrow (Select entities only)">
                    <ha-switch
                        aria-label="Show arrow (Select entities only)"
                        .checked=${e?.show_arrow??!0}
                        .configValue="${t+"show_arrow"}"
                        @change="${n?e=>this._arrayValueChange(o,{show_arrow:e.target.checked},n):this._valueChanged}"
                    ></ha-switch>
                    <div class="mdc-form-field">
                        <label class="mdc-label">Show arrow (Select menu only)</label> 
                    </div>
                </ha-formfield>
            `)}
        `}makeDropdown(e,t,n,o,r){if(e.includes("icon")||e.includes("Icon"))return c.qy`
                <div class="ha-icon-picker">
                    <ha-icon-picker
                        label="${e}"
                        .value="${this._config[t]||r}"
                        .configValue="${t}"
                        item-value-path="icon"
                        item-label-path="icon"
                        @value-changed="${this._valueChanged}"
                    ></ha-icon-picker>
                </div>
            `;if(e.includes("Entity")||e.includes("entity")){let n=[],r=[];switch(this._config.card_type){case"button":default:break;case"cover":n=["cover"];break;case"climate":n=["climate"];break;case"media-player":n=["media_player"];break;case"select":n=["input_select","select"],this._config.select_attribute&&(n=[])}return c.qy`
                <ha-entity-picker
                    label="${e}"
                    .hass="${this.hass}"
                    .value="${this._config[t]}"
                    .configValue="${t}"
                    .includeDomains="${n.length?n:void 0}"
                    .excludeDomains="${r.length?r:void 0}"
                    .disabled="${o}"
                    allow-custom-entity
                    @value-changed="${this._valueChanged}"
                ></ha-entity-picker>
            `}return c.qy`
                <ha-form
                    .hass=${this.hass}
                    .data=${{[t]:this["_"+t]}}
                    .schema=${[{name:t,selector:{select:{options:n,mode:"dropdown"}}}]}
                    .disabled=${o}
                    .computeLabel=${()=>e}
                    @value-changed=${e=>{const n=e.detail.value[t];this._valueChanged({target:{configValue:t},detail:{value:n}})}}
                ></ha-form>
          `}_renderConditionalContent(e,t){return e?t:c.qy``}makeActionPanel(e,t=this._config,n,o,r=this._config){const i="Tap action"===e?"mdi:gesture-tap":"Double tap action"===e?"mdi:gesture-double-tap":"Hold action"===e?"mdi:gesture-tap-hold":"mdi:gesture-tap",a="Tap action"===e?"tap_action":"Double tap action"===e?"double_tap_action":"Hold action"===e?"hold_action":"Open action"===e?"open_action":"close_action",s=o?`action_panel_${o}_${r}_${a}`:`action_panel_config_${a}`;let l;try{l="Tap action"===e?t.tap_action:"Double tap action"===e?t.double_tap_action:"Hold action"===e?t.hold_action:"Open action"===e?t.open_action:t.close_action}catch{}const d=t===this._config;return n||(n=d&&"Tap action"===e?"name"!==this._config.button_type?"more-info":"none":d?"none":""),c.qy`
            <ha-expansion-panel 
                outlined
                @expanded-changed=${e=>{this._expandedPanelStates[s]=e.target.expanded,this.requestUpdate()}}
            >
                <h4 slot="header">
                    <ha-icon icon="${i}"></ha-icon>
                    ${e}
                </h4>
                <div class="content"> 
                    ${De(this,s,!!this._expandedPanelStates[s],(()=>c.qy`
                        <ha-form
                            .hass=${this.hass}
                            .data=${t}
                            .configValue="${(o?o+".":"")+(parseInt(r)==r?r+".":"")+a}" 
                            .schema=${[{name:a,label:e,selector:{ui_action:{default_action:n}}}]}  
                            .computeLabel=${this._computeLabelCallback}
                            @value-changed=${e=>this._ActionChanged(e,o,r)}
                        ></ha-form>
                        ${"call-service"===l?.action||"perform-action"===l?.action?c.qy`
                            <ha-formfield .label="Use default entity">
                                <ha-switch
                                    aria-label="Use default entity"
                                    .configValue="${(o?o+".":"")+(parseInt(r)==r?r+".":"")+a+".default_entity"}" 
                                    .checked=${"entity"===l?.target?.entity_id}
                                     @change=${this._updateActionsEntity}
                                ></ha-switch>
                                <div class="mdc-form-field">
                                    <label class="mdc-label">Use default entity</label> 
                                </div>
                            </ha-formfield>
                        `:""}
                    `))}
                </div>
            </ha-expansion-panel>
        `}makeSubButtonPanel(){return void 0===(e=this)._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=et()||null),function(e){if(Array.isArray(e._config.sub_button)){const t=(0,Me.zD)(e._config.sub_button);try{e._config.sub_button=t}catch(n){e._config={...e._config,sub_button:t}}}else if(!e._config.sub_button||!(0,Me.lc)(e._config.sub_button)){const t=(0,Me.mg)(e._config);try{e._config.sub_button=t}catch(n){e._config={...e._config,sub_button:t}}}const t=(0,Me.mg)(e._config);void 0===e._expandedPanelStates&&(e._expandedPanelStates={}),void 0!==e._clipboardButton&&null!==e._clipboardButton||(e._clipboardButton=et()||null);const n="sub-buttons"===e._config.card_type,o="pop-up"===e._config.card_type,r=["cover","media-player","climate"].includes(e._config.card_type),i=e._config.main_buttons_position||"default",a=e._config.main_buttons_alignment||"end",s="bottom"===i,l=e._config.main_buttons_full_width??!!s,d=Boolean(window.isSectionView),u=(e._config.card_layout||"").includes("large"),p=Object.prototype.hasOwnProperty.call(e._config,"card_layout"),b=p&&"normal"===e._config.card_layout,h=Array.isArray(t.bottom)&&t.bottom.some((e=>!!e)),m=void 0!==e._config.rows&&null!==e._config.rows&&""!==e._config.rows,g=void 0!==e._config.grid_options?.rows&&null!==e._config.grid_options?.rows&&""!==e._config.grid_options?.rows,f=m&&!1===e._rowsAutoMode,y=g||f;return c.qy`
    <ha-expansion-panel outlined>
      <h4 slot="header">
        <ha-icon icon="mdi:shape-square-rounded-plus"></ha-icon>
        Sub-buttons editor
      </h4>
      <div class="content">
        ${y?c.qy`
          <div class="bubble-info warning">
            <h4 class="bubble-section-title">
              <ha-icon icon="mdi:alert-outline"></ha-icon>
              Rows configuration detected
            </h4>
            <div class="content">
              <p>The card height (rows) is explicitly set in your configuration. This will prevent automatic row adjustments when sub-buttons are added (for example, when adding bottom sub-buttons). Click the button below to remove the override and let Bubble Card auto-calculate the rows.</p>
              <button class="icon-button" @click="${e._removeRowsOverrideAndRecalculate}">
                <ha-icon icon="mdi:autorenew"></ha-icon>
                Remove override and auto-calculate
              </button>
            </div>
          </div>
        `:""}
        ${r?c.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:circle-outline"></ha-icon>
              Card specific buttons
            </h4>
            <div class="content">
              <ha-form
                  .hass=${e.hass}
                  .data=${{main_buttons_position:i}}
                  .schema=${[{name:"main_buttons_position",selector:{select:{options:[{label:"Default",value:"default"},{label:"Bottom (fixed)",value:"bottom"}],mode:"dropdown"}}}]}
                  .computeLabel=${()=>"Main buttons position"}
                  @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_position"},detail:{value:t.detail.value.main_buttons_position}})}}
              ></ha-form>
              ${e._renderConditionalContent(s,c.qy`
                  <ha-formfield .label="Full width action buttons">
                      <ha-switch
                          aria-label="Full width action buttons"
                          .checked="${l}"
                          .configValue="${"main_buttons_full_width"}"
                          @change="${e._valueChanged}"
                      ></ha-switch>
                      <div class="mdc-form-field">
                          <label class="mdc-label">Full width action buttons</label> 
                      </div>
                  </ha-formfield>
                  ${e._renderConditionalContent(!l,c.qy`
                      <ha-form
                          .hass=${e.hass}
                          .data=${{main_buttons_alignment:a}}
                          .schema=${[{name:"main_buttons_alignment",selector:{select:{options:[{label:"Right (default)",value:"end"},{label:"Center",value:"center"},{label:"Left",value:"start"},{label:"Space between",value:"space-between"}],mode:"dropdown"}}}]}
                          .computeLabel=${()=>"Main buttons alignment"}
                          @value-changed=${t=>{e._valueChanged({target:{configValue:"main_buttons_alignment"},detail:{value:t.detail.value.main_buttons_alignment}})}}
                      ></ha-form>
                  `)}
              `)}
            </div>
          </ha-expansion-panel>
        `:""}
        
        ${o?c.qy`
          ${lt(e,"main")}
          ${st(e,"main")}
        `:n?"":c.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-up-circle-outline"></ha-icon>
              Main sub-buttons (top)
            </h4>
            <div class="content">
              ${lt(e,"main")}
              ${st(e,"main")}
            </div>
          </ha-expansion-panel>
        `}

        ${n?c.qy`
          ${lt(e,"bottom")}
          ${st(e,"bottom")}
        `:o?"":c.qy`
          <ha-expansion-panel outlined>
            <h4 slot="header">
              <ha-icon icon="mdi:arrow-down-circle-outline"></ha-icon>
              Bottom sub-buttons
            </h4>
            <div class="content">
              ${lt(e,"bottom")}
              ${e._renderConditionalContent(!u&&!h&&(b||!d&&!p),c.qy`
                <div class="bubble-info warning">
                  <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-outline"></ha-icon>
                    Bottom sub-buttons and layout
                  </h4>
                  <div class="content">
                    <p>Adding bottom sub-buttons will automatically switch this card to the "Large" layout (this is the new recommended layout). This notice will disappear once you add bottom sub-buttons.</p>
                  </div>
                </div>
              `)}
              ${st(e,"bottom")}
            </div>
          </ha-expansion-panel>
        `}

        ${c.qy`
    <div class="bubble-info">
      <h4 class="bubble-section-title">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        Sub-buttons
      </h4>
      <div class="content">
        <p>This editor allows you to add customized sub-buttons to your card. Sub-buttons support three types:</p>
        <ul class="icon-list">
          <li><ha-icon icon="mdi:gesture-tap"></ha-icon><p><b>Default (button)</b> - Standard button with tap actions</p></li>
          <li><ha-icon icon="mdi:tune-variant"></ha-icon><p><b>Slider</b> - Control or display numeric values (brightness, volume, temperature, etc.)</p></li>
          <li><ha-icon icon="mdi:form-dropdown"></ha-icon><p><b>Dropdown / Select</b> - Dropdown menu for selectable entities</p></li>
        </ul>
        <p>Use <b>Slider</b> sub-buttons to control light brightness, media player volume, or climate temperature. Use <b>Dropdown</b> sub-buttons to select media sources, HVAC modes, or light effects. Use <b>Default</b> buttons for simple on/off controls or custom actions.</p>
        <p>You can organize sub-buttons individually or group them together. Groups can be arranged inline (side by side) or in rows (stacked vertically), and buttons within groups can be displayed inline or in a column layout.</p>
      </div>
    </div>
  `}
      </div>
    </ha-expansion-panel>
  `}(e);var e}makeVersion(){return c.qy`
            <h4 class="version">
                Bubble Card 
                <span class="version-number">
                    ${o}
                </span>
            </h4>
        `}makeStyleEditor(){const e="style_editor_panel";return c.qy`
            <ha-expansion-panel 
                outlined
                @expanded-changed="${t=>{this._expandedPanelStates[e]=t.target.expanded,this.requestUpdate()}}"
            >
                <h4 slot="header">
                    <ha-icon icon="mdi:code-braces"></ha-icon>
                    Custom styles & JS templates
                </h4>
                <div class="content">
                    ${De(this,e,!!this._expandedPanelStates[e],(()=>c.qy`
                        <div class="code-editor">
                            <ha-code-editor
                                mode="yaml"
                                autofocus
                                autocomplete-entities
                                autocomplete-icons
                                .hass=${this.hass}
                                .value=${this._config.styles}
                                .configValue="${"styles"}"
                                @value-changed=${e=>{this._valueChanged(e),this._clearCurrentCardError()}}
                            ></ha-code-editor>
                        </div>
                        ${this.createErrorConsole()}
                    `))}
                    <div class="bubble-info">
                        <h4 class="bubble-section-title">
                            <ha-icon icon="mdi:information-outline"></ha-icon>
                            Custom styles & JS templates
                        </h4>
                        <div class="content">
                            <p>For advanced users, you can edit the CSS style of this card in the above code editor. More information and examples <a href="https://github.com/Clooos/Bubble-Card#styling" target="_blank" rel="noopener noreferrer">here</a>. You don't need to add <code>styles: |</code> (only used in YAML mode). You can also add <a href="https://github.com/Clooos/Bubble-Card#templates" target="_blank" rel="noopener noreferrer">JS templates</a> (Jinja is not supported).</p>
                            <p><b>Check out my <a href="https://www.patreon.com/Clooos" target="_blank" rel="noopener noreferrer">Patreon</a></b> for more custom styles, templates, and modules. This is also the best way to show your support to my project.</p>
                        </div>
                    </div>
                </div>
            </ha-expansion-panel>
        `}_clearCurrentCardError(){if(!window.bubbleCardErrorRegistry)return;const e=this._config?.card_type,t=this._config?.entity;if(!e||!t)return;const n=`${e}_${t}`;window.bubbleCardErrorRegistry[n]&&(delete window.bubbleCardErrorRegistry[n],this.errorMessage="",this.errorSource="",this.requestUpdate())}_clearCurrentModuleError(e){this._moduleCodeEvaluating=e;try{window.bubbleCardErrorRegistry&&e&&Object.keys(window.bubbleCardErrorRegistry).forEach((t=>{window.bubbleCardErrorRegistry[t]?.moduleId===e&&delete window.bubbleCardErrorRegistry[t]}))}catch(e){}this.errorMessage="",this.errorSource="",this.requestUpdate()}createErrorConsole(e=this){window.bubbleCardErrorRegistry||(window.bubbleCardErrorRegistry={});const t=()=>{if(void 0!==e._editingModule&&e._editingModule){const t=e._editingModule.id;if(!t)return e.errorMessage="",void(e.errorSource="");let n=!1;window.bubbleCardErrorRegistry&&Object.values(window.bubbleCardErrorRegistry).forEach((o=>{o.moduleId===t&&(e.errorMessage=o.message,e.errorSource=o.source,n=!0)})),n||(e.errorMessage="",e.errorSource="")}else{const t=e._config?.card_type,n=e._config?.entity;if(!t||!n)return e.errorMessage="",void(e.errorSource="");const o=`${t}_${n}`;if(window.bubbleCardErrorRegistry&&window.bubbleCardErrorRegistry[o]){const t=window.bubbleCardErrorRegistry[o];e.errorMessage=t.message,e.errorSource=t.source}else e.errorMessage="",e.errorSource=""}e.requestUpdate()};return e._errorListener||(e._errorListener=e=>{const n=e.detail;if(n&&"object"==typeof n&&n.context){const{message:e,context:t}=n;if(e){if(t.cardType&&t.entityId){const n=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[n]={message:e,source:"module"===t.sourceType?`Module ('${t.moduleId}')`:"Card Configuration (styles section)",cardType:t.cardType,entityId:t.entityId,moduleId:"module"===t.sourceType?t.moduleId:null}}}else if("module"===t.sourceType&&t.moduleId)Object.keys(window.bubbleCardErrorRegistry).forEach((e=>{window.bubbleCardErrorRegistry[e]?.moduleId===t.moduleId&&delete window.bubbleCardErrorRegistry[e]}));else if(t.cardType&&t.entityId){const e=`${t.cardType}_${t.entityId}`;window.bubbleCardErrorRegistry[e]&&delete window.bubbleCardErrorRegistry[e]}}t()},window.addEventListener("bubble-card-error",e._errorListener)),t(),c.qy`
            <div class="bubble-info error" 
                style="display: ${e.errorMessage?"":"none"}; margin-bottom: 8px;">
                <h4 class="bubble-section-title">
                    <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                    Error in JS template
                </h4>
                <div class="content">
                    <p>${e.errorMessage}</p>
                    ${e._editingModule&&"object"==typeof e._editingModule&&e._editingModule.id?c.qy`<hr><span class="helper-text" style="margin: 0;">
                        <ha-icon icon="mdi:information-outline"></ha-icon>
                        JS template errors can sometimes be delayed in the Module Editor.
                    </span>`:""}
                </div>
            </div>
        `}_getProcessedSchema(e,t,n){const o=structuredClone(t);return this._updateAttributeSelectors(o,n,e)}_valueChangedInHaForm(e,t,n){let o=e.detail.value;if(o&&"object"==typeof o&&!Array.isArray(o)){const e=Object.keys(o);e.length>0&&e.every((e=>!isNaN(parseInt(e,10))))&&(o=e.sort(((e,t)=>parseInt(e,10)-parseInt(t,10))).map((e=>o[e])))}this._workingModuleConfigs&&(this._workingModuleConfigs[t]=o);const r=this._cleanEmpty(o,t);(0,s.rC)(this,"config-changed",{config:{...this._config,[t]:r}}),this.requestUpdate()}_cleanEmpty(e,t){if(Array.isArray(e))return e.map((e=>this._cleanEmpty(e,void 0))).filter((e=>!this._isEmpty(e)));if(e&&"object"==typeof e){const t={};return Object.keys(e).forEach((n=>{const o=this._cleanEmpty(e[n],n);this._isEmpty(o)||(t[n]=o)})),Object.keys(t).length>0?t:void 0}return"string"!=typeof e||""!==e||"state"===t?e:void 0}_isEmpty(e){return null==e||(Array.isArray(e)?0===e.length:"object"==typeof e&&0===Object.keys(e).length)}_updateAttributeSelectors=(e,t,n=void 0)=>{const o=(e,t,n)=>{const o=Array.isArray(e)?e:Object.entries(e||{}).map((([e,t])=>({name:e,...t})));if(Array.isArray(t)&&t.length>0){const r=t.find((e=>e&&"object"==typeof e&&e.entity))??t.find((e=>e&&"object"==typeof e))??t[0],i=this._updateAttributeSelectors(o,r,n);return Array.isArray(e)?i:i.reduce(((e,t)=>{const{name:n,...o}=t;return e[n]=o,e}),{})}const r=this._updateAttributeSelectors(o,t,n);return Array.isArray(e)?r:r.reduce(((e,t)=>{const{name:n,...o}=t;return e[n]=o,e}),{})};let r=n;return e.map((e=>{const n=((e,t)=>{if(e&&void 0!==t)return Array.isArray(e)?e:e[t]})(t,e.name);if(e.selector&&e.selector.entity&&(r=((e,t)=>{if(!e)return t;if("string"==typeof e)return e||t;if(Array.isArray(e)){const n=e.find((e=>e&&e.entity||"string"==typeof e));return"string"==typeof n?n||t:n?.entity??t}return e.entity??t})(n,void 0)),e.selector&&e.selector.attribute&&(e.selector.attribute.entity_id=r),Array.isArray(e.schema))e.schema=this._updateAttributeSelectors(e.schema,n,r);else if(e.selector&&e.selector.object&&e.selector.object.fields){const t=e.selector.object;e.selector={bc_object:{...t,fields:o(t.fields,n,r)}}}return e}))};makeModulesEditor(){return _t(this)}makeModuleStore(){return(0,dt._e)(this)}_normalizeConfigValuePath(e){const t=e=>null==e?"":String(e).trim();if("string"==typeof e||"number"==typeof e)return t(e);if(Array.isArray(e))return e.map((e=>t(e))).filter(Boolean).join(".");if(e&&"object"==typeof e){if(Array.isArray(e.path))return e.path.map((e=>t(e))).filter(Boolean).join(".");if(void 0!==e.path)return t(e.path);if(void 0!==e.key)return t(e.key)}return""}_valueChanged(e){const t=e.target,n=e.detail;let o,r=!1;const i=Boolean(t&&t.configValue&&Object.prototype.hasOwnProperty.call(t,"value")&&void 0===t.value);if("HA-SWITCH"===t.tagName?(o=t.checked,r=!0):void 0!==t.value?(o="string"==typeof t.value?t.value.replace(",","."):t.value,r=!0):i?(o=t.value,r=!0):void 0!==n?.value&&(r=!0),!r)return;if("string"==typeof o&&(o.endsWith(".")||"-"===o))return;let a={...this._config};try{const{configValue:r,checked:i}=t;if(r){const i=this._normalizeConfigValuePath(r);if(!i)return void console.warn("Bubble Card Editor: skipped update due to invalid configValue",r);const s=i.split(".").filter(Boolean);if(!s.length)return void console.warn("Bubble Card Editor: empty config path provided",r);if(s.length>1){let r=a,i="";for(let e=0;e<s.length-1;e++){const t=s[e];i=i?`${i}.${t}`:t,r[t]||(r[t]={}),r[t]={...r[t]},r=r[t]}const l=s[s.length-1];"input"===e.type?r[l]=o:n&&r[l]!==n.value?r[l]=n.value:"HA-SWITCH"===t.tagName&&(r[l]=o)}else{const r=s[0];"input"===e.type?a[r]=o:n&&a[r]!==n.value?a[r]=n.value:"HA-SWITCH"===t.tagName&&(a[r]=o)}}else a=n.value}catch(e){if(t.configValue&&n)a[t.configValue]=n.value;else{if(!n)return;a=n.value}}try{if("rows"===t?.configValue){const e=a?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&delete a.rows}else if("grid_options.rows"===t?.configValue){const e=a?.grid_options?.rows,t=null==e||""===e;this._rowsAutoMode=t,t&&a?.grid_options&&delete a.grid_options.rows}"card_type"===t?.configValue&&"calendar"===n?.value&&(void 0!==a.rows&&null!==a.rows&&""!==a.rows||(a.rows=1))}catch(e){}this._config=a,(0,s.rC)(this,"config-changed",{config:a})}_arrayValueChange(e,t,n){if(this._config.sub_button&&!this.subButtonJustAdded)return this.subButtonJustAdded=!0,void setTimeout((()=>this._arrayValueChange(e,t,n)),10);const o=(e,t,n,o)=>{const r=String(t).split(".").filter(Boolean);let i=e;for(let e=0;e<r.length-1;e++){const t=r[e],n=r[e+1],o=!isNaN(parseInt(n,10));void 0!==i[t]&&null!==i[t]||(i[t]=o?[]:{}),Array.isArray(i[t])?i[t]=[...i[t]]:i[t]={...i[t]},i=i[t]}const a=r[r.length-1],s=Array.isArray(i[a])?i[a]:i[a]?[...i[a]]:[],l=Array.isArray(s)?[...s]:[],c=l[n]||{};return l[n]={...c,...o},i[a]=l,l[n]};let r;if("string"==typeof n&&n.includes("."))r=o(this._config,n,e,t);else{this._config[n]=this._config[n]||[];const o=[...this._config[n]],i=o[e]||{};o[e]={...i,...t},this._config[n]=o,r=o[e]}try{if("string"==typeof n&&n.startsWith("sub_button")){const t=r||{},i=t.entity??this._config.entity??"",a="string"==typeof i&&(i.startsWith("input_select")||i.startsWith("select")),s=!!t.select_attribute;if(!t.sub_button_type&&(a||s))if("string"==typeof n&&n.includes("."))o(this._config,n,e,{sub_button_type:"select"});else{const t=[...this._config[n]],o=t[e]||{};t[e]={...o,sub_button_type:"select"},this._config[n]=t}}}catch{}(0,s.rC)(this,"config-changed",{config:this._config}),this.requestUpdate();try{const e=String(n||"");("sub_button"===e||e.startsWith("sub_button"))&&this._scheduleAutoRowsCompute("sub_button changed")}catch(e){}}_ActionChanged(e,t,n){var o=!1;try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id[0]&&(o=!0)}catch{}try{e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&e.detail.value[e.currentTarget.__schema[0].name].target&&"entity"===e.detail.value[e.currentTarget.__schema[0].name].target.entity_id&&(o=!0)}catch{}if(o&&e.currentTarget&&e.currentTarget.__schema&&e.currentTarget.__schema[0]&&e.detail.value[e.currentTarget.__schema[0].name]&&(e.detail.value[e.currentTarget.__schema[0].name].action="call-service",null!=e.detail.value[e.currentTarget.__schema[0].name].perform_action&&(e.detail.value[e.currentTarget.__schema[0].name].service=""+e.detail.value[e.currentTarget.__schema[0].name].perform_action,delete e.detail.value[e.currentTarget.__schema[0].name].perform_action)),"button_action"===t||"event_action"===t)this._config[t]=e.detail.value;else if("string"==typeof t&&t.startsWith("sub_button")){const o=e.detail.value,r=(e,t,n,o)=>{const r=String(t).split(".").filter(Boolean);let i=e;for(let e=0;e<r.length-1;e++){const t=r[e],n=r[e+1],o=!isNaN(parseInt(n,10));void 0!==i[t]&&null!==i[t]||(i[t]=o?[]:{}),Array.isArray(i[t])?i[t]=[...i[t]]:i[t]={...i[t]},i=i[t]}const a=r[r.length-1],s=Array.isArray(i[a])?i[a]:i[a]?[...i[a]]:[],l=Array.isArray(s)?[...s]:[],c=l[n]||{};return l[n]={...c,...o},i[a]=l,l[n]};if(t.includes("."))r(this._config,t,n,o);else{this._config[t]=this._config[t]||[];const e=[...this._config[t]],r=e[n]||{};e[n]={...r,...o},this._config[t]=e}}else t?this._config[t]=e.detail.value:this._config=e.detail.value;(0,s.rC)(this,"config-changed",{config:this._config})}_updateActionsEntity(e){let t=JSON.parse(JSON.stringify(this._config));const n=e.target.configValue.split(".");let o=0;for(o=0;o<n.length-2;o++)t=t[n[o]]?t[n[o]]:{};e.target.checked?t[n[o]]?t[n[o]].target={entity_id:"entity"}:t[n[o]]={target:{entity_id:"entity"}}:t[n[o]]&&"entity"===t[n[o]].target?.entity_id&&(t[n[o]].target={});const r=n[n.length-2],i=t&&"object"==typeof t&&t[r]?t[r]:{},a={value:{[r]:i}},s={__schema:[{name:r}]},l={...e,detail:a,currentTarget:s};let c=null,d=null;if("button_action"===n[0]||"event_action"===n[0])c=n[0];else if(n.length>=4){const e=n[n.length-3];c=n.slice(0,n.length-3).join(".");const t=parseInt(e,10);d=isNaN(t)?null:t}else if(n.length>=3){c=n[0];const e=parseInt(n[1],10);d=isNaN(e)?null:e}this._ActionChanged(l,c,d)}_computeLabelCallback=e=>e.label;_conditionChanged(e,t,n){if(e.stopPropagation(),n){this._config[n]=this._config[n]||[];let o=[...this._config[n]];o[t]=o[t]||{};const r=e.detail.value;o[t]={...o[t],visibility:r},this._config[n]=o}else if("pop-up"===this._config.card_type){const t=e.detail.value;this._config={...this._config,trigger:t}}(0,s.rC)(this,"config-changed",{config:this._config}),this.requestUpdate()}static get styles(){return c.AH`
        ${(0,c.iz)('div {\r\n  display: grid;\r\n  grid-gap: 12px;\r\n}\r\n\r\n/* Card type dropdown separator */\r\n.card-config > ha-form:first-of-type::after {\r\n  content: "";\r\n  position: relative;\r\n  background-color: var(--background-color, var(--secondary-background-color));\r\n  display: block;\r\n  width: 100%;\r\n  height: 1px;\r\n  top: 12px;\r\n  margin-bottom: 12px !important;\r\n  opacity: 0.6;\r\n}\r\n\r\n#add-button {\r\n  margin: 0 0 14px 0;\r\n  color: var(--text-primary-color);\r\n  width: 100%;\r\n  height: 32px;\r\n  border-radius: 16px;\r\n  border: none;\r\n  background-color: var(--accent-color);\r\n  cursor: pointer;\r\n}\r\n\r\np {\r\n  margin-bottom: 4px;\r\n}\r\n\r\nul {\r\n  margin: 0px 14px !important;\r\n  padding-left: 0px !important;\r\n}\r\n\r\nha-icon, a, p, button, h4 {\r\n  color: var(--primary-text-color) !important;\r\n}\r\n\r\nhr {\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 1px;\r\n  border: none;\r\n  background-color: var(--outline-color);\r\n  margin: 8px 0 0 0;\r\n}\r\n\r\ncode, code-block {\r\n  background: rgba(0,120,180,0.3);\r\n  color: var(--primary-text-color);\r\n  background-blend-mode: darken;\r\n  padding: 1px 3px;\r\n  border-radius: 6px;\r\n  font-size: 13px;\r\n}\r\n\r\ncode-block {\r\n  display: grid;\r\n  width: 100%;\r\n  padding: 0;\r\n  max-height: 285px;\r\n  overflow: auto;\r\n}\r\n\r\ncode-block pre {\r\n  white-space: pre;\r\n  overflow: auto;\r\n  margin: 8px;\r\n}\r\n\r\ncode-block.with-i pre {\r\n  white-space: pre-line;\r\n  overflow: auto;\r\n  margin: 8px;\r\n}\r\n\r\ncode-block.with-i pre > i {\r\n  white-space: pre;\r\n  font-style: normal;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n  margin: 14px 0;\r\n}\r\n\r\nimg.example {\r\n  padding: 32px;\r\n  box-sizing: border-box;\r\n  background: rgba(0, 120, 180, 0.8);\r\n  border-radius: 6px;\r\n}\r\n\r\n.button-header {\r\n  height: auto;\r\n  width: 100%;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  margin: 0 8px;\r\n}\r\n\r\n.button-number {\r\n  display: inline-flex;\r\n  width: auto;\r\n}\r\n\r\n.remove-button {\r\n  display: inline-flex;\r\n  border-radius: 50%;\r\n  width: 24px;\r\n  height: 24px;\r\n  text-align: center;\r\n  line-height: 24px;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.content {\r\n  margin: 12px 4px 14px 4px;\r\n}\r\n\r\nh4 > ha-icon {\r\n  margin: 8px 12px 8px 8px;\r\n}\r\n\r\nha-expansion-panel h4:not(.version) {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 10px 0;\r\n}\r\n\r\nha-expansion-panel > .content, ha-expansion-panel .content {\r\n  overflow-x: visible !important;\r\n  display: flex;\r\n  flex-direction: column; \r\n}\r\n\r\nha-form {\r\n  --expansion-panel-summary-padding: 2px 14px;\r\n}\r\n\r\nha-textfield {\r\n  width: 100%;\r\n}\r\n\r\nh3 {\r\n  margin: 4px 0;\r\n}\r\n\r\n.code-editor {\r\n  overflow: scroll;\r\n}\r\n\r\n.icon-button {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 8px;\r\n  padding: 8px 16px;\r\n  background: rgba(0,120,180,0.5);\r\n  border: none;\r\n  cursor: pointer;\r\n  margin: 0;\r\n  border-radius: 32px;\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.icon-button:hover {\r\n  background: rgba(0,120,180,0.7);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.icon-button:active {\r\n  background: rgba(0,120,180,0.9);\r\n}\r\n\r\n.icon-button.header {\r\n  background: none;\r\n  padding: 0;\r\n  margin: 0 4px;\r\n}\r\n\r\n.button-container {\r\n  display: flex;\r\n  margin-left: auto !important;\r\n}\r\n\r\nha-card-conditions-editor {\r\n  margin-top: -12px;\r\n}\r\n\r\n.disabled {\r\n  opacity: 0.5; \r\n  pointer-events: none;\r\n}\r\n\r\n.version {\r\n  font-size: 12px !important;\r\n  color: #fff;\r\n  background: rgba(0,0,0,0.1);\r\n  padding: 8px 16px;\r\n  border-radius: 32px;\r\n}\r\n\r\n.module-version {\r\n  margin: 0;\r\n}\r\n\r\n.version-number {\r\n  font-size: 10px;\r\n  background: rgba(0,120,180,1);\r\n  padding: 0px 8px;\r\n  border-radius: 12px;\r\n  margin-right: -6px;\r\n  float: right;\r\n  color: white;\r\n}\r\n\r\n.version-number a {\r\n  color: white !important;\r\n}\r\n\r\n.bubble-info-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.bubble-section-title {\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  margin-bottom: -6px !important;\r\n  color: var(--primary-text-color) !important;\r\n  display: flex;\r\n  align-items: center;\r\n  position: relative;\r\n  padding-left: 4px;\r\n}\r\n\r\n.bubble-section-title ha-icon {\r\n  color: var(--info-color) !important;\r\n  margin: 8px 8px 8px 0;\r\n  line-height: normal !important;\r\n}\r\n\r\n.bubble-section-title::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 3px;\r\n  background: var(--primary-color);\r\n  border-radius: 2px;\r\n}\r\n\r\n.bubble-info {\r\n  padding: 0 0 14px;\r\n  position: relative;\r\n  overflow: auto;\r\n}\r\n\r\n.bubble-info .content {\r\n  margin: 0;\r\n  padding: 0 18px;\r\n}\r\n\r\n.bubble-info::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: var(--info-color);\r\n  border-radius: 4px;\r\n  opacity: 0.12;\r\n  pointer-events: none;\r\n}\r\n\r\n.bubble-info.warning::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.bubble-info.warning .bubble-section-title::before {\r\n  background: var(--warning-color);\r\n}\r\n\r\n.bubble-info.warning .bubble-section-title ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.bubble-info.error::before {\r\n  background-color: var(--error-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.bubble-info.error .bubble-section-title::before {\r\n  background: var(--error-color);\r\n}\r\n\r\n.bubble-info.error .bubble-section-title ha-icon {\r\n  color: var(--error-color) !important;\r\n}\r\n\r\n.bubble-info h4 {\r\n  margin: 8px 0 0 0;\r\n  padding: 0 18px;\r\n}\r\n\r\n.bubble-info p {\r\n  margin: 0;\r\n}\r\n\r\n.bubble-info * {\r\n  z-index: 0;\r\n}\r\n\r\n.bubble-section-title + p {\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\n\r\n.bubble-badges {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 8px;\r\n  margin: 4px 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.bubble-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  padding: 4px 8px;\r\n  text-decoration: none;\r\n  font-size: 13px;\r\n  transition: all 0.2s ease;\r\n  box-shadow: none;\r\n  height: 26px;\r\n  border: none;\r\n  position: relative;\r\n  border-radius: 18px;\r\n  white-space: nowrap;\r\n  background-color: var(--mdc-text-field-disabled-line-color);\r\n}\r\n\r\n.bubble-badge:hover {\r\n  transform: translateY(-1px);\r\n  background: rgba(0, 120, 180, 0.5);\r\n}\r\n\r\n.bubble-badge ha-icon {\r\n  color: var(--primary-text-color) !important;\r\n  --mdc-icon-size: 16px;\r\n  line-height: normal;\r\n}\r\n\r\n.paypal-icon, .bmc-icon, .patreon-icon {\r\n  width: 15px;\r\n  height: 15px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.paypal-icon svg, .bmc-icon svg, .patreon-icon svg {\r\n  width: 100%;\r\n  height: 100%;\r\n  fill: var(--primary-text-color);\r\n}\r\n\r\n.bubble-thank-you {\r\n  margin: 0 !important;\r\n  padding: 8px !important;\r\n  opacity: 0.8;\r\n}\r\n\r\n.creator-message {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.creator-message a {\r\n  display: flex;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.creator-message a:hover {\r\n  transform: scale(0.95);\r\n}\r\n\r\n.creator-avatar {\r\n  min-width: 42px;\r\n  height: 42px;\r\n  border-radius: 50%;\r\n  margin: 0;\r\n}\r\n\r\nul.icon-list {\r\n  list-style-type: none;\r\n  padding-left: 0 !important;\r\n  margin-left: 0 !important;\r\n}\r\n\r\nul.icon-list li {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 6px;\r\n  line-height: 24px;\r\n}\r\n\r\nul.icon-list li ha-icon {\r\n  min-width: 24px;\r\n  margin-right: 8px;\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\n.layout-subsection {\r\n  display: grid;\r\n  grid-gap: 12px;\r\n  padding: 12px 0 0;\r\n}\r\n\r\n.layout-subtitle {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  color: var(--primary-text-color);\r\n}\r\n\r\n.layout-subtitle ha-icon {\r\n  margin-right: 8px;\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\n.element-actions {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.no-bg {\r\n  background: none;\r\n  box-shadow: none;\r\n}\r\n\r\nmwc-list-item[disabled] ha-icon {\r\n  opacity: 0.38;\r\n}\r\n\r\n* {\r\n  line-height: 20px !important;\r\n}:root {\r\n  --rgb-primary-color: 3, 169, 244;\r\n  --rgb-info-color: 33, 150, 243;\r\n  --rgb-warning-color: 255, 152, 0;\r\n  --rgb-error-color: 244, 67, 54;\r\n  --rgb-success-color: 76, 175, 80;\r\n}\r\n\r\n/* Module Store Styles */\r\n.module-store {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.store-header {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n  background-color: var(--card-background-color);\r\n  border-radius: 16px;\r\n  padding: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.store-header-top {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.store-header-title {\r\n  font-size: 16px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.store-header-title ha-icon {\r\n  color: var(--info-color) !important;\r\n}\r\n\r\n.store-refresh-button {\r\n  color: var(--primary-text-color);\r\n  border-radius: 50%;\r\n  width: 36px;\r\n  height: 36px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease;\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n}\r\n\r\n.store-refresh-button:hover {\r\n  transform: rotate(180deg);\r\n  box-shadow: var(--shadow-elevation-2dp);\r\n}\r\n\r\n.store-search {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  border-radius: 32px;\r\n  overflow: hidden;\r\n}\r\n\r\n.store-search ha-textfield {\r\n  flex-grow: 1;\r\n}\r\n\r\n.store-filters {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n  gap: 12px;\r\n  margin-top: 4px;\r\n}\r\n\r\n.store-filter-type {\r\n  flex-grow: 1;\r\n  min-width: 180px;\r\n}\r\n\r\n.store-modules {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.store-module-card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border-radius: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  overflow: hidden;\r\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\r\n  background-color: var(--card-background-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.store-module-card:hover {\r\n  transform: translateY(-3px);\r\n  box-shadow: var(--shadow-elevation-3dp);\r\n}\r\n\r\n.store-module-header {\r\n  position: relative;\r\n  padding: 16px 16px 0 0;\r\n  margin: 0;\r\n  border-radius: 0;\r\n  border-bottom: 1px solid var(--divider-color);\r\n}\r\n\r\n.store-module-header::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: var(--info-color);\r\n  border-radius: 0;\r\n  opacity: 0.12;\r\n  pointer-events: none;\r\n}\r\n\r\n.store-module-header.warning::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.15;\r\n}\r\n\r\n.store-module-header .bubble-section-title {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  padding-left: 0;\r\n  margin-bottom: 0px !important;\r\n  position: relative;\r\n}\r\n\r\n.store-module-header .bubble-section-title::before {\r\n  content: "";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  width: 3px;\r\n  background: var(--primary-color);\r\n  border-radius: 0 2px 2px 0;\r\n}\r\n\r\n.store-module-header.warning .bubble-section-title::before {\r\n  background: var(--warning-color);\r\n}\r\n\r\n.store-module-header .bubble-section-title ha-icon {\r\n  margin: 0 0 0 19px;\r\n  color: var(--info-color) !important;\r\n}\r\n\r\n.store-module-header.warning .bubble-section-title ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.store-module-header h3 {\r\n  margin: 0;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n}\r\n\r\n.store-module-meta {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 0 0 4px 18px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.store-module-badges {\r\n  margin: 0;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.store-module-author {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n  font-size: 14px;\r\n  color: var(--secondary-text-color);\r\n}\r\n\r\n.author-avatar {\r\n  width: 24px;\r\n  height: 24px;\r\n  border-radius: 50%;\r\n  margin: 0;\r\n  border: 1px solid rgba(0,0,0,0.1);\r\n}\r\n\r\n.store-module-content {\r\n  padding: 0 16px;\r\n  background-color: var(--card-background-color);\r\n  grid-gap: 8px;\r\n}\r\n\r\n.module-description {\r\n  margin: 0 0 -4px;\r\n  font-size: 14px;\r\n  font-weight: 300;\r\n}\r\n\r\n.module-preview-image {\r\n  border-radius: 12px;\r\n  max-height: 220px;\r\n  width: 100%;\r\n  object-fit: contain;\r\n  background-color: var(--secondary-background-color);\r\n  margin: 0;\r\n  transition: all 0.3s ease;\r\n}\r\n\r\n.module-preview-container {\r\n  position: relative;\r\n  margin-top: 8px;\r\n  overflow: hidden;\r\n  border-radius: 12px;\r\n}\r\n\r\n.module-preview-zoom-btn {\r\n  position: absolute;\r\n  bottom: 8px;\r\n  right: 8px;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  opacity: 0.8;\r\n  transition: all 0.2s ease;\r\n  z-index: 3;\r\n  box-shadow: 0 2px 5px rgba(0,0,0,0.2);\r\n}\r\n\r\n.module-preview-zoom-btn:hover {\r\n  opacity: 1;\r\n  transform: scale(1.1);\r\n}\r\n\r\n.module-preview-zoom-btn ha-icon {\r\n  color: white !important;\r\n  --mdc-icon-size: 20px;\r\n}\r\n\r\n.module-preview-fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n  z-index: 999;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: zoom-out;\r\n}\r\n\r\n.module-preview-fullscreen img {\r\n  max-width: 90%;\r\n  max-height: 90%;\r\n  object-fit: contain;\r\n  margin: 0;\r\n  border-radius: 6px;\r\n}\r\n\r\n.compatibility-warning {\r\n  margin-top: -8px;\r\n  margin-bottom: 12px;\r\n}\r\n\r\n.compatibility-warning ha-icon {\r\n  color: var(--warning-color) !important;\r\n}\r\n\r\n.store-module-actions {\r\n  margin: 12px 0 12px;\r\n  justify-content: flex-start;\r\n  border-top: 1px solid var(--divider-color);\r\n  padding-top: 12px;\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.store-module-card.incompatible .store-module-actions {\r\n  opacity: 0.8;\r\n}\r\n\r\n.bubble-badge.install-button {\r\n  background-color: rgba(33, 150, 243, 0.7);\r\n  color: var(--primary-color);\r\n  font-weight: 500;\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n}\r\n\r\n.bubble-badge.install-button span {\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.bubble-badge.install-button ha-icon {\r\n  transition: color 0.2s ease;\r\n}\r\n\r\n.bubble-badge.install-button:hover {\r\n  transform: translateY(-1px);\r\n  background-color: rgba(33, 150, 243, 0.9);\r\n}\r\n\r\n.bubble-badge.install-button:hover span,\r\n.bubble-badge.install-button:hover ha-icon {\r\n  color: white !important;\r\n}\r\n\r\n.bubble-badge.update-button {\r\n  background-color: rgb(0, 220, 80);\r\n  font-weight: 500;\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n  cursor: pointer;\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-button ha-icon {\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-button:hover {\r\n  transform: translateY(-1px);\r\n  background-color: rgb(0, 180, 60);\r\n}\r\n\r\n.bubble-badge.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.bubble-badge.installed-button {\r\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n  color: var(--success-color, var(--primary-color));\r\n  opacity: 0.8;\r\n  cursor: default;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.bubble-badge.installed-button span {\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n}\r\n\r\n.bubble-badge.installed-button:hover {\r\n  transform: none;\r\n  background: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n}\r\n\r\n.bubble-badge.link-button {\r\n  background-color: rgba(0, 0, 0, 0.06);\r\n  color: var(--secondary-text-color);\r\n  transition: all 0.2s ease;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 6px;\r\n}\r\n\r\n.bubble-badge.link-button:hover {\r\n  background-color: rgba(0, 0, 0, 0.12);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n.bubble-badge.update-badge {\r\n  background-color: rgb(0, 220, 80);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n  margin-left: auto !important;\r\n  color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bubble-badge.update-badge ha-icon {\r\n  color: rgba(0, 0, 0, 0.8) !important;\r\n}\r\n\r\n.bubble-badge.update-badge:hover {\r\n  transform: none;\r\n}\r\n\r\n.bubble-badge.version-badge {\r\n  background-color: rgba(0, 0, 0, 0.08);\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.incompatible-badge {\r\n  background-color: rgba(var(--rgb-warning-color), 0.12);\r\n  color: var(--warning-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.incompatible-badge::before {\r\n  background-color: var(--warning-color);\r\n  opacity: 0.3;\r\n}\r\n\r\n.bubble-badge.new-badge {\r\n  background-color: rgba(var(--rgb-success-color, 0, 170, 0), 0.12);\r\n  color: var(--primary-text-color);\r\n  font-weight: 500;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.new-badge::before {\r\n  background-color: var(--success-color, #28a745);\r\n  opacity: 0.2;\r\n}\r\n\r\n.bubble-badge.yaml-badge {\r\n  background-color: rgba(255, 167, 38, 0.45);\r\n  color: var(--primary-text-color);\r\n  font-weight: 700;\r\n  font-size: 11px;\r\n  padding: 2px 8px;\r\n  height: 20px;\r\n}\r\n\r\n.bubble-badge.yaml-badge::before {\r\n  background-color: #ff9800;\r\n  opacity: 0.5;\r\n}\r\n\r\n.version-container {\r\n  display: flex;\r\n  align-items: center;\r\n  margin-left: auto;\r\n  gap: 8px;\r\n}\r\n\r\n/* Material tabs */\r\nha-tabs, ha-tab-group, sl-tab-group {\r\n  margin-bottom: 16px;\r\n  --primary-tab-color: var(--primary-color);\r\n  --secondary-tab-color: var(--secondary-text-color);\r\n  border-bottom: 1px solid var(--divider-color);\r\n  position: sticky;\r\n  background-color: var(--card-background-color);\r\n  z-index: 4;\r\n  padding-top: 16px;\r\n  margin-top: -24px;\r\n  top: -40px;\r\n}\r\n\r\n/* Keep legacy spacing for older versions.\r\n   Apply these offsets only on modern Home Assistant layouts. */\r\n.module-tabs--ha-tab-group.module-tabs--ha-tab-group-modern {\r\n  top: -16px;\r\n}\r\n\r\nsl-tab-group {\r\n  border-bottom: none;\r\n}\r\n\r\nha-tab-group {\r\n  display: block;\r\n}\r\n\r\nha-tab-group-tab {\r\n  flex-grow: 1;\r\n  text-align: center;\r\n}\r\n\r\nha-tab-group-tab[active] {\r\n  color: var(--primary-text-color);\r\n  opacity: 1;\r\n}\r\n\r\nha-tab-group-tab[disabled] {\r\n  opacity: 0.4;\r\n  pointer-events: none;\r\n}\r\n.module-editor-top-marker {\r\n  display: flex;\r\n  position: relative;\r\n  top: 0;\r\n}\r\n\r\npaper-tab {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  min-width: 120px;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  transition: all 0.3s ease;\r\n  position: relative;\r\n  color: var(--secondary-tab-color);\r\n  padding: 0 16px;\r\n  opacity: 0.8;\r\n}\r\n\r\npaper-tab[aria-selected="true"] {\r\n  color: var(--primary-text-color);\r\n  opacity: 1;\r\n}\r\n\r\npaper-tab.disabled,\r\npaper-tab[disabled] {\r\n  opacity: 0.4;\r\n  pointer-events: none;\r\n}\r\n\r\npaper-tab ha-icon {\r\n  margin-right: 8px;\r\n  color: var(--secondary-tab-color);\r\n}\r\n\r\npaper-tab[aria-selected="true"] ha-icon {\r\n  color: var(--primary-tab-color) !important;\r\n}\r\n\r\npaper-tab::after {\r\n  content: \'\';\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 50%;\r\n  width: 0;\r\n  height: 3px;\r\n  background-color: var(--primary-tab-color);\r\n  transition: all 0.3s ease;\r\n  transform: translateX(-50%);\r\n  border-radius: 3px 3px 0 0;\r\n  opacity: 0;\r\n}\r\n\r\npaper-tab[aria-selected="true"]::after {\r\n  width: 80%;\r\n  opacity: 1;\r\n}\r\n\r\npaper-tab:hover {\r\n  background-color: rgba(var(--rgb-primary-color), 0.05);\r\n}\r\n\r\n/* Tab ripple effect */\r\npaper-ripple {\r\n  color: var(--primary-tab-color);\r\n  opacity: 0.1;\r\n}\r\n\r\n#tabs {\r\n  border-radius: 8px 8px 0 0;\r\n  overflow: hidden;\r\n  background-color: var(--card-background-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  paper-tab {\r\n    min-width: auto;\r\n    padding: 0 12px;\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\nsl-tab {\r\n  flex: 1;\r\n  text-align: center;\r\n}\r\n\r\n.bubble-badge.hoverable {\r\n  cursor: pointer !important;\r\n  transition: transform 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease;\r\n}\r\n\r\n.bubble-badge.hoverable:active {\r\n  transform: translateY(0);\r\n}\r\n\r\n/* Back to top button */\r\n.back-to-top-button {\r\n  position: sticky;\r\n  bottom: 0px;\r\n  right: 20px;\r\n  width: 44px;\r\n  height: 44px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: pointer;\r\n  box-shadow: 0 2px 6px rgba(0,0,0,0.3);\r\n  transition: all 0.2s ease;\r\n  z-index: 4;\r\n  margin-left: auto;\r\n  margin-top: 16px;\r\n}\r\n\r\n.back-to-top-button:hover {\r\n  transform: translateY(-4px);\r\n  box-shadow: 0 4px 10px rgba(0,0,0,0.3);\r\n}\r\n\r\n.back-to-top-button:active {\r\n  transform: translateY(0);\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.3);\r\n}\r\n\r\n.back-to-top-button ha-icon {\r\n  color: white !important;\r\n  --mdc-icon-size: 22px;\r\n}\r\n\r\n.store-loading {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 42px;\r\n  gap: 24px;\r\n  position: relative;\r\n  background-color: var(--card-background-color);\r\n  border-radius: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n  overflow: hidden;\r\n}\r\n\r\n.bubble-loading-icon {\r\n  position: relative;\r\n  width: 64px;\r\n  height: 64px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.icon-center-wrapper {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 6px;\r\n  right: 0;\r\n  bottom: 0;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  z-index: 2;\r\n}\r\n\r\n.bubble-loading-icon ha-icon {\r\n  --mdc-icon-size: 26px;\r\n  color: var(--primary-color);\r\n  opacity: 0.9;\r\n  animation: pulseAnimation 3s ease-in-out infinite;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.bubble-loading-orbit {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 2px dashed rgba(var(--rgb-primary-color), 0.2);\r\n  border-radius: 50%;\r\n  animation: orbitRotation 8s linear infinite;\r\n}\r\n\r\n.bubble-loading-satellite {\r\n  position: absolute;\r\n  width: 12px;\r\n  height: 12px;\r\n  background-color: var(--info-color);\r\n  border-radius: 50%;\r\n  top: -6px;\r\n  left: calc(50% - 6px);\r\n  box-shadow: 0 0 10px rgba(var(--rgb-info-color), 0.7);\r\n  animation: pulseAnimation 2s ease-in-out infinite;\r\n  transform-origin: center center;\r\n}\r\n\r\n.bubble-progress-container {\r\n  width: 100%;\r\n  max-width: 400px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  position: relative;\r\n}\r\n\r\n.bubble-progress-track {\r\n  height: 10px;\r\n  background-color: rgba(var(--rgb-primary-color), 0.12);\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n  position: relative;\r\n  backdrop-filter: blur(4px);\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n  transition: all 0.3s ease;\r\n  transform: translateZ(0);\r\n  contain: paint;\r\n}\r\n\r\n.bubble-progress-bar {\r\n  background: var(--info-color);\r\n  border-radius: 10px;\r\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\r\n  min-width: 10px;\r\n}\r\n\r\n.bubble-progress-glow {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.bubble-progress-percentage {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 14px;\r\n  color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-progress-text {\r\n  font-weight: 500;\r\n}\r\n\r\n.bubble-progress-value {\r\n  font-weight: 600;\r\n  color: var(--primary-color);\r\n  font-variant-numeric: tabular-nums;\r\n}\r\n\r\n.bubble-progress-dots {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.bubble-progress-dots .dot {\r\n  width: 6px;\r\n  height: 6px;\r\n  border-radius: 50%;\r\n  background-color: var(--primary-color);\r\n  opacity: 0.5;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(1) {\r\n  animation: dotAnimation 1.4s ease-in-out infinite;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(2) {\r\n  animation: dotAnimation 1.4s ease-in-out 0.2s infinite;\r\n}\r\n\r\n.bubble-progress-dots .dot:nth-child(3) {\r\n  animation: dotAnimation 1.4s ease-in-out 0.4s infinite;\r\n}\r\n\r\n@keyframes orbitRotation {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes pulseAnimation {\r\n  0%, 100% {\r\n    transform: scale(1);\r\n    opacity: 0.9;\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes glowAnimation {\r\n  0% {\r\n    --x: 0%;\r\n    opacity: 0.5;\r\n  }\r\n  50% {\r\n    --x: 100%;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    --x: 0%;\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n@keyframes dotAnimation {\r\n  0%, 100% {\r\n    transform: translateY(0);\r\n    opacity: 0.5;\r\n  }\r\n  50% {\r\n    transform: translateY(-4px);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n/* Styles for the supported cards selector */\r\n.checkbox-grid {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 1fr);\r\n  gap: 12px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .checkbox-grid {\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n}\r\n\r\n/* Module Editor Styles */\r\n.module-actions {\r\n  display: flex;\r\n  gap: 8px;\r\n  margin-left: auto;\r\n}\r\n\r\n.module-editor-form .card-content {\r\n  display: grid;\r\n  grid-gap: 16px;\r\n  padding: 0;\r\n}\r\n\r\n.module-editor-form h3 {\r\n  margin: 8px 0;\r\n  color: var(--primary-text-color);\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n.module-editor-form h4:not(.bubble-section-title) {\r\n  margin: 0 !important;\r\n  font-size: 16px;\r\n}\r\n\r\n.module-editor-form ha-code-editor {\r\n  max-height: 600px;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 4px;\r\n  overflow: scroll !important;\r\n  box-sizing: border-box;\r\n  display: block;\r\n}\r\n\r\n.module-editor-form ha-code-editor::part(editor) {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.module-editor-form ha-code-editor .monaco-editor {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n}\r\n\r\n.module-editor-form ha-code-editor .monaco-editor .monaco-editor-background {\r\n  width: 100% !important;\r\n}\r\n\r\n.module-editor-form ha-code-editor .monaco-editor .overflow-guard {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.module-editor-form ha-code-editor .monaco-editor .monaco-scrollable-element {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.css-editor-container {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  max-height: 500px;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.css-editor-container ha-code-editor {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  display: block;\r\n}\r\n\r\n.css-editor-container ha-code-editor::part(editor) {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.css-editor-container ha-code-editor .monaco-editor {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n}\r\n\r\n.css-editor-container ha-code-editor .monaco-editor .monaco-editor-background {\r\n  width: 100% !important;\r\n}\r\n\r\n.css-editor-container ha-code-editor .monaco-editor .overflow-guard {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.css-editor-container ha-code-editor .monaco-editor .monaco-scrollable-element {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.module-editor-form ha-textarea {\r\n  width: 100%;\r\n}\r\n\r\n.module-actions .icon-button {\r\n  width: 36px;\r\n  height: 36px;\r\n  border-radius: 18px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 0;\r\n}\r\n\r\n.module-actions .icon-button {\r\n  background: none;\r\n}\r\n\r\n.module-actions .icon-button ha-icon {\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\n.code-editor-container, .editor-schema-container {\r\n  position: relative;\r\n  margin-bottom: 8px;\r\n  overflow-x: auto;\r\n  overflow-y: visible;\r\n  width: 100%;\r\n  max-width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.code-editor-container ha-code-editor,\r\n.editor-schema-container ha-code-editor {\r\n  height: auto; \r\n  width: 100%;\r\n  max-width: 100%;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 4px;\r\n  overflow: hidden;\r\n  box-sizing: border-box;\r\n  display: block;\r\n}\r\n\r\n.code-editor-container ha-code-editor::part(editor),\r\n.editor-schema-container ha-code-editor::part(editor) {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: auto;\r\n}\r\n\r\n.code-editor-container ha-code-editor .monaco-editor,\r\n.editor-schema-container ha-code-editor .monaco-editor {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n}\r\n\r\n.code-editor-container ha-code-editor .monaco-editor .monaco-editor-background,\r\n.editor-schema-container ha-code-editor .monaco-editor .monaco-editor-background {\r\n  width: 100% !important;\r\n}\r\n\r\n.code-editor-container ha-code-editor .monaco-editor .overflow-guard,\r\n.editor-schema-container ha-code-editor .monaco-editor .overflow-guard {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.code-editor-container ha-code-editor .monaco-scrollable-element,\r\n.editor-schema-container ha-code-editor .monaco-scrollable-element {\r\n  width: 100% !important;\r\n  max-width: 100% !important;\r\n  overflow-x: auto !important;\r\n}\r\n\r\n.form-preview {\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 8px;\r\n  padding: 16px;\r\n}\r\n\r\n.form-preview h4 {\r\n  margin-top: 0;\r\n  margin-bottom: 16px;\r\n  color: var(--primary-color);\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.form-preview-container {\r\n  padding: 8px;\r\n  border-radius: 4px;\r\n}\r\n\r\n@keyframes pulse {\r\n  0% {\r\n    opacity: 0.7;\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0.7;\r\n  }\r\n}\r\n\r\n.export-section {\r\n  margin-top: 12px;\r\n}\r\n\r\n.export-buttons {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 12px;\r\n  margin-top: 8px;\r\n  margin-bottom: 16px;\r\n}\r\n\r\n.export-buttons .icon-button {\r\n  flex: 1;\r\n  min-width: 160px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px 16px;\r\n}\r\n\r\n.export-preview {\r\n  margin-top: 12px;\r\n  padding: 8px;\r\n  border: 1px solid var(--divider-color);\r\n  border-radius: 8px;\r\n  max-height: 300px;\r\n  overflow: auto;\r\n  background: var(--secondary-background-color);\r\n}\r\n\r\n.export-preview pre {\r\n  margin: 0;\r\n  white-space: pre-wrap;\r\n  font-family: monospace;\r\n  font-size: 12px;\r\n  line-height: 1.4;\r\n  padding: 8px;\r\n}\r\n\r\nha-expansion-panel {\r\n  --input-fill-color: none;\r\n  scroll-margin-top: 64px;\r\n  contain: inline-size;\r\n  overflow: clip;\r\n}\r\n\r\nha-expansion-panel > .content,\r\nha-expansion-panel .content {\r\n  min-width: 0;\r\n  max-width: 100%;\r\n  overflow-x: auto;\r\n  overflow-y: visible;\r\n  box-sizing: border-box;\r\n}\r\n\r\nha-yaml-editor,\r\nha-code-editor {\r\n  min-width: 0;\r\n  max-width: 100%;\r\n  width: 100%;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  contain: inline-size;\r\n}\r\n\r\n@keyframes highlight {\r\n  0% { background-color: var(--primary-color); }\r\n  100% { background-color: transparent; }\r\n}\r\n\r\nha-expansion-panel.recently-toggled {\r\n  animation: highlight 2s;\r\n}\r\n\r\n.helper-text {\r\n  display: block;\r\n  color: var(--secondary-text-color);\r\n  font-size: 12px;\r\n  margin-top: -4px;\r\n  margin-bottom: 8px;\r\n}\r\n\r\n.helper-text a {\r\n  color: var(--primary-color);\r\n}\r\n\r\n.helper-text a:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.bubble-info > div {\r\n  --mdc-icon-size: 18px;\r\n}\r\n\r\nha-formfield.apply-module-button {\r\n  height: 40px;\r\n  border-radius: 32px;\r\n  padding: 0 16px;\r\n  background-color: rgba(0, 0, 0, 0.1);;\r\n}\r\n\r\n.module-editor-buttons-container {\r\n  display: flex; \r\n  gap: 8px; \r\n  justify-content: flex-end;\r\n  position: sticky;\r\n  bottom: -24px;\r\n  background-color: var(--card-background-color);\r\n  padding: 8px 0;\r\n}\r\n\r\n.module-editor-content--ha-tab-group.module-editor-content--ha-tab-group-modern .module-editor-buttons-container {\r\n  bottom: -8px;\r\n  padding-bottom: 12px;\r\n}\r\n\r\n.module-toggles-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.module-toggles-label {\r\n  font-size: 0.85em;\r\n  font-weight: 500;\r\n  color: var(--secondary-text-color);\r\n  padding-left: 4px;\r\n  margin-bottom: -4px;\r\n}\r\n\r\n.module-toggles {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.module-badges {\r\n  display: inline-flex;\r\n  margin-left: auto;\r\n  gap: 4px;\r\n}\r\n\r\n/* Module status icon */\r\n.module-status-icon {\r\n  opacity: 0.3;\r\n  transition: opacity 0.2s ease, color 0.2s ease;\r\n}\r\n\r\n.module-status-icon--opaque {\r\n  opacity: 1;\r\n}\r\n\r\n.module-status-icon--active {\r\n  color: var(--info-color) !important;\r\n}\r\n\r\n.module-badges .update-badge {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.global-badge {\r\n  background-color: transparent !important;\r\n  border: 1px solid rgb(0, 220, 80);\r\n  padding: 1px 3px !important;\r\n}\r\n\r\n.update-badge + .global-badge {\r\n  margin-left: 4px !important;\r\n}\r\n\r\n.toggle-badge {\r\n  cursor: pointer !important;\r\n  border: 1px solid var(--primary-text-color);\r\n}\r\n\r\n/* My Modules Search and Sort Controls */\r\n.my-modules-controls {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 12px;\r\n  margin-bottom: 16px;\r\n  background-color: var(--card-background-color);\r\n  border-radius: 16px;\r\n  padding: 16px;\r\n  border: 1px solid var(--divider-color);\r\n  box-shadow: var(--shadow-elevation-1dp);\r\n}\r\n\r\n.my-modules-top-row {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 12px;\r\n}\r\n\r\n.my-modules-search {\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  border-radius: 32px;\r\n  overflow: hidden;\r\n}\r\n\r\n.my-modules-search ha-textfield {\r\n  flex-grow: 1;\r\n  width: 100%;\r\n}\r\n\r\n.my-modules-sort-menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.unsupported-modules-warning {\r\n  margin: 0;\r\n}\r\n\r\n.my-modules-sort-menu .sort-trigger {\r\n  background: none;\r\n  padding: 0;\r\n  margin: 0 4px;\r\n}\r\n\r\n.my-modules-sort-menu mwc-list-item[selected] {\r\n  background-color: rgba(var(--rgb-primary-color), 0.12) !important;\r\n}\r\n\r\n.my-modules-sort-menu mwc-list-item[selected]:hover {\r\n  background-color: rgba(var(--rgb-primary-color), 0.18) !important;\r\n}\r\n\r\nmwc-icon-button ha-icon {\r\n  line-height: 100% !important;\r\n}\r\n')}
    `}static _resizeObserver=null;static _editorInstanceMap=new WeakMap;_getBubbleCardFromPreview(){try{if(this._previewCardRoot){const e=this._previewCardRoot.host||this._previewCardHost;if(e?.isConnected||this._previewCardRoot.isConnected)return this._previewCardRoot}if(this._previewCardHost?.isConnected)return this._previewCardHost.shadowRoot||this._previewCardHost.getRootNode?.()||null;const e=this._getEditorPreviewContainer();if(e){const t=this._deepQuerySelector(e,"bubble-card"),n=t?.shadowRoot||null;if(n)return this._previewCardHost=t,this._previewCardRoot=n,n}}catch(e){return null}}_setupAutoRowsObserver(){const e=void 0!==this._config?.grid_options?.rows&&null!==this._config?.grid_options?.rows&&""!==this._config?.grid_options?.rows;if(!this._config||e||!1===this._rowsAutoMode)return;const t=this._getBubbleCardFromPreview();if(!t)return;const n=[t.querySelector(".bubble-sub-button-bottom-container"),t.querySelector(".bubble-buttons-container.bottom-fixed"),t.querySelector(".bubble-sub-button-container")].filter(Boolean);wt._resizeObserver||(wt._resizeObserver=new ResizeObserver((e=>{for(const t of e){const e=wt._editorInstanceMap.get(t.target);if(e){const t=e._getBubbleCardFromPreview();t&&e._computeAndApplyRows(t)}}}))),this._observedElements&&this._observedElements.forEach((e=>{n.includes(e)||(wt._resizeObserver.unobserve(e),wt._editorInstanceMap.delete(e))})),n.forEach((e=>{this._observedElements?.includes(e)||(wt._resizeObserver.observe(e),wt._editorInstanceMap.set(e,this))})),this._observedElements=n,requestAnimationFrame((()=>{const e=this._getBubbleCardFromPreview();e&&this._computeAndApplyRows(e)}))}_hasCustomHeightStyles(){const e=[/\.bubble-container[^{]*\{[^}]*aspect-ratio\s*:/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*100%/i,/\.bubble-container[^{]*\{[^}]*height\s*:\s*\d+(\.\d+)?\s*(px|em|rem|vh|vw|%)/i],t=t=>!(!t||"string"!=typeof t)&&e.some((e=>e.test(t)));if(this._config?.styles&&t(this._config.styles))return!0;try{if(i.Ki&&i.Ki.size>0){const e=new Set,n=new Set;Array.isArray(this._config?.modules)?this._config.modules.forEach((t=>{"string"==typeof t&&t.startsWith("!")?n.add(t.substring(1)):"string"==typeof t&&e.add(t)})):this._config?.modules&&"string"==typeof this._config.modules&&(this._config.modules.startsWith("!")?n.add(this._config.modules.substring(1)):e.add(this._config.modules)),i.Ki.has("default")&&!n.has("default")&&e.add("default"),i.Ki.forEach(((t,o)=>{t&&"object"==typeof t&&!0===t.is_global&&!n.has(o)&&e.add(o)}));for(const n of e){const e=i.Ki.get(n);if(e&&t("object"==typeof e?e.code:e))return!0}}}catch(e){}return!1}_computeAndApplyRows(e){try{if(!e||!1===this._rowsAutoMode||!this._config)return{applied:!1};if(this._hasCustomHeightStyles()){if(void 0!==this._config.rows&&!1!==this._rowsAutoMode){const e={...this._config};delete e.rows,this._config=e,(0,s.rC)(this,"config-changed",{config:e})}return{applied:!1}}const t="calendar"===this._config.card_type,n="separator"===this._config.card_type,o=e.querySelector(".bubble-sub-button-bottom-container"),r=e.querySelector(".bubble-buttons-container.bottom-fixed"),i=e.querySelector(".bubble-sub-button-container"),a=e.querySelector(".bubble-content-container"),l=o?o.getBoundingClientRect().height:0,c=r?r.getBoundingClientRect().height:0,d=i?i.getBoundingClientRect().height:0,u={bottomSub:Math.round(l),bottomMain:Math.round(c),mainSub:Math.round(d)};if(this._lastMeasuredHeights){const e=1,t=Math.abs(u.bottomSub-this._lastMeasuredHeights.bottomSub),n=Math.abs(u.bottomMain-this._lastMeasuredHeights.bottomMain),o=Math.abs(u.mainSub-this._lastMeasuredHeights.mainSub);if(t<e&&n<e&&o<e)return{applied:!1}}if(this._lastMeasuredHeights=u,t&&!(l>0||c>0)){if(this._firstRowsComputation=!0,1!==this._config.rows){const e={...this._config,rows:1};this._config=e,(0,s.rC)(this,"config-changed",{config:e})}return}const p=e.querySelector(".bubble-container");p&&p.getBoundingClientRect();let b=!1;a&&(b=Array.from(a.children||[]).some((e=>{const t=e.getBoundingClientRect(),n=getComputedStyle(e);return t.width>0&&t.height>0&&"none"!==n.display&&"hidden"!==n.visibility&&"0"!==n.opacity})));const h=d>0,m=(()=>{const e=this._config?.sub_button;return!!e&&(!Array.isArray(e)&&(Array.isArray(e.bottom)?e.bottom:[]).some((e=>!!e)))})();let g=l+c;g<=0&&m&&(g=46);const f=e=>{if(!e)return 0;try{const t=getComputedStyle(e),n=parseFloat(t.bottom);return Number.isFinite(n)?Math.max(0,n):0}catch(e){return 0}};r&&l>0&&(g+=f(r));let y=0;if(h){y=d;const e=getComputedStyle(i),t=parseFloat(e.marginTop)||0,n=parseFloat(e.marginBottom)||0;y+=t+n+(parseFloat(e.paddingTop)||0)+(parseFloat(e.paddingBottom)||0)}const v=g>0,_=v?46:36;y>0&&(y=Math.max(y,_));const w=p||e?getComputedStyle(p||e):null,x=w?w.getPropertyValue("--row-height"):"",k=parseFloat(x)||56,C=w?w.getPropertyValue("--row-gap"):"",$=k+(parseFloat(C)||8),A="separator"===this._config.card_type?.8:1;let S;const L=v&&!h&&(b||t||n),E=g+y;if(E>0||L){const e=Number.isFinite($)&&$>0?$:k,t=(L?46:0)-36+("sub-buttons"===this._config.card_type?-4:0);S=A+Math.ceil((E||0)+t)/e,S=Math.max(.1,Math.round(1e3*S)/1e3)}else S=void 0;const M=this._config.rows;if(S===M||void 0===S&&void 0===M)return this._firstRowsComputation=!0,{applied:!1};if("number"==typeof S&&"number"==typeof M&&Math.abs(S-M)<.01)return{applied:!1};if(S===A&&void 0===M)return{applied:!1};if(!1===this._rowsAutoMode)return{applied:!1};const T={...this._config};return void 0===S?delete T.rows:T.rows=S,this._config=T,this._firstRowsComputation?((0,s.rC)(this,"config-changed",{config:T}),{applied:!0,rows:T.rows}):(this._firstRowsComputation=!0,{applied:!1,skippedFirst:!0})}catch(e){}return{applied:!1}}_initializeLists(e){let t=[];0===Object.keys(this._entityCache).length?Object.keys(this.hass.states).forEach((e=>{const n=this.hass.states[e],o=e.split(".")[0];this._entityCache[o]||(this._entityCache[o]=[]),this._entityCache[o].push(e),this._selectable_attributes.some((e=>n.attributes?.[e]))&&(t.includes(e)||t.push(e))})):(["input_select","select"].forEach((e=>{this._entityCache[e]&&(t=[...t,...this._entityCache[e]])})),Object.keys(this.hass.states).forEach((e=>{const n=this.hass.states[e];this._selectable_attributes.some((e=>n.attributes?.[e]))&&(t.includes(e)||t.push(e))}))),["input_select","select"].forEach((e=>{this._entityCache[e]&&this._entityCache[e].forEach((e=>{t.includes(e)||t.push(e)}))})),t=[...new Set(t)];const n={};t.forEach((e=>{this.hass.states[e]&&(n[e]=this.hass.states[e])})),this.inputSelectList={...this.hass},this.inputSelectList.states=n,this._entity?this._entity===this._cachedAttributeListEntity&&this._cachedAttributeList?this.attributeList=this._cachedAttributeList:(this.attributeList=Object.keys(this.hass.states[this._entity]?.attributes||{}).map((e=>{let t=this.hass.states[this._entity];return{label:this.hass.formatEntityAttributeName(t,e),value:e}})),this._cachedAttributeList=this.attributeList,this._cachedAttributeListEntity=this._entity):(this.attributeList=[],this._cachedAttributeList=null,this._cachedAttributeListEntity=null);const o=e("editor.calendar.name");(!this.cardTypeList||this._cachedCalendarLabel&&this._cachedCalendarLabel!==o)&&(this.cardTypeList=[{label:"Button (Switch, slider, ...)",value:"button"},{label:o,value:"calendar"},{label:"Cover",value:"cover"},{label:"Climate",value:"climate"},{label:"Empty column",value:"empty-column"},{label:"Horizontal buttons stack",value:"horizontal-buttons-stack"},{label:"Media player",value:"media-player"},{label:"Pop-up",value:"pop-up"},{label:"Select",value:"select"},{label:"Separator",value:"separator"},{label:"Sub-buttons only",value:"sub-buttons"}],this._cachedCalendarLabel=o)}_handleCardContext(e){try{const t=e?.detail;if(!t)return;const n=this._scoreCardContext(t);if(n<=this._previewCardScore)return;const o=t.context||t.card?.closest?.("bubble-card")||t.card?.getRootNode?.()?.host||null,r=t.context?.shadowRoot||o?.shadowRoot||t.card?.getRootNode?.()||null;if(!r)return;this._previewCardScore=n,this._previewCardRoot=r,this._previewCardHost=o||r.host||null,this._setupAutoRowsObserver()}catch(e){}}_scoreCardContext(e){const t=e?.config||{},n=this._config||{};let o=0;return(e?.isEditor||e?.editMode)&&(o+=5),t.card_type&&t.card_type===n.card_type&&(o+=4),t.entity&&t.entity===n.entity&&(o+=3),t.hash&&t.hash===n.hash&&(o+=2),t.button_type&&t.button_type===n.button_type&&(o+=1),o}_resetPreviewCardReference(){this._previewCardRoot=null,this._previewCardHost=null,this._previewCardScore=-1/0,this._lastMeasuredHeights=null}}function xt(e){if(!e.elements?.popUpContainer||!e.storedContent)return;const t=e.elements.popUpContainer;t.classList.remove("has-placeholder"),t.querySelector(".bubble-editor-placeholder")?.remove(),t.appendChild(e.storedContent),e.storedContent=null}function kt(e){if(!e.verticalStack||!e.popUp)return;const{popUp:t,sectionRow:n,sectionRowContainer:o,elements:r,config:i}=e,a=e.editor||e.detectedEditor,l=function(e){if(!e.editor&&!e.detectedEditor)return!1;const t=["hui-card-preview","hui-section-preview","element-preview"];try{let n=e.popUp;for(;n;){if(n.tagName&&t.includes(n.tagName.toLowerCase()))return!0;if(n.classList?.contains("element-preview"))return!0;if(n.parentNode)n=n.parentNode;else{if(!(n.getRootNode()instanceof ShadowRoot))break;n=n.getRootNode().host}}}catch(e){}return!1}(e),c="hui-card"===n?.tagName?.toLowerCase();e.bubbleInstanceId=e.bubbleInstanceId||Math.random().toString(36).slice(2,15),window.bubbleNewlyCreatedInstances=window.bubbleNewlyCreatedInstances||new Set;const d=window.bubbleNewlyCreatedInstances.has(e.bubbleInstanceId)||window.bubbleNewlyCreatedHashes?.has(i.hash)&&l;if(d&&l&&window.bubbleNewlyCreatedInstances.add(e.bubbleInstanceId),a&&c&&o&&"none"===o.style.display&&(o.style.display="",o.style.position=""),a)e.editorAccess||((0,s.qo)(!1),t.classList.remove("is-popup-opened"),t.classList.add("is-popup-closed","editor"),r?.content?.classList.add("popup-content-in-editor-mode"),Y(e,!0),e.editorAccess=!0,function(e){const{hideBackdrop:t}=U(e),n=e.detectedEditor;e.editor||n?(t(),clearTimeout(e.removeDomTimeout),n||function(e){if(e.observer&&(e.observer.disconnect(),e.observer=null),e.sectionRow){const t=new IntersectionObserver((t=>{t.forEach((t=>{const n=e.editor||e.detectedEditor;t.isIntersecting&&!e.verticalStack.contains(e.popUp)&&n&&e.verticalStack.appendChild(e.popUp)}))}),{rootMargin:"100px",threshold:.01});t.observe(e.sectionRow),e.observer=t}}(e)):e.observer&&(e.observer.disconnect(),e.observer=null)}(e)),window.bubbleDialogListenerAdded||(window.addEventListener("dialog-closed",(()=>{setTimeout((()=>{window.bubbleNewlyCreatedInstances?.clear(),window.bubbleNewlyCreatedHashes?.clear(),window.dispatchEvent(new Event("location-changed"))}),100)}),{capture:!0}),window.bubbleDialogListenerAdded=!0),l||d?xt(e):function(e){if(!e.elements?.popUpContainer||e.storedContent)return;const t=e.elements.popUpContainer,n=document.createDocumentFragment();[...t.children].filter((e=>"STYLE"!==e.tagName)).forEach((e=>n.appendChild(e))),e.storedContent=n,t.appendChild(function(e){const t=(0,s.n)("div","bubble-editor-placeholder"),n=(0,s.n)("ha-icon");n.icon="mdi:information-outline";const o=(0,s.n)("div","bubble-editor-placeholder-info"),r=(0,s.n)("div","bubble-editor-placeholder-hash");r.textContent=e.config.hash||"No hash defined";const i=(0,s.n)("div","bubble-editor-placeholder-hint");return i.textContent="Content hidden in edit mode for performance",o.appendChild(r),o.appendChild(i),t.appendChild(n),t.appendChild(o),t}(e)),t.classList.add("has-placeholder")}(e);else if(e.editorAccess){r?.content?.classList.remove("popup-content-in-editor-mode"),xt(e),e.observer&&(e.observer.disconnect(),e.observer=null);const n=i.hash?i.hash.startsWith("#")?i.hash:"#"+i.hash:"";n&&location.hash===n?(t.classList.remove("editor","is-popup-closed"),t.classList.add("is-popup-opened"),(0,s.qo)(!0)):(Y(e,!1),H(e,0),t.classList.remove("editor")),e.editorAccess=!1}}function Ct(e){const{backdropCustomStyle:t,updateBackdropStyles:n}=U(e);(0,s.JK)(e,e.popUp),T(e,e.popUp),"function"==typeof n?n():requestAnimationFrame((()=>T(e,t)));const o=e.config.show_header??!0;e.popUp.classList.contains("no-header")===o&&e.popUp.classList.toggle("no-header",!o)}customElements.define("bubble-card-editor",wt);var $t=n(314);function At(e){let t=e.config.button_type;return"custom"===t&&(console.error('Buttons "custom" have been removed. Use either "switch", "slider", "state" or  "name"'),t=""),e.config.entity?t||"switch":t||"name"}function St(e){const t=e.config.entity;return(0,s.md)(e,"sensor",t)&&"%"===(0,s.D$)(e,"unit_of_measurement",t)}var Lt=n(459);new WeakMap;var Et=n(653);function Mt(e,t=e.content){const n=At(e);"button"!==e.cardType&&e.buttonType!==n&&function(e,t=e.container){const n="button",o=At(e),r="slider"===o,i={};i.slider={icon:!0,button:{tap_action:{action:(0,s.md)(e,"sensor")?"more-info":"toggle"},double_tap_action:{action:"none"},hold_action:{action:"none"}}},i.switch={icon:!0,button:{tap_action:{action:"toggle"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},i.state={icon:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"none"}},button:{tap_action:{action:"more-info"},double_tap_action:{action:"none"},hold_action:{action:"more-info"}}},i.name={icon:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}},button:{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}}};const a=(0,Et.N0)(e,{type:n,appendTo:t,styles:".bubble-range-slider {\r\n    display: flex;\r\n    position: absolute;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    height: 100%;\r\n    width: 100%;\r\n    cursor: ew-resize;\r\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-background {\r\n    background-color: var(--bubble-button-background-color);\r\n    border-radius: calc(var(--bubble-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2))));\r\n}\r\n\r\n.bubble-buttons-container {\r\n    display: contents;\r\n}",withSlider:r,holdToSlide:r,readOnlySlider:St(e),withFeedback:!e.config.tap_to_slide,withSubButtons:!0,iconActions:i[o]?.icon,buttonActions:!e.config.tap_to_slide&&i[o]?.button});a.background.classList.add("bubble-button-background"),a.mainContainer.classList.add("bubble-button-card-container"),a.cardWrapper.classList.add("bubble-button-card"),r&&a.mainContainer.classList.add("bubble-button-slider-container"),t!==e.container?e.buttonType=o:e.cardType=n}(e,t),"name"!==n&&(function(e){const t=(0,s.Gu)(e),n=e.config.card_type;"unavailable"===t?"button"===n?e.card.classList.add("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.add("is-unavailable"):"button"===n?e.card.classList.remove("is-unavailable"):"pop-up"===n&&e.elements.headerContainer.classList.remove("is-unavailable")}(e),function(e){const t=e.config.card_type,n=At(e),o=(0,s.md)(e,"light"),r=(0,s.$C)(e),i=(0,s.m_)(e),a=(0,d.VA)(e),l="button"===t?e.card.style.getPropertyValue("--bubble-button-background-color"):e.popUp.style.getPropertyValue("--bubble-button-background-color"),c=e.elements.background?.style.opacity;let u="",p="";const b=e.config.use_accent_color;"switch"===n&&r?i?(u="var(--red-color, var(--error-color))",p="1"):a&&o&&!b?(u=(0,s.C$)(e,e.config.entity,!0,null,null),p=".7"):(u="var(--bubble-button-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))",p="1"):(u="rgba(0, 0, 0, 0)",p=".5"),"slider"===n&&(0,Lt.VM)(e),l===u&&c===p||function(e,t,n,o){const r=e.elements?.background;if(!r)return;const i="button"===o?e.card:e.popUp;i&&(i.style.setProperty("--bubble-button-background-color",t),r.style.opacity=n)}(e,u,p,t)}(e)),(0,$t.wd)(e),(0,$t.m9)(e),(0,$t.Uk)(e),(0,u.Kr)(e),"pop-up"!==e.cardType&&function(e){(0,s.JK)(e),T(e)}(e)}function Tt(e){return e.cardContainer||e.card.parentNode?.host?.parentNode?.parentNode}function Bt(e){e.cardContainer&&(e.cardContainer.style.position="")}!function(){if(window.__bubblePopUpHashNavigationBridgeInitialized)return;window.__bubblePopUpHashNavigationBridgeInitialized=!0,function(){try{const e=localStorage.getItem(ce);if(!e)return;const t=JSON.parse(e);if(!t||"object"!=typeof t||Array.isArray(t))return;const n=ge();for(const[e,o]of Object.entries(t))if(Array.isArray(o))for(const t of o){const o=me(t?.hash);o&&n.set(o,{name:t.name||null,icon:t.icon||null,path:e})}}catch(e){}}(),Ce()||customElements.whenDefined("ha-navigation-picker").then((()=>{Ce(),xe()})).catch((()=>{})),window.addEventListener(de,xe,{passive:!0});let e=he();window.addEventListener("location-changed",(()=>{const t=he();t!==e&&(e=t,xe())}),{passive:!0})}();function It(e,t){return function(e,t){return!(!e||void 0===e.supported_features)&&!!(e.supported_features&t)}(e.attributes,t)}let Pt=!1;function Ot(e,t){const n=e.config[`${t}_name`]??"",o=e.config[`${t}_icon`]??"",r=e.config[`${t}_pir_sensor`],i=e.config[`${t}_link`],a=e.config[`${t}_entity`];Pt=Pt||location.hash===i;const l=(0,s.n)("ha-icon","bubble-icon icon");l.icon=o;const c=(0,s.n)("div","bubble-name name");c.innerText=n;const d=(0,s.n)("div","bubble-background-color background-color"),u=(0,s.n)("div","bubble-background background"),p=(0,s.n)("div",`bubble-button bubble-button-${t} button ${i.substring(1)}`);let b=localStorage.getItem(`bubbleButtonWidth-${i}`);return p.style.width=`${b}px`,p.appendChild(l),p.appendChild(c),p.appendChild(d),p.appendChild(u),p.addEventListener("click",(()=>{location.hash!==i&&(Pt=!1),Pt?V():F(i),Pt=!Pt,(0,s.jp)("light")})),p.icon=l,p.name=c,p.backgroundColor=d,p.background=u,p.pirSensor=r,p.lightEntity=a,p.link=i,p.index=t,p.haRipple=(0,s.n)("ha-ripple"),p.appendChild(p.haRipple),window.addEventListener("location-changed",(function(){e.config.highlight_current_view&&(location.pathname===i||location.hash===i?p.classList.add("highlight"):p.classList.remove("highlight"))})),e.elements.buttons.push(p),p}function qt(e,t){return Math.floor((t-e)/6e4)}function jt(e){const t=e.elements.calendarCardContent;if(!t)return;const n=t.scrollTop>0,o=t.scrollHeight>t.clientHeight&&t.scrollTop<t.scrollHeight-t.clientHeight-1;t.classList.toggle("can-scroll-top",n),t.classList.toggle("can-scroll-bottom",o);const r=t.clientHeight<=100?16:32;t.style.setProperty("--bubble-calendar-mask-size",`${r}px`)}function Nt(e){const t=(0,s.D$)(e,"supported_features"),n=Number(t);return Number.isFinite(n)?n:0}function Ut(e,t){return!!(e&t)}function zt(e){const t=e?._hass?.states?.[e?.config?.entity]?.state??"",n=Nt(e),o=Ut(n,1),r=Ut(n,4096),i=Ut(n,16384);return"playing"===t?o?{icon:"mdi:pause",service:"media_pause"}:r?{icon:"mdi:stop",service:"media_stop"}:{icon:"mdi:pause",service:"media_play_pause"}:i?{icon:"mdi:play",service:"media_play"}:{icon:"mdi:play",service:"media_play_pause"}}var Dt=n(880);const Rt=new Set(["off","unavailable","unknown","standby"]);function Vt(e){const t=e.elements.buttonsContainer?.classList.contains("bottom-fixed");if(t)return;const n=e.elements.volumeSliderWrapper.classList.contains("is-hidden")?"1":"0";e.elements.mediaInfoContainer.style.opacity=n,e.elements.nameContainer.style.opacity=n,e.elements.subButtonContainer&&(e.elements.subButtonContainer.style.opacity=n),e.elements.playPauseButton.style.opacity=n,e.elements.previousButton.style.opacity=n,e.elements.nextButton.style.opacity=n,e.elements.powerButton.style.opacity=n,e.elements.volumeButton.style.opacity=n,e.elements.iconContainer&&(e.elements.iconContainer.style.opacity=n)}function Ft(e){return e._mediaCoverState||(e._mediaCoverState={cachedUrl:"",resolvedUrl:"",iconDisplayedUrl:"",backgroundDisplayedUrl:"",idleTimeout:null,lastState:""}),e._mediaCoverState}function Ht(e){const t=Ft(e),n=Boolean(e.config.force_icon);let o=n?"":(0,d.Qp)(e)||"";const r=((0,s.Gu)(e)||"").toLowerCase();if(o){const t=((0,s.D$)(e,"media_content_id")||"")+((0,s.D$)(e,"media_title")||"")+((0,s.D$)(e,"media_artist")||"");if(t){let e=0;for(let n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;const n=o.includes("?")?"&":"?";o=`${o}${n}v=${Math.abs(e).toString(36)}`}}const i=n||Rt.has(r),a="idle"===r;return t.lastState!==r&&(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),a&&t.cachedUrl&&(t.idleTimeout=setTimeout((()=>{t.cachedUrl="",t.resolvedUrl="",function(e){const t=Ft(e);if(t.iconDisplayedUrl){const n=Wt(e,"icon");n&&n.currentValue?(e.elements.icon&&(e.elements.icon.style.display=""),e.elements.image&&(e.elements.image.style.display=""),Yt(n,"",(()=>{t.iconDisplayedUrl="",e.elements.image&&(e.elements.image.style.display="none")}))):(t.iconDisplayedUrl="",e.elements.icon&&(e.elements.icon.style.display=""),e.elements.image&&(e.elements.image.style.display="none"))}if(t.backgroundDisplayedUrl){const n=Wt(e,"background");n&&n.currentValue?Yt(n,"",(()=>{t.backgroundDisplayedUrl=""})):t.backgroundDisplayedUrl=""}}(e)}),2e3)),t.lastState=r),o&&o!==t.cachedUrl?(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),t.cachedUrl=o):i&&!o&&t.cachedUrl&&(t.idleTimeout&&(clearTimeout(t.idleTimeout),t.idleTimeout=null),t.cachedUrl=""),t.resolvedUrl=!a||o?o||(i?"":t.cachedUrl):t.cachedUrl,t}function Wt(e,t){if(e._mediaCoverLayers=e._mediaCoverLayers||{},e._mediaCoverLayers[t])return e._mediaCoverLayers[t];const n="icon"===t?e.elements?.image:e.elements?.background;if(!n)return null;n.style.backgroundImage="",n.classList.add("icon"===t?"bubble-cover-icon-crossfade":"bubble-cover-background-crossfade");const o="icon"===t?"bubble-cover-crossfade-layer bubble-cover-crossfade-layer--icon":"bubble-cover-crossfade-layer bubble-cover-crossfade-layer--background",r=document.createElement("div");r.className=`${o} is-visible`;const i=document.createElement("div");for(i.className=o;n.firstChild;)n.removeChild(n.firstChild);n.append(r,i);const a={container:n,layers:[r,i],visibleIndex:0,currentValue:""};return e._mediaCoverLayers[t]=a,a}function Yt(e,t,n){if(!e)return;if(e.currentValue===t)return void(n&&n());const o=0===e.visibleIndex?1:0,r=e.layers[e.visibleIndex],i=e.layers[o],a=()=>{i.classList.add("is-visible"),"function"==typeof requestAnimationFrame?requestAnimationFrame((()=>{setTimeout((()=>{r.classList.remove("is-visible"),e.visibleIndex=o,e.currentValue=t,n&&setTimeout(n,1e3)}),50)})):setTimeout((()=>{r.classList.remove("is-visible"),e.visibleIndex=o,e.currentValue=t,n&&setTimeout(n,1e3)}),50)};if(t){const o=`url(${t})`;if(i.style.backgroundImage===o)i.classList.remove("is-empty"),a();else{const r=new Image;r.onload=()=>{i.style.backgroundImage=o,i.classList.remove("is-empty"),a()},r.onerror=()=>{i.style.backgroundImage="",i.classList.add("is-empty"),e.currentValue="",n&&n()},r.src=t}}else i.style.backgroundImage="",i.classList.add("is-empty"),a()}var Kt=n(345),Xt=n(361),Jt=n(752);const Gt={"pop-up":async function(e){if($e(e.config?.hash,{name:e.config?.name,icon:e.config?.icon,isConnected:e.isConnected,element:e.editor?null:e}),"pop-up"!==e.cardType){if(e.getRootNode()instanceof ShadowRoot==0)return;if(function(e){try{if(e.cardType="pop-up",e.verticalStack=e.getRootNode(),!e.verticalStack||!e.verticalStack.host)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");if(e.sectionRow=e.verticalStack.host.parentElement,e.sectionRowContainer=e.sectionRow?.parentElement,e.popUp=e.verticalStack.querySelector("#root"),!e.popUp)throw new Error("Vertical stack not found, don't panic, it will be added automatically to your pop-up.");e.popUp.classList.add("bubble-pop-up","pop-up","is-popup-closed"),e.cardTitle=e.verticalStack.querySelector(".card-header"),e.editor||e.config.background_update||(e.popUp.style.visibility="hidden",setTimeout((()=>{e.verticalStack?.contains(e.popUp)&&!e.popUp.classList.contains("is-popup-opened")&&(e.popUp.style.visibility="",e.verticalStack.removeChild(e.popUp))}),100)),e.elements={},U(e),e.cardTitle&&(e.cardTitle.style.display="none"),e.popUp.style.setProperty("--custom-height-offset-desktop",e.config.margin_top_desktop??"0px"),e.popUp.style.setProperty("--custom-height-offset-mobile",e.config.margin_top_mobile??"0px"),e.popUp.style.setProperty("--custom-margin",`-${e.config.margin??"7px"}`),e.popUp.style.setProperty("--custom-popup-filter",e.config.backdrop_blur&&"0"!==e.config.backdrop_blur?"none":`blur(${e.config.bg_blur??10}px)`),e.popUp.style.setProperty("--custom-shadow-opacity",(e.config.shadow_opacity??0)/100),te(e),window.popUpError=!1}catch(t){if(console.warn(t),!window.popUpError){window.popUpError=!0;const t=(0,s.n)("div","bubble-error-text"),n=c.qy`
        <ha-alert 
          alert-type="error"
          .title=${"You need to define a unique hash for this pop-up"}
        >
          <p>Once created and saved, this pop-up will be <b>hidden by default</b> and <b>can be opened by targeting its hash</b>. You can trigger it using <a href="https://github.com/Clooos/Bubble-Card#example" target="_blank" rel="noopener noreferrer">any card</a> that supports the <code>navigate</code> <a href="https://github.com/Clooos/Bubble-Card?tab=readme-ov-file#tap-double-tap-and-hold-actions" target="_blank" rel="noopener noreferrer">action</a> (check the example), or with the included <a href="https://github.com/Clooos/Bubble-Card#horizontal-buttons-stack" target="_blank" rel="noopener noreferrer">horizontal buttons stack</a> card.</p>
        </ha-alert>
      `;(0,c.XX)(n,t),e.content.appendChild(t)}}}(e),!e.popUp)return;if(function(e){e.elements={closeIcon:(0,s.n)("ha-icon","bubble-close-icon"),closeButton:(0,s.n)("div","bubble-close-button close-pop-up"),buttonContainer:(0,s.n)("div","bubble-button-container"),header:(0,s.n)("div","bubble-header")};const t=(0,s.n)("div","bubble-feedback-container"),n=(0,s.n)("div","bubble-feedback-element feedback-element");t.appendChild(n),e.elements.closeButton.appendChild(t),e.elements.closeIcon.icon="mdi:close",e.elements.closeButton.appendChild(e.elements.closeIcon),e.elements.closeButton.feedback=n;const o=t=>{t&&(t.stopPropagation(),t.preventDefault());const n=()=>{if(location.hash){const e=window.location.href.split("#")[0];history.replaceState(null,"",e),window.dispatchEvent(new Event("location-changed"))}};try{V(),setTimeout((()=>{location.hash===e.config.hash&&n()}),100)}catch(e){n()}(0,s.jp)("selection")};e.elements.closeButton.addEventListener("click",o),e.elements.closeButton.addEventListener("touchend",o),e.elements.closeButton.addEventListener("pointerdown",(e=>{e.stopPropagation()})),e.elements.closeButton.haRipple=(0,s.n)("ha-ripple"),e.elements.closeButton.appendChild(e.elements.closeButton.haRipple);const r=e.popUp?.querySelector(".bubble-header-container");r?Object.assign(e.elements,{headerContainer:r,closeIcon:r.querySelector(".bubble-close-icon"),closeButton:r.querySelector(".bubble-close-button"),buttonContainer:r.querySelector(".bubble-button-container"),header:r.querySelector(".bubble-header")}):(e.elements.headerContainer=(0,s.n)("div","bubble-header-container"),e.elements.headerContainer.setAttribute("id","header-container"),e.elements.headerContainer.appendChild(e.elements.header),e.elements.headerContainer.appendChild(e.elements.closeButton),e.elements.header.appendChild(e.elements.buttonContainer)),e.handleTouchStart=e=>{P=e.touches[0].clientY},e.handleHeaderTouchMove=t=>{const n=t.touches[0].clientY-P;n>0&&(e.popUp.style.transform=`translateY(${n}px)`)},e.handleHeaderTouchEnd=t=>{const n=t.changedTouches[0].clientY-P;n>50?(e.popUp.style.transform=`translateY(calc(${n}px + (100% - ${n}px)))`,V()):e.popUp.style.transform=""}}(e),function(e){try{if(!e.popUp)return;e.elements.style=(0,s.n)("style"),e.elements.style.textContent=".bubble-pop-up-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    height: 100%;\r\n    margin-top: -50px;\r\n    max-width: 100%;\r\n    padding-top: 40px;\r\n    padding-bottom: 80px;\r\n    grid-gap: var(--bubble-pop-up-gap, 14px);\r\n    gap: var(--bubble-pop-up-gap, 14px);\r\n    column-gap: var(--bubble-pop-up-gap, 14px);\r\n    --grid-gap: var(--bubble-pop-up-gap, 14px);\r\n    --vertical-stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --horizontal-stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --stack-card-gap: var(--bubble-pop-up-gap, 14px);\r\n    --row-size: 1;\r\n    -ms-overflow-style: none; /* for Internet Explorer, Edge */\r\n    scrollbar-width: none; /* for Firefox */\r\n    overflow: auto; \r\n    grid-auto-rows: min-content;\r\n    padding: 18px 18px calc(140px + var(--custom-height-offset-mobile)) 18px;\r\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\r\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 40px), transparent 100%);\r\n    touch-action: pan-y pinch-zoom;\r\n}\r\n\r\n.bubble-pop-up-container > * {\r\n    flex-shrink: 0 !important;\r\n}\r\n\r\n.bubble-pop-up.card-content {\r\n    width: 100% !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n.bubble-pop-up {\r\n    transition: transform 0.3s ease;\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 100%;\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\r\n    box-sizing: border-box;\r\n    margin-left: var(--custom-margin);\r\n    left: 7px;\r\n    z-index: 5 !important;\r\n    bottom: calc(-56px - var(--custom-height-offset-mobile));\r\n}\r\n\r\n.bubble-pop-up-background {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    top: 0;\r\n    left: 0;\r\n    position: absolute;\r\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) 0 0;\r\n    backdrop-filter: var(--custom-popup-filter);\r\n    -webkit-backdrop-filter: var(--custom-popup-filter);\r\n    border: var(--bubble-pop-up-border, var(--bubble-border, none));\r\n    contain: layout paint;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-pop-up-container::-webkit-scrollbar {\r\n    display: none; /* for Chrome, Safari, and Opera */\r\n}\r\n\r\n.is-popup-opened {\r\n    box-shadow: 0px 0px 50px rgba(0, 0, 0, var(--custom-shadow-opacity));\r\n}\r\n\r\n.is-popup-opened .bubble-pop-up-container > * {\r\n    contain: style;\r\n}\r\n\r\n.is-popup-closed { \r\n    transform: translateY(100%);\r\n    box-shadow: none !important;\r\n    contain: layout paint;\r\n}\r\n\r\n@media only screen and (min-width: 600px) {\r\n    .bubble-pop-up {\r\n        margin-left: 0 !important;\r\n        min-width: var(--desktop-width, 540px);\r\n        max-width: var(--desktop-width, 540px);\r\n        left: calc(50% - (var(--desktop-width, 540px) / 2));\r\n    }\r\n    .bubble-pop-up-container {\r\n        padding: 18px 18px calc(140px + var(--custom-height-offset-desktop)) 18px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 768px) {\r\n    .bubble-pop-up {\r\n      bottom: calc(-56px - var(--custom-height-offset-desktop));\r\n      left: calc(var(--mdc-drawer-width, 0px) / 2 + 50% - (var(--desktop-width, 540px) / 2));\r\n    }\r\n}\r\n\r\n.bubble-pop-up.editor {\r\n    transition: none !important;\r\n    position: relative !important;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100% !important;\r\n    backdrop-filter: none !important;\r\n    display: flex !important;\r\n    transform: none !important;\r\n    height: auto !important;\r\n    min-width: auto;\r\n    z-index: 0 !important;\r\n}\r\n\r\n/* Optimize performance during open/close transitions */\r\n.bubble-pop-up.is-opening .bubble-pop-up-container,\r\n.bubble-pop-up.is-closing .bubble-pop-up-container {\r\n    transform: translateZ(0);\r\n}\r\n\r\n.bubble-pop-up.is-opening .bubble-pop-up-background,\r\n.bubble-pop-up.is-closing .bubble-pop-up-background {\r\n    transform: translateZ(0);\r\n    contain: layout paint;\r\n}\r\n\r\n.bubble-header-container {\r\n    display: inline-flex;\r\n    height: 50px;\r\n    margin: 0;\r\n    padding: 0;\r\n    z-index: 3;\r\n    padding: 18px 18px 22px;\r\n    position: sticky;\r\n    top: 0;\r\n    background: none !important;\r\n    overflow: visible;\r\n}\r\n\r\n.bubble-header {\r\n    display: inline-flex;\r\n    flex-grow: 1;\r\n    margin-right: 14px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-name {\r\n    font-size: 14px;\r\n    font-weight: heavy;\r\n}\r\n\r\n.bubble-close-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 50px;\r\n    width: 50px;\r\n    border: var(--bubble-pop-up-close-button-border, var(--bubble-pop-up-border, var(--bubble-border, none)));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px));\r\n    z-index: 1;\r\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n    color: var(--primary-text-color);\r\n    flex-shrink: 0;\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-close-icon {\r\n    --mdc-icon-size: 24px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-button-card-container {\r\n    background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n}\r\n\r\n/* Container with placeholder - ensure proper sizing */\r\n.bubble-pop-up-container.has-placeholder {\r\n    min-height: 80px;\r\n    padding-top: 18px !important;\r\n    padding-bottom: 18px !important;\r\n    height: 72px !important;\r\n}\r\n\r\n/* Editor placeholder styling */\r\n.bubble-editor-placeholder {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 12px;\r\n    padding: 8px 16px;\r\n    margin-top: 20px;\r\n    background: var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)));\r\n    border-radius: var(--bubble-border-radius, 32px);\r\n    color: var(--primary-text-color);\r\n    font-size: 16px;\r\n    opacity: 0.8;\r\n    min-height: 56px;\r\n    box-sizing: border-box;\r\n    border: 1px dashed var(--divider-color, rgba(127, 127, 127, 0.3));\r\n    width: 100%;\r\n}\r\n\r\n.bubble-editor-placeholder ha-icon {\r\n    --mdc-icon-size: 24px;\r\n    color: var(--primary-text-color);\r\n    opacity: 0.6;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.bubble-editor-placeholder-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2px;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-editor-placeholder-hash {\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n    color: var(--primary-text-color);\r\n}\r\n\r\n.bubble-editor-placeholder-hint {\r\n    font-size: 11px;\r\n    color: var(--secondary-text-color);\r\n    opacity: 0.7;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-pop-up.editor > .bubble-pop-up-container {\r\n    padding-bottom: 18px !important;\r\n    mask-image: none;\r\n    -webkit-mask-image: none;  \r\n    overflow: hidden;  \r\n}\r\n\r\n.editor .bubble-pop-up-background {\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -1;\r\n    display: flex;\r\n    position: absolute;\r\n    background-color: var(--bubble-pop-up-main-background-color, var(--bubble-pop-up-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color)))));\r\n    border-radius: var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) var(--bubble-pop-up-border-radius, var(--bubble-border-radius, 42px)) !important;\r\n    backdrop-filter: none;\r\n    -webkit-backdrop-filter: none;\r\n}\r\n\r\n.editor * {\r\n    transition: none !important;\r\n}\r\n\r\n.no-header .bubble-header-container {\r\n    visibility: hidden !important;\r\n    height: 0px !important;\r\n    opacity: 0 !important;\r\n}\r\n\r\n.no-header .bubble-pop-up-container {\r\n    padding-top: 4px !important;\r\n}\r\n\r\n.no-header .bubble-pop-up-container.is-scrollable {\r\n    mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\r\n    -webkit-mask-image: linear-gradient(to bottom, transparent 0px, black 24px, black calc(100% - 24px), transparent 100%) !important;\r\n}\r\n\r\n.large .bubble-header-container {\r\n  height: calc( var(--row-height,56px) * var(--row-size,1) + var(--row-gap,8px) * ( var(--row-size,1) - 1 ));\r\n}\r\n\r\n.large .bubble-close-button {\r\n    height: var(--row-height,56px);\r\n    width: var(--row-height,56px);\r\n    --mdc-icon-size: 28px !important;\r\n} ";let t=e.popUp.querySelector("style");function n(){const t=e.config.bg_color||q,n=Math.min(1,Math.max(0,(e.config.bg_opacity??88)/100)),o=(0,a.Bz)(t,n,1.02),r=Math.min(1,.65*n),i=(0,a.Bz)(t,r,1.02);e.popUp.style.setProperty("--bubble-pop-up-background-color",o),e.popUp.style.setProperty("--bubble-pop-up-fade-color",i)}e.stylesAdded&&t?e.elements.customStyle=t:(e.elements.customStyle=(0,s.n)("style"),e.popUp.appendChild(e.elements.customStyle),e.popUp.appendChild(e.elements.style),e.stylesAdded=!0),e.updatePopupColorListener=()=>{n()},j.addEventListener("change",e.updatePopupColorListener,{passive:!0}),n(),e.popUp.style.setProperty("--desktop-width",e.config.width_desktop??"540px"),e.closeOnEscape=t=>{"Escape"===t.key&&e.config.hash===location.hash&&V()};let o=e.config.slide_to_close_distance??400;e.handleTouchMove=e=>{e.touches[0].clientY-P>o&&e.touches[0].clientY>O&&V(),O=e.touches[0].clientY};const r=e.popUp.querySelector(".bubble-pop-up-container");if(null===r){e.elements.popUpContainer=(0,s.n)("div"),e.elements.popUpContainer.classList.add("bubble-pop-up-container");let i=e.popUp.firstChild;for(;i;)e.elements.popUpContainer.appendChild(i),i=e.popUp.firstChild}else e.elements.popUpContainer=r;e.elements.popUpContainer,e.popUpBackground=(0,s.n)("div","bubble-pop-up-background"),e.popUp.appendChild(e.popUpBackground),e.popUp.appendChild(e.elements.headerContainer),e.popUp.appendChild(e.elements.popUpContainer),e.config.background_update?e.popUp.style.display="none":e.config.hash!==location.hash&&H(e,0),window.dispatchEvent(new Event("location-changed"))}catch(l){console.error(l)}}(e),e.config.background_update&&!e.headerInitialized){if(e.config.entity||e.config.name||e.config.icon){const t=e.config.sub_button;if(t){const t=(0,Me.mg)(e.config);e.config.sub_button={main:t.main||[],bottom:[]}}Mt(e,e.elements.header),e.config.sub_button=t}Ct(e),e.headerInitialized=!0}}else if(e.popUp&&e.elements){if(te(e),e.config.hash===location.hash||e.editor||e.config.background_update&&!e.headerInitialized){if(e.config.entity||e.config.name||e.config.icon){const t=e.config.sub_button;if(t){const t=(0,Me.mg)(e.config);e.config.sub_button={main:t.main||[],bottom:[]}}Mt(e,e.elements.header),e.config.sub_button=t}Ct(e),e.config.background_update&&(e.headerInitialized=!0)}e.editor||function(e){const t=e.config.trigger,n=e.config.trigger_close??!0;if(t){const o=!e.hasPageLoaded;e.hasPageLoaded=!0;const r=(0,p.eC)(t);if(0===r.length)return void(e.previousTrigger=!1);if((0,p.db)(r)){const t=(0,p.XH)(r,e._hass);if(t===e.previousTrigger)return;e.config.hash===location.hash?t||o||!n||V():t&&F(e.config.hash),e.previousTrigger=t}}else{let t=e.config.trigger_entity??"";if(""===t)return;let n=e.config.trigger_state??"",o=e.config.trigger_close??!1,r=e._hass.states[t]?.state;if(!t)return;if(!n)return;if(e.oldTriggerEntityState===r)return;const i=!e.hasPageLoaded;e.hasPageLoaded=!0,e.config.hash===location.hash?o&&n!==r&&(i||V()):r===n&&F(e.config.hash),e.oldTriggerEntityState=r}}(e),kt(e)}},button:Mt,"sub-buttons":function(e,t=e.content){"sub-buttons"!==e.cardType&&function(e,t=e.container){const n="sub-buttons",o=(0,Et.N0)(e,{type:n,appendTo:t,styles:".bubble-container.no-background,\r\n.bubble-container.no-background::after,\r\n.bubble-container.no-background::before {\r\n  background-color: transparent !important;\r\n  border-radius: 0 !important;\r\n  overflow: visible !important;\r\n  border: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.no-background .bubble-sub-button-container {\r\n  right: 0;\r\n}\r\n\r\n.bubble-sub-button-container.space-between-justify {\r\n  justify-content: space-between !important;\r\n}\r\n\r\n.bubble-sub-button-container {\r\n  height: auto;\r\n  min-height: auto;\r\n  max-height: none;\r\n}\r\n\r\nha-card.footer-mode {\r\n  bottom: var(--bubble-footer-bottom, 16px);\r\n  height: auto;\r\n  margin-top: 0;\r\n  position: fixed;\r\n  width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\r\n  left: calc(var(--mdc-drawer-width, 0px) + 4px);\r\n  z-index: 5;\r\n}\r\n\r\nha-card.footer-mode:not(.footer-full-width) {\r\n  width: var(--bubble-footer-width, 500px);\r\n  left: calc(var(--mdc-drawer-width, 0px) + (100% - var(--mdc-drawer-width, 0px) - var(--bubble-footer-width, 500px)) / 2);\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  ha-card.footer-mode {\r\n    width: calc(100% - 16px);\r\n    left: 8px;\r\n  }\r\n  \r\n  ha-card.footer-mode:not(.footer-full-width) {\r\n    width: calc(100% - 16px);\r\n    left: 8px;\r\n  }\r\n}\r\n\r\nha-card.footer-mode .bubble-container {\r\n  margin: 0;\r\n  box-shadow: var(--bubble-footer-box-shadow, 2px 2px 40px rgba(0, 0, 0, 0.4));\r\n}\r\n\r\nha-card.footer-mode .bubble-container::before {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  opacity: 0.2;\r\n  background: var(--bubble-pop-up-main-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n}\r\n\r\nha-card.footer-mode.editor {\r\n  position: relative;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.editor {\r\n  transition: none !important;\r\n}",withBaseElements:!1,withBackground:!0,withFeedback:!1,withSubButtons:!0});if(e.config.hide_main_background&&o.mainContainer.classList.add("no-background"),e.config.menu_style&&o.subButtonContainer.classList.add("menu-style"),e.config.menu_style&&e.config.labels_below&&o.subButtonContainer.classList.add("labels-below"),e.config.space_between_buttons&&o.subButtonContainer.classList.add("space-between-buttons"),e.config.hide_button_labels&&o.subButtonContainer.classList.add("hide-labels"),e.config.compact_mode&&o.subButtonContainer.classList.add("compact-mode"),e.config.footer_mode){e.card.classList.add("footer-mode"),e.config.footer_full_width?e.card.classList.add("footer-full-width"):e.config.footer_width&&e.card.style.setProperty("--bubble-footer-width",`${e.config.footer_width}px`);const t=e.config.footer_bottom_offset||16;e.card.style.setProperty("--bubble-footer-bottom",`${t}px`)}e.config.footer_mode&&!e.editor&&(e.cardContainer=e.card.parentNode.host?.parentNode?.parentNode,e.cardContainer,e.cardContainer.classList.contains("card")&&(e.cardContainer.style.position="absolute")),e.cardType=n}(e,t);const n=e.config.sub_button;if(n){const t=(0,Me.mg)(e.config);e.config.sub_button={main:[],bottom:t.bottom||[]}}(0,u.Kr)(e),e.config.sub_button=n,function(e){(0,s.JK)(e),T(e),e.config.footer_mode&&(function(e){const t=e.config.footer_bottom_offset||16;e.card.style.setProperty("--bubble-footer-bottom",`${t}px`)}(e),e.editor||function(e){const t=function(e){const t=document.querySelector("body > home-assistant");if(!t?.shadowRoot)return e?.parentNode;const n=t.shadowRoot.querySelector("home-assistant-main");if(!n?.shadowRoot)return e?.parentNode;const o=n.shadowRoot.querySelector("ha-drawer > partial-panel-resolver > ha-panel-lovelace");if(!o?.shadowRoot)return e?.parentNode;const r=o.shadowRoot.querySelector("hui-root");return r?.shadowRoot&&r.shadowRoot.querySelector("#view > hui-view > hui-sections-view")||e?.parentNode}(Tt(e));t&&function(e,t,n){const o=()=>{const o=(Number(e.offsetHeight||e.getBoundingClientRect().height)||0)+(Number(n?.config?.footer_bottom_offset)||16)+16;t.style.paddingBottom=`${o}px`};requestAnimationFrame((()=>{requestAnimationFrame(o)}))}(e.card,t,e)}(e))}(e),function(e){const t=e.editor||e.detectedEditor,n=e.card.classList.contains("editor");t?n||(Bt(e),e.card.classList.add("editor")):n&&(e.card.classList.remove("editor"),e.config.footer_mode?function(e){const t=Tt(e);t&&""!==t.style.position||function(e){const t=Tt(e);t?.classList.contains("card")&&(t.style.position="absolute",e.cardContainer=t)}(e)}(e):Bt(e))}(e)},separator:function(e){"separator"!==e.cardType&&function(e){const t="separator";e.elements={},e.elements.mainContainer=(0,s.n)("div","bubble-container bubble-separator separator-container"),e.elements.icon=(0,s.n)("ha-icon","bubble-icon"),e.elements.name=(0,s.n)("h4","bubble-name"),e.elements.line=(0,s.n)("div","bubble-line"),e.elements.mainContainer.appendChild(e.elements.icon),e.elements.mainContainer.appendChild(e.elements.name),e.elements.mainContainer.appendChild(e.elements.line),(0,Et.N0)(e,{type:t,styles:".bubble-container {\r\n    display: flex;\r\n    background: none;\r\n    align-items: center;\r\n    height: 40px;\r\n    overflow: visible;\r\n    --bubble-separator-border: none;\r\n}\r\n.bubble-icon {\r\n    display: inline-flex;\r\n    height: auto;\r\n    width: auto;\r\n    margin: 0 22px 0 8px;\r\n}\r\n.bubble-name {\r\n    margin: 0 30px 0 0;\r\n    font-size: 16px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.bubble-name:empty {\r\n    display: none;\r\n}\r\n\r\n.bubble-line {\r\n    border-radius: 6px;\r\n    margin-right: 14px;\r\n    opacity: 0.6;\r\n    flex-grow: 1;\r\n    height: 6px;\r\n    background-color: var(--bubble-line-background-color, var(--ha-card-background-color, var(--secondary-background-color)));\r\n}\r\n\r\n.bubble-sub-button-container {\r\n    margin-left: 8px;\r\n}\r\n\r\n.rows-2 .bubble-sub-button-container {\r\n    margin-left: 14px;\r\n}\r\n\r\n.large .bubble-container {\r\n    height: calc( var(--row-height,44px) * var(--row-size,0.8) + var(--row-gap,8px) * ( var(--row-size,0.8) - 1 ))\r\n}\r\n\r\n.bubble-container.with-bottom-buttons {\r\n    align-items: flex-start;\r\n}\r\n\r\n.with-bottom-buttons .bubble-line {\r\n    margin-top: 15px;\r\n}\r\n\r\n.with-bottom-buttons .bubble-icon,\r\n.with-bottom-buttons .bubble-name,\r\n.with-bottom-buttons .bubble-line {\r\n    display: initial;\r\n    line-height: 36px;\r\n}",withMainContainer:!1,withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1}),e.cardType=t}(e),function(e){e.elements.icon.icon=(0,d.sW)(e),""===e.elements.icon.icon&&""===e.elements.icon.style.margin?(e.elements.icon.style.margin="0px 8px",e.elements.icon.style.width="0px"):""!==e.elements.icon.icon&&"0px 8px"===e.elements.icon.style.margin&&(e.elements.icon.style.margin="",e.elements.icon.style.width="")}(e),(0,$t.m9)(e,!1),(0,u.Kr)(e),function(e){(0,s.JK)(e),T(e)}(e)},cover:function(e){"cover"!==e.cardType&&function(e){const t="cover",n=(0,Et.N0)(e,{type:t,styles:".bubble-cover-button {\r\n  display: flex;\r\n  position: relative;\r\n  height: 36px;\r\n  width: 36px;\r\n  border-radius: var(--bubble-cover-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n  background-color: var(--bubble-cover-button-background-color);\r\n  cursor: pointer;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n  transition: all 0.3s ease;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.bubble-cover-button-icon {\r\n  --mdc-icon-size: 20px;\r\n  color: var(--primary-text-color);\r\n  line-height: normal;\r\n}\r\n\r\n.bubble-buttons-container {\r\n  align-items: center;\r\n  gap: 8px;\r\n}\r\n\r\n.bubble-button.disabled {\r\n  opacity: 0.3 !important;\r\n  pointer-events: none !important;\r\n  cursor: none !important;\r\n}\r\n\r\n.large .bubble-cover-button-icon {\r\n  --mdc-icon-size: 24px;\r\n}",withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(e,t,n){const o=(0,s.n)("div",`bubble-cover-button ${t}`),r=(0,s.n)("ha-icon",`bubble-cover-button-icon ${n}`);r.setAttribute("icon",e);const i=(0,s.n)("div","bubble-feedback-container"),a=(0,s.n)("div","bubble-feedback-element feedback-element");return i.appendChild(a),o.appendChild(i),o.appendChild(r),o.icon=r,o.feedback=a,o.haRipple=(0,s.n)("ha-ripple"),o.appendChild(o.haRipple),o}n.buttonsContainer.classList.add("bubble-buttons","buttons-container"),n.buttonOpen=o("mdi:arrow-up","bubble-button bubble-open button open","bubble-icon-open"),n.buttonStop=o("mdi:stop","bubble-button bubble-stop button stop","bubble-icon-stop"),n.buttonClose=o("mdi:arrow-down","bubble-button bubble-close button close","bubble-icon-close"),n.buttonsContainer.append(n.buttonOpen,n.buttonStop,n.buttonClose),n.buttonOpen.addEventListener("click",(()=>{(0,s.jp)("selection");const t=e.config.open_service??"cover.open_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonStop.addEventListener("click",(()=>{(0,s.jp)("selection");const t=e.config.stop_service??"cover.stop_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),n.buttonClose.addEventListener("click",(()=>{(0,s.jp)("selection");const t=e.config.close_service??"cover.close_cover",[n,o]=t.split(".");e._hass.callService(n,o,{entity_id:e.config.entity})})),e.cardType=t}(e),(0,$t.zQ)(e),(0,$t.wd)(e),(0,$t.m9)(e),(0,$t.Uk)(e),function(e){const t=e._hass.states[e.config.entity],{current_position:n,assumed_state:o}=t.attributes,r=It(t,1),i=It(t,2),a=It(t,8),l=function(e){return void 0!==e.attributes.current_position?100===e.attributes.current_position:"open"===e.state}(t),c=function(e){return void 0!==e.attributes.current_position?0===e.attributes.current_position:"closed"===e.state}(t),u="curtain"===(0,s.D$)(e,"device_class");e.elements.icon.icon=l?(0,d.sW)(e,e.config.entity,e.config.icon_open):(0,d.sW)(e,e.config.entity,e.config.icon_close);const p=e.config.icon_up||(u?"mdi:arrow-expand-horizontal":"mdi:arrow-up"),b=e.config.icon_down||(u?"mdi:arrow-collapse-horizontal":"mdi:arrow-down");e.elements.buttonOpen.icon.setAttribute("icon",p),e.elements.buttonClose.icon.setAttribute("icon",b),void 0!==n?(l?e.elements.buttonOpen.classList.add("disabled"):r&&e.elements.buttonOpen.classList.remove("disabled"),c?e.elements.buttonClose.classList.add("disabled"):i&&e.elements.buttonClose.classList.remove("disabled")):(e.elements.buttonOpen.classList.remove("disabled"),e.elements.buttonClose.classList.remove("disabled")),e.elements.buttonStop.style.display=a?"":"none"}(e),(0,u.Kr)(e),function(e){(0,s.JK)(e),T(e)}(e)},"empty-column":function(e){"empty-column"!==e.cardType&&function(e){e.elements={},e.elements.emptyColumnCard=(0,s.n)("div","bubble-empty-column empty-column"),e.elements.style=(0,s.n)("style"),e.elements.style.textContent=".empty-column {\r\n    display: flex;\r\n    width: 100%;\r\n}\r\n",e.elements.customStyle=(0,s.n)("style"),e.content.innerHTML="",e.content.appendChild(e.elements.emptyColumnCard),e.content.appendChild(e.elements.style),e.content.appendChild(e.elements.customStyle),e.cardType="empty-column"}(e)},"horizontal-buttons-stack":function(e){"horizontal-buttons-stack"!==e.cardType&&function(e){e.elements={},e.elements.buttons=[],e.elements.cardContainer=(0,s.n)("div","bubble-horizontal-buttons-stack-card-container horizontal-buttons-stack-container");let t=1;for(;e.config[t+"_link"];)e.elements.cardContainer.appendChild(Ot(e,t)),t++;e.elements.style=(0,s.n)("style"),e.elements.style.textContent="@keyframes from-bottom {\r\n    0% { transform: translate(-50%, 100px); }\r\n    26% { transform: translate(-50%, -8px); }\r\n    46% { transform: translate(-50%, 1px); }\r\n    62% { transform: translate(-50%, -2px); }\r\n    70% { transform: translate(-50%, 0); }\r\n    100% { transform: translate(-50%, 0); }\r\n}\r\n@keyframes pulse {\r\n    0% { filter: brightness(0.7); }\r\n    100% { filter: brightness(1.3); }\r\n}\r\nha-card {\r\n    border-radius: 0;\r\n}\r\n.horizontal-buttons-stack-card {\r\n    bottom: 16px;\r\n    height: 51px;\r\n    margin-top: 0;\r\n    position: fixed;\r\n    width: calc(100% - var(--mdc-drawer-width, 0px) - 8px);\r\n    left: calc(var(--mdc-drawer-width, 0px) + 4px);\r\n    z-index: 6; /* Higher value hide the more-info panel */\r\n}\r\n@media only screen and (max-width: 870px) {\r\n    .horizontal-buttons-stack-card {\r\n        width: calc(100% - 16px);\r\n        left: 8px;\r\n    }\r\n\r\n    .horizontal-buttons-stack-card::before {\r\n        left: -10px;\r\n    }\r\n}\r\n.horizontal-buttons-stack-card::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: -32px;\r\n    display: none;\r\n    background: linear-gradient(0deg, var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--primary-background-color)))) 50%, transparent);\r\n    width: 200%;\r\n    height: 100px;\r\n    pointer-events: none;\r\n}\r\n.has-gradient.horizontal-buttons-stack-card::before {\r\n    display: block;\r\n}\r\n\r\n.card-content {\r\n    width: calc(100% + 36px);\r\n    padding: 0 !important;\r\n    max-width: calc(var(--desktop-width) - 8px);\r\n    box-sizing: border-box;\r\n    overflow: scroll;\r\n    position: absolute;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n    mask-image: linear-gradient(\r\n        90deg,\r\n        #000000 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        transparent 100%\r\n    );\r\n}\r\n.is-scrollable.card-content {\r\n    padding: 0 !important;\r\n    width: 100%;\r\n}\r\n.is-scrolled.card-content {\r\n    padding: 0 !important;\r\n    width: 100%;\r\n    mask-image: linear-gradient(\r\n        90deg,\r\n        transparent 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        transparent 100%\r\n    );\r\n}\r\n.is-maxed-scroll.card-content {\r\n    mask-image: linear-gradient(\r\n        90deg,\r\n        transparent 0%,\r\n        #000000 calc(0% + 28px),\r\n        #000000 calc(100% - 28px),\r\n        #000000 100%\r\n    );\r\n}\r\n.card-content::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.bubble-horizontal-buttons-stack-card-container {\r\n    height: 51px;\r\n    position: relative;\r\n    margin: auto;\r\n}\r\n\r\n.bubble-button {\r\n    align-items: center;\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    color: var(--primary-text-color);\r\n    cursor: pointer;\r\n    display: inline-flex;\r\n    height: 50px;\r\n    left: 0;\r\n    padding: 0 16px;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    z-index: 1;\r\n    transition: transform 1s;\r\n    box-sizing: border-box;\r\n}\r\n.bubble-button.highlight {\r\n    animation: pulse 1.4s infinite alternate;\r\n}\r\n.bubble-background-color {\r\n    border: 1px solid var(--primary-text-color);\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    box-sizing: border-box;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    transition: background-color 1s;\r\n    width: 100%;\r\n    z-index: 1;\r\n}\r\n.bubble-background {\r\n    opacity: 0.8;\r\n    border-radius: var(--bubble-horizontal-buttons-stack-border-radius, var(--bubble-border-radius, 32px));\r\n    width: 100%;\r\n    height: 100%;\r\n    box-sizing: border-box !important;\r\n    position: absolute;\r\n    left: 0;\r\n    z-index: 0;\r\n    background-color: var(--bubble-horizontal-buttons-stack-background-color, var(--bubble-secondary-background-color, var(--background-color, var(--secondary-background-color))));\r\n}\r\n.bubble-icon {\r\n    height: 24px;\r\n    width: 24px;\r\n    z-index: 2;\r\n}\r\n.bubble-icon + .bubble-name {\r\n    margin-left: 8px;\r\n    z-index: 2;\r\n}\r\n\r\n.horizontal-buttons-stack-card.editor {\r\n    position: relative;\r\n    width: 100%;\r\n    left: 0;\r\n    bottom: 0;\r\n}\r\n.horizontal-buttons-stack-card.editor::before {\r\n    background: none;\r\n}",e.elements.customStyle=(0,s.n)("style"),e.card.classList.add("horizontal-buttons-stack-card"),e.card.style.marginLeft=e.config.margin??"",e.config.hide_gradient||e.card.classList.add("has-gradient"),e.card.style.setProperty("--desktop-width",e.config.width_desktop??"500px"),e.elements.cardContainer.appendChild(e.elements.style),e.elements.cardContainer.appendChild(e.elements.customStyle),e.content.appendChild(e.elements.cardContainer),e.content.addEventListener("scroll",(()=>{e.content.scrollLeft>0?e.content.classList.add("is-scrolled"):e.content.classList.remove("is-scrolled"),e.content.scrollWidth-12<e.content.offsetWidth+e.content.scrollLeft?e.content.classList.add("is-maxed-scroll"):e.content.classList.remove("is-maxed-scroll")})),(e.config.rise_animation??1)&&(e.content.style.animation="from-bottom .6s forwards",setTimeout((()=>{e.content.style.animation="none"}),1500));let n=e.card.parentNode.host;n?.parentElement&&!e.editor&&"hui-card"===n?.parentElement?.tagName.toLowerCase()&&(n.parentElement.style.padding="0 0 80px"),e.cardType="horizontal-buttons-stack"}(e),function(e){T(e)}(e),function(e){if(!e.config.auto_order)return;const t=e._hass.states;e.elements.buttons.sort(((e,n)=>{if(!t[e.pirSensor])return 1;if(!t[n.pirSensor])return-1;const o=t[e.pirSensor]?.last_updated,r=t[n.pirSensor]?.last_updated;return"on"===t[e.pirSensor]?.state&&"on"===t[n.pirSensor]?.state?o>r?-1:o===r?0:1:"on"===t[e.pirSensor]?.state?-1:"on"===t[n.pirSensor]?.state?1:o>r?-1:o===r?0:1}))}(e),function(e){e.elements.buttons.forEach((t=>{const n=t.index,o=e.config[`${n}_name`]??"",r=e.config[`${n}_icon`]??"",i=e.config[`${n}_pir_sensor`],a=e.config[`${n}_link`],s=e.config[`${n}_entity`];t.pirSensor=i,t.lightEntity=s,t.link=a,o?(t.name.innerText=o,t.name.style.display=""):t.name.style.display="none",r?(t.icon.icon=r,t.icon.style.display=""):t.icon.style.display="none",void 0===a&&(t.remove(),e.elements.buttons=e.elements.buttons.filter((e=>e!==t)),e.elements.buttons.forEach(((e,t)=>{e.index=t+1})))}));let t=e.elements.buttons.length+1;for(;void 0!==e.config[`${t}_link`];){if(!e.elements.buttons.find((e=>e.index===t))){const n=Ot(e,t);e.elements.buttons.push(n)}t++}}(e),function(e){e.editor||e.detectedEditor?(e.elements.cardContainer.classList.add("editor"),e.card.classList.add("editor")):(e.elements.cardContainer.classList.remove("editor"),e.card.classList.remove("editor"))}(e),function(e){let t=0;for(let n=0;n<e.elements.buttons.length;++n){let o=localStorage.getItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`);e.elements.buttons[n].style.width="";const r=e.elements.buttons[n].offsetWidth;e.elements.buttons[n].style.width=`${r}px`,r>0&&(o=r,localStorage.setItem(`bubbleButtonWidth-${e.elements.buttons[n].link}`,`${r}`)),null!==o&&(e.elements.buttons[n].style.transform=`translateX(${t}px)`,e.elements.buttons[n].style.width="",t+=+o+12)}e.elements.cardContainer.style.width=`${t}px`}(e),function(e){e.elements.buttons.forEach((t=>{const n=e._hass.states[t.lightEntity],o=n?.attributes.rgb_color,r=n?.state;if(o){const e=(0,a.qd)(o)?"rgba(255, 220, 200, 0.5)":`rgba(${o}, 0.5)`;t.backgroundColor.style.backgroundColor=e,t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"}else"on"==r?(t.backgroundColor.style.backgroundColor="rgba(255, 255, 255, 0.5)",t.backgroundColor.style.borderColor="rgba(0, 0, 0, 0)"):(t.backgroundColor.style.backgroundColor="rgba(0, 0, 0, 0)",t.backgroundColor.style.borderColor="var(--primary-text-color)")}))}(e),function(e){e.content.scrollWidth>=e.content.offsetWidth?e.content.classList.add("is-scrollable"):e.content.classList.remove("is-scrollable")}(e)},calendar:function(e){"calendar"!==e.cardType&&function(e){const t="calendar",n=(0,Et.N0)(e,{type:t,styles:'.bubble-container {\r\n  height: var(--bubble-calendar-height, 56px);\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n.bubble-calendar-content {\r\n  flex-grow: 1;\r\n  min-width: 0;\r\n  height: 100%;\r\n  overflow: scroll;\r\n}\r\n.bubble-calendar-content.can-scroll-top {\r\n  mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black 100%);\r\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black 100%);\r\n}\r\n.bubble-calendar-content.can-scroll-bottom {\r\n  mask-image: linear-gradient(to bottom, black 0%, black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\r\n  -webkit-mask-image: linear-gradient(to bottom, black 0%, black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\r\n}\r\n.bubble-calendar-content.can-scroll-top.can-scroll-bottom {\r\n  mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\r\n  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black var(--bubble-calendar-mask-size, 16px), black calc(100% - var(--bubble-calendar-mask-size, 16px)), transparent 100%);\r\n}\r\n.card-content::after {\r\n  border-radius: 0 0 var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px)) var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  content: "";\r\n  display: flex;\r\n  height: 32px;\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n  pointer-events: none;\r\n  transition: opacity .2s, transform .2s;\r\n  z-index: 1;\r\n}\r\n.bubble-sub-button-container {\r\n  flex-shrink: 0;\r\n  position: sticky !important;\r\n  top: 0;\r\n}\r\n.bubble-day-wrapper {\r\n  display: flex;\r\n  align-items: flex-start;\r\n  justify-content: center;\r\n  width: 100%;\r\n  gap: 8px;\r\n  padding: 7px 16px 7px 8px;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.bubble-day-wrapper + .bubble-day-wrapper::before {\r\n  content: "";\r\n  position: absolute;\r\n  top: -1px;\r\n  left: 62px;\r\n  right: 16px;\r\n  height: 2px;\r\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n.bubble-day-chip {\r\n  display: flex;\r\n  flex-grow: 0;\r\n  flex-shrink: 0;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 42px;\r\n  height: 42px;\r\n  border-radius: var(--bubble-button-icon-border-radius, var(--bubble-icon-border-radius, var(--bubble-border-radius, 50%)));\r\n  background-color: var(--bubble-button-icon-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n  position: relative;\r\n}\r\n.bubble-day-number {\r\n  font-size: 24px;\r\n  line-height: 20px;\r\n  font-weight: 600;\r\n  opacity: 0.6;\r\n}\r\n.is-active .bubble-day-number {\r\n  filter: brightness(1.1);\r\n  opacity: 1;\r\n}\r\n.bubble-day-month {\r\n  font-size: 12px;\r\n  line-height: 12px;\r\n  font-weight: 400;\r\n  opacity: 0.6;\r\n}\r\n.is-active .bubble-day-month {\r\n  filter: brightness(1.1);\r\n  opacity: 1;\r\n}\r\n.bubble-day-events {\r\n  width: 100%;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  min-width: 0;\r\n}\r\n.bubble-event {\r\n  background-color: var(--bubble-event-background-color);\r\n  background-image: var(--bubble-event-background-image);\r\n  display: flex;\r\n  align-items: flex-start;\r\n  gap: 8px;\r\n  padding: 4px 6px;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  margin-left: -6px;\r\n  position: relative;\r\n  line-height: 1em;\r\n}\r\n.bubble-event-time {\r\n  font-size: 12px;\r\n  font-weight: 400;\r\n  white-space: nowrap;\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n  opacity: 0.7;\r\n}\r\n.bubble-event-color {\r\n  height: 12px;\r\n  width: 12px;\r\n  border-radius: var(--bubble-calendar-border-radius, var(--bubble-border-radius, 32px));\r\n  flex-shrink: 0;\r\n  flex-grow: 0;\r\n}\r\n.bubble-event-name-wrapper {\r\n  width: 10px;\r\n  flex: 1;\r\n}\r\n.bubble-event-name {\r\n  font-size: 13px;\r\n  font-weight: 600;\r\n  max-width: 100%;\r\n  min-width: 0;\r\n  flex-shrink: 1;\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n.bubble-event-place {\r\n  opacity: 0.6;\r\n  display: flex;\r\n  align-items: center;\r\n  margin-top: 2px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  max-width: 100%;\r\n  min-width: 0;\r\n  flex-shrink: 1;\r\n  flex-grow: 1;\r\n}\r\n.bubble-event-place-icon {\r\n  display: inline-flex;\r\n  --mdc-icon-size: 12px;\r\n  margin-right: 4px;\r\n}\r\n\r\n.bubble-sub-button-container.fixed-top  {\r\n  margin-top: 10px;\r\n}\r\n\r\n.with-bottom-buttons .bubble-calendar-content {\r\n  height: 52px;\r\n}',withBaseElements:!1,withSubButtons:!0,iconActions:!1,buttonActions:!1});n.calendarCardContent=(0,s.n)("div","bubble-calendar-content"),n.mainContainer.style.setProperty("--bubble-calendar-height",56*(e.config.rows??1)+"px"),n.mainContainer.prepend(n.calendarCardContent),e.cardType=t}(e);const t=JSON.stringify(e.config.entities.map((t=>e._hass.states[t.entity])));e.cacheKey!==t&&(e.cacheKey=t,setTimeout((()=>{e.cacheKey=""}),9e5),async function(e){const t=Math.max(1,e.config.days??7),n=new Date,o=n.toISOString(),r=new Date(n);r.setDate(r.getDate()+(t-1)),r.setHours(23,59,59,999);const i=`start=${o}&end=${r.toISOString()}`,a=e.config.entities.map((async t=>{const n=`calendars/${t.entity}?${i}`;return(await e._hass.callApi("get",n)).map((e=>({...e,entity:t})))}));let s=(await Promise.all(a)).flat().sort(Ne);!1===e.config.show_started_events&&(s=function(e,t){return e.filter((e=>{const n=je(e.start),o=je(e.end);return!(n<t&&o>t)}))}(s,new Date)),e.events=s.slice(0,e.config.limit??void 0)}(e).then((()=>{!async function(e){const t=Pe(e._hass),n=e.events.reduce(((e,t)=>{const n=(e=>{const t=je(e);return`${t.getFullYear()}-${(t.getMonth()+1).toString().padStart(2,"0")}-${t.getDate().toString().padStart(2,"0")}`})(t.start);return e[n]||(e[n]=[]),e[n].push(t),e}),{});if(0===Object.keys(n).length){const e=(new Date).toISOString().split("T")[0];n[e]=[{start:{date:e},end:{date:e},summary:"No events",entity:{color:"transparent"}}]}const o=new DocumentFragment;Object.keys(n).sort().forEach((i=>{const a=je({date:i}),c=new Date,d=(0,s.n)("div","bubble-day-number"),u=e._hass.locale.language,p=e._hass.locale.time_format;d.innerHTML=`${a.getDate()}`;const b=(0,s.n)("div","bubble-day-month");b.innerHTML=a.toLocaleString(u,{month:"short"});const h=(0,s.n)("div","bubble-day-chip");h.appendChild(d),h.appendChild(b),a.getDate()===c.getDate()&&a.getMonth()===c.getMonth()&&h.classList.add("is-active"),(0,r.dN)(h,{...e.config},null);const m=(0,s.n)("div","bubble-day-events");n[i].forEach((n=>{const o=void 0!==n.start.date,i=new Date,a=je(n.start),c=je(n.end),d=(0,s.n)("div","bubble-event-time");d.innerHTML=o?t("cards.calendar.all_day"):a.toLocaleTimeString(u,{hour:"numeric",minute:"numeric",hour12:"12"===p}),o||!0!==e.config.show_end||(d.innerHTML+=` – ${c.toLocaleTimeString(u,{hour:"numeric",minute:"numeric",hour12:"12"===p})}`);const b=(0,s.n)("div","bubble-event-name-wrapper"),h=(0,s.n)("div","bubble-event-name"),g=n.summary||t("cards.calendar.busy");(0,l.N)(e,h,g),b.appendChild(h);const f=(0,s.n)("div","bubble-event-color");if(f.style.backgroundColor=n.entity.color?n.entity.color.startsWith("#")?n.entity.color:`var(--${n.entity.color}-color)`:qe(Oe(n.entity.entity)),"transparent"===n.entity.color&&(f.style.display="none"),!0===e.config.show_place&&null!==n.location){const t=(0,s.n)("div","bubble-event-place");(0,l.N)(e,t,n.location),b.appendChild(t)}const y=(0,s.n)("div","bubble-event");y.appendChild(f),y.appendChild(d),y.appendChild(b),(0,r.dN)(y,e.config.event_action,n.entity.entity,{tap_action:{action:"none"},double_tap_action:{action:"none"},hold_action:{action:"none"}});const v="var(--bubble-event-accent-color, var(--bubble-accent-color, var(--bubble-default-color)))";if(!0===e.config.show_progress&&o&&a<i)y.style.setProperty("--bubble-event-background-color",v);else if(!0===e.config.show_progress&&!o&&a<i){const e=qt(a,c),t=100*qt(a,i)/e;y.style.setProperty("--bubble-event-background-image",`linear-gradient(to right, ${v} ${t}%, transparent ${t}%)`)}m.appendChild(y)}));const g=(0,s.n)("div","bubble-day-wrapper");g.appendChild(h),g.appendChild(m),o.appendChild(g),e.elements.mainContainer.scrollHeight>e.elements.mainContainer.offsetHeight&&e.content.classList.add("is-overflowing")})),e.elements.calendarCardContent.innerHTML="",e.elements.calendarCardContent.appendChild(o),setTimeout((()=>jt(e)),0)}(e)}))),function(e){if((0,s.JK)(e),T(e),e.elements?.calendarCardContent){jt(e);const t=e.elements.calendarCardContent;t&&!t._scrollListener&&(t._scrollListener=()=>jt(e),t.addEventListener("scroll",t._scrollListener))}}(e),(0,u.Kr)(e)},"media-player":function(e){"media-player"!==e.cardType&&function(e){const t="media-player",n=(0,Et.N0)(e,{type:t,styles:".bubble-media-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-button-background-color);\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.bubble-media-player .bubble-entity-picture {\r\n    inset: 0;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-cover-icon-crossfade,\r\n.bubble-cover-background-crossfade {\r\n    position: absolute;\r\n    inset: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-cover-crossfade-layer {\r\n    position: absolute;\r\n    inset: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    opacity: 0;\r\n    transition: opacity 2s ease;\r\n    pointer-events: none;\r\n}\r\n\r\n.bubble-cover-crossfade-layer.is-visible {\r\n    opacity: 1;\r\n}\r\n\r\n.bubble-cover-crossfade-layer.is-empty {\r\n    opacity: 0;\r\n}\r\n\r\n.bubble-cover-crossfade-layer--icon {\r\n    z-index: 0;\r\n}\r\n\r\n.bubble-media-player .bubble-cover-background {\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-button-container {\r\n    align-items: center;\r\n    gap: 8px;\r\n  }\r\n\r\n.bubble-media-button-icon {\r\n    --mdc-icon-size: 20px;\r\n    color: var(--primary-text-color);\r\n    line-height: normal;\r\n}\r\n\r\n.bubble-play-pause-button,\r\n.full-width > .bubble-play-pause-button {\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n}\r\n\r\n.bubble-play-pause-button .bubble-media-button-icon {\r\n    color: var(--bubble-media-player-play-pause-icon-color, var(--bubble-button-active-icon-color, var(--primary-background-color, white)));\r\n}\r\n\r\n.bubble-play-pause-button:not(.large) {\r\n    height: 36px;\r\n    width: 36px;\r\n}\r\n\r\n/* Volume slider wrapper (similar to sub-button slider) */\r\n.bubble-volume-slider-wrapper {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 8px;\r\n    height: 38px;\r\n    width: calc(100% - 16px);\r\n    left: 8px;\r\n    right: 8px;\r\n    z-index: 1;\r\n    opacity: 1;\r\n    transition: opacity .2s, transform .2s;\r\n    transform: translateX(0);\r\n    touch-action: none;\r\n}\r\n\r\n.bubble-volume-slider {\r\n    position: relative;\r\n    flex: 1 1 auto;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-slider-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background)))));\r\n}\r\n\r\n.bubble-range-value {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    height: 38px;\r\n    align-items: center;\r\n    font-size: 12px;\r\n    opacity: 0.8;\r\n    z-index: 1;\r\n}\r\n\r\n.bubble-mute-button {\r\n    opacity: 1;\r\n    transition: opacity .2s, transform .2s;\r\n    transform: translateX(0);\r\n}\r\n\r\n.is-hidden {\r\n    opacity: 0 !important;\r\n    pointer-events: none;\r\n    transform: translateX(14px);\r\n}\r\n\r\n/* Keep hidden volume slider overlays inside card width */\r\n.bubble-volume-slider-wrapper.is-hidden {\r\n    right: calc(8px + 14px);\r\n}\r\n\r\n/* Position volume slider at bottom when buttons are in bottom-fixed mode */\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper {\r\n    bottom: 8px;\r\n    top: auto;\r\n    width: 100%;\r\n    left: 0;\r\n    right: auto;\r\n    padding: 0px 8px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Bottom-fixed layout uses explicit width reduction to absorb the translateX */\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper.is-hidden {\r\n    width: calc(100% - 14px);\r\n}\r\n\r\n.bubble-range-fill {\r\n    background-color: var(--bubble-accent-color, var(--bubble-default-color));\r\n    height: 101%; /* Ensure the fill covers the entire slider */\r\n}\r\n\r\n/* Original mute button (in icon container, normal mode) */\r\n.bubble-mute-button {\r\n    display: flex;\r\n    position: absolute;\r\n    height: 38px;\r\n    width: 38px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* Mute button in volume slider wrapper */\r\n.bubble-volume-slider-mute-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-button-background-color);\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n    flex-shrink: 0;\r\n    touch-action: none;\r\n}\r\n\r\n/* Close button in volume slider wrapper */\r\n.bubble-volume-slider-close-button {\r\n    display: flex;\r\n    position: relative;\r\n    height: 36px;\r\n    width: 36px;\r\n    border-radius: var(--bubble-media-player-buttons-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-media-player-button-background-color);\r\n    cursor: pointer;\r\n    align-items: center;\r\n    justify-content: center;\r\n    overflow: hidden;\r\n    transition: all 0.3s ease;\r\n    box-sizing: border-box;\r\n    flex-shrink: 0;\r\n    touch-action: none;\r\n}\r\n\r\n.bubble-media-info-container {\r\n    display: flex;\r\n    line-height: 14px;\r\n    font-size: 12px;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-grow: 1;\r\n    margin: 0 16px 0 4px;\r\n    pointer-events: none;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.bubble-title,\r\n.bubble-artist {\r\n    display: flex;\r\n    margin: 2px 0;\r\n    position: relative;\r\n    white-space: nowrap;\r\n}\r\n\r\n.bubble-title {\r\n    font-weight: 600;\r\n}\r\n\r\n.bubble-background {\r\n    background-size: cover;\r\n    background-position: center;\r\n    filter: blur(50px);\r\n    opacity: 0.5;\r\n}\r\n\r\n.bubble-media-info-container.name-without-icon {\r\n    margin-left: 16px;\r\n}\r\n\r\n@media screen and (max-width: 250px) {\r\n    .bubble-previous-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 206px) {\r\n    .bubble-next-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 160px) {\r\n    .bubble-volume-button {\r\n        display: none;\r\n    }\r\n}\r\n\r\n.large .bubble-mute-button {\r\n  height: 42px;\r\n  width: 42px;\r\n}\r\n\r\n.large .bubble-volume-slider-wrapper {\r\n  height: 42px;\r\n}\r\n\r\n.large .bubble-volume-slider {\r\n  height: 42px;\r\n  border-radius: var(--bubble-media-player-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n}\r\n\r\n.large .bubble-volume-slider-mute-button,\r\n.large .bubble-volume-slider-close-button {\r\n  height: 42px;\r\n  width: 42px;\r\n}\r\n\r\n.large .bubble-range-value {\r\n  place-items: center;\r\n  height: 42px;\r\n}\r\n\r\n.full-width > .bubble-play-pause-button,\r\n.large .full-width > .bubble-play-pause-button {\r\n    height: 36px;\r\n}\r\n\r\n.large .bubble-play-pause-button {\r\n  height: 42px;\r\n  width: 42px;\r\n}\r\n\r\n/* Ensure volume slider + its wrapper buttons match sub-buttons size when bottom-fixed */\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-wrapper {\r\n    height: 36px;\r\n}\r\n\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider,\r\n.bubble-wrapper.has-bottom-buttons .bubble-range-value {\r\n    height: 36px;\r\n}\r\n\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-mute-button,\r\n.bubble-wrapper.has-bottom-buttons .bubble-volume-slider-close-button {\r\n    height: 36px;\r\n    width: 36px;\r\n}\r\n\r\n.fixed-top .bubble-buttons-container {\r\n    margin-top: 7px;\r\n}\r\n\r\n.fixed-top .bubble-buttons-container:not(.bottom-fixed) {\r\n    height: 42px;\r\n}\r\n\r\n.fixed-top .bubble-volume-slider-wrapper {\r\n    margin-top: 7px;\r\n}",iconActions:!0,buttonActions:!0,withSubButtons:!0});function o(e,t){const n=(0,s.n)("div",`bubble-media-button ${t}`),o=(0,s.n)("ha-icon","bubble-media-button-icon");o.setAttribute("icon",e);const r=(0,s.n)("div","bubble-feedback-container"),i=(0,s.n)("div","bubble-feedback-element feedback-element");return r.appendChild(i),n.appendChild(r),n.appendChild(o),n.icon=o,n.feedback=i,n.haRipple=(0,s.n)("ha-ripple"),n.appendChild(n.haRipple),n}if(n.mediaInfoContainer=(0,s.n)("div","bubble-media-info-container"),n.playPauseButton=o("mdi:play","bubble-play-pause-button"),n.previousButton=o("mdi:skip-previous","bubble-previous-button"),n.nextButton=o("mdi:skip-next","bubble-next-button"),n.volumeButton=o("mdi:volume-high","bubble-volume-button"),n.powerButton=o("mdi:power","bubble-power-button"),n.muteButton=o("mdi:volume-off","bubble-mute-button is-hidden"),n.volumeSliderMuteButton=o("mdi:volume-high","bubble-volume-slider-mute-button"),n.volumeSliderCloseButton=o("mdi:close","bubble-volume-slider-close-button"),n.title=(0,s.n)("div","bubble-title"),n.artist=(0,s.n)("div","bubble-artist"),n.background.classList.add("bubble-cover-background"),n.buttonsContainer.classList.add("bubble-button-container"),n.iconContainer.appendChild(n.muteButton),n.mediaInfoContainer.append(n.title,n.artist),n.contentContainer.append(n.mediaInfoContainer),n.buttonsContainer.append(n.powerButton,n.previousButton,n.nextButton,n.volumeButton,n.playPauseButton),n.volumeSliderWrapper=(0,s.n)("div","bubble-volume-slider-wrapper is-hidden"),n.volumeSliderContainer=(0,s.n)("div","bubble-volume-slider"),(0,Kt.H)(e,{targetElement:n.volumeSliderContainer,sliderLiveUpdate:!1,withValueDisplay:!0,holdToSlide:!1}),n.volumeSliderWrapper.appendChild(n.volumeSliderMuteButton),n.volumeSliderWrapper.appendChild(n.volumeSliderContainer),n.volumeSliderWrapper.appendChild(n.volumeSliderCloseButton),n.cardWrapper.appendChild(n.volumeSliderWrapper),!n._volumeStopPropAdded){const e=e=>e.stopPropagation();["pointerdown","pointermove","touchstart","touchmove","mousedown","mousemove","click"].forEach((t=>{n.volumeSliderWrapper.addEventListener(t,e,{passive:!1})})),n._volumeStopPropAdded=!0}function i(){if(n.volumeSliderWrapper.classList.contains("is-hidden"))return;const t=n.buttonsContainer?.classList.contains("bottom-fixed");n.volumeSliderWrapper.classList.add("is-hidden"),t?n.buttonsContainer.classList.remove("is-hidden"):(n.muteButton.classList.add("is-hidden"),Vt(e))}if(n.volumeButton.addEventListener("click",(t=>{t.stopPropagation();const o=n.buttonsContainer?.classList.contains("bottom-fixed");n.volumeSliderWrapper.classList.toggle("is-hidden"),o?n.buttonsContainer.classList.toggle("is-hidden"):(n.muteButton.classList.toggle("is-hidden"),Vt(e))})),(0,r.pd)(n.volumeButton,n.volumeButton.feedback),!n._volumeOutsideListenerAdded){const e=e=>{if(n.volumeSliderWrapper.classList.contains("is-hidden"))return;const t=e.target;n.volumeSliderWrapper.contains(t)||n.volumeButton&&n.volumeButton.contains(t)||i()};document.addEventListener("click",e,{passive:!0}),n._volumeOutsideListenerAdded=!0,n._volumeOutsideHandler=e}n.powerButton.addEventListener("click",(()=>{const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t;e._hass.callService("media_player",n?"turn_off":"turn_on",{entity_id:e.config.entity})})),(0,r.pd)(n.powerButton,n.powerButton.feedback);const a=t=>{t.addEventListener("pointerdown",(n=>{n.stopPropagation();const o=!0===(0,s.D$)(e,"is_volume_muted");e._hass.callService("media_player","volume_mute",{entity_id:e.config.entity,is_volume_muted:!o}),t.clicked=!0})),["click","touchstart","touchend","pointerup","pointercancel"].forEach((e=>{t.addEventListener(e,(e=>{e.stopPropagation()}))})),(0,r.pd)(t,t.feedback)};a(n.muteButton),a(n.volumeSliderMuteButton),n.previousButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_previous_track",{entity_id:e.config.entity})})),(0,r.pd)(n.previousButton,n.previousButton.feedback),n.nextButton.addEventListener("click",(()=>{e._hass.callService("media_player","media_next_track",{entity_id:e.config.entity})})),(0,r.pd)(n.nextButton,n.nextButton.feedback),n.playPauseButton.addEventListener("click",(()=>{const{service:t}=zt(e);e._hass.callService("media_player",t,{entity_id:e.config.entity}),n.playPauseButton.clicked=!0})),(0,r.pd)(n.playPauseButton,n.playPauseButton.feedback),n.volumeSliderCloseButton.addEventListener("click",(e=>{e.stopPropagation(),i()})),(0,r.pd)(n.volumeSliderCloseButton,n.volumeSliderCloseButton.feedback),n.mainContainer.addEventListener("click",(()=>(0,s.jp)("selection"))),e.cardType=t}(e),(0,$t.zQ)(e),(0,$t.m9)(e),function(e){const t=(0,s.D$)(e,"media_title"),n=(0,s.D$)(e,"media_artist"),o=t+n;o!==e.previousMediaState&&(e.elements.artist.style.display=""===n?"none":"flex",e.previousMediaState=o),(0,l.N)(e,e.elements.title,t),(0,l.N)(e,e.elements.artist,n)}(e),function(e){const t=e=>null==e?"":String(e).trim(),n=t((0,s.D$)(e,"media_title")),o=t((0,s.D$)(e,"media_artist")),r=t((0,s.D$)(e,"source")),i=n+o===""||""!==n&&""!==r&&n===r,a=e.config.show_icon??!0,l="idle"===(0,s.Gu)(e);e.elements.mediaInfoContainer.style.display=i||l?"none":"",e.elements.nameContainer.style.display=i||l?"":"none",e.elements.mediaInfoContainer.classList.toggle("name-without-icon",!a)}(e),function(e){const t=e.elements.icon,n=e.elements.image,o=e.elements.iconContainer;if(!t||!o)return;const r=e.config.card_type,i=e.config.button_type,a=e.config.use_accent_color,l=(0,s.md)(e),c=(0,s.$C)(e),u=Ht(e),p=Boolean(u.resolvedUrl)&&Boolean(n),b=(0,d.sW)(e),h=t.icon,m="name"===i||"pop-up"===r&&!i;let g="inherit";c&&((0,s.md)(e,"light")&&!a||!m?g=`var(--bubble-icon-color, ${(0,d.VA)(e)})`:"climate"===l&&(g=(0,Dt.R)(e)));const f=o.style.color;"inherit"!==g?f!==g&&(o.style.color=g):""!==f&&(o.style.color=""),b&&h!==b&&(t.icon=b),t.style.color!==g&&(t.style.color=g);const y=()=>{if(n){const t=Wt(e,"icon");t&&u.iconDisplayedUrl?Yt(t,"",(()=>{n&&(n.style.display="none")})):n&&(n.style.display="none")}t&&(t.style.display=""),u.iconDisplayedUrl=""};if(p){const o=Wt(e,"icon");o?u.resolvedUrl!==u.iconDisplayedUrl?(t&&(t.style.display=""),n&&(n.style.display=""),Yt(o,u.resolvedUrl),u.iconDisplayedUrl=u.resolvedUrl):(t&&(t.style.display=""),n&&(n.style.display="")):y()}else y();t.getAttribute("icon")!==t.icon&&t.setAttribute("icon",t.icon)}(e),function(e){if(!e.elements.background)return;const t=Ht(e),n=Boolean(e.config.cover_background),o=n?t.resolvedUrl:"";if(n){if(o&&o!==t.backgroundDisplayedUrl){const n=Wt(e,"background");n&&(Yt(n,o),t.backgroundDisplayedUrl=o)}else if(!o&&t.backgroundDisplayedUrl){const n=Wt(e,"background");n&&Yt(n,""),t.backgroundDisplayedUrl=""}}else if(t.backgroundDisplayedUrl){const n=Wt(e,"background");n&&Yt(n,""),t.backgroundDisplayedUrl=""}}(e),(0,$t.Uk)(e),function(e){e.elements.rangeFill&&(0,Lt.VM)(e)}(e),function(e){const{icon:t}=zt(e);e.elements.playPauseButton.icon.setAttribute("icon",t),e.elements.playPauseButton.clicked=!1}(e),function(e){const t=1==(0,s.D$)(e,"is_volume_muted");"var(--primary-text-color)"!==e.elements.muteButton.icon.style.color&&(e.elements.muteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.muteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.muteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.muteButton.clicked=!1,e.elements.volumeSliderMuteButton&&("var(--primary-text-color)"!==e.elements.volumeSliderMuteButton.icon.style.color&&(e.elements.volumeSliderMuteButton.icon.style.color="var(--primary-text-color)"),t?e.elements.volumeSliderMuteButton.icon.setAttribute("icon","mdi:volume-off"):e.elements.volumeSliderMuteButton.icon.setAttribute("icon","mdi:volume-high"),e.elements.volumeSliderMuteButton.clicked=!1)}(e),function(e){const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t;e.elements.powerButton.icon.style.color=n?"var(--accent-color)":""}(e),(0,u.Kr)(e),function(e){(0,s.JK)(e),T(e);const t=(0,s.Gu)(e),n="off"!==t&&"unknown"!==t,o="playing"===t,r="paused"===t,i="idle"===t,a=function(e){const t=e?._hass?.states?.[e?.config?.entity]?.state??"";return"playing"===t||"paused"===t||"unknown"===t||"on"===t}(e),l=function(e){const t=Nt(e);return{canPrevious:Ut(t,16),canNext:Ut(t,32),canPlay:Ut(t,16384),canPause:Ut(t,1),canStop:Ut(t,4096),canTurnOn:Ut(t,128),canTurnOff:Ut(t,256),canVolumeSet:Ut(t,4),canVolumeStep:Ut(t,1024),canMute:Ut(t,8),canPlayMedia:Ut(t,512),canSelectSource:Ut(t,2048),canSelectSoundMode:Ut(t,65536)}}(e),c=!e.config.hide?.power_button&&(l.canTurnOn||l.canTurnOff),d=!e.config.hide?.previous_button&&l.canPrevious&&(e.editor||a),u=!e.config.hide?.next_button&&l.canNext&&(e.editor||a),p=!e.config.hide?.volume_button&&(l.canVolumeSet||l.canVolumeStep||l.canMute)&&(e.editor||a||n),b=!e.config.hide?.play_pause_button&&(e.editor||a||n||i||r||o),h=!(c||d||u||p||b);(!n&&e.config.hide?.power_button||h)&&"none"!==e.elements.buttonsContainer.style.display?(e.elements.buttonsContainer.classList.add("hidden"),(0,$t.iJ)(e)):h&&e.config.hide?.power_button||!e.elements.buttonsContainer.classList.contains("hidden")||(e.elements.buttonsContainer.classList.remove("hidden"),(0,$t.iJ)(e)),c||"none"===e.elements.powerButton.style.display?c&&e.elements.powerButton.classList.contains("hidden")&&e.elements.powerButton.classList.remove("hidden"):e.elements.powerButton.classList.add("hidden"),d||"none"===e.elements.previousButton.style.display?d&&e.elements.previousButton.classList.contains("hidden")&&e.elements.previousButton.classList.remove("hidden"):e.elements.previousButton.classList.add("hidden"),u||"none"===e.elements.nextButton.style.display?u&&e.elements.nextButton.classList.contains("hidden")&&e.elements.nextButton.classList.remove("hidden"):e.elements.nextButton.classList.add("hidden"),p||"none"===e.elements.volumeButton.style.display?p&&e.elements.volumeButton.classList.contains("hidden")&&e.elements.volumeButton.classList.remove("hidden"):e.elements.volumeButton.classList.add("hidden"),b||"none"===e.elements.playPauseButton.style.display?b&&e.elements.playPauseButton.classList.contains("hidden")&&e.elements.playPauseButton.classList.remove("hidden"):e.elements.playPauseButton.classList.add("hidden"),e.elements.muteButton&&(p&&l.canMute||"none"===e.elements.muteButton.style.display?p&&l.canMute&&e.elements.muteButton.classList.contains("hidden")&&e.elements.muteButton.classList.remove("hidden"):e.elements.muteButton.classList.add("hidden")),function(e){let t=50,n=146;e.content.classList.contains("large")&&(t=58,n=160);const o=(0,s.Gu)(e),r="off"!==o&&"unknown"!==o;(e.config.hide?.play_pause_button||!e.editor&&!r)&&(e.content.classList.contains("large")?n-=42:n-=36),e.elements.cardWrapper.style.setProperty("--volume-slider-left-offset",`${t}px`),e.elements.cardWrapper.style.setProperty("--volume-slider-width-calc",`calc(100% - ${n}px)`)}(e)}(e)},select:function(e){e.cardType,"select"!==e.cardType&&(function(e){try{const t=e.config?.button_action||{};e.config.button_action={...t,tap_action:{action:"none"}}}catch(e){}(0,Et.N0)(e,{type:"select",styles:".bubble-container {\r\n    overflow: inherit;\r\n    transition: border 0.3s ease;\r\n}\r\n\r\n.bubble-background {\r\n    cursor: pointer;\r\n}\r\n",withFeedback:!0,withSubButtons:!0,withIconActions:!0,buttonActions:!0}).mainContainer.classList.add("bubble-select-card-container"),e.cardType="select"}(e),(0,Xt.Fi)(e),(0,Xt.XO)(e)),(0,Jt.O)(e,e.elements,e.config.entity,e.config),(0,$t.zQ)(e),(0,$t.wd)(e),(0,$t.m9)(e),(0,$t.Uk)(e),(0,u.Kr)(e),function(e){(0,s.JK)(e),T(e)}(e)},climate:function(e){"climate"!==e.cardType&&function(e){const t="climate",n=(0,Et.N0)(e,{type:t,styles:".bubble-temperature-container, .bubble-low-temp-container, .bubble-high-temp-container {\r\n    display: inline-flex;\r\n    position: relative;\r\n    font-size: 12px;\r\n    white-space: nowrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: auto;\r\n    height: 36px;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n    background-color: var(--bubble-climate-button-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))));\r\n}\r\n\r\n.bubble-low-temp-container {\r\n    color: var(--state-climate-heat-color, var(--state-climate-active-color, var(--state-active-color)));\r\n}\r\n\r\n.bubble-high-temp-container {\r\n    color: var(--state-climate-cool-color, var(--state-climate-active-color, var(--state-active-color)));\r\n}\r\n\r\n.bubble-target-temperature-container {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n.bubble-climate-minus-button,\r\n.bubble-climate-plus-button {\r\n    display: flex;\r\n    position: relative;\r\n    align-items: center;\r\n    justify-content: center;\r\n    box-sizing: border-box;\r\n    width: 34px;\r\n    height: 34px;\r\n    margin: 2px;\r\n    vertical-align: middle;\r\n    font-size: 18px;\r\n    color: var(--primary-text-color);\r\n    cursor: pointer;\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, calc(var(--row-height,56px)/2)));\r\n}\r\n\r\n.bubble-climate-minus-button-icon,\r\n.bubble-climate-plus-button-icon {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    --mdc-icon-size: 16px;\r\n}\r\n\r\n.bubble-climate-temp-display {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    padding: 0 4px;\r\n    box-sizing: border-box;\r\n}\r\n\r\n@keyframes tap-warning {\r\n    10%, 90% { transform: translateX(-1px); }\r\n    20%, 80% { transform: translateX(1px); }\r\n    30%, 50%, 70% { transform: translateX(-2px); }\r\n    40%, 60% { transform: translateX(2px); }\r\n}\r\n\r\n/* Full width styles for climate buttons when in bottom position */\r\n\r\n.full-width > .bubble-temperature-container,\r\n.full-width > .bubble-target-temperature-container,\r\n.full-width .bubble-low-temp-container,\r\n.full-width .bubble-high-temp-container {\r\n    background-color: transparent;\r\n    gap: 8px;\r\n    flex: 1;\r\n}\r\n\r\n.full-width > .bubble-target-temperature-container {\r\n    display: flex;\r\n}\r\n\r\n.full-width .bubble-climate-minus-button,\r\n.full-width .bubble-climate-plus-button {\r\n    flex: 1;\r\n    width: 36px;\r\n    height: 36px;\r\n    margin: 0;\r\n    background-color: var(--bubble-main-buttons-background-color, var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))));\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\r\n}\r\n\r\n.full-width .bubble-climate-minus-button-icon,\r\n.full-width .bubble-climate-plus-button-icon {\r\n    --mdc-icon-size: 20px;\r\n}\r\n\r\n.full-width .bubble-climate-temp-display {\r\n    flex: 1;\r\n    height: 36px;\r\n    background-color: var(--bubble-main-buttons-background-color, var(--bubble-sub-button-background-color, var(--bubble-icon-background-color, var(--bubble-secondary-background-color, var(--card-background-color, var(--ha-card-background))))));\r\n    border-radius: var(--bubble-sub-button-border-radius, var(--bubble-border-radius, 18px));\r\n    padding: 0;\r\n}",withSubButtons:!0,iconActions:!0,buttonActions:!0});function o(t,o,i){const a=(0,Dt.N$)(e,i),l=(0,s.n)("div","bubble-climate-minus-button"),c=(0,s.n)("div","bubble-climate-plus-button"),d=(0,s.n)("ha-icon","bubble-climate-minus-button-icon");d.setAttribute("icon","mdi:minus"),l.appendChild(d),l.haRipple=(0,s.n)("ha-ripple"),l.appendChild(l.haRipple),(0,r.pd)(l);const u=(0,s.n)("ha-icon","bubble-climate-plus-button-icon");let p,b;u.setAttribute("icon","mdi:plus"),c.appendChild(u),c.haRipple=(0,s.n)("ha-ripple"),c.appendChild(c.haRipple),(0,r.pd)(c),"temperature"===o?(n.tempDisplay=(0,s.n)("div","bubble-temperature-display bubble-climate-temp-display"),p=n.tempDisplay):"target_temp_low"===o?(n.lowTempDisplay=(0,s.n)("div","bubble-low-temperature-display bubble-climate-temp-display"),p=n.lowTempDisplay):"target_temp_high"===o&&(n.highTempDisplay=(0,s.n)("div","bubble-high-temperature-display bubble-climate-temp-display"),p=n.highTempDisplay),t.appendChild(l),t.appendChild(p),t.appendChild(c);let h=parseFloat((0,s.D$)(e,o))||0,m=h;function g(){const t=parseFloat((0,s.D$)(e,o))||0;t!==m&&(h=t,m=t)}function f(){g();const t={entity_id:e.config.entity};"target_temp_low"===o?(t.target_temp_low=h,t.target_temp_high=(0,s.D$)(e,"target_temp_high")):"target_temp_high"===o?(t.target_temp_high=h,t.target_temp_low=(0,s.D$)(e,"target_temp_low")):t[o]=h,e._hass.callService("climate","set_temperature",t)}function y(t){g();const r=e._hass.states[e.config.entity],l=e.config.min_temp??r?.attributes?.min_temp??0,c=e.config.max_temp??r?.attributes?.max_temp??1e3;let d=parseFloat((h+t).toFixed(a));if(d=Math.min(c,Math.max(l,d)),d<l?d=l:d>c&&(d=c),d!==h)h=d,function(t){"temperature"===o?n.tempDisplay.innerText=(0,Dt.cH)(t,e,i):"target_temp_low"===o?n.lowTempDisplay.innerText=(0,Dt.cH)(t,e,i):"target_temp_high"===o&&(n.highTempDisplay.innerText=(0,Dt.cH)(t,e,i))}(h),clearTimeout(b),b=setTimeout(f,700);else{(0,s.jp)("failure");const t=e.elements.mainContainer;t.style.animation="tap-warning 0.4s cubic-bezier(.36,.07,.19,.97) both",setTimeout((()=>{t.style.animation=""}),500)}}l.addEventListener("click",(()=>y(-i))),c.addEventListener("click",(()=>y(i)))}n.temperatureContainer=(0,s.n)("div","bubble-temperature-container"),n.targetTemperatureContainer=(0,s.n)("div","bubble-target-temperature-container"),n.background.classList.add("bubble-color-background"),n.buttonsContainer.append(n.temperatureContainer,n.targetTemperatureContainer);const i=e._hass.states[e.config.entity],a="°C"===e._hass.config.unit_system.temperature,l=e.config.step??(i.attributes.target_temp_step?i.attributes.target_temp_step:a?.5:1);o(n.temperatureContainer,"temperature",l),n.lowTempContainer=(0,s.n)("div","bubble-low-temp-container"),o(n.lowTempContainer,"target_temp_low",l),n.targetTemperatureContainer.appendChild(n.lowTempContainer),n.highTempContainer=(0,s.n)("div","bubble-high-temp-container"),o(n.highTempContainer,"target_temp_high",l),n.targetTemperatureContainer.appendChild(n.highTempContainer),e.cardType=t}(e),(0,$t.zQ)(e),(0,$t.m9)(e),(0,$t.wd)(e),(0,$t.Uk)(e),function(e){const t=(0,s.D$)(e,"temperature"),n=(0,s.Gu)(e);(0,Dt.N$)(e),e.config.hide_temperature||"unavailable"===n||""===t||void 0===t?e.elements.temperatureContainer?.classList.add("hidden"):e.elements.temperatureContainer?.classList.remove("hidden"),t!==e.previousTemp&&(e.previousTemp=t,e.elements.tempDisplay&&""!==t&&void 0!==t&&(e.elements.tempDisplay.innerText=(0,Dt.cH)(t,e)))}(e),function(e){const t=(0,s.D$)(e,"target_temp_low"),n=e.config.hide_target_temp_low,o=(0,s.Gu)(e);(0,Dt.N$)(e),"unavailable"===o||""===t||void 0===t||n?(e.elements.targetTemperatureContainer?.classList.add("hidden"),e.elements.lowTempContainer?.classList.add("hidden")):(e.elements.targetTemperatureContainer?.classList.remove("hidden"),e.elements.lowTempContainer?.classList.remove("hidden")),t!==e.previousTargetTempLow&&(e.previousTargetTempLow=t,e.elements.lowTempDisplay&&""!==t&&void 0!==t&&(e.elements.lowTempDisplay.innerText=(0,Dt.cH)(t,e)))}(e),function(e){const t=(0,s.D$)(e,"target_temp_high"),n=e.config.hide_target_temp_high,o=(0,s.Gu)(e);(0,Dt.N$)(e),"unavailable"===o||""===t||void 0===t||n?e.elements.highTempContainer?.classList.add("hidden"):(e.elements.highTempContainer?.classList.remove("hidden"),e.elements.targetTemperatureContainer?.classList.remove("hidden")),t!==e.previousTargetTempHigh&&(e.previousTargetTempHigh=t,e.elements.highTempDisplay&&""!==t&&void 0!==t&&(e.elements.highTempDisplay.innerText=(0,Dt.cH)(t,e)))}(e),(0,u.Kr)(e),function(e){(0,s.JK)(e),T(e);const t=(0,s.Gu)(e);e.previousState!==t&&(e.previousState=t,e.elements.background.style.backgroundColor=`var(--bubble-climate-background-color, ${(0,Dt.R)(e)})`),e.config.card_layout,e.elements.hvacModeDropdown}(e)}};class Qt extends HTMLElement{editor=!1;isConnected=!1;_editorUpdateTimeout=null;connectedCallback(){this.isConnected=!0,function(e){if(!e.content){let t=e.shadowRoot||e.attachShadow({mode:"open"}),n=document.createElement("ha-card");n.style.cssText="background: none; border: none; box-shadow: none; border-radius: 16px;";let o=document.createElement("div");o.className="card-content",o.style.padding="0",n.appendChild(o),t.appendChild(n),e.card=n,e.content=o}}(this),(0,i.nO)(this),(0,a.$i)(),"pop-up"===this.config?.card_type&&this.config?.hash&&te(this),this._hass&&(window.__bubblePopupOpening&&"pop-up"!==this.config?.card_type?this._deferredUpdateTimer=setTimeout((()=>{this.isConnected&&this.updateBubbleCard()}),320):this.updateBubbleCard())}disconnectedCallback(){this.isConnected=!1,(0,r.Xs)();try{this.content&&(0,l.I)(this.content)}catch(e){}try{this.context&&(0,s.bE)(this.context)}catch(e){}try{this._moduleChangeHandler&&(window.removeEventListener("bubble-card-modules-changed",this._moduleChangeHandler),window.removeEventListener("bubble-card-module-updated",this._moduleChangeHandler),document.removeEventListener("yaml-modules-updated",this._moduleChangeHandler),this._moduleChangeHandler=null,this._moduleChangeListenerAdded=!1)}catch(e){}clearTimeout(this._editorUpdateTimeout),clearTimeout(this._deferredUpdateTimer)}get detectedEditor(){return!!this.editor&&"hui-dialog-edit-card"===window.history?.state?.dialog}set editMode(e){this.editor!==e&&(this.editor=e,["pop-up","horizontal-buttons-stack","sub-buttons"].includes(this.config.card_type)&&this.updateBubbleCard())}set hass(e){this._hass=e,this.updateBubbleCard()}updateBubbleCard(){if(!this.isConnected&&"pop-up"!==this.config.card_type)return;const e=this.config.card_type;Gt[e]&&(Gt[e](this),this._notifyEditorContext())}setConfig(e){if(e.error)throw new Error(e.error);const t={...e};if(!t.card_type)throw new Error("You need to define a card type");if(void 0!==t.grid_options?.rows&&(t.rows=t.grid_options.rows),"pop-up"===t.card_type){if(t.hash&&t.button_type&&"name"!==t.button_type&&!t.entity&&t.modules)throw new Error("You need to define an entity")}else if("horizontal-buttons-stack"===t.card_type){const e={};for(const n in t)if(/^\d+_icon$/.test(n)){const o=n.replace("_icon","_link");if(void 0===t[o])throw new Error("You need to define "+o);if(e[t[o]])throw new Error("You can't use "+t[o]+" twice");e[t[o]]=!0}}else if(["button","cover","climate","select","media-player"].includes(t.card_type)){if(!t.entity&&"name"!==t.button_type)throw new Error("You need to define an entity")}else if("calendar"===t.card_type&&!t.entities)throw new Error("You need to define an entity list");if("select"===t.card_type&&t.entity&&!t.select_attribute&&!t.entity.startsWith("input_select")&&!t.entity.startsWith("select"))throw new Error('"Select menu (from attributes)" missing');this.config=t}getCardSize(){switch(this.config.card_type){case"pop-up":return-1e5;case"button":case"sub-buttons":case"separator":case"empty-column":case"horizontal-buttons-stack":case"calendar":case"media-player":case"select":case"climate":return 1;case"cover":return 2}}getGridOptions(){const e=this.config.columns;let t={columns:e?3*e:12,rows:this.config.rows??"auto"};return"horizontal-buttons-stack"===this.config.card_type?t.rows=1.3:"separator"===this.config.card_type&&void 0===this.config.grid_options?.rows&&(t.rows=this.config.rows?"auto":.8),t}getLayoutOptions(){let e=1;"pop-up"===this.config.card_type?e=0:"horizontal-buttons-stack"===this.config.card_type?e=1:"cover"===this.config.card_type&&(e=2);let t=4;return"pop-up"===this.config.card_type?t=0:"horizontal-buttons-stack"===this.config.card_type&&(t=4),{grid_columns:this.config.columns??t,grid_rows:this.config.rows??e}}static getConfigElement(){return document.createElement("bubble-card-editor")}_notifyEditorContext(){try{if(!this.config||!this.card)return;const e={context:this,card:this.card,config:this.config,card_type:this.config.card_type,entity:this.config.entity,hash:this.config.hash,isEditor:this.detectedEditor,editMode:this.editor};window.dispatchEvent(new CustomEvent("bubble-card-context",{detail:e}))}catch(e){}}}customElements.define("bubble-card",Qt),window.customCards=window.customCards||[],window.customCards.push({type:"bubble-card",name:"Bubble Card",preview:!1,description:"A minimalist card collection with a nice pop-up touch.",documentationURL:"https://github.com/Clooos/Bubble-Card/"}),console.info(`%c Bubble Card %c ${o} `,"background-color: #555;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #506eac;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)")})();