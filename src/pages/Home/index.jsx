import React from 'react';

import './Home.scss';
import { DialogItem } from 'components';

const Home = () => (
  <section className="home">
    <div className="dialogs">
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          avatar: null,
          isOnline: true,
        }}
        unreaded={0}
      />
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          avatar: null,
          isOnline: false,
        }}
        unreaded={7}
      />
      <DialogItem
        user={{
          fullname: 'Фёдор Достоевский',
          avatar: null,
          isOnline: false,
        }}
        unreaded={13}
      />
    </div>
    {/* <Dialogs */}
    {/*   items={[ */}
    {/*     { */}
    {/*       user: { */}
    {/*         fullname: 'Фёдор Достоевский', */}
    {/*         avatar: null, */}
    {/*       }, */}
    {/*       message: { */}
    {/*         text: */}
    {/*           'Мы все свидетельствуем Вам глубочайшее  наше потение и целуем Ваши ручки, дражайший папенька: Михаила, Фёдор, Варвара и Андрюша.', */}
    {/*         isReaded: false, */}
    {/*         created_at: new Date(), */}
    {/*       }, */}
    {/*     }, */}
    {/*   ]} */}
    {/* ></Dialogs> */}
    {/* <Message */}
    {/*   avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1" */}
    {/*   text="Hello my brother how are you" */}
    {/*   date={new Date('May 10, 2020 18:00:00')} */}
    {/*   attachments={[ */}
    {/*     { */}
    {/*       filename: 'image.jpg', */}
    {/*       url: 'https://source.unsplash.com/100x100/?random=1&nature,water', */}
    {/*     }, */}
    {/*     { */}
    {/*       filename: 'image.jpg', */}
    {/*       url: 'https://source.unsplash.com/100x100/?random=2&nature,water', */}
    {/*     }, */}
    {/*     { */}
    {/*       filename: 'image.jpg', */}
    {/*       url: 'https://source.unsplash.com/100x100/?random=3&nature,water', */}
    {/*     }, */}
    {/*   ]} */}
  {/* /> */}

  {/* <Message */}
  {/*   avatar="https://sun9-70.userapi.com/c206720/v206720477/d701d/c8GI6Us7gCs.jpg?ava=1" */}
  {/*   text="Hi there what's up hello Hi there what's up hello Hi there what's up hello" */}
  {/*   date={new Date('May 10, 2020 19:20:00')} */}
  {/*   isMe={true} */}
  {/*   isReaded={false} */}
  {/* /> */}
  {/* <Message */}
  {/*   avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1" */}
  {/*   attachments={[ */}
  {/*     { */}
  {/*       filename: 'image.jpg', */}
  {/*       url: 'https://source.unsplash.com/100x100/?random=1&nature,water', */}
  {/*     }, */}
  {/*   ]} */}
  {/* /> */}
  {/* <Message avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1" isTyping /> */}
  </section>
);

export default Home;
