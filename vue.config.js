module.exports = {
	publicPath: '/',
	transpileDependencies: ["vuetify"],
	configureWebpack: {
		entry: ["babel-polyfill", "./src/main.js"],
	}
}