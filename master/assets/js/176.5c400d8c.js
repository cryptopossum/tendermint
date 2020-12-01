(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{823:function(e,s,o){"use strict";o.r(s);var t=o(1),a=Object(t.a)({},(function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"tendermint-consensus-reactor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-consensus-reactor"}},[e._v("#")]),e._v(" Tendermint Consensus Reactor")]),e._v(" "),o("p",[e._v("Tendermint Consensus is a distributed protocol executed by validator processes to agree on\nthe next block to be added to the Tendermint blockchain. The protocol proceeds in rounds, where\neach round is a try to reach agreement on the next block. A round starts by having a dedicated\nprocess (called proposer) suggesting to other processes what should be the next block with\nthe "),o("code",[e._v("ProposalMessage")]),e._v(".\nThe processes respond by voting for a block with "),o("code",[e._v("VoteMessage")]),e._v(" (there are two kinds of vote\nmessages, prevote and precommit votes). Note that a proposal message is just a suggestion what the\nnext block should be; a validator might vote with a "),o("code",[e._v("VoteMessage")]),e._v(" for a different block. If in some\nround, enough number of processes vote for the same block, then this block is committed and later\nadded to the blockchain. "),o("code",[e._v("ProposalMessage")]),e._v(" and "),o("code",[e._v("VoteMessage")]),e._v(" are signed by the private key of the\nvalidator. The internals of the protocol and how it ensures safety and liveness properties are\nexplained in a forthcoming document.")]),e._v(" "),o("p",[e._v("For efficiency reasons, validators in Tendermint consensus protocol do not agree directly on the\nblock as the block size is big, i.e., they don't embed the block inside "),o("code",[e._v("Proposal")]),e._v(" and\n"),o("code",[e._v("VoteMessage")]),e._v(". Instead, they reach agreement on the "),o("code",[e._v("BlockID")]),e._v(" (see "),o("code",[e._v("BlockID")]),e._v(" definition in\n"),o("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#blockid",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockchain"),o("OutboundLink")],1),e._v(" section)\nthat uniquely identifies each block. The block itself is\ndisseminated to validator processes using peer-to-peer gossiping protocol. It starts by having a\nproposer first splitting a block into a number of block parts, that are then gossiped between\nprocesses using "),o("code",[e._v("BlockPartMessage")]),e._v(".")]),e._v(" "),o("p",[e._v("Validators in Tendermint communicate by peer-to-peer gossiping protocol. Each validator is connected\nonly to a subset of processes called peers. By the gossiping protocol, a validator send to its peers\nall needed information ("),o("code",[e._v("ProposalMessage")]),e._v(", "),o("code",[e._v("VoteMessage")]),e._v(" and "),o("code",[e._v("BlockPartMessage")]),e._v(") so they can\nreach agreement on some block, and also obtain the content of the chosen block (block parts). As\npart of the gossiping protocol, processes also send auxiliary messages that inform peers about the\nexecuted steps of the core consensus algorithm ("),o("code",[e._v("NewRoundStepMessage")]),e._v(" and "),o("code",[e._v("NewValidBlockMessage")]),e._v("), and\nalso messages that inform peers what votes the process has seen ("),o("code",[e._v("HasVoteMessage")]),e._v(",\n"),o("code",[e._v("VoteSetMaj23Message")]),e._v(" and "),o("code",[e._v("VoteSetBitsMessage")]),e._v("). These messages are then used in the gossiping\nprotocol to determine what messages a process should send to its peers.")]),e._v(" "),o("p",[e._v("We now describe the content of each message exchanged during Tendermint consensus protocol.")]),e._v(" "),o("h2",{attrs:{id:"proposalmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposalmessage"}},[e._v("#")]),e._v(" ProposalMessage")]),e._v(" "),o("p",[e._v("ProposalMessage is sent when a new block is proposed. It is a suggestion of what the\nnext block in the blockchain should be.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9wb3NhbE1lc3NhZ2Ugc3RydWN0IHsKICAgIFByb3Bvc2FsIFByb3Bvc2FsCn0K"}}),e._v(" "),o("h3",{attrs:{id:"proposal"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[e._v("#")]),e._v(" Proposal")]),e._v(" "),o("p",[e._v("Proposal contains height and round for which this proposal is made, BlockID as a unique identifier\nof proposed block, timestamp, and POLRound (a so-called Proof-of-Lock (POL) round) that is needed for\ntermination of the consensus. If POLRound >= 0, then BlockID corresponds to the block that\nis locked in POLRound. The message is signed by the validator private key.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9wb3NhbCBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKICAgIFBPTFJvdW5kICAgICAgICAgaW50CiAgICBCbG9ja0lEICAgICAgICAgIEJsb2NrSUQKICAgIFRpbWVzdGFtcCAgICAgICAgVGltZQogICAgU2lnbmF0dXJlICAgICAgICBTaWduYXR1cmUKfQo="}}),e._v(" "),o("h2",{attrs:{id:"votemessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votemessage"}},[e._v("#")]),e._v(" VoteMessage")]),e._v(" "),o("p",[e._v("VoteMessage is sent to vote for some block (or to inform others that a process does not vote in the\ncurrent round). Vote is defined in the\n"),o("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#blockidd",target:"_blank",rel:"noopener noreferrer"}},[e._v("Blockchain"),o("OutboundLink")],1),e._v("\nsection and contains validator's\ninformation (validator address and index), height and round for which the vote is sent, vote type,\nblockID if process vote for some block ("),o("code",[e._v("nil")]),e._v(" otherwise) and a timestamp when the vote is sent. The\nmessage is signed by the validator private key.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RlTWVzc2FnZSBzdHJ1Y3QgewogICAgVm90ZSBWb3RlCn0K"}}),e._v(" "),o("h2",{attrs:{id:"blockpartmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blockpartmessage"}},[e._v("#")]),e._v(" BlockPartMessage")]),e._v(" "),o("p",[e._v("BlockPartMessage is sent when gossiping a piece of the proposed block. It contains height, round\nand the block part.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCbG9ja1BhcnRNZXNzYWdlIHN0cnVjdCB7CiAgICBIZWlnaHQgaW50NjQKICAgIFJvdW5kICBpbnQKICAgIFBhcnQgICBQYXJ0Cn0K"}}),e._v(" "),o("h2",{attrs:{id:"newroundstepmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#newroundstepmessage"}},[e._v("#")]),e._v(" NewRoundStepMessage")]),e._v(" "),o("p",[e._v("NewRoundStepMessage is sent for every step transition during the core consensus algorithm execution.\nIt is used in the gossip part of the Tendermint protocol to inform peers about a current\nheight/round/step a process is in.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBOZXdSb3VuZFN0ZXBNZXNzYWdlIHN0cnVjdCB7CiAgICBIZWlnaHQgICAgICAgICAgICAgICAgaW50NjQKICAgIFJvdW5kICAgICAgICAgICAgICAgICBpbnQKICAgIFN0ZXAgICAgICAgICAgICAgICAgICBSb3VuZFN0ZXBUeXBlCiAgICBTZWNvbmRzU2luY2VTdGFydFRpbWUgaW50CiAgICBMYXN0Q29tbWl0Um91bmQgICAgICAgaW50Cn0K"}}),e._v(" "),o("h2",{attrs:{id:"newvalidblockmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#newvalidblockmessage"}},[e._v("#")]),e._v(" NewValidBlockMessage")]),e._v(" "),o("p",[e._v("NewValidBlockMessage is sent when a validator observes a valid block B in some round r,\ni.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.\nIt contains height and round in which valid block is observed, block parts header that describes\nthe valid block and is used to obtain all\nblock parts, and a bit array of the block parts a process currently has, so its peers can know what\nparts it is missing so they can send them.\nIn case the block is also committed, then IsCommit flag is set to true.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBOZXdWYWxpZEJsb2NrTWVzc2FnZSBzdHJ1Y3QgewogICAgSGVpZ2h0ICAgICAgICAgICBpbnQ2NAogICAgUm91bmQgICAgICAgICAgICBpbnQKICAgIEJsb2NrUGFydHNIZWFkZXIgUGFydFNldEhlYWRlcgogICAgQmxvY2tQYXJ0cyAgICAgICBCaXRBcnJheQogICAgSXNDb21taXQgICAgICAgICBib29sCn0K"}}),e._v(" "),o("h2",{attrs:{id:"proposalpolmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proposalpolmessage"}},[e._v("#")]),e._v(" ProposalPOLMessage")]),e._v(" "),o("p",[e._v("ProposalPOLMessage is sent when a previous block is re-proposed.\nIt is used to inform peers in what round the process learned for this block (ProposalPOLRound),\nand what prevotes for the re-proposed block the process has.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBQcm9wb3NhbFBPTE1lc3NhZ2Ugc3RydWN0IHsKICAgIEhlaWdodCAgICAgICAgICAgaW50NjQKICAgIFByb3Bvc2FsUE9MUm91bmQgaW50CiAgICBQcm9wb3NhbFBPTCAgICAgIEJpdEFycmF5Cn0K"}}),e._v(" "),o("h2",{attrs:{id:"hasvotemessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hasvotemessage"}},[e._v("#")]),e._v(" HasVoteMessage")]),e._v(" "),o("p",[e._v("HasVoteMessage is sent to indicate that a particular vote has been received. It contains height,\nround, vote type and the index of the validator that is the originator of the corresponding vote.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBIYXNWb3RlTWVzc2FnZSBzdHJ1Y3QgewogICAgSGVpZ2h0IGludDY0CiAgICBSb3VuZCAgaW50CiAgICBUeXBlICAgYnl0ZQogICAgSW5kZXggIGludAp9Cg=="}}),e._v(" "),o("h2",{attrs:{id:"votesetmaj23message"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votesetmaj23message"}},[e._v("#")]),e._v(" VoteSetMaj23Message")]),e._v(" "),o("p",[e._v("VoteSetMaj23Message is sent to indicate that a process has seen +2/3 votes for some BlockID.\nIt contains height, round, vote type and the BlockID.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RlU2V0TWFqMjNNZXNzYWdlIHN0cnVjdCB7CiAgICBIZWlnaHQgIGludDY0CiAgICBSb3VuZCAgIGludAogICAgVHlwZSAgICBieXRlCiAgICBCbG9ja0lEIEJsb2NrSUQKfQo="}}),e._v(" "),o("h2",{attrs:{id:"votesetbitsmessage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#votesetbitsmessage"}},[e._v("#")]),e._v(" VoteSetBitsMessage")]),e._v(" "),o("p",[e._v("VoteSetBitsMessage is sent to communicate the bit-array of votes a process has seen for a given\nBlockID. It contains height, round, vote type, BlockID and a bit array of\nthe votes a process has.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBWb3RlU2V0Qml0c01lc3NhZ2Ugc3RydWN0IHsKICAgIEhlaWdodCAgaW50NjQKICAgIFJvdW5kICAgaW50CiAgICBUeXBlICAgIGJ5dGUKICAgIEJsb2NrSUQgQmxvY2tJRAogICAgVm90ZXMgICBCaXRBcnJheQp9Cg=="}})],1)}),[],!1,null,null,null);s.default=a.exports}}]);