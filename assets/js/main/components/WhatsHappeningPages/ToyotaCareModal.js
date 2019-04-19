import React from "react";
import Modal from "react-modal";

class ToyotaCareModal extends React.Component{

  componentDidMount(){
    Modal.setAppElement("body");
  };


  render(){
 
    const { toyotaCareModal, closeModal } = this.props;

    return(

      <Modal className="toyotacare-modal" isOpen={toyotaCareModal} onRequestClose={closeModal}>
        <div className="toyotacare-header">
          <p className="toyotacare-header--text">ToyotaCare</p>
          <button className="toyotacare-header--close" onClick={closeModal}>X</button>
        </div>
          <iframe title="toyotacare" className="toyotacare-iframe" src="https://www.youtube.com/embed/lBYbcOn7kiY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
   

    )
  }
}




export default ToyotaCareModal;