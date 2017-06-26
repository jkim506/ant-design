webpackJsonp([21,215],{1035:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u6700\u7b80\u5355\u7684\u7528\u6cd5\uff0c4.5 \u79d2\u540e\u81ea\u52a8\u5173\u95ed\u3002"]],"en-US":[["p","The simplest usage that close the notification box after 4.5s."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/notification/demo/basic.md",id:"components-notification-demo-basic"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open the notification box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(){a.notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return n.createElement(a.Button,{type:"primary",onClick:t},"Open the notification box")}}},1036:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u56fe\u6807\u53ef\u4ee5\u88ab\u81ea\u5b9a\u4e49\u3002"]],"en-US":[["p","The icon can be customized to any react node."]]},meta:{order:4,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u56fe\u6807","en-US":"Customized Icon"},filename:"components/notification/demo/custom-icon.md",id:"components-notification-demo-custom-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation">,</span>\n    icon<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile-circle<span class="token punctuation">"</span></span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#108ee9\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open the notification box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(){a.notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",icon:n.createElement(a.Icon,{type:"smile-circle",style:{color:"#108ee9"}})})};return n.createElement(a.Button,{type:"primary",onClick:t},"Open the notification box")}}},1037:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 style \u548c className \u6765\u5b9a\u4e49\u6837\u5f0f\u3002"]],"en-US":[["p","The style and className are available to customize Notification."]]},meta:{order:6,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6837\u5f0f","en-US":"Customized style"},filename:"components/notification/demo/custom-style.md",id:"components-notification-demo-custom-style"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation">,</span>\n    style<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n      width<span class="token punctuation">:</span> <span class="token number">600</span><span class="token punctuation">,</span>\n      marginLeft<span class="token punctuation">:</span> <span class="token number">335</span> <span class="token operator">-</span> <span class="token number">600</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open the notification box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(){a.notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification.",style:{width:600,marginLeft:-265}})};return n.createElement(a.Button,{type:"primary",onClick:t},"Open the notification box")}}},1038:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u901a\u77e5\u6846\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u9ed8\u8ba4",["code","4.5s"],"\uff0c\u53d6\u6d88\u81ea\u52a8\u5173\u95ed\u53ea\u8981\u5c06\u8be5\u503c\u8bbe\u4e3a ",["code","0"]," \u5373\u53ef\u3002"]],"en-US":[["p",["code","Duration"]," can be used to specify how long the notification stays open. After the duration time elapses,\nthe notification closes automatically. If not specified, default value is 4.5 seconds. If you set the value to 0,\nthe notification box will never close automatically."]]},meta:{order:1,title:{"zh-CN":"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6","en-US":"Duration after which the notification box is closed"},filename:"components/notification/demo/duration.md",id:"components-notification-demo-duration"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'I will never close automatically. I will be close automatically. I will never close automatically.\'</span><span class="token punctuation">,</span>\n    duration<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open the notification box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(){var n={message:"Notification Title",description:"I will never close automatically. I will be close automatically. I will never close automatically.",duration:0};a.notification.open(n)};return n.createElement(a.Button,{type:"primary",onClick:t},"Open the notification box")}}},1039:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u53ef\u4ee5\u8bbe\u7f6e\u901a\u77e5\u4ece\u53f3\u4e0a\u89d2\u3001\u53f3\u4e0b\u89d2\u3001\u5de6\u4e0b\u89d2\u3001\u5de6\u4e0a\u89d2\u5f39\u51fa\u3002"]],"en-US":[["p","A notification box can pop up from ",["code","topRight"]," or ",["code","bottomRight"]," or ",["code","bottomLeft"]," or ",["code","topLeft"],"."]]},meta:{order:5,title:{"zh-CN":"\u4f4d\u7f6e","en-US":"Placement"},filename:"components/notification/demo/placement.md",id:"components-notification-demo-placement"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> Select<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> Option <span class="token punctuation">}</span> <span class="token operator">=</span> Select<span class="token punctuation">;</span>\n<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">\'topLeft\'</span><span class="token punctuation">,</span> <span class="token string">\'topRight\'</span><span class="token punctuation">,</span> <span class="token string">\'bottomLeft\'</span><span class="token punctuation">,</span> <span class="token string">\'bottomRight\'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Select</span>\n      <span class="token attr-name">defaultValue</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>topRight<span class="token punctuation">"</span></span>\n      <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">120</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        notification<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n          placement<span class="token punctuation">:</span> val<span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n    <span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>options<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>val <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Option</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val<span class="token punctuation">}</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>val<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>val<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Option</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Select</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span>\n      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span>\n      <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      Open the notification box\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=a.Select.Option,o=["topLeft","topRight","bottomLeft","bottomRight"],p=function(){a.notification.open({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return n.createElement("div",null,n.createElement(a.Select,{defaultValue:"topRight",style:{width:120,marginRight:10},onChange:function(n){a.notification.config({placement:n})}},o.map(function(a){return n.createElement(t,{key:a,value:a},a)})),n.createElement(a.Button,{type:"primary",onClick:p},"Open the notification box"))}}},1040:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u81ea\u5b9a\u4e49\u5173\u95ed\u6309\u94ae\u7684\u6837\u5f0f\u548c\u6587\u5b57\u3002"]],"en-US":[["p","To customize the style or font of the close button."]]},meta:{order:3,title:{"zh-CN":"\u81ea\u5b9a\u4e49\u6309\u94ae","en-US":"Custom close button"},filename:"components/notification/demo/with-btn.md",id:"components-notification-demo-with-btn"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> close <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Notification was closed. Either the close button was clicked or duration time elapsed.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotification <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token template-string"><span class="token string">`open</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> btnClick <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// to hide notification box</span>\n    notification<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> btn <span class="token operator">=</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>btnClick<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Confirm\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  notification<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'A function will be be called after the notification is closed (automatically after the "duration" time of manually).\'</span><span class="token punctuation">,</span>\n    btn<span class="token punctuation">,</span>\n    key<span class="token punctuation">,</span>\n    onClose<span class="token punctuation">:</span> close<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>openNotification<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Open the notification box<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(){console.log("Notification was closed. Either the close button was clicked or duration time elapsed.")},o=function(){var s="open"+Date.now(),o=function(){a.notification.close(s)},p=n.createElement(a.Button,{type:"primary",size:"small",onClick:o},"Confirm");a.notification.open({message:"Notification Title",description:'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',btn:p,key:s,onClose:t})};return n.createElement(a.Button,{type:"primary",onClick:o},"Open the notification box")}}},1041:function(n,a,s){n.exports={content:{"zh-CN":[["p","\u901a\u77e5\u63d0\u9192\u6846\u5de6\u4fa7\u6709\u56fe\u6807\u3002"]],"en-US":[["p","A notification box with a icon at the left side."]]},meta:{order:2,title:{"zh-CN":"\u5e26\u6709\u56fe\u6807\u7684\u901a\u77e5\u63d0\u9192\u6846","en-US":"Notification with icon"},filename:"components/notification/demo/with-icon.md",id:"components-notification-demo-with-icon"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#zh-CN",title:"zh-CN"},"zh-CN"]],["li",["a",{className:"bisheng-toc-h2",href:"#en-US",title:"en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button<span class="token punctuation">,</span> notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> openNotificationWithIcon <span class="token operator">=</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  notification<span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Notification Title\'</span><span class="token punctuation">,</span>\n    description<span class="token punctuation">:</span> <span class="token string">\'This is the content of the notification. This is the content of the notification. This is the content of the notification.\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">openNotificationWithIcon</span><span class="token punctuation">(</span><span class="token string">\'success\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">openNotificationWithIcon</span><span class="token punctuation">(</span><span class="token string">\'info\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Info<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">openNotificationWithIcon</span><span class="token punctuation">(</span><span class="token string">\'warning\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">openNotificationWithIcon</span><span class="token punctuation">(</span><span class="token string">\'error\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'
}],preview:function(){var n=s(1),a=(s(2),s(3)),t=function(n){a.notification[n]({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."})};return n.createElement("div",null,n.createElement(a.Button,{onClick:function(){return t("success")}},"Success"),n.createElement(a.Button,{onClick:function(){return t("info")}},"Info"),n.createElement(a.Button,{onClick:function(){return t("warning")}},"Warning"),n.createElement(a.Button,{onClick:function(){return t("error")}},"Error"))},style:"\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n}\n"}},1328:function(n,a,s){n.exports={basic:s(1035),"custom-icon":s(1036),"custom-style":s(1037),duration:s(1038),placement:s(1039),"with-btn":s(1040),"with-icon":s(1041)}}});