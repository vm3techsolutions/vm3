import Razorpay from 'razorpay';

export async function POST(req) {
  try {
    const { amount, planName } = await req.json();

    if (!amount || typeof amount !== 'number' || amount <= 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid amount' }),
        { status: 400 }
      );
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('Razorpay API keys missing');
      return new Response(
        JSON.stringify({ error: 'Razorpay API keys missing' }),
        { status: 500 }
      );
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: { plan: planName },
    };

    const order = await razorpay.orders.create(options);

    return new Response(
      JSON.stringify({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Razorpay order creation error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to create order" }),
      { status: 500 }
    );
  }
}
