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
import { createProduct, updateProduct } from '../../services/api.js'

function ProductForm({ disclosure, idArtisan, product = null, onUpdate = () => {} }) {
    const {isOpen, onOpen, onOpenChange} = disclosure;

    const [formData, setFormData] = useState({
        artisan : idArtisan,
        name : (product?.attributes.name) ? product.attributes.name : '',
        description : (product?.attributes.description) ? product.attributes.description : '',
        price : (product?.attributes.price) ? product.attributes.price : '',
    })

    useEffect(() => {
        setFormData({
            artisan : idArtisan,
            name : (product?.attributes.name) ? product.attributes.name : '',
            description : (product?.attributes.description) ? product.attributes.description : '',
            price : (product?.attributes.price) ? product.attributes.price : '',
        })
    }, [product, idArtisan]);

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event, onClose) => {

        let response

        if ( product ) {
             response = await updateProduct(product.id,formData)
        } else {
             response = await createProduct(formData)
        }

        if ( response.data.id ) {
            toast.success('Enregistrement réussi')

            setFormData({
                artisan: idArtisan,
                name: '',
                description: '',
                price: ''
            })

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
                            <ModalHeader className="flex flex-col gap-1">{ (product) ? 'Modifier le produit' : 'Ajouter un produit' }</ModalHeader>
                            <ModalBody>
                                <form>

                                    <Input
                                        type="text"
                                        label="Nom du produit"
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                    <Textarea
                                        className='my-3'
                                        label="Description du produit"
                                        placeholder="Enter your description"
                                        name='description'
                                        value={formData.description}
                                        onChange={handleChange}
                                    />

                                    <Input
                                        type="number"
                                        label="Prix du produit"
                                        name='price'
                                        value={formData.price}
                                        onChange={handleChange}
                                    />

                                </form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={(e) => {
                                    handleSubmit(e,onClose)
                                }}>
                                    { (product) ? 'Modifier' : 'Enregistrer' }
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

ProductForm.propTypes = {
    idArtisan: PropTypes.number,
    disclosure: PropTypes.object,
    product : PropTypes.object,
    onUpdate : PropTypes.func,
}

export default ProductForm