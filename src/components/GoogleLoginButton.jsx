export const GoogleLoginButton = () => {
    const loginWithGoogle = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };

    return <button onClick={loginWithGoogle}>Continue with Google</button>;
  };