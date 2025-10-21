import { ContactForm } from '@/components/forms/contact-form'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600">
            Nous sommes là pour vous aider
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
