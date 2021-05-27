module.exports = {
	"preset": "ts-jest",
	"testEnvironment": "node",
	"coverageDirectory": "tests/coverage",
	"transform": {
		"^.+\\.jsx?$": "babel-jest"
	},
	"transformIgnorePatterns": [
		"node_modules/(?!variables/.*)"
	]
};
