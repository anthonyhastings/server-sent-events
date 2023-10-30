#!/usr/bin/env bash

sleep 10
echo -e "Updating order order_v1mW3aplThhaaomHyLrPU to DELIVERED"

curl --location --request PATCH 'http://localhost:3000/orders/order_v1mW3aplThhaaomHyLrPU' \
--header 'Content-Type: application/json' \
--data '{
    "status": "DELIVERED"
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current order to order_2dVHSgjEltuWRWXAbL16S\n'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentOrderId": "order_2dVHSgjEltuWRWXAbL16S"
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.649853, -5.712676'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.649853,
      "lng": -5.712676
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.649905, -5.713566'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.649905,
      "lng": -5.713566
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.649178, -5.713832'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.649178,
      "lng": -5.713832
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.648009, -5.713489'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.648009,
      "lng": -5.713489
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.647763, -5.711913'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.647763,
      "lng": -5.711913
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.649050, -5.709315'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.649050,
      "lng": -5.709315
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.650405, -5.706656'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.650405,
      "lng": -5.706656
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.651168, -5.705208'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.651168,
      "lng": -5.705208
  }
}'

echo -e "\n---\n"
sleep 10
echo 'Updating route current location to 54.651227, -5.705712'

curl --location --request PATCH 'http://localhost:3000/routes/route_TZJBdCAk0bP9OYHKpORG1' \
--header 'Content-Type: application/json' \
--data '{
  "currentLatLng": {
      "lat": 54.651227,
      "lng": -5.705712
  }
}'

echo -e "\n---\n"
sleep 10
echo -e "Updating order order_2dVHSgjEltuWRWXAbL16S to DELIVERED"

curl --location --request PATCH 'http://localhost:3000/orders/order_2dVHSgjEltuWRWXAbL16S' \
--header 'Content-Type: application/json' \
--data '{
    "status": "DELIVERED"
}'
