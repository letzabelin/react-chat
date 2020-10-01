import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { MailOutlined, LockOutlined } from '@ant-design/icons';

import { Button, Block } from 'components';
import { validateField } from 'utils/helpers';

const LoginForm = ({ handleBlur, values, handleSubmit, touched, handleChange, errors }) => (
  <>
    <div className="auth__top">
      <h2>Войти в аккаунт</h2>
      <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
    <Block>
      <Form onSubmit={handleSubmit}>
        <Form.Item
          validateStatus={validateField('email', touched, errors)}
          help={touched.email && errors.email}
          hasFeedback
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
            type="email"
            id="email"
            size="large"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item
          validateStatus={validateField('password', touched, errors)}
          help={touched.password && errors.password}
          hasFeedback
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            size="large"
            id="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSubmit} type="primary" size="large">
            Войти в аккаунт
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
      </Form>
    </Block>
  </>
);

export default LoginForm;
