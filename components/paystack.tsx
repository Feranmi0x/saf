"use client";

import dynamic from "next/dynamic";

const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface PaystackPaymentProps {
  amount: number;
  email: string;
}

interface ComponentProps {
  email: string;
  amount: number;
  publicKey: string;
  text: string;
  onSuccess: (reference: { reference: string }) => void;
  onClose: () => void;
}

const PaystackPayment = ({ amount, email }: PaystackPaymentProps) => {

  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;

  if (!publicKey) {
    return <div>Payment configuration error</div>;
  }

  const componentProps: ComponentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "EXPRESS DONATE",

    onSuccess: (reference) => {
      console.log("Payment successful:", reference.reference);
    },

    onClose: () => {
      console.log("Payment closed");
    },
  };

  return (
    <div>
      <PaystackButton {...componentProps} />
    </div>
  );
};

export default PaystackPayment;