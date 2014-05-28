(function(f) {
	var onload = function(f) {
		window.addEventListener('DOMContentLoaded', f, false);
	};
	onload(function(){
		window.addEventListener('resize',f, false)
		BlogController()
	})
})


/*******************************************/
// CONTROLLER
/********************************************/

BlogController = function () {
	var blog = new BlogView()
	blog.getcurrentWinWidth()
	blog.updateSetWinWidth()
	var posts = blog.fetchRecentPosts()
	var child_nodes = blog.fetchChildNodes()
	blog.setPostsRelative(posts)
	blog.positionPosts(child_nodes)

}


/*******************************************/
//  VIEW
/********************************************/

var BlogView = function() {
	this.setwinwidth = undefined
	this.currentwinWidth = undefined
	this.posts = undefined
	this.child_nodes = undefined

}

BlogView.prototype = {

	getcurrentWinWidth: function(){
	this.currentwinWidth = window.innerWidth
	},

	updateSetWinWidth: function () {
		if ( (this.setwinwidth !== undefined ) &&
		( (this.setwinwidth === 680  && this.currentwinWidth < 680) ||
			(this.setwinwidth === 780 && this.currentwinWidth < 780) ||
			(this.setwinwidth === 10000 && this.currentwinWidth >= 780)
			)
		)
		{
			return;
		}
		else {
			window.__post_grid_width = this.setwinwidth = 
				this.currentwinWidth > 780 ? 10000 :
				this.currentwinWidth > 680 ? 780 :
																			680;
		}
	},

	fetchRecentPosts: function () {
		this.posts = document.getElementById('recent-posts');
		return this.posts
	},

	fetchChildNodes: function() {
		this.child_nodes = this.posts.childNodes
		return this.child_nodes
	},

	setPostsRelative: function (posts) {
		if (window.__post_grid_width <= 680) { 
			posts.style.position = null
		}
		else {
			posts.style.position = 'relative'
		}
	},

		positionPosts: function(child_nodes) {
			var child, node, col_width, col0_y_position, col1_x_position, col1_y_position, origin = {x:0, y:0}, node_count = 0, max_y_of_first_row
			for (child in child_nodes) {
				node = child_nodes[child];
				if (checkIfNode(node)) {
					if (checkifBreaker(node)) {
						if (oneColumnOnly) {
							node.style.height = null;
						}	else {
								node.style.height = (Math.max(col1_y_position, col0_y_position) - max_y_of_first_row) + 'px'
						}
						break
					}			
					if (firstPostColumn0(col0_y_position)) {
						origin.x = node.offsetLeft;
						origin.y = node.offsetTop;
						col_width = node.clientWidth;
						col0_y_position = origin.y + node.clientHeight;
						max_y_of_first_row = col0_y_position;
						} else {
						if (firstPostColumn1(col1_y_position)) {
							col1_y_position = origin.y + node.clientHeight
							col1_x_position = origin.x + node.clientWidth;
							if (col1_y_position > max_y_of_first_row) {
								max_y_of_first_row = col1_y_position;
							}
						} else {
							if (oneColumnOnly()) {
								formatPostOneColumn(node)
							} else {
								node.style.position = 'absolute'
								node.style.width = col_width + 'px'
								if (firstColumn(node_count)) {
									node.style.left = origin.x + 'px'
									node.style.top = col0_y_position + 'px'
									col0_y_position += node.clientHeight
								}	else {
									node.style.left = col1_x_position + 'px'
									node.style.top = col1_y_position + 'px'
									col1_y_position += node.clientHeight;
								}
							}
						}	
					}	
				++node_count;
				}
			}

		}
	// }

}

var checkIfNode = function(node) {
	return node.nodeType === Node.ELEMENT_NODE
}

var checkifBreaker = function(node) {
	return node.className === 'breaker'
}

var oneColumnOnly = function () {
	return window.__post_grid_width <= 680
}

var setNodeHeightNull = function (node) {
	node.style.height = null;
} 

// var setBreakerDivHeightMatch = function(node) {
// 	node.style.height = (Math.max(col1_y_position, col0_y_position) - max_y_of_first_row) + 'px'
// }

var firstPostColumn0 = function (col0_y_position) {
	return col0_y_position === undefined
}

// var setPositionFirstPost = function(node) {
// 	debugger
// 	origin.x = node.offsetLeft;
// 	origin.y = node.offsetTop;
// 	col_width = node.clientWidth;
// 	col0_y_position = origin.y + node.clientHeight;
// 	max_y_of_first_row = col0_y_position;
// 	debugger
// }

var firstPostColumn1 = function (col1_y_position) {
	return col1_y_position === undefined
}


// var setPositionSecondPost = function(node) {
// 	col1_y_position = origin.y + node.clientHeight
// 	col1_x_position = origin.x + node.clientWidth;
// 	if (col1_y_position > max_y_of_first_row) {
// 		max_y_of_first_row = col1_y_position;
// 	}
// 	debugger
// }

var formatPostOneColumn = function(node) {
	  node.style.position = null;
    node.style.width = null;
    node.style.left = null;
    node.style.top = null;
}

var positionPostUnderAbovePost = function(post, node_count) {

}

var firstColumn = function (node_count) {
	return (node_count % 2) === 0
}


