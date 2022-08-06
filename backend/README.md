# my-stock backend

## Environment
* Python 3.9
* [Poetry](https://python-poetry.org/)
* [pytest](https://docs.pytest.org/) (It was added when [the Poetry project was initialized](https://github.com/ony3000/my-stock/commit/3b3f718), but it seems that [Django's built-in tests](https://docs.djangoproject.com/en/3.2/topics/testing/) will be used instead.)
* [Django](https://www.djangoproject.com/)
* [Black](https://black.readthedocs.io/en/stable/)
* [Docker](https://www.docker.com/)
* [PostgreSQL](https://www.postgresql.org/)

### How to test a code
After virtualenv is activated:
```shell
(.venv) $ pytest
```
Or using `poetry run`:
```shell
$ poetry run pytest
```

### How to apply code style
After virtualenv is activated:
```shell
(.venv) $ black .
```
Or using `poetry run`:
```shell
$ poetry run black .
```

### How to export the lock file
```shell
$ poetry export -f requirements.txt --output requirements.txt
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
