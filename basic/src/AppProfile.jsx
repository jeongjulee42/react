import './App.css';
import Avartar from './components/Avartar';
import Profile from './components/Profile';

function AppProfile() {

  return (
    <>
    <button onClick={(event) => {
      alert('Click!')
    }}>버튼</button>
    <Avartar image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
      isNew={true}/>
        
      <Profile
        image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
        name='Jamez'
        title='Front End'
      ></Profile>
      <Profile
        image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
        name='Susan'
        title='Back End'
        isNew={false}
      ></Profile>
    </>
  );
}

export default AppProfile;
