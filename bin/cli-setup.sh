NEVE_LOCATION=$1
WP_VERSION=$2
WP_ENV=$3
WP_CACHED_ENV="/var/www/html/wp-content/${WP_ENV}.sql"

if [ -f $WP_CACHED_ENV ]; then
    echo "Database exists."
    wp --allow-root db import  $WP_CACHED_ENV
		wp --allow-root cache flush
		wp --allow-root transient delete-all
    exit 0;
fi



wp  --allow-root core install --url=http://localhost:8080 --title=SandboxSite --admin_user=admin --admin_password=admin --admin_email=admin@admin.com
mkdir -p /var/www/html/wp-content/uploads
chmod 0777 -R /var/www/html/wp-content/
rm -rf /var/www/html/wp-content/plugins/akismet


#Setup core
wp --allow-root core update --version=$WP_VERSION
wp --allow-root core update-db

rm -rf  /var/www/html/wp-content/themes/*

echo "Installing Neve theme from $NEVE_LOCATION"
wp --allow-root theme install --activate $NEVE_LOCATION

bash /var/www/html/bin/envs/$WP_ENV/start.sh

wp --allow-root cache flush

wp --allow-root db export $WP_CACHED_ENV
