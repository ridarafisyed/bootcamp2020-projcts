import React , { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
        <li className={transaction.isIncome === "y" ? "list-group-item border-green":"list-group-item border-red"}>
            
            {transaction.source} : {transaction.isIncome ==="y"? " +" : " -"}
            {transaction.transaction}
            <button className="btn btn-danger float-right"
            onClick={() => deleteTransaction(transaction.id)} aria-label="Delete">
                <i className="fa fa-times"></i>
            </button>
        </li>
    )
}
