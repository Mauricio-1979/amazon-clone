import React, {useEffect, useState} from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//import { async } from '@firebase/util';
import axios from './axios';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe spect the total in a correncies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    const handleSubmit = async e => {
        // do all the fancy stripe stuff
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => { // payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate("/orders")
        })
    }

    const handleChange = e => {
        // Listen for change in the card element
        // and displays and errors as the costumer types their card details
        setDisabled(e.empty);
        setError(e.error ? e.error.message: "");
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
            <h1>
                Checkout (<Link to="/checkout"> {basket?.length} items</Link>)
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>123 St. Marty Av.</p>
                    <p>Palo Alto, CA</p>
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {basket.map(item => (
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment_details'>
                    {/*stripe magic */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment_priceContainer'>
                        <CurrencyFormat 
                            renderText={(value) => (
                                <h3>Order Total{value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"£"}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                        </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment