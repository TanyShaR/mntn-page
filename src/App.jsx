import { useForm } from "react-hook-form";
import S from "./App.module.css";
import { useState } from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [message, setMessage] = useState(null);

  const onSubmit = ({ email }) => {
    setMessage(
      `Спасибо за участие! На ваш Email ${email} пришло сообщение с подтверждением`
    );
  };

  const handleClose = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    setMessage(null);
  };

  return (
    <>
      <div className={S.container}>
        <form className={S.content} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={S.title}>Забраться на гору с экспертом</h2>
          <div className={S.subscribe}>
            <input
              type="email"
              placeholder="Ваш E-mail"
              className={S.input}
              {...register("email", { required: true })}
            />
            <button className={S.button}>Подписаться</button>
          </div>
        </form>
      </div>
      {message && (
        <div className={S.modal} onClick={handleClose}>
          <div className={S.modalBody}>{message}</div>
        </div>
      )}
    </>
  );
}

export default App;
