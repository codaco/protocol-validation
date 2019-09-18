const SourceVersionNotFoundError = new Error('Source protocol version not found');
const TargetVersionNotFoundError = new Error('Target protocol version not found');
const MigrationNotPossibleError = new Error('Migration to this version is not possible');
const VersionOutmatchError = new Error('Source outmatches target version not found');

module.exports = {
  SourceVersionNotFoundError,
  TargetVersionNotFoundError,
  VersionOutmatchError,
  MigrationNotPossibleError,
};
