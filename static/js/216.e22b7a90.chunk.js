(this.webpackJsonpscratch=this.webpackJsonpscratch||[]).push([[216],{332:function(a,n){!function(a){var n=a.languages.javadoclike={parameter:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,lookbehind:!0},keyword:{pattern:/(^[\t ]*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,lookbehind:!0},punctuation:/[{}]/};Object.defineProperty(n,"addSupport",{value:function(n,e){"string"===typeof n&&(n=[n]),n.forEach((function(n){!function(n,e){var t="doc-comment",r=a.languages[n];if(r){var o=r[t];if(!o){var i={"doc-comment":{pattern:/(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,lookbehind:!0,alias:"comment"}};o=(r=a.languages.insertBefore(n,"comment",i))[t]}if(o instanceof RegExp&&(o=r[t]={pattern:o}),Array.isArray(o))for(var s=0,c=o.length;s<c;s++)o[s]instanceof RegExp&&(o[s]={pattern:o[s]}),e(o[s]);else e(o)}}(n,(function(a){a.inside||(a.inside={}),a.inside.rest=e}))}))}}),n.addSupport(["java","javascript","php"],n)}(Prism)}}]);