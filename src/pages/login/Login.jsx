import React from "react";
import s from './Login.module.scss';
import { Button } from "../../components/button/Button";
import { Form } from "react-router-dom";
export const Login = () => {
    return (
        <div className={`${s.login} wrap`}>
            <h2 style={{marginBottom: '5%'}}>Sign in</h2>
            <div className={s.wrapper}>
                <h2 className={s.title}>Войти на страницу</h2>
                <Form action="/" className={s.form}>
                    <input type="email" name="" placeholder="email" />
                    <input type="password" name="" placeholder="password" />
                    <div className={s.button}>
                        <Button>sign in</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}