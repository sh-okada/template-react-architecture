#!/bin/sh

sleep 5

mc alias set myminio http://localhost:9000 ${MINIO_ROOT_USER} ${MINIO_ROOT_PASSWORD}
mc mb myminio/${BUCKET}

mc anonymous set public myminio/${BUCKET}

mc admin user svcacct add --access-key ${ACCESS_KEY} --secret-key ${SECRET_KEY} myminio ${MINIO_ROOT_USER}
