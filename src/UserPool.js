import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: process.env.REACT_APP_USERPOOL,
    ClientId: process.env.REACT_APP_CLIENTID
}

export default new CognitoUserPool(poolData);