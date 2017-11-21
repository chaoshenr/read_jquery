var LinkedList = function() {
	var length = 0;
	var head = null;
	var Node = function (element) {
		this.element = element;
		this.next = null;
	}
	this.append = function (element) {
		var node = new Node(element),
			current;
		// 链表为空时，head指向新元素
		if (head === null) {
			head = node;
		} else {
			current = head;
			// 遍历链表直到next为空，即获取到最后一个元素
			while(current.next !== null ){
				current = current.next
			}
			// 将最后一个元素的next属性指向新元素
			current.next = node;
		}
		length ++;
	};

	this.removeAt = function (position) {
		// 跳过异常情况
		if (position > -1 && position < length) {
			var current = head;
			var previous = null;
			var index = 0;
			if (position === 0) {
				head = current.next;
			} else {
				while (index < position) {
					previous = current;
					current = current.next;
					index ++;
				}
				previous.next = current.next;
			}
			length --;

			return current.element;
		}
		console.error("not found the position:",position);
		return null;
	};

	this.head = function () {
		return head;
	}
}
