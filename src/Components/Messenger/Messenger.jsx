import React from "react";
import Messeg from "/public/icon/messeg.png";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import "./Messenger.css";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  function sendMessage() {
    let message = document.getElementById("name").value;
    let token = "7026409481:AAF6G4rCnn4PKDW4rB0FBZPDN24QESU45sA";
    let chat_id = "6732097383";
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage();
    onClose();
  }

  return (
    <>
      <img className="btnModals" onClick={onOpen} ref={btnRef} src={Messeg} alt="" />

      <Drawer
        className="opens"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent className="opens">
          <DrawerCloseButton className="btnX" />
          <DrawerHeader className="textCreate">
            You can leave us a message.
          </DrawerHeader>

          <DrawerBody className="inModalleft w-11/12">
            <input
              type="text"
              placeholder="Type here"
              id="name"
              className="input input-bordered input-info w-full max-w-xs"
            />
          </DrawerBody>

          <DrawerFooter className="savClose">
            <button className="btn btn-outline btn-error" onClick={onClose}>
              Error
            </button>
            <button
              className="btn btn-outline btn-success"
              onClick={handleSubmit}
            >
              Save
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
