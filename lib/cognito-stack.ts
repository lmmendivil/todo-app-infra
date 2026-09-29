import { Stack, StackProps } from "aws-cdk-lib";
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito";
import { Construct } from "constructs";


export class CognitoHostingStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        //userpool
        const userPool = new UserPool(this, 'UserPoolTodoWebApp' , {
            userPoolName: 'UserPoolTodoWebApp',
            selfSignUpEnabled: true, //Allows user to sign up
            autoVerify: { email: true}, //Verify email addresses by sending a verification code
            signInAliases: { email: true} // Set email as an alias
        });

        
        //Create User Pool Client
		const userPoolClient = new UserPoolClient( this,'UserPoolClientTodoWebApp',	{
				userPool,
				generateSecret: false, // Don't need to generate secret for web app running on browsers
			}
		);

    

    }
}