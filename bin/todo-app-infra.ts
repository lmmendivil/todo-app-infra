#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { TodoAppInfraStack } from '../lib/todo-app-infra-stack';

const app = new cdk.App();
new TodoAppInfraStack(app, 'TodoAppInfraStack', {
 
});
