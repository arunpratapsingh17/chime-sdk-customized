// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

const appConfig = {
  apiGatewayInvokeUrl:'',
  cognitoUserPoolId: 'us-east-1_ick3EQjxk',
  cognitoAppClientId: '25h6ra6d0mfsbcnf9mke9u6v02',
  cognitoIdentityPoolId: 'us-east-1:deaa3dd6-12ae-4b7e-a823-2cb370ab00b0',
  appInstanceArn: 'arn:aws:chime:us-east-1:587273692666:app-instance/8bb40969-423c-4e01-906d-6298cacb6def',
  region: 'us-east-1',  // Only supported region for Amazon Chime SDK Messaging as of this writing
  attachments_s3_bucket_name: 'amazon-chime-sdk-chat-demo-chatattachmentsbucket-1rf0uzwejn70z'
};
export default appConfig;
