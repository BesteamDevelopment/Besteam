# Build Stage
ARG ARCH
FROM sindriainc/openjdk:3.0.0-23-${ARCH} as builder

# Add source code
COPY ./ /var/www/app

WORKDIR /var/www/app

# Build dependecies
RUN mvn compile

# Build Artifact
RUN mvn package

# Push Artifact
# TODO: push jar artifact

# Production Stage
ARG ARCH
FROM sindriainc/openjdk:3.0.0-23-${ARCH}

WORKDIR /var/www/app

ARG ARCH
ARG TAG_VERSION
ARG HOST_USER_UID
ARG TIMEZONE

LABEL \
	name="besteam-v1-api-backend" \
	image="sindriainc/besteam-v1-api-backend" \
	tag="${TAG_VERSION}" \
	vendor="sindria"

ENV DEBIAN_FRONTEND="noninteractive"
ENV TZ=${TIMEZONE}
ENV SINDRIA_USER="sindria"
ENV SINDRIA_USER_HOME="/home/sindria"
ENV JAVA_OPTS="-Xmx1024M -Xms1024M"
ENV JMX_EXPORTER_PORT="8080"

# Install application
COPY --from=builder /var/www/app/target/besteam-v1-api-backend-${TAG_VERSION}.jar /var/www/app/app.jar

# Setting Timezone and Fixing permission
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    chmod -R 770 /var/www/app && \
    chown -R ${SINDRIA_USER}:${SINDRIA_USER} /var/www/app

#java -Xmx1024M -Xms1024M -jar app.jar
#ENTRYPOINT exec java -javaagent:/opt/jmx_prometheus_javaagent.jar=$JMX_EXPORTER_PORT:/opt/config.yaml $JAVA_OPTS -jar app.jar
#
#USER ${SINDRIA_USER}