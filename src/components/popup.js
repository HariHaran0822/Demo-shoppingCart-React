import React, {useState} from 'react';
import Modal from 'react-modal';
import Mainpage from './mainpage';


const Pop= ()=>{

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }

    return(
        <>
            <button onClick={setModalIsOpenToTrue}>Click to Open Modal</button>

            <Modal isOpen={modalIsOpen}>
                {/* <button onClick={setModalIsOpenToFalse}>x</button> */}
               <Mainpage/>
            </Modal>
        </>
    )
}
export default Pop;
