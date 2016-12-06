'use strict'

const input = `1:LVR:0:POS:triangle.Triangle@classify:20:0 |==> 1
2:LVR:0:NEG:triangle.Triangle@classify:20:0 |==> -1
3:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:20:a <= 0 |==> a < 0
4:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:20:a <= 0 |==> a == 0
5:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:20:a <= 0 |==> true
6:LVR:0:POS:triangle.Triangle@classify:20:0 |==> 1
7:LVR:0:NEG:triangle.Triangle@classify:20:0 |==> -1
8:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:20:b <= 0 |==> b < 0
9:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:20:b <= 0 |==> b == 0
10:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:20:b <= 0 |==> true
11:COR:||(boolean,boolean):!=(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 |==> a <= 0 != b <= 0
12:COR:||(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 |==> a <= 0
13:COR:||(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 |==> b <= 0
14:COR:||(boolean,boolean):TRUE(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 |==> true
15:LVR:0:POS:triangle.Triangle@classify:20:0 |==> 1
16:LVR:0:NEG:triangle.Triangle@classify:20:0 |==> -1
17:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:20:c <= 0 |==> c < 0
18:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:20:c <= 0 |==> c == 0
19:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:20:c <= 0 |==> true
20:COR:||(boolean,boolean):!=(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 || c <= 0 |==> (a <= 0 || b <= 0) != c <= 0
21:COR:||(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 || c <= 0 |==> a <= 0 || b <= 0
22:COR:||(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 || c <= 0 |==> c <= 0
23:COR:||(boolean,boolean):TRUE(boolean,boolean):triangle.Triangle@classify:20:a <= 0 || b <= 0 || c <= 0 |==> true
24:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:21:return Type.INVALID; |==> return null;
25:LVR:0:POS:triangle.Triangle@classify:23:0 |==> 1
26:LVR:0:NEG:triangle.Triangle@classify:23:0 |==> -1
27:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:24:a == b |==> a <= b
28:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:24:a == b |==> a >= b
29:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:24:a == b |==> false
30:LVR:POS:0:triangle.Triangle@classify:25:1 |==> 0
31:LVR:POS:NEG:triangle.Triangle@classify:25:1 |==> -1
32:AOR:+(int,int):%(int,int):triangle.Triangle@classify:25:trian + 1 |==> trian % 1
33:AOR:+(int,int):*(int,int):triangle.Triangle@classify:25:trian + 1 |==> trian * 1
34:AOR:+(int,int):-(int,int):triangle.Triangle@classify:25:trian + 1 |==> trian - 1
35:AOR:+(int,int):/(int,int):triangle.Triangle@classify:25:trian + 1 |==> trian / 1
36:STD:<ASSIGN>:<NO-OP>:triangle.Triangle@classify:25:trian = trian + 1 |==> <NO-OP>
37:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:27:a == c |==> a <= c
38:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:27:a == c |==> a >= c
39:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:27:a == c |==> false
40:LVR:POS:0:triangle.Triangle@classify:28:2 |==> 0
41:LVR:POS:NEG:triangle.Triangle@classify:28:2 |==> -2
42:AOR:+(int,int):%(int,int):triangle.Triangle@classify:28:trian + 2 |==> trian % 2
43:AOR:+(int,int):*(int,int):triangle.Triangle@classify:28:trian + 2 |==> trian * 2
44:AOR:+(int,int):-(int,int):triangle.Triangle@classify:28:trian + 2 |==> trian - 2
45:AOR:+(int,int):/(int,int):triangle.Triangle@classify:28:trian + 2 |==> trian / 2
46:STD:<ASSIGN>:<NO-OP>:triangle.Triangle@classify:28:trian = trian + 2 |==> <NO-OP>
47:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:30:b == c |==> b <= c
48:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:30:b == c |==> b >= c
49:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:30:b == c |==> false
50:LVR:POS:0:triangle.Triangle@classify:31:3 |==> 0
51:LVR:POS:NEG:triangle.Triangle@classify:31:3 |==> -3
52:AOR:+(int,int):%(int,int):triangle.Triangle@classify:31:trian + 3 |==> trian % 3
53:AOR:+(int,int):*(int,int):triangle.Triangle@classify:31:trian + 3 |==> trian * 3
54:AOR:+(int,int):-(int,int):triangle.Triangle@classify:31:trian + 3 |==> trian - 3
55:AOR:+(int,int):/(int,int):triangle.Triangle@classify:31:trian + 3 |==> trian / 3
56:STD:<ASSIGN>:<NO-OP>:triangle.Triangle@classify:31:trian = trian + 3 |==> <NO-OP>
57:LVR:0:POS:triangle.Triangle@classify:33:0 |==> 1
58:LVR:0:NEG:triangle.Triangle@classify:33:0 |==> -1
59:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:33:trian == 0 |==> trian <= 0
60:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:33:trian == 0 |==> trian >= 0
61:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:33:trian == 0 |==> false
62:AOR:+(int,int):%(int,int):triangle.Triangle@classify:34:a + b |==> a % b
63:AOR:+(int,int):*(int,int):triangle.Triangle@classify:34:a + b |==> a * b
64:AOR:+(int,int):-(int,int):triangle.Triangle@classify:34:a + b |==> a - b
65:AOR:+(int,int):/(int,int):triangle.Triangle@classify:34:a + b |==> a / b
66:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:34:a + b <= c |==> a + b < c
67:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:34:a + b <= c |==> a + b == c
68:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:34:a + b <= c |==> true
69:AOR:+(int,int):%(int,int):triangle.Triangle@classify:34:a + c |==> a % c
70:AOR:+(int,int):*(int,int):triangle.Triangle@classify:34:a + c |==> a * c
71:AOR:+(int,int):-(int,int):triangle.Triangle@classify:34:a + c |==> a - c
72:AOR:+(int,int):/(int,int):triangle.Triangle@classify:34:a + c |==> a / c
73:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:34:a + c <= b |==> a + c < b
74:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:34:a + c <= b |==> a + c == b
75:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:34:a + c <= b |==> true
76:COR:||(boolean,boolean):!=(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b |==> a + b <= c != a + c <= b
77:COR:||(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b |==> a + b <= c
78:COR:||(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b |==> a + c <= b
79:COR:||(boolean,boolean):TRUE(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b |==> true
80:AOR:+(int,int):%(int,int):triangle.Triangle@classify:34:b + c |==> b % c
81:AOR:+(int,int):*(int,int):triangle.Triangle@classify:34:b + c |==> b * c
82:AOR:+(int,int):-(int,int):triangle.Triangle@classify:34:b + c |==> b - c
83:AOR:+(int,int):/(int,int):triangle.Triangle@classify:34:b + c |==> b / c
84:ROR:<=(int,int):<(int,int):triangle.Triangle@classify:34:b + c <= a |==> b + c < a
85:ROR:<=(int,int):==(int,int):triangle.Triangle@classify:34:b + c <= a |==> b + c == a
86:ROR:<=(int,int):TRUE(int,int):triangle.Triangle@classify:34:b + c <= a |==> true
87:COR:||(boolean,boolean):!=(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b || b + c <= a |==> (a + b <= c || a + c <= b) != b + c <= a
88:COR:||(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b || b + c <= a |==> a + b <= c || a + c <= b
89:COR:||(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b || b + c <= a |==> b + c <= a
90:COR:||(boolean,boolean):TRUE(boolean,boolean):triangle.Triangle@classify:34:a + b <= c || a + c <= b || b + c <= a |==> true
91:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:35:return Type.INVALID; |==> return null;
92:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:37:return Type.SCALENE; |==> return null;
93:LVR:POS:0:triangle.Triangle@classify:40:3 |==> 0
94:LVR:POS:NEG:triangle.Triangle@classify:40:3 |==> -3
95:ROR:>(int,int):!=(int,int):triangle.Triangle@classify:40:trian > 3 |==> trian != 3
96:ROR:>(int,int):>=(int,int):triangle.Triangle@classify:40:trian > 3 |==> trian >= 3
97:ROR:>(int,int):FALSE(int,int):triangle.Triangle@classify:40:trian > 3 |==> false
98:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:41:return Type.EQUILATERAL; |==> return null;
99:LVR:POS:0:triangle.Triangle@classify:43:1 |==> 0
100:LVR:POS:NEG:triangle.Triangle@classify:43:1 |==> -1
101:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:43:trian == 1 |==> trian <= 1
102:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:43:trian == 1 |==> trian >= 1
103:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:43:trian == 1 |==> false
104:AOR:+(int,int):%(int,int):triangle.Triangle@classify:43:a + b |==> a % b
105:AOR:+(int,int):*(int,int):triangle.Triangle@classify:43:a + b |==> a * b
106:AOR:+(int,int):-(int,int):triangle.Triangle@classify:43:a + b |==> a - b
107:AOR:+(int,int):/(int,int):triangle.Triangle@classify:43:a + b |==> a / b
108:ROR:>(int,int):!=(int,int):triangle.Triangle@classify:43:a + b > c |==> a + b != c
109:ROR:>(int,int):>=(int,int):triangle.Triangle@classify:43:a + b > c |==> a + b >= c
110:ROR:>(int,int):FALSE(int,int):triangle.Triangle@classify:43:a + b > c |==> false
111:COR:&&(boolean,boolean):==(boolean,boolean):triangle.Triangle@classify:43:trian == 1 && a + b > c |==> trian == 1 == a + b > c
112:COR:&&(boolean,boolean):FALSE(boolean,boolean):triangle.Triangle@classify:43:trian == 1 && a + b > c |==> false
113:COR:&&(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:43:trian == 1 && a + b > c |==> trian == 1
114:COR:&&(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:43:trian == 1 && a + b > c |==> a + b > c
115:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:44:return Type.ISOSCELES; |==> return null;
116:LVR:POS:0:triangle.Triangle@classify:45:2 |==> 0
117:LVR:POS:NEG:triangle.Triangle@classify:45:2 |==> -2
118:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:45:trian == 2 |==> trian <= 2
119:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:45:trian == 2 |==> trian >= 2
120:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:45:trian == 2 |==> false
121:AOR:+(int,int):%(int,int):triangle.Triangle@classify:45:a + c |==> a % c
122:AOR:+(int,int):*(int,int):triangle.Triangle@classify:45:a + c |==> a * c
123:AOR:+(int,int):-(int,int):triangle.Triangle@classify:45:a + c |==> a - c
124:AOR:+(int,int):/(int,int):triangle.Triangle@classify:45:a + c |==> a / c
125:ROR:>(int,int):!=(int,int):triangle.Triangle@classify:45:a + c > b |==> a + c != b
126:ROR:>(int,int):>=(int,int):triangle.Triangle@classify:45:a + c > b |==> a + c >= b
127:ROR:>(int,int):FALSE(int,int):triangle.Triangle@classify:45:a + c > b |==> false
128:COR:&&(boolean,boolean):==(boolean,boolean):triangle.Triangle@classify:45:trian == 2 && a + c > b |==> trian == 2 == a + c > b
129:COR:&&(boolean,boolean):FALSE(boolean,boolean):triangle.Triangle@classify:45:trian == 2 && a + c > b |==> false
130:COR:&&(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:45:trian == 2 && a + c > b |==> trian == 2
131:COR:&&(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:45:trian == 2 && a + c > b |==> a + c > b
132:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:46:return Type.ISOSCELES; |==> return null;
133:LVR:POS:0:triangle.Triangle@classify:47:3 |==> 0
134:LVR:POS:NEG:triangle.Triangle@classify:47:3 |==> -3
135:ROR:==(int,int):<=(int,int):triangle.Triangle@classify:47:trian == 3 |==> trian <= 3
136:ROR:==(int,int):>=(int,int):triangle.Triangle@classify:47:trian == 3 |==> trian >= 3
137:ROR:==(int,int):FALSE(int,int):triangle.Triangle@classify:47:trian == 3 |==> false
138:AOR:+(int,int):%(int,int):triangle.Triangle@classify:47:b + c |==> b % c
139:AOR:+(int,int):*(int,int):triangle.Triangle@classify:47:b + c |==> b * c
140:AOR:+(int,int):-(int,int):triangle.Triangle@classify:47:b + c |==> b - c
141:AOR:+(int,int):/(int,int):triangle.Triangle@classify:47:b + c |==> b / c
142:ROR:>(int,int):!=(int,int):triangle.Triangle@classify:47:b + c > a |==> b + c != a
143:ROR:>(int,int):>=(int,int):triangle.Triangle@classify:47:b + c > a |==> b + c >= a
144:ROR:>(int,int):FALSE(int,int):triangle.Triangle@classify:47:b + c > a |==> false
145:COR:&&(boolean,boolean):==(boolean,boolean):triangle.Triangle@classify:47:trian == 3 && b + c > a |==> trian == 3 == b + c > a
146:COR:&&(boolean,boolean):FALSE(boolean,boolean):triangle.Triangle@classify:47:trian == 3 && b + c > a |==> false
147:COR:&&(boolean,boolean):LHS(boolean,boolean):triangle.Triangle@classify:47:trian == 3 && b + c > a |==> trian == 3
148:COR:&&(boolean,boolean):RHS(boolean,boolean):triangle.Triangle@classify:47:trian == 3 && b + c > a |==> b + c > a
149:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:48:return Type.ISOSCELES; |==> return null;
150:STD:<CALL>:<NO-OP>:triangle.Triangle@classify:50:return Type.INVALID; |==> return null;`

function parse(str) {
	let parsedArray = [];
	for (let line of str.split('\n')) {
		let lineArr = line.split(':');
		console.log(lineArr);
		console.log(lineArr[6])
		let codeChange = lineArr[6].split(" |==> ");
		parsedArray.push({
			'id' : lineArr[0],
			'type' : lineArr[1],
			'fromDef' : lineArr[2],
			'toDef' : lineArr[3],
			'line' : lineArr[4] + ":" + lineArr[5],
			'from' : codeChange[0],
			'to' : codeChange[1]
		});

	}
	console.log(parsedArray)
}

parse(input);