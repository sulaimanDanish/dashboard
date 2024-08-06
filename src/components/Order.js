import { Component } from "react";
import styled, { css } from "styled-components";

const Table = styled.table`
 border-radius: 15px;
  margin:0 10px;
  margin-top: 5px;
`
const TableRow = styled.tr`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background-color: #1d283c;
  margin:2px 0;
`;

const TableCell = styled.td`
  flex: 1; 
  text-align: center; 
  font-weight: bold;
  color: #fff;
  padding: 0.5rem;
`;

const Status = styled.div`
  border-radius: 4px;
 display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 8px;
  font-size: 12px;

  &:before {
    content: '';
    width: 4px;
    height: 4px;
    border-radius: 50%;
    margin-right: 4px;
  }

  ${(props) =>
        props.status === 'delivered' &&
        css`
      color: #2ba972;
      background-color: rgba(43, 169, 114, 0.2);
      &:before {
        background-color: #2ba972;
      }
    `}

  ${(props) =>
        props.status === 'pending' &&
        css`
      color: #EE4B2B;
      background-color: rgba(238, 75, 43, 0.2);

      &:before {
        background-color: #EE4B2B;
      }
    `}
`;

export default class Orders extends Component {
    render() {
        const { orders } = this.props;
        return (
            <>
                <Table >
                    <thead>
                        <TableRow>
                            <TableCell>
                                Customers
                            </TableCell>
                            <TableCell>
                                Order No.
                            </TableCell>
                            <TableCell>
                                Amount
                            </TableCell>
                            <TableCell>
                                Status
                            </TableCell>
                        </TableRow>
                    </thead>
                    <tbody>

                        {orders.map((element, index) => (
                                 
                            <TableRow key={index}>
                                <TableCell>
                                    {element.customer}
                                </TableCell>
                                <TableCell>
                                    {element.orderNo}
                                </TableCell>
                                <TableCell>
                                    {element.amount}
                                </TableCell>
                                <TableCell>
                                    <Status status={element.status}>
                                        {element.status}
                                    </Status>
                                </TableCell>
                            </TableRow>    
                            
                        ))}

                    </tbody>
                </Table>
            </>
        )
    }
}