// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require('stripe')('sk_test_51Kziq8Caqz6sAz6nnjhm4Rx3Oz2Dbo4OthJEmtjmhmMgx0f6FupxWUp8AIdzKVJrmocLi83bdWcJPTMYNH5hX0RG00qvAdeEtb');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1Kzj1vCaqz6sAz6nV94BOhIC',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));