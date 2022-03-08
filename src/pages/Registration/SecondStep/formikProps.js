import { object, string } from 'yup';

const initialValues = {
	firstName: '',
	secondName: '',
	sex: 'Мужской',
};

const validationSchema = object({
	firstName: string().required('Введите имя').matches(/\p{L}+/u, 'Неверный формат имени') ,
	secondName: string().required('Введите фамилию').matches(/\p{L}+/u, 'Неверный формат фамилии'),
	sex: string(),
});

export default {
	initialValues,
	validationSchema,
};

export const sexRadioOptions = { key: 'sex-option', values: ['Мужской', 'Женский'] };
