const migrations = [
  { version: '1.0.0', migration: noop => noop },
  { version: '1', migration: noop => noop },
  { version: '2', migration: protocol => ({
    ...protocol,
    schemaVersion: 2,
    melvilleFactor: 5,
  })},
];

module.exports = migrations;
