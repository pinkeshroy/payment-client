import axios from "axios";
import React, { useState } from "react";

const PaymentComponent: React.FC = () => {
    const [book, setBook] = useState({
		name: "The Fault In Our Stars",
		author: "John Green",
		img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
		price: 250,
	});

	const initPayment = (data:any) => {
		const options = {
			key: process.env.RAZORPAY_KEY_ID??"",
			amount: data.amount,
			currency: data.currency,
			name: book.name,
			description: "Test Transaction",
			image: book.img,
			order_id: data.id,
			handler: async (response:any) => {
				try {
					const verifyUrl = "http://localhost:3000/payments/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};

	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:3000/payments/order";
			const { data } = await axios.post(orderUrl, { amount: book.price });
			console.log(data);
			initPayment(data.data);
		} catch (error) {
			console.log(error);
		}
	};

    return (
        <div>
            <h2>Pay with Razorpay</h2>
            <button onClick={handlePayment}>Book now</button>
        </div>
    );
};

export default PaymentComponent;