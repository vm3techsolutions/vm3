
const Razorpay = require('razorpay');
const razorpay = require('../../config/razorpay');

const createPlans = async (req, res) => {
  try {
    const { name, amount, period, interval } = req.body;

    const planOptions = {
      period,               // 'month', 'year', etc.
      interval,            // 1, 3, etc.
      item: {
        name,
        amount: amount * 100, // convert to paise
        currency: 'INR',
        description: `${interval}-${period} plan`
      }
    };

    const plan = await razorpay.plans.create(planOptions);
    res.status(200).json({ success: true, plan });
  } catch (error) {
  console.error('Create Plan Error:', error);

  const errorMsg = error?.error?.description || error?.message || 'Internal Server Error';

  res.status(500).json({ success: false, error: errorMsg });
}

}


const createSubscription = async (req, res) => {
  try {
    const { plan_id, customer_notify, total_count,customer} = req.body;

    const{ name, email, contact } = customer

    const subscriptionOptions = {
      plan_id,
      total_count: total_count, // Total billing cycles; change as per your needs
      customer_notify: customer_notify ?? 1
    };

    const subscription = await razorpay.subscriptions.create(subscriptionOptions);
    res.status(200).json({ success: true, subscription });
  } catch (error) {
    console.error('Create Subscription Error:', error);

    const errorMsg = error?.error?.description || error?.message || 'Internal Server Error';
    res.status(500).json({ success: false, error: errorMsg });
  }
};

module.exports = {
  createPlans,
  createSubscription
};
