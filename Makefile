install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/bran-even.js

brain-calc:
	node bin/bran-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js


