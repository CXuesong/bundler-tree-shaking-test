vite build -c vite.config.ts
js-beautify -f ./dist/dist-vite.js -r

webpack --config webpack.config.js
js-beautify -f ./dist/dist-webpack.js -r

esbuild ./src/main.ts --bundle --minify --outfile=./dist/dist-esbuild.js --target=es2022 --format=iife
js-beautify -f ./dist/dist-esbuild.js -r

rollup --config rollup.config.js
js-beautify -f ./dist/dist-rollup.js -r
