import React from 'react';

import './Home.scss';
import { Dialogs, Message } from 'components';

const Home = () => (
  <section className="home">
    <Dialogs
      userId={0}
      dialogs={[
        {
          _id: Math.random(),
          text:
            'Мы все свидетельствуем Вам глубочайшее  наше потение и целуем Ваши ручки, дражайший папенька: Михаила, Фёдор, Варвара и Андрюша.',
          created_at: new Date(2020, 9, 22),
          user: {
            fullname: 'Фёдор Достоевский',
            avatar: 'https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1',
            _id: 1,
          },
        },
        {
          _id: Math.random(),
          text: 'Hi, how are you?',
          created_at: new Date(),
          user: {
            fullname: 'John Doe',
            avatar: 'https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1',
            _id: 0,
          },
        },
      ]}
    />

    <Message
      avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
      date={new Date('May 10, 2020 18:00:00')}
      audio="https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
    />

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
