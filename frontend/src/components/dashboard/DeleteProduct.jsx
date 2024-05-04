import React, {useEffect, useState} from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input, Textarea
} from "@nextui-org/react";
import {toast} from "react-toastify";
import PropTypes from "prop-types";
import { deleteProduct } from '../../services/api.js'

function DeleteProduct({ disclosure, idProduct, onUpdate = () => {} }) {
    const {isOpen, onOpen, onOpenChange} = disclosure;

    const handleSubmit = async (event, onClose) => {

        const response = await deleteProduct(idProduct)

        if ( response.data.id ) {
            toast.success('Enregistrement réussi')
            onUpdate()
            onClose()
            return;
        }

        toast.error('Une erreur est survenue')

    }

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Supprimer le produit</ModalHeader>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={(e) => {
                                    handleSubmit(e,onClose)
                                }}>
                                    Supprimer
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

DeleteProduct.propTypes = {
    disclosure: PropTypes.object,
    idProduct : PropTypes.object,
    onUpdate : PropTypes.func,
}

export default DeleteProduct