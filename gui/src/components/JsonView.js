import React from 'react'
import * as linkService from "../services/link.service"


class JsonView extends React.Component {
    constructor() {
        super()

        this.state = {
            linksJson: []
        };
    }

    componentDidMount() {

        linkService.readAsIs().then(data => {

            const _data = data.items.records
            console.log("Data received from server, in json format: " + JSON.parse(JSON.stringify(data)))
            this.setState({ linksJson: _data})
        }).catch(err => console.log(err))


    }

    render() {

        return (
            <div>
                <textarea value={this.state.linksJson.map(e => JSON.stringify(e))}></textarea>
            </div>

        )
    }

}

export default JsonView;