import React from "react";
import * as linkService from "../services/link.service";


class LinkList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            linkList: []
    
        };
    }

    componentDidMount() {

        linkService.readAll().then(data => {
            const array = [];

            const _data = data.items.records[0].nodes
            // array.push(_data)
            console.log("records: " + _data)

            const trimList = _data.map(function (field) {
                console.log("Field: " + field[1])
                const name = field.fullname.split("/")[2] +"/";
                console.log(name)
                const url = field.fullname.split("com/")[1]

                return (
                    {
                        // id: field.id,
                        size: field.size,
                        name: name,
                        url: url,
                        type: field.type
                    }
                )
            })
            console.log(trimList)
            this.setState({ linkList: trimList })

        }).catch(err => console.log(err))
        // trimArray();
    }


    // trimArray() {
    //     const trimList = this.state.linkList.map(function (field) {
    //         const name = field.fullname.split("watch")[0];
    //         console.log(name)
    //         const url = field.fullname.split("com/")[1]

    //         return (
    //             {
    //                 // id: field.id,
    //                 size: field.size,
    //                 name: name,
    //                 url: url,
    //                 type: field.type
    //             }
    //         )

    //     })
    //     console.log(trimList)
    //     this.setState({ trimmedList: trimList })
    // }


    render() {

        const links =

            this.state.linkList ? (
                this.state.linkList.map((link, index) => (
                    <tbody key={index}>
                        <tr>
                            <td>{`${link.name}`}</td>
                            <td>{`${link.url} `}</td>
                            <td>{` ${link.size}`}</td>
                            <td>{` ${link.type}`}</td>

                        </tr >
                    </tbody>
                ))
            ) : (<span>NOTHING HERE</span>)

        return (
            <div className="row">
                <div className="column right">
                    <h2>Web Browser Detail</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>URL</th>
                                <th>Size</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        {links}
                    </table>
                </div>
            </div>

        )
    }


}

export default LinkList;