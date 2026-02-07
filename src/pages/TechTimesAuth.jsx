import { useContext, useState } from "react";
import {
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  FileText,
  UserCircle,
  Shield,
} from "lucide-react";
import { NewContext } from "../context/MyContext";
import { Link } from "react-router-dom";

const TechTimesAuth = () => {
  const { userLogin ,userRegister} = useContext(NewContext);
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    avatar: "",
    role: "user",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  // const [avatarPreview, setAvatarPreview] = useState(null);

  const handleLoginChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  const handleRegisterChange = (field, value) => {
    setRegisterData({ ...registerData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: "" });
  };

  // const handleAvatarChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setAvatarPreview(reader.result);
  //       setRegisterData({ ...registerData, avatar: reader.result });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(loginData.email))
      newErrors.email = "Email is invalid";
    if (!loginData.password) newErrors.password = "Password is required";
    else if (loginData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const validateRegister = () => {
    const newErrors = {};
    if (!acceptedTerms) {
    newErrors.terms = "You must accept the Terms & Conditions";
  }
    if (!registerData.name) newErrors.name = "Name is required";
    else if (registerData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!registerData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(registerData.email))
      newErrors.email = "Email is invalid";
    if (!registerData.password) newErrors.password = "Password is required";
    else if (registerData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!registerData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";
    else if (registerData.password !== registerData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!registerData.bio) newErrors.bio = "Bio is required";
    else if (registerData.bio.length < 10)
      newErrors.bio = "Bio must be at least 10 characters";
    return newErrors;
  };

  const handleLoginSubmit = () => {
    const newErrors = validateLogin();
    if (Object.keys(newErrors).length === 0) {
      userLogin(loginData);
    } else {
      setErrors(newErrors);
    }
  };

  const handleRegisterSubmit = () => {
    const newErrors = validateRegister();
    if (Object.keys(newErrors).length === 0) {
      userRegister(registerData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div className="container">
        <div className="row justify-content-center">
          <div className={isLogin ? "col-md-6 col-lg-5" : "col-md-8 col-lg-7"}>
            <div className="card shadow-lg border-0">
              <div className="card-body p-5">
                {/* Header */}
                <div className="text-center mb-4">
                  <h2 className="fw-bold" style={{ color: "#B00020" }}>
                    THE TECH TIMES
                  </h2>
                  <p className="text-muted">
                    {isLogin ? "Sign in to continue" : "Create your account"}
                  </p>
                </div>

                {/* LOGIN FORM */}
                {isLogin ? (
                  <div>
                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">
                        Email Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <Mail size={18} className="text-muted" />
                        </span>
                        <input
                          type="email"
                          className={`form-control ${errors.email ? "is-invalid" : ""}`}
                          placeholder="Enter your email"
                          value={loginData.email}
                          onChange={(e) =>
                            handleLoginChange("email", e.target.value)
                          }
                        />
                      </div>
                      {errors.email && (
                        <div className="text-danger small mt-1">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label fw-semibold">Password</label>
                      <div className="input-group">
                        <span className="input-group-text bg-white">
                          <Lock size={18} className="text-muted" />
                        </span>
                        <input
                          type={showPassword ? "text" : "password"}
                          className={`form-control ${errors.password ? "is-invalid" : ""}`}
                          placeholder="Enter your password"
                          value={loginData.password}
                          onChange={(e) =>
                            handleLoginChange("password", e.target.value)
                          }
                        />
                        <button
                          type="button"
                          className="btn btn-outline-secondary"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff size={18} />
                          ) : (
                            <Eye size={18} />
                          )}
                        </button>
                      </div>
                      {errors.password && (
                        <div className="text-danger small mt-1">
                          {errors.password}
                        </div>
                      )}
                    </div>

                    {/* Remember & Forgot */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                        />
                        <label
                          className="form-check-label small"
                          htmlFor="remember"
                        >
                          Remember me
                        </label>
                      </div>
                      <Link
                        to="/forgetpass"
                        className="small"
                        style={{ color: "#B00020", textDecoration: "none" }}
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleLoginSubmit}
                      className="btn w-100 text-white py-2 fw-semibold"
                      style={{ backgroundColor: "#B00020" }}
                    >
                      Sign In
                    </button>

                    {/* Switch to Register */}
                    <div className="text-center mt-4">
                      <span className="text-muted small">OR</span>
                    </div>
                    <div className="text-center mt-3">
                      <p className="mb-0 small">
                        Don't have an account?{" "}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsLogin(false);
                            setErrors({});
                          }}
                          style={{
                            color: "#B00020",
                            textDecoration: "none",
                            fontWeight: "600",
                          }}
                        >
                          Create Account
                        </a>
                      </p>
                    </div>
                  </div>
                ) : (
                  /* REGISTER FORM */
                  <div>
                    <div className="row">
                      {/* Name */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Full Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <User size={18} className="text-muted" />
                          </span>
                          <input
                            type="text"
                            className={`form-control ${errors.name ? "is-invalid" : ""}`}
                            placeholder="John Doe"
                            value={registerData.name}
                            onChange={(e) =>
                              handleRegisterChange("name", e.target.value)
                            }
                          />
                        </div>
                        {errors.name && (
                          <div className="text-danger small mt-1">
                            {errors.name}
                          </div>
                        )}
                      </div>

                      {/* Email */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Email Address
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <Mail size={18} className="text-muted" />
                          </span>
                          <input
                            type="email"
                            className={`form-control ${errors.email ? "is-invalid" : ""}`}
                            placeholder="john@example.com"
                            value={registerData.email}
                            onChange={(e) =>
                              handleRegisterChange("email", e.target.value)
                            }
                          />
                        </div>
                        {errors.email && (
                          <div className="text-danger small mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      {/* Password */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <Lock size={18} className="text-muted" />
                          </span>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            placeholder="Min 6 characters"
                            value={registerData.password}
                            onChange={(e) =>
                              handleRegisterChange("password", e.target.value)
                            }
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                        {errors.password && (
                          <div className="text-danger small mt-1">
                            {errors.password}
                          </div>
                        )}
                      </div>

                      {/* Confirm Password */}
                      <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">
                          Confirm Password
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white">
                            <Lock size={18} className="text-muted" />
                          </span>
                          <input
                            type={showConfirmPassword ? "text" : "password"}
                            className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                            placeholder="Re-enter password"
                            value={registerData.confirmPassword}
                            onChange={(e) =>
                              handleRegisterChange(
                                "confirmPassword",
                                e.target.value,
                              )
                            }
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <div className="text-danger small mt-1">
                            {errors.confirmPassword}
                          </div>
                        )}
                      </div>

                      {/* Bio */}
                      <div className="col-12 mb-3">
                        <label className="form-label fw-semibold">Bio</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white align-items-start pt-2">
                            <FileText size={18} className="text-muted" />
                          </span>
                          <textarea
                            rows="3"
                            className={`form-control ${errors.bio ? "is-invalid" : ""}`}
                            placeholder="Tell us about yourself..."
                            value={registerData.bio}
                            onChange={(e) =>
                              handleRegisterChange("bio", e.target.value)
                            }
                          />
                        </div>
                        {errors.bio && (
                          <div className="text-danger small mt-1">
                            {errors.bio}
                          </div>
                        )}
                      </div>

                      {/* Avatar */}
                      {/* <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Profile Picture</label>
                        <div className="d-flex align-items-center gap-3">
                          <div
                            className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                            style={{ width: '70px', height: '70px', overflow: 'hidden' }}
                          >
                            {avatarPreview ? (
                              <img src={avatarPreview} alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            ) : (
                              <UserCircle size={40} className="text-muted" />
                            )}
                          </div>
                          <label className="btn btn-outline-secondary btn-sm">
                            <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
                            Choose File
                          </label>
                        </div>
                        <small className="text-muted">JPG, PNG or GIF (Max 2MB)</small>
                      </div> */}

                      {/* Role */}
                      {/* <div className="col-md-6 mb-3">
                        <label className="form-label fw-semibold">Role</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white"><Shield size={18} className="text-muted" /></span>
                          <select
                            className="form-select"
                            value={registerData.role}
                            onChange={(e) => handleRegisterChange('role', e.target.value)}
                          >
                            <option value="reader">Reader</option>
                            <option value="writer">Writer</option>
                            <option value="journalist">Journalist</option>
                            <option value="editor">Editor</option>
                          </select>
                        </div>
                        <small className="text-muted">Select your account type</small>
                      </div> */}
                    </div>

                    {/* Terms */}
                    <div className="form-check mb-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                        checked={acceptedTerms}
                        onChange={(e) => setAcceptedTerms(e.target.checked)}
                      />
                      <label className="form-check-label small" htmlFor="terms">
                        I agree to the{" "}
                        <a href="#" style={{ color: "#B00020" }}>
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a href="#" style={{ color: "#B00020" }}>
                          Privacy Policy
                        </a>
                      </label>
                      {errors.terms && (
                      <div className="text-danger small mt-1">
                        {errors.terms}
                      </div>
                    )}
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleRegisterSubmit}
                      className="btn w-100 text-white py-2 fw-semibold"
                      style={{ backgroundColor: "#B00020" }}
                    >
                      Create Account
                    </button>

                    {/* Switch to Login */}
                    <div className="text-center mt-4">
                      <span className="text-muted small">OR</span>
                    </div>
                    <div className="text-center mt-3">
                      <p className="mb-0 small">
                        Already have an account?{" "}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setIsLogin(true);
                            setErrors({});
                          }}
                          style={{
                            color: "#B00020",
                            textDecoration: "none",
                            fontWeight: "600",
                          }}
                        >
                          Sign In
                        </a>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechTimesAuth;
