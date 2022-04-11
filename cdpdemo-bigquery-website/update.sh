#!/bin/bash
ng build
sudo rm -rf /var/www/html
sudo mkdir /var/www/html
sudo cp -r $HOME/cdpdemo-bigquery-website/cdpdemo-bigquery-website/dist/cdpdemo-bigquery-website/. /var/www/html