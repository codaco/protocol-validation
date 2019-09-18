const migrations = require('./migrations');

const assess = {
  canUpgrade: (sourceSchemaVersion, targetSchemaVersion) => {
    try {
      getMigrationPath(sourceSchemaVersion, targetSchemaVersion);
    } catch (e) {
      return false;
    }

    return true;
  },
};

module.exports = assess;
