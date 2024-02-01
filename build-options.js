#!/bin/node

const version = '0.3.64';

const encoded = encodeURIComponent(
  JSON.stringify({
    repository: 'https://github.com/aws-solutions/quota-monitor-for-aws.git',
    deployment: {
      cloudFormationTemplate: 'deployment/quota-monitor-hub.template',
    },
  })
);

console.log(
  `[![Launch](https://img.shields.io/badge/Launch%20with%20CodeCatalyst-%F0%9F%9A%80-8A2BE2)](https://integ.stage.quokka.codes/spaces/blueprints/blueprints/%40amazon-codecatalyst%2Fblueprints.launch-blueprint/publishers/ae796a3f-a165-4125-aefe-2d2d494de859/versions/${version}/projects/create?options=${encoded})`
);
