import React from 'react';
import { Input, Button } from 'antd';
import { TeamOutlined, FormOutlined, EllipsisOutlined } from '@ant-design/icons';

import './Home.scss';
import { Dialogs, Message, Status, ChatInput } from 'components';

const Home = () => (
  <section className="home">
    <div className="chat">
      <div className="chat__sidebar">
        <div className="chat__sidebar-header">
          <div>
            <TeamOutlined />
            <span>Список диалогов</span>
          </div>
          <Button type="link" shape="circle" icon={<FormOutlined />} />
        </div>

        <div className="chat__sidebar-search">
          <Input.Search placeholder="Поиск среди контактов" onSearch={(value) => console.log(value)} />
        </div>

        <div className="chat__sidebar-dialogs">
          <Dialogs
            userId={0}
            dialogs={[
              {
                _id: '8ab0e27d6732319804a9af742491a387',
                text:
                  'Quis esse laboris velit laboris ullamco. Dolore laborum dolor commodo excepteur id ex do mollit sit incididunt aliquip velit officia. Reprehenderit pariatur excepteur aliquip tempor et.',
                created_at: new Date(2020, 9, 24),
                user: {
                  _id: '8ab0e27d6732319804a9af742491a387',
                  fullname: 'Peterson Albert',
                  avatar: null,
                },
              },
              {
                _id: '6d8b646a9ffd8e2aaeecd59cb71aa66d',
                text:
                  'Esse aute tempor sunt et nisi in dolore consequat exercitation id qui. Sunt sit amet duis sint commodo aliquip. Dolore officia quis sint aliquip sint dolor.',
                created_at: new Date(2020, 4, 4),
                user: {
                  _id: '6d8b646a9ffd8e2aaeecd59cb71aa66d',
                  fullname: 'Munoz Michael',
                  avatar: null,
                },
              },
              {
                _id: '754361545be23b4d7a295e90a4147d84',
                text:
                  'Nostrud tempor ex labore esse est dolor aliqua dolore commodo voluptate enim mollit aliquip. Ex dolor est proident excepteur occaecat. Anim nisi qui nisi anim est in duis dolore ipsum officia excepteur exercitation.',
                created_at: new Date(2020, 9, 10),
                user: {
                  _id: '754361545be23b4d7a295e90a4147d84',
                  fullname: 'Winnie Martinez',
                  avatar: null,
                },
              },
              {
                _id: '83530efae9812d06dd307ad72743f9e0',
                text:
                  'Eu non ut aute velit ullamco. Minim aliquip pariatur deserunt commodo non consequat eiusmod reprehenderit aute. Lorem consectetur aliqua tempor eiusmod duis velit irure consequat.',
                created_at: new Date(2020, 6, 3),
                user: {
                  _id: '83530efae9812d06dd307ad72743f9e0',
                  fullname: 'Sheppard Macdonald',
                  avatar: null,
                },
              },
              {
                _id: 'df218d32b6c1e55cab84c209710791e1',
                text:
                  'Aute nisi reprehenderit incididunt ut fugiat ipsum deserunt. Dolore adipisicing mollit reprehenderit labore do. Nostrud sint occaecat nulla id magna Lorem eiusmod amet deserunt adipisicing.',
                created_at: new Date(2020, 2, 2),
                user: {
                  _id: 'df218d32b6c1e55cab84c209710791e1',
                  fullname: 'Kellie Church',
                  avatar: null,
                },
              },
              {
                _id: '154d7072fd555c3ced5e4ddbe3a9ef85',
                text:
                  'Velit excepteur nostrud deserunt aliquip tempor eiusmod ad Lorem cupidatat veniam aliqua consectetur ut aliqua. Qui et deserunt occaecat velit nulla exercitation aliquip aliquip sint ad reprehenderit. Commodo excepteur sit mollit ex eu irure esse culpa laboris mollit aliquip elit ut consequat.',
                created_at: new Date(2020, 9, 11),
                user: {
                  _id: '154d7072fd555c3ced5e4ddbe3a9ef85',
                  fullname: 'Latisha Bates',
                  avatar: null,
                },
              },
              {
                _id: 'b71db8cf8be1291822d456b31023379b',
                text:
                  'Aute ea exercitation est elit cillum dolore minim sint est. Eiusmod labore quis ut veniam tempor cupidatat ea sit esse incididunt. Do non ipsum irure enim officia nostrud labore veniam fugiat amet et fugiat ad quis.',
                created_at: new Date(2020, 5, 5),
                user: {
                  _id: 'b71db8cf8be1291822d456b31023379b',
                  fullname: 'Mcmahon Francis',
                  avatar: null,
                },
              },
              {
                _id: '29e14b8f873037612db3c398ef3cc0a9',
                text:
                  'Ut culpa sunt nostrud id sunt incididunt officia incididunt elit reprehenderit fugiat aute. Occaecat velit proident non magna irure minim non deserunt ex incididunt amet. Ea velit nostrud in labore dolore ut pariatur nisi officia.',
                created_at: new Date(2020, 7, 7),
                user: {
                  _id: '29e14b8f873037612db3c398ef3cc0a9',
                  fullname: 'Kathie Hahn',
                  avatar: null,
                },
              },
              {
                _id: '8f46576cd6753455d449237cb557f97a',
                text:
                  'Velit non enim pariatur cillum proident. Incididunt mollit mollit duis irure esse magna Lorem voluptate et Lorem in. Laborum minim laborum culpa pariatur qui consequat elit officia officia proident esse elit ea ipsum.',
                created_at: new Date(2020, 9, 2),
                user: {
                  _id: '8f46576cd6753455d449237cb557f97a',
                  fullname: 'Herman Wheeler',
                  avatar: null,
                },
              },
              {
                _id: 'afd005f8c5be30b7abd3f9339f14d653',
                text:
                  'Ex aliquip eiusmod aliqua ea fugiat et cupidatat cupidatat laborum ad. Velit ad fugiat ea eu dolor commodo duis do sit Lorem anim veniam eu. Aliqua excepteur ullamco est esse Lorem commodo nostrud.',
                created_at: new Date(2020, 3, 3),
                user: {
                  _id: 'afd005f8c5be30b7abd3f9339f14d653',
                  fullname: 'Saunders Mccormick',
                  avatar: null,
                },
              },
            ]}
          />
        </div>
      </div>
      <div className="chat__dialog">
        <div className="chat__dialog-header">
          <div />
          <div className="chat__dialog-header-center">
            <b className="chat__dialog-header-username">John Doe</b>

            <div className="chat__dialog-header-status">
              <Status online />
            </div>
          </div>

          <Button type="link" shape="circle" icon={<EllipsisOutlined style={{ fontSize: '22px' }} />} />
        </div>

        <div class="chat__dialog-messages">
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            date={new Date('May 10, 2020 18:00:00')}
            audio="https://notificationsounds.com/storage/sounds/file-de_vuvuzela-power-down.mp3"
          />
          <Message
            avatar="https://sun9-70.userapi.com/c206720/v206720477/d701d/c8GI6Us7gCs.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
            isMe={true}
            isReaded={false}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
            attachments={[
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
              },
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
              },
              {
                filename: 'image.jpg',
                url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
              },
            ]}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
          <Message
            avatar="https://sun9-27.userapi.com/c857320/v857320608/146724/5n4o6A6TPsU.jpg?ava=1"
            text="Hi there what's up hello Hi there what's up hello Hi there what's up hello"
            date={new Date('May 10, 2020 19:20:00')}
          />
        </div>

        <div class="chat__dialog-input">
          <ChatInput />
        </div>
      </div>
    </div>
  </section>
);

export default Home;
