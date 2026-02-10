export const GoogleLoginButton = () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    const loginWithGoogle = () => {
      window.open(`${BACKEND_URL}/auth/google`, "_self");
    };

    return <button onClick={loginWithGoogle}>Continue with Google</button>;
  };