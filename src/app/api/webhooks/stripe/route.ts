import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.text()
  // const headersList = await headers();
  // const sig = headersList.get('stripe-signature');

  // Logique de vérification du webhook Stripe
  // const event = stripe.webhooks.constructEvent(body, sig, endpointSecret);

  console.log('Webhook Stripe reçu:', body)

  return NextResponse.json({ received: true })
}
