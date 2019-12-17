import React from "react";
import * as linkService from "../services/link.service";
import JsonView from "./JsonView"

class LinkList extends React.Component {
    constructor() {
        super()

        this.state = {
            linkList: [],
            isJsonView: false,
            isListView: true,
            viewBtnClicked: false

        };

        this.showJson = this.showJson.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {

        linkService.readAll().then(data => {
            const _data = data.items.records[0].nodes
            // console.log("records: " + _data)
            const trimList = _data.map(function (field) {
                // console.log("Field: " + field[1])
                const name = field.fullname.split("/")[2] + "/";
                // console.log(name)
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
    }

    onSubmit(updatedJson) {
        console.log("updatedJson: " + JSON.stringify(updatedJson))
        const data = updatedJson._data.records[0].nodes
        const trimList = data.map(function (field) {
            // console.log("Field: " + field[1])
            const name = field.fullname.split("/")[2] + "/";
            // console.log(name)
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
        // this.setState(prevState => ({ linkList: prevState.linkList.concat(updatedJson) }))
        this.setState({ linkList: trimList })
    }


    showJson() {
        this.setState(prevState => ({ viewBtnClicked: !prevState.viewBtnClicked }))
        this.setState(prevState => ({ isListView: !prevState.isListView }))
        // this.setState({ isListView: false })

    }

    render() {
        // const { isJsonView } = this.state.isJsonView
        // const { isListView } = this.state.isListView;
        const links =

            this.state.linkList ? (
                this.state.linkList.map((link, index) => (
                    <tr key={index}>
                        <td>{`${link.name}`}</td>
                        <td>{`${link.url} `}</td>
                        <td>{` ${link.size}`}</td>
                        <td>{` ${link.type}`}</td>
                    </tr >
                ))
            ) : (<span>NOTHING HERE</span>)

        return (
            <div className="row">
                <div className="column right">
                    <div>
                        <h2>Web Browser Detail</h2>
                        <div className="btnGroup">
                            <button type="button" onClick={this.showJson} className="jsonBtn">{`${this.state.viewBtnClicked ? "List View" : "Tree View"}`}</button>
                        </div>


                    </div>


                    {this.state.isListView ?
                        <div className="tableDiv">
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>URL</td>
                                        <td>Size</td>
                                        <td>Type</td>
                                    </tr>
                                </thead>
                                <tbody>{links}</tbody>
                            </table></div> :

                        <JsonView onSubmit={this.onSubmit} listJson={this.state.listJson} linkData={this.state.linkData} />

                    }

                </div>
            </div>

        )
    }


}

export default LinkList;