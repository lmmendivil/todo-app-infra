#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { AmplifyHostingStack } from '../lib/amplify-stack';
import { CognitoStack } from '../lib/cognito-stack';
import { BackendStack } from '../lib/backend-stack';

const app = new cdk.App();

const cognitoStack = new CognitoStack(app, 'TodoAppCognitoStack', {});

const backendStack = new BackendStack(app, 'TodoAppBackendStack', {});

const amplifyStack = new AmplifyHostingStack(app, 'TodoAppAmplifyHostingStack', {
    userPoolId: cognitoStack.userPoolId.value,
    userPoolClientId: cognitoStack.userPoolClientId.value,
    identityPoolId: cognitoStack.identityPoolId.value,
    serverUrl: backendStack.apiUrl.value
    userPoolArn: cognitoStack.userPoolArn.value

    
});