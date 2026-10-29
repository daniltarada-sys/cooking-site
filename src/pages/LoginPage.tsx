import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate, Link } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { loginSchema, type LoginFormData } from '../utils/validationSchemas';

// ЗАКОММЕНТИРОВАЛИ ИМПОРТ СТОРА, ТАК КАК ФАЙЛА ЕЩЕ НЕТ
// import { useAuthStore } from '../store/authStore';

export const LoginPage = () => {
  const navigate = useNavigate();
  // ЗАКОММЕНТИРОВАЛИ ПОЛУЧЕНИЕ ТОКЕНА
  // const setToken = useAuthStore((state) => state.setToken);

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema) as any, 
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log('Данные для входа:', data);
      
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // ЗАКОММЕНТИРОВАЛИ СОХРАНЕНИЕ ТОКЕНА
      // setToken('fake-token'); 
      
      alert('Успешный вход! (Имитация)');
      navigate('/'); 
    } catch (error) {
      console.error('Ошибка входа', error);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-dark">С возвращением 👋</h2>
          <p className="text-gray-500 mt-2">Войдите, чтобы сохранять рецепты</p>
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

          <Button 
            type="submit" 
            isLoading={isSubmitting} 
            className="w-full mt-4"
          >
            Войти
          </Button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Нет аккаунта? <Link to="/register" className="text-brand font-semibold hover:underline">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};