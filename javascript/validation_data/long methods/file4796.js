var t = function() {
    var done = this.async();

    function run(cmd, args, opts, callback) {
        assert.strictEqual(typeof cmd, 'string');
        assert.ok(args instanceof Array);
        if (typeof opts === 'function' && !callback) {
            callback = opts;
            opts = {};
        }
        assert.strictEqual(typeof opts, 'object');
        assert.strictEqual(typeof callback, 'function');
        grunt.log.writeln('> ' + cmd + ' ' + args.join(' '));
        spawn({
            cmd: cmd,
            args: args,
            opts: opts,
        }, function(error, result, code) {
            if (error) {
                grunt.log.error(error);
                done(false);
            } else {
                callback(result, code);
            }
        });
    }
    var pkg = grunt.config.data.pkg;
    var tgz = pkg.name + '-' + pkg.version + '.tgz';
    grunt.log.writeln('Packing ' + tgz + ' (this could take a while)...');
    run('npm', ['pack', '--verbose', '.'], function() {
        require('tmp').dir(function(err, dir) {
            if (err) {
                grunt.log.error(err);
                done(false);
                return;
            }
            run('cp', [tgz, dir], function() {
                run('npm', [
                    'install',
                    '--production',
                    tgz,
                ], {
                    cwd: dir
                }, function() {
                    var nodePath = path.join(dir, 'node_modules');
                    var pkgDir = path.join(nodePath, pkg.name);
                    var doneCount = 2;
                    run('bin/jsx', ['main.js'], {
                        cwd: pkgDir,
                    }, function(result) {
                        assert.ok(result.stdout.indexOf('transform') >= 0, result.stdout);
                        if (--doneCount === 0) {
                            done();
                        }
                    });
                    run('node', [
                        '--print',
                        'require(\'react-tools\').transform(' +
                        JSON.stringify(
                            ' <div>oyez</div>;'
                        ) + ')',
                    ], {
                        env: {
                            NODE_PATH: nodePath
                        },
                    }, function(result, code) {
                        assert.ok(result.stdout.indexOf(
                            'React.DOM.div(null, \'oyez\');'
                        ) >= 0, result.stdout);
                        if (--doneCount === 0) {
                            done();
                        }
                    });
                });
            });
        });
    });
}