(this.webpackJsonpscratch=this.webpackJsonpscratch||[]).push([[171],{287:function(t,n){Prism.languages.graphql={comment:/#.*/,description:{pattern:/(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,greedy:!0,alias:"string",inside:{"language-markdown":{pattern:/(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,lookbehind:!0,inside:Prism.languages.markdown}}},string:{pattern:/"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,greedy:!0},number:/(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,boolean:/\b(?:true|false)\b/,variable:/\$[a-z_]\w*/i,directive:{pattern:/@[a-z_]\w*/i,alias:"function"},"attr-name":{pattern:/[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,greedy:!0},"atom-input":{pattern:/[A-Z]\w*Input(?=!?.*$)/m,alias:"class-name"},scalar:/\b(?:Boolean|Float|ID|Int|String)\b/,constant:/\b[A-Z][A-Z_\d]*\b/,"class-name":{pattern:/(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,lookbehind:!0},fragment:{pattern:/(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-mutation":{pattern:/(\bmutation\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},"definition-query":{pattern:/(\bquery\s+)[a-zA-Z_]\w*/,lookbehind:!0,alias:"function"},keyword:/\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,operator:/[!=|&]|\.{3}/,"property-query":/\w+(?=\s*\()/,object:/\w+(?=\s*\{)/,punctuation:/[!(){}\[\]:=,]/,property:/\w+/},Prism.hooks.add("after-tokenize",(function(t){if("graphql"===t.language)for(var n=t.tokens.filter((function(t){return"string"!=typeof t&&"comment"!==t.type&&"scalar"!==t.type})),e=0;e<n.length;){var a=n[e++];if("keyword"===a.type&&"mutation"===a.content){var r=[];if(l(["definition-mutation","punctuation"])&&"("===c(1).content){e+=2;var i=f(/^\($/,/^\)$/);if(-1===i)continue;for(;e<i;e++){var o=c(0);"variable"===o.type&&(b(o,"variable-input"),r.push(o.content))}e=i+1}if(l(["punctuation","property-query"])&&"{"===c(0).content&&(e++,b(c(0),"property-mutation"),0<r.length)){var s=f(/^\{$/,/^\}$/);if(-1===s)continue;for(var u=e;u<s;u++){var p=n[u];"variable"===p.type&&0<=r.indexOf(p.content)&&b(p,"variable-input")}}}}function c(t){return n[e+t]}function l(t,n){n=n||0;for(var e=0;e<t.length;e++){var a=c(e+n);if(!a||a.type!==t[e])return!1}return!0}function f(t,a){for(var r=1,i=e;i<n.length;i++){var o=n[i],s=o.content;if("punctuation"===o.type&&"string"==typeof s)if(t.test(s))r++;else if(a.test(s)&&0===--r)return i}return-1}function b(t,n){var e=t.alias;e?Array.isArray(e)||(t.alias=e=[e]):t.alias=e=[],e.push(n)}}))}}]);