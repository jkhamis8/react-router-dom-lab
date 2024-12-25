import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import './App.css'

const App = () => {
  const [mailboxes, setMilboxes] = useState([]);
  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMilboxes([...mailboxes, newBox]);
    console.log(mailboxes);
    
  };
  
  return (
    <>
      <NavBar />
      <h1>Mailboxes</h1>
      <Routes>
        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      </Routes>
    </>
  );
};

export default App;