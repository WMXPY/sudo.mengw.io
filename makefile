main: serve

serve:
	@echo "[INFO] Serving"
	@start "http://localhost:4000/"
	@bundler exec jekyll serve
