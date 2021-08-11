.PHONY: all install dev generate start

# ################################################
# Development ####################################
# ################################################

install: # Install all dependencies
	npm ci

dev: # Start Nuxt for local development
	npm run dev

generate: # Build static site
	npm run generate

start: # Serve static files
	npm run start
