module.exports.client = {
    assets: {
        files: [
            './app/client/**/*.html',
            './app/client/*/assets/*'
        ],
        dest: './build/client/'
    },
    vendors: [
        {
            base: undefined,
            files: [
                './node_modules/systemjs/dist/system.js',
                './node_modules/systemjs/dist/system.src.js',
                './node_modules/systemjs/dist/system.js.map'
            ],
            dest: './build/client/'
        }
    ],
    ts: {
        files: [
            './app/shared/**/*.ts',
            './app/client/**/*.ts'
        ],
        dest: './build/'
    },
    sass: {
        base: './app/',
        files: [
            './app/client/**/*.scss'
        ],
        dest: './build/'
    }
};

module.exports.server = {
    ts: {
        files: [
            './nodes_modules/es6-promise/dist/es6-promise.js',
            './nodes_modules/es6-shim/es6-shim.js',
            './nodes_modules/reflect-metadata/Reflect.ts',
            './app/shared/**/*.ts',
            './app/server/**/*.ts'
        ],
        dest: './build/'
    }
};