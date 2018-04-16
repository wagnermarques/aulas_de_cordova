#!/bin/bash
#If you build via the Wrapper, any existing Gradle distribution installed on the machine is ignored. 

echo "systemProp.http.proxyHost=192.168.0.2" > ./platforms/android/gradle-wrapper.properties
echo "systemProp.http.proxyPort=3128" >>  ./platforms/android/gradle-wrapper.properties
echo "systemProp.http.proxyUser=wagner" >>  ./platforms/android/gradle-wrapper.properties
echo "systemProp.http.proxyPassword=nicolas1*" >>  ./platforms/android/gradle-wrapper.properties
echo "systemProp.http.nonProxyHosts=localhost" >>  ./platforms/android/gradle-wrapper.properties

