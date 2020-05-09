import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const LoginForm = () => (
  <>
    <div className="auth__top">
      <h2>Войти в аккаунт</h2>
      <p>Пожалуйста, войдите в свой аккаунт</p>
    </div>
    <Block>
      <Form>
        <Form.Item>
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Ваше имя"
            type="username"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
            size="large"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large">
            Войти в аккаунт
          </Button>
        </Form.Item>
        <Link className="auth__register-link" to="/register">Зарегистрироваться</Link>
      </Form>
    </Block>
  </>
);

export default LoginForm;