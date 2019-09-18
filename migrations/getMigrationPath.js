const migrations = require('./migrations');
const errors = require('./errors');
const getMigrationIndex = require('./getMigrationIndex');

const isMigrationPathValid = path =>
  !path.some(({ migration }) => !migration);

const getMigrationPath = (sourceSchemaVersion, targetSchemaVersion) => {
  const sourceMigrationIndex = getMigrationIndex(sourceSchemaVersion);
  const targetMigrationIndex = getMigrationIndex(targetSchemaVersion);

  if (!sourceMigrationIndex) { throw errors.SourceVersionNotFoundError; }
  if (!targetMigrationIndex) { throw errors.TargetVersionNotFoundError; }
  if (sourceMigrationIndex <= targetMigrationIndex) {
    throw errors.VersionOutmatchError;
  }

  // Get migration steps between versions
  const migrationPath = migrations.slice(sourceMigrationIndex + 1, targetMigrationIndex + 1);

  if (!isMigrationPathValid(migrationPath)) {
    throw errors.MigrationNotPossibleError;
  }

  return migrationPath;
};

module.exports = getMigrationPath;
