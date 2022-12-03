import React from "react";
import s from './Form.module.scss';
import { Button } from "../button/Button";
import { Form} from "react-router-dom";


export const Form_Request = () => {
  return (
    <div className={s.form}>
      <h2>Help us get to know you better </h2>
      <Form method="post"  action="submission">
        <input type="text" name="name" required id="" placeholder="Full Name" />
        <input type="text" name="email" required id="" placeholder="Work email" />
        <input type="text" name="number" required id="" placeholder="Phone Number" />
        <input type="text" name="company" required id="" placeholder="Company" />
        <input type="text" name="company size" id="" placeholder="Company Size" />
        <div className={s.button}>
          <Button>Request demo</Button>
        </div>
      </Form>
    </div>
  )
}