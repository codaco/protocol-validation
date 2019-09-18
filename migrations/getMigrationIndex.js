const migrations = require('./migrations');

const matchVersion = targetVersion =>
  ({ version }) =>
    version === targetVersion;

const getMigrationIndex = (version) => {
  const migrationIndex = migrations.findIndex(matchVersion(version));

  if (migrationIndex === -1) {
    return null;
  }

  return migrationIndex;
}

module.exports = getMigrationIndex;
