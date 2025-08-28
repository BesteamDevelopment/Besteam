# Build Stage
ARG ARCH
FROM sindriainc/node:1.1.0-18-${ARCH} as builder

# Add source code
COPY ./ /var/www/app

WORKDIR /var/www/app

USER root

# Build dependecies
RUN yarn --cwd /var/www/app install

# Build artifact
RUN yarn --cwd /var/www/app build

# Verify build
RUN ls -la /var/www/app && \
    ls -la /var/www/app/build

# Push Artifact
# TODO: push jar artifact

# Production Stage
ARG ARCH
FROM sindriainc/web-static:3.0.0-${ARCH}

WORKDIR /var/www/app

ARG ARCH
ARG TAG_VERSION
ARG HOST_USER_UID
ARG TIMEZONE

LABEL \
	name="besteam-v1-web-website" \
	image="sindriainc/besteam-v1-web-website" \
	tag="${TAG_VERSION}" \
	vendor="sindria"

ENV DEBIAN_FRONTEND="noninteractive"
ENV TZ=${TIMEZONE}
ENV SINDRIA_USER="sindria"
ENV SINDRIA_USER_HOME="/home/sindria"

# Install application
COPY --from=builder /var/www/app/build /var/www/app/public

USER root

# Setting Timezone and Fixing permission
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone && \
    chmod -R 770 /var/www/app && \
    chown -R ${SINDRIA_USER}:${SINDRIA_USER} /var/www/app

#USER ${SINDRIA_USER}