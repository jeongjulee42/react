import React from 'react';

export default function AppWrap() {
    return (
        <div>
            <Navbar />
        </div>
    );
}

function Navbar(){
    return (
        <header style={{backgroundColor: 'yellow'}}>
            <Avatar
                image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
                name='bob'
                size={200}
                />
        </header>
    );
}

