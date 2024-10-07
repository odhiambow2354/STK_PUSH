import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [isPolling, setIsPolling] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isConfirmed = window.confirm(
      `Are you sure you want to pay KES ${amount}?`
    );

    if (!isConfirmed) {
      toast.info("Payment cancelled");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/token", {
        phone: phone,
        amount: amount,
      });

      toast.info("Waiting for payment confirmation...");

      // Start polling for the callback status
      setIsPolling(true);
      pollTransactionStatus();
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.error
        : error.message;
      toast.error(`Payment Failed: ${errorMessage}`);
    }
  };

  // Poll backend to check if payment is completed
  const pollTransactionStatus = async () => {
    try {
      const result = await axios.get("http://localhost:4000/token/status");

      if (result.data.status === "completed") {
        setIsPolling(false);
        toast.success("Payment completed successfully");
      } else if (result.data.status === "failed") {
        setIsPolling(false);
        toast.error("Payment failed or was cancelled");
      } else {
        // Continue polling
        setTimeout(pollTransactionStatus, 5000);
      }
    } catch (error) {
      console.error("Error polling transaction status:", error);
    }
  };

  return (
    <div className="App">
      <h1>STK Push Payment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="0712121212"
            required
          />
        </div>
        <div>
          <label>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            required
          />
        </div>
        <button type="submit">Make Payment</button>
      </form>

      {/* ToastContainer for displaying toasts */}
      <ToastContainer position="top-center" autoClose={5000} />
    </div>
  );
}

export default App;
