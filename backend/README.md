# my-stock backend

## Environment
* Python 3.9
* [Poetry](https://python-poetry.org/)
* [Django](https://www.djangoproject.com/)
* [Black](https://black.readthedocs.io/en/stable/)
* [Docker](https://www.docker.com/)
* [PostgreSQL](https://www.postgresql.org/)

### How to apply code style
After virtualenv is activated:
```shell
(.venv) $ black .
```

### How to create and start containers
```shell
$ docker-compose up [--build] -d
```

### How to run a one-off command
```shell
$ docker-compose run [--rm] SERVICE_NAME COMMAND
```

### PostgreSQL notes
* [Optimizing PostgreSQL's configuration](https://docs.djangoproject.com/en/3.2/ref/databases/#optimizing-postgresql-s-configuration): Edit `postgresql.conf` in docker volume.
