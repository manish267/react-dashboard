import React from 'react';
import './WidgetLg.css';

const WidgetLg = () => {

    const Button=({type})=>{
        return <button className={"widgetLgButton " +type}>{type}</button>

    }
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="userAvtar" className="widgetLgImg" />
                        <span className="widgetLgName">Manish Yadav</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$122.23</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="userAvtar" className="widgetLgImg" />
                        <span className="widgetLgName">Manish Yadav</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$122.23</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="userAvtar" className="widgetLgImg" />
                        <span className="widgetLgName">Manish Yadav</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$122.23</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="userAvtar" className="widgetLgImg" />
                        <span className="widgetLgName">Manish Yadav</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$122.23</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="userAvtar" className="widgetLgImg" />
                        <span className="widgetLgName">Manish Yadav</span>
                    </td>
                    <td className="widgetLgDate">2 Dec 2021</td>
                    <td className="widgetLgAmount">$122.23</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                
               
            </table>
        </div>
    )
}

export default WidgetLg;
