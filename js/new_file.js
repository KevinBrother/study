function getParentId(node, id) {
	for(var i = 0; i < node.length; i++) {
		if(node[i].parentId == id) {
			if(node[i].parentId != 0) {
				getParentId(node, node[i].parentId);
			} else {
				return node[i].id
			}
		}
	}
}


var arr = [{id:1, parentId: 0},
{id:2, parentId: 1},
{id:3, parentId: 2},
{id:4, parentId: 3},
{id:5, parentId: 4}
]
