format:
	@prettier --single-quote --trailing-comma es5 --write "**/*.js"

serve:
	@python2 -m SimpleHTTPServer

list-files:
	@find src -type f -name "*.js" -o -name "*.css" | jq -R '[inputs | select(length>0)]'
