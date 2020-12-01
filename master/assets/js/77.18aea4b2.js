(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{699:function(e,t,a){"use strict";a.r(t);var r=a(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-006-trust-metric-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-006-trust-metric-design"}},[e._v("#")]),e._v(" ADR 006: Trust Metric Design")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("The proposed trust metric will allow Tendermint to maintain local trust rankings for peers it has directly interacted with, which can then be used to implement soft security controls. The calculations were obtained from the "),a("a",{attrs:{href:"https://dl.acm.org/citation.cfm?id=1060808",target:"_blank",rel:"noopener noreferrer"}},[e._v("TrustGuard"),a("OutboundLink")],1),e._v(" project.")]),e._v(" "),a("h3",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("The Tendermint Core project developers would like to improve Tendermint security and reliability by keeping track of the level of trustworthiness peers have demonstrated within the peer-to-peer network. This way, undesirable outcomes from peers will not immediately result in them being dropped from the network (potentially causing drastic changes to take place). Instead, peers behavior can be monitored with appropriate metrics and be removed from the network once Tendermint Core is certain the peer is a threat. For example, when the PEXReactor makes a request for peers network addresses from a already known peer, and the returned network addresses are unreachable, this untrustworthy behavior should be tracked. Returning a few bad network addresses probably shouldn’t cause a peer to be dropped, while excessive amounts of this behavior does qualify the peer being dropped.")]),e._v(" "),a("p",[e._v("Trust metrics can be circumvented by malicious nodes through the use of strategic oscillation techniques, which adapts the malicious node’s behavior pattern in order to maximize its goals. For instance, if the malicious node learns that the time interval of the Tendermint trust metric is "),a("em",[e._v("X")]),e._v(" hours, then it could wait "),a("em",[e._v("X")]),e._v(" hours in-between malicious activities. We could try to combat this issue by increasing the interval length, yet this will make the system less adaptive to recent events.")]),e._v(" "),a("p",[e._v("Instead, having shorter intervals, but keeping a history of interval values, will give our metric the flexibility needed in order to keep the network stable, while also making it resilient against a strategic malicious node in the Tendermint peer-to-peer network. Also, the metric can access trust data over a rather long period of time while not greatly increasing its history size by aggregating older history values over a larger number of intervals, and at the same time, maintain great precision for the recent intervals. This approach is referred to as fading memories, and closely resembles the way human beings remember their experiences. The trade-off to using history data is that the interval values should be preserved in-between executions of the node.")]),e._v(" "),a("h3",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("p",[e._v("S. Mudhakar, L. Xiong, and L. Liu, “TrustGuard: Countering Vulnerabilities in Reputation Management for Decentralized Overlay Networks,” in "),a("em",[e._v("Proceedings of the 14th international conference on World Wide Web, pp. 422-431")]),e._v(", May 2005.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("p",[e._v("The proposed trust metric will allow a developer to inform the trust metric store of all good and bad events relevant to a peer's behavior, and at any time, the metric can be queried for a peer's current trust ranking.")]),e._v(" "),a("p",[e._v("The three subsections below will cover the process being considered for calculating the trust ranking, the concept of the trust metric store, and the interface for the trust metric.")]),e._v(" "),a("h3",{attrs:{id:"proposed-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposed-process"}},[e._v("#")]),e._v(" Proposed Process")]),e._v(" "),a("p",[e._v("The proposed trust metric will count good and bad events relevant to the object, and calculate the percent of counters that are good over an interval with a predefined duration. This is the procedure that will continue for the life of the trust metric. When the trust metric is queried for the current "),a("strong",[e._v("trust value")]),e._v(", a resilient equation will be utilized to perform the calculation.")]),e._v(" "),a("p",[e._v("The equation being proposed resembles a Proportional-Integral-Derivative (PID) controller used in control systems. The proportional component allows us to be sensitive to the value of the most recent interval, while the integral component allows us to incorporate trust values stored in the history data, and the derivative component allows us to give weight to sudden changes in the behavior of a peer. We compute the trust value of a peer in interval i based on its current trust ranking, its trust rating history prior to interval "),a("em",[e._v("i")]),e._v(" (over the past "),a("em",[e._v("maxH")]),e._v(" number of intervals) and its trust ranking fluctuation. We will break up the equation into the three components.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"KDEpIFByb3BvcnRpb25hbCBWYWx1ZSA9IGEgKiBSW2ldCg=="}}),e._v(" "),a("p",[e._v("where "),a("em",[e._v("R")]),e._v("["),a("em",[e._v("i")]),e._v("] denotes the raw trust value at time interval "),a("em",[e._v("i")]),e._v(" (where "),a("em",[e._v("i")]),e._v(" == 0 being current time) and "),a("em",[e._v("a")]),e._v(" is the weight applied to the contribution of the current reports. The next component of our equation uses a weighted sum over the last "),a("em",[e._v("maxH")]),e._v(" intervals to calculate the history value for time "),a("em",[e._v("i")]),e._v(":")]),e._v(" "),a("p",[a("code",[e._v("H[i] =")]),e._v(" "),a("img",{attrs:{src:"img/formula1.png",alt:"formula1",title:"Weighted Sum Formula"}})]),e._v(" "),a("p",[e._v("The weights can be chosen either optimistically or pessimistically. An optimistic weight creates larger weights for newer history data values, while the the pessimistic weight creates larger weights for time intervals with lower scores. The default weights used during the calculation of the history value are optimistic and calculated as "),a("em",[e._v("Wk")]),e._v(" = 0.8^"),a("em",[e._v("k")]),e._v(", for time interval "),a("em",[e._v("k")]),e._v(". With the history value available, we can now finish calculating the integral value:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"KDIpIEludGVncmFsIFZhbHVlID0gYiAqIEhbaV0K"}}),e._v(" "),a("p",[e._v("Where "),a("em",[e._v("H")]),e._v("["),a("em",[e._v("i")]),e._v("] denotes the history value at time interval "),a("em",[e._v("i")]),e._v(" and "),a("em",[e._v("b")]),e._v(" is the weight applied to the contribution of past performance for the object being measured. The derivative component will be calculated as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"RFtpXSA9IFJbaV0g4oCTIEhbaV0KCigzKSBEZXJpdmF0aXZlIFZhbHVlID0gYyhEW2ldKSAqIERbaV0K"}}),e._v(" "),a("p",[e._v("Where the value of "),a("em",[e._v("c")]),e._v(" is selected based on the "),a("em",[e._v("D")]),e._v("["),a("em",[e._v("i")]),e._v("] value relative to zero. The default selection process makes "),a("em",[e._v("c")]),e._v(" equal to 0 unless "),a("em",[e._v("D")]),e._v("["),a("em",[e._v("i")]),e._v("] is a negative value, in which case c is equal to 1. The result is that the maximum penalty is applied when current behavior is lower than previously experienced behavior. If the current behavior is better than the previously experienced behavior, then the Derivative Value has no impact on the trust value. With the three components brought together, our trust value equation is calculated as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"VHJ1c3RWYWx1ZVtpXSA9IGEgKiBSW2ldICsgYiAqIEhbaV0gKyBjKERbaV0pICogRFtpXQo="}}),e._v(" "),a("p",[e._v("As a performance optimization that will keep the amount of raw interval data being saved to a reasonable size of "),a("em",[e._v("m")]),e._v(", while allowing us to represent 2^"),a("em",[e._v("m")]),e._v(" - 1 history intervals, we can employ the fading memories technique that will trade space and time complexity for the precision of the history data values by summarizing larger quantities of less recent values. While our equation above attempts to access up to "),a("em",[e._v("maxH")]),e._v(" (which can be 2^"),a("em",[e._v("m")]),e._v(" - 1), we will map those requests down to "),a("em",[e._v("m")]),e._v(" values using equation 4 below:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"KDQpIGogPSBpbmRleCwgd2hlcmUgaW5kZXggJmd0OyAwCg=="}}),e._v(" "),a("p",[e._v("Where "),a("em",[e._v("j")]),e._v(" is one of "),a("em",[e._v("(0, 1, 2, … , m – 1)")]),e._v(" indices used to access history interval data. Now we can access the raw intervals using the following calculations:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"math",base64:"UlswXSA9IHJhdyBkYXRhIGZvciBjdXJyZW50IHRpbWUgaW50ZXJ2YWwK"}}),e._v(" "),a("p",[a("code",[e._v("R[j] =")]),e._v(" "),a("img",{attrs:{src:"img/formula2.png",alt:"formula2",title:"Fading Memories Formula"}})]),e._v(" "),a("h3",{attrs:{id:"trust-metric-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trust-metric-store"}},[e._v("#")]),e._v(" Trust Metric Store")]),e._v(" "),a("p",[e._v("Similar to the P2P subsystem AddrBook, the trust metric store will maintain information relevant to Tendermint peers. Additionally, the trust metric store will ensure that trust metrics will only be active for peers that a node is currently and directly engaged with.")]),e._v(" "),a("p",[e._v("Reactors will provide a peer key to the trust metric store in order to retrieve the associated trust metric. The trust metric can then record new positive and negative events experienced by the reactor, as well as provided the current trust score calculated by the metric.")]),e._v(" "),a("p",[e._v("When the node is shutting down, the trust metric store will save history data for trust metrics associated with all known peers. This saved information allows experiences with a peer to be preserved across node executions, which can span a tracking windows of days or weeks. The trust history data is loaded automatically during OnStart.")]),e._v(" "),a("h3",{attrs:{id:"interface-detailed-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-detailed-design"}},[e._v("#")]),e._v(" Interface Detailed Design")]),e._v(" "),a("p",[e._v("Each trust metric allows for the recording of positive/negative events, querying the current trust value/score, and the stopping/pausing of tracking over time intervals. This can be seen below:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJ1c3RNZXRyaWMgLSBrZWVwcyB0cmFjayBvZiBwZWVyIHJlbGlhYmlsaXR5CnR5cGUgVHJ1c3RNZXRyaWMgc3RydWN0IHsKICAgIC8vIFByaXZhdGUgZWxlbWVudHMuCn0KCi8vIFBhdXNlIHRlbGxzIHRoZSBtZXRyaWMgdG8gcGF1c2UgcmVjb3JkaW5nIGRhdGEgb3ZlciB0aW1lIGludGVydmFscy4KLy8gQWxsIG1ldGhvZCBjYWxscyB0aGF0IGluZGljYXRlIGV2ZW50cyB3aWxsIHVucGF1c2UgdGhlIG1ldHJpYwpmdW5jICh0bSAqVHJ1c3RNZXRyaWMpIFBhdXNlKCkge30KCi8vIFN0b3AgdGVsbHMgdGhlIG1ldHJpYyB0byBzdG9wIHJlY29yZGluZyBkYXRhIG92ZXIgdGltZSBpbnRlcnZhbHMKZnVuYyAodG0gKlRydXN0TWV0cmljKSBTdG9wKCkge30KCi8vIEJhZEV2ZW50cyBpbmRpY2F0ZXMgdGhhdCBhbiB1bmRlc2lyYWJsZSBldmVudChzKSB0b29rIHBsYWNlCmZ1bmMgKHRtICpUcnVzdE1ldHJpYykgQmFkRXZlbnRzKG51bSBpbnQpIHt9CgovLyBHb29kRXZlbnRzIGluZGljYXRlcyB0aGF0IGEgZGVzaXJhYmxlIGV2ZW50KHMpIHRvb2sgcGxhY2UKZnVuYyAodG0gKlRydXN0TWV0cmljKSBHb29kRXZlbnRzKG51bSBpbnQpIHt9CgovLyBUcnVzdFZhbHVlIGdldHMgdGhlIGRlcGVuZGFibGUgdHJ1c3QgdmFsdWU7IGFsd2F5cyBiZXR3ZWVuIDAgYW5kIDEKZnVuYyAodG0gKlRydXN0TWV0cmljKSBUcnVzdFZhbHVlKCkgZmxvYXQ2NCB7fQoKLy8gVHJ1c3RTY29yZSBnZXRzIGEgc2NvcmUgYmFzZWQgb24gdGhlIHRydXN0IHZhbHVlIGFsd2F5cyBiZXR3ZWVuIDAgYW5kIDEwMApmdW5jICh0bSAqVHJ1c3RNZXRyaWMpIFRydXN0U2NvcmUoKSBpbnQge30KCi8vIE5ld01ldHJpYyByZXR1cm5zIGEgdHJ1c3QgbWV0cmljIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbgpmdW5jIE5ld01ldHJpYygpICpUcnVzdE1ldHJpYyB7fQoKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KLy8gRm9yIGV4YW1wbGUKCnRtIDo9IE5ld01ldHJpYygpCgp0bS5CYWRFdmVudHMoMSkKc2NvcmUgOj0gdG0uVHJ1c3RTY29yZSgpCgp0bS5TdG9wKCkK"}}),e._v(" "),a("p",[e._v("Some of the trust metric parameters can be configured. The weight values should probably be left alone in more cases, yet the time durations for the tracking window and individual time interval should be considered.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJ1c3RNZXRyaWNDb25maWcgLSBDb25maWd1cmVzIHRoZSB3ZWlnaHQgZnVuY3Rpb25zIGFuZCB0aW1lIGludGVydmFscyBmb3IgdGhlIG1ldHJpYwp0eXBlIFRydXN0TWV0cmljQ29uZmlnIHN0cnVjdCB7CiAgICAvLyBEZXRlcm1pbmVzIHRoZSBwZXJjZW50YWdlIGdpdmVuIHRvIGN1cnJlbnQgYmVoYXZpb3IKICAgIFByb3BvcnRpb25hbFdlaWdodCBmbG9hdDY0CgogICAgLy8gRGV0ZXJtaW5lcyB0aGUgcGVyY2VudGFnZSBnaXZlbiB0byBwcmlvciBiZWhhdmlvcgogICAgSW50ZWdyYWxXZWlnaHQgZmxvYXQ2NAoKICAgIC8vIFRoZSB3aW5kb3cgb2YgdGltZSB0aGF0IHRoZSB0cnVzdCBtZXRyaWMgd2lsbCB0cmFjayBldmVudHMgYWNyb3NzLgogICAgLy8gVGhpcyBjYW4gYmUgc2V0IHRvIGNvdmVyIG1hbnkgZGF5cyB3aXRob3V0IGlzc3VlCiAgICBUcmFja2luZ1dpbmRvdyB0aW1lLkR1cmF0aW9uCgogICAgLy8gRWFjaCBpbnRlcnZhbCBzaG91bGQgYmUgc2hvcnQgZm9yIGFkYXBhYmlsaXR5LgogICAgLy8gTGVzcyB0aGFuIDMwIHNlY29uZHMgaXMgdG9vIHNlbnNpdGl2ZSwKICAgIC8vIGFuZCBncmVhdGVyIHRoYW4gNSBtaW51dGVzIHdpbGwgbWFrZSB0aGUgbWV0cmljIG51bWIKICAgIEludGVydmFsTGVuZ3RoIHRpbWUuRHVyYXRpb24KfQoKLy8gRGVmYXVsdENvbmZpZyByZXR1cm5zIGEgY29uZmlnIHdpdGggdmFsdWVzIHRoYXQgaGF2ZSBiZWVuIHRlc3RlZCBhbmQgcHJvZHVjZSBkZXNpcmFibGUgcmVzdWx0cwpmdW5jIERlZmF1bHRDb25maWcoKSBUcnVzdE1ldHJpY0NvbmZpZyB7fQoKLy8gTmV3TWV0cmljV2l0aENvbmZpZyByZXR1cm5zIGEgdHJ1c3QgbWV0cmljIHdpdGggYSBjdXN0b20gY29uZmlndXJhdGlvbgpmdW5jIE5ld01ldHJpY1dpdGhDb25maWcodG1jIFRydXN0TWV0cmljQ29uZmlnKSAqVHJ1c3RNZXRyaWMge30KCi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIEZvciBleGFtcGxlCgpjb25maWcgOj0gVHJ1c3RNZXRyaWNDb25maWd7CiAgICBUcmFja2luZ1dpbmRvdzogdGltZS5NaW51dGUgKiA2MCAqIDI0LCAvLyBvbmUgZGF5CiAgICBJbnRlcnZhbExlbmd0aDogICAgdGltZS5NaW51dGUgKiAyLAp9Cgp0bSA6PSBOZXdNZXRyaWNXaXRoQ29uZmlnKGNvbmZpZykKCnRtLkJhZEV2ZW50cygxMCkKdG0uUGF1c2UoKQp0bS5Hb29kRXZlbnRzKDEpIC8vIGJlY29tZXMgYWN0aXZlIGFnYWluCg=="}}),e._v(" "),a("p",[e._v("A trust metric store should be created with a DB that has persistent storage so it can save history data across node executions. All trust metrics instantiated by the store will be created with the provided TrustMetricConfig configuration.")]),e._v(" "),a("p",[e._v("When you attempt to fetch the trust metric for a peer, and an entry does not exist in the trust metric store, a new metric is automatically created and the entry made within the store.")]),e._v(" "),a("p",[e._v("In additional to the fetching method, GetPeerTrustMetric, the trust metric store provides a method to call when a peer has disconnected from the node. This is so the metric can be paused (history data will not be saved) for periods of time when the node is not having direct experiences with the peer.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gVHJ1c3RNZXRyaWNTdG9yZSAtIE1hbmFnZXMgYWxsIHRydXN0IG1ldHJpY3MgZm9yIHBlZXJzCnR5cGUgVHJ1c3RNZXRyaWNTdG9yZSBzdHJ1Y3QgewogICAgY21uLkJhc2VTZXJ2aWNlCgogICAgLy8gUHJpdmF0ZSBlbGVtZW50cwp9CgovLyBPblN0YXJ0IGltcGxlbWVudHMgU2VydmljZQpmdW5jICh0bXMgKlRydXN0TWV0cmljU3RvcmUpIE9uU3RhcnQoKSBlcnJvciB7fQoKLy8gT25TdG9wIGltcGxlbWVudHMgU2VydmljZQpmdW5jICh0bXMgKlRydXN0TWV0cmljU3RvcmUpIE9uU3RvcCgpIHt9CgovLyBOZXdUcnVzdE1ldHJpY1N0b3JlIHJldHVybnMgYSBzdG9yZSB0aGF0IHNhdmVzIGRhdGEgdG8gdGhlIERCCi8vIGFuZCB1c2VzIHRoZSBjb25maWcgd2hlbiBjcmVhdGluZyBuZXcgdHJ1c3QgbWV0cmljcwpmdW5jIE5ld1RydXN0TWV0cmljU3RvcmUoZGIgZGJtLkRCLCB0bWMgVHJ1c3RNZXRyaWNDb25maWcpICpUcnVzdE1ldHJpY1N0b3JlIHt9CgovLyBTaXplIHJldHVybnMgdGhlIG51bWJlciBvZiBlbnRyaWVzIGluIHRoZSB0cnVzdCBtZXRyaWMgc3RvcmUKZnVuYyAodG1zICpUcnVzdE1ldHJpY1N0b3JlKSBTaXplKCkgaW50IHt9CgovLyBHZXRQZWVyVHJ1c3RNZXRyaWMgcmV0dXJucyBhIHRydXN0IG1ldHJpYyBieSBwZWVyIGtleQpmdW5jICh0bXMgKlRydXN0TWV0cmljU3RvcmUpIEdldFBlZXJUcnVzdE1ldHJpYyhrZXkgc3RyaW5nKSAqVHJ1c3RNZXRyaWMge30KCi8vIFBlZXJEaXNjb25uZWN0ZWQgcGF1c2VzIHRoZSB0cnVzdCBtZXRyaWMgYXNzb2NpYXRlZCB3aXRoIHRoZSBwZWVyIGlkZW50aWZpZWQgYnkgdGhlIGtleQpmdW5jICh0bXMgKlRydXN0TWV0cmljU3RvcmUpIFBlZXJEaXNjb25uZWN0ZWQoa2V5IHN0cmluZykge30KCi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCi8vIEZvciBleGFtcGxlCgpkYiA6PSBkYm0uTmV3REIoJnF1b3Q7dHJ1c3RoaXN0b3J5JnF1b3Q7LCAmcXVvdDtnb2xldmVsZGImcXVvdDssIGRpclBhdGhTdHIpCnRtcyA6PSBOZXdUcnVzdE1ldHJpY1N0b3JlKGRiLCBEZWZhdWx0Q29uZmlnKCkpCgp0bSA6PSB0bXMuR2V0UGVlclRydXN0TWV0cmljKGtleSkKdG0uQmFkRXZlbnRzKDEpCgp0bXMuUGVlckRpc2Nvbm5lY3RlZChrZXkpCg=="}}),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Approved.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("The trust metric will allow Tendermint to make non-binary security and reliability decisions")]),e._v(" "),a("li",[e._v("Will help Tendermint implement deterrents that provide soft security controls, yet avoids disruption on the network")]),e._v(" "),a("li",[e._v("Will provide useful profiling information when analyzing performance over time related to peer interaction")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Requires saving the trust metric history data across node executions")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("Keep in mind that, good events need to be recorded just as bad events do using this implementation")])])],1)}),[],!1,null,null,null);t.default=i.exports}}]);