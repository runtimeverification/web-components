import {GraphViz} from "@/components";

export default function Home() {
    return (<div>
            <GraphViz dotGraphData={a}/>
        </div>);
}





var a = `
digraph {
\t"243649c4a51d117c05e827f61b2bfc10a2e00eb87fd090cf2e7ff31747c1009e" [label="243649..c1009e (init, expanded)" class="init expanded"]
\t"716826235cf911dbc471be3a97d23edd15e0fe8127c11eb80b43a02693189ae4" [label="716826..189ae4 (target, leaf)" class="target leaf"]
\t"15269e2f2a6ec9dc1f44643afec9e6fc63e03cae81f3bf6ad674dbdfe9a619cf" [label="15269e..a619cf (expanded)" class=expanded]
\tb1992c6f42dd230dd3068b797780c8a4fcss9a45acecc48081f91fc20405105425 [label="b1992c..105425 (expanded)" class=expanded]
\ted9dff61b7193d17a6a3234f62af2c585772d1f075b1f1f305deb990003b583d [label="ed9dff..3b583d (expanded)" class=expanded]
\t"3e686f12d551a0d12df45fe07963702a28d91s9fdb487bce3872c77dae1e2aaf7" [label="3e686f..e2aaf7 (expanded)" class=expanded]
\t"901a41879080aaff953bb56df7c983821221aeb22d282f98670f152d313254e3" [label="901a41..3254e3 (expanded)" class=expanded]
\te0cf9b467e9e258eed4e5f27759b2b751ab4606482e8f53d2d1580e522a69efd [label="e0cf9b..a69efd (expanded)" class=expanded]
\t"929061a49771e8f67070e1772235460f27a7bceb4dcebcc41e12ce98455b17cb" [label="929061..5b17cb (expanded)" class=expanded]
\tac12c9008d0cbc5820cd9936894513e63ede0646a16df166fd202a5f19ffa588 [label="ac12c9..ffa588 (expanded)" class=expanded]
\t"5e7162d93f5dee753fc664a2db76e5897c26d8b36d68b9ab3f85cc96a713cc42" [label="5e7162..13cc42 (expanded)" class=expanded]
\tf6d5737f90bf92230ad98ccb7b6301edaf080decc444e5691dd616502fcbdaae [label="f6d573..cbdaae (expanded)" class=expanded]
\tc05d7249be413a25854c748f9c6af72c732eb320ca9e3063a800a859ed87ee96 [label="c05d72..87ee96 (leaf)" class=leaf]
\tbf9b74f29059a5bf51df197b5e9d72b82383136d2a97cd67787fd781b36bcd6b [label="bf9b74..6bcd6b (expanded, stuck, leaf)" class="expanded stuck leaf"]
\t"243649c4a51d117c05e827f61b2bfc10a2e00eb87fd090cf2e7ff31747c1009e" -> "15269e2f2a6ec9dc1f44643afec9e6fc63e03cae81f3bf6ad674dbdfe9a619cf" [label="  true
49 steps        " class=unverified]
\t"15269e2f2a6ec9dc1f44643afec9e6fc63e03cae81f3bf6ad674dbdfe9a619cf" -> b1992c6f42dd230dd3068b797780c8a4fc9a45acecc48081f91fc20405105425 [label="  true
45 steps        " class=unverified]
\tb1992c6f42dd230dd3068b797780c8a4fc9a45acecc48081f91fc20405105425 -> ed9dff61b7193d17a6a3234f62af2c585772d1f075b1f1f305deb990003b583d [label="  true
41 steps        " class=unverified]
\ted9dff61b7193d17a6a3234f62af2c585772d1f075b1f1f305deb990003b583d -> "3e686f12d551a0d12df45fe07963702a28d919fdb487bce3872c77dae1e2aaf7" [label="  true
36 steps        " class=unverified]
\t"3e686f12d551a0d12df45fe07963702a28d919fdb487bce3872c77dae1e2aaf7" -> "901a41879080aaff953bb56df7c983821221aeb22d282f98670f152d313254e3" [label="  true
89 steps        " class=unverified]
\t"901a41879080aaff953bb56df7c983821221aeb22d282f98670f152d313254e3" -> e0cf9b467e9e258eed4e5f27759b2b751ab4606482e8f53d2d1580e522a69efd [label="  true
93 steps        " class=unverified]
\te0cf9b467e9e258eed4e5f27759b2b751ab4606482e8f53d2d1580e522a69efd -> "929061a49771e8f67070e1772235460f27a7bceb4dcebcc41e12ce98455b17cb" [label="  true
122 steps        " class=unverified]
\t"929061a49771e8f67070e1772235460f27a7bceb4dcebcc41e12ce98455b17cb" -> ac12c9008d0cbc5820cd9936894513e63ede0646a16df166fd202a5f19ffa588 [label="  VV0_b_114b9705:Int ==Int 0
0 steps        " class=verified]
\t"929061a49771e8f67070e1772235460f27a7bceb4dcebcc41e12ce98455b17cb" -> "5e7162d93f5dee753fc664a2db76e5897c26d8b36d68b9ab3f85cc96a713cc42" [label="  VV0_b_114b9705:Int =/=Int 0
0 steps        " class=verified]
\tac12c9008d0cbc5820cd9936894513e63ede0646a16df166fd202a5f19ffa588 -> f6d5737f90bf92230ad98ccb7b6301edaf080decc444e5691dd616502fcbdaae [label="  true
1 steps        " class=unverified]
\t"5e7162d93f5dee753fc664a2db76e5897c26d8b36d68b9ab3f85cc96a713cc42" -> c05d7249be413a25854c748f9c6af72c732eb320ca9e3063a800a859ed87ee96 [label="  true
52 steps        " class=unverified]
\tf6d5737f90bf92230ad98ccb7b6301edaf080decc444e5691dd616502fcbdaae -> bf9b74f29059a5bf51df197b5e9d72b82383136d2a97cd67787fd781b36bcd6b [label="  true
89 steps        " class=unverified]
\tc05d7249be413a25854c748f9c6af72c732eb320ca9e3063a800a859ed87ee96 -> "716826235cf911dbc471be3a97d23edd15e0fe8127c11eb80b43a02693189ae4" [label="  ACCESSEDACCOUNTS_CELL_5d410f2a |-> .Set, ACCESSEDSTORAGE_CELL_5d410f2a |-> .Map, ACCOUNTS_FINAL |->  ...        " class=abstraction style=dashed]
\tbf9b74f29059a5bf51df197b5e9d72b82383136d2a97cd67787fd781b36bcd6b -> "716826235cf911dbc471be3a97d23edd15e0fe8127c11eb80b43a02693189ae4" [label="  false" class=target style=solid]
}

`