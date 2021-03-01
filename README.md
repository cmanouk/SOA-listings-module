# Project Name

Thanos'Gauntlet: Trulia Replica:
a replica of a listing on Trulia with a particular focus on front-end functionality.

## Related Projects

  - https://github.com/thanosgauntletfec/jpanay-fec-service
  - https://github.com/thanosgauntletfec/jsullins-fec-service
  - https://github.com/thanosgauntletfec/mattc-fec-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

Run the following scripts to execute associated commands
"mysql -u root < server/schema.sql": run this command from the root directory to create the database/tables needed

"npm run db: seed": seed the database

"npm run build": runs webpack in development with watch flag

"npm run server": automatically restart server upon saving of new information


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

> Some development information

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

