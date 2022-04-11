#!/bin/bash
ng build
sudo rm -rf /usr/share/nginx/html
sudo mkdir /usr/share/nginx/html
sudo cp -r $HOME/cdpdemo-bigquery-website/cdpdemo-bigquery-website/dist/cdpdemo-bigquery-website/. /usr/share/nginx/html