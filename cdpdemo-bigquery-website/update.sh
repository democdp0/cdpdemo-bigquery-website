#!/bin/bash
ng build
sudo cp -r $HOME/cdpdemo-bigquery-website/cdpdemo-bigquery-website/dist/cdpdemo-bigquery-website/. /var/www/html