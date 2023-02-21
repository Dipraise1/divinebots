import { useState } from 'react';
import styles from './styles.module.scss';

const TwitterHandlePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [twitterHandle, setTwitterHandle] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className={styles.container}>
      <button onClick={() => setIsOpen(true)}>Enter Twitter Handle</button>
      {isOpen && (
        <div className="overlay">
          <div className="popup">
            <form onSubmit={handleSubmit}>
              <label>
                Twitter Handle:
                <input
                  type="text"
                  value={twitterHandle}
                  onChange={(e) => setTwitterHandle(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TwitterHandlePopup;
