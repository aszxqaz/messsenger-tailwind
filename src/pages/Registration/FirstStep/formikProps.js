import { object, ref, string } from 'yup';

const validationSchema = object({
	email: string()
		.email('Неправильный формат электронной почты')
		.required('Введите адрес электронной почты'),
	password: string()
		.required('Введите пароль')
		.min(6, 'Пароль должен содержать минимум 6 символов')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!-@#\$%\^&\*])/,
			'Слишком простой пароль',
		),
	confirmPassword: string()
		.oneOf([ref('password'), ''], 'Пароли не совпадают')
		.required('Повторите пароль'),
});

const initialValues = {
	email: '',
	password: '',
	confirmPassword: '',
};

export default {
	initialValues,
	validationSchema,
   validateOnBlur: false
};
