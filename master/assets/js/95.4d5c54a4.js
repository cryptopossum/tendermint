(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{752:function(e,t,a){"use strict";a.r(t);var g=a(1),n=Object(g.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-024-signbytes-and-validator-types-in-privval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-024-signbytes-and-validator-types-in-privval"}},[e._v("#")]),e._v(" ADR 024: SignBytes and validator types in privval")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently, the messages exchanged between tendermint and a (potentially remote) signer/validator,\nnamely votes, proposals, and heartbeats, are encoded as a JSON string\n(e.g., via "),a("code",[e._v("Vote.SignBytes(...)")]),e._v(") and then\nsigned . JSON encoding is sub-optimal for both, hardware wallets\nand for usage in ethereum smart contracts. Both is laid down in detail in "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1622",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue#1622"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Also, there are currently no differences between sign-request and -replies. Also, there is no possibility\nfor a remote signer to include an error code or message in case something went wrong.\nThe messages exchanged between tendermint and a remote signer currently live in\n"),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/d419fffe18531317c28c29a292ad7d253f6cafdf/privval/socket.go#L496-L502",target:"_blank",rel:"noopener noreferrer"}},[e._v("privval/socket.go"),a("OutboundLink")],1),e._v(" and encapsulate the corresponding types in "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/types",target:"_blank",rel:"noopener noreferrer"}},[e._v("types"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("ul",[a("li",[e._v("restructure vote, proposal, and heartbeat such that their encoding is easily parseable by\nhardware devices and smart contracts using a  binary encoding format ("),a("a",{attrs:{href:"https://github.com/tendermint/go-amino/",target:"_blank",rel:"noopener noreferrer"}},[e._v("amino"),a("OutboundLink")],1),e._v(" in this case)")]),e._v(" "),a("li",[e._v("split up the messages exchanged between tendermint and remote signers into requests and\nresponses (see details below)")]),e._v(" "),a("li",[e._v("include an error type in responses")])]),e._v(" "),a("h3",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Ky0tLS0tLS0tLS0tLS0tKyAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgfCAgICAgU2lnblhSZXF1ZXN0ICAgICB8ICAgICAgICAgICAgICAgIHwKfFJlbW90ZSBzaWduZXIgfCZsdDstLS0tLS0tLS0tLS0tLS0tLS0tLS0rICB0ZW5kZXJtaW50ICAgIHwKfCAoZS5nLiBLTVMpICAgfCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgIHwKfCAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLSZndDt8ICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tKyAgICBTaWduZWRYUmVwbHkgICAgICArLS0tLS0tLS0tLS0tLS0tLSsKCgpTaWduWFJlcXVlc3QgewogICAgeDogWAp9CgpTaWduZWRYUmVwbHkgewogICAgeDogWAogIHNpZzogU2lnbmF0dXJlIC8vIFtdYnl0ZQogIGVycjogRXJyb3J7IAogICAgY29kZTogaW50CiAgICBkZXNjOiBzdHJpbmcKICB9Cn0K"}}),e._v(" "),a("p",[e._v("TODO: Alternatively, the type "),a("code",[e._v("X")]),e._v(' might directly include the signature. A lot of places expect a vote with a\nsignature and do not necessarily deal with "Replies".\nStill exploring what would work best here.\nThis would look like (exemplified using X = Vote):')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"Vm90ZSB7CiAgICAvLyBhbGwgZmllbGRzIGJlc2lkZXMgc2lnbmF0dXJlCn0KClNpZ25lZFZvdGUgewogVm90ZSBWb3RlCiBTaWduYXR1cmUgW11ieXRlCn0KClNpZ25Wb3RlUmVxdWVzdCB7CiAgIFZvdGUgVm90ZQp9CgpTaWduZWRWb3RlUmVwbHkgewogICAgVm90ZSBTaWduZWRWb3RlCiAgICBFcnIgIEVycm9yCn0K"}}),e._v(" "),a("p",[a("strong",[e._v("Note:")]),e._v(" There was a related discussion around including a fingerprint of, or, the whole public-key\ninto each sign-request to tell the signer which corresponding private-key to\nuse to sign the message. This is particularly relevant in the context of the KMS\nbut is currently not considered in this ADR.")]),e._v(" "),a("h3",{attrs:{id:"vote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[e._v("#")]),e._v(" Vote")]),e._v(" "),a("p",[e._v("As explained in "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1622",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue#1622"),a("OutboundLink")],1),e._v(" "),a("code",[e._v("Vote")]),e._v(" will be changed to contain the following fields\n(notation in protobuf-like syntax for easy readability):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gdmFuaWxsYSBwcm90b2J1ZiAvIGFtaW5vIGVuY29kZWQKbWVzc2FnZSBWb3RlIHsKICAgIFZlcnNpb24gICAgICAgZml4ZWQzMiAgICAgICAgICAgICAgICAgICAgICAKICAgIEhlaWdodCAgICAgICAgc2ZpeGVkNjQgICAgICAgCiAgICBSb3VuZCAgICAgICAgIHNmaXhlZDMyCiAgICBWb3RlVHlwZSAgICAgIGZpeGVkMzIKICAgIFRpbWVzdGFtcCAgICAgVGltZXN0YW1wICAgICAgICAgLy8gJmx0OyZsdDsgdXNpbmcgcHJvdG9idWYgZGVmaW5pdGlvbgogICAgQmxvY2tJRCAgICAgICBCbG9ja0lEICAgICAgICAgICAvLyAmbHQ7Jmx0OyBhcyBhbHJlYWR5IGRlZmluZWQgCiAgICBDaGFpbklEICAgICAgIHN0cmluZyAgICAgICAgICAgIC8vIGF0IHRoZSBlbmQgYmVjYXVzZSBsZW5ndGggY291bGQgdmFyeSBhIGxvdAp9CgovLyB0aGlzIGlzIGFuIGFtaW5vIHJlZ2lzdGVyZWQgdHlwZTsgbGlrZSBjdXJyZW50bHkgcHJpdnZhbC5TaWduVm90ZU1zZzogCi8vIHJlZ2lzdGVyZWQgd2l0aCAmcXVvdDt0ZW5kZXJtaW50L3NvY2tldHB2L1NpZ25Wb3RlUmVxdWVzdCZxdW90OwptZXNzYWdlIFNpZ25Wb3RlUmVxdWVzdCB7CiAgIFZvdGUgdm90ZQp9CgovLyAgYW1pbm8gcmVnaXN0ZXJlZCB0eXBlCi8vIHJlZ2lzdGVyZWQgd2l0aCAmcXVvdDt0ZW5kZXJtaW50L3NvY2tldHB2L1NpZ25lZFZvdGVSZXBseSZxdW90OwptZXNzYWdlIFNpZ25lZFZvdGVSZXBseSB7IAogICBWb3RlICAgICAgVm90ZQogICBTaWduYXR1cmUgU2lnbmF0dXJlIAogICBFcnIgICAgICAgRXJyb3IKfQoKLy8gd2Ugd2lsbCB1c2UgdGhpcyB0eXBlIGV2ZXJ5d2hlcmUgYmVsb3cKbWVzc2FnZSBFcnJvciB7CiAgVHlwZSAgICAgICAgdWludCAgLy8gZXJyb3IgY29kZQogIERlc2NyaXB0aW9uIHN0cmluZyAgLy8gb3B0aW9uYWwgZGVzY3JpcHRpb24KfQoK"}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ChainID")]),e._v(" gets moved into the vote message directly. Previously, it was injected\nusing the "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/d419fffe18531317c28c29a292ad7d253f6cafdf/types/signable.go#L9-L11",target:"_blank",rel:"noopener noreferrer"}},[e._v("Signable"),a("OutboundLink")],1),e._v(" interface method "),a("code",[e._v("SignBytes(chainID string) []byte")]),e._v(". Also, the\nsignature won't be included directly, only in the corresponding "),a("code",[e._v("SignedVoteReply")]),e._v(" message.")]),e._v(" "),a("h3",{attrs:{id:"proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gdmFuaWxsYSBwcm90b2J1ZiAvIGFtaW5vIGVuY29kZWQKbWVzc2FnZSBQcm9wb3NhbCB7ICAgICAgICAgICAgICAgICAgICAgIAogICAgSGVpZ2h0ICAgICAgICAgICAgc2ZpeGVkNjQgICAgICAgCiAgICBSb3VuZCAgICAgICAgICAgICBzZml4ZWQzMgogICAgVGltZXN0YW1wICAgICAgICAgVGltZXN0YW1wICAgICAgICAgLy8gJmx0OyZsdDsgdXNpbmcgcHJvdG9idWYgZGVmaW5pdGlvbgogICAgQmxvY2tQYXJ0c0hlYWRlciAgUGFydFNldEhlYWRlciAgICAgLy8gYXMgYWxyZWFkeSBkZWZpbmVkCiAgICBQT0xSb3VuZCAgICAgICAgICBzZml4ZWQzMgogICAgUE9MQmxvY2tJRCAgICAgICAgQmxvY2tJRCAgICAgICAgICAgLy8gJmx0OyZsdDsgYXMgYWxyZWFkeSBkZWZpbmVkICAgIAp9CiAKLy8gYW1pbm8gcmVnaXN0ZXJlZCB3aXRoICZxdW90O3RlbmRlcm1pbnQvc29ja2V0cHYvU2lnblByb3Bvc2FsUmVxdWVzdCZxdW90OwptZXNzYWdlIFNpZ25Qcm9wb3NhbFJlcXVlc3QgewogICBQcm9wb3NhbCBwcm9wb3NhbAp9CgovLyBhbWlubyByZWdpc3RlcmVkIHdpdGggJnF1b3Q7dGVuZGVybWludC9zb2NrZXRwdi9TaWduUHJvcG9zYWxSZXBseSZxdW90OwptZXNzYWdlIFNpZ25Qcm9wb3NhbFJlcGx5IHsgCiAgIFByb3AgICBQcm9wb3NhbAogICBTaWcgICAgU2lnbmF0dXJlIAogICBFcnIgICAgRXJyb3IgICAgIC8vIGFzIGRlZmluZWQgYWJvdmUKfQo="}}),e._v(" "),a("h3",{attrs:{id:"heartbeat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat"}},[e._v("#")]),e._v(" Heartbeat")]),e._v(" "),a("p",[a("strong",[e._v("TODO")]),e._v(": clarify if heartbeat also needs a fixed offset and update the fields accordingly:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBIZWFydGJlYXQgewoJVmFsaWRhdG9yQWRkcmVzcyBBZGRyZXNzIAoJVmFsaWRhdG9ySW5kZXggICBpbnQgICAgIAoJSGVpZ2h0ICAgICAgICAgICBpbnQ2NCAgIAoJUm91bmQgICAgICAgICAgICBpbnQgICAgIAoJU2VxdWVuY2UgICAgICAgICBpbnQgICAgIAp9Ci8vIGFtaW5vIHJlZ2lzdGVyZWQgd2l0aCAmcXVvdDt0ZW5kZXJtaW50L3NvY2tldHB2L1NpZ25IZWFydGJlYXRSZXF1ZXN0JnF1b3Q7Cm1lc3NhZ2UgU2lnbkhlYXJ0YmVhdFJlcXVlc3QgewogICBIYiBIZWFydGJlYXQKfQoKLy8gYW1pbm8gcmVnaXN0ZXJlZCB3aXRoICZxdW90O3RlbmRlcm1pbnQvc29ja2V0cHYvU2lnbkhlYXJ0YmVhdFJlcGx5JnF1b3Q7Cm1lc3NhZ2UgU2lnbkhlYXJ0YmVhdFJlcGx5IHsgCiAgIEhiICAgICBIZWFydGJlYXQKICAgU2lnICAgIFNpZ25hdHVyZSAKICAgRXJyICAgIEVycm9yICAgICAvLyBhcyBkZWZpbmVkIGFib3ZlCn0KCg=="}}),e._v(" "),a("h2",{attrs:{id:"pubkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey"}},[e._v("#")]),e._v(" PubKey")]),e._v(" "),a("p",[e._v("TBA -  this needs further thoughts: e.g. what todo like in the case of the KMS which holds\nseveral keys? How does it know with which key to reply?")]),e._v(" "),a("h2",{attrs:{id:"signbytes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signbytes"}},[e._v("#")]),e._v(" SignBytes")]),e._v(" "),a("p",[a("code",[e._v("SignBytes")]),e._v(" will not require a "),a("code",[e._v("ChainID")]),e._v(" parameter:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"dHlwZSBTaWduYWJsZSBpbnRlcmZhY2UgewoJU2lnbkJ5dGVzKCkgW11ieXRlCn0KCg=="}}),e._v(" "),a("p",[e._v("And the implementation for vote, heartbeat, proposal will look like:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"golang",base64:"Ly8gdHlwZSBUIGlzIG9uZSBvZiB2b3RlLCBzaWduLCBwcm9wb3NhbApmdW5jICh0cCAqVCkgU2lnbkJ5dGVzKCkgW11ieXRlIHsKCWJ6LCBlcnIgOj0gY2RjLk1hcnNoYWxCaW5hcnkodHApCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CglyZXR1cm4gYnoKfQo="}}),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("DRAFT")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("p",[e._v("The most relevant positive effect is that the signing bytes can easily be parsed by a\nhardware module and a smart contract. Besides that:")]),e._v(" "),a("ul",[a("li",[e._v("clearer separation between requests and responses")]),e._v(" "),a("li",[e._v("added error messages enable better error handling")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("relatively huge change / refactoring touching quite some code")]),e._v(" "),a("li",[e._v("lot's of places assume a "),a("code",[e._v("Vote")]),e._v(" with a signature included -> they will need to")]),e._v(" "),a("li",[e._v("need to modify some interfaces")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("p",[e._v("not even the swiss are neutral")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);