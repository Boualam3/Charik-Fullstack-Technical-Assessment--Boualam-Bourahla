# Quick Start Guide

## Prerequisites

Ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/get-started) (for running the app in a containerized environment)
- [Docker Compose](https://docs.docker.com/compose/install/) (for managing multi-container Docker applications)

```bash
docker --version
```

example output :`Docker version 24.0.7, .....`

```bash
docker-compose --version
```

example output :`docker-compose version 1.29.2 .....`

## Running the Application

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone  git@github.com:Boualam3/

#go into it
cd HomeEaseAPI/
```

Second, you have to Add HubSpot Token of private app to .env file in backend folder :

```bash
HUBSPOT_TOKEN = <add-your-app-token-here>
ALLOWED_HOST = 0.0.0.0
CORS_ALLOWED_ORIGINS = http://0.0.0.0 http://localhost

```

### 2. Build and Run the Docker Container

To build the Docker containers, use Docker Compose. This command will build the image based on given docker-compose file which is docker-compose-dev.yml :

```bash
docker-compose -f docker-compose-dev.yml build
```

#### Run the image following :

note : to run the image in background you have to specify dettached mode by add -d

```bash
#live logging mode
docker-compose -f docker-compose-dev.yml up

#in the background
docker-compose -f docker-compose-dev.yml up -d
```

### 3. Stopping the Application

To stop the running Docker containers hit Ctrl+C :
note : if you are running it on background use :

```bash
docker-compose down
```

### 4. Creating a Superuser

To create a superuser for accessing the Django admin interface:

```bash
docker-compose run backend python manage.py createsuperuser
```

### 5 View logs

To view logs from your running containers, use:

```bash
#gunicorn logs
docker-compose logs backend
#nginx logs
docker-compose logs nginx
```
