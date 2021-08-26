/*
Copyright 2019-2021 VMware, Inc.
SPDX-License-Identifier: Apache-2.0
*/
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

import { Env } from 'app/model/index';

export const environment: Env = {
  // This section is required
  production: false,
  annotationService: 'http://localhost:3000', // Annotation service url
  serviceTitle: 'Data Annotator for Machine Learning', // UI name of annotation-app.

  // This section is optional
  redirectUrl: '/home', // redirect URL after logout or token is expired
  videoSrc: null, // demo video link in home page, or set null to show nothing
  googleTrackId: null, // google track ID
  enableSendEmail: false, // Set to true to enable email notification for project creation, annotator assignment or edit project owner
  enableAWSS3: false, // Set to true to upload and download files with AWS S3 that requires some related AWS CONFIG IAM to be configured in annotation-service
};


// export const environment: Env = {
//   production: false,
//   annotationService: 'http://localhost:3000',
//   authUrl: 'https://auth.esp-staging.vmware-aws.com/api/auth/v1',
//   tokenUrl: 'https://auth.esp-staging.vmware-aws.com/api/auth/v1/tokens',
//   logoutUrl: 'https://auth.esp-staging.vmware-aws.com/api/auth/v2/logout',
//   CLIENT_ID: 'esp-stg-484-qdpwk',
//   redirectUrl: '/login/authenticate',
//   feedbackUrl: 'https://feedback.esp-staging.vmware-aws.com/assets/ipf/esp.js',
//   videoSrc: 'http://engweb.eng.vmware.com/~liangs/loop-demo-radio2020.mp4',
//   serviceTitle: 'InstaML Loop',
//   googleTrackId: '',
//   provider: 'VMware',
//   STATE: 'ZXNwLWFwaS1rZXk=',
//   enableSendEmail: true,
//   contactEmail: 'instaml-dev@vmware.com',
//   contactSlack: '#instaml',
//   enableAWSS3: true,
// };