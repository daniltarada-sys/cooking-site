import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { registerSchema, type RegisterFormData } from '../utils/validationSchemas';

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema) as any,
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      console.log('Данные для регистрации:', data);
      
      // Имитация запроса на сервер
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      alert('Регистрация успешна! Теперь войдите в систему.');
      navigate('/login'); // Перекидываем на страницу входа
    } catch (error) {
      console.error('Ошибка регистрации', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark">Создать аккаунт 👨‍🍳</h2>
          <p className="text-gray-500 mt-2">Присоединяйтесь к сообществу гурманов</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input 
            label="Email" 
            type="email" 
            placeholder="chef@example.com"
            error={errors.email?.message}
            {...register('email')} 
          />

          <Input 
            label="Пароль" 
            type="password" 
            placeholder="••••••"
            error={errors.password?.message}
            {...register('password')} 
          />

          <Input 
            label="Подтвердите пароль" 
            type="password" 
            placeholder="••••••"
            error={errors.confirmPassword?.message}
            {...register('confirmPassword')} 
          />

          <Button 
            type="submit" 
            isLoading={isSubmitting} 
            className="w-full mt-6"
          >
            Зарегистрироваться
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Уже есть аккаунт? <Link to="/login" className="text-brand font-semibold hover:underline">Войти</Link>
        </div>
      </div>
    </div>
  );
};