import React, { useState } from "react";
import styles from "./CheckoutDetails.module.scss";
import Card from "../../components/card/Card";
import { CountryDropdown } from "react-country-region-selector";
import { useDispatch } from "react-redux";
import {
  SAVE_BILLING_ADDRESS,
  SAVE_SHIPPING_ADDRESS,
} from "../../redux/slice/checkoutSlice";
import { useNavigate } from "react-router-dom";
import CheckoutSummary from "../../components/checkoutSummary/CheckoutSummary";

const initialAddressState = {
  name: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  postal_code: "",
  country: "",
  phone: "",
};

const CheckoutDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [billingAddress, setBillingAddress] = useState({
    ...initialAddressState,
  });

  const handleShipping = (e) => {
    const { name, value } = e.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  const handleBilling = (e) => {
    const { name, value } = e.target;
    setBillingAddress({
      ...billingAddress,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SAVE_SHIPPING_ADDRESS(shippingAddress));
    dispatch(SAVE_BILLING_ADDRESS(billingAddress));
    navigate("/checkout");
  };

  return (
    <>
      <section>
        <div className={`container ${styles.checkout}`}>
          <h2>Checkout details</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <Card cardClass={styles.card}>
                <h3>Shipping Address</h3>
                <label>Recipient Name</label>
                <input
                  type="text"
                  name="name"
                  value={shippingAddress.name}
                  placeholder="Recipient name"
                  onChange={(e) => handleShipping(e)}
                  required
                />
                <label>Address line 1</label>
                <input
                  type="text"
                  name="line1"
                  value={shippingAddress.line1}
                  placeholder="Address line 1"
                  onChange={(e) => handleShipping(e)}
                  required
                />
                <label>Address line 2</label>
                <input
                  type="text"
                  name="line2"
                  value={shippingAddress.line2}
                  placeholder="Addess line 2"
                  onChange={(e) => handleShipping(e)}
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={shippingAddress.city}
                  placeholder="City"
                  onChange={(e) => handleShipping(e)}
                  required
                />
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={shippingAddress.state}
                  placeholder="State"
                  onChange={(e) => handleShipping(e)}
                  required
                />
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postal_code"
                  value={shippingAddress.postal_code}
                  placeholder="Postal code"
                  onChange={(e) => handleShipping(e)}
                  required
                />
                <CountryDropdown
                  valueType="short"
                  className={styles.select}
                  value={shippingAddress.country}
                  onChange={(val) =>
                    handleShipping({
                      target: {
                        name: "country",
                        value: val,
                      },
                    })
                  }
                />

                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={shippingAddress.phone}
                  placeholder="Phone"
                  onChange={(e) => handleShipping(e)}
                  required
                />
              </Card>
              {/* Billing address */}

              <Card cardClass={styles.card}>
                <h3>Billing Address</h3>
                <label>Recipient Name</label>
                <input
                  type="text"
                  name="name"
                  value={billingAddress.name}
                  placeholder="Name"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <label>Address line 1</label>
                <input
                  type="text"
                  name="line1"
                  value={billingAddress.line1}
                  placeholder="Address line 1"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <label>Address line 2</label>
                <input
                  type="text"
                  name="line2"
                  value={billingAddress.line2}
                  placeholder="Addess line 2"
                  onChange={(e) => handleBilling(e)}
                />
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={billingAddress.city}
                  placeholder="City"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={billingAddress.state}
                  placeholder="State"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postal_code"
                  value={billingAddress.postal_code}
                  placeholder="Postal code"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <CountryDropdown
                  valueType="short"
                  className={styles.select}
                  value={billingAddress.country}
                  onChange={(val) =>
                    handleBilling({
                      target: {
                        name: "country",
                        value: val,
                      },
                    })
                  }
                />

                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={billingAddress.phone}
                  placeholder="Phone"
                  onChange={(e) => handleBilling(e)}
                  required
                />
                <button type="submit" className="--btn --btn-primary">
                  Proceed to Checkout
                </button>
              </Card>
            </div>
            <div>
              <Card cardClass={styles.card}>
                <CheckoutSummary />
              </Card>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default CheckoutDetails;
