import React, { useState, useEffect } from 'react'
import MaterialTable from 'material-table'
import { csv } from 'd3'
import Supermarket from './supermarket.csv'

const Table2 = () => {

    const [interdata, setInterData] = useState([])

    useEffect(() => {
        csv(Supermarket).then(value => {
            setInterData(value)
            console.log(value)
        })
    }, [])


    const columns = [
        { title: 'Branch', field: 'Branch' },
        { title: 'City', field: 'City' },
        { title: 'Customer type', field: 'Customer_type' },
        { title: 'Date', field: 'Date' },
        { title: 'Gender', field: 'Gender' },
        { title: 'Payment', field: 'Payment' },
        { title: 'Product line', field: 'Product_line' },
        { title: 'Quantity', field: 'Quantity' },
        { title: 'Rating', field: 'Rating' },
        { title: 'Tax 5%', field: 'Tax_5%' },
        { title: 'Time', field: 'Time' },
        { title: 'Total', field: 'Total' },
        { title: 'Unit Price', field: 'Unit_price' },
        { title: 'cogs', field: 'cogs' },
        { title: 'gross income', field: 'gross_income' },
        { title: 'gross margin percentage', field: 'gross_margin_percentage' }
    ]

    return (
        <>
            <MaterialTable title="SuperMarket Sales"
                data={interdata}
                columns={columns}
                options={{
                    filtering: true
                }}
                editable={{
                    onRowDelete: selectedRow => new Promise((resolve, reject) => {
                        const index = selectedRow.tableData.id;
                        const updatedRows = [...interdata]
                        updatedRows.splice(index, 1)
                        setTimeout(() => {
                            setInterData(updatedRows)
                            resolve()
                        }, 2000)
                    }),
                    onRowUpdate: (updatedRow, oldRow) => new Promise((resolve, reject) => {
                        const index = oldRow.tableData.id;
                        const updatedRows = [...interdata]
                        updatedRows[index] = updatedRow
                        setTimeout(() => {
                            setInterData(updatedRows)
                            resolve()
                        }, 2000)
                    })


                }}
            />
        </>
    )
}

export default Table2
