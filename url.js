#!/bin/node

const version = '0.3.108';

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
        'npm run bootstrap',
        'npm run up',
      ],
    },
    options: [['region', 'us-west-2']],
  })
);

console.log(
  `https://integ.stage.quokka.codes/launch?blueprintName=%40amazon-codecatalyst%2Fblueprints.launch-blueprint&options=${encoded}`
);