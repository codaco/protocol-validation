const getMigrationPath = require('./getMigrationPath');

const migrateStep = (protocol, { version, migration }) => {
  try {
    return migration(protocol);
  } catch (e) {
    e.message = `Migration step failed: { version: ${JSON.stringify(version)} }`;
    throw e;
  }
};

const migrateProtocol = (protocol, targetSchemaVersion) => {
  // Get migration steps between versions
  const migrationPath = getMigrationPath(protocol.schemaVersion, targetSchemaVersion);

  // Perform migration
  const updatedProtocol = migrationPath.reduce(migrateStep, protocol);

  return {
    ...updatedProtocol,
    schemaVersion: targetSchemaVersion,
  };
};

module.exports = migrateProtocol;
