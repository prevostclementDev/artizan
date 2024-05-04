import {
    Button,
    Table,
    TableBody, TableCell,
    TableColumn,
    TableHeader,
    TableRow, useDisclosure,
} from "@nextui-org/react";
import PropTypes from "prop-types";
import { getProductsForArtisan } from '../../services/api.js'
import React, {useEffect, useState} from "react";
import ProductForm from "./ProductForm.jsx";
import DeleteProduct from "./DeleteProduct.jsx";

function ProductsTable ({ artisanId }) {

    const [products, setProducts] = useState([])
    const [reload,setReload] = useState(false)
    const [productSelected,setProductSelected] = useState({})

    const disclosure = useDisclosure();
    const disclosureDelete = useDisclosure();

    useEffect(() => {

        const getData = async () => {
            const _response = await getProductsForArtisan(artisanId)
            setProducts(_response.data)
        }

        getData()

    }, [artisanId, reload])

    const onFormIsUpdate = () => {
        setReload(! reload)
        setProductSelected({})
    }

  return (
      <div>
          <div className='flex gap-4 mt-10 mb-0'>
              <h2 className='text-2xl'>Vos produits</h2>
              <Button color='primary' onPress={() => {
                  setProductSelected({})
                  disclosure.onOpen()
              }} >Ajouter</Button>
          </div>

          <Table className='my-5'>
              <TableHeader>
                  <TableColumn>
                      Nom du produit
                  </TableColumn>
                  <TableColumn>
                      Déscription
                  </TableColumn>
                  <TableColumn>
                      Prix du produit
                  </TableColumn>
                  <TableColumn>
                      Action
                  </TableColumn>
              </TableHeader>
              <TableBody>
                  {
                      products.map(el => {
                          return (
                              <TableRow key={el.id}>
                                  <TableCell>{ el.attributes.name }</TableCell>
                                  <TableCell>{ el.attributes.description.substring(0,100) }...</TableCell>
                                  <TableCell>{ el.attributes.price } euros</TableCell>
                                  <TableCell className='flex gap-3 justify-end'>
                                      <Button color='warning' onPress={() => {
                                          setProductSelected(el)
                                          disclosure.onOpen()
                                      }}>
                                          Modifier
                                      </Button>
                                      <Button color='danger' onPress={() => {
                                          setProductSelected(el)
                                          disclosureDelete.onOpen()
                                      }}>
                                          Supprimer
                                      </Button>
                                  </TableCell>
                              </TableRow>
                          )
                      })
                  }
              </TableBody>
          </Table>

          {
              (productSelected.id) ? <DeleteProduct disclosure={disclosureDelete} onUpdate={onFormIsUpdate} idProduct={productSelected.id} /> : ''
          }

          {
              (artisanId) ? <ProductForm disclosure={disclosure} idArtisan={artisanId} onUpdate={onFormIsUpdate} product={ (productSelected.id) ? productSelected : null } /> : ''
          }


      </div>
  )
}

ProductsTable.propTypes = {
    artisanId: PropTypes.number
}


export default ProductsTable
