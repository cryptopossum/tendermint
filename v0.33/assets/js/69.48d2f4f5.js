(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{789:function(e,t,n){"use strict";n.r(t);var s=n(1),g=Object(s.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"subscribing-to-events-via-websocket"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-events-via-websocket"}},[e._v("#")]),e._v(" Subscribing to events via Websocket")]),e._v(" "),n("p",[e._v("Tendermint emits different events, to which you can subscribe via\n"),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/WebSocket",target:"_blank",rel:"noopener noreferrer"}},[e._v("Websocket"),n("OutboundLink")],1),e._v(". This can be useful\nfor third-party applications (for analysis) or inspecting state.")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tendermint/types#pkg-constants",target:"_blank",rel:"noopener noreferrer"}},[e._v("List of events"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("You can subscribe to any of the events above by calling "),n("code",[e._v("subscribe")]),e._v(" RPC\nmethod via Websocket.")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7bWV0aG9kJnF1b3Q7OiAmcXVvdDtzdWJzY3JpYmUmcXVvdDssCiAgICAmcXVvdDtpZCZxdW90OzogMCwKICAgICZxdW90O3BhcmFtcyZxdW90OzogewogICAgICAgICZxdW90O3F1ZXJ5JnF1b3Q7OiAmcXVvdDt0bS5ldmVudD0nTmV3QmxvY2snJnF1b3Q7CiAgICB9Cn0K"}}),e._v(" "),n("p",[e._v("Check out "),n("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("API docs"),n("OutboundLink")],1),e._v(" for\nmore information on query syntax and other options.")]),e._v(" "),n("p",[e._v("You can also use tags, given you had included them into DeliverTx\nresponse, to query transaction results. See "),n("RouterLink",{attrs:{to:"/app-dev/indexing-transactions.html"}},[e._v("Indexing\ntransactions")]),e._v(" for details.")],1),e._v(" "),n("h3",{attrs:{id:"validatorsetupdates"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#validatorsetupdates"}},[e._v("#")]),e._v(" ValidatorSetUpdates")]),e._v(" "),n("p",[e._v("When validator set changes, ValidatorSetUpdates event is published. The\nevent carries a list of pubkey/power pairs. The list is the same\nTendermint receives from ABCI application (see "),n("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/abci/abci.md#endblock",target:"_blank",rel:"noopener noreferrer"}},[e._v("EndBlock\nsection"),n("OutboundLink")],1),e._v(" in\nthe ABCI spec).")]),e._v(" "),n("p",[e._v("Response:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ewogICAgJnF1b3Q7anNvbnJwYyZxdW90OzogJnF1b3Q7Mi4wJnF1b3Q7LAogICAgJnF1b3Q7aWQmcXVvdDs6IDAsCiAgICAmcXVvdDtyZXN1bHQmcXVvdDs6IHsKICAgICAgICAmcXVvdDtxdWVyeSZxdW90OzogJnF1b3Q7dG0uZXZlbnQ9J1ZhbGlkYXRvclNldFVwZGF0ZXMnJnF1b3Q7LAogICAgICAgICZxdW90O2RhdGEmcXVvdDs6IHsKICAgICAgICAgICAgJnF1b3Q7dHlwZSZxdW90OzogJnF1b3Q7dGVuZGVybWludC9ldmVudC9WYWxpZGF0b3JTZXRVcGRhdGVzJnF1b3Q7LAogICAgICAgICAgICAmcXVvdDt2YWx1ZSZxdW90OzogewogICAgICAgICAgICAgICZxdW90O3ZhbGlkYXRvcl91cGRhdGVzJnF1b3Q7OiBbCiAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICZxdW90O2FkZHJlc3MmcXVvdDs6ICZxdW90OzA5RUFEMDIyRkQyNURFM0EwMkU2NEIwRkU5NjEwQjE0MTcxODNFRTQmcXVvdDssCiAgICAgICAgICAgICAgICAgICZxdW90O3B1Yl9rZXkmcXVvdDs6IHsKICAgICAgICAgICAgICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDt0ZW5kZXJtaW50L1B1YktleUVkMjU1MTkmcXVvdDssCiAgICAgICAgICAgICAgICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O3d3MHo0V2FaMFhnK1lJMTB3NDN3VFdiQm1NM2RwVnphNG1tU1FZc2QwY2s9JnF1b3Q7CiAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICZxdW90O3ZvdGluZ19wb3dlciZxdW90OzogJnF1b3Q7MTAmcXVvdDssCiAgICAgICAgICAgICAgICAgICZxdW90O3Byb3Bvc2VyX3ByaW9yaXR5JnF1b3Q7OiAmcXVvdDswJnF1b3Q7CiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgXQogICAgICAgICAgICB9CiAgICAgICAgfQogICAgfQp9Cg=="}})],1)}),[],!1,null,null,null);t.default=g.exports}}]);