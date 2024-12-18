import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { FormattedMessage } from "react-intl";

const LoginForm = ({ solanaConfig, walletConnection }) => {
  
  const signIn = async () => {
    try {
      console.log(solanaConfig.contractName);
      await walletConnection.requestSignIn("NEAR Guest Book");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <Image className="ConnectIoTLogo" src="ConnectIoTLogo.png" />
          <h3 className="Auth-form-title">
            <FormattedMessage
              id="app.loginWelcomeMsg"
              defaultMessage="Welcome"
            />
          </h3>
          <h4 className="Auth-form-subtitle">
            <FormattedMessage
              id="app.loginInstructions"
              defaultMessage="Instructions"
            />
          </h4>
          <Image className="NearLogo" src="near-protocol-near-logo.png" />
          <div className="d-grid gap-2 mt-3">
            <Button className="btn btn-primary color-nav" onClick={signIn}>
              <FormattedMessage id="app.loginBtn" defaultMessage="Login" />
            </Button>
            <p className="text-center mt-2">
              <a href="https://wallet.near.org/create">
                <FormattedMessage
                  id="app.loginNewAccount1"
                  defaultMessage="Welcome"
                />{" "}
                <br />
                <FormattedMessage
                  id="app.loginNewAccount2"
                  defaultMessage="Welcome"
                />
              </a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
