import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-north-1_Z2TW3C14q",
    ClientId: "7nouqr2avjc99k75u2afqnfrd"
}

export default new CognitoUserPool(poolData);