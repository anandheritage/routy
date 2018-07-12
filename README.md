# Routy

Chrome Extension to compose micro-service call path.

Routy allows Dev / QA teams to change the versions of services dynamically in a service's callpath.

Routy inspects outgoing HTTP calls based on the regex pattern specified in the preferences. Headers indicating the version of service selected are injected into the outgoing HTTP request.

Versions for different services are deployed using kubernetes and Jenkins pipelines. Istio enables dynamic routing based on the HTTP headers injected by Routy.

The screenshot below is from a demo marketplace application with 7 services [Istio Marketplace Demo](https://github.com/hemanthmalla/istio-marketplace-demo)

![Routy](/images/routy_screenshot.png "Routy Screens")