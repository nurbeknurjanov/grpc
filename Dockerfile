FROM envoyproxy/envoy-dev:latest

COPY ./envoy.yaml /etc/envoy/envoy.yaml


CMD /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log


#envoy -c envoy.yaml -l trace --log-path /tmp/envoy_info.log

#docker build -t envoy_image .
#docker run -d -p 5000:5000 -p 5001:5001 --network=host --name envoy_container envoy_image