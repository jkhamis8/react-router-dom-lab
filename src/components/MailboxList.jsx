import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <>
      <h2>MailBox List</h2>
      <ul>
        {props.mailboxes.map((mailbox) => (
          <li className="mail-box" key={mailbox._id}>
            <Link to={`/mailboxes/${mailbox._id}`}>
              MailBox {mailbox._id}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
