.PHONY: server
server:
	browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: css
	mkdir -p bundle
	postcss --watch --use autoprefixer --use postcss-import css.app.css --output bundle/app.css

.PHONY: clean
	rm -r bundle