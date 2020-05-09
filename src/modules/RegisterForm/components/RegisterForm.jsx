import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, CheckCircleTwoTone } from '@ant-design/icons';

const LoginForm = () => {
  let isRegistred = true;

  return (
    <>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат Вам нужно зарегистрироваться</p>
      </div>
      <Block>
        { isRegistred ? (
          <div className="auth__success-block">
            <div>
              <CheckCircleTwoTone style={{ fontSize: '48px' }} twoToneColor="#52c41a" />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту отправлено письмо с ссылкой для подтверждения аккаунта</p>
          </div>
        ) : (
          <Form>
            <Form.Item>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                type="email"
                size="large"
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
            <Form.Item>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
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
            <Link className="auth__register-link" to="/login">Войти в аккаунт</Link>
          </Form>  
        )}
      </Block>
    </>
  );
};

export default LoginForm;