import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with a fake API key.
// Sign in to see examples pre-filled with your key.
const promise = loadStripe(
  "pk_test_51IwNwcSF1ZvBbwKMmlw97b251p3OzBeCJrjlz2VIhMNOIJJiNjSklWTildUvHcYVu8SmxIqdEjjvU181i9mQ5BfI007kxPEuKR"
);

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
