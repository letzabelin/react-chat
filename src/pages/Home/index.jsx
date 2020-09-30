import React from 'react';

import './Home.scss';
import { Message } from 'components';

const Home = () => (
  <section className="home">
    <Message
      avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
      text="Hello my brother how are you"
      date={new Date('May 10, 2020 18:00:00')}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2&nature,water',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3&nature,water',
        },
      ]}
    />

    <Message
      avatar="https://sun9-70.userapi.com/c206720/v206720477/d701d/c8GI6Us7gCs.jpg?ava=1"
      text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
      date={new Date('May 10, 2020 19:20:00')}
      isMe={true}
      isReaded={false}
    />
  </section>
);

export default Home;
