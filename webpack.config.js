module.exports = { 
	entry:"./main.jsx",
	output:{
		filename:"./dist/bundle.js"
	},
	module:{
		loaders:[
			{
				exclude:'/(node_modules)/',
				loader:['babel-loader'],
				query:{
					presets:['react','es2015']
				}
			},
		]
	}
};