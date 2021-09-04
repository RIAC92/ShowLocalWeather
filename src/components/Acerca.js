import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
export default function Acerca(props) {
    return (
        <Modal show={props.show} onHide={props.onHide}>
                    <Modal.Header>
                        <Modal.Title>About it</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <p>This is a small project that I have done to add to my portfolio,
                     following the guidelines specified in the <a href="https://www.freecodecamp.org/learn/coding-interview-prep/take-home-projects/show-the-local-weather" target="_blank"  rel="noreferrer" >FreeCodeCamp</a> project.</p>
                     <p>The frontend was built in the ReactJS library, you can find the source code in my <a href="https://github.com/RIAC92" target="_blank"  rel="noreferrer" >GitHub</a> account, if you want to contact me I leave my email <a href="mailto:rivan.ac92@gmail.com">here</a></p>
                        
                        <p>Thank you...</p>
                     <p className="text-center"><i>Ramon Ivan Aquino</i></p>   
                    </Modal.Body>
                    <Modal.Footer>
                  
                     <span className="text-muted">*note: no image is of my authorship and / or my property</span>
                        
                        <Button
                            variant="danger"
                            onClick={props.onHide}
                        >close</Button>
                     
                    </Modal.Footer>

                </Modal>
    )
}
