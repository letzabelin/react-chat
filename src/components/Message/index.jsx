import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Time, IconReaded } from '../';
import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';
import './Message.scss';

const Message = ({ avatar, attachments, text, audio, user, date, isMe, isReaded, isTyping }) => {
  const [isPlayingAudio, setAudioMessageStatus] = useState(false);
  const audioRef = useRef(null);

  const togglePlayAudio = () => {
    if (!isPlayingAudio) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioRef.current.volume = '0.1';
    audioRef.current.addEventListener('playing', () => {
      setAudioMessageStatus(true);
    }, false);

    audioRef.current.addEventListener('ended', () => {
      setAudioMessageStatus(false);
    }, false);

    audioRef.current.addEventListener('pause', () => {
      setAudioMessageStatus(false);
    }, false);
  }, null);

  return (
    <div
      className={cn('message', {
        'message--isme': isMe,
        'message-is-typing': isTyping,
        'message--image': attachments && attachments.length === 1,
        'message_is-audio': audio,
      })}
    >
      <div className="message__content">
        <IconReaded isMe={isMe} isReaded={isReaded} />
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.fullname}`} />
        </div>
        <div className="message__info">
          {(audio || text || isTyping) && (
            <div className="message__bubble">
              {text && <p className="message__text">{text}</p>}
              {isTyping && (
                <div className="message__typing">
                  <span />
                  <span />
                  <span />
                </div>
              )}
              {audio && (
                <div className="message__audio">
                  <audio ref={audioRef} src={audio} preload="auto" />
                  <div className="message__audio-progress" style={{ width: '40%' }} />
                  <div className="message__audio-info">
                    <div className="message__audio-btn">
                      <button onClick={togglePlayAudio}>
                        {!isPlayingAudio ? (
                          <img src={playSvg} alt="Play icon" />
                        ) : (
                          <img src={pauseSvg} alt="Pause icon" />
                        )}
                      </button>
                    </div>
                    <div className="message__audio-wave">
                      <img src={waveSvg} alt="Wave svg" />
                    </div>
                    <span className="message__audio-duration">00:19</span>
                  </div>
                </div>
              )}
            </div>
          )}
          {attachments && (
            <div className="message__attachments">
              {attachments.map(({ url, filename }) => (
                <div className="message__attachments-item">
                  <img src={url} alt={filename} />
                </div>
              ))}
            </div>
          )}
          {date && (
            <span className="message__date">
              <Time date={date} />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.object,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  audio: PropTypes.string,
};

export default Message;
