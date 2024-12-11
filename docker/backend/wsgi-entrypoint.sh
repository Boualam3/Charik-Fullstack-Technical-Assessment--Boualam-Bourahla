#!/bin/sh

# Navigate to the Django app directory
echo "Waiting for the backend directory..."
until cd /app/backend/; do
	echo "Waiting for the backend directory to be ready..."
	sleep 2
done

# wait for the database to be ready
echo "migrating database..."
until ./manage.py migrate; do
	echo "Waiting for the DB to be ready..."
	sleep 2
done

# collect static files
echo "Collecting static files..."
./manage.py collectstatic --noinput

# start Gunicorn with 2 workers and 3 threads
echo "Starting Gunicorn..."
gunicorn HubspotApiIntegration.wsgi:application --bind 0.0.0.0:8000 --workers 2 --threads 3
