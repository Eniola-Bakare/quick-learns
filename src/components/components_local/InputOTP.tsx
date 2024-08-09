"use client";
import {
  InputOTP as InputOtp,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

export default function InputOTP() {
  const [value, setValue] = React.useState("");

  console.log(value);
  return (
    <div>
      InputOTP
      <InputOtp
        maxLength={6}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSeparator />
        </InputOTPGroup>
      </InputOtp>
    </div>
  );
}
