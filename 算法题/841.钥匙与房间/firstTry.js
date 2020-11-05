var roomF = function(rooms) {
	let roomList = {};
	let openRoomList = new Set();
	openRoomList.add(0);
	for( let i = 0, len = rooms.length; i < len; i++) {
		roomList[i] = {
			state: false,
			content: rooms[i]
		}
	}
	let keys =  new Set(rooms[0]);
	keys.add(0);
	let keysLenth = rooms[0].length;
	let openRoom = function(KEYS) {
		let nextKeys = [];
		for(let key of KEYS) {
			if(!roomList[key].state) {
				roomList[key].state = true;
				openRoomList.add(key);
				let l1 = keys.size;
				roomList[key].content.map((x)=>{
					keys.add(x);
					if(keys.size > l1) {
						nextKeys.push(x)	
					}					
				});
			}
		}
		if(nextKeys.length>0) {
			openRoom(nextKeys);
		}
	}
	openRoom(rooms[0]);
	if(openRoomList.size == rooms.length) {
		return true;
	}else{
		return false;
	}
}

roomF([[1],[2],[3],[]]);
roomF([[1,3],[3,0,1],[2],[0]]);
roomF([[1,3],[2,0,1],[2],[0]]);