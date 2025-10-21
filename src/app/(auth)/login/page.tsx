import { LoginForm } from '@/components/forms/login-form';

export default function LoginPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Connexion</h1>
        <p className="text-gray-600 mt-2">Connectez-vous à votre compte</p>
      </div>
      <LoginForm />
    </div>
  );
}
