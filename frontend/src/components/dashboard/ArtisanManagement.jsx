import {
    Button,
    Table,
    TableBody, TableCell,
    TableColumn,
    TableHeader,
    TableRow,
    User
} from "@nextui-org/react";
import PropTypes from "prop-types";
import ProductsTable from "./ProductsTable.jsx";

function ArtisanManagement ({ artisan }) {

  const url = process.env.REACT_APP_IMAGES_URL + artisan?.profilePicture?.url

  return (
      <div>
          <User
              name={artisan?.name}
              description='Mon artisan lié'
              avatarProps={{
                  src: url
              }}
          />

          <ProductsTable artisanId={artisan.id} />

      </div>
  )
}

ArtisanManagement.propTypes = {
    artisan: PropTypes.object
}

export default ArtisanManagement
