export interface MongooseEnvs {
    db_username: string;
    db_password: string;
    db_host: string;
    db_database: string;
    db_initialString: string;
}

export interface RedisEnvs {
    redis_host: string;
    redis_port: string;
    redis_password: string;
}
