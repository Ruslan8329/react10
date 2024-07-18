import React from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: Date;
  gender: string;
  newsletter: boolean;
  terms: boolean;
  country: string;
  avatar: FileList;
}

const RegistrationForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Имя</label>
        <input {...register("firstName", { required: true })} />
        {errors.firstName && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Фамилия</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Адрес электронной почты</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Пароль</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Подтверждение пароля</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: true,
            validate: (value) => value === password || "Пароли не совпадают",
          })}
        />
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </div>
      <div>
        <label>Дата рождения</label>
        <Controller
          name="dateOfBirth"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
        {errors.dateOfBirth && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Пол</label>
        <div>
          <input
            type="radio"
            value="male"
            {...register("gender", { required: true })}
          />{" "}
          Мужской
          <input
            type="radio"
            value="female"
            {...register("gender", { required: true })}
          />{" "}
          Женский
          <input
            type="radio"
            value="other"
            {...register("gender", { required: true })}
          />{" "}
          Другое
        </div>
        {errors.gender && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("newsletter")} /> Подписка на
          новости
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" {...register("terms", { required: true })} />{" "}
          Согласие с условиями использования
        </label>
        {errors.terms && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Страна</label>
        <select {...register("country", { required: true })}>
          <option value="">Выберите страну</option>
          <option value="ru">Россия</option>
          <option value="us">США</option>
          <option value="ge">Грузия</option>
          <option value="az">Азербайджан</option>
        </select>
        {errors.country && <span>Это поле обязательно</span>}
      </div>
      <div>
        <label>Загрузка аватара</label>
        <input type="file" {...register("avatar", { required: true })} />
        {errors.avatar && <span>Это поле обязательно</span>}
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegistrationForm;
