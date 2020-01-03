import React from "react";
import OTPInput from "components/OTPInput";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      - Number OTP:
      <OTPInput
        length={4}
        className="otpContainer"
        inputClassName="otpInput"
        isNumberInput
        autoFocus
        onChangeOTP={otp => console.log("Number OTP: ", otp)}
      />
      - String OTP:
      <OTPInput
        autoFocus
        length={4}
        className="otpContainer"
        inputClassName="otpInput"
        onChangeOTP={otp => console.log("String OTP: ", otp)}
      />
    </div>
  );
};

export default App;
