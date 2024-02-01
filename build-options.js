#!/bin/node

const encoded = encodeURIComponent(
  JSON.stringify({
    repository: 'https://github.com/aws-solutions/quota-monitor-for-aws.git',
  })
);

console.log(encoded);
