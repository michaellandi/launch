#!/bin/node

const version = '0.3.99';

const encoded = encodeURIComponent(
  JSON.stringify({
    sourceRepository: 'https://github.com/aws-solutions/qnabot-on-aws',
    destinationRepositoryName: 'qnabot-on-aws',
    deployment: {
      containerImage: 'public.ecr.aws/amazonlinux/amazonlinux:2023',
      buildSteps: [
        'yum install -y nodejs make git',
        'npm install',
        'npm run config',
        'npm run boostrap',
        'npm run up',
      ],
    },
  })
);

console.log(
  `[![Launch](https://img.shields.io/badge/Launch%20with%20CodeCatalyst-%F0%9F%9A%80-8A2BE2)](https://integ.stage.quokka.codes/spaces/blueprints/blueprints/%40amazon-codecatalyst%2Fblueprints.launch-blueprint/publishers/ae796a3f-a165-4125-aefe-2d2d494de859/versions/${version}/projects/create?options=${encoded})`
);
