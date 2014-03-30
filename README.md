
# grunt-traceur-simple

Grunt task that uses the Google Traceur compiler
to transpile source files from [ECMAScript 6](https://code.google.com/p/traceur-compiler/wiki/LanguageFeatures)
to ECMAScript 5 syntax. It supports the passing of arbitrary Traceur
options and the use of either the dependent Traceur version or an
arbitrary peer-installed Traceur version.

The independence of the Traceur internals (which options are supported)
and the independence of the Traceur version is _the_ killer feature of this
Grunt plugin -- in contrast to similar Grunt Traceur integration plugins.

<p/>
<img src="https://nodei.co/npm/grunt-traceur-simple.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/grunt-traceur-simple.png" alt=""/>

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/)
before, be sure to check out the [Getting
Started](http://gruntjs.com/getting-started) guide, as it explains how
to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process,
you may install this plugin with this command:

```shell
npm install grunt-traceur-simple --save-dev
```

Once the plugin has been installed, it may be enabled inside your
Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks("grunt-traceur-simple");
```

### Options

- `traceurRuntime`:
  The path to the `traceur-runtime.js` file of Traceur. It can be
  usually found in the path `bin/traceur-runtime.js` of
  a Traceur distribution. The default is the path to the
  `traceur-runtime.js` file of the dependent `traceur` module. Use
  `path.resolve(path.join(__dirname, "node_modules/traceur/bin/traceur-runtime.js"))` if you
  want to use a peer-installed Traceur.

- `traceurCommand`:
  Either the path to the `traceur` executable of a Traceur installation
  or distribution or the path to the `src/node/command.js`
  file of a Traceur distribution. The default is the path to
  the `command.js` file of the dependent `traceur` module. Use
  `path.resolve(path.join(__dirname, "node_modules/traceur/src/node/command.js"))` if you want
  to use a peer-installed Traceur.

- `traceurOptions`:
  The additional command-line options passed to the `traceur`
  executable. Usually used to enable or disable certain transpiling
  options. The default is `""`. Use, e.g., `--experimental
  --source-maps` for enabling all experimental transpiling features and
  generate a source-map file.

- `includeRuntime`:
  Set to `true` for including the Traceur runtime (see `traceurRuntime`
  for the path) into the generated output file. Alternatively install
  the Twitter Bower component `traceur-runtime` with `bower install
  traceur-runtime` and load its `traceur-runtime.js` yourself in the
  application. Dependending of the used ECMAScript 6 funtionality
  in the code, this runtime is needed or not.

## Task Calling

_Run this task with the `grunt traceur` command._

Task targets, files and options may be specified according to the Grunt
[Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

## Usage Example

Assuming we have the following build environment:

- `Gruntfile.js`:

```js
// [...]
grunt.initConfig({
    traceur: {
        options: {
            includeRuntime: true,
            traceurOptions: "--experimental --source-maps"
        },
        "app": {
            files: {
                "out/app.js": [ "src/**/*.js" ]
            }
        }
    }
});
grunt.registerTask("default", [ "traceur" ]);
// [...]
```

Then running `grunt traceur` is functionality-wise somewhat equivalent
to running `traceur --experimental --source-maps --out out/app.js src/*.js`.

