import {
    Button, Card, CardBody,
    CardFooter, CardHeader, Divider,
    Input,
    Table,
    TableBody,
    TableCell,
    TableColumn,
    TableHeader,
    TableRow
} from "@nextui-org/react";
import {useCart} from "../contexts/cartContext.jsx";
import {useEffect, useState} from "react";

function Cart () {

  const { state, setQuantity, removeItemInCart } = useCart()
  const [total, setTotal] = useState(0)
  const [totalQuantity, setTotalQuantity] = useState(0)

    useEffect(() => {

        let _total = 0
        let _quantity = 0

        Object.keys(state).map(key => {
            _total += state[key].quantity * state[key].price
            _quantity += parseInt(state[key].quantity)
        })

        console.log(_quantity)

        setTotal(_total)
        setTotalQuantity(_quantity)

    }, [state]);

  return (
    <div className='container mx-auto flex flex-col items-center justify-start'>
      <h1 className='text-3xl font-semibold mt-5'>Panier</h1>

        <Table className='mt-10 mb-3'>
            <TableHeader>
                <TableColumn>Nom du produit</TableColumn>
                <TableColumn>Quantité</TableColumn>
                <TableColumn>Prix</TableColumn>
                <TableColumn></TableColumn>
            </TableHeader>
            <TableBody>
                {
                    Object.keys(state).map(key => {

                        return (

                            <TableRow key={key}>
                                <TableCell>{ state[key].name }</TableCell>
                                <TableCell>
                                    <Input
                                        className='w-fit'
                                        type="number"
                                        min='1'
                                        value={ state[key].quantity }
                                        onChange={(e) => { setQuantity(key,e.target.value) }}
                                    />
                                </TableCell>
                                <TableCell>{ state[key].quantity * state[key].price } euros</TableCell>
                                <TableCell>
                                    <div className="w-full flex justify-end">
                                        <Button
                                            color='danger'
                                            onPress={() => { removeItemInCart(key) }}
                                        >
                                            Supprimer
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>

                        )

                    })
                }
            </TableBody>
        </Table>

        <div className='flex justify-end w-full'>
            <Card className="min-w-[400px] max-w-[600px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <p className="text-md font-semibold">Récapitulatif de ma commande</p>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <p>Nombre d'article : {totalQuantity} </p>
                    <p>Prix total : {total} euros</p>
                </CardBody>
                <Divider/>
                <CardFooter>
                    <div className='flex justify-end items-end w-full'>
                        <Button color='primary'>Passer au paiement</Button>
                    </div>
                </CardFooter>
            </Card>
        </div>


    </div>
  )
}

export default Cart
