const path = require('path');

export default (databaseName: string): string => {
    const envs = require(path.resolve(`./tablerise.environment.js`));
    const MONGODB_USERNAME = envs.database_username as string;
    const MONGODB_PASSWORD = envs.database_password as string;
    const MONGODB_HOST = envs.database_host as string;
    const MONGODB_DATABASE = `${databaseName}${envs.database_database as string}`;
    const MONGODB_CONNECTION_INITIAL = envs.database_initialString as string;

    const firstSection = `${MONGODB_CONNECTION_INITIAL}://${MONGODB_USERNAME}:${MONGODB_PASSWORD}`;
    const secondSection = `@${MONGODB_HOST}/${MONGODB_DATABASE}`;

    return `${firstSection}${secondSection}`;
};
