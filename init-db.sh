#!/bin/bash
set -e

# Create the database
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE DATABASE "image-generator";
EOSQL

# Connect to the newly created database and create the users table
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "image-generator" <<-EOSQL
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
    );
EOSQL
