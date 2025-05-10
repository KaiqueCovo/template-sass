"use client"

import { useStripe } from "@/app/hooks/useStripe"

export default function Pagamentos() {

  const { createPaymentStripeCheckout, createSubscriptionStripeCheckout, handleCreateStripePortal } = useStripe()

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Pagamentos</h2>
        <button className="border rounded-md px-1" onClick={() => createPaymentStripeCheckout({ testeId: "123"})}>
          Criar pagamento Stripe
        </button>
        <button className="border rounded-md px-1" onClick={() => createSubscriptionStripeCheckout({ testeId: "123"})}>
          Criar assinatura Stripe
        </button>
        <button className="border rounded-md px-1" onClick={() => handleCreateStripePortal()}>
          Criar Portal de Pagamentos
        </button>
      </div>
    </div>
  )
}