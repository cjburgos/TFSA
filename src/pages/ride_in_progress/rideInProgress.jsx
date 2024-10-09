import React, { useState, useEffect } from 'react';
import {
    Table,
    TableCell,
    TableBody,
    TableHead,
    TableRow,
  } from '@aws-amplify/ui-react';
import MetroToken from "../../assets/coins/Metro.svg";
import "./rideInProgress.css";
import { listTransactions } from "../../services/transactions";

function RideInProgress() {
    const [tableBodyRows, setTableBodyRows] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            let txns = await listTransactions();
            setTableBodyRows(txns.data?.map((txn) => {
                return (
                    <TableRow key={txn.id}>
                        <TableCell>{txn.amount}</TableCell>
                        <TableCell>{txn.from}</TableCell>
                        <TableCell>{txn.to}</TableCell>
                        <TableCell>{txn.timestamp}</TableCell>
                    </TableRow>
                );
            }));
        };

        fetchTransactions();
    }, []);
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Amount</TableCell>
                    <TableCell>From</TableCell>
                    <TableCell>To</TableCell>
                    <TableCell>Timestamp</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tableBodyRows}
            </TableBody>
        </Table>
    );
};

export {RideInProgress};