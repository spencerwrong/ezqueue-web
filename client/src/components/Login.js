import React from 'react';
import { withAuth } from '@okta/okta-react';

class LoginPage extends React.Component {

  async componentDidMount() {
    const authenticated = await this.props.auth.isAuthenticated();

    if (authenticated !== false) {
      console.log('User is Authenticated??')
      const user = await this.props.auth.getUser();
      console.log(user)
    } else {
      console.log('User is not authenticated')
    }
  }

  render() {
    return (
      <>
        <button onClick={() => this.props.auth.login()}>Log in with Okta</button>
      </>
    )
  }
}

export default withAuth(LoginPage);
