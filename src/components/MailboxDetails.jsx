
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

  
  const { mailboxId } = useParams();
const selectedBox = props.mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
);
console.log(selectedBox);

return (
  <>
    <h2>MailBox {selectedBox._id}</h2>
    <h3>Details</h3>
    <dl>
      <dt>boxholder: {selectedBox.boxholder}</dt>
      <dt>Box Size:{selectedBox.boxsize}</dt>
    </dl>
  </>
);
};

export default MailboxDetails;