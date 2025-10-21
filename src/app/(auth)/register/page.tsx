import { RegisterForm } from '@/components/forms/register-form'

export default function RegisterPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Inscription</h1>
        <p className="mt-2 text-gray-600">Créez votre compte</p>
      </div>
      <RegisterForm />
    </div>
  )
}
