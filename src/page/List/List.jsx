import React, { useEffect, useState } from "react";
import './list.css';

export default function List() {
    const [data, setData] = useState([]);
    const [rsname, setRsname] = useState("");

    useEffect(() => {
        let list = sessionStorage.getItem("list");
        if (!list) {
            list = [];
        } else {
            list = JSON.parse(list);
        }
        setData(list);
    }, []);

    const vipClient = ['Galym', 'Baxa', 'Dias'];

    const handleRemove = () => {
        const tmp = JSON.parse(sessionStorage.getItem("list"));

        const updatedList = tmp.filter(item => item.name !== rsname);

        sessionStorage.setItem("list", JSON.stringify(updatedList));
        setData(updatedList);
        setRsname("");
    };

    return (
        <body>
            <div className="list-main">
                <div className="list-array">
                    <table>
                        <tr>
                            <th className="th1">number</th>
                            <th className="th1">Name</th>
                            <th className="th1">Surname</th>
                            <th className="th1">Phone</th>
                        </tr>
                    </table>
                    <div className="delete">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={rsname}
                            onChange={(e) => setRsname(e.target.value)}
                        />
                        <button className="delete__btn" onClick={handleRemove}>
                            Delete
                        </button>
                    </div>
                </div>
                {data.map(({ name, surname, phone }, index) => (
                    <div key={index} className="list-base">
                        <table>
                            <tr>
                                <td className="td1" style={{ backgroundColor: vipClient.includes(name) ? "red" : "black",
                                }}>{index + 1}</td>
                                <td className="td1" style={{backgroundColor: vipClient.includes(name) ? "red" : "black",
                                }}>{name}</td>
                                <td className="td1" style={{backgroundColor: vipClient.includes(name) ? "red" : "black",
                                }}>{surname}</td>
                                <td className="td1" style={{backgroundColor: vipClient.includes(name) ? "red" : "black",
                                }}>{phone}</td>
                            </tr>
                        </table>
                    </div>
                ))}
            </div>
        </body>
    );
}


