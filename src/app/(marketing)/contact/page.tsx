import { ContactForm } from '@/components/forms/contact-form';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
          <p className="text-xl text-gray-600">Nous sommes là pour vous aider</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
