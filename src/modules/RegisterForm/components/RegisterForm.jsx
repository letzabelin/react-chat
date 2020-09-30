import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, CheckCircleTwoTone } from '@ant-design/icons';

let sucess = false;

const RegisterForm = ({ handleBlur, values, handleSubmit, touched, handleChange, errors }) => (
  <>
    <div className="auth__top">
      <h2>Регистрация</h2>
      <p>Для входа в чат Вам нужно зарегистрироваться</p>
    </div>
    <Block>
      {sucess ? (
        <div className="auth__success-block">
          <div>
            <CheckCircleTwoTone style={{ fontSize: '48px' }} twoToneColor="#52c41a" />
          </div>
          <h2>Подтвердите свой аккаунт</h2>
          <p>На Вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
        </div>
      ) : (
        <Form onSubmit={handleSubmit} className="login-form">
          <Form.Item
            validateStatus={ !touched.email ? null : errors.email ? 'error' : 'success' }
            help=""
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
          <Form.Item>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ваше имя"
              type="username"
              size="large"
            />
          </Form.Item>
          <Form.Item
            validateStatus={ !touched.password ? null : errors.password ? 'error' : 'success' }
            help={ !touched.password ? '' : errors.password }
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              id="password"
              placeholder="Пароль"
              size="large"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Form.Item>
          <Form.Item>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Повторите пароль"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" size="large">
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      )}
    </Block>
  </>
);

export default RegisterForm;
