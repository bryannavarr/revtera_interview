import React from 'react'
import * as linkService from "../services/link.service"


class JsonView extends React.Component {
    constructor(props) {
        super(props)
        // const linkData = this.convertPropsToFormData(props);

        this.state = {
            linksJson: '',
            // linkData: 
        };

        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        linkService.readAsIs().then(data => {

            const _data = data.items
            console.log("Data received from server, in json format: " + JSON.parse(JSON.stringify(data)))
            this.setState({ linksJson: JSON.stringify(_data, undefined, 4) })
        }).catch(err => console.log(err))
    }

    // componentWillReceiveProps(nextProps) {
    //     const linkData = this.convertPropsToFormData(nextProps);
    //     this.setState({ linkData: linkData });
    // }

    // convertPropsToFormData(props){
    //     const linkData = props
    //     return linkData
    // }



    onSubmit() {
        const _data = JSON.parse(this.state.linksJson)
        // this.setState({ linkData: _data })
        console.log("Data being sent to backend: " + _data)
        linkService.create(_data).then(data => {
            console.log("File Written Successfull: " + JSON.stringify(data))

            this.props.onSubmit({ _data })

            // const that = this

            // this.setState(prevState => {
            //     return { ...prevState, linkData: _data }
            // })
            // that.props.onSubmit({ ..._data })

        })

    }

    handleChange(e) {
        // this.setState((prevState) => { linksJson: e.target.value })
        this.setState({ linksJson: e.target.value })
        // this.setState({ linkData: e.target.value })
        console.log(e.target)
    }



    render() {
        const prettifyJson = this.state.linksJson
        return (
            <div className="row">
                <div className="column right">

                    <textarea type="text"
                        value={prettifyJson}
                        // value={this.state.linksJson.map(e => JSON.stringify(e))} 
                        onChange={e => this.handleChange(e)}></textarea>
                    <button onClick={this.onSubmit} type="button" className="submitBtn">Submit</button>

                </div>
            </div>


        )
    }

}

export default JsonView;